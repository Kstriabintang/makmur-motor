"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { CarImage } from "@/components/car-image";
import { ScrollReveal } from "@/components/scroll-reveal";

interface GalleryProps {
  photos: string[];
  name: string;
  gradient: string;
}

export function Gallery({ photos, name, gradient }: GalleryProps) {
  const [lightbox, setLightbox] = useState<number | null>(null);

  // When no real photos exist, show four placeholder tiles.
  const tiles = photos.length > 0 ? photos : [0, 1, 2, 3];

  const open = (i: number) => photos.length > 0 && setLightbox(i);
  const next = () =>
    setLightbox((i) => (i === null ? i : (i + 1) % photos.length));
  const prev = () =>
    setLightbox((i) =>
      i === null ? i : (i - 1 + photos.length) % photos.length
    );

  return (
    <section className="section-py bg-luxe text-white">
      <div className="container-px">
        <ScrollReveal>
          <h2 className="mb-6 text-2xl font-bold tracking-tight md:text-3xl">
            Galeri Foto
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4">
          {tiles.map((_, i) => (
            <ScrollReveal key={i} delay={i * 0.05}>
              <button
                onClick={() => open(i)}
                className="group relative block aspect-[4/3] w-full overflow-hidden rounded-2xl border border-white/10"
              >
                <CarImage
                  photos={photos}
                  index={i}
                  alt={`${name} foto ${i + 1}`}
                  gradient={gradient}
                  sizes="(max-width: 768px) 50vw, 25vw"
                  imgClassName="transition-transform duration-500 group-hover:scale-105"
                />
              </button>
            </ScrollReveal>
          ))}
        </div>

        {photos.length === 0 && (
          <p className="mt-4 text-center text-sm text-slate-400">
            Foto detail unit ini akan segera tersedia. Hubungi kami via
            WhatsApp untuk foto & video terbaru.
          </p>
        )}
      </div>

      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4"
          >
            <button
              onClick={() => setLightbox(null)}
              aria-label="Tutup"
              className="absolute right-5 top-5 grid h-11 w-11 place-items-center rounded-full bg-white/10 text-white hover:bg-white/20"
            >
              <X className="h-5 w-5" />
            </button>
            {photos.length > 1 && (
              <>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    prev();
                  }}
                  aria-label="Sebelumnya"
                  className="absolute left-5 grid h-11 w-11 place-items-center rounded-full bg-white/10 text-white hover:bg-white/20"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    next();
                  }}
                  aria-label="Berikutnya"
                  className="absolute right-5 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-white/10 text-white hover:bg-white/20"
                >
                  <ChevronRight className="h-6 w-6" />
                </button>
              </>
            )}
            <motion.div
              key={lightbox}
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              onClick={(e) => e.stopPropagation()}
              className="relative aspect-[16/10] w-full max-w-4xl overflow-hidden rounded-2xl"
            >
              <CarImage
                photos={photos}
                index={lightbox}
                alt={`${name} foto ${lightbox + 1}`}
                gradient={gradient}
                sizes="100vw"
                imgClassName="object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
