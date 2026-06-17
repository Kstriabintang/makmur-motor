import { NextResponse } from "next/server";
import { deleteCar, updateCar } from "@/lib/db/queries";
import { carUpdateSchema } from "@/lib/validation";

export const dynamic = "force-dynamic";

export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const parsed = carUpdateSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Validasi gagal", issues: parsed.error.flatten() },
      { status: 400 },
    );
  }

  const car = await updateCar(id, parsed.data);
  if (!car) {
    return NextResponse.json({ error: "Mobil tidak ditemukan" }, { status: 404 });
  }
  return NextResponse.json({ car });
}

export async function DELETE(
  _request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;
  const ok = await deleteCar(id);
  if (!ok) {
    return NextResponse.json({ error: "Mobil tidak ditemukan" }, { status: 404 });
  }
  return NextResponse.json({ ok: true });
}
