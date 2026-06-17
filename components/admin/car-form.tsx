"use client";

import { useRouter } from "next/navigation";
import { useRef, useState } from "react";
import { Star, Trash2, Upload, Loader2, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { formatRupiah } from "@/lib/utils";
import {
  bahanBakarOptions,
  carCategories,
  transmisiOptions,
} from "@/lib/validation";
import type { AdminCar } from "@/lib/db/queries";

const inputClass =
  "w-full rounded-xl border border-card-border bg-white px-3 py-2.5 text-sm outline-none ring-brand focus:ring-2 dark:bg-slate-800";
const labelClass = "mb-1 block text-sm font-medium text-ink";

export function CarForm({ car }: { car?: AdminCar }) {
  const router = useRouter();
  const isEdit = Boolean(car);
  const fileRef = useRef<HTMLInputElement>(null);

  const [form, setForm] = useState({
    nama: car?.nama ?? "",
    tahun: String(car?.tahun ?? new Date().getFullYear()),
    harga: String(car?.harga ?? ""),
    hargaCash: car?.hargaCash != null ? String(car.hargaCash) : "",
    kategori: car?.kategori ?? "SUV",
    transmisi: car?.transmisi ?? "Manual",
    bahanBakar: car?.bahanBakar ?? "Bensin",
    km: car?.km ?? "",
    warna: car?.warna ?? "",
    lokasi: car?.lokasi ?? "Showroom Antasura",
    whatsappMessage: car?.whatsappMessage ?? "",
    featured: car?.featured ?? false,
    sold: car?.sold ?? false,
  });
  const [photos, setPhotos] = useState<string[]>(car?.photos ?? []);
  const [uploading, setUploading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);

  function update<K extends keyof typeof form>(key: K, value: (typeof form)[K]) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  async function handleFiles(files: FileList | null) {
    if (!files || files.length === 0) return;
    setUploading(true);
    setError(null);
    try {
      const uploaded: string[] = [];
      for (const file of Array.from(files)) {
        const fd = new FormData();
        fd.append("file", file);
        const res = await fetch("/api/admin/upload", { method: "POST", body: fd });
        if (!res.ok) {
          const data = (await res.json().catch(() => ({}))) as { error?: string };
          throw new Error(data.error || `Gagal mengunggah ${file.name}`);
        }
        const data = (await res.json()) as { url: string };
        uploaded.push(data.url);
      }
      setPhotos((p) => [...p, ...uploaded]);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Gagal mengunggah foto");
    } finally {
      setUploading(false);
      if (fileRef.current) fileRef.current.value = "";
    }
  }

  function removePhoto(url: string) {
    setPhotos((p) => p.filter((u) => u !== url));
  }

  function makeCover(url: string) {
    setPhotos((p) => [url, ...p.filter((u) => u !== url)]);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setSaving(true);
    try {
      const payload = {
        nama: form.nama,
        tahun: Number(form.tahun),
        harga: Number(form.harga),
        hargaCash: form.hargaCash === "" ? null : Number(form.hargaCash),
        kategori: form.kategori,
        transmisi: form.transmisi,
        bahanBakar: form.bahanBakar,
        km: form.km,
        warna: form.warna || null,
        lokasi: form.lokasi,
        whatsappMessage: form.whatsappMessage || undefined,
        featured: form.featured,
        sold: form.sold,
        photos,
      };

      const res = await fetch(
        isEdit ? `/api/admin/cars/${car!.id}` : "/api/admin/cars",
        {
          method: isEdit ? "PATCH" : "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        },
      );

      if (!res.ok) {
        const data = (await res.json().catch(() => ({}))) as { error?: string };
        throw new Error(data.error || "Gagal menyimpan");
      }

      router.push("/admin");
      router.refresh();
    } catch (e) {
      setError(e instanceof Error ? e.message : "Gagal menyimpan");
      setSaving(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="flex items-center gap-3">
        <Link
          href="/admin"
          className="rounded-lg p-2 text-ink-soft hover:bg-slate-100 dark:hover:bg-white/10"
        >
          <ArrowLeft className="h-5 w-5" />
        </Link>
        <h1 className="text-2xl font-bold tracking-tight">
          {isEdit ? `Edit: ${car!.nama}` : "Tambah Mobil Baru"}
        </h1>
      </div>

      {error && (
        <p className="rounded-lg bg-red-50 px-4 py-3 text-sm text-red-600 dark:bg-red-950/40">
          {error}
        </p>
      )}

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Main details */}
        <div className="space-y-4 rounded-2xl border border-card-border bg-white p-5 dark:border-white/10 dark:bg-slate-900 lg:col-span-2">
          <div>
            <label className={labelClass}>Nama Mobil *</label>
            <input
              className={inputClass}
              value={form.nama}
              onChange={(e) => update("nama", e.target.value)}
              placeholder="Toyota Avanza G"
              required
            />
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className={labelClass}>Tahun *</label>
              <input
                type="number"
                className={inputClass}
                value={form.tahun}
                onChange={(e) => update("tahun", e.target.value)}
                min={1980}
                max={2100}
                required
              />
            </div>
            <div>
              <label className={labelClass}>KM *</label>
              <input
                className={inputClass}
                value={form.km}
                onChange={(e) => update("km", e.target.value)}
                placeholder="95.000"
                required
              />
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className={labelClass}>Harga Kredit (Rp) *</label>
              <input
                type="number"
                className={inputClass}
                value={form.harga}
                onChange={(e) => update("harga", e.target.value)}
                placeholder="175000000"
                required
              />
              {form.harga && (
                <p className="mt-1 text-xs text-ink-soft">
                  {formatRupiah(Number(form.harga))}
                </p>
              )}
            </div>
            <div>
              <label className={labelClass}>Harga Cash (Rp)</label>
              <input
                type="number"
                className={inputClass}
                value={form.hargaCash}
                onChange={(e) => update("hargaCash", e.target.value)}
                placeholder="opsional"
              />
              {form.hargaCash && (
                <p className="mt-1 text-xs text-ink-soft">
                  {formatRupiah(Number(form.hargaCash))}
                </p>
              )}
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            <div>
              <label className={labelClass}>Kategori *</label>
              <select
                className={inputClass}
                value={form.kategori}
                onChange={(e) => update("kategori", e.target.value as typeof form.kategori)}
              >
                {carCategories.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className={labelClass}>Transmisi *</label>
              <select
                className={inputClass}
                value={form.transmisi}
                onChange={(e) => update("transmisi", e.target.value as typeof form.transmisi)}
              >
                {transmisiOptions.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className={labelClass}>Bahan Bakar *</label>
              <select
                className={inputClass}
                value={form.bahanBakar}
                onChange={(e) => update("bahanBakar", e.target.value as typeof form.bahanBakar)}
              >
                {bahanBakarOptions.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className={labelClass}>Warna</label>
              <input
                className={inputClass}
                value={form.warna}
                onChange={(e) => update("warna", e.target.value)}
                placeholder="Hitam"
              />
            </div>
            <div>
              <label className={labelClass}>Lokasi *</label>
              <input
                className={inputClass}
                value={form.lokasi}
                onChange={(e) => update("lokasi", e.target.value)}
                required
              />
            </div>
          </div>

          <div>
            <label className={labelClass}>Pesan WhatsApp (opsional)</label>
            <textarea
              className={inputClass}
              rows={2}
              value={form.whatsappMessage}
              onChange={(e) => update("whatsappMessage", e.target.value)}
              placeholder="Otomatis dibuat jika dikosongkan"
            />
          </div>

          <div className="flex flex-wrap gap-6 pt-1">
            <label className="flex cursor-pointer items-center gap-2 text-sm font-medium">
              <input
                type="checkbox"
                className="h-4 w-4 accent-brand"
                checked={form.featured}
                onChange={(e) => update("featured", e.target.checked)}
              />
              Tampilkan di Unggulan (homepage)
            </label>
            <label className="flex cursor-pointer items-center gap-2 text-sm font-medium">
              <input
                type="checkbox"
                className="h-4 w-4 accent-brand"
                checked={form.sold}
                onChange={(e) => update("sold", e.target.checked)}
              />
              Terjual (sembunyikan dari situs)
            </label>
          </div>
        </div>

        {/* Photos */}
        <div className="space-y-4 rounded-2xl border border-card-border bg-white p-5 dark:border-white/10 dark:bg-slate-900">
          <div>
            <p className="text-sm font-semibold text-ink">Foto Mobil</p>
            <p className="text-xs text-ink-soft">
              Foto pertama jadi sampul. {photos.length} foto.
            </p>
          </div>

          <button
            type="button"
            onClick={() => fileRef.current?.click()}
            disabled={uploading}
            className="flex w-full flex-col items-center justify-center gap-2 rounded-xl border-2 border-dashed border-card-border py-8 text-sm text-ink-soft transition-colors hover:border-brand hover:text-brand"
          >
            {uploading ? (
              <>
                <Loader2 className="h-6 w-6 animate-spin" />
                Mengunggah…
              </>
            ) : (
              <>
                <Upload className="h-6 w-6" />
                Pilih / Tarik Foto
              </>
            )}
          </button>
          <input
            ref={fileRef}
            type="file"
            accept="image/*"
            multiple
            className="hidden"
            onChange={(e) => handleFiles(e.target.files)}
          />

          <div className="grid grid-cols-3 gap-2">
            {photos.map((url, i) => (
              <div
                key={url}
                className="group relative aspect-square overflow-hidden rounded-lg border border-card-border bg-slate-100 dark:bg-slate-800"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={url} alt="" className="h-full w-full object-cover" />
                {i === 0 && (
                  <span className="absolute left-1 top-1 rounded bg-brand px-1.5 py-0.5 text-[10px] font-semibold text-white">
                    Sampul
                  </span>
                )}
                <div className="absolute inset-0 flex items-center justify-center gap-1 bg-black/50 opacity-0 transition-opacity group-hover:opacity-100">
                  {i !== 0 && (
                    <button
                      type="button"
                      onClick={() => makeCover(url)}
                      title="Jadikan sampul"
                      className="rounded-md bg-white/90 p-1.5 text-ink hover:bg-white"
                    >
                      <Star className="h-4 w-4" />
                    </button>
                  )}
                  <button
                    type="button"
                    onClick={() => removePhoto(url)}
                    title="Hapus foto"
                    className="rounded-md bg-white/90 p-1.5 text-red-600 hover:bg-white"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <Button type="submit" shape="rounded" disabled={saving || uploading}>
          {saving ? "Menyimpan…" : isEdit ? "Simpan Perubahan" : "Tambah Mobil"}
        </Button>
        <Button asChild variant="outline" shape="rounded">
          <Link href="/admin">Batal</Link>
        </Button>
      </div>
    </form>
  );
}
