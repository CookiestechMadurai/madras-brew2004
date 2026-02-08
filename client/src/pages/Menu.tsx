import { useState } from "react";
import { motion } from "framer-motion";
import { useMenu } from "@/hooks/use-menu";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Loader2 } from "lucide-react";

export default function Menu() {
  const { data: menuItems, isLoading, error } = useMenu();
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = ["All", "Coffee", "Snacks", "Beverages"];

  const filteredItems = menuItems?.filter(
    (item) => activeCategory === "All" || item.category === activeCategory
  );

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Header */}
      <div className="relative bg-primary py-32 sm:py-40 px-4">
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=2071&auto=format&fit=crop" 
            alt="Menu Header" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-display font-bold text-white mb-4">Our Menu</h1>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Carefully curated selection of artisanal coffees, delectable snacks, and refreshing beverages.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 -mt-10 relative z-20">
        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 shadow-sm ${
                activeCategory === category
                  ? "bg-accent text-white shadow-lg scale-105"
                  : "bg-white text-foreground hover:bg-secondary"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        {isLoading ? (
          <div className="flex flex-col items-center justify-center py-20">
            <Loader2 className="w-10 h-10 text-accent animate-spin mb-4" />
            <p className="text-muted-foreground">Brewing your menu...</p>
          </div>
        ) : error ? (
          <div className="text-center py-20 text-destructive">
            <p>Failed to load menu. Please try again later.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems?.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-border/50 group"
              >
                <div className="aspect-[4/3] overflow-hidden bg-secondary/30 relative">
                  {item.imageUrl ? (
                    <img 
                      src={item.imageUrl} 
                      alt={item.name} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-muted-foreground/30 font-display text-4xl font-bold bg-secondary/20">
                      MB
                    </div>
                  )}
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-primary font-bold px-3 py-1 rounded-full text-sm shadow-sm">
                    {item.price}
                  </div>
                </div>
                <div className="p-6">
                  <div className="text-xs font-bold text-accent uppercase tracking-wider mb-2">{item.category}</div>
                  <h3 className="text-xl font-bold font-display text-primary mb-2">{item.name}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}
