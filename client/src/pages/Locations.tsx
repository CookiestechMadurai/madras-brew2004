import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { MapPin, Clock, Phone } from "lucide-react";

export default function Locations() {
  const branches = [
    {
      id: "shenoy",
      name: "Shenoy Nagar Branch",
      address: "Pachayappas Metro Thandavaraya, Shenoy Nagar, Chennai, Tamil Nadu 600030",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.357879685025!2d80.2238!3d13.0765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5266718d09852d%3A0x6280456105315354!2sShenoy%20Nagar%2C%20Chennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1714828192837!5m2!1sen!2sin",
      phone: "+91 98765 43210",
      hours: "7:00 AM - 10:00 PM"
    },
    {
      id: "anna",
      name: "Anna Nagar Branch",
      address: "Anna Nagar East Metro 2nd Ave, Block E, Annanagar East, Chennai, Tamil Nadu 600102",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.177215324021!2d80.2184!3d13.0877!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5265df9b6748a3%3A0x4a23456789abc!2sAnna%20Nagar%20East%2C%20Chennai!5e0!3m2!1sen!2sin!4v1714828192837!5m2!1sen!2sin",
      phone: "+91 98765 43211",
      hours: "7:00 AM - 11:00 PM"
    }
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />
      
      <div className="bg-primary text-white py-24 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">Visit Us</h1>
        <p className="text-white/70 max-w-xl mx-auto">Drop by for a fresh brew and warm ambiance at any of our Chennai locations.</p>
      </div>

      <div className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        {branches.map((branch, idx) => (
          <div key={branch.id} className={`flex flex-col lg:flex-row gap-12 items-start ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
            
            <div className="w-full lg:w-1/2 space-y-8">
              <div>
                <span className="text-accent font-bold tracking-widest text-sm uppercase mb-2 block">Location 0{idx + 1}</span>
                <h2 className="text-3xl font-display font-bold text-primary mb-6">{branch.name}</h2>
                
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center flex-shrink-0 text-primary">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground">Address</h4>
                      <p className="text-muted-foreground leading-relaxed mt-1">{branch.address}</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center flex-shrink-0 text-primary">
                      <Clock size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground">Opening Hours</h4>
                      <p className="text-muted-foreground mt-1">{branch.hours}</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center flex-shrink-0 text-primary">
                      <Phone size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground">Contact</h4>
                      <p className="text-muted-foreground mt-1">{branch.phone}</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="pt-4">
                <a 
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(branch.address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="px-8 py-3 bg-primary text-white rounded-lg font-bold shadow-lg hover:bg-primary/90 transition-all hover:translate-x-1">
                    Get Directions
                  </button>
                </a>
              </div>
            </div>

            <div className="w-full lg:w-1/2 h-[400px] bg-secondary/20 rounded-2xl overflow-hidden shadow-inner border border-border">
              <iframe 
                src={branch.mapUrl} 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale hover:grayscale-0 transition-all duration-500"
              ></iframe>
            </div>
            
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
}
