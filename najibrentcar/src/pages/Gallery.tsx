import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Filter,
  Search,
  Car,
  Users,
  Settings,
  Fuel,
  Calendar,
  Star,
  Zap,
  Grid3X3,
  List,
  Eye,
  Heart,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import CarCard from "@/components/CarCard";
import { cars } from "@/data/cars";

const Gallery = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedTransmission, setSelectedTransmission] = useState("all");
  const [sortBy, setSortBy] = useState("featured");
  const [showFilters, setShowFilters] = useState(false);
  const [viewMode, setViewMode] = useState<"grid" | "masonry">("grid");

  const categories = [
    "all",
    ...Array.from(new Set(cars.map((car) => car.category))),
  ];
  const transmissions = [
    "all",
    ...Array.from(new Set(cars.map((car) => car.transmission))),
  ];

  const filteredAndSortedCars = useMemo(() => {
    const filtered = cars.filter((car) => {
      const matchesSearch =
        car.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        car.brand.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory =
        selectedCategory === "all" || car.category === selectedCategory;
      const matchesTransmission =
        selectedTransmission === "all" ||
        car.transmission === selectedTransmission;

      return matchesSearch && matchesCategory && matchesTransmission;
    });

    // Sort cars
    filtered.sort((a, b) => {
      switch (sortBy) {
        case "price-low":
          return (
            parseInt(a.price.replace(/[^\d]/g, "")) -
            parseInt(b.price.replace(/[^\d]/g, ""))
          );
        case "price-high":
          return (
            parseInt(b.price.replace(/[^\d]/g, "")) -
            parseInt(a.price.replace(/[^\d]/g, ""))
          );
        case "name":
          return a.name.localeCompare(b.name);
        case "featured":
        default:
          return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
      }
    });

    return filtered;
  }, [searchTerm, selectedCategory, selectedTransmission, sortBy]);

  const stats = [
    { icon: Car, label: "Total Armada", value: cars.length },
    {
      icon: Star,
      label: "Mobil Premium",
      value: cars.filter((car) => car.featured).length,
    },
    { icon: Users, label: "Kapasitas Max", value: "7 Penumpang" },
    { icon: Zap, label: "Siap Pakai", value: "24/7" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-20 md:pt-24 pb-16 md:pb-24">
        {/* Luxury Background */}
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-110"
            style={{
              backgroundImage: "url('/hero-section.webp')",
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
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-full mb-6"
            >
              <Grid3X3 className="h-10 w-10 text-primary" />
            </motion.div>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              Galeri Armada
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Koleksi lengkap armada premium kami dalam tampilan galeri yang
              elegan dan modern untuk memudahkan Anda memilih kendaraan impian
            </p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-4 text-center shadow-lg"
                >
                  <stat.icon className="h-6 w-6 text-white mx-auto mb-2" />
                  <div className="text-xl md:text-2xl font-bold text-white leading-tight">
                    {stat.value}
                  </div>
                  <div className="text-xs md:text-sm text-white/80 font-medium leading-tight">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Filters & Search */}
      <section className="py-8 bg-background border-b border-border sticky top-16 md:top-20 z-30 backdrop-blur-md bg-background/95">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-6xl mx-auto"
          >
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
              {/* Search */}
              <div className="relative flex-1 w-full sm:max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Cari mobil atau brand..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>

              {/* View Mode Toggle */}
              <div className="flex items-center gap-2">
                <Button
                  variant={viewMode === "grid" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setViewMode("grid")}
                  className="p-2"
                >
                  <Grid3X3 className="h-4 w-4" />
                </Button>
                <Button
                  variant={viewMode === "masonry" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setViewMode("masonry")}
                  className="p-2"
                >
                  <List className="h-4 w-4" />
                </Button>
              </div>

              {/* Filter Toggle */}
              <Button
                variant="outline"
                onClick={() => setShowFilters(!showFilters)}
                className="sm:hidden w-full sm:w-auto"
              >
                <Filter className="h-4 w-4 mr-2" />
                Filter
              </Button>

              {/* Desktop Filters */}
              <div className="hidden sm:flex items-center gap-4 flex-wrap justify-center sm:justify-end">
                <Select
                  value={selectedCategory}
                  onValueChange={setSelectedCategory}
                >
                  <SelectTrigger className="w-40">
                    <SelectValue placeholder="Kategori" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((category) => (
                      <SelectItem key={category} value={category}>
                        {category === "all" ? "Semua Kategori" : category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <Select
                  value={selectedTransmission}
                  onValueChange={setSelectedTransmission}
                >
                  <SelectTrigger className="w-40">
                    <SelectValue placeholder="Transmisi" />
                  </SelectTrigger>
                  <SelectContent>
                    {transmissions.map((transmission) => (
                      <SelectItem key={transmission} value={transmission}>
                        {transmission === "all"
                          ? "Semua Transmisi"
                          : transmission}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-40">
                    <SelectValue placeholder="Urutkan" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="featured">Featured</SelectItem>
                    <SelectItem value="price-low">Harga Terendah</SelectItem>
                    <SelectItem value="price-high">Harga Tertinggi</SelectItem>
                    <SelectItem value="name">Nama A-Z</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Mobile Filters */}
            <AnimatePresence>
              {showFilters && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="sm:hidden mt-4 space-y-4"
                >
                  <div className="grid grid-cols-1 gap-4">
                    <Select
                      value={selectedCategory}
                      onValueChange={setSelectedCategory}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Kategori" />
                      </SelectTrigger>
                      <SelectContent>
                        {categories.map((category) => (
                          <SelectItem key={category} value={category}>
                            {category === "all" ? "Semua Kategori" : category}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>

                    <Select
                      value={selectedTransmission}
                      onValueChange={setSelectedTransmission}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Transmisi" />
                      </SelectTrigger>
                      <SelectContent>
                        {transmissions.map((transmission) => (
                          <SelectItem key={transmission} value={transmission}>
                            {transmission === "all"
                              ? "Semua Transmisi"
                              : transmission}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>

                    <Select value={sortBy} onValueChange={setSortBy}>
                      <SelectTrigger>
                        <SelectValue placeholder="Urutkan" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="featured">Featured</SelectItem>
                        <SelectItem value="price-low">
                          Harga Terendah
                        </SelectItem>
                        <SelectItem value="price-high">
                          Harga Tertinggi
                        </SelectItem>
                        <SelectItem value="name">Nama A-Z</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Active Filters */}
            <div className="flex flex-wrap gap-2 mt-4">
              {searchTerm && (
                <Badge variant="secondary" className="flex items-center gap-1">
                  Search: {searchTerm}
                  <button
                    onClick={() => setSearchTerm("")}
                    className="ml-1 hover:text-destructive"
                  >
                    ×
                  </button>
                </Badge>
              )}
              {selectedCategory !== "all" && (
                <Badge variant="secondary" className="flex items-center gap-1">
                  {selectedCategory}
                  <button
                    onClick={() => setSelectedCategory("all")}
                    className="ml-1 hover:text-destructive"
                  >
                    ×
                  </button>
                </Badge>
              )}
              {selectedTransmission !== "all" && (
                <Badge variant="secondary" className="flex items-center gap-1">
                  {selectedTransmission}
                  <button
                    onClick={() => setSelectedTransmission("all")}
                    className="ml-1 hover:text-destructive"
                  >
                    ×
                  </button>
                </Badge>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            layout
            className={`max-w-7xl 2xl:max-w-6xl mx-auto ${
              viewMode === "masonry"
                ? "columns-1 sm:columns-2 lg:columns-3 xl:columns-4 2xl:columns-5 gap-4 space-y-4"
                : "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 sm:gap-6"
            }`}
          >
            <AnimatePresence>
              {filteredAndSortedCars.map((car, index) => (
                <motion.div
                  key={car.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className={
                    viewMode === "masonry" ? "break-inside-avoid mb-4" : ""
                  }
                >
                  <Card className="group overflow-hidden border-0 shadow-card hover:shadow-hover transition-all duration-300 hover:-translate-y-1 bg-card">
                    <CardContent className="p-0">
                      <div className="relative overflow-hidden">
                        <img
                          src={car.image}
                          alt={car.name}
                          className="w-full h-48 sm:h-56 object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="flex gap-2">
                            <Button
                              size="sm"
                              variant="secondary"
                              className="h-8 w-8 p-0"
                            >
                              <Eye className="h-4 w-4" />
                            </Button>
                            <Button
                              size="sm"
                              variant="secondary"
                              className="h-8 w-8 p-0"
                            >
                              <Heart className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                        {car.featured && (
                          <div className="absolute top-3 left-3">
                            <Badge className="bg-accent text-accent-foreground">
                              Premium
                            </Badge>
                          </div>
                        )}
                      </div>
                      <div className="p-4">
                        <h3 className="font-semibold text-lg text-foreground mb-1 line-clamp-2">
                          {car.name}
                        </h3>
                        <p className="text-sm text-muted-foreground mb-2">
                          {car.brand} • {car.year}
                        </p>
                        <div className="flex items-center justify-between">
                          <span className="font-bold text-primary text-lg">
                            {car.price}
                          </span>
                          <Badge variant="outline" className="text-xs">
                            {car.capacity}
                          </Badge>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredAndSortedCars.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <Car className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-2">
                Tidak ada mobil ditemukan
              </h3>
              <p className="text-muted-foreground">
                Coba ubah filter atau kata kunci pencarian
              </p>
            </motion.div>
          )}

          {/* Enhanced CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-16 bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 p-8 rounded-2xl max-w-4xl mx-auto text-center relative overflow-hidden"
          >
            <div
              className="absolute inset-0 opacity-50"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%230066ff' fill-opacity='0.05'%3E%3Ccircle cx='20' cy='20' r='2'/%3E%3C/g%3E%3C/svg%3E")`,
                backgroundSize: "40px 40px",
              }}
            ></div>
            <div className="relative">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6"
              >
                <Settings className="h-8 w-8 text-primary" />
              </motion.div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Mobil Impian Anda Tidak Ada?
              </h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Kami memiliki lebih banyak pilihan armada yang siap memenuhi
                kebutuhan spesifik Anda. Hubungi tim kami untuk konsultasi
                gratis dan penawaran terbaik.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="https://wa.me/6282111111991"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto"
                >
                  <Button
                    size="lg"
                    className="w-full sm:w-auto shadow-lg hover:shadow-xl transition-shadow"
                  >
                    <Zap className="h-4 w-4 mr-2" />
                    Konsultasi Gratis
                  </Button>
                </a>
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto"
                >
                  <Calendar className="h-4 w-4 mr-2" />
                  Lihat Ketersediaan
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
