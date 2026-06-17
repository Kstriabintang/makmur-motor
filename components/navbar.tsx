"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu, Moon, Search, Sun } from "lucide-react";
import { cn } from "@/lib/utils";
import { useTheme } from "@/components/theme-provider";
import { MobileMenu } from "@/components/mobile-menu";
import { SearchOverlay } from "@/components/search-overlay";

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Katalog", href: "/katalog" },
  { label: "Kategori", href: "/#kategori" },
  { label: "Blog", href: "/blog" },
  { label: "Tentang", href: "/#tentang" },
  { label: "Kontak", href: "/#kontak" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const pathname = usePathname();

  // Only the homepage has a black hero behind the navbar. On other routes the
  // top of the page is light, so the navbar is always solid there.
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solid = scrolled || !isHome;

  const iconBtn = cn(
    "grid h-10 w-10 place-items-center rounded-full transition-colors lg:h-11 lg:w-11",
    solid
      ? "text-ink-soft hover:bg-slate-100 hover:text-ink dark:text-slate-300 dark:hover:bg-white/10"
      : "text-white/80 hover:bg-white/10 hover:text-white"
  );

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-300 ease-smooth",
          solid
            ? "border-b border-card-border/60 bg-white/80 backdrop-blur-xl dark:border-white/10 dark:bg-ink/80"
            : "bg-transparent"
        )}
      >
        <nav className="mx-auto flex h-20 w-full max-w-[1800px] items-center justify-between px-5 sm:px-8 md:h-28 lg:px-12">
          <Link href="/" className="flex items-center gap-2" aria-label="Makmur Motor home">
            <Image
              src="/logo/LOGO-NO-BG.png"
              alt="Makmur Motor"
              width={220}
              height={80}
              priority
              className={cn(
                "h-[4.5rem] w-auto object-contain transition md:h-24 lg:h-[6.375rem]",
                solid ? "dark:brightness-0 dark:invert" : "brightness-0 invert"
              )}
            />
          </Link>

          <div className="hidden items-center gap-1 md:flex lg:gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "rounded-full px-4 py-2 text-sm font-medium transition-colors lg:px-5 lg:text-[15px]",
                  solid
                    ? "text-ink-soft hover:bg-slate-100 hover:text-ink dark:text-slate-300 dark:hover:bg-white/10 dark:hover:text-white"
                    : "text-white/85 hover:bg-white/10 hover:text-white"
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-1">
            <button
              onClick={() => setSearchOpen(true)}
              aria-label="Cari mobil"
              className={iconBtn}
            >
              <Search className="h-5 w-5" />
            </button>
            <button
              onClick={toggleTheme}
              aria-label="Toggle dark mode"
              className={iconBtn}
            >
              {theme === "dark" ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </button>
            <button
              onClick={() => setMenuOpen(true)}
              aria-label="Buka menu"
              className={cn(iconBtn, "md:hidden")}
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </nav>
      </motion.header>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
      <SearchOverlay open={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}
