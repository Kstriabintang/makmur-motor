"use client";

import { motion } from "framer-motion";
import { MapPin, Navigation } from "lucide-react";
import { SHOWROOMS, mapsEmbedUrl } from "@/lib/contact";
import { staggerContainer, fadeUp, viewportOnce } from "@/lib/animations";
import { ScrollReveal } from "@/components/scroll-reveal";

export function LocationSection() {
  return (
    <section id="lokasi" className="section-py bg-card dark:bg-night">
      <div className="container-px">
        <ScrollReveal className="mb-8 max-w-xl md:mb-12">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-brand">
            Kunjungi Kami
          </p>
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Lokasi Showroom
          </h2>
          <p className="mt-3 text-ink-soft dark:text-slate-400">
            Kami punya dua showroom di Denpasar. Klik peta atau tombol di bawah
            untuk membuka petunjuk arah langsung ke lokasi.
          </p>
        </ScrollReveal>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid gap-6 md:grid-cols-2"
        >
          {SHOWROOMS.map((s) => (
            <motion.div
              key={s.name}
              variants={fadeUp}
              className="group overflow-hidden rounded-2xl border border-card-border bg-white shadow-sm transition-shadow hover:shadow-xl dark:border-white/10 dark:bg-ink"
            >
              {/* Embedded map — desktop only; mobile uses a compact card + link */}
              <div className="relative hidden aspect-[16/10] w-full overflow-hidden md:block">
                <iframe
                  src={mapsEmbedUrl(s.embedQuery)}
                  title={`Peta ${s.label}`}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0 h-full w-full border-0"
                />
                {/* Transparent overlay so a tap anywhere opens the real maps link */}
                <a
                  href={s.mapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Buka ${s.label} di Google Maps`}
                  className="absolute inset-0 z-10 flex items-end justify-end p-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                >
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-ink/90 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur">
                    <Navigation className="h-3.5 w-3.5" /> Buka di Maps
                  </span>
                </a>
              </div>

              {/* Info + directions button */}
              <div className="flex items-center justify-between gap-4 p-5">
                <div className="flex items-start gap-2.5">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
                  <div>
                    <p className="font-semibold text-ink dark:text-white">
                      {s.label}
                    </p>
                    <p className="text-sm text-ink-soft dark:text-slate-400">
                      {s.address}
                    </p>
                  </div>
                </div>
                <a
                  href={s.mapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary shrink-0 !px-4 !py-2 text-sm"
                >
                  <Navigation className="h-4 w-4" />
                  <span className="hidden sm:inline">Petunjuk Arah</span>
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
