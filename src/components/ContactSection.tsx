import { useEffect, useRef } from 'react';
import { Calendar, MessageCircle, ArrowRight, Mail, Linkedin, Twitter } from 'lucide-react';
import { Button } from './ui/button';
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
    <section ref={sectionRef} className="py-24 px-4 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      <div className="absolute top-20 right-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-48 h-48 bg-accent/10 rounded-full blur-3xl" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="contact-content">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 font-satoshi">
            Let's create experiences 
            <br />
            <span className="text-transparent bg-gradient-to-r from-primary to-accent bg-clip-text">
              people remember
            </span>
          </h2>
          
          <p className="text-large text-muted-foreground mb-12 max-w-2xl mx-auto">
            Ready to transform your digital presence? I'm currently accepting select projects 
            and would love to discuss how we can achieve your goals together.
          </p>

          {/* Main CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <Button variant="premium" size="xl" className="group">
              <Calendar className="w-5 h-5 mr-2" />
              Book Free Discovery Call
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button variant="glass" size="xl" className="group">
              <MessageCircle className="w-5 h-5 mr-2" />
              Send Quick Message
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="glass rounded-2xl p-8 mb-12">
            <div className="flex flex-col md:flex-row justify-center items-center gap-8 text-center">
              <div>
                <div className="text-2xl font-bold text-primary mb-1">48hr</div>
                <div className="text-sm text-muted-foreground">Response Time</div>
              </div>
              <div className="hidden md:block w-px h-12 bg-border" />
              <div>
                <div className="text-2xl font-bold text-primary mb-1">Available</div>
                <div className="text-sm text-muted-foreground">For Select Projects</div>
              </div>
              <div className="hidden md:block w-px h-12 bg-border" />
              <div>
                <div className="text-2xl font-bold text-primary mb-1">Global</div>
                <div className="text-sm text-muted-foreground">Remote Collaboration</div>
              </div>
            </div>
          </div>

          {/* Alternative Contact Methods */}
          <div className="mb-12">
            <p className="text-muted-foreground mb-6">
              Prefer a different way to connect? Reach out through:
            </p>
            
            <div className="flex justify-center gap-6">
              <a 
                href="mailto:mdaqil@example.com" 
                className="social-icon flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span className="hidden sm:inline">Email</span>
              </a>
              
              <a 
                href="https://linkedin.com/in/mdaqil" 
                className="social-icon flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="w-5 h-5" />
                <span className="hidden sm:inline">LinkedIn</span>
              </a>
              
              <a 
                href="https://twitter.com/mdaqil" 
                className="social-icon flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Twitter className="w-5 h-5" />
                <span className="hidden sm:inline">Twitter</span>
              </a>
            </div>
          </div>

          {/* Testimonial Quote */}
          <div className="max-w-2xl mx-auto">
            <blockquote className="text-lg italic text-muted-foreground mb-4">
              "Aqil doesn't just design interfaces—he crafts experiences that understand user psychology. 
              Our conversion rate improved by 180% within weeks of launch."
            </blockquote>
            <div className="flex items-center justify-center gap-3">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face" 
                alt="Client testimonial"
                className="w-10 h-10 rounded-full"
              />
              <div className="text-left">
                <div className="font-semibold text-sm">Sarah Chen</div>
                <div className="text-xs text-muted-foreground">CEO, TechFlow Analytics</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;