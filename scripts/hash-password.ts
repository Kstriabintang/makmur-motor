// Generates a PBKDF2-SHA256 hash for the admin password, matching lib/auth.ts.
// Usage: node scripts/hash-password.ts "your-password"

async function main() {
  const password = process.argv[2];
  if (!password) {
    console.error('Usage: node scripts/hash-password.ts "your-password"');
    process.exit(1);
  }
  const ITER = 100_000;
  const enc = new TextEncoder();
  const salt = crypto.getRandomValues(new Uint8Array(16));
  const key = await crypto.subtle.importKey(
    "raw",
    enc.encode(password),
    "PBKDF2",
    false,
    ["deriveBits"],
  );
  const bits = await crypto.subtle.deriveBits(
    { name: "PBKDF2", salt, iterations: ITER, hash: "SHA-256" },
    key,
    256,
  );
  const toHex = (b: ArrayBuffer | Uint8Array) =>
    [...new Uint8Array(b instanceof Uint8Array ? b.buffer : b)]
      .map((x) => x.toString(16).padStart(2, "0"))
      .join("");
  console.log(`pbkdf2$${ITER}$${toHex(salt.buffer)}$${toHex(bits)}`);
}

main();
