import { FadeInUp, SlideInLeft, SlideInRight, ImageHover } from "@/components/animations/AnimatedSection";
import faculty1 from "@/assets/faculty-1.jpg";
import faculty2 from "@/assets/faculty-2.jpg";

export const WhyDCSection = () => {
  const features = [
    {
      number: "01",
      title: "Expert Faculty",
      description: "Our instructors bring decades of professional experience from Broadway to international stages.",
    },
    {
      number: "02", 
      title: "Personalized Training",
      description: "Every dancer receives individualized attention to nurture their unique potential.",
    },
    {
      number: "03",
      title: "Performance Ready",
      description: "Our students regularly compete and perform at the highest levels nationally.",
    },
    {
      number: "04",
      title: "Nurturing Environment",
      description: "A supportive community where dancers of all ages discover their passion.",
    },
  ];

  return (
    <section className="py-32 bg-background relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-charcoal-light to-transparent opacity-50" />
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="grid lg:grid-cols-12 gap-8 mb-20">
          <SlideInLeft className="lg:col-span-5">
            <span className="font-body text-xs uppercase tracking-[0.4em] text-primary mb-4 block">
              Why Choose Us
            </span>
            <h2 className="text-display-lg text-foreground">
              The <span className="italic text-primary">DC</span> Difference
            </h2>
          </SlideInLeft>
          
          <SlideInRight className="lg:col-span-5 lg:col-start-8 flex items-end">
            <p className="text-editorial">
              For over 15 years, Dance Couture has been the destination for serious dancers seeking excellence, artistry, and transformation.
            </p>
          </SlideInRight>
        </div>
        
        {/* Asymmetrical Content Grid */}
        <div className="grid lg:grid-cols-12 gap-8">
          {/* Left Column - Features */}
          <div className="lg:col-span-5 space-y-12">
            {features.map((feature, index) => (
              <FadeInUp key={feature.number} delay={index * 0.1}>
                <div className="group">
                  <div className="flex items-start gap-6">
                    <span className="font-display text-5xl text-primary/20 group-hover:text-primary/40 transition-colors duration-500">
                      {feature.number}
                    </span>
                    <div>
                      <h3 className="font-display text-2xl text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                        {feature.title}
                      </h3>
                      <p className="font-body text-sm text-foreground/60 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                  <div className="gold-line mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </FadeInUp>
            ))}
          </div>
          
          {/* Right Column - Overlapping Images */}
          <div className="lg:col-span-6 lg:col-start-7 relative mt-12 lg:mt-0">
            <SlideInRight delay={0.2}>
              <div className="relative">
                {/* Primary Image */}
                <ImageHover className="relative z-10 w-4/5">
                  <div className="aspect-[3/4] overflow-hidden">
                    <img 
                      src={faculty1}
                      alt="Dance instructor"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </ImageHover>
                
                {/* Secondary Image - Overlapping */}
                <ImageHover className="absolute -bottom-12 -right-4 lg:right-0 w-1/2 z-20">
                  <div className="aspect-square overflow-hidden border-4 border-background">
                    <img 
                      src={faculty2}
                      alt="Dance instructor"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </ImageHover>
                
                {/* Decorative element */}
                <div className="absolute -top-8 -left-8 w-32 h-32 border border-primary/20" />
              </div>
            </SlideInRight>
          </div>
        </div>
      </div>
    </section>
  );
};
