export interface BlogPost {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  image: string;
  date: string;
  author: string;
  category: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Tips Memilih Mobil Rental yang Tepat untuk Liburan Keluarga",
    slug: "tips-memilih-mobil-rental-liburan-keluarga",
    excerpt: "Panduan lengkap memilih mobil rental yang sesuai dengan kebutuhan liburan keluarga Anda di Jakarta.",
    content: `
      <p>Merencanakan liburan keluarga membutuhkan persiapan yang matang, termasuk memilih kendaraan yang tepat. Berikut tips memilih mobil rental untuk liburan keluarga:</p>
      
      <h2>1. Pertimbangkan Jumlah Penumpang</h2>
      <p>Pastikan mobil yang Anda pilih memiliki kapasitas yang cukup untuk semua anggota keluarga. Untuk keluarga besar, pilih MPV seperti Avanza, Xenia, atau Innova yang bisa menampung hingga 7 penumpang.</p>
      
      <h2>2. Perhatikan Kapasitas Bagasi</h2>
      <p>Liburan keluarga biasanya memerlukan banyak barang bawaan. Pastikan mobil memiliki ruang bagasi yang cukup luas untuk koper dan perlengkapan lainnya.</p>
      
      <h2>3. Pilih Transmisi yang Nyaman</h2>
      <p>Jika tidak terbiasa dengan transmisi manual, lebih baik pilih mobil dengan transmisi otomatis untuk kenyamanan berkendara, terutama di jalanan Jakarta yang macet.</p>
      
      <h2>4. Sesuaikan dengan Budget</h2>
      <p>Tentukan budget Anda dan pilih mobil yang sesuai. Di NJRC, kami menawarkan berbagai pilihan mulai dari Rp 300.000 per hari hingga mobil luxury.</p>
      
      <h2>5. Cek Kondisi Kendaraan</h2>
      <p>Pastikan memilih penyedia rental yang terpercaya seperti NJRC yang selalu menjaga kondisi armada dalam keadaan prima dan terawat.</p>
      
      <p><strong>Hubungi kami sekarang untuk mendapatkan penawaran terbaik!</strong></p>
    `,
    image: "/images/blog-family-trip.jpg",
    date: "15 Januari 2025",
    author: "Tim NJRC",
    category: "Tips & Trik",
  },
  {
    id: 2,
    title: "Keuntungan Sewa Mobil Lepas Kunci vs Dengan Sopir",
    slug: "keuntungan-sewa-mobil-lepas-kunci-vs-dengan-sopir",
    excerpt: "Mana yang lebih cocok untuk Anda? Simak perbandingan lengkapnya di sini.",
    content: `
      <p>Memilih antara sewa mobil lepas kunci atau dengan sopir tergantung pada kebutuhan dan preferensi Anda. Mari kita bahas keuntungan masing-masing:</p>
      
      <h2>Sewa Mobil Lepas Kunci</h2>
      <h3>Keuntungan:</h3>
      <ul>
        <li><strong>Fleksibilitas Maksimal:</strong> Anda bebas menentukan rute dan jadwal perjalanan</li>
        <li><strong>Privacy:</strong> Lebih privat untuk acara keluarga atau bisnis</li>
        <li><strong>Hemat Biaya:</strong> Tidak perlu membayar biaya sopir</li>
        <li><strong>Pengalaman Berkendara:</strong> Anda bisa merasakan langsung kenyamanan mobil</li>
      </ul>
      
      <h3>Cocok untuk:</h3>
      <p>Pengendara berpengalaman, perjalanan jarak dekat, atau yang ingin fleksibilitas penuh.</p>
      
      <h2>Sewa Mobil dengan Sopir</h2>
      <h3>Keuntungan:</h3>
      <ul>
        <li><strong>Lebih Santai:</strong> Anda bisa beristirahat atau bekerja selama perjalanan</li>
        <li><strong>Sopir Berpengalaman:</strong> Sopir kami menguasai rute Jakarta dan sekitarnya</li>
        <li><strong>Aman:</strong> Tidak perlu khawatir parkir atau kondisi lalu lintas</li>
        <li><strong>Efisien:</strong> Sopir tahu jalan alternatif untuk menghindari macet</li>
      </ul>
      
      <h3>Cocok untuk:</h3>
      <p>Tamu dari luar kota, acara penting, atau perjalanan jarak jauh.</p>
      
      <p><strong>Di NJRC, kami melayani keduanya dengan harga terjangkau. Konsultasi gratis!</strong></p>
    `,
    image: "/images/blog-driver.jpg",
    date: "10 Januari 2025",
    author: "Tim NJRC",
    category: "Panduan",
  },
  {
    id: 3,
    title: "Cara Booking Mobil Rental di NJRC via WhatsApp",
    slug: "cara-booking-mobil-rental-via-whatsapp",
    excerpt: "Proses booking mudah dan cepat hanya dalam hitungan menit!",
    content: `
      <p>Booking mobil rental di NJRC sangat mudah dan bisa dilakukan kapan saja melalui WhatsApp. Berikut langkah-langkahnya:</p>
      
      <h2>Langkah 1: Hubungi Kami via WhatsApp</h2>
      <p>Klik tombol WhatsApp di website kami atau langsung chat ke <strong>+62 812-3456-7890</strong>.</p>
      
      <h2>Langkah 2: Sampaikan Kebutuhan Anda</h2>
      <p>Beritahu kami informasi berikut:</p>
      <ul>
        <li>Tanggal dan durasi rental</li>
        <li>Jenis mobil yang diinginkan</li>
        <li>Lepas kunci atau dengan sopir</li>
        <li>Lokasi penjemputan (opsional)</li>
      </ul>
      
      <h2>Langkah 3: Dapatkan Penawaran</h2>
      <p>Tim kami akan memberikan penawaran harga terbaik dan ketersediaan unit secara real-time.</p>
      
      <h2>Langkah 4: Konfirmasi Booking</h2>
      <p>Setelah setuju dengan penawaran, lakukan pembayaran DP untuk konfirmasi booking. Kami akan mengirimkan detail booking via WhatsApp.</p>
      
      <h2>Langkah 5: Siap Digunakan!</h2>
      <p>Pada hari H, mobil akan diantar ke lokasi Anda atau Anda bisa ambil di kantor kami.</p>
      
      <h2>Keuntungan Booking via WhatsApp:</h2>
      <ul>
        <li>✅ Respons cepat dari tim kami</li>
        <li>✅ Bisa chat kapan saja (24/7)</li>
        <li>✅ Proses simpel tanpa ribet</li>
        <li>✅ Bisa langsung tanya-jawab</li>
      </ul>
      
      <p><strong>Jangan tunggu lagi! Chat kami sekarang dan dapatkan mobil impian Anda.</strong></p>
    `,
    image: "/images/blog-whatsapp.jpg",
    date: "5 Januari 2025",
    author: "Tim NJRC",
    category: "Tutorial",
  },
];
