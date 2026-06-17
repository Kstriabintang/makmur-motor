import { and, desc, eq, ne } from "drizzle-orm";
import { getDb } from "./index";
import { cars as carsTable, type CarRow } from "./schema";
import type { CarWithPhotos } from "@/lib/photos";
import type { BahanBakar, CarCategory, Transmisi } from "@/types/car";
import { formatRupiah } from "@/lib/utils";

/** A car as needed by the admin: public fields + status + timestamps. */
export type AdminCar = CarWithPhotos & {
  sold: boolean;
  createdAt: number;
};

/** Fields the admin can set when creating/updating a car. */
export interface CarInput {
  id?: string;
  nama: string;
  tahun: number;
  harga: number;
  hargaCash?: number | null;
  kategori: CarCategory;
  transmisi: Transmisi;
  bahanBakar: BahanBakar;
  km: string;
  warna?: string | null;
  lokasi: string;
  whatsappMessage?: string;
  featured?: boolean;
  sold?: boolean;
  photos?: string[];
}

function mapRow(row: CarRow): AdminCar {
  return {
    id: row.id,
    nama: row.nama,
    tahun: row.tahun,
    harga: row.harga,
    hargaFormatted: formatRupiah(row.harga),
    hargaCash: row.hargaCash ?? undefined,
    hargaCashFormatted:
      row.hargaCash != null ? formatRupiah(row.hargaCash) : undefined,
    kategori: row.kategori as CarCategory,
    transmisi: row.transmisi as Transmisi,
    bahanBakar: row.bahanBakar as BahanBakar,
    km: row.km,
    warna: row.warna ?? undefined,
    lokasi: row.lokasi,
    folderFoto: row.folderFoto,
    whatsappMessage: row.whatsappMessage,
    featured: row.featured,
    sold: row.sold,
    photos: Array.isArray(row.photos) ? row.photos : [],
    createdAt: row.createdAt,
  };
}

export function slugify(input: string): string {
  return input
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[^\w\s-]/g, "")
    .trim()
    .replace(/[\s_]+/g, "-")
    .replace(/-+/g, "-");
}

// ── Public reads (sold cars excluded) ──────────────────────────────────────

export async function getVisibleCars(): Promise<CarWithPhotos[]> {
  const db = await getDb();
  const rows = await db
    .select()
    .from(carsTable)
    .where(eq(carsTable.sold, false))
    .orderBy(desc(carsTable.createdAt));
  return rows.map(mapRow);
}

export async function getCarById(id: string): Promise<CarWithPhotos | null> {
  const db = await getDb();
  const row = await db
    .select()
    .from(carsTable)
    .where(and(eq(carsTable.id, id), eq(carsTable.sold, false)))
    .get();
  return row ? mapRow(row) : null;
}

export async function getFeaturedCars(): Promise<CarWithPhotos[]> {
  const db = await getDb();
  const rows = await db
    .select()
    .from(carsTable)
    .where(and(eq(carsTable.sold, false), eq(carsTable.featured, true)))
    .orderBy(desc(carsTable.createdAt));
  return rows.map(mapRow);
}

export async function getRelatedCars(
  car: { id: string; kategori: string },
  limit = 4,
): Promise<CarWithPhotos[]> {
  const db = await getDb();
  const rows = await db
    .select()
    .from(carsTable)
    .where(
      and(
        eq(carsTable.sold, false),
        eq(carsTable.kategori, car.kategori),
        ne(carsTable.id, car.id),
      ),
    )
    .orderBy(desc(carsTable.createdAt))
    .limit(limit);
  return rows.map(mapRow);
}

/** First available photo per category — used as the category-card background. */
export async function getCategoryImages(): Promise<Record<string, string>> {
  const visible = await getVisibleCars();
  const out: Record<string, string> = {};
  for (const car of visible) {
    if (out[car.kategori]) continue;
    if (car.photos.length > 0) out[car.kategori] = car.photos[0];
  }
  return out;
}

export async function getCountByCategory(key: string): Promise<number> {
  const db = await getDb();
  const rows = await db
    .select({ id: carsTable.id })
    .from(carsTable)
    .where(and(eq(carsTable.sold, false), eq(carsTable.kategori, key)));
  return rows.length;
}

// ── Admin reads (everything, including sold) ───────────────────────────────

export async function getAllCarsAdmin(): Promise<AdminCar[]> {
  const db = await getDb();
  const rows = await db
    .select()
    .from(carsTable)
    .orderBy(desc(carsTable.createdAt));
  return rows.map(mapRow);
}

export async function getCarByIdAdmin(id: string): Promise<AdminCar | null> {
  const db = await getDb();
  const row = await db
    .select()
    .from(carsTable)
    .where(eq(carsTable.id, id))
    .get();
  return row ? mapRow(row) : null;
}

// ── Admin mutations ────────────────────────────────────────────────────────

async function uniqueId(base: string): Promise<string> {
  const db = await getDb();
  let id = base || "mobil";
  let n = 1;
  // Append -2, -3, … until the id is free.
  while (
    await db.select({ id: carsTable.id }).from(carsTable).where(eq(carsTable.id, id)).get()
  ) {
    n += 1;
    id = `${base}-${n}`;
  }
  return id;
}

export async function createCar(input: CarInput): Promise<AdminCar> {
  const db = await getDb();
  const now = Date.now();
  const base = input.id ? slugify(input.id) : slugify(`${input.nama}-${input.tahun}`);
  const id = await uniqueId(base);
  const whatsappMessage =
    input.whatsappMessage?.trim() ||
    `Halo Makmur Motor, saya tertarik dengan ${input.nama} ${input.tahun}`;

  const row = {
    id,
    nama: input.nama,
    tahun: input.tahun,
    harga: input.harga,
    hargaCash: input.hargaCash ?? null,
    kategori: input.kategori,
    transmisi: input.transmisi,
    bahanBakar: input.bahanBakar,
    km: input.km,
    warna: input.warna ?? null,
    lokasi: input.lokasi,
    folderFoto: id,
    whatsappMessage,
    featured: input.featured ?? false,
    sold: input.sold ?? false,
    photos: input.photos ?? [],
    createdAt: now,
    updatedAt: now,
  };

  await db.insert(carsTable).values(row);
  return mapRow(row as CarRow);
}

export async function updateCar(
  id: string,
  input: Partial<CarInput>,
): Promise<AdminCar | null> {
  const db = await getDb();
  const existing = await db.select().from(carsTable).where(eq(carsTable.id, id)).get();
  if (!existing) return null;

  const patch: Partial<CarRow> = { updatedAt: Date.now() };
  if (input.nama !== undefined) patch.nama = input.nama;
  if (input.tahun !== undefined) patch.tahun = input.tahun;
  if (input.harga !== undefined) patch.harga = input.harga;
  if (input.hargaCash !== undefined) patch.hargaCash = input.hargaCash ?? null;
  if (input.kategori !== undefined) patch.kategori = input.kategori;
  if (input.transmisi !== undefined) patch.transmisi = input.transmisi;
  if (input.bahanBakar !== undefined) patch.bahanBakar = input.bahanBakar;
  if (input.km !== undefined) patch.km = input.km;
  if (input.warna !== undefined) patch.warna = input.warna ?? null;
  if (input.lokasi !== undefined) patch.lokasi = input.lokasi;
  if (input.whatsappMessage !== undefined)
    patch.whatsappMessage = input.whatsappMessage;
  if (input.featured !== undefined) patch.featured = input.featured;
  if (input.sold !== undefined) patch.sold = input.sold;
  if (input.photos !== undefined) patch.photos = input.photos;

  await db.update(carsTable).set(patch).where(eq(carsTable.id, id));
  const updated = await db.select().from(carsTable).where(eq(carsTable.id, id)).get();
  return updated ? mapRow(updated) : null;
}

export async function deleteCar(id: string): Promise<boolean> {
  const db = await getDb();
  const existing = await db.select({ id: carsTable.id }).from(carsTable).where(eq(carsTable.id, id)).get();
  if (!existing) return false;
  await db.delete(carsTable).where(eq(carsTable.id, id));
  return true;
}

export async function setSold(id: string, sold: boolean): Promise<AdminCar | null> {
  return updateCar(id, { sold });
}
