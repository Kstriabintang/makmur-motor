import type { MetadataRoute } from "next";
import { getVisibleCars } from "@/lib/db/queries";

const BASE_URL = "https://makmurmotor.biz.id";

export const dynamic = "force-dynamic";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const cars = await getVisibleCars();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: BASE_URL, lastModified: new Date(), changeFrequency: "daily", priority: 1 },
    {
      url: `${BASE_URL}/katalog`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.9,
    },
  ];

  const carRoutes: MetadataRoute.Sitemap = cars.map((c) => ({
    url: `${BASE_URL}/mobil/${c.id}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  return [...staticRoutes, ...carRoutes];
}
