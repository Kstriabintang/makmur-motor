import { NextResponse } from "next/server";
import { getVisibleCars } from "@/lib/db/queries";

export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const kategori = searchParams.get("kategori");
  const featured = searchParams.get("featured");

  let result = await getVisibleCars();
  if (kategori) {
    result = result.filter(
      (c) => c.kategori.toLowerCase() === kategori.toLowerCase()
    );
  }
  if (featured === "true") {
    result = result.filter((c) => c.featured);
  }

  return NextResponse.json({ count: result.length, data: result });
}
