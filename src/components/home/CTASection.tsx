import { Button } from "@/components/ui/button";
import { FadeInUp } from "@/components/animations/AnimatedSection";
import { motion } from "framer-motion";

export const CTASection = () => {
  return (
    <section className="py-32 bg-charcoal relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 border border-primary/10 rotate-45" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 border border-primary/5 rotate-12" />
      </div>
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <FadeInUp>
            <span className="font-body text-xs uppercase tracking-[0.4em] text-primary mb-6 block">
              Your Journey Starts Here
            </span>
          </FadeInUp>
          
          <FadeInUp delay={0.1}>
            <h2 className="text-display-lg text-foreground mb-6">
              Ready to <span className="italic text-primary">Transform</span>?
            </h2>
          </FadeInUp>
          
          <FadeInUp delay={0.2}>
            <p className="text-editorial max-w-2xl mx-auto mb-10">
              Join our family of dancers and discover what makes Dance Couture the premier studio on Long Island. Your first class awaits.
            </p>
          </FadeInUp>
          
          <FadeInUp delay={0.3}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="luxury" size="xl">
                <span>Enroll Now</span>
              </Button>
              <Button variant="ghost-gold" size="xl">
                Request Info
              </Button>
            </div>
          </FadeInUp>
          
          {/* Animated decorative line */}
          <motion.div 
            className="mt-16 flex justify-center"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <div className="w-32 h-px bg-primary" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
