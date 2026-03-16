import { useEffect, useRef } from 'react';
import { Calendar, MessageCircle, ArrowRight, Mail, Linkedin, Twitter } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { gsap } from 'gsap';

import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ContactSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    gsap.fromTo(".contact-content", 
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          end: "bottom 20%",
        }
      }
    );

    // Floating animation for social icons
    gsap.to(".social-icon", {
      y: -5,
      duration: 2,
      ease: "power2.inOut",
      yoyo: true,
      repeat: -1,
      stagger: 0.2
    });
  }, []);

  return (
    <section id="contact" ref={sectionRef} className="py-40 px-6 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />
      <div className="absolute top-20 right-[-10%] w-[50%] h-[50%] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-accent/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <div className="contact-content">
          <Badge variant="outline" className="mb-8 px-4 py-1 border-primary/20 bg-primary/5 text-primary">Availability</Badge>
          <h2 className="text-5xl md:text-8xl font-black mb-8 leading-tight tracking-tighter">
            Let's Build <br />
            <span className="text-transparent bg-gradient-to-r from-primary via-white to-primary bg-clip-text animate-gradient">
              The Extraordinary
            </span>
          </h2>
          
          <p className="text-xl text-muted-foreground mb-16 max-w-2xl mx-auto font-medium leading-relaxed">
            I'm currently accepting select projects for Q3/Q4 2024. 
            If you have a vision that needs a psychological edge, let's talk.
          </p>

          {/* Main CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-24">
            <Button 
              variant="premium" 
              size="xl" 
              className="rounded-full px-12 h-16 text-lg font-bold tracking-tight group shadow-[0_20px_50px_rgba(34,197,94,0.3)]"
              onClick={() => window.open('https://wa.me/917210562014', '_blank')}
            >
              <Calendar className="w-6 h-6 mr-3" />
              Book Discovery Call
              <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              variant="glass" 
              size="xl" 
              className="rounded-full px-12 h-16 text-lg font-bold tracking-tight backdrop-blur-2xl border-white/10 hover:bg-white/5 group"
              onClick={() => window.open('https://wa.me/917210562014', '_blank')}
            >
              <MessageCircle className="w-6 h-6 mr-3 text-primary" />
              Send Message
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-24">
            {[
              { label: 'Response', value: '48hr', detail: 'Guaranteed' },
              { label: 'Status', value: 'Open', detail: 'For Projects' },
              { label: 'Base', value: 'Global', detail: 'Remote-First' },
              { label: 'Focus', value: 'Scale', detail: 'ROI-Driven' },
            ].map((item, i) => (
              <div key={i} className="p-8 rounded-[32px] bg-white/[0.02] border border-white/5 hover:border-primary/20 transition-all duration-500 group">
                <div className="text-xs font-black uppercase tracking-[0.2em] text-muted-foreground mb-2 group-hover:text-primary transition-colors">{item.label}</div>
                <div className="text-2xl font-black mb-1">{item.value}</div>
                <div className="text-[10px] font-bold text-muted-foreground/60">{item.detail}</div>
              </div>
            ))}
          </div>

          {/* Testimonial Quote */}
          <div className="max-w-3xl mx-auto relative p-12 md:p-20 rounded-[60px] bg-gradient-to-br from-primary/10 via-background to-transparent border border-primary/20 group overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-primary/10 blur-[80px] opacity-40" />
            <blockquote className="text-2xl md:text-3xl font-bold tracking-tight text-white mb-10 leading-tight">
              "MD Aqil doesn't just design interfaces—he crafts experiences that understand user psychology. 
              Our conversion rate improved by 180% within weeks of launch."
            </blockquote>
            <div className="flex flex-col items-center justify-center text-center">
              <div className="font-black text-lg">Sarah Chen</div>
              <div className="text-xs font-bold uppercase tracking-widest text-primary">CEO, TechFlow Analytics</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;