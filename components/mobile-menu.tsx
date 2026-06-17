"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { navLinks } from "@/components/navbar";
import { CONTACT } from "@/lib/contact";
import { waLink } from "@/lib/utils";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

const itemVariants = {
  hidden: { opacity: 0, x: 40 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.08, duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

export function MobileMenu({ open, onClose }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[60] bg-ink/60 backdrop-blur-sm md:hidden"
          />
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 260, damping: 30 }}
            className="fixed inset-y-0 right-0 z-[70] flex w-[82%] max-w-sm flex-col bg-white p-6 shadow-2xl dark:bg-ink md:hidden"
          >
            <div className="flex items-center justify-between">
              <span className="text-lg font-bold">{CONTACT.brand}</span>
              <motion.button
                whileHover={{ rotate: 90 }}
                onClick={onClose}
                aria-label="Tutup menu"
                className="grid h-10 w-10 place-items-center rounded-full hover:bg-slate-100 dark:hover:bg-white/10"
              >
                <X className="h-5 w-5" />
              </motion.button>
            </div>

            <nav className="mt-8 flex flex-col gap-1">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  custom={i}
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <Link
                    href={link.href}
                    onClick={onClose}
                    className="block rounded-xl px-4 py-3 text-lg font-medium text-ink transition-colors hover:bg-slate-100 dark:text-slate-100 dark:hover:bg-white/10"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>

            <div className="mt-auto pt-6">
              <a
                href={waLink("Halo Makmur Motor, saya ingin bertanya")}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full"
              >
                Hubungi via WhatsApp
              </a>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
