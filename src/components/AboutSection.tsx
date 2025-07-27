import { useEffect, useRef } from 'react';
import { Brain, Eye, Target, Users, Lightbulb, TrendingUp } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const psychologyPrinciples = [
  {
    icon: Brain,
    title: "Fitts' Law",
    description: "Larger targets are easier to hit. I design with precise sizing and spacing for optimal user interactions.",
    color: "from-blue-500 to-purple-600"
  },
  {
    icon: Eye,
    title: "Hick's Law", 
    description: "More choices increase decision time. I simplify interfaces to reduce cognitive load and improve conversions.",
    color: "from-purple-500 to-pink-600"
  },
  {
    icon: Target,
    title: "Decision Fatigue",
    description: "Too many decisions exhaust users. I strategically guide users through streamlined decision paths.",
    color: "from-pink-500 to-red-600"
  },
  {
    icon: Users,
    title: "Social Proof",
    description: "People follow others' actions. I leverage testimonials, reviews, and usage indicators effectively.",
    color: "from-green-500 to-teal-600"
  },
  {
    icon: Lightbulb,
    title: "Cognitive Load",
    description: "Mental effort affects user experience. I design intuitive interfaces that feel effortless to use.",
    color: "from-yellow-500 to-orange-600"
  },
  {
    icon: TrendingUp,
    title: "Loss Aversion",
    description: "Fear of loss motivates action. I craft compelling CTAs that highlight what users might miss.",
    color: "from-indigo-500 to-blue-600"
  }
];

const AboutSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    // Title animation
    gsap.fromTo(titleRef.current, 
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 80%",
          end: "bottom 20%",
        }
      }
    );

    // Cards stagger animation
    gsap.fromTo(".principle-card", 
      { opacity: 0, y: 50, scale: 0.9 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.15,
        scrollTrigger: {
          trigger: cardsRef.current,
          start: "top 70%",
          end: "bottom 20%",
        }
      }
    );
  }, []);

  return (
    <section ref={sectionRef} className="py-24 px-4 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 
            ref={titleRef}
            className="text-4xl md:text-6xl font-bold mb-6 font-satoshi"
          >
            Why <span className="text-transparent bg-gradient-to-r from-primary to-accent bg-clip-text">
              Behavior-Led Design
            </span> Works
          </h2>
          <p className="text-body text-muted-foreground max-w-3xl mx-auto">
            Great design isn't just about aesthetics—it's about understanding human psychology. 
            I combine visual excellence with behavioral science to create experiences that not only look beautiful 
            but also drive real business results.
          </p>
        </div>

        {/* Process Steps */}
        <div className="mb-20">
          <div className="flex flex-wrap justify-center gap-8 mb-12">
            {['Research', 'Wireframe', 'Design', 'Test', 'Deliver'].map((step, index) => (
              <div key={step} className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center text-primary-foreground font-bold">
                  {index + 1}
                </div>
                <div className="ml-3 text-lg font-medium">{step}</div>
                {index < 4 && (
                  <div className="hidden md:block w-8 h-px bg-gradient-to-r from-primary to-accent ml-6" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Psychology Principles Grid */}
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {psychologyPrinciples.map((principle, index) => {
            const IconComponent = principle.icon;
            return (
              <div 
                key={principle.title}
                className="principle-card card-premium group cursor-pointer"
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${principle.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors">
                  {principle.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {principle.description}
                </p>

                {/* Hover effect overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <div className="glass rounded-3xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              Ready to leverage psychology in your design?
            </h3>
            <p className="text-muted-foreground mb-6">
              Let's create experiences that understand your users better than they understand themselves.
            </p>
            <button className="btn-glow px-8 py-3 rounded-xl font-semibold text-primary-foreground">
              Start Your Project
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;