import { getCloudflareContext } from "@opennextjs/cloudflare";

export const SESSION_COOKIE = "mm_session";
const SESSION_TTL_SECONDS = 60 * 60 * 24 * 7; // 7 days
const PBKDF2_ITERATIONS = 100_000;

const encoder = new TextEncoder();

// ── encoding helpers ───────────────────────────────────────────────────────

function toHex(buf: ArrayBufferLike): string {
  return [...new Uint8Array(buf)]
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

function fromHex(hex: string): Uint8Array {
  const out = new Uint8Array(hex.length / 2);
  for (let i = 0; i < out.length; i++) {
    out[i] = parseInt(hex.slice(i * 2, i * 2 + 2), 16);
  }
  return out;
}

function b64url(bytes: Uint8Array): string {
  let bin = "";
  for (const b of bytes) bin += String.fromCharCode(b);
  return btoa(bin).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

function b64urlEncodeStr(str: string): string {
  return b64url(encoder.encode(str));
}

function b64urlDecodeToStr(s: string): string {
  const b64 = s.replace(/-/g, "+").replace(/_/g, "/");
  const bin = atob(b64);
  const bytes = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i);
  return new TextDecoder().decode(bytes);
}

function timingSafeEqual(a: string, b: string): boolean {
  if (a.length !== b.length) return false;
  let mismatch = 0;
  for (let i = 0; i < a.length; i++) mismatch |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return mismatch === 0;
}

// ── password hashing (PBKDF2-SHA256) ───────────────────────────────────────

async function pbkdf2(password: string, salt: Uint8Array, iterations: number) {
  const key = await crypto.subtle.importKey(
    "raw",
    encoder.encode(password) as BufferSource,
    "PBKDF2",
    false,
    ["deriveBits"],
  );
  return crypto.subtle.deriveBits(
    { name: "PBKDF2", salt: salt as BufferSource, iterations, hash: "SHA-256" },
    key,
    256,
  );
}

export async function hashPassword(password: string): Promise<string> {
  const salt = crypto.getRandomValues(new Uint8Array(16));
  const bits = await pbkdf2(password, salt, PBKDF2_ITERATIONS);
  return `pbkdf2$${PBKDF2_ITERATIONS}$${toHex(salt.buffer)}$${toHex(bits)}`;
}

export async function verifyPassword(
  password: string,
  stored: string,
): Promise<boolean> {
  const parts = stored.split("$");
  if (parts.length !== 4 || parts[0] !== "pbkdf2") return false;
  const iterations = parseInt(parts[1], 10);
  const salt = fromHex(parts[2]);
  const bits = await pbkdf2(password, salt, iterations);
  return timingSafeEqual(toHex(bits), parts[3]);
}

// ── session tokens (HMAC-SHA256) ───────────────────────────────────────────

async function hmac(secret: string, data: string): Promise<ArrayBuffer> {
  const key = await crypto.subtle.importKey(
    "raw",
    encoder.encode(secret) as BufferSource,
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"],
  );
  return crypto.subtle.sign("HMAC", key, encoder.encode(data) as BufferSource);
}

export async function createSessionToken(
  username: string,
  secret: string,
): Promise<string> {
  const payload = JSON.stringify({
    u: username,
    exp: Math.floor(Date.now() / 1000) + SESSION_TTL_SECONDS,
  });
  const p = b64urlEncodeStr(payload);
  const sig = b64url(new Uint8Array(await hmac(secret, p)));
  return `${p}.${sig}`;
}

export async function verifySessionToken(
  token: string,
  secret: string,
): Promise<{ username: string } | null> {
  const [p, sig] = token.split(".");
  if (!p || !sig) return null;
  const expected = b64url(new Uint8Array(await hmac(secret, p)));
  if (!timingSafeEqual(sig, expected)) return null;
  try {
    const payload = JSON.parse(b64urlDecodeToStr(p)) as { u: string; exp: number };
    if (typeof payload.exp !== "number" || payload.exp < Math.floor(Date.now() / 1000)) {
      return null;
    }
    return { username: payload.u };
  } catch {
    return null;
  }
}

export const SESSION_MAX_AGE = SESSION_TTL_SECONDS;

// ── env access ─────────────────────────────────────────────────────────────

export async function getAuthEnv() {
  const { env } = await getCloudflareContext({ async: true });
  return {
    username: env.ADMIN_USERNAME,
    passwordHash: env.ADMIN_PASSWORD_HASH,
    sessionSecret: env.SESSION_SECRET,
  };
}

/** Validate an admin login attempt. Returns a signed session token on success. */
export async function login(
  username: string,
  password: string,
): Promise<string | null> {
  const { username: u, passwordHash, sessionSecret } = await getAuthEnv();
  if (!u || !passwordHash || !sessionSecret) return null;
  if (username !== u) return null;
  if (!(await verifyPassword(password, passwordHash))) return null;
  return createSessionToken(username, sessionSecret);
}

/** Read + verify the session from the request cookies (server components / routes). */
export async function getSession(): Promise<{ username: string } | null> {
  const { cookies } = await import("next/headers");
  const token = (await cookies()).get(SESSION_COOKIE)?.value;
  if (!token) return null;
  const { sessionSecret } = await getAuthEnv();
  if (!sessionSecret) return null;
  return verifySessionToken(token, sessionSecret);
}
