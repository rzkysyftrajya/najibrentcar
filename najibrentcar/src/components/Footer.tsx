import { Link } from "react-router-dom";
import {
  Car,
  MapPin,
  Phone,
  Mail,
  Clock,
  Facebook,
  Instagram,
  Twitter,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img
                src="/logo.png"
                alt="FAHRU NAJIB JAYA LUXURY RENTAL"
                className="h-10 w-auto"
              />
              <div className="flex flex-col">
                <span className="font-bold text-lg bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
                  FAHRU NAJIB JAYA
                </span>
                <span className="text-xs text-muted-foreground font-medium tracking-wider">
                  LUXURY RENTAL
                </span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              Luxury car rental Jakarta terpercaya dengan armada premium dan
              layanan profesional sejak 2015.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Link Cepat</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Beranda
                </Link>
              </li>
              <li>
                <Link
                  to="/tentang"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Tentang Kami
                </Link>
              </li>
              <li>
                <Link
                  to="/armada"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Armada Kami
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  to="/kontak"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Kontak
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Kontak</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 mt-1 flex-shrink-0" />
                <span>
                  Jl. Raya Gading Serpong, Ds. Cihuni RT 02 RW 03 no 67, Kec.
                  Pagedangan, Kab. Tangerang
                </span>
              </li>
              <li className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <div className="flex flex-col">
                  <a
                    href="tel:+6282111111991"
                    className="hover:text-primary transition-colors"
                  >
                    0821-1111-1991
                  </a>
                  <a
                    href="tel:+62811841491"
                    className="hover:text-primary transition-colors"
                  >
                    0811-841-491
                  </a>
                </div>
              </li>
              <li className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <a
                  href="mailto:najibrentcar@gmail.com"
                  className="hover:text-primary transition-colors"
                >
                  najibrentcar@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Operating Hours */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Jam Operasional</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="flex items-start space-x-2">
                <Clock className="h-4 w-4 mt-1 flex-shrink-0" />
                <div>
                  <p>Senin - Minggu</p>
                  <p className="font-medium text-primary">24 Jam</p>
                </div>
              </div>
              <p className="mt-4">
                Layanan customer service dan booking tersedia 24/7
              </p>
            </div>

            {/* Social Media */}
            <div className="mt-6">
              <h4 className="font-semibold mb-3">Ikuti Kami</h4>
              <div className="flex space-x-3">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-muted p-2 rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <Facebook className="h-4 w-4" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-muted p-2 rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <Instagram className="h-4 w-4" />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-muted p-2 rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <Twitter className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>
            &copy; 2025 PT. Fahru Najib Jaya Luxury Rental. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
