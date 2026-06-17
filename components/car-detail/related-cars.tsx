"use client";

import { motion } from "framer-motion";
import { CarCard } from "@/components/car-card";
import { ScrollReveal } from "@/components/scroll-reveal";
import { staggerContainer, viewportOnce } from "@/lib/animations";
import { cardTints } from "@/lib/data";
import type { CarWithPhotos } from "@/lib/photos";

export function RelatedCars({ cars }: { cars: CarWithPhotos[] }) {
  if (cars.length === 0) return null;

  return (
    <section className="section-py bg-luxe-soft text-white">
      <div className="container-px">
        <ScrollReveal>
          <h2 className="mb-8 text-2xl font-bold tracking-tight md:text-3xl">
            Mobil Serupa
          </h2>
        </ScrollReveal>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-2 gap-3 sm:gap-6 lg:grid-cols-4"
        >
          {cars.map((car, i) => (
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
