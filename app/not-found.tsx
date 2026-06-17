import Link from "next/link";
import { Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-4 text-center">
      <p className="text-7xl font-bold text-brand">404</p>
      <h1 className="mt-4 text-2xl font-bold tracking-tight md:text-3xl">
        Halaman tidak ditemukan
      </h1>
      <p className="mt-2 max-w-md text-ink-soft">
        Maaf, mobil atau halaman yang Anda cari tidak tersedia. Mungkin sudah
        terjual atau alamatnya salah.
      </p>
      <div className="mt-7 flex flex-wrap justify-center gap-3">
        <Link href="/" className="btn-primary">
          <Home className="h-4 w-4" />
          Kembali ke Beranda
        </Link>
        <Link href="/katalog" className="btn-ghost">
          Lihat Katalog
        </Link>
      </div>
    </div>
  );
}
