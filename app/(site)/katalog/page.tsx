import type { Metadata } from "next";
import { Suspense } from "react";
import { getVisibleCars } from "@/lib/db/queries";
import { KatalogClient } from "@/components/katalog-client";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Katalog Mobil",
  description:
    "Jelajahi seluruh koleksi mobil bekas berkualitas di Makmur Motor. Filter berdasarkan kategori, harga, tahun, transmisi, dan lokasi showroom.",
};

export default async function KatalogPage() {
  const data = await getVisibleCars();

  return (
    <div className="pt-16 md:pt-20">
      <section className="border-b border-card-border bg-slate-50/60 dark:border-white/10 dark:bg-white/[0.02]">
        <div className="container-px py-12 md:py-16">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-brand">
            Koleksi Lengkap
          </p>
          <h1 className="text-3xl font-bold tracking-tight md:text-5xl">
            Katalog Mobil
          </h1>
          <p className="mt-3 max-w-2xl text-ink-soft">
            {data.length} unit mobil bekas berkualitas siap menjadi pilihan
            Anda. Gunakan filter untuk menemukan mobil yang paling sesuai.
          </p>
        </div>
      </section>

      <div className="container-px section-py">
        <Suspense fallback={<div className="py-20 text-center text-ink-soft">Memuat katalog…</div>}>
          <KatalogClient cars={data} />
        </Suspense>
      </div>
    </div>
  );
}
