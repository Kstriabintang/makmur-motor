import { sqliteTable, text, integer } from "drizzle-orm/sqlite-core";

/**
 * The car inventory. One row per unit. `harga`/`hargaCash` are stored as plain
 * integers (Rupiah); the formatted strings shown in the UI are derived at read
 * time with `formatRupiah`. `photos` is a JSON array of URLs (either
 * `/cars/<folder>/<file>` for seeded photos or `/api/images/<key>` for admin
 * uploads). `sold` cars are hidden from the public site but kept for the admin.
 */
export const cars = sqliteTable("cars", {
  id: text("id").primaryKey(),
  nama: text("nama").notNull(),
  tahun: integer("tahun").notNull(),
  harga: integer("harga").notNull(),
  hargaCash: integer("harga_cash"),
  kategori: text("kategori").notNull(),
  transmisi: text("transmisi").notNull(),
  bahanBakar: text("bahan_bakar").notNull(),
  km: text("km").notNull(),
  warna: text("warna"),
  lokasi: text("lokasi").notNull(),
  folderFoto: text("folder_foto").notNull(),
  whatsappMessage: text("whatsapp_message").notNull(),
  featured: integer("featured", { mode: "boolean" }).notNull().default(false),
  sold: integer("sold", { mode: "boolean" }).notNull().default(false),
  photos: text("photos", { mode: "json" }).$type<string[]>().notNull(),
  createdAt: integer("created_at").notNull(),
  updatedAt: integer("updated_at").notNull(),
});

export type CarRow = typeof cars.$inferSelect;
export type NewCarRow = typeof cars.$inferInsert;
