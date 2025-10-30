import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Car, Crown, Sparkles, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Galeri", path: "/galeri" },
    { name: "About", path: "/tentang" },
    { name: "Armada", path: "/armada" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/kontak" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-black/90 backdrop-blur-xl border-b border-white/10 shadow-luxury"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Luxury Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <motion.div
              whileHover={{
                rotate: [0, -5, 5, 0],
                scale: 1.05,
              }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <img
                src="/logo.png"
                alt="FAHRU NAJIB JAYA LUXURY RENTAL"
                className="h-12 w-auto relative z-10"
              />
              {/* Logo Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-accent to-primary rounded-lg blur-md opacity-20 group-hover:opacity-40 transition-opacity duration-300" />
            </motion.div>
            <div className="flex flex-col">
              <span className="font-bold text-lg md:text-xl bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
                FAHRU NAJIB JAYA
              </span>
              <span className="text-xs text-white/70 font-medium tracking-wider">
                LUXURY RENTAL
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item, index) => (
              <motion.div
                key={item.path}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  to={item.path}
                  className={`relative px-4 py-2 text-sm font-semibold transition-all duration-300 hover:text-accent rounded-lg ${
                    isActive(item.path)
                      ? "text-accent"
                      : "text-white/80 hover:text-white"
                  }`}
                >
                  {item.name}
                  {isActive(item.path) && (
                    <motion.div
                      layoutId="navbar-indicator"
                      className="absolute inset-x-2 bottom-0 h-0.5 bg-gradient-to-r from-accent to-primary rounded-full"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                    />
                  )}
                  {/* Hover Effect */}
                  <motion.div
                    className="absolute inset-0 bg-white/5 rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-300"
                    whileHover={{ scale: 1.05 }}
                  />
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Luxury CTA Button */}
          <div className="hidden lg:block">
            <motion.a
              href="https://wa.me/6282111111991"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button className="bg-gradient-to-r from-accent to-primary hover:from-accent/90 hover:to-primary/90 text-black font-bold px-6 py-3 shadow-luxury hover:shadow-hover transition-all duration-300 border-0">
                <Sparkles className="h-4 w-4 mr-2" />
                Reserve Luxury
              </Button>
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            whileTap={{ scale: 0.95 }}
            className="lg:hidden p-3 rounded-xl bg-white/10 backdrop-blur-md hover:bg-white/20 transition-all duration-300 border border-white/20"
          >
            <motion.div
              animate={{ rotate: isOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {isOpen ? (
                <X className="h-6 w-6 text-white" />
              ) : (
                <Menu className="h-6 w-6 text-white" />
              )}
            </motion.div>
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0, y: -20 }}
              animate={{ opacity: 1, height: "auto", y: 0 }}
              exit={{ opacity: 0, height: 0, y: -20 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="lg:hidden bg-black/95 backdrop-blur-xl border-t border-white/10 rounded-b-2xl overflow-hidden"
            >
              <div className="py-6 space-y-2 px-4">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.path}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      to={item.path}
                      onClick={() => setIsOpen(false)}
                      className={`block px-4 py-3 text-base font-semibold rounded-xl transition-all duration-300 ${
                        isActive(item.path)
                          ? "text-accent bg-accent/10 border border-accent/30"
                          : "text-white/80 hover:text-white hover:bg-white/10"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        {item.name}
                        {isActive(item.path) && (
                          <Crown className="h-4 w-4 text-accent" />
                        )}
                      </div>
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navItems.length * 0.1 }}
                  className="px-4 pt-4"
                >
                  <a
                    href="https://wa.me/6282111111991"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsOpen(false)}
                  >
                    <Button className="w-full bg-gradient-to-r from-accent to-primary hover:from-accent/90 hover:to-primary/90 text-black font-bold py-4 shadow-luxury hover:shadow-hover transition-all duration-300 border-0">
                      <Sparkles className="h-5 w-5 mr-2" />
                      Booking Sekarang
                    </Button>
                  </a>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;
