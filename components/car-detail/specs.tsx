"use client";

import { CheckCircle2 } from "lucide-react";
import { ScrollReveal } from "@/components/scroll-reveal";
import type { CarWithPhotos } from "@/lib/photos";

const highlights = [
  "Sudah inspeksi mesin & kaki-kaki",
  "Dokumen lengkap (STNK & BPKB)",
  "Pajak hidup, siap pakai",
  "Bisa kredit / tukar tambah",
];

export function Specs({ car }: { car: CarWithPhotos }) {
  const rows: [string, string][] = [
    ["Nama", car.nama],
    ["Tahun", String(car.tahun)],
    ["Kategori", car.kategori],
    ["Transmisi", car.transmisi],
    ["Bahan Bakar", car.bahanBakar],
    ...(car.warna ? ([["Warna", car.warna]] as [string, string][]) : []),
    ["Kilometer", car.km === "—" ? "—" : `${car.km} km`],
    ["Lokasi", car.lokasi],
    ["Harga Kredit", car.hargaFormatted],
    ...(car.hargaCashFormatted
      ? ([["Harga Cash", car.hargaCashFormatted]] as [string, string][])
      : []),
  ];

  return (
    <section className="section-py bg-luxe-soft text-white">
      <div className="container-px grid gap-8 lg:grid-cols-2 lg:gap-12">
        <ScrollReveal>
          <h2 className="mb-5 text-2xl font-bold tracking-tight md:text-3xl">
            Spesifikasi
          </h2>
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]">
            {rows.map(([label, value], i) => (
              <div
                key={label}
                className={`flex items-center justify-between px-5 py-3.5 text-sm ${
                  i % 2 === 0 ? "bg-transparent" : "bg-white/[0.03]"
                }`}
              >
                <span className="text-slate-400">{label}</span>
                <span className="font-semibold text-white">{value}</span>
              </div>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h2 className="mb-5 text-2xl font-bold tracking-tight md:text-3xl">
            Keunggulan Unit
          </h2>
          <ul className="space-y-3">
            {highlights.map((h) => (
              <li
                key={h}
                className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.04] px-5 py-4 transition-colors hover:border-white/20"
              >
                <CheckCircle2 className="h-5 w-5 shrink-0 text-success" />
                <span className="text-sm font-medium text-slate-200">{h}</span>
              </li>
            ))}
          </ul>
        </ScrollReveal>
      </div>
    </section>
  );
}
