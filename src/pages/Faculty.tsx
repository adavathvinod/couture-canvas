import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FadeInUp, SlideInLeft, StaggerContainer, StaggerItem, ImageHover } from "@/components/animations/AnimatedSection";
import faculty1 from "@/assets/faculty-1.jpg";
import faculty2 from "@/assets/faculty-2.jpg";

const facultyMembers = [
  {
    name: "Jacqueline Rivera",
    title: "Founder & Artistic Director",
    image: faculty1,
    bio: "With over 20 years of professional dance experience, Jacqueline founded Dance Couture with a vision to create a world-class training environment on Long Island. Her background includes performances with prestigious companies and choreography for national competitions.",
    specialties: ["Ballet", "Contemporary", "Choreography"],
  },
  {
    name: "Michael Torres",
    title: "Jazz & Hip Hop Director",
    image: faculty2,
    bio: "Michael brings Broadway and commercial dance experience to our students. His dynamic teaching style has produced award-winning dancers who have gone on to professional careers in entertainment.",
    specialties: ["Jazz", "Hip Hop", "Commercial"],
  },
  {
    name: "Sarah Chen",
    title: "Ballet Mistress",
    image: faculty1,
    bio: "Trained at the School of American Ballet, Sarah brings classical precision and artistry to our ballet program. Her students consistently excel in regional and national competitions.",
    specialties: ["Classical Ballet", "Pointe", "Variations"],
  },
  {
    name: "David Martinez",
    title: "Tap & Musical Theater",
    image: faculty2,
    bio: "A veteran of Broadway productions, David's infectious energy and technical expertise make him a favorite among students. His tap program emphasizes both rhythm and showmanship.",
    specialties: ["Tap", "Musical Theater", "Performance"],
  },
];

const Faculty = () => {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      {/* Hero */}
      <section className="pt-40 pb-20 bg-background relative">
        <div className="container mx-auto px-6 lg:px-12">
          <SlideInLeft>
            <span className="font-body text-xs uppercase tracking-[0.4em] text-primary mb-4 block">
              Our Team
            </span>
            <h1 className="text-display-xl text-foreground mb-6">
              Meet the <span className="italic text-primary">Faculty</span>
            </h1>
            <p className="text-editorial max-w-2xl">
              Our world-class instructors bring decades of professional experience, 
              nurturing the next generation of dancers with passion and expertise.
            </p>
          </SlideInLeft>
        </div>
      </section>
      
      {/* Faculty Grid */}
      <section className="py-20 bg-charcoal">
        <div className="container mx-auto px-6 lg:px-12">
          <StaggerContainer className="grid md:grid-cols-2 gap-8 lg:gap-12" staggerDelay={0.15}>
            {facultyMembers.map((member) => (
              <StaggerItem key={member.name}>
                <div className="group">
                  <ImageHover className="aspect-[3/4] overflow-hidden mb-8">
                    <img 
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
                  </ImageHover>
                  
                  <div className="gold-line mb-4" />
                  
                  <h2 className="font-display text-3xl text-foreground mb-1">
                    {member.name}
                  </h2>
                  <p className="font-body text-sm uppercase tracking-widest text-primary mb-4">
                    {member.title}
                  </p>
                  <p className="font-body text-sm text-foreground/60 leading-relaxed mb-4">
                    {member.bio}
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
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>
      
      <Footer />
    </main>
  );
};

export default Faculty;
