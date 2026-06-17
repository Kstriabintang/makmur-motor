// Static blog content. SEO-focused articles targeting local + buyer-intent
// keywords (mobil bekas Denpasar, tips beli mobil bekas, dll). Edit posts here.

export type BlogBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "ul"; items: string[] };

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string; // ISO (YYYY-MM-DD)
  author: string;
  cover: string;
  readMinutes: number;
  blocks: BlogBlock[];
}

export const posts: BlogPost[] = [
  {
    slug: "tips-membeli-mobil-bekas-berkualitas-di-denpasar",
    title: "Tips Membeli Mobil Bekas Berkualitas di Denpasar",
    description:
      "Panduan praktis memilih mobil bekas berkualitas di Denpasar, Bali — dari menentukan budget, cek kondisi, hingga memilih showroom terpercaya.",
    date: "2026-06-15",
    author: "Tim Makmur Motor",
    cover: "/cars/innova-reborn-diesel-2021/1.jpg",
    readMinutes: 5,
    blocks: [
      {
        type: "p",
        text: "Membeli mobil bekas adalah keputusan finansial yang besar. Di Denpasar, pasar mobil bekas sangat ramai sehingga Anda perlu jeli agar mendapat unit berkualitas dengan harga wajar. Berikut panduan lengkap dari tim Makmur Motor.",
      },
      { type: "h2", text: "1. Tentukan Budget dan Kebutuhan" },
      {
        type: "p",
        text: "Sebelum melihat-lihat, tentukan dulu anggaran maksimal dan jenis mobil yang sesuai kebutuhan. Keluarga besar cocok dengan MPV seperti Avanza atau Innova, sementara untuk medan Bali yang beragam, SUV seperti Rush atau Pajero Sport bisa jadi pilihan.",
      },
      { type: "h2", text: "2. Periksa Riwayat dan Dokumen" },
      {
        type: "p",
        text: "Pastikan STNK, BPKB, dan faktur lengkap serta sesuai dengan nomor rangka dan mesin. Mobil dengan dokumen lengkap jauh lebih aman dan mudah dijual kembali.",
      },
      { type: "h2", text: "3. Cek Kondisi Fisik dan Mesin" },
      {
        type: "ul",
        items: [
          "Periksa bodi dari karat, bekas tabrakan, atau cat ulang.",
          "Nyalakan mesin dalam kondisi dingin, dengarkan suara tidak wajar.",
          "Cek kondisi ban, kaki-kaki, dan sistem rem.",
          "Pastikan AC dingin dan kelistrikan berfungsi normal.",
        ],
      },
      { type: "h2", text: "4. Lakukan Test Drive" },
      {
        type: "p",
        text: "Test drive membantu Anda merasakan performa mesin, transmisi, dan kenyamanan berkendara. Perhatikan apakah ada getaran, bunyi, atau tarikan yang berat.",
      },
      { type: "h2", text: "5. Beli di Showroom Terpercaya" },
      {
        type: "p",
        text: "Membeli di showroom seperti Makmur Motor memberi jaminan unit sudah dicek, dokumen lengkap, dan ada garansi mesin. Anda juga bisa memanfaatkan layanan tukar tambah dan kredit. Lihat koleksi kami di halaman katalog dan hubungi kami via WhatsApp untuk konsultasi gratis.",
      },
    ],
  },
  {
    slug: "cara-cek-kondisi-mobil-bekas-sebelum-membeli",
    title: "Cara Cek Kondisi Mobil Bekas Sebelum Membeli (Panduan Lengkap)",
    description:
      "Checklist lengkap mengecek kondisi mobil bekas: eksterior, interior, mesin, kaki-kaki, hingga dokumen. Hindari beli kucing dalam karung.",
    date: "2026-06-08",
    author: "Tim Makmur Motor",
    cover: "/cars/pajero-sport-dakar-2023/10.jpg",
    readMinutes: 6,
    blocks: [
      {
        type: "p",
        text: "Mengecek kondisi mobil bekas dengan teliti bisa menyelamatkan Anda dari biaya perbaikan yang mahal di kemudian hari. Gunakan checklist berikut saat survei unit.",
      },
      { type: "h2", text: "Eksterior" },
      {
        type: "ul",
        items: [
          "Cek celah antar-panel bodi; celah tidak rata bisa menandakan bekas tabrakan.",
          "Perhatikan perbedaan warna cat yang menandakan cat ulang.",
          "Periksa kaca, lampu, dan karet pintu dari keretakan.",
        ],
      },
      { type: "h2", text: "Interior" },
      {
        type: "ul",
        items: [
          "Uji semua tombol, power window, dan fitur kelistrikan.",
          "Pastikan AC dingin dengan cepat.",
          "Cek kondisi jok, plafon, dan dashboard dari kerusakan.",
        ],
      },
      { type: "h2", text: "Mesin dan Kaki-Kaki" },
      {
        type: "p",
        text: "Buka kap mesin, periksa kebocoran oli dan kondisi aki. Saat test drive, rasakan apakah ada bunyi pada kaki-kaki ketika melewati jalan tidak rata. Asap knalpot yang berlebihan juga patut diwaspadai.",
      },
      { type: "h2", text: "Odometer dan Riwayat Servis" },
      {
        type: "p",
        text: "Bandingkan angka kilometer dengan kondisi mobil secara keseluruhan. Riwayat servis yang rapi menunjukkan mobil dirawat dengan baik.",
      },
      { type: "h2", text: "Dokumen" },
      {
        type: "p",
        text: "Pastikan STNK, BPKB, dan faktur asli serta cocok dengan nomor rangka dan mesin. Di Makmur Motor, setiap unit sudah melewati pengecekan menyeluruh sehingga Anda bisa membeli dengan tenang.",
      },
    ],
  },
  {
    slug: "keuntungan-beli-mobil-bekas-di-showroom-terpercaya",
    title: "Keuntungan Beli Mobil Bekas di Showroom Terpercaya vs Perorangan",
    description:
      "Beli mobil bekas di showroom atau perorangan? Simak perbandingan dari sisi keamanan, garansi, dokumen, dan kemudahan kredit serta tukar tambah.",
    date: "2026-06-01",
    author: "Tim Makmur Motor",
    cover: "/cars/avanza-g-2020/3.jpg",
    readMinutes: 4,
    blocks: [
      {
        type: "p",
        text: "Banyak calon pembeli bingung memilih antara membeli mobil bekas dari perorangan atau showroom. Keduanya punya kelebihan, tetapi showroom terpercaya menawarkan rasa aman yang lebih besar.",
      },
      { type: "h2", text: "Unit Sudah Diperiksa" },
      {
        type: "p",
        text: "Showroom profesional mengecek setiap unit sebelum dijual, mulai dari mesin, kaki-kaki, hingga kelistrikan. Anda terhindar dari risiko membeli mobil bermasalah.",
      },
      { type: "h2", text: "Dokumen Lengkap dan Legal" },
      {
        type: "p",
        text: "Showroom memastikan dokumen lengkap dan legal, sehingga proses balik nama dan penjualan kembali lebih mudah.",
      },
      { type: "h2", text: "Garansi dan Layanan Purna Jual" },
      {
        type: "p",
        text: "Banyak showroom memberikan garansi mesin dan bantuan purna jual yang tidak Anda dapatkan dari penjual perorangan.",
      },
      { type: "h2", text: "Kemudahan Kredit dan Tukar Tambah" },
      {
        type: "ul",
        items: [
          "Pilihan pembayaran cash maupun kredit/leasing.",
          "Layanan tukar tambah dari mobil lama Anda.",
          "Proses cepat dengan bantuan tim yang berpengalaman.",
        ],
      },
      {
        type: "p",
        text: "Makmur Motor adalah showroom mobil bekas terpercaya di Denpasar dengan unit berkualitas, dokumen lengkap, dan harga kompetitif. Jelajahi katalog kami atau hubungi via WhatsApp untuk penawaran terbaik.",
      },
    ],
  },
];

export function getAllPosts(): BlogPost[] {
  return [...posts].sort((a, b) => b.date.localeCompare(a.date));
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return posts.find((p) => p.slug === slug);
}
