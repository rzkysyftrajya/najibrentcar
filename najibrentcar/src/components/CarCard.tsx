import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Car as CarIcon, Users, Settings, Fuel, Calendar } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTrigger
} from "@/components/ui/dialog";
import { Car } from "@/data/cars";

interface CarCardProps {
  car: Car;
  index: number;
}

const CarCard = ({ car, index }: CarCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="h-full"
    >
      <Card className="h-full overflow-hidden shadow-card hover:shadow-hover transition-all hover:-translate-y-1 flex flex-col">
        <div className="relative">
          <div className="aspect-[4/3] bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center p-4">
            <img
              src={car.image}
              alt={car.name}
              className="w-full h-full object-contain"
              onError={(e) => {
                e.currentTarget.src = "/placeholder.svg";
              }}
            />
          </div>
          {car.featured && (
            <Badge className="absolute top-2 right-2 bg-primary text-primary-foreground">
              Premium
            </Badge>
          )}
        </div>
        <CardContent className="p-4 flex flex-col flex-grow">
          <div className="flex-grow">
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-bold text-lg text-foreground leading-tight">
                {car.name}
              </h3>
              <Badge variant="secondary" className="text-xs whitespace-nowrap">
                {car.category}
              </Badge>
            </div>
            <p className="text-primary font-semibold text-lg mb-3">
              {car.price}
            </p>
            <div className="grid grid-cols-2 gap-2 text-sm text-muted-foreground mb-4">
              <div className="flex items-center space-x-2">
                <Calendar className="h-4 w-4" />
                <span>{car.year}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="h-4 w-4" />
                <span>{car.capacity}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Settings className="h-4 w-4" />
                <span>{car.transmission}</span>
              </div>
              <div className="flex items-center space-x-2">
                <CarIcon className="h-4 w-4" />
                <span>{car.brand}</span>
              </div>
            </div>
          </div>
          <a
            href={`https://wa.me/6282111111991?text=Halo,%20saya%20tertarik%20untuk%20menyewa%20mobil%20${car.name}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full"
          >
            <Button className="w-full">Sewa Sekarang</Button>
          </a>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default CarCard;
