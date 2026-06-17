import { getCloudflareContext } from "@opennextjs/cloudflare";

export const dynamic = "force-dynamic";

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ key: string[] }> },
) {
  const { key } = await params;
  const objectKey = key.join("/");

  const { env } = await getCloudflareContext({ async: true });
  const obj = await env.MEDIA_KV.getWithMetadata(objectKey, "arrayBuffer");
  if (!obj || obj.value === null) {
    return new Response("Not found", { status: 404 });
  }

  const metadata = obj.metadata as { contentType?: string } | null;
  const contentType = metadata?.contentType ?? "application/octet-stream";

  return new Response(obj.value, {
    headers: {
      "Content-Type": contentType,
      "Cache-Control": "public, max-age=31536000, immutable",
    },
  });
}
