import { HeroSection } from "@/components/hero-section";
import { CarCategory } from "@/components/car-category";
import { FeaturedCars } from "@/components/featured-cars";
import { FeaturesSection } from "@/components/features-section";
import { PromoSection } from "@/components/promo-section";
import { LocationSection } from "@/components/location-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { getFeaturedCars, getCategoryImages } from "@/lib/db/queries";
import { HERO_IMAGE } from "@/lib/photos";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const featured = await getFeaturedCars();
  const promoCar =
    featured.find((c) => c.harga >= 300_000_000) ?? featured[0] ?? null;
  const heroImage = HERO_IMAGE;
  const categoryImages = await getCategoryImages();

  return (
    <>
      <HeroSection heroCar={promoCar} heroImage={heroImage} />
      <CarCategory images={categoryImages} />
      <FeaturedCars cars={featured} />
      <FeaturesSection />
      <PromoSection car={promoCar} />
      <TestimonialsSection />
      <LocationSection />
    </>
  );
}
