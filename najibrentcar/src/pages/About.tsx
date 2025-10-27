import { motion } from "framer-motion";
import {
  Target,
  Eye,
  Award,
  Users,
  Crown,
  CheckCircle2,
  Star,
  TrendingUp,
  Calendar,
  Heart,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const About = () => {
  return (
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
                CV. NAJIB JAYA RENT CAR
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 leading-tight"
              >
                Tentang Kami
                <span className="block bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
                  CV. Najib Jaya Rent Car
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="text-base md:text-lg lg:text-xl text-gray-300 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
              >
                Sewa & rental mobil murah lepas kunci di Tangerang sejak 2020.
                Rasakan kemudahan dan kenyamanan dengan armada terbaik kami.
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
                    Hubungi Kami
                  </Button>
                </a>
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
                        Armada Premium
                      </h3>
                      <p className="text-accent font-semibold">
                        Kualitas Terjamin
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

      {/* Company Profile */}
      <section className="py-16 bg-gradient-to-br from-slate-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Profil Perusahaan
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                CV. Najib Jaya Rent Car - Mitra terpercaya sejak 2020
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-white rounded-2xl p-8 shadow-card border border-border/30"
              >
                <div className="flex items-center mb-6">
                  <div className="bg-gradient-to-r from-primary to-accent text-white p-3 rounded-xl mr-4">
                    <Award className="h-8 w-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">
                    CV. Najib Jaya Rent Car
                  </h3>
                </div>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Perusahaan kami didirikan pada tahun 2020. Dikala Pandemi
                    melanda seluruh penjuru Negara dan menghancurkan hampir
                    semua sektor dimulai dari kebutuhan primer, sekunder bahkan
                    tresier.
                  </p>
                  <p>
                    Sebagian para pekerja, perusahaan bahkan keluarga tidak
                    sedikit kehilangan alat transportasi mereka. Perusahaan kami
                    melihat adanya peluang didalam sektor jasa transportasi.
                  </p>
                  <p>
                    Maka dari itu dengan adanya peluang tersebut kami memberikan
                    kemudahan kepada para konsumen kami agar mendapatkan alat
                    transportasi untuk memudahkan konsumen kami dalam
                    berkegiatan sehari-hari.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-white rounded-2xl p-8 shadow-card border border-border/30"
              >
                <div className="flex items-center mb-6">
                  <div className="bg-gradient-to-r from-accent to-primary text-white p-3 rounded-xl mr-4">
                    <Users className="h-8 w-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">
                    Komitmen Kami
                  </h3>
                </div>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Dengan tim profesional dan berpengalaman, kami siap membantu
                    Anda dalam berbagai kebutuhan rental mobil, mulai dari
                    keperluan pribadi, bisnis, hingga event khusus.
                  </p>
                  <p>
                    Semua armada kami dilengkapi dengan asuransi dan perawatan
                    berkala untuk menjamin kenyamanan dan keamanan perjalanan
                    Anda.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 bg-gradient-to-br from-blue-50/30 to-indigo-50/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Visi & Misi
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Pedoman yang mengarahkan setiap langkah kami
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-white p-8 rounded-xl shadow-card hover:shadow-hover transition-all hover:-translate-y-1 border border-border/30"
              >
                <div className="flex items-center mb-6">
                  <div className="bg-gradient-to-r from-primary to-accent text-white p-3 rounded-xl mr-4">
                    <Eye className="h-8 w-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">
                    Visi Kami
                  </h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Menjadikan perusahaan yang dapat dipercaya oleh para konsumen
                  dibidang jasa transportasi darat dan selalu mengedepankan dan
                  mengutamakan kepuasan para konsumen.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-white p-8 rounded-xl shadow-card hover:shadow-hover transition-all hover:-translate-y-1 border border-border/30"
              >
                <div className="bg-primary/10 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
                  <Target className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-6">
                  Misi Kami
                </h3>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Kami percaya perusahaan akan tumbuh berkembang dengan
                    memberikan kemudahan kepada para konsumen dalam mendapatkan
                    kebutuhan yang diinginkan. Oleh karena itu kami ingin
                    memberikan kemudahan tersebut dengan fasilitas mobil
                    terbaik, ternyaman, harga terjangkau, pelayanan yang ramah,
                    dan armada yang bersih.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gradient-to-br from-emerald-50/40 to-teal-50/40">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Layanan Kami
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Berbagai pilihan rental mobil sesuai kebutuhan Anda
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Calendar,
                  title: "Rental Mobil Harian",
                  description: "Sewa mobil harian dengan harga terjangkau",
                  gradient: "from-primary to-accent",
                },
                {
                  icon: Calendar,
                  title: "Rental Mobil Mingguan",
                  description: "Paket mingguan untuk kebutuhan jangka panjang",
                  gradient: "from-accent to-primary",
                },
                {
                  icon: Calendar,
                  title: "Rental Mobil Bulanan",
                  description: "Solusi rental mobil untuk periode bulanan",
                  gradient: "from-primary to-accent",
                },
                {
                  icon: Calendar,
                  title: "Rental Mobil Tahunan",
                  description: "Paket tahunan dengan harga spesial",
                  gradient: "from-accent to-primary",
                },
                {
                  icon: Heart,
                  title: "Rental Mobil Pernikahan",
                  description: "Mobil premium untuk acara spesial Anda",
                  gradient: "from-primary to-accent",
                },
                {
                  icon: Users,
                  title: "Office",
                  description: "Layanan khusus untuk kebutuhan perusahaan",
                  gradient: "from-accent to-primary",
                },
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white p-8 rounded-xl shadow-card hover:shadow-hover transition-all hover:-translate-y-1 border border-border/30 text-center"
                >
                  <div
                    className={`bg-gradient-to-r ${item.gradient} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6`}
                  >
                    <item.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-semibold text-xl text-foreground mb-3">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              ))}
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
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Siap Bergabung dengan Ribuan Pelanggan Puas?
            </h2>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              Sewa & rental mobil murah lepas kunci di Tangerang dengan harga
              terjangkau dan armada berkualitas
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/6282111111991"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  variant="secondary"
                  className="text-lg px-8 py-6 shadow-hover hover:scale-105 transition-all duration-300"
                >
                  <Star className="h-5 w-5 mr-2" />
                  Chat WhatsApp +62 82-111-111-991
                </Button>
              </a>
              <a href="tel:+6282111111991">
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg px-8 py-6 border-white/30 text-white hover:bg-white/10 transition-all duration-300"
                >
                  <TrendingUp className="h-5 w-5 mr-2" />
                  Telepon Langsung
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
