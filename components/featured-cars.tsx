"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { CarCard } from "@/components/car-card";
import { ScrollReveal } from "@/components/scroll-reveal";
import { staggerContainer, viewportOnce } from "@/lib/animations";
import { cardTints } from "@/lib/data";
import type { CarWithPhotos } from "@/lib/photos";

export function FeaturedCars({ cars }: { cars: CarWithPhotos[] }) {
  return (
    <section className="section-py bg-card dark:bg-white/[0.02]">
      <div className="container-px">
        <ScrollReveal className="mb-8 flex items-end justify-between gap-4 md:mb-12">
          <div>
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-brand">
              Pilihan Terbaik
            </p>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Mobil Unggulan
            </h2>
          </div>
          <Link
            href="/katalog"
            className="group inline-flex shrink-0 items-center gap-1 rounded-full border border-card-border px-4 py-2 text-sm font-semibold text-ink-soft transition-colors hover:border-ink hover:text-ink dark:text-slate-300 dark:hover:border-white dark:hover:text-white"
          >
            Lihat Semua
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </ScrollReveal>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-2 gap-3 sm:gap-6 lg:grid-cols-4"
        >
          {cars.slice(0, 8).map((car, i) => (
            <CarCard
              key={car.id}
              car={car}
              tint={cardTints[i % cardTints.length]}
              index={i}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
