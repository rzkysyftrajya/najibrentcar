import { Car } from "@/data/cars";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Users, Gauge, Star, Crown } from "lucide-react";
import { motion } from "framer-motion";

interface CarCardProps {
  car: Car;
  index?: number;
}

const CarCard = ({ car, index = 0 }: CarCardProps) => {
  const isLuxury = parseInt(car.price.replace(/[^\d]/g, "")) >= 3000000;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      whileHover={{
        y: -12,
        transition: { duration: 0.3, ease: "easeOut" },
      }}
      className="group relative"
    >
      {/* Luxury Badge */}
      {isLuxury && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.5 + index * 0.1, type: "spring" }}
          className="absolute -top-3 -right-3 z-20 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-3 py-1 rounded-full text-xs font-bold shadow-lg flex items-center gap-1"
        >
          <Crown className="h-3 w-3" />
          LUXURY
        </motion.div>
      )}

      <Card className="overflow-hidden hover:shadow-luxury transition-all duration-500 border-0 bg-gradient-to-br from-card via-card to-card/80 backdrop-blur-sm relative">
        {/* Metallic Shine Effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <div className="aspect-[4/3] overflow-hidden bg-gradient-to-br from-muted to-muted/50 relative">
          <motion.img
            src={car.image}
            alt={car.name}
            className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
            onError={(e) => {
              e.currentTarget.src = "/placeholder.svg";
            }}
            whileHover={{ scale: 1.08 }}
            transition={{ duration: 0.5 }}
          />

          {/* Premium Overlay */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500"
            initial={false}
          />

          {/* Luxury Pattern Overlay */}
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />

          {/* Price Badge */}
          <motion.div
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 + index * 0.1 }}
            className="absolute top-4 right-4 bg-black/80 backdrop-blur-md text-white px-3 py-1 rounded-full text-sm font-bold border border-white/20"
          >
            {car.price}
          </motion.div>
        </div>

        <CardContent className="p-6 space-y-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + index * 0.1 }}
          >
            <div className="flex items-start justify-between mb-2">
              <h3 className="font-bold text-xl text-foreground group-hover:text-primary transition-colors duration-300 leading-tight">
                {car.name}
              </h3>
              {isLuxury && (
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                >
                  <Star className="h-5 w-5 text-yellow-500 fill-current" />
                </motion.div>
              )}
            </div>
            <p className="text-sm text-muted-foreground font-medium">
              {car.brand} • {car.year} • {car.category}
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 gap-2 text-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 + index * 0.1 }}
          >
            <div className="flex flex-col items-center space-y-1 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-900/20 dark:to-indigo-900/20 px-2 py-2 rounded-lg text-center border border-blue-200/50 dark:border-blue-800/50">
              <Users className="h-4 w-4 text-blue-600 dark:text-blue-400" />
              <span className="font-medium text-xs text-blue-700 dark:text-blue-300">
                {car.capacity}
              </span>
            </div>
            <div className="flex flex-col items-center space-y-1 bg-gradient-to-br from-emerald-50 to-teal-100 dark:from-emerald-900/20 dark:to-teal-900/20 px-2 py-2 rounded-lg text-center border border-emerald-200/50 dark:border-emerald-800/50">
              <Gauge className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
              <span className="font-medium text-xs text-emerald-700 dark:text-emerald-300">
                {car.transmission}
              </span>
            </div>
          </motion.div>
        </CardContent>

        <CardFooter className="p-6 pt-0">
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full"
          >
            <a
              href="https://wa.me/6281234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full"
            >
              <Button className="w-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary group-hover:shadow-luxury transition-all duration-300 font-semibold py-3 text-base">
                <motion.span
                  initial={{ x: 0 }}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                  className="flex items-center justify-center gap-2"
                >
                  Reserve Now
                  <motion.div
                    animate={{ x: [0, 3, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.div>
                </motion.span>
              </Button>
            </a>
          </motion.div>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default CarCard;
