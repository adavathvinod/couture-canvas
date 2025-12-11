import { Button } from "@/components/ui/button";
import { FadeInUp, SlideInLeft, SlideInRight } from "@/components/animations/AnimatedSection";
import { motion } from "framer-motion";
import heroDancer from "@/assets/hero-dancer.jpg";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-background">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-charcoal-light" />
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-px h-32 bg-gradient-to-b from-transparent via-primary/30 to-transparent" />
      <div className="absolute bottom-20 right-10 w-px h-32 bg-gradient-to-b from-transparent via-primary/30 to-transparent" />
      
      <div className="container mx-auto px-6 lg:px-12 pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          {/* Left Content - Asymmetrical Text Block */}
          <div className="lg:col-span-5 lg:col-start-1 relative z-20">
            <FadeInUp>
              <span className="font-body text-xs uppercase tracking-[0.4em] text-primary mb-4 block">
                Est. Lake Ronkonkoma, NY
              </span>
            </FadeInUp>
            
            <FadeInUp delay={0.1}>
              <h1 className="text-display-xl text-foreground mb-6">
                Dance
                <span className="block text-primary italic">Couture</span>
              </h1>
            </FadeInUp>
            
            <FadeInUp delay={0.2}>
              <p className="text-editorial max-w-md mb-8">
                Where artistry meets precision. Discover the transformative power of movement at New York's premier dance studio.
              </p>
            </FadeInUp>
            
            <FadeInUp delay={0.3}>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="luxury" size="xl">
                  <span>Begin Your Journey</span>
                </Button>
                <Button variant="ghost-gold" size="xl">
                  Explore Programs
                </Button>
              </div>
            </FadeInUp>
            
            {/* Rating Badge */}
            <FadeInUp delay={0.4}>
              <div className="mt-12 flex items-center gap-4">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-primary fill-current" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>
                <div className="h-4 w-px bg-border" />
                <span className="font-body text-sm text-foreground/60">5.0 Perfect Rating</span>
              </div>
            </FadeInUp>
          </div>
          
          {/* Right Content - Off-center Image Block */}
          <div className="lg:col-span-7 lg:col-start-6 relative">
            <SlideInRight delay={0.2}>
              <div className="relative">
                {/* Main Image Frame - Asymmetrical positioning */}
                <div className="relative aspect-square max-w-[600px] ml-auto">
                  {/* Gold accent frame */}
                  <div className="absolute -top-4 -right-4 w-full h-full border border-primary/30" />
                  
                  {/* Image container */}
                  <motion.div 
                    className="relative w-full h-full overflow-hidden bg-charcoal"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.6 }}
                  >
                    <img 
                      src={heroDancer}
                      alt="Elegant dancer in flowing white dress"
                      className="w-full h-full object-cover"
                    />
                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />
                  </motion.div>
                  
                  {/* Floating text overlay */}
                  <div className="absolute -bottom-8 -left-8 lg:-left-16 bg-background/90 backdrop-blur-sm p-6 border-l-2 border-primary">
                    <span className="font-display text-4xl lg:text-5xl text-foreground">15+</span>
                    <p className="font-body text-xs uppercase tracking-widest text-foreground/60 mt-1">Years of Excellence</p>
                  </div>
                </div>
              </div>
            </SlideInRight>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-px h-16 bg-gradient-to-b from-primary to-transparent" />
      </motion.div>
    </section>
  );
};
