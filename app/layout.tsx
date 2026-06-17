import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { CONTACT } from "@/lib/contact";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const grotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-grotesk",
  display: "swap",
  weight: ["500", "600", "700"],
});

const SITE_URL = "https://makmurmotor.biz.id";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Makmur Motor — Premium Car Showroom Denpasar",
    template: "%s | Makmur Motor",
  },
  description:
    "Makmur Motor — Showroom jual beli mobil & motor bekas berkualitas di Denpasar. Harga kompetitif, garansi mesin, dokumen lengkap, dan proses cepat.",
  keywords: [
    "showroom mobil denpasar",
    "jual beli mobil bekas bali",
    "mobil bekas berkualitas",
    "makmur motor",
    "mobil bekas denpasar",
  ],
  authors: [{ name: "Makmur Motor" }],
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: SITE_URL,
    siteName: "Makmur Motor",
    title: "Makmur Motor — Premium Car Showroom Denpasar",
    description:
      "Showroom jual beli mobil & motor bekas berkualitas di Denpasar. Harga kompetitif, garansi mesin, dokumen lengkap.",
    images: [{ url: "/logo/LOGO.png", width: 1200, height: 630, alt: "Makmur Motor" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Makmur Motor — Premium Car Showroom Denpasar",
    description:
      "Showroom jual beli mobil & motor bekas berkualitas di Denpasar.",
    images: ["/logo/LOGO.png"],
  },
  icons: { icon: "/logo/LOGO-NO-BG.png" },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#0F172A",
  width: "device-width",
  initialScale: 1,
};

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "AutoDealer",
  name: CONTACT.brand,
  description: CONTACT.tagline,
  email: CONTACT.email,
  telephone: `+${CONTACT.whatsappNumber}`,
  url: SITE_URL,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Denpasar",
    addressRegion: "Bali",
    addressCountry: "ID",
  },
  sameAs: [CONTACT.tiktok],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
      </head>
      <body className={`${jakarta.variable} ${grotesk.variable} font-sans`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
