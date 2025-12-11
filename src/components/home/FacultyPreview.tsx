import { Button } from "@/components/ui/button";
import { FadeInUp, SlideInLeft, SlideInRight, ImageHover } from "@/components/animations/AnimatedSection";
import { Link } from "react-router-dom";
import faculty1 from "@/assets/faculty-1.jpg";
import faculty2 from "@/assets/faculty-2.jpg";

const featuredFaculty = [
  {
    name: "Jacqueline Rivera",
    title: "Founder & Artistic Director",
    image: faculty1,
    specialties: ["Ballet", "Contemporary", "Choreography"],
  },
  {
    name: "Michael Torres",
    title: "Jazz & Hip Hop Director",
    image: faculty2,
    specialties: ["Jazz", "Hip Hop", "Commercial"],
  },
];

export const FacultyPreview = () => {
  return (
    <section className="py-32 bg-background relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-charcoal" />
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Header */}
        <div className="grid lg:grid-cols-12 gap-8 mb-16">
          <SlideInLeft className="lg:col-span-6">
            <span className="font-body text-xs uppercase tracking-[0.4em] text-primary mb-4 block">
              Meet Our Team
            </span>
            <h2 className="text-display-lg text-foreground">
              World-Class <span className="italic text-primary">Faculty</span>
            </h2>
          </SlideInLeft>
          
          <SlideInRight className="lg:col-span-4 lg:col-start-9 flex items-end">
            <Link to="/faculty">
              <Button variant="ghost-gold" size="xl">
                View All Faculty
              </Button>
            </Link>
          </SlideInRight>
        </div>
        
        {/* Faculty Gallery */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {featuredFaculty.map((member, index) => (
            <FadeInUp key={member.name} delay={index * 0.2}>
              <div className="group relative">
                <ImageHover className="aspect-[3/4] overflow-hidden">
                  <img 
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                  
                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <div className="gold-line mb-4 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                    <h3 className="font-display text-3xl text-foreground mb-1">
                      {member.name}
                    </h3>
                    <p className="font-body text-sm uppercase tracking-widest text-primary mb-4">
                      {member.title}
                    </p>
                    <div className="flex gap-2 flex-wrap">
                      {member.specialties.map((specialty) => (
                        <span 
                          key={specialty}
                          className="font-body text-xs px-3 py-1 border border-foreground/20 text-foreground/60"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>
                </ImageHover>
              </div>
            </FadeInUp>
          ))}
        </div>
      </div>
    </section>
  );
};
