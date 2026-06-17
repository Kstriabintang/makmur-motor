"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";
import { AnimatedText } from "@/components/animated-text";
import { SearchBar } from "@/components/search-bar";
import { CarImage } from "@/components/car-image";
import { cars } from "@/lib/data";
import { formatRupiah } from "@/lib/utils";
import type { CarWithPhotos } from "@/lib/photos";

export function HeroSection({
  heroCar,
  heroImage,
}: {
  heroCar: CarWithPhotos | null;
  heroImage?: string | null;
}) {
  // "Mulai dari" mengikuti harga termurah yang sedang tersedia, bukan harga
  // mobil hero — supaya selalu mencerminkan unit paling terjangkau.
  const lowestPrice = Math.min(...cars.map((c) => c.harga));
  // Prefer a dedicated hero image (e.g. studio shot on white) when present.
  const bgPhotos = heroImage ? [heroImage] : heroCar?.photos ?? [];

  return (
    <section className="relative bg-luxe">
      {/* Full-bleed photo background — edge to edge, behind the navbar */}
      <div className="relative w-full overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 1.03 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="absolute inset-0"
        >
          <CarImage
            photos={bgPhotos}
            alt={heroCar?.nama ?? "Mobil unggulan Makmur Motor"}
            gradient="from-zinc-800 via-zinc-900 to-black"
            priority
            sizes="100vw"
            imgClassName="object-cover"
          />
        </motion.div>

        {/* Overlays for legibility + blend into section */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/55 to-black/15" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d0e12] via-black/30 to-black/40" />

        {/* Content */}
        <div className="container-px relative flex min-h-[68vh] flex-col justify-between pb-20 pt-24 md:min-h-[88vh] md:pb-32 md:pt-32">
          {/* Top row: badge + price chip */}
          <div className="flex items-start justify-between gap-4">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-xs font-medium text-white backdrop-blur"
            >
              <Sparkles className="h-3.5 w-3.5 text-brand" />
              Showroom Jual Beli Mobil & Motor Bekas — Denpasar
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="hidden shrink-0 rounded-2xl border border-white/15 bg-white/95 px-4 py-2.5 text-right shadow-xl backdrop-blur sm:block"
            >
              <p className="text-[10px] uppercase tracking-wide text-ink-light">
                Mulai dari
              </p>
              <p className="text-base font-bold text-ink">
                {formatRupiah(lowestPrice)}
              </p>
            </motion.div>
          </div>

          {/* Bottom: heading + CTA */}
          <div className="max-w-2xl">
            {/* Mobile: one simple, scannable headline */}
            <AnimatedText
              text="Mobil Bekas Pilihan Terbaik di Denpasar"
              as="h1"
              className="text-[2rem] font-bold leading-[1.1] tracking-tight text-white drop-shadow-lg sm:text-5xl md:hidden"
            />

            {/* Desktop: full two-line headline + description */}
            <div className="hidden md:block">
              <AnimatedText
                text="Mobil Bekas Berkualitas di Denpasar"
                as="h1"
                className="text-4xl font-bold leading-[1.02] tracking-tight text-white drop-shadow-lg sm:text-5xl lg:text-6xl"
              />
              <AnimatedText
                text="Terinspeksi, Bergaransi & Siap Pakai"
                as="h2"
                delay={0.3}
                className="mt-1 bg-gradient-to-r from-brand to-indigo-400 bg-clip-text text-4xl font-bold leading-[1.02] tracking-tight text-transparent drop-shadow-lg sm:text-5xl lg:text-6xl"
              />
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="mt-4 max-w-md text-sm leading-relaxed text-slate-300 sm:text-base"
              >
                Ratusan pelanggan telah mempercayai kami. Temukan mobil bekas
                terbaik Anda dengan tenang di Denpasar.
              </motion.p>
            </div>

            {/* Trust badges — mobile (simplified to 3) */}
            <motion.ul
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="mt-5 flex flex-wrap gap-x-5 gap-y-2 md:hidden"
            >
              {["Terinspeksi", "Kredit", "Garansi"].map((t) => (
                <li
                  key={t}
                  className="flex items-center gap-1.5 text-sm font-medium text-slate-200"
                >
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-brand" />
                  {t}
                </li>
              ))}
            </motion.ul>

            {/* Trust badges — desktop (full 4) */}
            <motion.ul
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55, duration: 0.6 }}
              className="mt-5 hidden flex-wrap gap-x-5 gap-y-2 md:flex"
            >
              {[
                "Unit Terinspeksi",
                "Bisa Kredit",
                "Bisa Tukar Tambah",
                "Surat Lengkap",
              ].map((t) => (
                <li
                  key={t}
                  className="flex items-center gap-1.5 text-sm font-medium text-slate-200"
                >
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-brand" />
                  {t}
                </li>
              ))}
            </motion.ul>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="mt-7 flex flex-wrap items-center gap-6"
            >
              <Link href="/katalog" className="btn-primary">
                Lihat Katalog
                <ArrowRight className="h-4 w-4" />
              </Link>
              {/* Stats — desktop only; moved below the hero on mobile */}
              <div className="hidden items-center gap-5 text-white md:flex">
                <Stat value="100+" label="Mobil Terjual" />
                <span className="h-8 w-px bg-white/20" />
                <Stat value="4.9/5" label="Rating Pelanggan" />
                <span className="h-8 w-px bg-white/20" />
                <Stat value="20+" label="Tahun Pengalaman" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Search bar — pulled up to overlap the photo, like the reference */}
      <div className="container-px relative z-10 -mt-16 pb-12 md:-mt-20">
        <SearchBar />
      </div>

      {/* Statistics — moved below the hero on mobile for a cleaner scan */}
      <div className="container-px pb-12 md:hidden">
        <div className="grid grid-cols-3 divide-x divide-white/10 rounded-2xl border border-white/10 bg-white/5 py-4 text-center text-white">
          <Stat value="100+" label="Mobil Terjual" />
          <Stat value="4.9/5" label="Rating Pelanggan" />
          <Stat value="20+" label="Tahun Pengalaman" />
        </div>
      </div>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <p className="text-xl font-bold text-white">{value}</p>
      <p className="text-xs text-slate-300">{label}</p>
    </div>
  );
}
