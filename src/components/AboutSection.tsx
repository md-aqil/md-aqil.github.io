import { useEffect, useRef } from 'react';
import { Brain, Eye, Target, Users, Lightbulb, TrendingUp } from 'lucide-react';
import { Badge } from './ui/badge';
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
    <section id="about" ref={sectionRef} className="py-24 px-4 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-32 max-w-4xl mx-auto">
          <Badge variant="outline" className="mb-8 px-4 py-1 border-primary/20 bg-primary/5 text-primary">Philosophy</Badge>
          <h2 
            ref={titleRef}
            className="text-5xl md:text-8xl font-black mb-8 leading-tight tracking-tighter"
          >
            The Psychology <br />
            <span className="text-transparent bg-gradient-to-r from-primary via-white to-primary bg-clip-text animate-gradient">
              Behind the Design
            </span>
          </h2>
          <p className="text-xl text-muted-foreground font-medium leading-relaxed">
            I don't just push pixels; I engineer behavior. By leveraging core psychological principles, 
            I create digital products that feel intuitive, reduce friction, and naturally lead users 
            toward desired outcomes.
          </p>
        </div>

        {/* Psychology Principles Grid */}
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {psychologyPrinciples.map((principle, index) => {
            const IconComponent = principle.icon;
            return (
              <div 
                key={principle.title}
                className="principle-card p-10 rounded-[40px] bg-white/[0.02] border border-white/5 hover:border-primary/20 transition-all duration-500 group relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${principle.color} flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 shadow-xl`}>
                  <IconComponent className="w-7 h-7 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold mb-4 tracking-tight group-hover:text-primary transition-colors">
                  {principle.title}
                </h3>
                
                <p className="text-sm text-muted-foreground leading-relaxed font-medium">
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
            <button 
              className="btn-glow px-8 py-3 rounded-xl font-semibold text-primary-foreground"
              onClick={() => window.open('https://wa.me/917210562014', '_blank')}
            >
              Start Your Project
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;