import { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { FadeInUp, SlideInLeft, StaggerContainer, StaggerItem } from "@/components/animations/AnimatedSection";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const programs = [
  {
    id: "ballet",
    name: "Ballet",
    icon: "🩰",
    description: "Master the foundation of all dance forms with our comprehensive ballet program. From beginner pointe work to advanced variations, our curriculum follows the Vaganova methodology with a focus on artistry and technical precision.",
    levels: [
      { name: "Pre-Ballet", ages: "Ages 3-5", description: "Introduction to movement, rhythm, and basic positions through creative play." },
      { name: "Primary Ballet", ages: "Ages 6-8", description: "Foundation technique, terminology, and beginning barre work." },
      { name: "Intermediate", ages: "Ages 9-12", description: "Advanced technique, pre-pointe preparation, and beginning variations." },
      { name: "Advanced", ages: "Ages 13+", description: "Pointe work, advanced variations, and performance preparation." },
      { name: "Pre-Professional", ages: "By audition", description: "Intensive training for students pursuing professional careers." },
    ],
    pricing: "Starting at $150/month",
  },
  {
    id: "jazz",
    name: "Jazz",
    icon: "✨",
    description: "Dynamic and expressive, our jazz program develops versatility, musicality, and stage presence. Students learn contemporary jazz, Broadway, and commercial styles that prepare them for any performance opportunity.",
    levels: [
      { name: "Junior Jazz", ages: "Ages 5-8", description: "Fun introduction to jazz technique and popular styles." },
      { name: "Intermediate Jazz", ages: "Ages 9-12", description: "Building strength, flexibility, and stylistic range." },
      { name: "Advanced Jazz", ages: "Ages 13+", description: "Professional-level technique and choreography." },
      { name: "Competition Team", ages: "By audition", description: "Elite training for competitive dancers." },
    ],
    pricing: "Starting at $140/month",
  },
  {
    id: "contemporary",
    name: "Contemporary",
    icon: "🌊",
    description: "Blend technique with artistry in our contemporary program. Students explore improvisation, floor work, and the profound connection between emotion and movement, developing their unique artistic voice.",
    levels: [
      { name: "Introduction", ages: "Ages 10+", description: "Fundamentals of contemporary movement and expression." },
      { name: "Intermediate", ages: "Ages 12+", description: "Developing personal style and advanced floorwork." },
      { name: "Advanced", ages: "Ages 14+", description: "Complex choreography and performance artistry." },
      { name: "Choreography Workshop", ages: "Ages 14+", description: "Creating original works and developing choreographic voice." },
    ],
    pricing: "Starting at $145/month",
  },
  {
    id: "hiphop",
    name: "Hip Hop",
    icon: "🔥",
    description: "Learn the latest urban dance styles including breaking, popping, locking, and choreography. Our hip hop program emphasizes musicality, personal style, and the cultural foundations of street dance.",
    levels: [
      { name: "Beginner", ages: "Ages 6+", description: "Introduction to hip hop foundations and basic moves." },
      { name: "Intermediate", ages: "Ages 9+", description: "Building style and learning popular choreography." },
      { name: "Advanced", ages: "Ages 12+", description: "Complex combinations and freestyle development." },
      { name: "Crew Training", ages: "By audition", description: "Team performance and competition preparation." },
    ],
    pricing: "Starting at $135/month",
  },
  {
    id: "tap",
    name: "Tap",
    icon: "👟",
    description: "Develop intricate footwork and musicality in our tap program. From Broadway to rhythm tap, students learn to be both dancers and musicians, creating percussion with their feet.",
    levels: [
      { name: "Beginner Tap", ages: "Ages 5+", description: "Basic steps, sounds, and rhythm patterns." },
      { name: "Intermediate Tap", ages: "Ages 8+", description: "Building speed, clarity, and musical expression." },
      { name: "Advanced Tap", ages: "Ages 12+", description: "Complex rhythms, improvisation, and performance." },
    ],
    pricing: "Starting at $130/month",
  },
];

const Programs = () => {
  const [expandedId, setExpandedId] = useState<string | null>("ballet");

  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      {/* Hero */}
      <section className="pt-40 pb-20 bg-background relative">
        <div className="container mx-auto px-6 lg:px-12">
          <SlideInLeft>
            <span className="font-body text-xs uppercase tracking-[0.4em] text-primary mb-4 block">
              Our Disciplines
            </span>
            <h1 className="text-display-xl text-foreground mb-6">
              Programs & <span className="italic text-primary">Training</span>
            </h1>
            <p className="text-editorial max-w-2xl">
              From classical ballet to urban street styles, discover the perfect program 
              for your dance journey. All ages and skill levels welcome.
            </p>
          </SlideInLeft>
        </div>
      </section>
      
      {/* Programs List */}
      <section className="py-20 bg-charcoal">
        <div className="container mx-auto px-6 lg:px-12">
          <StaggerContainer className="space-y-4" staggerDelay={0.1}>
            {programs.map((program) => (
              <StaggerItem key={program.id}>
                <motion.div
                  className="border border-border bg-background/50 backdrop-blur-sm overflow-hidden"
                  layout
                >
                  {/* Header - Always visible */}
                  <button
                    onClick={() => setExpandedId(expandedId === program.id ? null : program.id)}
                    className="w-full p-8 flex items-center justify-between text-left group"
                  >
                    <div className="flex items-center gap-6">
                      <span className="text-4xl">{program.icon}</span>
                      <div>
                        <h2 className="font-display text-3xl text-foreground group-hover:text-primary transition-colors">
                          {program.name}
                        </h2>
                        <p className="font-body text-sm text-foreground/60 mt-1">
                          {program.pricing}
                        </p>
                      </div>
                    </div>
                    <motion.div
                      animate={{ rotate: expandedId === program.id ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown className="w-6 h-6 text-primary" />
                    </motion.div>
                  </button>
                  
                  {/* Expanded Content */}
                  <AnimatePresence>
                    {expandedId === program.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.4 }}
                      >
                        <div className="px-8 pb-8 border-t border-border">
                          <div className="pt-8 grid lg:grid-cols-2 gap-8">
                            <div>
                              <p className="font-body text-foreground/80 leading-relaxed mb-6">
                                {program.description}
                              </p>
                              <Button variant="luxury" size="lg">
                                <span>Enroll Now</span>
                              </Button>
                            </div>
                            
                            <div className="space-y-4">
                              <h3 className="font-body text-xs uppercase tracking-widest text-primary mb-4">
                                Levels Offered
                              </h3>
                              {program.levels.map((level) => (
                                <div key={level.name} className="border-l-2 border-primary/30 pl-4 py-2">
                                  <div className="flex items-baseline justify-between">
                                    <h4 className="font-display text-lg text-foreground">
                                      {level.name}
                                    </h4>
                                    <span className="font-body text-xs text-primary">
                                      {level.ages}
                                    </span>
                                  </div>
                                  <p className="font-body text-sm text-foreground/60 mt-1">
                                    {level.description}
                                  </p>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>
      
      {/* CTA */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <FadeInUp>
            <h2 className="text-display-md text-foreground mb-6">
              Not Sure Where to <span className="italic text-primary">Start</span>?
            </h2>
            <p className="text-editorial max-w-xl mx-auto mb-8">
              Schedule a consultation with our team. We'll help you find the perfect program 
              based on your goals, experience, and schedule.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="luxury" size="xl">
                <span>Schedule Consultation</span>
              </Button>
              <Button variant="ghost-gold" size="xl">
                Call +1 (631) 648-3404
              </Button>
            </div>
          </FadeInUp>
        </div>
      </section>
      
      <Footer />
    </main>
  );
};

export default Programs;
