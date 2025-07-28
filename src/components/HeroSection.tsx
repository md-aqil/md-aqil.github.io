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
    
    // Set initial states with more dynamic positioning
    gsap.set([titleRef.current, subtitleRef.current, ctaRef.current], {
      opacity: 0,
      y: 80,
      scale: 0.9,
      rotationX: 15,
    });

    // Creative entrance animations
    tl.to(titleRef.current, {
      opacity: 1,
      y: 0,
      scale: 1,
      rotationX: 0,
      duration: 1.6,
      ease: "elastic.out(1, 0.6)",
    })
    .to(subtitleRef.current, {
      opacity: 1,
      y: 0,
      scale: 1,
      rotationX: 0,
      duration: 1.4,
      ease: "back.out(1.7)",
    }, "-=1.2")
    .to(ctaRef.current, {
      opacity: 1,
      y: 0,
      scale: 1,
      rotationX: 0,
      duration: 1.2,
      ease: "power4.out",
    }, "-=0.8");

    // Advanced floating animations with rotation
    gsap.to(".floating-icon", {
      y: -20,
      rotation: 360,
      duration: 4,
      ease: "sine.inOut",
      yoyo: true,
      repeat: -1,
      stagger: {
        amount: 1.5,
        from: "random"
      }
    });

    // Parallax background animation
    gsap.to(".bg-gradient", {
      backgroundPosition: "50% 100%",
      duration: 20,
      ease: "none",
      repeat: -1,
      yoyo: true
    });

    // Animated particles
    gsap.to(".particle", {
      y: -50,
      x: "random(-30, 30)",
      opacity: "random(0.3, 0.8)",
      duration: "random(3, 6)",
      ease: "sine.inOut",
      repeat: -1,
      yoyo: true,
      stagger: {
        amount: 2,
        from: "random"
      }
    });
  }, []);

  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Dynamic gradient background */}
      <div 
        className="absolute inset-0 bg-gradient bg-gradient-to-br from-background via-primary/5 to-accent/10"
        style={{
          background: `
            radial-gradient(circle at 20% 50%, hsl(var(--primary) / 0.15) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, hsl(var(--accent) / 0.15) 0%, transparent 50%),
            radial-gradient(circle at 40% 80%, hsl(var(--primary) / 0.1) 0%, transparent 50%),
            linear-gradient(135deg, hsl(var(--background)) 0%, hsl(var(--background) / 0.95) 100%)
          `
        }}
      />

      {/* Animated mesh gradient overlay */}
      <div 
        className="absolute inset-0 bg-gradient opacity-30"
        style={{
          background: `
            conic-gradient(from 0deg at 50% 50%, 
              hsl(var(--primary) / 0.1) 0deg,
              hsl(var(--accent) / 0.1) 60deg,
              hsl(var(--primary) / 0.1) 120deg,
              transparent 180deg,
              hsl(var(--accent) / 0.1) 240deg,
              hsl(var(--primary) / 0.1) 300deg,
              hsl(var(--primary) / 0.1) 360deg
            )
          `,
          animation: 'spin 30s linear infinite reverse'
        }}
      />

      {/* Floating particles */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 particle w-2 h-2 rounded-full bg-primary/20"></div>
        <div className="absolute top-3/4 right-1/4 particle w-1 h-1 rounded-full bg-accent/30"></div>
        <div className="absolute top-1/2 left-3/4 particle w-3 h-3 rounded-full bg-primary/10"></div>
        <div className="absolute top-1/3 right-1/3 particle w-1.5 h-1.5 rounded-full bg-accent/20"></div>
        <div className="absolute bottom-1/4 left-1/2 particle w-2 h-2 rounded-full bg-primary/15"></div>
        <div className="absolute top-1/6 right-1/6 particle w-1 h-1 rounded-full bg-accent/25"></div>
      </div>
      
      {/* Enhanced floating design elements */}
      <div className="absolute top-20 left-10 floating-icon">
        <div className="p-4 rounded-full bg-primary/10 backdrop-blur-sm border border-primary/20">
          <Brain className="w-8 h-8 text-primary/60" />
        </div>
      </div>
      <div className="absolute top-40 right-20 floating-icon">
        <div className="p-3 rounded-full bg-accent/10 backdrop-blur-sm border border-accent/20">
          <Zap className="w-6 h-6 text-accent/60" />
        </div>
      </div>
      <div className="absolute bottom-32 left-20 floating-icon">
        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 backdrop-blur-sm border border-primary/20 flex items-center justify-center">
          <div className="w-4 h-4 rounded-full bg-primary/40" />
        </div>
      </div>
      <div className="absolute top-32 right-32 floating-icon">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent/20 to-primary/20 backdrop-blur-sm border border-accent/20"></div>
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center max-w-6xl mx-auto px-4">
        <h1 
          ref={titleRef}
          className="text-hero mb-6 leading-tight"
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