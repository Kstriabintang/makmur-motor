import { z } from "zod";

export const carCategories = [
  "SUV",
  "MPV",
  "Commercial",
  "Pickup",
  "Hatchback",
] as const;
export const transmisiOptions = ["Manual", "Matic"] as const;
export const bahanBakarOptions = ["Bensin", "Diesel"] as const;

export const carSchema = z.object({
  nama: z.string().trim().min(1, "Nama mobil wajib diisi"),
  tahun: z.coerce.number().int().min(1980).max(2100),
  harga: z.coerce.number().int().min(0, "Harga tidak valid"),
  hargaCash: z.preprocess(
    (v) => (v === "" || v == null ? null : Number(v)),
    z.number().int().min(0).nullable(),
  ),
  kategori: z.enum(carCategories),
  transmisi: z.enum(transmisiOptions),
  bahanBakar: z.enum(bahanBakarOptions),
  km: z.string().trim().min(1, "KM wajib diisi"),
  warna: z.preprocess(
    (v) => (v === "" || v == null ? null : String(v)),
    z.string().nullable(),
  ),
  lokasi: z.string().trim().min(1, "Lokasi wajib diisi"),
  whatsappMessage: z.string().optional(),
  featured: z.boolean().optional(),
  sold: z.boolean().optional(),
  photos: z.array(z.string()).optional(),
});

export type CarFormValues = z.input<typeof carSchema>;
export type CarParsed = z.output<typeof carSchema>;

export const carUpdateSchema = carSchema.partial();
