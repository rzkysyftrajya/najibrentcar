import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  CheckCircle2,
  Shield,
  Clock,
  ThumbsUp,
  Star,
  MapPin,
  Phone,
  Mail,
  Users,
  Car,
  CreditCard,
  Award,
  Zap,
  Heart,
  TrendingUp,
  ChevronRight,
  Calendar,
  Search,
  Check,
  ArrowRight,
  Play,
  Globe,
  Target,
  Smile,
  Crown,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import CarCard from "@/components/CarCard";
import { cars } from "@/data/cars";
import SchemaOrg from "@/components/SchemaOrg";
import TextType from "@/components/TextType";
import "@/components/TextType.css";

const Home = () => {
  const featuredCars = cars.filter((car) => car.featured);

  const features = [
    {
      icon: CheckCircle2,
      title: "Armada Terawat",
      description: "Semua unit dijamin bersih dan siap pakai",
    },
    {
      icon: Shield,
      title: "Aman & Terpercaya",
      description: "Beroperasi legal dengan asuransi lengkap",
    },
    {
      icon: Clock,
      title: "Layanan 24 Jam",
      description: "Booking dan customer service tersedia 24/7",
    },
    {
      icon: ThumbsUp,
      title: "Harga Terjangkau",
      description: "Mulai dari Rp 300.000 per hari",
    },
  ];

  const stats = [
    { number: "500+", label: "Pelanggan Puas" },
    { number: "50+", label: "Unit Armada" },
    { number: "5", label: "Tahun Pengalaman" },
    { number: "24/7", label: "Layanan Support" },
  ];

  const whyChooseUs = [
    {
      icon: Award,
      title: "Kualitas Terjamin",
      description:
        "Semua kendaraan melalui inspeksi berkala dan maintenance rutin",
    },
    {
      icon: Zap,
      title: "Proses Cepat",
      description: "Booking dalam hitungan menit, pickup sesuai jadwal",
    },
    {
      icon: Heart,
      title: "Customer First",
      description: "Kepuasan pelanggan adalah prioritas utama kami",
    },
    {
      icon: TrendingUp,
      title: "Harga Kompetitif",
      description: "Tarif terbaik dengan kualitas premium",
    },
  ];

  const howItWorks = [
    {
      step: "01",
      icon: Search,
      title: "Pilih Kendaraan",
      description:
        "Browse katalog lengkap mobil kami dan pilih yang sesuai kebutuhan",
    },
    {
      step: "02",
      icon: Calendar,
      title: "Booking Online",
      description: "Pesan melalui WhatsApp atau website dengan mudah",
    },
    {
      step: "03",
      icon: Check,
      title: "Konfirmasi & Bayar",
      description:
        "Dapatkan konfirmasi dan lakukan pembayaran dengan metode yang tersedia",
    },
    {
      step: "04",
      icon: Car,
      title: "Pickup & Enjoy",
      description: "Mobil siap diantar ke lokasi Anda, nikmati perjalanan",
    },
  ];

  const destinations = [
    {
      name: "Jakarta",
      image: "/images/jakarta.jpg",
      description: "Ibu kota Indonesia",
    },
    {
      name: "Bandung",
      image: "/images/bandung.jpg",
      description: "Kota kembang",
    },
    {
      name: "Bogor",
      image: "/images/bogor.jpg",
      description: "Kota hujan",
    },
    {
      name: "Tangerang",
      image: "/images/tangerang.jpg",
      description: "Kota seribu industri",
    },
  ];

  const faqs = [
    {
      question: "Apakah ada biaya tambahan?",
      answer:
        "Harga yang tercantum sudah termasuk asuransi, pajak, dan biaya operasional dasar. Biaya tambahan hanya untuk bahan bakar dan denda jika terlambat.",
    },
    {
      question: "Berapa lama proses booking?",
      answer:
        "Booking dapat diproses dalam 30 menit hingga 2 jam tergantung ketersediaan kendaraan dan waktu operasional.",
    },
    {
      question: "Apakah bisa antar jemput?",
      answer:
        "Ya, kami menyediakan layanan antar jemput di area Jakarta, Bogor, Depok, Tangerang, dan Bekasi dengan biaya tambahan.",
    },
    {
      question: "Syarat apa saja untuk menyewa?",
      answer:
        "KTP asli, SIM A/B sesuai jenis mobil, dan deposit sesuai ketentuan. Usia minimal 21 tahun.",
    },
  ];

  const testimonials = [
    {
      name: "Ahmad Rahman",
      rating: 5,
      text: "Pelayanan sangat memuaskan, mobil dalam kondisi prima dan harga terjangkau. Recommended!",
      date: "2 minggu yang lalu",
    },
    {
      name: "Siti Nurhaliza",
      rating: 5,
      text: "Sudah beberapa kali sewa di sini, selalu reliable dan driver ramah. Terima kasih NJRC!",
      date: "1 bulan yang lalu",
    },
    {
      name: "Budi Santoso",
      rating: 5,
      text: "Booking mudah via WhatsApp, mobil datang tepat waktu. Layanan terbaik di Jakarta!",
      date: "3 minggu yang lalu",
    },
  ];

  const requirements = [
    "KTP asli",
    "SIM A/B sesuai jenis mobil",
    "Deposit sesuai ketentuan",
    "Bukti pekerjaan (opsional)",
  ];

  const services = [
    "Sewa Mobil Lepas Kunci",
    "Sewa Mobil Dengan Sopir",
    "Antar Jemput Bandara",
    "Tour & Wisata",
    "Sewa Mobil Wedding",
    "Sewa Mobil Event",
  ];

  return (
    <>
      <SchemaOrg />
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center overflow-hidden pt-16 md:pt-20">
          {/* Luxury Background */}
          <div className="absolute inset-0">
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-110"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')",
              }}
            />
            {/* Premium Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-black/80" />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-accent/10" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/50" />
          </div>

          {/* Luxury Pattern Overlay */}
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />

          <div className="container mx-auto px-4 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
              {/* Left Content */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center lg:text-left"
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-accent/20 to-primary/20 backdrop-blur-md text-accent border border-accent/30 px-6 py-3 rounded-full text-sm font-semibold mb-8 shadow-lg"
                >
                  <Crown className="h-5 w-5" />
                  PT. FAHRU NAJIB JAYA RENTCAR
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 leading-tight"
                >
                  <TextType
                    text={["Rental Mobil Mewah Terbaik di Jakarta"]}
                    typingSpeed={75}
                    pauseDuration={2000}
                    showCursor={true}
                    cursorCharacter="|"
                    className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight"
                    textColors={["#ffffff"]}
                  />
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="text-base md:text-lg lg:text-xl text-gray-300 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
                >
                  Rasakan kemewahan tak tertandingi dengan armada premium kami.
                  Dari sedan eksekutif hingga SUV mewah, setiap perjalanan
                  menjadi luar biasa. Layanan profesional, kendaraan sempurna,
                  pengalaman tak terlupakan.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                >
                  <a
                    href="https://wa.me/6282111111991"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      size="lg"
                      className="bg-gradient-to-r from-accent to-primary hover:from-accent/90 hover:to-primary/90 text-black font-bold text-base md:text-lg px-6 md:px-8 py-4 md:py-6 shadow-luxury hover:shadow-hover transition-all duration-300 hover:scale-105"
                    >
                      <Zap className="h-5 w-5 md:h-6 md:w-6 mr-3" />
                      Reserve Luxury Car
                    </Button>
                  </a>
                  <Link to="/armada">
                    <Button
                      size="lg"
                      className="bg-gradient-to-r from-accent to-primary hover:from-accent/90 hover:to-primary/90 text-black font-bold text-base md:text-lg px-6 md:px-8 py-4 md:py-6 shadow-luxury hover:shadow-hover transition-all duration-300 hover:scale-105"
                    >
                      Explore Fleet
                      <ChevronRight className="h-5 w-5 md:h-6 md:w-6 ml-3" />
                    </Button>
                  </Link>
                </motion.div>
              </motion.div>

              {/* Right Content - Luxury Car Showcase */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="relative hidden lg:block"
              >
                <div className="relative">
                  {/* Floating Luxury Cars */}
                  <motion.div
                    animate={{
                      y: [0, -10, 0],
                      rotate: [0, 1, 0],
                    }}
                    transition={{
                      duration: 6,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="relative z-10"
                  >
                    <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl p-8 shadow-luxury border border-white/20">
                      <img
                        src="/images/lm350h.jpg"
                        alt="Luxury MPV"
                        className="w-full h-64 object-cover rounded-xl shadow-2xl"
                        onError={(e) => {
                          e.currentTarget.src =
                            "https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80";
                        }}
                      />
                      <div className="mt-4 text-center">
                        <h3 className="text-white font-bold text-xl">
                          Lexus LM350H
                        </h3>
                        <p className="text-accent font-semibold">
                          Rp 10.000.000 / hari
                        </p>
                      </div>
                    </div>
                  </motion.div>

                  {/* Decorative Elements */}
                  <motion.div
                    animate={{
                      rotate: 360,
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="absolute -top-4 -right-4 w-8 h-8 bg-accent rounded-full opacity-60"
                  />
                  <motion.div
                    animate={{
                      rotate: -360,
                      scale: [1, 0.9, 1],
                    }}
                    transition={{
                      duration: 15,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="absolute -bottom-4 -left-4 w-6 h-6 bg-primary rounded-full opacity-40"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-3xl md:text-4xl font-bold mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm md:text-base opacity-90">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Mengapa Pilih NJRC?
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Kami berkomitmen memberikan layanan rental mobil terbaik di
                Jakarta
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {whyChooseUs.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-card p-6 rounded-lg shadow-card hover:shadow-hover transition-all hover:-translate-y-1"
                >
                  <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Cara Kerja
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Proses penyewaan mobil yang mudah dan cepat
              </p>
            </motion.div>

            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {howItWorks.map((step, index) => (
                  <motion.div
                    key={step.step}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-card rounded-xl p-6 shadow-card hover:shadow-hover transition-all hover:-translate-y-2 border border-border/50"
                  >
                    <div className="flex items-center justify-center mb-4">
                      <div className="bg-gradient-to-r from-accent to-primary text-white w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold shadow-lg">
                        {step.step}
                      </div>
                    </div>
                    <div className="bg-primary/10 w-10 h-10 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <step.icon className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="font-semibold text-lg text-foreground mb-3 text-center">
                      {step.title}
                    </h3>
                    <p className="text-sm text-muted-foreground text-center leading-relaxed">
                      {step.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Popular Destinations Section */}
        <section className="py-16 bg-gradient-to-br from-slate-50 to-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Destinasi Populer
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Area layanan rental mobil NJRC di Jabodetabek
              </p>
            </motion.div>

            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {destinations.map((destination, index) => (
                  <motion.div
                    key={destination.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="group relative overflow-hidden rounded-xl bg-white shadow-card hover:shadow-hover transition-all hover:-translate-y-1 border border-border/30"
                  >
                    <div className="aspect-[4/3] bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center relative">
                      <Globe className="h-12 w-12 text-primary/70" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent" />
                    </div>
                    <div className="p-5">
                      <h3 className="font-semibold text-lg text-foreground mb-2">
                        {destination.name}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {destination.description}
                      </p>
                    </div>
                    <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Testimoni Pelanggan
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Apa kata pelanggan kami dari Google Reviews
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-card p-6 rounded-lg shadow-card hover:shadow-hover transition-all hover:-translate-y-1"
                >
                  <div className="flex items-center mb-4">
                    <Smile className="h-8 w-8 text-primary mr-2" />
                    <div className="flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-5 w-5 text-yellow-400 fill-current"
                        />
                      ))}
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-4 italic">
                    "{testimonial.text}"
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-foreground">
                      {testimonial.name}
                    </span>
                    <span className="text-sm text-muted-foreground">
                      {testimonial.date}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-gradient-to-br from-blue-50/30 to-indigo-50/30">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Pertanyaan Umum
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Jawaban untuk pertanyaan yang sering ditanyakan
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {faqs.map((faq, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white p-6 rounded-xl shadow-card hover:shadow-hover transition-all hover:-translate-y-1 border border-border/30"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="bg-gradient-to-r from-primary to-accent text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-1">
                        {index + 1}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg text-foreground mb-3 leading-tight">
                          {faq.question}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Fleet Section */}
        <section className="py-16 bg-gradient-to-br from-emerald-50/40 to-teal-50/40">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Armada Unggulan
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Pilihan mobil populer dengan kondisi terbaik
              </p>
            </motion.div>

            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                {featuredCars.map((car, index) => (
                  <CarCard key={car.id} car={car} index={index} />
                ))}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-center"
            >
              <Link to="/armada">
                <Button
                  variant="outline"
                  size="lg"
                  className="bg-white/80 backdrop-blur-sm border-primary/30 hover:bg-primary hover:text-primary-foreground transition-all duration-300 shadow-card hover:shadow-hover"
                >
                  <Car className="h-5 w-5 mr-2" />
                  Lihat Semua Armada
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Requirements Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Persyaratan Penyewaan
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Dokumen yang diperlukan untuk menyewa mobil
              </p>
            </motion.div>

            <div className="max-w-2xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {requirements.map((req, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-center space-x-3 bg-card p-4 rounded-lg shadow-card"
                  >
                    <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-foreground">{req}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Services and Office Info Section */}
        <section className="py-16 bg-gradient-to-br from-violet-50/40 to-purple-50/40">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                {/* Services */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="bg-white rounded-2xl p-8 shadow-card border border-border/30"
                >
                  <div className="flex items-center mb-8">
                    <div className="bg-gradient-to-r from-primary to-accent text-white p-3 rounded-xl mr-4">
                      <Award className="h-8 w-8" />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                      Layanan Kami
                    </h2>
                  </div>
                  <div className="grid grid-cols-1 gap-4">
                    {services.map((service, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="flex items-center space-x-4 bg-gradient-to-r from-primary/5 to-accent/5 p-4 rounded-xl border border-primary/10 hover:border-primary/30 transition-all hover:shadow-card"
                      >
                        <div className="bg-gradient-to-r from-primary to-accent text-white p-2 rounded-lg">
                          <Car className="h-4 w-4" />
                        </div>
                        <span className="text-foreground font-medium">
                          {service}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* Office Info */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="bg-white rounded-2xl p-8 shadow-card border border-border/30"
                >
                  <div className="flex items-center mb-8">
                    <div className="bg-gradient-to-r from-accent to-primary text-white p-3 rounded-xl mr-4">
                      <MapPin className="h-8 w-8" />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                      Info Kantor
                    </h2>
                  </div>
                  <div className="space-y-6">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.1 }}
                      className="flex items-start space-x-4 p-4 rounded-xl bg-gradient-to-r from-primary/5 to-accent/5 border border-primary/10"
                    >
                      <MapPin className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold text-foreground mb-2">
                          Alamat
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          Jl. Raya Gading Serpong, Ds. Cihuni RT 02 RW 03 no 67,
                          <br />
                          Kec. Pagedangan, Kab. Tangerang
                        </p>
                      </div>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      className="flex items-start space-x-4 p-4 rounded-xl bg-gradient-to-r from-primary/5 to-accent/5 border border-primary/10"
                    >
                      <Phone className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold text-foreground mb-2">
                          Telepon
                        </h3>
                        <a
                          href="tel:+6282111111991"
                          className="text-muted-foreground hover:text-primary transition-colors font-medium"
                        >
                          +62 82-111-111-991
                        </a>
                      </div>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                      className="flex items-start space-x-4 p-4 rounded-xl bg-gradient-to-r from-primary/5 to-accent/5 border border-primary/10"
                    >
                      <Mail className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold text-foreground mb-2">
                          Email
                        </h3>
                        <a
                          href="mailto:najibrentcar@gmail.com"
                          className="text-muted-foreground hover:text-primary transition-colors font-medium"
                        >
                          najibrentcar@gmail.com
                        </a>
                      </div>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                      className="flex items-start space-x-4 p-4 rounded-xl bg-gradient-to-r from-primary/5 to-accent/5 border border-primary/10"
                    >
                      <Clock className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold text-foreground mb-2">
                          Jam Operasional
                        </h3>
                        <p className="text-muted-foreground font-medium">
                          24 Jam
                        </p>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto text-center"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Siap Sewa Mobil Impian Anda?
              </h2>
              <p className="text-lg mb-8 opacity-90">
                Hubungi kami sekarang juga dan dapatkan penawaran terbaik untuk
                kebutuhan rental mobil Anda
              </p>
              <a
                href="https://wa.me/6282111111991"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  variant="secondary"
                  className="text-lg px-8 py-6 shadow-hover"
                >
                  Chat WhatsApp +62 82-111-111-991
                </Button>
              </a>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
