"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Calendar,
  ChevronRight,
  Cog,
  Fuel,
  Gauge,
  MapPin,
} from "lucide-react";
import { CarImage } from "@/components/car-image";
import { MagneticButton } from "@/components/magnetic-button";
import { EASE } from "@/lib/animations";
import { waLink } from "@/lib/utils";
import type { CarWithPhotos } from "@/lib/photos";

const gradientByCategory: Record<string, string> = {
  SUV: "from-blue-600 via-blue-800 to-slate-900",
  MPV: "from-indigo-600 via-indigo-800 to-slate-900",
  Commercial: "from-slate-700 via-slate-800 to-slate-900",
  Pickup: "from-zinc-700 via-zinc-800 to-slate-900",
  Hatchback: "from-sky-600 via-sky-800 to-slate-900",
};

export function DetailHero({ car }: { car: CarWithPhotos }) {
  const gradient = gradientByCategory[car.kategori] ?? gradientByCategory.SUV;

  const specs = [
    { icon: Calendar, label: "Tahun", value: String(car.tahun) },
    { icon: Cog, label: "Transmisi", value: car.transmisi },
    { icon: Fuel, label: "Bahan Bakar", value: car.bahanBakar },
    { icon: Gauge, label: "Kilometer", value: car.km === "—" ? "—" : `${car.km} km` },
    { icon: MapPin, label: "Lokasi", value: car.lokasi },
  ];

  return (
    <section className="relative overflow-hidden bg-luxe pt-16 text-white md:pt-20">
      {/* ambient glow */}
      <div className="pointer-events-none absolute -right-40 top-10 h-[30rem] w-[30rem] rounded-full bg-brand/10 blur-3xl" />
      <div className="container-px relative py-6 md:py-10">
        {/* Breadcrumb */}
        <nav className="mb-5 flex flex-wrap items-center gap-1.5 text-sm text-slate-400">
          <Link href="/" className="transition-colors hover:text-white">
            Home
          </Link>
          <ChevronRight className="h-4 w-4" />
          <Link href="/katalog" className="transition-colors hover:text-white">
            Katalog
          </Link>
          <ChevronRight className="h-4 w-4" />
          <span className="font-medium text-white">{car.nama}</span>
        </nav>

        {/* Full-width photo banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: EASE }}
          className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl border border-white/10 shadow-2xl shadow-black/60 sm:aspect-[16/9] lg:aspect-[21/9]"
        >
          <CarImage
            photos={car.photos}
            alt={car.nama}
            gradient={gradient}
            priority
            sizes="100vw"
            imgClassName="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />

          {/* Price chip top-right */}
          <div className="absolute right-4 top-4 rounded-2xl border border-white/15 bg-black/40 px-4 py-2.5 text-right backdrop-blur-md sm:right-6 sm:top-6">
            <p className="text-[10px] uppercase tracking-widest text-slate-300">
              Harga Kredit
            </p>
            <p className="text-lg font-bold text-white sm:text-xl">
              {car.hargaFormatted}
            </p>
          </div>

          {/* Name + badges bottom-left */}
          <div className="absolute inset-x-0 bottom-0 p-5 sm:p-8 lg:p-10">
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-full border border-brand/30 bg-brand/20 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
                {car.kategori}
              </span>
              {car.featured && (
                <span className="rounded-full border border-success/30 bg-success/20 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
                  Unggulan
                </span>
              )}
              {car.warna && (
                <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
                  {car.warna}
                </span>
              )}
            </div>
            <h1 className="mt-3 text-3xl font-bold tracking-tight text-white drop-shadow-lg sm:text-4xl lg:text-6xl">
              {car.nama}
            </h1>
            {car.hargaCashFormatted && (
              <p className="mt-1 text-sm text-slate-300">
                Cash {car.hargaCashFormatted}
              </p>
            )}
          </div>
        </motion.div>

        {/* Specs + CTA below the banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: EASE }}
          className="mt-6 grid gap-6 lg:grid-cols-3 lg:gap-8"
        >
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:col-span-2 lg:grid-cols-3">
            {specs.map((s) => (
              <div
                key={s.label}
                className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 transition-colors hover:border-white/20 hover:bg-white/[0.07]"
              >
                <s.icon className="mb-1.5 h-4 w-4 text-brand" />
                <p className="text-[11px] uppercase tracking-wide text-slate-500">
                  {s.label}
                </p>
                <p className="text-sm font-semibold text-white">{s.value}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-col justify-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-5">
            <MagneticButton
              href={waLink(car.whatsappMessage)}
              strength={0.2}
              className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-full bg-success px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:brightness-110 hover:shadow-lg hover:shadow-success/30 active:scale-95"
            >
              Hubungi via WhatsApp
            </MagneticButton>
            <a
              href={waLink(
                `Halo Makmur Motor, saya ingin menjadwalkan test drive untuk ${car.nama} ${car.tahun}`
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:border-white hover:bg-white hover:text-ink active:scale-95"
            >
              Jadwalkan Test Drive
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export { gradientByCategory };
