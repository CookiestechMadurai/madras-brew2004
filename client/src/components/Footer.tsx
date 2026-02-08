import { Link } from "wouter";
import { Coffee, Instagram, Facebook, Twitter, MapPin, Mail, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <Link href="/madras-brew2004/" className="flex items-center gap-2 mb-6 cursor-pointer">
              <Coffee className="text-accent" size={28} />
              <span className="font-display font-bold text-2xl tracking-wider">MADRAS BREW</span>
            </Link>
            <p className="text-primary-foreground/70 mb-6 leading-relaxed">
              Crafting exceptional coffee experiences in the heart of Chennai. From bean to cup, perfection is our promise.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-accent hover:text-white transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-accent hover:text-white transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-accent hover:text-white transition-colors">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display font-bold text-lg mb-6 text-accent">Discover</h3>
            <ul className="space-y-3">
              <li><Link href="/madras-brew2004/" className="text-primary-foreground/70 hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/madras-brew2004/menu" className="text-primary-foreground/70 hover:text-white transition-colors">Our Menu</Link></li>
              <li><Link href="/madras-brew2004/locations" className="text-primary-foreground/70 hover:text-white transition-colors">Locations</Link></li>
              <li><Link href="/madras-brew2004/contact" className="text-primary-foreground/70 hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="font-display font-bold text-lg mb-6 text-accent">Visit Us</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <MapPin className="mt-1 text-accent flex-shrink-0" size={18} />
                  <div>
                    <h4 className="font-bold text-white mb-1">Shenoy Nagar</h4>
                    <p className="text-sm text-primary-foreground/70">Pachayappas Metro Thandavaraya,<br/>Shenoy Nagar, Chennai 600030</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <MapPin className="mt-1 text-accent flex-shrink-0" size={18} />
                  <div>
                    <h4 className="font-bold text-white mb-1">Anna Nagar</h4>
                    <p className="text-sm text-primary-foreground/70">Anna Nagar East Metro 2nd Ave,<br/>Block E, Annanagar East, Chennai 600102</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-8 pt-8 border-t border-white/10 flex flex-col sm:flex-row gap-6">
              <div className="flex items-center gap-3">
                <Phone className="text-accent" size={18} />
                <span className="text-primary-foreground/70">+91 98765 43210</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="text-accent" size={18} />
                <span className="text-primary-foreground/70">hello@madrasbrew.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-sm text-primary-foreground/50">
          <p>&copy; {new Date().getFullYear()} Madras Brew. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
