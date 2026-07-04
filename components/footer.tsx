"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Instagram, Mail, MapPin, Phone } from "lucide-react";
import { CONTACT } from "@/lib/contact";
import { staggerContainer, fadeUp, viewportOnce } from "@/lib/animations";
import { waLink } from "@/lib/utils";

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M16.6 5.82A5.46 5.46 0 0 1 15.07 2h-3.3v13.4a2.47 2.47 0 1 1-2.47-2.47c.26 0 .51.04.75.11V9.66a5.79 5.79 0 0 0-.75-.05A5.78 5.78 0 1 0 15.07 15.4V8.9a8.74 8.74 0 0 0 4.93 1.52V7.13a5.45 5.45 0 0 1-3.4-1.31Z" />
    </svg>
  );
}

const linkCols = [
  {
    title: "Layanan",
    links: [
      { label: "Jual Beli Mobil", href: "/katalog" },
      {
        label: "Tukar Tambah",
        href: waLink(
          "Halo Makmur Motor, saya ingin tukar tambah mobil. Mohon informasinya."
        ),
        external: true,
      },
      {
        label: "Kredit & Leasing",
        href: waLink(
          "Halo Makmur Motor, saya ingin tanya soal kredit / leasing mobil. Mohon informasinya."
        ),
        external: true,
      },
    ],
  },
  {
    title: "Informasi",
    links: [
      { label: "Blog & Tips", href: "/blog" },
      { label: "Cara Beli", href: "/#tentang" },
      { label: "FAQ", href: "/#tentang" },
      { label: "Syarat & Ketentuan", href: "/#tentang" },
    ],
  },
];

export function Footer() {
  return (
    <footer
      id="kontak"
      className="border-t border-white/10 bg-luxe text-slate-400"
    >
      {/* TikTok social proof strip */}
      <div className="border-b border-white/10">
        <div className="container-px flex flex-col items-center justify-between gap-6 py-8 md:flex-row">
          <div className="flex items-center gap-4">
            <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-xl ring-2 ring-brand/40">
              <Image
                src="/tiktok/tiktok.jpg"
                alt="Makmur Motor di TikTok"
                fill
                sizes="64px"
                className="object-cover"
              />
            </div>
            <div>
              <p className="text-sm font-semibold text-white">
                Ikuti kami di TikTok
              </p>
              <p className="text-sm text-slate-400">{CONTACT.tiktokHandle}</p>
            </div>
          </div>
          <a
            href={CONTACT.tiktok}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            <TikTokIcon className="h-4 w-4" />
            Lihat Video Kami
          </a>
        </div>
      </div>

      <div className="container-px py-14">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid gap-10 lg:grid-cols-5"
        >
          {/* Brand + newsletter */}
          <motion.div variants={fadeUp} className="lg:col-span-2">
            <Image
              src="/logo/LOGO-NO-BG.png"
              alt="Makmur Motor"
              width={160}
              height={56}
              className="h-12 w-auto object-contain brightness-0 invert"
            />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-400">
              {CONTACT.tagline}. Showroom mobil & motor bekas berkualitas di
              Denpasar, Bali.
            </p>
          </motion.div>

          {/* Link columns */}
          {linkCols.map((col) => (
            <motion.div key={col.title} variants={fadeUp}>
              <h4 className="mb-4 text-sm font-bold uppercase tracking-wide text-white">
                {col.title}
              </h4>
              <ul className="space-y-3 text-sm">
                {col.links.map((l) => (
                  <li key={l.label}>
                    {"external" in l && l.external ? (
                      <a
                        href={l.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-400 transition-colors hover:text-brand"
                      >
                        {l.label}
                      </a>
                    ) : (
                      <Link
                        href={l.href}
                        className="text-slate-400 transition-colors hover:text-brand"
                      >
                        {l.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}

          {/* Contact */}
          <motion.div variants={fadeUp}>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-wide text-white">
              Kontak
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href={waLink("Halo Makmur Motor, saya ingin bertanya")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-slate-400 transition-colors hover:text-brand"
                >
                  <Phone className="h-4 w-4" /> {CONTACT.whatsappDisplay}
                </a>
              </li>
              <li>
                <a
                  href={waLink(
                    "Halo Makmur Motor, saya ingin bertanya",
                    CONTACT.whatsappNumber2,
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-slate-400 transition-colors hover:text-brand"
                >
                  <Phone className="h-4 w-4" /> {CONTACT.whatsappDisplay2}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="flex items-start gap-2 text-slate-400 transition-colors hover:text-brand"
                >
                  <Mail className="mt-0.5 h-4 w-4 shrink-0" />
                  <span className="break-words text-[13px] leading-snug">
                    {CONTACT.email}
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={CONTACT.showroom1}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-slate-400 transition-colors hover:text-brand"
                >
                  <MapPin className="h-4 w-4 shrink-0" /> Denpasar, Bali
                </a>
              </li>
            </ul>

            <div className="mt-5 flex gap-3">
              {[
                { icon: TikTokIcon, href: CONTACT.tiktok, label: "TikTok" },
                { icon: Instagram, href: CONTACT.tiktok, label: "Instagram" },
              ].map((s) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  whileHover={{ scale: 1.15, rotate: 6 }}
                  whileTap={{ scale: 0.9 }}
                  className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/5 text-white transition-colors hover:border-brand hover:bg-brand"
                >
                  <s.icon className="h-4 w-4" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-px flex flex-col items-center justify-between gap-2 py-6 text-xs text-slate-500 md:flex-row">
          <p>
            © {new Date().getFullYear()} Makmur Motor. Seluruh hak cipta
            dilindungi.
          </p>
          <p>Showroom Mobil & Motor Bekas Terpercaya — Denpasar, Bali.</p>
        </div>
      </div>
    </footer>
  );
}
