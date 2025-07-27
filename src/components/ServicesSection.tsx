import { useEffect, useRef } from 'react';
import { Brain, Palette, TrendingUp, Code, Users, Zap, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
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
    <section id="services" ref={sectionRef} className="py-24 px-4 relative">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary opacity-10" 
             style={{ backgroundSize: '100px 100px', backgroundImage: 'radial-gradient(circle, currentColor 1px, transparent 1px)' }} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 font-satoshi">
            How I Can Help You <span className="text-transparent bg-gradient-to-r from-primary to-accent bg-clip-text">
              Win
            </span>
          </h2>
          <p className="text-body text-muted-foreground max-w-3xl mx-auto">
            From strategy to implementation, I provide end-to-end design solutions 
            that combine beautiful aesthetics with behavioral psychology for maximum impact.
          </p>
        </div>

        {/* Services Grid */}
        <div className="services-grid grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div 
                key={service.title}
                className="service-card card-premium group relative overflow-hidden"
              >
                {/* Tier badge */}
                <div className="absolute top-6 right-6">
                  <span className="px-3 py-1 text-xs font-semibold bg-primary/20 text-primary rounded-full border border-primary/30">
                    {service.tier}
                  </span>
                </div>

                {/* Icon */}
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${service.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Hover arrow */}
                <div className="flex items-center text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-sm font-medium mr-2">Learn More</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>

                {/* Hover glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
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
              <Button variant="premium" size="lg" className="group">
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