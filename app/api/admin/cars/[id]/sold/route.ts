import { NextResponse } from "next/server";
import { setSold } from "@/lib/db/queries";

export const dynamic = "force-dynamic";

export async function POST(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;
  let body: { sold?: boolean };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const car = await setSold(id, Boolean(body.sold));
  if (!car) {
    return NextResponse.json({ error: "Mobil tidak ditemukan" }, { status: 404 });
  }
  return NextResponse.json({ car });
}
