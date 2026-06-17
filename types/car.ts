export type CarCategory =
  | "Hatchback"
  | "SUV"
  | "MPV"
  | "Commercial"
  | "Pickup";

export type Transmisi = "Manual" | "Matic";

export type BahanBakar = "Bensin" | "Diesel";

export interface Car {
  id: string;
  nama: string;
  tahun: number;
  harga: number;
  hargaFormatted: string;
  hargaCash?: number;
  hargaCashFormatted?: string;
  kategori: CarCategory;
  transmisi: Transmisi;
  bahanBakar: BahanBakar;
  km: string;
  warna?: string;
  lokasi: string;
  folderFoto: string;
  whatsappMessage: string;
  featured: boolean;
}

export interface CategoryMeta {
  key: CarCategory;
  label: string;
  description: string;
  gradient: string;
}
