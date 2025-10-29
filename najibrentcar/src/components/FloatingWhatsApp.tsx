import { MessageCircle, Crown, Phone } from "lucide-react";
import { motion } from "framer-motion";

const FloatingWhatsApp = () => {
  return (
    <>
      {/* Floating Phone Button */}
      <motion.a
        href="tel:6282111111991"
        className="fixed bottom-6 left-6 z-50 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white rounded-full p-4 shadow-luxury transition-all duration-500 group"
        initial={{ scale: 0, y: 100 }}
        animate={{ scale: 1, y: 0 }}
        whileHover={{
          scale: 1.15,
          rotate: -5,
          boxShadow: "0 0 40px rgb(34 197 94 / 0.5)",
        }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
      >
        {/* Luxury Glow Effect */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-green-500 to-green-600 opacity-20 blur-md group-hover:opacity-40 transition-opacity duration-300" />

        <motion.div
          animate={{
            y: [0, -3, 0],
            rotate: [0, -5, 5, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="relative z-10"
        >
          <img src="/icon-telphone.png" alt="Phone" className="h-6 w-6" />
        </motion.div>

        {/* Luxury Tooltip */}
        <motion.span
          initial={{ opacity: 0, x: -10 }}
          whileHover={{ opacity: 1, x: 0 }}
          className="absolute left-full ml-4 top-1/2 -translate-y-1/2 bg-black/90 backdrop-blur-md text-white px-4 py-2 rounded-xl text-sm font-semibold whitespace-nowrap border border-white/20 shadow-luxury"
        >
          <div className="flex items-center gap-2">
            <Phone className="h-4 w-4 text-green-400" />
            Call Now
          </div>
          <div className="text-xs text-gray-300 mt-1">Direct Contact</div>
        </motion.span>

        {/* Floating Particles */}
        <motion.div
          animate={{
            scale: [0, 1, 0],
            opacity: [0, 0.6, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: 1,
          }}
          className="absolute -top-2 -left-2 w-3 h-3 bg-green-400 rounded-full"
        />
        <motion.div
          animate={{
            scale: [0, 1, 0],
            opacity: [0, 0.4, 0],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            delay: 0.5,
          }}
          className="absolute -bottom-1 -right-1 w-2 h-2 bg-green-600 rounded-full"
        />
      </motion.a>

      {/* Floating WhatsApp Button */}
      <motion.a
        href="https://wa.me/6282111111991"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-accent to-primary hover:from-accent/90 hover:to-primary/90 text-black rounded-full p-4 shadow-luxury transition-all duration-500 group"
        initial={{ scale: 0, y: 100 }}
        animate={{ scale: 1, y: 0 }}
        whileHover={{
          scale: 1.15,
          rotate: 5,
          boxShadow: "0 0 40px rgb(59 130 246 / 0.5)",
        }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
      >
        {/* Luxury Glow Effect */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-accent to-primary opacity-20 blur-md group-hover:opacity-40 transition-opacity duration-300" />

        <motion.div
          animate={{
            y: [0, -3, 0],
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="relative z-10"
        >
          <img src="/icon-wa.png" alt="WhatsApp" className="h-6 w-6" />
        </motion.div>

        {/* Luxury Tooltip */}
        <motion.span
          initial={{ opacity: 0, x: 10 }}
          whileHover={{ opacity: 1, x: 0 }}
          className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-black/90 backdrop-blur-md text-white px-4 py-2 rounded-xl text-sm font-semibold whitespace-nowrap border border-white/20 shadow-luxury"
        >
          <div className="flex items-center gap-2">
            <Crown className="h-4 w-4 text-accent" />
            Luxury Concierge
          </div>
          <div className="text-xs text-gray-300 mt-1">24/7 Premium Service</div>
        </motion.span>

        {/* Floating Particles */}
        <motion.div
          animate={{
            scale: [0, 1, 0],
            opacity: [0, 0.6, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: 1,
          }}
          className="absolute -top-2 -right-2 w-3 h-3 bg-accent rounded-full"
        />
        <motion.div
          animate={{
            scale: [0, 1, 0],
            opacity: [0, 0.4, 0],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            delay: 0.5,
          }}
          className="absolute -bottom-1 -left-1 w-2 h-2 bg-primary rounded-full"
        />
      </motion.a>
    </>
  );
};

export default FloatingWhatsApp;
