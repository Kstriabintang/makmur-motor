"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Pencil, Trash2, Eye, EyeOff, ImageOff } from "lucide-react";
import type { AdminCar } from "@/lib/db/queries";

export function DashboardTable({ cars }: { cars: AdminCar[] }) {
  const router = useRouter();
  const [busyId, setBusyId] = useState<string | null>(null);

  async function toggleSold(car: AdminCar) {
    setBusyId(car.id);
    try {
      await fetch(`/api/admin/cars/${car.id}/sold`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ sold: !car.sold }),
      });
      router.refresh();
    } finally {
      setBusyId(null);
    }
  }

  async function remove(car: AdminCar) {
    if (!confirm(`Hapus "${car.nama} ${car.tahun}" secara permanen?`)) return;
    setBusyId(car.id);
    try {
      await fetch(`/api/admin/cars/${car.id}`, { method: "DELETE" });
      router.refresh();
    } finally {
      setBusyId(null);
    }
  }

  if (cars.length === 0) {
    return (
      <div className="rounded-2xl border border-dashed border-card-border p-12 text-center text-ink-soft">
        Belum ada mobil. Klik <span className="font-semibold">Tambah Mobil</span> untuk mulai.
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-2xl border border-card-border bg-white dark:border-white/10 dark:bg-slate-900">
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead className="border-b border-card-border bg-slate-50 text-xs uppercase tracking-wide text-ink-soft dark:border-white/10 dark:bg-white/[0.03]">
            <tr>
              <th className="px-4 py-3 font-semibold">Mobil</th>
              <th className="px-4 py-3 font-semibold">Harga</th>
              <th className="hidden px-4 py-3 font-semibold md:table-cell">Kategori</th>
              <th className="px-4 py-3 font-semibold">Status</th>
              <th className="px-4 py-3 text-right font-semibold">Aksi</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-card-border dark:divide-white/10">
            {cars.map((car) => {
              const busy = busyId === car.id;
              return (
                <tr key={car.id} className={busy ? "opacity-50" : ""}>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-3">
                      <div className="relative h-12 w-16 shrink-0 overflow-hidden rounded-lg bg-slate-100 dark:bg-slate-800">
                        {car.photos[0] ? (
                          // eslint-disable-next-line @next/next/no-img-element
                          <img
                            src={car.photos[0]}
                            alt={car.nama}
                            className="h-full w-full object-cover"
                          />
                        ) : (
                          <div className="flex h-full w-full items-center justify-center text-ink-soft">
                            <ImageOff className="h-4 w-4" />
                          </div>
                        )}
                      </div>
                      <div>
                        <p className="font-semibold text-ink">{car.nama}</p>
                        <p className="text-xs text-ink-soft">
                          {car.tahun} · {car.transmisi} · {car.photos.length} foto
                          {car.featured && (
                            <span className="ml-1 text-brand">· Unggulan</span>
                          )}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-3 font-medium text-ink">{car.hargaFormatted}</td>
                  <td className="hidden px-4 py-3 text-ink-soft md:table-cell">
                    {car.kategori}
                  </td>
                  <td className="px-4 py-3">
                    {car.sold ? (
                      <span className="inline-flex rounded-full bg-slate-200 px-2.5 py-1 text-xs font-semibold text-slate-700 dark:bg-slate-700 dark:text-slate-200">
                        Terjual
                      </span>
                    ) : (
                      <span className="inline-flex rounded-full bg-green-100 px-2.5 py-1 text-xs font-semibold text-green-700 dark:bg-green-900/40 dark:text-green-300">
                        Tersedia
                      </span>
                    )}
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex items-center justify-end gap-1">
                      <button
                        onClick={() => toggleSold(car)}
                        disabled={busy}
                        title={car.sold ? "Tandai tersedia" : "Tandai terjual"}
                        className="rounded-lg p-2 text-ink-soft transition-colors hover:bg-slate-100 hover:text-ink dark:hover:bg-white/10"
                      >
                        {car.sold ? (
                          <Eye className="h-4 w-4" />
                        ) : (
                          <EyeOff className="h-4 w-4" />
                        )}
                      </button>
                      <Link
                        href={`/admin/mobil/${car.id}`}
                        title="Edit"
                        className="rounded-lg p-2 text-ink-soft transition-colors hover:bg-slate-100 hover:text-brand dark:hover:bg-white/10"
                      >
                        <Pencil className="h-4 w-4" />
                      </Link>
                      <button
                        onClick={() => remove(car)}
                        disabled={busy}
                        title="Hapus"
                        className="rounded-lg p-2 text-ink-soft transition-colors hover:bg-red-50 hover:text-red-600 dark:hover:bg-red-950/40"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
