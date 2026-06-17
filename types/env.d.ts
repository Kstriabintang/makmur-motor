// Augments the wrangler-generated CloudflareEnv (cloudflare-env.d.ts) with the
// admin secrets, which are set via `wrangler secret put` / `.dev.vars` and are
// therefore not part of the bindings in wrangler.jsonc.
interface CloudflareEnv {
  ADMIN_USERNAME: string;
  ADMIN_PASSWORD_HASH: string;
  SESSION_SECRET: string;
}
