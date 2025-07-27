import { useEffect, useRef } from 'react';
import { Button } from './ui/button';
import { ArrowRight, Brain, Zap } from 'lucide-react';
import { gsap } from 'gsap';
import heroImage from '../assets/hero-bg.jpg';

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!heroRef.current) return;

    const tl = gsap.timeline();
    
    // Set initial states
    gsap.set([titleRef.current, subtitleRef.current, ctaRef.current], {
      opacity: 0,
      y: 60,
    });

    // Animate entrance
    tl.to(titleRef.current, {
      opacity: 1,
      y: 0,
      duration: 1.2,
      ease: "power3.out",
    })
    .to(subtitleRef.current, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power3.out",
    }, "-=0.8")
    .to(ctaRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power3.out",
    }, "-=0.6");

    // Floating animation for icons
    gsap.to(".floating-icon", {
      y: -10,
      duration: 2,
      ease: "power2.inOut",
      yoyo: true,
      repeat: -1,
      stagger: 0.3
    });
  }, []);

  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-dots"
      style={{
        backgroundImage: `linear-gradient(rgba(34, 40, 49, 0.8), rgba(34, 40, 49, 0.8)), url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-background/80 via-background/60 to-background/80" />
      
      {/* Floating design elements */}
      <div className="absolute top-20 left-10 floating-icon">
        <Brain className="w-8 h-8 text-primary/30" />
      </div>
      <div className="absolute top-40 right-20 floating-icon">
        <Zap className="w-6 h-6 text-accent/40" />
      </div>
      <div className="absolute bottom-32 left-20 floating-icon">
        <div className="w-4 h-4 rounded-full bg-primary/20" />
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center max-w-6xl mx-auto px-4">
        <h1 
          ref={titleRef}
          className="text-hero mb-8"
        >
          Designs That Think.
          <br />
          <span className="text-transparent bg-gradient-to-r from-accent to-primary bg-clip-text">
            Interfaces That Convert.
          </span>
        </h1>
        
        <p 
          ref={subtitleRef}
          className="text-large text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed"
        >
          I'm <span className="text-primary font-semibold">Md Aqil</span> — I design digital experiences backed by user psychology, 
          crafted for real business impact. Every pixel serves a purpose.
        </p>

        <div 
          ref={ctaRef}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          <Button 
            variant="premium" 
            size="xl"
            className="group"
          >
            Explore My Work
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          
          <Button 
            variant="hero" 
            size="xl"
            className="group"
          >
            Let's Collaborate
            <Brain className="w-5 h-5 group-hover:scale-110 transition-transform" />
          </Button>
        </div>

        {/* Stats or social proof */}
        <div className="flex flex-wrap justify-center gap-8 mt-16 text-sm text-muted-foreground">
          <div className="text-center">
            <div className="text-2xl font-bold text-primary mb-1">50+</div>
            <div>Projects Delivered</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-primary mb-1">15+</div>
            <div>Countries Served</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-primary mb-1">98%</div>
            <div>Client Satisfaction</div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;