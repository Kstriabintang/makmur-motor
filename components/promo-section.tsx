"use client";

import { motion } from "framer-motion";
import { ArrowRight, BadgePercent } from "lucide-react";
import { CarImage } from "@/components/car-image";
import { MagneticButton } from "@/components/magnetic-button";
import { viewportOnce } from "@/lib/animations";
import { waLink } from "@/lib/utils";
import type { CarWithPhotos } from "@/lib/photos";

export function PromoSection({ car }: { car: CarWithPhotos | null }) {
  const message = car
    ? car.whatsappMessage
    : "Halo Makmur Motor, saya ingin tahu penawaran terbaik bulan ini";

  return (
    <section className="section-py">
      <div className="container-px">
        <div className="relative overflow-hidden rounded-3xl bg-luxe p-8 md:p-12 lg:p-16">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_30%,rgba(59,130,246,0.18),transparent_55%)]" />
          <div className="absolute -right-20 top-1/2 hidden h-72 w-72 -translate-y-1/2 rounded-full bg-brand/20 blur-3xl lg:block" />

          <div className="relative grid items-center gap-8 lg:grid-cols-2">
            <div>
              <motion.span
                initial={{ scale: 1 }}
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="inline-flex items-center gap-2 rounded-full bg-brand px-4 py-1.5 text-xs font-semibold text-white"
              >
                <BadgePercent className="h-3.5 w-3.5" />
                Diskon Spesial
              </motion.span>

              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewportOnce}
                transition={{ duration: 0.6 }}
                className="mt-5 text-3xl font-bold leading-tight tracking-tight text-white md:text-4xl lg:text-5xl"
              >
                Dapatkan Penawaran Terbaik
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewportOnce}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="mt-4 max-w-md text-slate-300"
              >
                {car ? (
                  <>
                    Unit pilihan{" "}
                    <span className="font-semibold text-white">{car.nama}</span>{" "}
                    tersedia dengan harga spesial. Hubungi kami sekarang sebelum
                    kehabisan.
                  </>
                ) : (
                  "Konsultasikan kebutuhan mobil Anda dengan tim kami dan dapatkan harga terbaik hari ini."
                )}
              </motion.p>

              <div className="mt-8">
                <MagneticButton
                  href={waLink(message)}
                  className="btn-primary cursor-pointer"
                >
                  Hubungi Sekarang
                  <ArrowRight className="h-4 w-4" />
                </MagneticButton>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={viewportOnce}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="absolute right-4 top-4 z-10 rounded-2xl bg-brand px-4 py-3 text-center text-white shadow-xl">
                <p className="text-2xl font-bold leading-none">50%</p>
                <p className="text-[10px] uppercase tracking-wide">DP Ringan</p>
              </div>
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="relative aspect-[16/10] overflow-hidden rounded-2xl"
              >
                <CarImage
                  photos={car?.photos ?? []}
                  alt={car?.nama ?? "Penawaran spesial Makmur Motor"}
                  gradient="from-blue-600 via-blue-800 to-slate-900"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
