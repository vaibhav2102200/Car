import { useState } from 'react';
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { motion } from 'framer-motion';

const Gallery = () => {
  const categories = [
    "All",
    "Car Audio Systems",
    "Custom Car Interiors & Upholstery",
    "Car Lighting & Styling",
    "Car Wraps & Paint Protection",
    "Alloy Wheels",
    "Car Accessories",
    "PPF & Ceramic Coating",
    "Stereo Systems"
  ];

  const galleryImages = [
  { src: "/ertigas.jpg", alt: "Car Audio System Installation", category: "Car Audio Systems" },
  { src: "/tharin.jpg", alt: "Custom Car Interiors & Upholstery", category: "Custom Car Interiors & Upholstery" },
  { src: "/bmwl.jpg", alt: "LED Lighting Upgrade", category: "Car Lighting & Styling" },
  { src: "/benz.png", alt: "Car Wrap & Paint Protection", category: "Car Wraps & Paint Protection" },
  { src: "/wheel.png", alt: "Premium Alloy Wheels", category: "Alloy Wheels" },
  { src: "/a.png", alt: "Car Accessories Display", category: "Car Accessories" },
  { src: "/ppf.png", alt: "PPF & Ceramic Coating", category: "PPF & Ceramic Coating" },
  { src: "/ss.png", alt: "Stereo System Upgrade", category: "Stereo Systems" }
];


  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredImages = selectedCategory === "All" 
    ? galleryImages 
    : galleryImages.filter(image => image.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl md:text-6xl font-bold mb-4 leading-tight animate-fade-in">
            Our Gallery
          </h1>
          <p className="text-lg text-muted-foreground mb-12 animate-fade-in">
            See the transformation! Our car modification gallery showcases premium projects from audio
            setups and luxury interiors to wraps, PPF, ceramic coatings, alloys, and lighting upgrades.
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-4 mb-12 animate-fade-in">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full border border-border transition-colors ${
                  selectedCategory === category 
                    ? 'bg-primary text-primary-foreground' 
                    : 'text-foreground hover:bg-accent hover:text-accent-foreground'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative rounded-lg overflow-hidden border border-border 
                transition-all duration-500 hover:shadow-[0_0_25px_rgba(255,0,0,0.7)] hover:border-red-500"
              >
                <div className="h-64 overflow-hidden">
                  <img 
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-center text-white">
                    <p className="text-lg font-medium">{image.category}</p>
                    <p className="text-sm opacity-80">{image.alt}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* No images message */}
          {filteredImages.length === 0 && (
            <div className="text-center py-12">
              <p className="text-xl text-muted-foreground">No images found in this category.</p>
            </div>
          )}
        </div>
      </main>
      <br /><br /><br />
      <Footer />
    </div>
  );
};

export default Gallery;
