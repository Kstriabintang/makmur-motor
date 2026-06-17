"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { SlidersHorizontal, X } from "lucide-react";
import { CarCard } from "@/components/car-card";
import { FilterSidebar, type Filters } from "@/components/filter/sidebar";
import { staggerContainer } from "@/lib/animations";
import { cardTints } from "@/lib/data";
import type { CarWithPhotos } from "@/lib/photos";

type SortKey = "tahun-desc" | "harga-asc" | "harga-desc";

const sortOptions: { value: SortKey; label: string }[] = [
  { value: "tahun-desc", label: "Tahun Terbaru" },
  { value: "harga-asc", label: "Harga Terendah" },
  { value: "harga-desc", label: "Harga Tertinggi" },
];

export function KatalogClient({ cars }: { cars: CarWithPhotos[] }) {
  const router = useRouter();
  const searchParams = useSearchParams();

  // Bounds are derived from the live inventory, so adding a pricier or newer
  // unit later auto-extends the sliders. We also round the ceiling up and give
  // the year headroom to the current year so the range never feels capped.
  const priceBounds = useMemo<[number, number]>(() => {
    const prices = cars.map((c) => c.harga);
    const min = Math.floor(Math.min(...prices) / 5_000_000) * 5_000_000;
    const max = Math.ceil(Math.max(...prices) / 25_000_000) * 25_000_000;
    return [min, max];
  }, [cars]);

  const yearBounds = useMemo<[number, number]>(() => {
    const years = cars.map((c) => c.tahun);
    const currentYear = new Date().getFullYear();
    return [Math.min(...years), Math.max(Math.max(...years), currentYear)];
  }, [cars]);

  const buildInitial = (): Filters => ({
    kategori: searchParams.get("kategori")
      ? [searchParams.get("kategori") as string]
      : [],
    transmisi: searchParams.get("transmisi")
      ? [searchParams.get("transmisi") as string]
      : [],
    lokasi: searchParams.get("lokasi")
      ? [searchParams.get("lokasi") as string]
      : [],
    maxHarga: searchParams.get("maxHarga")
      ? Number(searchParams.get("maxHarga"))
      : priceBounds[1],
    minTahun: searchParams.get("minTahun")
      ? Number(searchParams.get("minTahun"))
      : yearBounds[0],
  });

  const [filters, setFilters] = useState<Filters>(buildInitial);
  const [sort, setSort] = useState<SortKey>("tahun-desc");
  const [mobileOpen, setMobileOpen] = useState(false);

  // Sync filters to URL (shareable filters)
  useEffect(() => {
    const params = new URLSearchParams();
    if (filters.kategori.length) params.set("kategori", filters.kategori[0]);
    if (filters.transmisi.length) params.set("transmisi", filters.transmisi[0]);
    if (filters.lokasi.length) params.set("lokasi", filters.lokasi[0]);
    if (filters.maxHarga < priceBounds[1])
      params.set("maxHarga", String(filters.maxHarga));
    if (filters.minTahun > yearBounds[0])
      params.set("minTahun", String(filters.minTahun));
    const qs = params.toString();
    router.replace(qs ? `/katalog?${qs}` : "/katalog", { scroll: false });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filters]);

  const reset = () =>
    setFilters({
      kategori: [],
      transmisi: [],
      lokasi: [],
      maxHarga: priceBounds[1],
      minTahun: yearBounds[0],
    });

  const filtered = useMemo(() => {
    const result = cars.filter((c) => {
      if (filters.kategori.length && !filters.kategori.includes(c.kategori))
        return false;
      if (filters.transmisi.length && !filters.transmisi.includes(c.transmisi))
        return false;
      if (filters.lokasi.length && !filters.lokasi.includes(c.lokasi))
        return false;
      if (c.harga > filters.maxHarga) return false;
      if (c.tahun < filters.minTahun) return false;
      return true;
    });

    result.sort((a, b) => {
      if (sort === "harga-asc") return a.harga - b.harga;
      if (sort === "harga-desc") return b.harga - a.harga;
      return b.tahun - a.tahun;
    });

    return result;
  }, [cars, filters, sort]);

  return (
    <div className="grid gap-8 lg:grid-cols-[260px_1fr]">
      {/* Desktop sidebar */}
      <aside className="hidden lg:block">
        <div className="sticky top-24 rounded-2xl border border-card-border bg-white p-6 dark:border-white/10 dark:bg-white/5">
          <FilterSidebar
            filters={filters}
            setFilters={setFilters}
            priceBounds={priceBounds}
            yearBounds={yearBounds}
            onReset={reset}
          />
        </div>
      </aside>

      <div>
        {/* Toolbar */}
        <div className="mb-6 flex items-center justify-between gap-3">
          <p className="text-sm text-ink-soft">
            Menampilkan{" "}
            <span className="font-semibold text-ink dark:text-white">
              {filtered.length}
            </span>{" "}
            unit
          </p>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setMobileOpen(true)}
              className="btn-ghost h-10 px-4 py-2 lg:hidden"
            >
              <SlidersHorizontal className="h-4 w-4" />
              Filter
            </button>
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value as SortKey)}
              className="h-10 rounded-full border border-card-border bg-white px-4 text-sm font-medium outline-none focus:border-brand dark:border-white/10 dark:bg-white/5"
            >
              {sortOptions.map((o) => (
                <option key={o.value} value={o.value}>
                  {o.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        {filtered.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-card-border p-16 text-center dark:border-white/10">
            <p className="font-semibold">Tidak ada mobil yang cocok</p>
            <p className="mt-1 text-sm text-ink-soft">
              Coba ubah atau reset filter Anda.
            </p>
            <button onClick={reset} className="btn-primary mt-5">
              Reset Filter
            </button>
          </div>
        ) : (
          <motion.div
            key={filtered.map((c) => c.id).join(",")}
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-2 gap-3 sm:gap-6 xl:grid-cols-3"
          >
            {filtered.map((car, i) => (
              <CarCard
                key={car.id}
                car={car}
                tint={cardTints[i % cardTints.length]}
                index={i}
              />
            ))}
          </motion.div>
        )}
      </div>

      {/* Mobile filter drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 z-[60] bg-ink/60 backdrop-blur-sm lg:hidden"
            />
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", stiffness: 260, damping: 30 }}
              className="fixed inset-y-0 left-0 z-[70] w-[85%] max-w-sm overflow-y-auto bg-white p-6 shadow-2xl dark:bg-ink lg:hidden"
            >
              <div className="mb-4 flex justify-end">
                <button
                  onClick={() => setMobileOpen(false)}
                  aria-label="Tutup filter"
                  className="grid h-9 w-9 place-items-center rounded-full hover:bg-slate-100 dark:hover:bg-white/10"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              <FilterSidebar
                filters={filters}
                setFilters={setFilters}
                priceBounds={priceBounds}
                yearBounds={yearBounds}
                onReset={reset}
              />
              <button
                onClick={() => setMobileOpen(false)}
                className="btn-primary mt-8 w-full"
              >
                Lihat {filtered.length} Hasil
              </button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
