import { useEffect, useRef } from 'react';
import { Brain, Palette, TrendingUp, Code, Users, Zap, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { gsap } from 'gsap';

import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    icon: Brain,
    title: "Behavior-Based UX Strategy",
    description: "Deep user research combined with psychological principles to create strategies that convert.",
    features: ["User Journey Mapping", "Behavioral Analysis", "Conversion Optimization", "A/B Testing Strategy"],
    tier: "Growth",
    gradient: "from-blue-500 to-purple-600"
  },
  {
    icon: Palette,
    title: "Web/App UI Design",
    description: "Beautiful, functional interfaces that balance aesthetics with usability and psychology.",
    features: ["Mobile-First Design", "Design Systems", "Interactive Prototypes", "Accessibility Focus"],
    tier: "Scale",
    gradient: "from-purple-500 to-pink-600"
  },
  {
    icon: TrendingUp,
    title: "Conversion-Focused Redesigns",
    description: "Transform underperforming interfaces into conversion machines using proven psychology.",
    features: ["Conversion Audits", "Psychology Implementation", "Performance Metrics", "ROI Tracking"],
    tier: "Growth",
    gradient: "from-green-500 to-teal-600"
  },
  {
    icon: Code,
    title: "Development & Implementation",
    description: "Bring designs to life with clean, performant code in Webflow, Framer, or custom development.",
    features: ["Responsive Development", "Performance Optimization", "CMS Integration", "SEO Optimization"],
    tier: "Scale",
    gradient: "from-orange-500 to-red-600"
  }
];

const processSteps = [
  {
    number: "01",
    title: "Discovery & Research",
    description: "Understanding your users, business goals, and psychological triggers"
  },
  {
    number: "02", 
    title: "Strategy & Planning",
    description: "Creating a behavior-led roadmap for optimal user experiences"
  },
  {
    number: "03",
    title: "Design & Prototype",
    description: "Crafting beautiful interfaces grounded in psychological principles"
  },
  {
    number: "04",
    title: "Test & Optimize",
    description: "Validating designs with real users and iterating for maximum impact"
  },
  {
    number: "05",
    title: "Launch & Monitor",
    description: "Delivering polished solutions and tracking performance metrics"
  }
];

const ServicesSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    // Service cards animation
    gsap.fromTo(".service-card", 
      { opacity: 0, y: 60, rotationY: 15 },
      {
        opacity: 1,
        y: 0,
        rotationY: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.15,
        scrollTrigger: {
          trigger: ".services-grid",
          start: "top 70%",
          end: "bottom 20%",
        }
      }
    );

    // Process steps animation
    gsap.fromTo(".process-step", 
      { opacity: 0, x: -50 },
      {
        opacity: 1,
        x: 0,
        duration: 0.6,
        ease: "power2.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".process-timeline",
          start: "top 80%",
          end: "bottom 20%",
        }
      }
    );
  }, []);

  return (
    <section id="services" ref={sectionRef} className="py-24 px-6 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="absolute inset-0 bg-primary/20 blur-[120px] translate-y-1/2 rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-32 max-w-4xl mx-auto">
          <Badge variant="outline" className="mb-8 px-4 py-1 border-primary/20 bg-primary/5 text-primary">Offerings</Badge>
          <h2 className="text-5xl md:text-8xl font-black mb-8 leading-tight tracking-tighter">
            How I Help <br />
            <span className="text-transparent bg-gradient-to-r from-primary via-white to-primary bg-clip-text animate-gradient">
              Businesses Scale
            </span>
          </h2>
          <p className="text-xl text-muted-foreground font-medium leading-relaxed">
            I provide end-to-end design strategy that doesn't just look premium, it performs. 
            From deep behavioral research to high-fidelity implementation.
          </p>
        </div>

        {/* Services Grid */}
        <div className="services-grid grid grid-cols-1 md:grid-cols-2 gap-10 mb-32">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div 
                key={service.title}
                className="service-card group p-12 rounded-[48px] bg-white/[0.02] border border-white/5 hover:border-primary/20 transition-all duration-700 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-8">
                  <span className="px-4 py-1.5 text-[10px] font-black uppercase tracking-[0.2em] bg-primary/10 text-primary rounded-full border border-primary/20">
                    {service.tier}
                  </span>
                </div>

                <div className={`w-16 h-16 rounded-3xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-10 group-hover:scale-110 transition-transform duration-500 shadow-2xl`}>
                  <IconComponent className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-3xl font-black mb-6 tracking-tight group-hover:text-primary transition-colors">
                  {service.title}
                </h3>

                <p className="text-lg text-muted-foreground mb-10 leading-relaxed font-medium">
                  {service.description}
                </p>

                <ul className="space-y-4 mb-10">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm font-bold text-muted-foreground/80">
                      <div className="w-2 h-2 rounded-full bg-primary/40 mr-4 group-hover:bg-primary transition-colors" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <button 
                  className="flex items-center gap-3 text-xs font-black uppercase tracking-[0.3em] text-white/40 group-hover:text-primary transition-all"
                  onClick={() => window.open('https://wa.me/917210562014', '_blank')}
                >
                  Inquire Now
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                </button>
              </div>
            );
          })}
        </div>

        {/* Process Timeline */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center mb-12 font-satoshi">
            My Design Process
          </h3>
          
          <div className="process-timeline max-w-4xl mx-auto">
            {processSteps.map((step, index) => (
              <div 
                key={step.number}
                className="process-step flex items-start gap-6 mb-8 last:mb-0"
              >
                {/* Number */}
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center text-primary-foreground font-bold text-lg">
                    {step.number}
                  </div>
                  {index < processSteps.length - 1 && (
                    <div className="w-px h-16 bg-gradient-to-b from-primary to-accent mx-auto mt-4" />
                  )}
                </div>

                {/* Content */}
                <div className="flex-1 pt-2">
                  <h4 className="text-xl font-bold mb-2">{step.title}</h4>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing Hint */}
        <div className="text-center">
          <div className="glass rounded-3xl p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              Ready to transform your user experience?
            </h3>
            <p className="text-muted-foreground mb-6">
              Projects typically range from <span className="text-primary font-semibold">$5,000 - $50,000</span> depending on scope and complexity. 
              Let's discuss your specific needs and create a custom solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="premium" 
                size="lg" 
                className="group"
                onClick={() => window.open('https://wa.me/917210562014', '_blank')}
              >
                Get Custom Quote
                <Zap className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </Button>
              <Button variant="glass" size="lg" className="group">
                View Portfolio
                <Users className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;