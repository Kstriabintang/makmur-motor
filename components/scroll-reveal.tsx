"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";
import { fadeUp, viewportOnce } from "@/lib/animations";

interface ScrollRevealProps {
  children: ReactNode;
  variants?: Variants;
  className?: string;
  delay?: number;
  as?: "div" | "section" | "li" | "span";
}

export function ScrollReveal({
  children,
  variants = fadeUp,
  className,
  delay = 0,
  as = "div",
}: ScrollRevealProps) {
  const MotionTag = motion[as];
  return (
    <MotionTag
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      transition={delay ? { delay } : undefined}
    >
      {children}
    </MotionTag>
  );
}
