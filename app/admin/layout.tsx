import type { Metadata } from "next";
import Link from "next/link";
import { getSession } from "@/lib/auth";
import { LogoutButton } from "@/components/admin/logout-button";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Admin — Makmur Motor",
  robots: { index: false, follow: false },
};

export default async function AdminLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const session = await getSession();

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950">
      {session && (
        <header className="sticky top-0 z-30 border-b border-card-border bg-white/90 backdrop-blur dark:border-white/10 dark:bg-slate-900/90">
          <div className="container-px flex h-16 items-center justify-between">
            <Link href="/admin" className="flex items-center gap-2">
              <span className="font-display text-lg font-bold text-brand">
                Makmur Motor
              </span>
              <span className="rounded-full bg-brand/10 px-2 py-0.5 text-xs font-semibold text-brand">
                Admin
              </span>
            </Link>
            <div className="flex items-center gap-4">
              <Link
                href="/"
                target="_blank"
                className="text-sm font-medium text-ink-soft transition-colors hover:text-brand"
              >
                Lihat Situs ↗
              </Link>
              <LogoutButton />
            </div>
          </div>
        </header>
      )}
      <main className="container-px py-8">{children}</main>
    </div>
  );
}
