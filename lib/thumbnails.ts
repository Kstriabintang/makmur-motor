/**
 * Thumbnail override per folder: the chosen file is forced to be the FIRST photo
 * so every card/gallery cover shows a consistent exterior front (or front 3/4)
 * shot instead of a random angle (rear, side, interior, dashboard, etc.).
 * Picked by a manual audit of each folder's photos. Used by the seed script when
 * importing the original inventory; the rest of the gallery keeps its natural
 * order. Original files are not renamed.
 */
export const THUMBNAILS: Record<string, string> = {
  "agya-g-trd-2018": "1.jpg",
  "avanza-g-2020": "3.jpg",
  "brv-e-2022": "2.jpg",
  "canter-engkel-2015": "1.jpg",
  "confero-2021": "1.jpg",
  "engkel-box-2013": "2.jpg",
  "engkel-box-2016": "3.jpg",
  "ertiga-gl-2023": "7.jpg",
  "futura-2014": "8.jpg",
  "hrv-e-cvt-2018": "5.jpg",
  "innova-reborn-diesel-2021": "1.jpg",
  "new-carry-acps-2024": "1.jpg",
  "new-carry-std-2023": "4.jpg",
  "pajero-sport-dakar-2023": "10.jpg",
  "panther-pickup-2014": "3.jpg",
  "panther-pickup-acps-2017": "2.jpg",
  "rush-gr-sport-2021": "8.jpg",
  "sienta-v-2017": "1.jpg",
  "traga-box-2023": "2.jpg",
  "xenia-ads-2022": "2.jpg",
  "xl7-zeta-2024": "3.jpg",
  "xpander-sport-2019": "3.jpg",
  "yaris-trd-sportivo-2019": "1.jpg",
};
