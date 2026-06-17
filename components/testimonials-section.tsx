"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import { staggerContainer, fadeUp, viewportOnce } from "@/lib/animations";
import { ScrollReveal } from "@/components/scroll-reveal";

const testimonials = [
  {
    name: "Putu Aditya",
    location: "Denpasar",
    rating: 5,
    text: "Pelayanan ramah dan mobilnya persis seperti deskripsi. Surat lengkap, prosesnya cepat. Sangat puas!",
  },
  {
    name: "Made Surya",
    location: "Badung",
    rating: 5,
    text: "Harga bisa nego dan bisa tukar tambah. Mobil bekas tapi kondisinya seperti baru. Recommended banget.",
  },
  {
    name: "Kadek Rama",
    location: "Gianyar",
    rating: 5,
    text: "Dibantu sampai urus kredit tanpa ribet. Tempat terpercaya buat beli mobil bekas di Bali.",
  },
];

export function TestimonialsSection() {
  return (
    <section className="section-py bg-white dark:bg-ink">
      <div className="container-px">
        <ScrollReveal className="mb-8 max-w-xl md:mb-12">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-brand">
            Kata Mereka
          </p>
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Dipercaya Pelanggan
          </h2>
          <p className="mt-3 text-ink-soft dark:text-slate-400">
            Ratusan pembeli telah merasakan pengalaman beli mobil bekas yang
            aman dan transparan bersama kami.
          </p>
        </ScrollReveal>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid gap-4 sm:gap-6 md:grid-cols-3"
        >
          {testimonials.map((t) => (
            <motion.figure
              key={t.name}
              variants={fadeUp}
              className="relative flex flex-col rounded-2xl border border-card-border bg-card p-5 shadow-sm dark:border-white/10 dark:bg-white/5 sm:p-6"
            >
              <Quote className="absolute right-5 top-5 h-7 w-7 text-brand/15" />
              <div className="mb-3 flex gap-0.5 text-brand">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <blockquote className="flex-1 text-sm leading-relaxed text-ink-soft dark:text-slate-300">
                “{t.text}”
              </blockquote>
              <figcaption className="mt-4 flex items-center gap-3 border-t border-card-border pt-4 dark:border-white/10">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-ink text-sm font-bold text-white dark:bg-white dark:text-ink">
                  {t.name.charAt(0)}
                </span>
                <span>
                  <p className="text-sm font-semibold text-ink dark:text-white">
                    {t.name}
                  </p>
                  <p className="text-xs text-ink-light">{t.location}</p>
                </span>
              </figcaption>
            </motion.figure>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
