import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { FadeInUp, SlideInLeft, SlideInRight } from "@/components/animations/AnimatedSection";
import { MapPin, Phone, Mail, Clock, Instagram, Facebook } from "lucide-react";

const Contact = () => {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      {/* Hero */}
      <section className="pt-40 pb-20 bg-background relative">
        <div className="container mx-auto px-6 lg:px-12">
          <SlideInLeft>
            <span className="font-body text-xs uppercase tracking-[0.4em] text-primary mb-4 block">
              Get In Touch
            </span>
            <h1 className="text-display-xl text-foreground mb-6">
              Contact <span className="italic text-primary">Us</span>
            </h1>
            <p className="text-editorial max-w-2xl">
              Ready to begin your dance journey? We'd love to hear from you. 
              Schedule a tour, ask questions, or enroll today.
            </p>
          </SlideInLeft>
        </div>
      </section>
      
      {/* Contact Content */}
      <section className="py-20 bg-charcoal">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Contact Info */}
            <SlideInLeft>
              <div className="space-y-10">
                <div>
                  <h2 className="font-display text-3xl text-foreground mb-8">
                    Visit Our Studio
                  </h2>
                  
                  <div className="space-y-6">
                    <div className="flex items-start gap-4 group">
                      <div className="w-14 h-14 border border-border flex items-center justify-center group-hover:border-primary transition-colors duration-300 flex-shrink-0">
                        <MapPin className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-body text-xs uppercase tracking-widest text-foreground/60 mb-2">Location</h4>
                        <a 
                          href="https://maps.google.com/?q=Lake+Ronkonkoma+NY"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-display text-xl text-foreground hover:text-primary transition-colors block"
                        >
                          Lake Ronkonkoma, NY
                        </a>
                        <p className="font-body text-sm text-foreground/60 mt-1">
                          Long Island, New York
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4 group">
                      <div className="w-14 h-14 border border-border flex items-center justify-center group-hover:border-primary transition-colors duration-300 flex-shrink-0">
                        <Phone className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-body text-xs uppercase tracking-widest text-foreground/60 mb-2">Phone</h4>
                        <a 
                          href="tel:+16316483404"
                          className="font-display text-xl text-foreground hover:text-primary transition-colors block"
                        >
                          +1 (631) 648-3404
                        </a>
                        <p className="font-body text-sm text-foreground/60 mt-1">
                          Call or text anytime
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4 group">
                      <div className="w-14 h-14 border border-border flex items-center justify-center group-hover:border-primary transition-colors duration-300 flex-shrink-0">
                        <Mail className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-body text-xs uppercase tracking-widest text-foreground/60 mb-2">Email</h4>
                        <a 
                          href="mailto:info@dancecouture.com"
                          className="font-display text-xl text-foreground hover:text-primary transition-colors block"
                        >
                          info@dancecouture.com
                        </a>
                        <p className="font-body text-sm text-foreground/60 mt-1">
                          We respond within 24 hours
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4 group">
                      <div className="w-14 h-14 border border-border flex items-center justify-center group-hover:border-primary transition-colors duration-300 flex-shrink-0">
                        <Clock className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-body text-xs uppercase tracking-widest text-foreground/60 mb-2">Studio Hours</h4>
                        <p className="font-display text-xl text-foreground">
                          Monday - Saturday
                        </p>
                        <p className="font-body text-sm text-foreground/60 mt-1">
                          3:00 PM - 9:00 PM
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Social */}
                <div>
                  <h3 className="font-body text-xs uppercase tracking-widest text-primary mb-4">
                    Follow Us
                  </h3>
                  <div className="flex gap-4">
                    <a 
                      href="#" 
                      className="w-12 h-12 border border-border flex items-center justify-center text-foreground/60 hover:border-primary hover:text-primary transition-all duration-300"
                      aria-label="Instagram"
                    >
                      <Instagram className="w-5 h-5" />
                    </a>
                    <a 
                      href="#" 
                      className="w-12 h-12 border border-border flex items-center justify-center text-foreground/60 hover:border-primary hover:text-primary transition-all duration-300"
                      aria-label="Facebook"
                    >
                      <Facebook className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            </SlideInLeft>
            
            {/* Map */}
            <SlideInRight>
              <div className="relative h-full min-h-[500px]">
                <div className="absolute -top-4 -left-4 w-full h-full border border-primary/30" />
                <div className="relative w-full h-full overflow-hidden">
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
                  <div className="absolute inset-0 bg-primary/10 mix-blend-multiply pointer-events-none" />
                </div>
              </div>
            </SlideInRight>
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <FadeInUp>
            <h2 className="text-display-md text-foreground mb-6">
              Ready to <span className="italic text-primary">Begin</span>?
            </h2>
            <p className="text-editorial max-w-xl mx-auto mb-8">
              Schedule your first class or a studio tour. 
              We can't wait to welcome you to the Dance Couture family.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="luxury" size="xl">
                <span>Enroll Now</span>
              </Button>
              <Button variant="ghost-gold" size="xl">
                Schedule Tour
              </Button>
            </div>
          </FadeInUp>
        </div>
      </section>
      
      <Footer />
    </main>
  );
};

export default Contact;
