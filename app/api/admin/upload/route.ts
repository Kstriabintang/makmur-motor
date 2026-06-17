import { NextResponse } from "next/server";
import { getCloudflareContext } from "@opennextjs/cloudflare";

export const dynamic = "force-dynamic";

const MAX_BYTES = 10 * 1024 * 1024; // 10 MB
const ALLOWED = ["image/jpeg", "image/png", "image/webp", "image/avif"];

export async function POST(request: Request) {
  const form = await request.formData();
  const file = form.get("file");
  if (!(file instanceof File)) {
    return NextResponse.json({ error: "File tidak ditemukan" }, { status: 400 });
  }
  if (!ALLOWED.includes(file.type)) {
    return NextResponse.json(
      { error: "Format harus JPG, PNG, WEBP, atau AVIF" },
      { status: 415 },
    );
  }
  if (file.size > MAX_BYTES) {
    return NextResponse.json(
      { error: "Ukuran maksimal 10 MB" },
      { status: 413 },
    );
  }

  const ext = file.type.split("/")[1].replace("jpeg", "jpg");
  const key = `uploads/${Date.now()}-${crypto.randomUUID().slice(0, 8)}.${ext}`;
  const buf = await file.arrayBuffer();

  const { env } = await getCloudflareContext({ async: true });
  await env.MEDIA_KV.put(key, buf, {
    metadata: { contentType: file.type },
  });

  return NextResponse.json({ url: `/api/images/${key}` });
}
