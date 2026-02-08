import { motion } from "framer-motion";
import { ArrowRight, MapPin, Coffee, Star } from "lucide-react";
import { Link } from "wouter";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

export default function Home() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const stagger = {
    visible: { transition: { staggerChildren: 0.1 } }
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          {/* Unsplash image: Coffee being poured or barista working */}
          {/* <img 
            src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=2070&auto=format&fit=crop" 
            alt="Coffee pouring" 
            className="w-full h-full object-cover brightness-50"
          /> */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/30 z-10"></div>
          {/* Abstract coffee video placeholder or bg image */}
          <div 
            className="w-full h-full bg-cover bg-center"
            style={{ 
              backgroundImage: "url('https://images.unsplash.com/photo-1447933601403-0c6688de566e?q=80&w=1920&auto=format&fit=crop')"
            }}
          ></div>
        </div>

        <div className="relative z-20 max-w-5xl mx-auto px-4 text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="space-y-6"
          >
            <motion.span variants={fadeInUp} className="inline-block px-4 py-1.5 rounded-full border border-white/30 bg-white/10 backdrop-blur-sm text-white text-sm font-medium tracking-widest uppercase mb-4">
              Est. Chennai 2024
            </motion.span>
            
            <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-white tracking-tight leading-tight">
              The Art of <br />
              <span className="text-accent italic">Perfect Brew</span>
            </motion.h1>
            
            <motion.p variants={fadeInUp} className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto font-light leading-relaxed">
              Experience Chennai's finest specialty coffee. Two locations, one uncompromising commitment to quality.
            </motion.p>
            
            <motion.div variants={fadeInUp} className="pt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/menu">
                <button className="px-8 py-4 bg-accent text-white rounded-full font-bold tracking-wide hover:bg-accent/90 transition-all shadow-lg hover:shadow-orange-500/20 hover:-translate-y-1 flex items-center gap-2">
                  View Our Menu <ArrowRight size={18} />
                </button>
              </Link>
              <Link href="/locations">
                <button className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-full font-bold tracking-wide hover:bg-white/20 transition-all hover:-translate-y-1">
                  Find a Branch
                </button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-accent/10 rounded-full z-0"></div>
              <div className="relative z-10 grid grid-cols-2 gap-4">
                {/* Coffee beans */}
                <img 
                  src="https://pixabay.com/get/g4098bad38913f915effce0e1d76a781c946569c73dab161a29dad2468f5f98ca96b4c11d44cd4ab8a1f9a06091bfa090a499414a462db43bacb69fc5b5b083d5_1280.jpg" 
                  alt="Coffee beans" 
                  className="rounded-2xl shadow-xl w-full h-64 object-cover transform translate-y-8"
                />
                {/* Latte art */}
                <img 
                  src="https://images.unsplash.com/photo-1541167760496-1628856ab772?w=600&auto=format&fit=crop&q=60" 
                  alt="Latte art" 
                  className="rounded-2xl shadow-xl w-full h-64 object-cover"
                />
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <span className="text-accent font-bold tracking-widest uppercase text-sm">About Us</span>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-primary">More than just a cup of coffee.</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                At Madras Brew, we believe every cup tells a story. From the misty hills where our beans are harvested to the skilled hands of our baristas, we are dedicated to the pursuit of coffee perfection.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Whether you're looking for a quiet corner to work, a lively spot to catch up with friends, or simply the best espresso in Chennai, our doors are open.
              </p>
              
              <div className="grid grid-cols-2 gap-8 pt-6">
                <div className="space-y-2">
                  <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-primary mb-3">
                    <Coffee size={24} />
                  </div>
                  <h4 className="font-bold text-lg">Premium Beans</h4>
                  <p className="text-sm text-muted-foreground">Sourced from the finest estates.</p>
                </div>
                <div className="space-y-2">
                  <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-primary mb-3">
                    <Star size={24} />
                  </div>
                  <h4 className="font-bold text-lg">Master Baristas</h4>
                  <p className="text-sm text-muted-foreground">Crafted with skill and passion.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Locations Preview */}
      <section className="py-24 bg-secondary/30 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-accent font-bold tracking-widest uppercase text-sm">Our Presence</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mt-2">Find Us in Chennai</h2>
            <p className="text-muted-foreground mt-4 text-lg">Two signature locations, one exceptional experience.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {/* Shenoy Nagar Card */}
            <motion.div 
              whileHover={{ y: -10 }}
              className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="h-64 overflow-hidden relative">
                <img 
                  src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&auto=format&fit=crop&q=60" 
                  alt="Shenoy Nagar Branch" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-primary">
                  Open Now
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-display font-bold text-primary mb-2">Shenoy Nagar</h3>
                <div className="flex items-start gap-2 text-muted-foreground mb-6 h-12">
                  <MapPin size={18} className="mt-1 flex-shrink-0" />
                  <p>Pachayappas Metro Thandavaraya, Chennai</p>
                </div>
                <Link href="/locations">
                  <button className="w-full py-3 border-2 border-primary text-primary font-bold rounded-xl hover:bg-primary hover:text-white transition-colors uppercase text-sm tracking-widest">
                    View Location
                  </button>
                </Link>
              </div>
            </motion.div>

            {/* Anna Nagar Card */}
            <motion.div 
              whileHover={{ y: -10 }}
              className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="h-64 overflow-hidden relative">
                <img 
                  src="https://images.unsplash.com/photo-1521017432531-fbd92d768814?w=800&auto=format&fit=crop&q=60" 
                  alt="Anna Nagar Branch" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-primary">
                  Open Now
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-display font-bold text-primary mb-2">Anna Nagar</h3>
                <div className="flex items-start gap-2 text-muted-foreground mb-6 h-12">
                  <MapPin size={18} className="mt-1 flex-shrink-0" />
                  <p>Anna Nagar East Metro 2nd Ave, Block E, Chennai</p>
                </div>
                <Link href="/locations">
                  <button className="w-full py-3 border-2 border-primary text-primary font-bold rounded-xl hover:bg-primary hover:text-white transition-colors uppercase text-sm tracking-widest">
                    View Location
                  </button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src="https://www.transparenttextures.com/patterns/cubes.png" alt="pattern" className="w-full h-full object-cover" />
        </div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">Ready to taste the difference?</h2>
          <p className="text-xl text-white/80 mb-10 font-light">Join us for a cup of perfection at your nearest Madras Brew.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/menu">
              <button className="px-8 py-4 bg-accent text-white rounded-full font-bold shadow-lg hover:bg-accent/90 transition-all hover:-translate-y-1">
                Explore Menu
              </button>
            </Link>
            <Link href="/contact">
              <button className="px-8 py-4 bg-transparent border border-white/30 text-white rounded-full font-bold hover:bg-white/10 transition-all hover:-translate-y-1">
                Get in Touch
              </button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
