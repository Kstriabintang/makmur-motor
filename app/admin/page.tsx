import Link from "next/link";
import { Plus, Car, Tag } from "lucide-react";
import { getAllCarsAdmin } from "@/lib/db/queries";
import { DashboardTable } from "@/components/admin/dashboard-table";
import { Button } from "@/components/ui/button";

export const dynamic = "force-dynamic";

export default async function AdminDashboard() {
  const cars = await getAllCarsAdmin();
  const sold = cars.filter((c) => c.sold).length;
  const available = cars.length - sold;

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Kelola Mobil</h1>
          <p className="mt-1 text-sm text-ink-soft">
            {cars.length} unit · {available} tersedia · {sold} terjual
          </p>
        </div>
        <Button asChild shape="rounded">
          <Link href="/admin/mobil/baru">
            <Plus className="h-4 w-4" />
            Tambah Mobil
          </Link>
        </Button>
      </div>

      <div className="grid grid-cols-2 gap-4 sm:max-w-md">
        <div className="rounded-2xl border border-card-border bg-white p-4 dark:border-white/10 dark:bg-slate-900">
          <div className="flex items-center gap-2 text-ink-soft">
            <Car className="h-4 w-4" />
            <span className="text-xs font-medium uppercase tracking-wide">Tersedia</span>
          </div>
          <p className="mt-2 text-3xl font-bold text-success">{available}</p>
        </div>
        <div className="rounded-2xl border border-card-border bg-white p-4 dark:border-white/10 dark:bg-slate-900">
          <div className="flex items-center gap-2 text-ink-soft">
            <Tag className="h-4 w-4" />
            <span className="text-xs font-medium uppercase tracking-wide">Terjual</span>
          </div>
          <p className="mt-2 text-3xl font-bold text-ink-soft">{sold}</p>
        </div>
      </div>

      <DashboardTable cars={cars} />
    </div>
  );
}
