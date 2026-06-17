"use client";

import { FilterChip } from "@/components/filter/filter-chip";
import { allCategories, allTransmisi } from "@/lib/data";
import { formatRupiah } from "@/lib/utils";

export interface Filters {
  kategori: string[];
  transmisi: string[];
  lokasi: string[];
  maxHarga: number;
  minTahun: number;
}

interface SidebarProps {
  filters: Filters;
  setFilters: React.Dispatch<React.SetStateAction<Filters>>;
  priceBounds: [number, number];
  yearBounds: [number, number];
  onReset: () => void;
}

export function FilterSidebar({
  filters,
  setFilters,
  priceBounds,
  yearBounds,
  onReset,
}: SidebarProps) {
  const toggle = (key: "kategori" | "transmisi" | "lokasi", value: string) => {
    setFilters((prev) => {
      const exists = prev[key].includes(value);
      return {
        ...prev,
        [key]: exists
          ? prev[key].filter((v) => v !== value)
          : [...prev[key], value],
      };
    });
  };

  return (
    <div className="space-y-7">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-bold">Filter</h3>
        <button
          onClick={onReset}
          className="text-xs font-semibold text-brand hover:underline"
        >
          Reset
        </button>
      </div>

      <Group title="Kategori">
        <div className="flex flex-wrap gap-2">
          {allCategories.map((c) => (
            <FilterChip
              key={c}
              label={c}
              active={filters.kategori.includes(c)}
              removable
              onClick={() => toggle("kategori", c)}
            />
          ))}
        </div>
      </Group>

      <Group title="Transmisi">
        <div className="flex flex-wrap gap-2">
          {allTransmisi.map((t) => (
            <FilterChip
              key={t}
              label={t}
              active={filters.transmisi.includes(t)}
              removable
              onClick={() => toggle("transmisi", t)}
            />
          ))}
        </div>
      </Group>

      <Group title={`Harga maksimal — ${formatRupiah(filters.maxHarga)}`}>
        <input
          type="range"
          min={priceBounds[0]}
          max={priceBounds[1]}
          step={1_000_000}
          value={filters.maxHarga}
          onChange={(e) =>
            setFilters((p) => ({ ...p, maxHarga: Number(e.target.value) }))
          }
          className="w-full accent-brand"
        />
        <div className="mt-1 flex justify-between text-xs text-ink-light">
          <span>{formatRupiah(priceBounds[0])}</span>
          <span>{formatRupiah(priceBounds[1])}</span>
        </div>
      </Group>

      <Group title={`Tahun minimal — ${filters.minTahun}`}>
        <input
          type="range"
          min={yearBounds[0]}
          max={yearBounds[1]}
          step={1}
          value={filters.minTahun}
          onChange={(e) =>
            setFilters((p) => ({ ...p, minTahun: Number(e.target.value) }))
          }
          className="w-full accent-brand"
        />
        <div className="mt-1 flex justify-between text-xs text-ink-light">
          <span>{yearBounds[0]}</span>
          <span>{yearBounds[1]}</span>
        </div>
      </Group>
    </div>
  );
}

function Group({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <p className="mb-3 text-sm font-semibold">{title}</p>
      {children}
    </div>
  );
}
