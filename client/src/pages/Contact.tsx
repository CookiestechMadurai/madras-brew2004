import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertInquirySchema, type InsertInquiry } from "@shared/schema";
import { useCreateInquiry } from "@/hooks/use-inquiry";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { 
  Form, 
  FormControl, 
  FormField, 
  FormItem, 
  FormLabel, 
  FormMessage 
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send, Mail, MapPin } from "lucide-react";

export default function Contact() {
  const { mutate, isPending } = useCreateInquiry();

  const form = useForm<InsertInquiry>({
    resolver: zodResolver(insertInquirySchema),
    defaultValues: {
      name: "",
      email: "",
      message: ""
    }
  });

  function onSubmit(data: InsertInquiry) {
    mutate(data, {
      onSuccess: () => form.reset()
    });
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="bg-primary pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">Get in Touch</h1>
          <p className="text-white/70 max-w-xl mx-auto">
            Have a question or feedback? We'd love to hear from you. Fill out the form below or visit one of our locations.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 -mt-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          
          {/* Info Card */}
          <div className="lg:col-span-2 bg-primary text-white rounded-2xl p-8 lg:p-12 shadow-xl flex flex-col justify-between h-full">
            <div>
              <h3 className="text-2xl font-display font-bold mb-6">Contact Information</h3>
              <p className="text-white/70 mb-8 leading-relaxed">
                Reach out to us directly or visit our cafes for the best coffee experience in Chennai.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-white/10 rounded-lg">
                    <Mail size={20} className="text-accent" />
                  </div>
                  <div>
                    <p className="text-sm text-white/50 mb-1">Email us</p>
                    <p className="font-medium">hello@madrasbrew.com</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-white/10 rounded-lg">
                    <MapPin size={20} className="text-accent" />
                  </div>
                  <div>
                    <p className="text-sm text-white/50 mb-1">Main Branch</p>
                    <p className="font-medium">Anna Nagar, Chennai</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-12">
              <div className="w-16 h-1 bg-accent mb-6"></div>
              <p className="italic text-white/60">"Life begins after coffee."</p>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3 bg-white rounded-2xl shadow-xl p-8 lg:p-12 border border-border/50">
            <h2 className="text-2xl font-bold text-primary mb-6">Send us a Message</h2>
            
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-foreground/80 font-medium">Your Name</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="John Doe" 
                            {...field} 
                            className="bg-secondary/20 border-border/50 focus:border-accent focus:ring-accent/20 h-12 rounded-xl"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-foreground/80 font-medium">Email Address</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="john@example.com" 
                            {...field} 
                            className="bg-secondary/20 border-border/50 focus:border-accent focus:ring-accent/20 h-12 rounded-xl"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-foreground/80 font-medium">Message</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Tell us what's on your mind..." 
                          className="min-h-[150px] resize-none bg-secondary/20 border-border/50 focus:border-accent focus:ring-accent/20 rounded-xl p-4"
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <button 
                  type="submit" 
                  disabled={isPending}
                  className="w-full sm:w-auto px-8 py-4 bg-accent hover:bg-accent/90 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isPending ? "Sending..." : "Send Message"}
                  {!isPending && <Send size={18} />}
                </button>
              </form>
            </Form>
          </div>
          
        </div>
      </div>
      
      <div className="h-20"></div> {/* Spacer */}
      <Footer />
    </div>
  );
}
