import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FadeInUp, StaggerContainer, StaggerItem } from "@/components/animations/AnimatedSection";
import { ChevronDown } from "lucide-react";

const programs = [
  {
    id: "ballet",
    name: "Ballet",
    icon: "🩰",
    shortDesc: "Classical technique and grace",
    fullDesc: "Master the foundation of all dance forms with our comprehensive ballet program. From beginner pointe work to advanced variations, our curriculum follows the Vaganova methodology.",
    levels: ["Pre-Ballet (Ages 3-5)", "Primary (Ages 6-8)", "Intermediate", "Advanced", "Pre-Professional"],
  },
  {
    id: "jazz",
    name: "Jazz",
    icon: "✨",
    shortDesc: "Energy, style, and performance",
    fullDesc: "Dynamic and expressive, our jazz program develops versatility, musicality, and stage presence. Students learn contemporary jazz, Broadway, and commercial styles.",
    levels: ["Junior Jazz", "Intermediate", "Advanced", "Competition Team"],
  },
  {
    id: "contemporary",
    name: "Contemporary",
    icon: "🌊",
    shortDesc: "Emotional expression through movement",
    fullDesc: "Blend technique with artistry in our contemporary program. Students explore improvisation, floor work, and the connection between emotion and movement.",
    levels: ["Introduction", "Intermediate", "Advanced", "Choreography Workshop"],
  },
  {
    id: "hiphop",
    name: "Hip Hop",
    icon: "🔥",
    shortDesc: "Urban dance and street styles",
    fullDesc: "Learn the latest urban dance styles including breaking, popping, locking, and choreography. Our hip hop program emphasizes musicality and personal style.",
    levels: ["Beginner", "Intermediate", "Advanced", "Crew Training"],
  },
  {
    id: "tap",
    name: "Tap",
    icon: "👟",
    shortDesc: "Rhythm and percussion dance",
    fullDesc: "Develop intricate footwork and musicality in our tap program. From Broadway to rhythm tap, students learn to be both dancers and musicians.",
    levels: ["Beginner", "Intermediate", "Advanced"],
  },
];

export const ProgramsSection = () => {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <section className="py-32 bg-charcoal relative">
      {/* Decorative lines */}
      <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-border to-transparent" />
      <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-border to-transparent" />
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Header */}
        <FadeInUp className="text-center mb-20">
          <span className="font-body text-xs uppercase tracking-[0.4em] text-primary mb-4 block">
            Our Disciplines
          </span>
          <h2 className="text-display-lg text-foreground mb-6">
            Programs & <span className="italic text-primary">Training</span>
          </h2>
          <p className="text-editorial max-w-2xl mx-auto">
            From classical ballet to contemporary movement, discover the perfect program for your dance journey.
          </p>
        </FadeInUp>
        
        {/* Programs Grid */}
        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.1}>
          {programs.map((program) => (
            <StaggerItem key={program.id}>
              <motion.div
                className={`relative border border-border bg-background/50 backdrop-blur-sm overflow-hidden cursor-pointer group ${
                  expandedId === program.id ? "md:col-span-2 lg:col-span-1" : ""
                }`}
                onClick={() => setExpandedId(expandedId === program.id ? null : program.id)}
                layout
                transition={{ duration: 0.4 }}
              >
                {/* Main content */}
                <div className="p-8">
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-4xl">{program.icon}</span>
                    <motion.div
                      animate={{ rotate: expandedId === program.id ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown className="w-5 h-5 text-primary" />
                    </motion.div>
                  </div>
                  
                  <h3 className="font-display text-2xl text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                    {program.name}
                  </h3>
                  <p className="font-body text-sm text-foreground/60">
                    {program.shortDesc}
                  </p>
                  
                  {/* Expanded content */}
                  <AnimatePresence>
                    {expandedId === program.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="pt-6 mt-6 border-t border-border">
                          <p className="font-body text-sm text-foreground/80 mb-4 leading-relaxed">
                            {program.fullDesc}
                          </p>
                          <div className="space-y-2">
                            <span className="font-body text-xs uppercase tracking-widest text-primary">
                              Levels Offered
                            </span>
                            <ul className="space-y-1">
                              {program.levels.map((level) => (
                                <li key={level} className="font-body text-sm text-foreground/60 flex items-center gap-2">
                                  <div className="w-1 h-1 bg-primary" />
                                  {level}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
                
                {/* Hover accent line */}
                <div className="absolute bottom-0 left-0 w-full h-px bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};
