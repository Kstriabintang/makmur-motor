import { drizzle } from "drizzle-orm/d1";
import { getCloudflareContext } from "@opennextjs/cloudflare";
import * as schema from "./schema";

/**
 * Returns a Drizzle client bound to the D1 database. Uses the async form of
 * `getCloudflareContext` so it works in every server context (route handlers,
 * server components, `generateMetadata`).
 */
export async function getDb() {
  const { env } = await getCloudflareContext({ async: true });
  return drizzle(env.DB, { schema });
}
