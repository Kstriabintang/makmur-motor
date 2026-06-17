import type { Car } from "@/types/car";

/**
 * A car together with the list of photo URLs to display. Photos are stored in
 * the database (`cars.photos`) — originally seeded from `public/cars/<folder>`
 * and extended by admin uploads (served from `/api/images/...`).
 */
export type CarWithPhotos = Car & { photos: string[] };

/** Static hero image (a studio shot on a clean background) in `public/hero/`. */
export const HERO_IMAGE = "/hero/BMW-M4.png";
