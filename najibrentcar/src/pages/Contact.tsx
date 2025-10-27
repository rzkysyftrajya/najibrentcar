import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-hero pt-16 md:pt-20 pb-16 md:pb-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Hubungi Kami
            </h1>
            <p className="text-lg text-muted-foreground">
              Kami siap membantu kebutuhan rental mobil Anda 24/7
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info & Map */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                  Informasi Kontak
                </h2>
              </div>

              {/* Address */}
              <div className="flex items-start space-x-4 p-6 bg-card rounded-lg shadow-card">
                <div className="bg-primary/10 p-3 rounded-lg flex-shrink-0">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-foreground mb-2">
                    Alamat
                  </h3>
                  <p className="text-muted-foreground">
                    Jl. Raya Gading Serpong, Ds. Cihuni
                    <br />
                    RT 02 RW 03 no 67, Kec. Pagedangan, Kab. Tangerang
                    <br />
                    Banten, Indonesia
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start space-x-4 p-6 bg-card rounded-lg shadow-card">
                <div className="bg-primary/10 p-3 rounded-lg flex-shrink-0">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-foreground mb-2">
                    Telepon
                  </h3>
                  <a
                    href="tel:+6282111111991"
                    className="text-primary hover:text-primary-hover transition-colors"
                  >
                    +62 821-1111-1991
                  </a>
                  <br />
                  <a
                    href="tel:+62811841491"
                    className="text-primary hover:text-primary-hover transition-colors"
                  >
                    +62 811-841-491
                  </a>
                  <p className="text-sm text-muted-foreground mt-1">
                    Tersedia 24 jam setiap hari
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start space-x-4 p-6 bg-card rounded-lg shadow-card">
                <div className="bg-primary/10 p-3 rounded-lg flex-shrink-0">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-foreground mb-2">
                    Email
                  </h3>
                  <a
                    href="mailto:najibrentcar@gmail.com"
                    className="text-primary hover:text-primary-hover transition-colors"
                  >
                    najibrentcar@gmail.com
                  </a>
                  <p className="text-sm text-muted-foreground mt-1">
                    Respons dalam 1-2 jam kerja
                  </p>
                </div>
              </div>

              {/* Operating Hours */}
              <div className="flex items-start space-x-4 p-6 bg-card rounded-lg shadow-card">
                <div className="bg-primary/10 p-3 rounded-lg flex-shrink-0">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-foreground mb-2">
                    Jam Operasional
                  </h3>
                  <p className="text-muted-foreground">
                    <span className="font-medium text-foreground">
                      Senin - Minggu:
                    </span>{" "}
                    24 Jam
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Customer service dan booking tersedia 24/7
                  </p>
                </div>
              </div>

              {/* WhatsApp CTA */}
              <div className="bg-primary text-primary-foreground p-6 rounded-lg">
                <h3 className="font-semibold text-lg mb-2">
                  Booking Cepat via WhatsApp
                </h3>
                <p className="mb-4 opacity-90">
                  Hubungi kami sekarang untuk booking atau konsultasi gratis
                </p>
                <a
                  href="https://wa.me/6282111111991"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="secondary" size="lg" className="w-full">
                    Chat WhatsApp +62 82-111-111-991
                  </Button>
                </a>
              </div>
            </motion.div>

            {/* Map */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-card rounded-lg shadow-card overflow-hidden h-full min-h-[600px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.005907659196!2d106.6443551!3d-6.2629509!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69fb9da5b9c049%3A0x1e0f5c363c402df6!2sNajib%20Jaya%20Rent%20Car!5e0!3m2!1sid!2sid!4v1761412439427!5m2!1sid!2sid"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Najib Jaya Rent Car Location Map"
                ></iframe>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
