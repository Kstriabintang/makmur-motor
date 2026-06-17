import { CONTACT } from "./contact";

/** Canonical site origin (no trailing slash). */
export const SITE_URL = "https://makmurmotor.biz.id";

/**
 * Google Search Console verification code (the value of the
 * `google-site-verification` meta tag). Fill this in after creating the
 * property in Search Console, or verify via DNS TXT instead.
 */
export const GOOGLE_SITE_VERIFICATION =
  "Hk3RHTSu8mJKH1u66TtXSHEXClyl0d0OojQMhHX-8q0";

/** Build an absolute URL from a path or pass-through if already absolute. */
export function abs(pathOrUrl: string): string {
  if (/^https?:\/\//.test(pathOrUrl)) return pathOrUrl;
  return `${SITE_URL}${pathOrUrl.startsWith("/") ? "" : "/"}${pathOrUrl}`;
}

/** Organization / local business — the most important schema for local SEO. */
export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "AutoDealer",
  "@id": `${SITE_URL}/#organization`,
  name: CONTACT.brand,
  description: CONTACT.tagline,
  url: SITE_URL,
  logo: abs("/logo/LOGO.png"),
  image: abs("/logo/LOGO.png"),
  email: CONTACT.email,
  telephone: `+${CONTACT.whatsappNumber}`,
  priceRange: "Rp",
  currenciesAccepted: "IDR",
  paymentAccepted: "Cash, Kredit, Leasing",
  areaServed: [
    { "@type": "City", name: "Denpasar" },
    { "@type": "AdministrativeArea", name: "Bali" },
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Denpasar",
    addressRegion: "Bali",
    addressCountry: "ID",
  },
  sameAs: [CONTACT.tiktok],
};

/** WebSite schema — helps Google understand the site name + search. */
export const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: SITE_URL,
  name: CONTACT.brand,
  description: CONTACT.tagline,
  inLanguage: "id-ID",
  publisher: { "@id": `${SITE_URL}/#organization` },
};

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: abs(it.path),
    })),
  };
}

interface CarLike {
  id: string;
  nama: string;
  tahun: number;
  harga: number;
  kategori: string;
  transmisi: string;
  bahanBakar: string;
  km: string;
  warna?: string;
  sold?: boolean;
  photos: string[];
}

/** Vehicle (Car) schema for a detail page — can produce rich results. */
export function carJsonLd(car: CarLike) {
  const kmValue = Number(car.km.replace(/[^\d]/g, "")) || undefined;
  return {
    "@context": "https://schema.org",
    "@type": "Car",
    name: `${car.nama} ${car.tahun}`,
    brand: { "@type": "Brand", name: car.nama.split(" ")[0] },
    model: car.nama,
    vehicleModelDate: String(car.tahun),
    productionDate: String(car.tahun),
    bodyType: car.kategori,
    fuelType: car.bahanBakar,
    vehicleTransmission: car.transmisi,
    ...(car.warna ? { color: car.warna } : {}),
    ...(kmValue
      ? {
          mileageFromOdometer: {
            "@type": "QuantitativeValue",
            value: kmValue,
            unitCode: "KMT",
          },
        }
      : {}),
    image: car.photos.slice(0, 6).map(abs),
    url: abs(`/mobil/${car.id}`),
    offers: {
      "@type": "Offer",
      price: car.harga,
      priceCurrency: "IDR",
      availability: car.sold
        ? "https://schema.org/SoldOut"
        : "https://schema.org/InStock",
      itemCondition: "https://schema.org/UsedCondition",
      url: abs(`/mobil/${car.id}`),
      seller: { "@id": `${SITE_URL}/#organization` },
    },
  };
}

interface PostLike {
  slug: string;
  title: string;
  description: string;
  date: string;
  cover?: string;
}

export function blogPostingJsonLd(post: PostLike) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    inLanguage: "id-ID",
    mainEntityOfPage: abs(`/blog/${post.slug}`),
    url: abs(`/blog/${post.slug}`),
    image: abs(post.cover ?? "/logo/LOGO.png"),
    author: { "@type": "Organization", name: CONTACT.brand },
    publisher: {
      "@type": "Organization",
      name: CONTACT.brand,
      logo: { "@type": "ImageObject", url: abs("/logo/LOGO.png") },
    },
  };
}
