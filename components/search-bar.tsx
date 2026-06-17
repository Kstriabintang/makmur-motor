"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, Cog, Search, Tag, Wrench } from "lucide-react";
import { allCategories, allTransmisi } from "@/lib/data";
import { cn } from "@/lib/utils";

export function SearchBar() {
  const router = useRouter();
  const [merek, setMerek] = useState("");
  const [tahun, setTahun] = useState("");
  const [harga, setHarga] = useState("");
  const [transmisi, setTransmisi] = useState("");
  // Mobile: filter is collapsed by default to keep the hero compact.
  const [open, setOpen] = useState(false);

  const handleSearch = () => {
    const params = new URLSearchParams();
    if (merek) params.set("kategori", merek);
    if (transmisi) params.set("transmisi", transmisi);
    if (harga) params.set("maxHarga", harga);
    if (tahun) params.set("minTahun", tahun);
    router.push(`/katalog?${params.toString()}`);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, type: "spring", stiffness: 90, damping: 14 }}
      className="w-full rounded-2xl border border-card-border bg-white p-4 shadow-2xl shadow-slate-200/60 backdrop-blur-xl dark:border-white/10 dark:bg-slate-900/90 dark:shadow-black/40 md:p-5"
    >
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="mb-3 flex w-full items-center gap-2 px-1 text-left md:pointer-events-none"
      >
        <Search className="h-4 w-4 text-brand" />
        <p className="text-sm font-semibold">Temukan mobil yang Anda cari</p>
        <ChevronDown
          className={cn(
            "ml-auto h-4 w-4 text-ink-light transition-transform md:hidden",
            open && "rotate-180"
          )}
        />
      </button>

      {/* Fields — collapsible on mobile, always open from md up */}
      <div
        className={cn(
          "grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-5",
          !open && "hidden md:grid"
        )}
      >
        <Field icon={<Tag className="h-4 w-4" />} label="Merek / Kategori">
          <select
            value={merek}
            onChange={(e) => setMerek(e.target.value)}
            className="w-full bg-transparent text-sm outline-none"
          >
            <option value="">Semua</option>
            {allCategories.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </Field>

        <Field icon={<Wrench className="h-4 w-4" />} label="Tahun (min)">
          <input
            type="number"
            placeholder="2018"
            value={tahun}
            onChange={(e) => setTahun(e.target.value)}
            className="w-full bg-transparent text-sm outline-none placeholder:text-ink-light"
          />
        </Field>

        <Field icon={<Tag className="h-4 w-4" />} label="Harga maks (juta)">
          <input
            type="number"
            placeholder="300"
            value={harga ? String(Number(harga) / 1_000_000) : ""}
            onChange={(e) =>
              setHarga(e.target.value ? String(Number(e.target.value) * 1_000_000) : "")
            }
            className="w-full bg-transparent text-sm outline-none placeholder:text-ink-light"
          />
        </Field>

        <Field icon={<Cog className="h-4 w-4" />} label="Transmisi">
          <select
            value={transmisi}
            onChange={(e) => setTransmisi(e.target.value)}
            className="w-full bg-transparent text-sm outline-none"
          >
            <option value="">Semua</option>
            {allTransmisi.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </Field>

        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          onClick={handleSearch}
          className="btn-primary h-full min-h-[52px] w-full"
        >
          <Search className="h-4 w-4" />
          Cari
        </motion.button>
      </div>
    </motion.div>
  );
}

function Field({
  icon,
  label,
  children,
}: {
  icon: React.ReactNode;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-xl border border-card-border bg-white px-3 py-2 text-left transition-colors focus-within:border-brand dark:border-white/10 dark:bg-white/5">
      <div className="mb-0.5 flex items-center gap-1.5 text-[11px] font-medium uppercase tracking-wide text-ink-light">
        {icon}
        {label}
      </div>
      {children}
    </div>
  );
}
