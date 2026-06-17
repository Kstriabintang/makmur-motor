"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Search, X } from "lucide-react";
import { cars } from "@/lib/data";

interface SearchOverlayProps {
  open: boolean;
  onClose: () => void;
}

export function SearchOverlay({ open, onClose }: SearchOverlayProps) {
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (open) {
      setQuery("");
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    return cars
      .filter(
        (c) =>
          c.nama.toLowerCase().includes(q) ||
          c.kategori.toLowerCase().includes(q) ||
          String(c.tahun).includes(q)
      )
      .slice(0, 6);
  }, [query]);

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[80] bg-ink/60 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, y: -30, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -30, scale: 0.98 }}
            transition={{ type: "spring", stiffness: 200, damping: 24 }}
            className="fixed inset-x-4 top-24 z-[90] mx-auto max-w-2xl overflow-hidden rounded-2xl bg-white shadow-2xl dark:bg-slate-900"
          >
            <div className="flex items-center gap-3 border-b border-card-border px-5 dark:border-white/10">
              <Search className="h-5 w-5 text-ink-light" />
              <input
                ref={inputRef}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Cari mobil, kategori, atau tahun…"
                className="h-14 flex-1 bg-transparent text-base outline-none placeholder:text-ink-light"
              />
              <button
                onClick={onClose}
                aria-label="Tutup pencarian"
                className="grid h-8 w-8 place-items-center rounded-full hover:bg-slate-100 dark:hover:bg-white/10"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="max-h-[55vh] overflow-y-auto p-2">
              {query && results.length === 0 && (
                <p className="px-4 py-8 text-center text-sm text-ink-soft">
                  Tidak ada mobil yang cocok dengan “{query}”.
                </p>
              )}
              {results.map((car) => (
                <Link
                  key={car.id}
                  href={`/mobil/${car.id}`}
                  onClick={onClose}
                  className="flex items-center justify-between gap-3 rounded-xl px-4 py-3 transition-colors hover:bg-slate-100 dark:hover:bg-white/10"
                >
                  <div>
                    <p className="font-semibold">{car.nama}</p>
                    <p className="text-xs text-ink-soft">
                      {car.tahun} · {car.kategori} · {car.transmisi}
                    </p>
                  </div>
                  <span className="text-sm font-semibold text-brand">
                    {car.hargaFormatted}
                  </span>
                </Link>
              ))}
              {!query && (
                <p className="px-4 py-8 text-center text-sm text-ink-soft">
                  Mulai ketik untuk mencari di {cars.length} unit mobil.
                </p>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
