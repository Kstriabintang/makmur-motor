"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { categories, getCountByCategory } from "@/lib/data";
import { scaleIn, staggerContainer, viewportOnce } from "@/lib/animations";
import { ScrollReveal } from "@/components/scroll-reveal";

export function CarCategory({
  images = {},
}: {
  images?: Record<string, string>;
}) {
  return (
    <section id="kategori" className="section-py bg-white dark:bg-ink">
      <div className="container-px">
        <ScrollReveal className="mb-8 flex items-end justify-between gap-4 md:mb-12">
          <div>
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-brand">
              Jelajahi
            </p>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Kategori Mobil
            </h2>
          </div>
          <Link
            href="/katalog"
            className="hidden shrink-0 items-center gap-1 rounded-full border border-card-border px-4 py-2 text-sm font-semibold text-ink-soft transition-colors hover:border-ink hover:text-ink dark:text-slate-300 dark:hover:border-white dark:hover:text-white md:inline-flex"
          >
            Lihat Semua <ArrowUpRight className="h-4 w-4" />
          </Link>
        </ScrollReveal>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6"
        >
          {categories.map((cat) => (
            <motion.div key={cat.key} variants={scaleIn}>
              <Link
                href={`/katalog?kategori=${encodeURIComponent(cat.key)}`}
                className="group relative block aspect-[3/4] overflow-hidden rounded-2xl bg-night"
              >
                {/* Real car photo background */}
                {images[cat.key] ? (
                  <Image
                    src={images[cat.key]}
                    alt={cat.label}
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-cover transition-transform duration-500 ease-smooth group-hover:scale-110"
                  />
                ) : (
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${cat.gradient} transition-transform duration-500 ease-smooth group-hover:scale-110`}
                  />
                )}
                {/* Brand color tint + dark overlay for legibility */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${cat.gradient} opacity-40 mix-blend-multiply`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/10" />

                <div className="relative flex h-full flex-col justify-between p-5 text-white">
                  <div className="flex justify-end">
                    <motion.span className="grid h-9 w-9 place-items-center rounded-full bg-white/15 backdrop-blur transition-all duration-300 group-hover:rotate-45 group-hover:bg-white group-hover:text-ink">
                      <ArrowUpRight className="h-4 w-4" />
                    </motion.span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold md:text-2xl">
                      {cat.label}
                    </h3>
                    <p className="mt-1 text-xs text-white/80">
                      {cat.description}
                    </p>
                    <p className="mt-3 text-[11px] font-medium uppercase tracking-wide text-white/70">
                      {getCountByCategory(cat.key)} unit
                    </p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
