import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { CONTACT } from "./contact";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** Nomor WhatsApp utama (single source of truth ada di `lib/contact.ts`). */
export const WA_NUMBER = CONTACT.whatsappNumber;

/** Bangun link chat WhatsApp. Default ke nomor utama; oper `number` untuk nomor lain. */
export function waLink(message: string, number: string = WA_NUMBER) {
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

export function formatRupiah(value: number) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);
}
