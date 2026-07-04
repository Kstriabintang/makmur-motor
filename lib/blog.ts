// Static blog content. SEO-focused articles targeting local + buyer-intent
// keywords (mobil bekas Denpasar, tips beli mobil bekas, dll). Edit posts here.

export type BlogBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "tip"; text: string };

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
  {
    slug: "panduan-lengkap-membeli-mobil-bekas-2026",
    title: "Panduan Lengkap Membeli Mobil Bekas 2026: Checklist Anti Tertipu",
    description:
      "Panduan super lengkap membeli mobil bekas — dari menghitung budget total, riset harga, inspeksi fisik & mesin, cek dokumen & legalitas, test drive, negosiasi, sampai proses balik nama. Lengkap dengan checklist anti tertipu.",
    date: "2026-06-18",
    author: "Tim Makmur Motor",
    cover: "/cars/rush-gr-sport-2021/8.jpg",
    readMinutes: 12,
    blocks: [
      {
        type: "p",
        text: "Membeli mobil bekas bisa sangat menguntungkan — Anda mendapat mobil idaman dengan harga jauh lebih murah daripada baru. Namun tanpa persiapan, risikonya juga nyata: unit bekas tabrakan, bekas banjir, odometer diputar mundur, hingga dokumen bermasalah. Panduan lengkap ini akan memandu Anda langkah demi langkah, dari nol sampai mobil resmi atas nama Anda, lengkap dengan checklist agar tidak tertipu.",
      },

      { type: "h2", text: "1. Hitung Anggaran Total, Bukan Hanya Harga Mobil" },
      {
        type: "p",
        text: "Kesalahan paling umum pembeli pemula adalah menghabiskan seluruh dana hanya untuk harga mobil. Padahal ada banyak biaya menyertai kepemilikan. Alokasikan anggaran Anda untuk seluruh komponen berikut:",
      },
      {
        type: "ul",
        items: [
          "Harga mobil — idealnya maksimal 80% dari total dana yang Anda siapkan.",
          "Biaya balik nama (BBN) dan administrasi — bervariasi per daerah.",
          "Pajak tahunan (PKB) — pastikan pajak berjalan tidak menunggak.",
          "Asuransi (TLO atau All Risk) untuk melindungi aset Anda.",
          "Dana servis awal: ganti oli, filter, kampas rem, kemungkinan ban.",
          "Dana darurat 5–10% untuk perbaikan tak terduga setelah pembelian.",
        ],
      },
      {
        type: "tip",
        text: "Sisihkan minimal 10–15% dari harga mobil sebagai dana perawatan tahun pertama. Mobil bekas hampir selalu butuh penyegaran kecil setelah dibeli.",
      },

      { type: "h2", text: "2. Riset Sebelum Datang Survei" },
      {
        type: "p",
        text: "Datang dengan informasi membuat Anda tidak mudah dibohongi dan lebih percaya diri saat negosiasi. Lakukan riset ini terlebih dahulu:",
      },
      {
        type: "ul",
        items: [
          "Bandingkan harga pasaran model & tahun yang sama dari beberapa sumber.",
          "Baca review pemilik untuk tahu penyakit khas (common problem) model tersebut.",
          "Cek ketersediaan dan harga suku cadang — pilih yang mudah & murah.",
          "Tentukan 2–3 kandidat unit agar punya pembanding saat memutuskan.",
        ],
      },

      { type: "h2", text: "3. Inspeksi Fisik Menyeluruh" },
      {
        type: "p",
        text: "Inilah tahap paling krusial. Lakukan pengecekan di siang hari yang terang dan saat mobil dalam kondisi mesin dingin. Bagi pemeriksaan ke empat area berikut.",
      },
      { type: "h3", text: "Eksterior & Bodi" },
      {
        type: "ul",
        items: [
          "Periksa celah antar-panel (nat) — celah tidak rata menandakan bekas perbaikan tabrakan.",
          "Amati perbedaan warna atau tekstur cat yang menandakan cat ulang.",
          "Cek karat di sudut pintu, bawah karpet, dan kolong mobil.",
          "Pastikan semua kaca, lampu, dan spion mulus tanpa retak.",
        ],
      },
      { type: "h3", text: "Interior & Kelistrikan" },
      {
        type: "ul",
        items: [
          "Cium bau apek/lembap yang bisa menandakan bekas terendam banjir.",
          "Uji semua tombol, power window, audio, lampu, dan kamera/sensor.",
          "Pastikan AC cepat dingin dan stabil.",
          "Cek kondisi jok, plafon, dan dashboard dari retak atau noda parah.",
        ],
      },
      { type: "h3", text: "Mesin" },
      {
        type: "ul",
        items: [
          "Buka kap, periksa kebocoran oli dan rembesan di sekitar mesin.",
          "Nyalakan mesin dingin: dengarkan suara kasar, pincang, atau ngelitik.",
          "Perhatikan warna asap knalpot — putih tebal atau hitam pekat patut diwaspadai.",
          "Cek kondisi aki, radiator, dan kekentalan/warna oli pada dipstick.",
        ],
      },
      { type: "h3", text: "Kaki-Kaki & Ban" },
      {
        type: "ul",
        items: [
          "Saat test drive di jalan tidak rata, rasakan bunyi 'gluduk' pada kaki-kaki.",
          "Periksa keausan ban — bila tidak rata, bisa jadi masalah spooring/kaki-kaki.",
          "Goyang setiap roda untuk mengecek bearing dan tie rod.",
        ],
      },
      {
        type: "tip",
        text: "Tidak yakin menilai sendiri? Ajak teman yang paham mesin, atau gunakan jasa inspeksi mobil independen. Biaya kecil ini bisa menyelamatkan Anda dari kerugian jutaan rupiah.",
      },

      { type: "h2", text: "4. Cek Dokumen & Legalitas" },
      {
        type: "p",
        text: "Mobil sebagus apa pun tidak ada artinya jika dokumennya bermasalah. Pastikan seluruh legalitas berikut bersih:",
      },
      {
        type: "ul",
        items: [
          "STNK, BPKB, dan faktur lengkap serta atas nama yang jelas.",
          "Nomor rangka dan nomor mesin pada fisik mobil COCOK dengan dokumen.",
          "Pajak hidup (tidak menunggak) dan masa berlaku STNK masih panjang.",
          "Tidak berstatus blokir, sengketa, atau leasing yang belum lunas.",
        ],
      },

      { type: "h2", text: "5. Lakukan Test Drive yang Benar" },
      {
        type: "p",
        text: "Test drive bukan sekadar formalitas. Lakukan dengan urutan ini agar Anda benar-benar merasakan kondisi mobil:",
      },
      {
        type: "ol",
        items: [
          "Mulai dari kondisi mesin dingin untuk mendengar suara awal yang jujur.",
          "Jalankan di berbagai kecepatan: pelan di kemacetan dan agak kencang di jalan lurus.",
          "Lewati jalan bergelombang untuk menguji kaki-kaki dan peredaman.",
          "Uji pengereman mendadak (aman) untuk merasakan rem dan kestabilan.",
          "Untuk matic, rasakan perpindahan gigi — harus halus tanpa hentakan keras.",
          "Matikan AC lalu nyalakan lagi, perhatikan apakah mesin tetap stabil.",
        ],
      },

      { type: "h2", text: "6. Strategi Negosiasi Harga" },
      {
        type: "p",
        text: "Hampir semua harga mobil bekas masih bisa ditawar. Gunakan temuan Anda saat inspeksi sebagai dasar negosiasi yang masuk akal:",
      },
      {
        type: "ul",
        items: [
          "Jadikan kekurangan kecil (ban menipis, perlu servis) sebagai alasan menawar.",
          "Tunjukkan harga pembanding dari unit serupa yang sudah Anda riset.",
          "Tawar dengan sopan dan realistis — penjual lebih responsif pada pembeli serius.",
          "Tanyakan bonus: servis, karpet, kaca film, atau perpanjangan pajak.",
        ],
      },

      { type: "h2", text: "7. Pembayaran & Proses Balik Nama" },
      {
        type: "p",
        text: "Setelah sepakat, amankan transaksi dan segera urus balik nama agar mobil sah menjadi milik Anda:",
      },
      {
        type: "ol",
        items: [
          "Buat kuitansi bermaterai yang ditandatangani kedua pihak.",
          "Lakukan pembayaran melalui metode yang aman dan tercatat.",
          "Pastikan Anda menerima STNK, BPKB, faktur, dan KTP penjual (untuk balik nama).",
          "Urus balik nama di Samsat, atau gunakan jasa biro yang terpercaya.",
        ],
      },
      {
        type: "tip",
        text: "Segera lakukan balik nama. Selain memudahkan urusan pajak ke depan, ini menghindari Anda dari masalah hukum bila mobil tersangkut kasus lalu lintas atas nama pemilik lama.",
      },

      { type: "h2", text: "Kenapa Membeli di Showroom Lebih Aman?" },
      {
        type: "p",
        text: "Membeli dari perorangan memang kadang lebih murah, tetapi risikonya Anda tanggung sendiri. Showroom terpercaya sudah menyaring dan memeriksa setiap unit, memastikan dokumen lengkap, serta memberikan garansi dan layanan purna jual. Anda juga dimudahkan dengan pilihan kredit dan tukar tambah dalam satu tempat.",
      },
      {
        type: "p",
        text: "Di Makmur Motor, setiap mobil melewati pemeriksaan menyeluruh sebelum dipajang, dengan dokumen yang dijamin lengkap dan harga yang transparan. Jelajahi koleksi terbaru kami di halaman katalog, atau konsultasi gratis via WhatsApp — tim kami siap membantu Anda menemukan mobil bekas berkualitas tanpa rasa khawatir.",
      },
    ],
  },
  {
    slug: "panduan-kredit-mobil-bekas-dp-tenor-cicilan",
    title: "Panduan Kredit Mobil Bekas: DP, Tenor, dan Cara Menghitung Cicilan",
    description:
      "Cara kredit mobil bekas di Denpasar — memahami DP, tenor, bunga, dan syarat pengajuan, plus cara menghitung cicilan agar sesuai kemampuan dan tidak memberatkan.",
    date: "2026-07-04",
    author: "Tim Makmur Motor",
    cover: "/cars/brv-e-2022/3.jpg",
    readMinutes: 6,
    blocks: [
      {
        type: "p",
        text: "Tidak semua orang mampu membeli mobil bekas secara tunai, dan itu wajar. Kredit membuat mobil impian lebih mudah dijangkau — asalkan Anda memahami cara kerjanya agar cicilan tidak justru membebani keuangan. Panduan ini menjelaskan komponen kredit mobil bekas dan cara menghitungnya dengan sederhana.",
      },
      { type: "h2", text: "Komponen Utama Kredit Mobil" },
      {
        type: "ul",
        items: [
          "Uang muka (DP): pembayaran awal, umumnya 20–30% dari harga mobil.",
          "Tenor: jangka waktu cicilan, biasanya 1–5 tahun (12–60 bulan).",
          "Bunga/margin: biaya jasa leasing, memengaruhi besar cicilan bulanan.",
          "Angsuran: cicilan tetap yang dibayar setiap bulan hingga lunas.",
          "Biaya lain: administrasi, asuransi, dan provisi di awal kredit.",
        ],
      },
      { type: "h2", text: "Cara Sederhana Menghitung Cicilan" },
      {
        type: "p",
        text: "Sebagai gambaran kasar: kurangi harga mobil dengan DP untuk mendapat pokok utang, tambahkan estimasi bunga selama tenor, lalu bagi dengan jumlah bulan. Contoh: mobil Rp150 juta dengan DP 30% (Rp45 juta) menyisakan pokok Rp105 juta. Dengan tenor dan bunga tertentu, Anda akan mendapat angka cicilan bulanan yang bisa langsung dibandingkan dengan kemampuan Anda.",
      },
      {
        type: "tip",
        text: "Jaga total cicilan (termasuk utang lain) di bawah 30% penghasilan bulanan. Di angka ini, keuangan Anda tetap sehat dan ada ruang untuk kebutuhan lain serta dana darurat.",
      },
      { type: "h2", text: "DP Besar atau Tenor Panjang?" },
      {
        type: "ul",
        items: [
          "DP lebih besar: cicilan bulanan ringan dan total bunga lebih kecil.",
          "Tenor lebih panjang: cicilan ringan, tetapi total yang dibayar membengkak.",
          "Tenor lebih pendek: cepat lunas dan hemat bunga, tapi cicilan lebih berat.",
        ],
      },
      { type: "h2", text: "Syarat Umum Pengajuan Kredit" },
      {
        type: "ul",
        items: [
          "KTP, Kartu Keluarga, dan NPWP (untuk plafon tertentu).",
          "Bukti penghasilan seperti slip gaji atau mutasi rekening.",
          "Rekening listrik/PBB sebagai bukti domisili.",
          "Riwayat kredit (BI Checking/SLIK) yang bersih tanpa tunggakan.",
        ],
      },
      { type: "h2", text: "Tips Agar Pengajuan Disetujui" },
      {
        type: "p",
        text: "Ajukan cicilan yang realistis sesuai penghasilan, siapkan DP lebih besar bila mampu, dan pastikan riwayat kredit Anda bersih. Membeli di showroom yang sudah bermitra dengan banyak leasing juga mempermudah proses karena dokumen mobil dijamin lengkap dan legal.",
      },
      {
        type: "p",
        text: "Makmur Motor membantu proses kredit mobil bekas di Denpasar dengan mitra leasing terpercaya, plus pilihan tukar tambah. Lihat unit yang tersedia di katalog kami, atau chat via WhatsApp untuk simulasi cicilan sesuai budget Anda.",
      },
    ],
  },
  {
    slug: "cara-tukar-tambah-mobil-bekas-di-denpasar",
    title: "Cara Tukar Tambah Mobil Bekas: Proses, Syarat, dan Tips Harga Terbaik",
    description:
      "Panduan tukar tambah mobil bekas di Denpasar — cara kerja, syarat dokumen, faktor penentu harga, dan tips agar mobil lama Anda dihargai maksimal.",
    date: "2026-07-02",
    author: "Tim Makmur Motor",
    cover: "/cars/xenia-ads-2022/2.jpg",
    readMinutes: 5,
    blocks: [
      {
        type: "p",
        text: "Ingin ganti mobil tanpa repot menjual sendiri lebih dulu? Tukar tambah adalah solusinya. Mobil lama Anda ditaksir, nilainya dipotong dari harga mobil baru (bekas) yang Anda incar, dan Anda cukup membayar selisihnya. Praktis, cepat, dan aman. Berikut cara kerjanya.",
      },
      { type: "h2", text: "Bagaimana Tukar Tambah Bekerja?" },
      {
        type: "ol",
        items: [
          "Anda memilih mobil incaran di showroom dan mengajukan tukar tambah.",
          "Tim menaksir kondisi dan harga pasar mobil lama Anda.",
          "Nilai mobil lama dipotong dari harga mobil incaran.",
          "Anda membayar selisihnya, secara tunai maupun kredit.",
          "Proses dokumen dan serah terima diselesaikan di satu tempat.",
        ],
      },
      { type: "h2", text: "Keuntungan Tukar Tambah" },
      {
        type: "ul",
        items: [
          "Tidak perlu repot memasang iklan dan melayani calon pembeli.",
          "Lebih aman — transaksi resmi di showroom, bukan dengan orang asing.",
          "Hemat waktu: jual mobil lama dan beli baru sekaligus.",
          "Bisa dikombinasikan dengan kredit untuk meringankan pembayaran.",
        ],
      },
      { type: "h2", text: "Faktor yang Menentukan Harga Mobil Lama Anda" },
      {
        type: "ul",
        items: [
          "Merek dan model — mobil yang laris di pasaran dihargai lebih tinggi.",
          "Tahun produksi dan angka kilometer.",
          "Kondisi mesin, bodi, interior, dan kaki-kaki.",
          "Kelengkapan dan keabsahan dokumen (STNK, BPKB, faktur).",
          "Riwayat servis dan status pajak yang hidup.",
        ],
      },
      { type: "h2", text: "Syarat Dokumen" },
      {
        type: "p",
        text: "Siapkan STNK, BPKB, dan faktur asli mobil lama, serta KTP sesuai nama pemilik. Pastikan nomor rangka dan mesin cocok dengan dokumen, dan pajak dalam keadaan hidup agar taksiran harga tidak terpotong.",
      },
      {
        type: "tip",
        text: "Bersihkan dan rapikan mobil lama sebelum ditaksir. Servis ringan, cuci bersih, dan interior yang wangi memberi kesan terawat sehingga taksiran harga cenderung lebih baik.",
      },
      { type: "h2", text: "Tips Agar Dapat Harga Terbaik" },
      {
        type: "p",
        text: "Ketahui dulu harga pasaran mobil lama Anda sebagai pembanding, lengkapi seluruh dokumen, dan bandingkan penawaran secara wajar. Tukar tambah di showroom terpercaya memberi Anda taksiran yang transparan tanpa drama.",
      },
      {
        type: "p",
        text: "Makmur Motor melayani tukar tambah mobil bekas di Denpasar dengan penaksiran jujur dan proses satu pintu. Lihat pilihan mobil pengganti di katalog kami, atau chat via WhatsApp untuk mengetahui estimasi harga mobil lama Anda.",
      },
    ],
  },
  {
    slug: "cara-merawat-mobil-bekas-agar-awet-dan-irit",
    title: "Cara Merawat Mobil Bekas Agar Awet, Irit, dan Tetap Prima",
    description:
      "Tips merawat mobil bekas agar mesin awet dan irit BBM — jadwal servis, ganti oli, perawatan ban, AC, aki, hingga kebiasaan berkendara yang menghemat biaya.",
    date: "2026-06-30",
    author: "Tim Makmur Motor",
    cover: "/cars/confero-2021/2.jpg",
    readMinutes: 6,
    blocks: [
      {
        type: "p",
        text: "Membeli mobil bekas berkualitas hanyalah langkah awal. Agar tetap prima, irit, dan bernilai jual tinggi, mobil perlu dirawat secara rutin. Kabar baiknya, perawatan mobil bekas tidak harus mahal — cukup konsisten. Berikut panduannya.",
      },
      { type: "h2", text: "1. Patuhi Jadwal Servis Berkala" },
      {
        type: "p",
        text: "Servis rutin adalah kunci umur panjang mesin. Ikuti jadwal servis sesuai buku panduan atau anjuran bengkel, biasanya setiap 5.000–10.000 km. Servis berkala mendeteksi masalah kecil sebelum menjadi kerusakan besar yang mahal.",
      },
      { type: "h2", text: "2. Ganti Oli Tepat Waktu" },
      {
        type: "ul",
        items: [
          "Ganti oli mesin sesuai interval dan gunakan spesifikasi yang tepat.",
          "Jangan lupakan oli transmisi, terutama untuk mobil matic.",
          "Periksa oli rem dan power steering secara berkala.",
        ],
      },
      { type: "h2", text: "3. Rawat Ban dan Kaki-Kaki" },
      {
        type: "ul",
        items: [
          "Jaga tekanan angin ban sesuai anjuran — ban kempis membuat boros BBM.",
          "Lakukan spooring dan balancing bila setir bergetar atau ban aus tidak rata.",
          "Rotasi ban secara berkala agar keausan merata.",
        ],
      },
      { type: "h2", text: "4. Jaga Sistem Pendingin dan AC" },
      {
        type: "p",
        text: "Periksa air radiator (coolant) secara rutin agar mesin tidak overheat, terutama untuk perjalanan jauh. Bersihkan filter AC dan lakukan servis AC berkala agar kabin tetap sejuk dan hemat energi.",
      },
      { type: "h2", text: "5. Perhatikan Aki dan Kelistrikan" },
      {
        type: "p",
        text: "Aki adalah komponen yang sering terlupakan hingga mogok. Cek kondisi aki, bersihkan terminal dari kerak, dan ganti bila sudah lemah. Perhatikan juga lampu dan kelistrikan agar berfungsi normal demi keamanan.",
      },
      { type: "h2", text: "6. Berkendara dengan Bijak Agar Irit" },
      {
        type: "ul",
        items: [
          "Hindari akselerasi dan pengereman mendadak yang boros BBM.",
          "Jaga putaran mesin (RPM) stabil dan pindah gigi pada waktu tepat.",
          "Kurangi beban berlebih dan barang yang tidak perlu di bagasi.",
          "Panaskan mobil secukupnya, tidak perlu terlalu lama.",
        ],
      },
      {
        type: "tip",
        text: "Simpan catatan servis dan penggantian komponen. Selain memudahkan perawatan, riwayat yang rapi menaikkan nilai jual kembali mobil Anda di kemudian hari.",
      },
      {
        type: "p",
        text: "Dengan perawatan konsisten, mobil bekas bisa menemani Anda bertahun-tahun tanpa masalah berarti. Butuh mobil bekas yang sudah terawat dan lolos pemeriksaan? Jelajahi katalog Makmur Motor, atau konsultasi gratis via WhatsApp — kami bantu Anda memilih unit terbaik.",
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
