import { MessageCircle, Phone, Crown } from "lucide-react";
import { motion } from "framer-motion";

const FloatingContact = () => {
  const phoneNumber = "6282111111991";
  const waLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    "Halo Najib Rentcar! 👋 Saya tertarik dengan layanan rental mobilnya. Bisa dibantu info unit yang tersedia dan harganya ya? 🚗✨"
  )}`;
  const telLink = `tel:+${phoneNumber}`;

  const buttonBase =
    "fixed z-50 bg-gradient-to-r from-accent to-primary hover:from-accent/90 hover:to-primary/90 text-black rounded-full p-4 shadow-luxury transition-all duration-500 group";

  return (
    <>
      {/* WhatsApp Button */}
      <motion.a
        href={waLink}
        target="_blank"
        rel="noopener noreferrer"
        className={`${buttonBase} bottom-6 right-6`}
        initial={{ scale: 0, y: 100, opacity: 0 }}
        animate={{ scale: 1, y: 0, opacity: 1 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
          delay: 0.1,
        }}
        whileHover={{
          scale: 1.15,
          rotate: 5,
          boxShadow: "0 0 40px rgb(59 130 246 / 0.5)",
        }}
        whileTap={{ scale: 0.95 }}
      >
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-accent to-primary opacity-20 blur-md group-hover:opacity-40 transition-opacity duration-300" />
        <motion.div
          animate={{ y: [0, -3, 0], rotate: [0, 5, -5, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="relative z-10"
        >
          <MessageCircle className="h-6 w-6" />
        </motion.div>

        <motion.span
          initial={{ opacity: 0, x: 10 }}
          whileHover={{ opacity: 1, x: 0 }}
          className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-black/90 backdrop-blur-md text-white px-4 py-2 rounded-xl text-sm font-semibold whitespace-nowrap border border-white/20 shadow-luxury"
        >
          <div className="flex items-center gap-2">
            <Crown className="h-4 w-4 text-accent" />
            WhatsApp
          </div>
          <div className="text-xs text-gray-300 mt-1">Chat Sekarang</div>
        </motion.span>
      </motion.a>

      {/* Phone Button */}
      <motion.a
        href={telLink}
        className={`${buttonBase} bottom-24 right-6`}
        initial={{ scale: 0, y: 100, opacity: 0 }}
        animate={{ scale: 1, y: 0, opacity: 1 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
          delay: 0.3,
        }}
        whileHover={{
          scale: 1.15,
          rotate: -5,
          boxShadow: "0 0 40px rgb(59 130 246 / 0.5)",
        }}
        whileTap={{ scale: 0.95 }}
      >
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-accent to-primary opacity-20 blur-md group-hover:opacity-40 transition-opacity duration-300" />
        <motion.div
          animate={{ y: [0, -3, 0], rotate: [0, -5, 5, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="relative z-10"
        >
          <Phone className="h-6 w-6" />
        </motion.div>

        <motion.span
          initial={{ opacity: 0, x: 10 }}
          whileHover={{ opacity: 1, x: 0 }}
          className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-black/90 backdrop-blur-md text-white px-4 py-2 rounded-xl text-sm font-semibold whitespace-nowrap border border-white/20 shadow-luxury"
        >
          <div className="flex items-center gap-2">
            <Crown className="h-4 w-4 text-accent" />
            Call Us
          </div>
          <div className="text-xs text-gray-300 mt-1">24/7 Hotline</div>
        </motion.span>
      </motion.a>
    </>
  );
};

export default FloatingContact;
