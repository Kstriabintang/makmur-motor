"use client";

import { motion } from "framer-motion";
import { wordVariant, EASE } from "@/lib/animations";
import { cn } from "@/lib/utils";

interface AnimatedTextProps {
  text: string;
  className?: string;
  delay?: number;
  as?: "h1" | "h2" | "h3" | "p" | "span";
}

/**
 * Split-text entrance: each word slides up from behind a mask with a stagger.
 */
export function AnimatedText({
  text,
  className,
  delay = 0,
  as = "h1",
}: AnimatedTextProps) {
  const MotionTag = motion[as];
  const words = text.split(" ");

  return (
    <MotionTag
      className={cn("flex flex-wrap", className)}
      initial="hidden"
      animate="visible"
      transition={{ staggerChildren: 0.08, delayChildren: delay }}
      aria-label={text}
    >
      {words.map((word, i) => (
        <span
          key={`${word}-${i}`}
          className="mr-[0.25em] inline-block overflow-hidden py-[0.05em]"
        >
          <motion.span
            className="inline-block"
            variants={wordVariant}
            transition={{ duration: 0.7, ease: EASE }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </MotionTag>
  );
}
