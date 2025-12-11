import { Button } from "@/components/ui/button";
import { FadeInUp, SlideInRight } from "@/components/animations/AnimatedSection";
import { MapPin, Phone, Clock } from "lucide-react";

export const ContactSection = () => {
  return (
    <section className="py-32 bg-background relative">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left - Map */}
          <FadeInUp className="lg:col-span-7">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-full h-full border border-primary/30" />
              <div className="relative aspect-video lg:aspect-[4/3] overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48323.50987843762!2d-73.1627803!3d40.8246!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e83666e8f8c799%3A0x6b1f0e9dd3e4f1f7!2sLake%20Ronkonkoma%2C%20NY!5e0!3m2!1sen!2sus!4v1703000000000!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: "grayscale(100%) contrast(1.2)" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Dance Couture Location"
                  className="absolute inset-0"
                />
                {/* Overlay for styling */}
                <div className="absolute inset-0 bg-primary/10 mix-blend-multiply pointer-events-none" />
              </div>
            </div>
          </FadeInUp>
          
          {/* Right - Contact Info */}
          <SlideInRight className="lg:col-span-4 lg:col-start-9">
            <span className="font-body text-xs uppercase tracking-[0.4em] text-primary mb-4 block">
              Visit Us
            </span>
            <h2 className="text-display-md text-foreground mb-8">
              Begin Your <span className="italic text-primary">Journey</span>
            </h2>
            
            <div className="space-y-6 mb-10">
              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 border border-border flex items-center justify-center group-hover:border-primary transition-colors duration-300">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-body text-xs uppercase tracking-widest text-foreground/60 mb-1">Location</h4>
                  <a 
                    href="https://maps.google.com/?q=Lake+Ronkonkoma+NY"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-display text-lg text-foreground hover:text-primary transition-colors"
                  >
                    Lake Ronkonkoma, NY
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 border border-border flex items-center justify-center group-hover:border-primary transition-colors duration-300">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-body text-xs uppercase tracking-widest text-foreground/60 mb-1">Call Us</h4>
                  <a 
                    href="tel:+16316483404"
                    className="font-display text-lg text-foreground hover:text-primary transition-colors"
                  >
                    +1 (631) 648-3404
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 border border-border flex items-center justify-center group-hover:border-primary transition-colors duration-300">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-body text-xs uppercase tracking-widest text-foreground/60 mb-1">Studio Hours</h4>
                  <p className="font-display text-lg text-foreground">
                    Mon-Sat: 3PM - 9PM
                  </p>
                </div>
              </div>
            </div>
            
            <Button variant="luxury" size="xl" className="w-full">
              <span>Schedule a Tour</span>
            </Button>
          </SlideInRight>
        </div>
      </div>
    </section>
  );
};
