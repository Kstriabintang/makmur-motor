"use client";

import { motion } from "framer-motion";
import { FileCheck, Shield, Tag, Zap } from "lucide-react";
import { staggerContainerSlow, viewportOnce } from "@/lib/animations";

const features = [
  {
    icon: Zap,
    title: "Proses Cepat",
    desc: "Transaksi mudah & cepat, dari survei sampai serah terima kunci.",
  },
  {
    icon: Tag,
    title: "Harga Kompetitif",
    desc: "Harga terbaik di kelasnya dengan kualitas yang terjamin.",
  },
  {
    icon: Shield,
    title: "Garansi Mesin",
    desc: "Setiap unit melalui inspeksi mesin menyeluruh sebelum dijual.",
  },
  {
    icon: FileCheck,
    title: "Dokumen Lengkap",
    desc: "STNK, BPKB, dan faktur lengkap serta dijamin keasliannya.",
  },
];

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 160, damping: 18 },
  },
};

export function FeaturesSection() {
  return (
    <section id="tentang" className="relative overflow-hidden bg-luxe py-16 text-white md:py-24">
      <div className="absolute inset-0 animate-gradient-shift bg-[length:200%_200%] bg-[radial-gradient(ellipse_at_20%_20%,rgba(255,255,255,0.05),transparent_45%),radial-gradient(ellipse_at_80%_80%,rgba(255,255,255,0.04),transparent_45%)]" />

      <div className="container-px relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-12 max-w-2xl text-center"
        >
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-brand">
            Mengapa Makmur Motor
          </p>
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Beli Mobil Tanpa Ragu
          </h2>
          <p className="mt-3 text-slate-400">
            Kami berkomitmen memberikan pengalaman jual beli mobil bekas yang
            aman, transparan, dan memuaskan.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainerSlow}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-2 gap-3 sm:gap-6 lg:grid-cols-4"
        >
          {features.map((f) => (
            <motion.div
              key={f.title}
              variants={itemVariants}
              whileHover={{ y: -6 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm transition-colors hover:border-white/30 hover:bg-white/[0.07] sm:p-6"
            >
              <motion.div
                whileHover={{ rotate: -8, scale: 1.08 }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
                className="mb-3 grid h-11 w-11 place-items-center rounded-xl bg-white/10 text-white sm:mb-4 sm:h-12 sm:w-12"
              >
                <f.icon className="h-5 w-5 sm:h-6 sm:w-6" />
              </motion.div>
              <h3 className="text-base font-bold sm:text-lg">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">
                {f.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
