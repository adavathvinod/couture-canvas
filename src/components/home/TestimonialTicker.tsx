import { motion } from "framer-motion";

const testimonials = [
  { name: "Sarah M.", text: "The best dance studio on Long Island. Jacqueline's attention to detail is unmatched." },
  { name: "Maria L.", text: "My daughter has flourished here. The faculty is world-class." },
  { name: "Jennifer K.", text: "A truly transformative experience. The atmosphere is pure elegance." },
  { name: "Lisa R.", text: "Five stars isn't enough. This studio exceeds all expectations." },
  { name: "Amanda T.", text: "Professional, inspiring, and genuinely caring instructors." },
];

export const TestimonialTicker = () => {
  return (
    <section className="py-8 bg-charcoal border-y border-border overflow-hidden">
      <div className="relative">
        <motion.div
          className="flex gap-16 whitespace-nowrap"
          animate={{ x: [0, "-50%"] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        >
          {[...testimonials, ...testimonials].map((testimonial, index) => (
            <div key={index} className="flex items-center gap-8">
              <div className="flex items-center gap-2">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-3 h-3 text-primary fill-current" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
              <p className="font-display text-lg italic text-foreground/80">
                "{testimonial.text}"
              </p>
              <span className="font-body text-xs uppercase tracking-widest text-primary">
                — {testimonial.name}
              </span>
              <div className="w-2 h-2 rotate-45 bg-primary/30" />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
