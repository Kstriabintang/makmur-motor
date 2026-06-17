import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getCarById, getRelatedCars } from "@/lib/db/queries";
import { DetailHero, gradientByCategory } from "@/components/car-detail/hero";
import { Specs } from "@/components/car-detail/specs";
import { Gallery } from "@/components/car-detail/gallery";
import { RelatedCars } from "@/components/car-detail/related-cars";
import { carJsonLd, breadcrumbJsonLd } from "@/lib/seo";

export const dynamic = "force-dynamic";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const car = await getCarById(id);
  if (!car) return { title: "Mobil tidak ditemukan" };

  return {
    title: `${car.nama} ${car.tahun} — ${car.hargaFormatted}`,
    description: `${car.nama} ${car.tahun} ${car.transmisi} ${car.bahanBakar}, KM ${car.km}, ${car.lokasi}. Harga ${car.hargaFormatted}. Tersedia di Makmur Motor Denpasar.`,
    alternates: { canonical: `/mobil/${car.id}` },
    openGraph: {
      title: `${car.nama} ${car.tahun} — Makmur Motor`,
      description: `${car.hargaFormatted} · ${car.kategori} · ${car.transmisi} · ${car.km} km`,
      images: car.photos[0] ? [{ url: car.photos[0] }] : undefined,
    },
  };
}

export default async function MobilDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const car = await getCarById(id);
  if (!car) notFound();

  const related = await getRelatedCars(car, 4);
  const gradient = gradientByCategory[car.kategori] ?? gradientByCategory.SUV;

  const jsonLd = [
    carJsonLd(car),
    breadcrumbJsonLd([
      { name: "Home", path: "/" },
      { name: "Katalog", path: "/katalog" },
      { name: `${car.nama} ${car.tahun}`, path: `/mobil/${car.id}` },
    ]),
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <DetailHero car={car} />
      <Specs car={car} />
      <Gallery photos={car.photos} name={car.nama} gradient={gradient} />
      <RelatedCars cars={related} />
    </>
  );
}
