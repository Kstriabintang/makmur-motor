"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, Gauge, MapPin } from "lucide-react";
import { CarImage } from "@/components/car-image";
import { featuredCard } from "@/lib/animations";
import { cn } from "@/lib/utils";
import type { CarWithPhotos } from "@/lib/photos";

interface CarCardProps {
  car: CarWithPhotos;
  tint?: string;
  index?: number;
}

export function CarCard({ car, tint = "bg-card", index = 0 }: CarCardProps) {
  return (
    <motion.div
      variants={featuredCard}
      whileHover={{ y: -12 }}
      transition={{ type: "spring", stiffness: 260, damping: 22 }}
      className="group relative"
    >
      <div
        className={cn(
          "flex h-full flex-col overflow-hidden rounded-2xl border border-card-border shadow-sm transition-shadow duration-300 group-hover:shadow-xl group-hover:shadow-slate-200/60 dark:border-white/10 dark:shadow-none dark:group-hover:shadow-black/40",
          tint,
          "dark:bg-white/5"
        )}
      >
        <Link href={`/mobil/${car.id}`} className="block">
          <div className="relative aspect-[4/3] overflow-hidden">
            {car.featured && (
              <span className="absolute left-3 top-3 z-10 rounded-full bg-brand px-2.5 py-1 text-[11px] font-semibold text-white shadow-lg">
                Unggulan
              </span>
            )}
            <span className="absolute right-3 top-3 z-10 rounded-full bg-white/90 px-2.5 py-1 text-[11px] font-semibold text-ink backdrop-blur dark:bg-ink/80 dark:text-white">
              {car.kategori}
            </span>
            <CarImage
              photos={car.photos}
              alt={car.nama}
              priority={index < 2}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              imgClassName="transition-transform duration-500 ease-smooth group-hover:scale-[1.08]"
            />
          </div>
        </Link>

        <div className="flex flex-1 flex-col p-5">
          <Link href={`/mobil/${car.id}`}>
            <h3 className="text-sm font-bold leading-snug transition-colors group-hover:text-brand sm:text-base">
              {car.nama}
            </h3>
          </Link>

          <div className="mt-3 flex flex-wrap gap-x-3 gap-y-1.5 text-[11px] text-ink-soft dark:text-slate-400 sm:gap-x-4 sm:text-xs">
            <span className="inline-flex items-center gap-1">
              <Calendar className="h-3.5 w-3.5" /> {car.tahun}
            </span>
            <span className="inline-flex items-center gap-1">
              <Gauge className="h-3.5 w-3.5" /> {car.km === "—" ? "—" : `${car.km} km`}
            </span>
            <span className="hidden items-center gap-1 sm:inline-flex">
              <MapPin className="h-3.5 w-3.5" /> {car.lokasi}
            </span>
          </div>

          <div className="mt-auto flex items-end justify-between gap-2 pt-4">
            <div>
              <p className="text-[10px] uppercase tracking-wide text-ink-light sm:text-[11px]">
                Harga
              </p>
              <p className="text-base font-bold sm:text-lg">{car.hargaFormatted}</p>
            </div>
            <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-ink text-white transition-transform group-hover:translate-x-0.5 dark:bg-white dark:text-ink sm:h-9 sm:w-9">
              <ArrowRight className="h-4 w-4" />
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
