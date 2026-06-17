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
  {
    slug: "tentang-makmur-motor-showroom-mobil-bekas-denpasar",
    title:
      "Mengenal Makmur Motor: Showroom Mobil Bekas Terpercaya di Denpasar Sejak 2004",
    description:
      "Kisah Makmur Motor, showroom mobil bekas berkualitas di Denpasar yang didirikan I Wayan Suweca sejak 2004 — komitmen, layanan, dan nilai yang kami pegang.",
    date: "2026-06-18",
    author: "Tim Makmur Motor",
    cover: "/cars/xl7-zeta-2024/3.jpg",
    readMinutes: 5,
    blocks: [
      {
        type: "p",
        text: "Di balik setiap mobil berkualitas yang kami jual, ada perjalanan panjang dan komitmen yang konsisten. Makmur Motor bukan sekadar showroom — kami adalah mitra terpercaya masyarakat Bali dalam jual beli mobil bekas selama lebih dari dua dekade.",
      },
      { type: "h2", text: "Berdiri Sejak 2004" },
      {
        type: "p",
        text: "Makmur Motor didirikan oleh Bapak I Wayan Suweca pada tahun 2004 di Denpasar, Bali. Berawal dari kecintaan terhadap dunia otomotif dan keinginan menghadirkan mobil bekas yang jujur serta berkualitas, beliau membangun usaha ini dari nol dengan prinsip kepercayaan. Hingga kini, prinsip itu tetap menjadi fondasi kami.",
      },
      { type: "h2", text: "Komitmen Kami" },
      {
        type: "ul",
        items: [
          "Setiap unit diseleksi dan diperiksa kondisinya sebelum dijual.",
          "Dokumen lengkap dan legal — STNK, BPKB, dan faktur sesuai.",
          "Harga kompetitif dan transparan, tanpa biaya tersembunyi.",
          "Garansi mesin dan pelayanan ramah untuk setiap pembeli.",
        ],
      },
      { type: "h2", text: "Layanan Lengkap" },
      {
        type: "p",
        text: "Selain jual beli mobil bekas, kami melayani tukar tambah dari mobil lama Anda serta membantu proses kredit dan leasing dengan mitra terpercaya. Tujuan kami satu: memudahkan Anda mendapatkan mobil impian dengan tenang.",
      },
      { type: "h2", text: "Kunjungi Showroom Kami" },
      {
        type: "p",
        text: "Showroom Makmur Motor berlokasi di kawasan Antasura, Denpasar, Bali. Lihat koleksi terbaru kami di halaman katalog, ikuti keseharian kami di TikTok @makmurmotordps, atau langsung hubungi via WhatsApp untuk konsultasi gratis. Kami siap membantu Anda menemukan mobil yang tepat.",
      },
    ],
  },
  {
    slug: "panduan-membeli-mobil-pertama-untuk-pemula",
    title: "Panduan Membeli Mobil Pertama untuk Pemula",
    description:
      "Baru pertama kali beli mobil? Pelajari cara menentukan budget, memilih jenis mobil, menghitung biaya tersembunyi, hingga tips agar tidak salah beli.",
    date: "2026-06-17",
    author: "Tim Makmur Motor",
    cover: "/cars/agya-g-trd-2018/1.jpg",
    readMinutes: 6,
    blocks: [
      {
        type: "p",
        text: "Membeli mobil pertama adalah momen membanggakan sekaligus menegangkan. Agar tidak menyesal, ikuti panduan sederhana ini sebelum Anda memutuskan.",
      },
      { type: "h2", text: "Tentukan Budget Total, Bukan Hanya Harga Mobil" },
      {
        type: "p",
        text: "Banyak pemula hanya melihat harga mobil. Padahal ada biaya lain: balik nama, pajak tahunan, asuransi, servis berkala, dan bahan bakar. Sisihkan dana untuk semua ini agar keuangan tetap sehat.",
      },
      { type: "h2", text: "Pilih Jenis Mobil Sesuai Kebutuhan" },
      {
        type: "ul",
        items: [
          "Kota & harian: hatchback irit seperti Agya atau Yaris.",
          "Keluarga: MPV seperti Avanza, Ertiga, atau Xpander.",
          "Petualangan & medan beragam: SUV seperti Rush atau HR-V.",
          "Usaha & niaga: pikap atau kendaraan komersial.",
        ],
      },
      { type: "h2", text: "Baru atau Bekas?" },
      {
        type: "p",
        text: "Mobil bekas berkualitas menawarkan nilai jauh lebih baik untuk pembeli pertama — harga lebih terjangkau dan depresiasi sudah berkurang. Kuncinya adalah membeli dari showroom terpercaya yang sudah memeriksa kondisi unit.",
      },
      { type: "h2", text: "Selalu Test Drive dan Cek Dokumen" },
      {
        type: "p",
        text: "Rasakan langsung kenyamanan dan performa mobil, lalu pastikan seluruh dokumen lengkap dan sah. Di Makmur Motor, kami siap menemani Anda test drive dan menjelaskan kondisi setiap unit secara jujur.",
      },
    ],
  },
  {
    slug: "cara-memilih-mobil-sesuai-kebutuhan-dan-budget",
    title: "Cara Memilih Mobil yang Tepat Sesuai Kebutuhan dan Budget",
    description:
      "Bingung pilih mobil? Panduan memilih mobil berdasarkan kebutuhan, ukuran keluarga, konsumsi BBM, transmisi, dan biaya perawatan agar tidak salah beli.",
    date: "2026-06-16",
    author: "Tim Makmur Motor",
    cover: "/cars/xpander-sport-2019/3.jpg",
    readMinutes: 5,
    blocks: [
      {
        type: "p",
        text: "Mobil yang tepat adalah yang sesuai dengan gaya hidup dan kemampuan finansial Anda — bukan sekadar yang paling keren. Berikut faktor penting sebelum memilih.",
      },
      { type: "h2", text: "1. Kenali Kebutuhan Utama" },
      {
        type: "p",
        text: "Apakah untuk harian di kota, mengantar keluarga, perjalanan jauh, atau usaha? Kebutuhan menentukan jenis bodi yang ideal: hatchback, MPV, SUV, atau pikap.",
      },
      { type: "h2", text: "2. Pertimbangkan Konsumsi BBM" },
      {
        type: "p",
        text: "Jika Anda menempuh jarak jauh setiap hari, mobil yang irit akan menghemat banyak biaya. Mesin bensin kecil cenderung lebih irit di kota, sedangkan diesel unggul untuk perjalanan jauh dan beban berat.",
      },
      { type: "h2", text: "3. Transmisi: Manual atau Matic?" },
      {
        type: "ul",
        items: [
          "Matic: nyaman untuk macet kota, mudah dikendarai pemula.",
          "Manual: lebih irit, perawatan murah, kontrol lebih terasa.",
        ],
      },
      { type: "h2", text: "4. Hitung Biaya Perawatan" },
      {
        type: "p",
        text: "Pilih mobil yang suku cadangnya mudah didapat dan bengkelnya banyak, seperti merek Jepang yang populer di Indonesia. Ini menjaga biaya perawatan tetap terjangkau.",
      },
      {
        type: "p",
        text: "Masih ragu? Tim Makmur Motor siap membantu mencocokkan kebutuhan dan budget Anda dengan unit yang tersedia. Lihat katalog kami atau chat WhatsApp untuk rekomendasi.",
      },
    ],
  },
  {
    slug: "mobil-bekas-terbaik-untuk-gen-z",
    title: "7 Mobil Bekas Terbaik untuk Gen Z: Stylish, Irit, dan Terjangkau",
    description:
      "Rekomendasi mobil bekas untuk Gen Z — desain stylish, irit BBM, dan harga ramah kantong. Cocok untuk anak muda yang ingin mobil pertama keren.",
    date: "2026-06-12",
    author: "Tim Makmur Motor",
    cover: "/cars/yaris-trd-sportivo-2019/1.jpg",
    readMinutes: 6,
    blocks: [
      {
        type: "p",
        text: "Buat Gen Z, mobil bukan cuma alat transportasi — tapi juga ekspresi gaya. Kabar baiknya, banyak mobil bekas yang stylish, irit, dan terjangkau. Berikut pilihan favorit anak muda.",
      },
      { type: "h2", text: "Kriteria Mobil Ideal untuk Gen Z" },
      {
        type: "ul",
        items: [
          "Desain modern dan sporty untuk tampil percaya diri.",
          "Irit bahan bakar agar hemat untuk nongkrong & traveling.",
          "Harga terjangkau dan biaya perawatan rendah.",
          "Fitur hiburan & konektivitas yang mendukung gaya hidup digital.",
        ],
      },
      { type: "h2", text: "Rekomendasi Mobil Bekas untuk Gen Z" },
      {
        type: "ul",
        items: [
          "Toyota Yaris / Yaris TRD — hatchback sporty, gesit, dan stylish.",
          "Toyota Agya — irit, lincah di kota, harga paling ramah kantong.",
          "Honda HR-V — SUV kompak yang modern dan berkelas.",
          "Toyota Rush — tampilan gagah, cocok untuk petualangan akhir pekan.",
          "Suzuki Ertiga — muat banyak teman untuk road trip seru.",
          "Toyota Sienta — unik, praktis, dengan pintu geser kekinian.",
          "Honda BR-V — SUV 7-seater stylish untuk yang butuh ruang.",
        ],
      },
      { type: "h2", text: "Tips Sebelum Membeli" },
      {
        type: "p",
        text: "Pilih warna dan varian yang sesuai kepribadian, tapi tetap utamakan kondisi mesin dan kelengkapan dokumen. Membeli di showroom terpercaya memastikan mobil keren Anda juga aman dan bebas masalah.",
      },
      {
        type: "p",
        text: "Cek koleksi mobil stylish di katalog Makmur Motor, atau chat kami di WhatsApp — kami bantu carikan mobil pertama yang bikin kamu makin pede!",
      },
    ],
  },
  {
    slug: "mobil-keluarga-mpv-vs-suv",
    title: "Mobil Keluarga: MPV vs SUV, Mana yang Lebih Cocok?",
    description:
      "Perbandingan MPV vs SUV untuk keluarga — kapasitas, kenyamanan, konsumsi BBM, dan medan. Plus rekomendasi mobil keluarga terbaik di Makmur Motor.",
    date: "2026-06-10",
    author: "Tim Makmur Motor",
    cover: "/cars/hrv-e-cvt-2018/5.jpg",
    readMinutes: 5,
    blocks: [
      {
        type: "p",
        text: "Saat mencari mobil keluarga, dua pilihan paling populer adalah MPV dan SUV. Keduanya punya kelebihan masing-masing. Mana yang paling cocok untuk keluarga Anda?",
      },
      { type: "h2", text: "Kelebihan MPV" },
      {
        type: "ul",
        items: [
          "Kabin lapang dan fleksibel untuk 7 penumpang.",
          "Pintu lebar memudahkan keluar-masuk anak dan orang tua.",
          "Umumnya lebih irit dan harga lebih terjangkau.",
        ],
      },
      { type: "h2", text: "Kelebihan SUV" },
      {
        type: "ul",
        items: [
          "Ground clearance tinggi, tangguh di jalan tidak rata.",
          "Posisi berkendara tinggi memberi visibilitas lebih baik.",
          "Tampilan gagah dan berkelas.",
        ],
      },
      { type: "h2", text: "Mana yang Sebaiknya Dipilih?" },
      {
        type: "p",
        text: "Jika prioritas Anda kapasitas penumpang, kenyamanan kota, dan efisiensi, MPV seperti Innova, Avanza, atau Xpander adalah pilihan tepat. Jika sering melewati medan menantang atau menyukai tampilan gagah, SUV seperti Rush, HR-V, BR-V, atau Pajero Sport lebih sesuai.",
      },
      {
        type: "p",
        text: "Makmur Motor menyediakan beragam MPV dan SUV keluarga berkualitas di Denpasar. Bandingkan langsung di katalog kami, atau konsultasi gratis via WhatsApp untuk menemukan mobil keluarga idaman.",
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
