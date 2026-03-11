import { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { 
  ArrowLeft, ExternalLink, Clock, Users, TrendingUp, 
  Smartphone, Shield, Zap, Search, ShoppingCart, 
  CreditCard, MapPin, Heart, CheckCircle2
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const DeerikaCaseStudy = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    const ctx = gsap.context(() => {
      // Hero entrance
      gsap.from('.hero-element', {
        opacity: 0,
        y: 60,
        duration: 1.2,
        stagger: 0.2,
        ease: 'power4.out'
      });

      // Section reveals
      gsap.utils.toArray('.section-reveal').forEach((section) => {
        gsap.from(section as HTMLElement, {
          opacity: 0,
          y: 60,
          duration: 1,
          scrollTrigger: {
            trigger: section as HTMLElement,
            start: 'top 85%',
          }
        });
      });


      // Stats reveal
      gsap.from('.stat-box', {
        scale: 0.8,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'back.out(1.7)',
        scrollTrigger: {
          trigger: '.stats-container',
          start: 'top 80%',
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen bg-background relative selection:bg-primary/30">
      {/* Background Glows */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-accent/5 blur-[120px] rounded-full" />
      </div>

      {/* Modern Top Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/20 backdrop-blur-2xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link to="/" className="group flex items-center gap-2 text-sm font-bold tracking-widest uppercase">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back
          </Link>
          <div className="text-xs font-black uppercase tracking-[0.3em] opacity-40">Case Study 01</div>
        </div>
      </nav>

      {/* Hero Header */}
      <header className="pt-24 pb-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <Badge variant="outline" className="mb-8 px-4 py-1 border-primary/20 bg-primary/5 text-primary hero-element">UX Design & Strategy</Badge>
          <h1 className="text-4xl md:text-7xl font-black mb-8 leading-[1.1] tracking-tighter hero-element">
            Deerika <br />
            <span className="text-transparent bg-gradient-to-r from-primary via-white to-primary bg-clip-text animate-gradient bg-[length:200%_auto]">Hypermarket</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed font-medium hero-element">
            Designing a hyper-local grocery ecosystem that bridges the gap between traditional shopping and digital convenience for over 500,000+ users.
          </p>
          
          <div className="flex flex-wrap justify-center gap-3 mb-16 hero-element">
            {['User Research', 'Information Architecture', 'Visual Identity', 'Usability Testing'].map(tag => (
              <span key={tag} className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold uppercase tracking-widest">
                {tag}
              </span>
            ))}
          </div>

          <div className="relative group hero-element">
            <div className="absolute inset-0 bg-primary/20 blur-[100px] opacity-20 group-hover:opacity-40 transition-opacity duration-1000" />
            <img 
              src="/deerika-mockup.png" 
              alt="Deerika App Interface" 
              className="relative w-full max-w-5xl mx-auto rounded-[32px] md:rounded-[60px] shadow-[0_40px_100px_-20px_rgba(0,0,0,0.8)] border border-white/10"
            />
          </div>
        </div>
      </header>

      {/* Quick Impact Grid */}
      <section className="py-20 px-6 stats-container">
        <div className="max-w-6xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { label: 'Growth', value: '+284%', icon: TrendingUp },
            { label: 'Retention', value: '87%', icon: Heart },
            { label: 'Satisfaction', value: '4.9/5', icon: CheckCircle2 },
            { label: 'Users', value: '500K+', icon: Users },
          ].map((stat, i) => (
            <div key={i} className="stat-box glass p-8 rounded-3xl text-center border border-white/5 hover:border-primary/20 transition-colors">
              <stat.icon className="w-6 h-6 mx-auto mb-4 text-primary opacity-60" />
              <div className="text-4xl font-black text-white mb-1">{stat.value}</div>
              <div className="text-xs font-bold uppercase tracking-widest text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Context & Challenge */}
      <section className="py-20 px-6 section-reveal">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-start">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-8">The Context</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Deerika Hypermarket is a key player in the Indian retail market, aiming to digitize the everyday grocery shopping experience. The challenge wasn't just building an app, but creating a psychological bridge for users accustomed to physical shopping.
              </p>
              <div className="space-y-6 mt-10">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center shrink-0 border border-white/10 text-primary">
                    <Search className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Information Overload</h4>
                    <p className="text-sm text-muted-foreground">Users found it difficult to navigate 10k+ products in traditional grid layouts.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center shrink-0 border border-white/10 text-primary">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Time Insensitivity</h4>
                    <p className="text-sm text-muted-foreground">Traditional systems lacked real-time tracking, leading to user anxiety during wait times.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white/5 rounded-[40px] p-10 border border-white/5 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 blur-3xl opacity-50" />
              <h3 className="text-2xl font-bold mb-6">Psychological Barriers</h3>
              <ul className="space-y-4">
                {[
                  "Trust deficit in online freshness",
                  "Preference for tactile experience",
                  "Habitual dependence on local vendors",
                  "Complexity of digital payments"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-muted-foreground group-hover:text-white transition-colors">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-12 p-6 rounded-2xl bg-primary/10 border border-primary/20 text-sm font-medium italic text-primary">
                "We had to design for trust before we could design for transactions."
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Psychology Applied */}
      <section className="py-32 px-6 bg-white/[0.02] border-y border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Behavioral UX Strategy</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Leveraging psychological triggers to drive adoption and retention.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                title: "Zeigarnik Effect", 
                desc: "Using progress bars and incomplete profiles to motivate users to complete their onboarding.",
                icon: Zap
              },
              { 
                title: "Peak-End Rule", 
                desc: "Micro-interactions at the moment of 'Order Success' to leave a lasting positive impression.",
                icon: Heart
              },
              { 
                title: "Loss Aversion", 
                desc: "Highlighted 'Limited Time' offers to encourage immediate decision making over browsing.",
                icon: Shield
              }
            ].map((item, i) => (
              <div key={i} className="p-10 rounded-[40px] bg-background border border-white/5 hover:border-primary/20 transition-all duration-500 group">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-8 border border-primary/20 group-hover:scale-110 transition-transform">
                  <item.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Design System */}
      <section className="py-32 px-6 section-reveal">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-20 items-center">
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-5xl font-bold mb-8">Design System</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-10">
                A robust foundation designed for scalability. We used a "Fresh & Trustworthy" palette with high-readability typography to ensure accessibility for all age groups.
              </p>
              <div className="grid grid-cols-4 gap-4">
                {['#22C55E', '#166534', '#FFFFFF', '#0F172A'].map(color => (
                  <div key={color} className="aspect-square rounded-2xl border border-white/10 flex flex-col items-center justify-center gap-2 bg-white/5">
                    <div className="w-8 h-8 rounded-full border border-white/20 shadow-xl" style={{ backgroundColor: color }} />
                    <span className="text-[10px] font-mono opacity-50 italic">{color}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-1/2 grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="aspect-[4/5] rounded-[32px] bg-gradient-to-br from-primary/20 to-transparent border border-white/10 flex items-end p-8">
                  <div className="text-3xl font-black italic opacity-20">Fresh.</div>
                </div>
                <div className="aspect-square rounded-[32px] bg-white/5 border border-white/5" />
              </div>
              <div className="space-y-4 pt-12">
                <div className="aspect-square rounded-[32px] bg-white/5 border border-white/5" />
                <div className="aspect-[4/5] rounded-[32px] bg-gradient-to-tr from-accent/20 to-transparent border border-white/10 flex items-start p-8">
                  <div className="text-3xl font-black italic opacity-20">Fast.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="py-40 px-6">
        <div className="max-w-4xl mx-auto rounded-[60px] bg-gradient-to-br from-primary/20 via-primary/5 to-transparent p-12 md:p-24 text-center border border-primary/20 relative overflow-hidden group">
          <div className="absolute inset-0 bg-dots opacity-10" />
          <h2 className="text-4xl md:text-6xl font-black mb-8 relative z-10">Let's create the next big thing.</h2>
          <p className="text-xl text-muted-foreground mb-12 relative z-10 font-medium">Have a vision for a project that needs a psychological edge?</p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center relative z-10">
            <Button 
              size="xl" 
              className="rounded-full px-12 font-bold tracking-tight"
              onClick={() => window.open('https://wa.me/917210562014', '_blank')}
            >
              Start Project
            </Button>
            <Button variant="outline" size="xl" className="rounded-full px-12 font-bold tracking-tight backdrop-blur-xl bg-white/5 border-white/10 hover:bg-white/10" asChild>
              <Link to="/">View Others</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Mobile App Style Bottom Nav (Only on small screens) */}
      <div className="md:hidden fixed bottom-8 left-1/2 -translate-x-1/2 w-[90%] z-50">
        <div className="bg-black/60 backdrop-blur-3xl border border-white/10 rounded-full py-4 px-8 flex justify-between items-center shadow-2xl">
          <Link to="/" className="text-primary"><ArrowLeft className="w-6 h-6" /></Link>
          <div className="w-px h-6 bg-white/10" />
          <a href="https://www.deerika.in/" target="_blank" className="flex items-center gap-2 font-bold text-sm tracking-tight text-white">
            Live App <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default DeerikaCaseStudy;