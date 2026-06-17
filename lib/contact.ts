export const CONTACT = {
  brand: "Makmur Motor",
  tagline: "Premium Car Showroom — Jual Beli Mobil Berkualitas",
  whatsappDisplay: "081259174400",
  whatsappNumber: "6281259174400",
  email: "makmurmotorantasura@gmail.com",
  tiktok: "https://www.tiktok.com/@makmurmotordps",
  tiktokHandle: "@makmurmotordps",
  showroom1: "https://share.google/m1xRkY88G4B6YOj9T",
  showroom2: "https://share.google/CavdMryz9V3RPAkFb",
  city: "Denpasar",
} as const;

/**
 * Lokasi showroom. `mapsLink` adalah link Google Maps resmi (dari pemilik) —
 * dipakai untuk tombol "Petunjuk Arah" dan klik pada peta. `embedQuery` dipakai
 * untuk menampilkan peta tersemat (iframe) tanpa perlu API key.
 */
export const SHOWROOMS = [
  {
    name: "Showroom 1",
    label: "Showroom 1 — Denpasar",
    address: "Denpasar, Bali",
    mapsLink: "https://share.google/m1xRkY88G4B6YOj9T",
    embedQuery: "Makmur Motor Antasura Denpasar",
  },
  {
    name: "Showroom 2",
    label: "Showroom 2 — Denpasar",
    address: "Denpasar, Bali",
    mapsLink: "https://share.google/CavdMryz9V3RPAkFb",
    embedQuery: "UD Makmur Motor 12 Denpasar",
  },
] as const;

/** URL iframe Google Maps tersemat (keyless) untuk sebuah query lokasi. */
export function mapsEmbedUrl(query: string): string {
  return `https://www.google.com/maps?q=${encodeURIComponent(query)}&hl=id&z=15&output=embed`;
}
