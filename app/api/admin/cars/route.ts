import { NextResponse } from "next/server";
import { createCar } from "@/lib/db/queries";
import { carSchema } from "@/lib/validation";

export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const parsed = carSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Validasi gagal", issues: parsed.error.flatten() },
      { status: 400 },
    );
  }

  const car = await createCar(parsed.data);
  return NextResponse.json({ car }, { status: 201 });
}
