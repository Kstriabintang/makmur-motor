"use client";

import { X } from "lucide-react";
import { cn } from "@/lib/utils";

interface FilterChipProps {
  label: string;
  active?: boolean;
  onClick?: () => void;
  removable?: boolean;
}

export function FilterChip({
  label,
  active,
  onClick,
  removable,
}: FilterChipProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-3.5 py-1.5 text-sm font-medium transition-all duration-200",
        active
          ? "border-brand bg-brand text-white shadow-sm shadow-brand/30"
          : "border-card-border bg-white text-ink-soft hover:border-brand hover:text-brand dark:border-white/10 dark:bg-white/5 dark:text-slate-300"
      )}
    >
      {label}
      {removable && active && <X className="h-3.5 w-3.5" />}
    </button>
  );
}
