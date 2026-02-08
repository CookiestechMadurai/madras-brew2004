import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Coffee } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#/" },
    { name: "Menu", href: "#/menu" },
    { name: "Locations", href: "#/locations" },
    { name: "Contact", href: "#/contact" },
  ];

  const navbarClasses = `fixed w-full z-50 transition-all duration-300 ${
    scrolled ? "bg-background/95 backdrop-blur-md shadow-md py-3" : "bg-transparent py-5"
  }`;

  return (
    <nav className={navbarClasses}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link href="#/" className="flex items-center gap-2 group cursor-pointer">
            <div className="p-2 bg-primary rounded-lg text-primary-foreground group-hover:bg-accent transition-colors duration-300">
              <Coffee size={24} strokeWidth={2.5} />
            </div>
            <span className={`font-display font-bold text-xl tracking-wide uppercase transition-colors duration-300 ${
              scrolled ? "text-primary" : "text-white"
            }`}>
              Madras Brew
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                className={`text-sm font-semibold tracking-wider uppercase transition-all duration-300 hover:text-accent relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-accent after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full ${
                  location === link.href ? "text-accent after:w-full" : 
                  scrolled ? "text-foreground" : "text-white/90"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link href="#/menu">
              <button className="bg-accent hover:bg-accent/90 text-white px-5 py-2 rounded-full font-medium text-sm transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0">
                Order Now
              </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-md ${scrolled ? "text-foreground" : "text-white"}`}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-b border-border"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-4 text-base font-medium border-b border-border/50 ${
                    location === link.href ? "text-accent" : "text-foreground"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4">
                <Link href="/menu" onClick={() => setIsOpen(false)}>
                  <button className="w-full bg-primary text-primary-foreground px-4 py-3 rounded-lg font-bold shadow-md">
                    Order Now
                  </button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
