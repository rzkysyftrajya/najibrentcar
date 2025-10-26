import { motion } from "framer-motion";
import CarCard from "@/components/CarCard";
import { cars } from "@/data/cars";

const Fleet = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-hero py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Armada Kami
            </h1>
            <p className="text-lg text-muted-foreground">
              Pilihan lengkap mobil berkualitas dengan harga terjangkau untuk berbagai
              kebutuhan Anda
            </p>
          </motion.div>
        </div>
      </section>

      {/* Cars Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cars.map((car, index) => (
              <CarCard key={car.id} car={car} index={index} />
            ))}
          </div>

          {/* Info Box */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-16 bg-accent p-8 rounded-lg max-w-3xl mx-auto text-center"
          >
            <h2 className="text-2xl font-bold text-accent-foreground mb-4">
              Tidak Menemukan Mobil yang Anda Cari?
            </h2>
            <p className="text-muted-foreground mb-6">
              Hubungi kami via WhatsApp untuk informasi lengkap armada dan ketersediaan
              unit lainnya
            </p>
            <a
              href="https://wa.me/6281234567890"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="bg-primary hover:bg-primary-hover text-primary-foreground px-8 py-3 rounded-lg font-medium transition-colors">
                Chat via WhatsApp
              </button>
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Fleet;
