import { useEffect, useRef } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ArrowRight, Camera, Film, Users, Brain, Heart, Star } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const VelvetReelCaseStudy = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
    
    const ctx = gsap.context(() => {
      // Hero entrance
      gsap.from(".hero-content > *", {
        y: 60,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power4.out"
      });

      // Stats reveal
      gsap.from(".stat-card", {
        scale: 0.8,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: ".stats-grid",
          start: "top 80%"
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen bg-[#050505] text-white selection:bg-red-500/30">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 p-6 bg-black/50 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2 group">
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span className="font-bold tracking-tighter uppercase text-xs">Portfolio</span>
          </Link>
          <Badge className="bg-red-500/20 text-red-500 border-red-500/30">ENTERTAINMENT TECH</Badge>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-red-500/10 to-transparent blur-[120px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="hero-content space-y-8 relative z-10">
            <div className="flex gap-3">
              <Badge variant="outline" className="border-red-500/30 text-red-500 bg-red-500/5">Premium Marketplace</Badge>
              <Badge variant="outline" className="border-white/10 text-white">Talent Acquisition</Badge>
            </div>
            <h1 className="text-5xl md:text-8xl font-black leading-none tracking-tighter">
              The <br />
              <span className="text-transparent bg-gradient-to-r from-red-500 to-rose-400 bg-clip-text">
                Velvet Reel
              </span>
            </h1>
            <p className="text-xl text-gray-400 font-medium leading-relaxed max-w-xl">
              An elite ecosystem connecting creative visionaries with world-class talent. 
              Built with a "Spotlight-First" mentality to eliminate the friction in high-stakes hiring.
            </p>
            <div className="flex gap-6">
              <Button onClick={() => window.open('https://www.thevelvetreel.com/', '_blank')} variant="premium" className="rounded-full px-10 h-14 bg-red-600 hover:bg-red-500 border-none">
                Experience the Platform <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </div>
          <div className="relative group">
            <div className="absolute -inset-10 bg-red-500/20 blur-[100px] opacity-30 group-hover:opacity-60 transition-opacity" />
            <div className="relative rounded-[40px] overflow-hidden border border-white/10 shadow-3xl bg-neutral-900 aspect-[4/5] lg:aspect-square">
                <img 
                  src="/velvetreel-mockup.png" 
                  alt="Velvet Reel Interface"
                  className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-1000"
                />
            </div>
          </div>
        </div>
      </section>

      {/* Core Impact Grid */}
      <section className="py-24 px-6 border-y border-white/5 bg-black/40">
        <div className="max-w-6xl mx-auto">
          <div className="stats-grid grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="stat-card p-10 rounded-[48px] bg-white/[0.02] border border-white/5 relative group cursor-default">
                <div className="absolute top-0 right-0 p-8 text-red-500/20"><Users className="w-12 h-12" /></div>
                <div className="text-5xl font-black mb-2 text-white">5,000+</div>
                <div className="text-xs font-black uppercase tracking-[0.3em] text-red-500">Global Talents</div>
                <p className="mt-6 text-sm text-gray-400 leading-relaxed">Built a verified network of actors, models, and directors across 15+ countries.</p>
            </div>
            <div className="stat-card p-10 rounded-[48px] bg-white/[0.02] border border-white/5 relative group cursor-default">
                <div className="absolute top-0 right-0 p-8 text-rose-500/20"><Star className="w-12 h-12" /></div>
                <div className="text-5xl font-black mb-2 text-white">0%</div>
                <div className="text-xs font-black uppercase tracking-[0.3em] text-rose-500">Hiring Friction</div>
                <p className="mt-6 text-sm text-gray-400 leading-relaxed">Automated audition workflows reduced the hiring cycle from weeks to mere days.</p>
            </div>
            <div className="stat-card p-10 rounded-[48px] bg-white/[0.02] border border-white/5 relative group cursor-default">
                <div className="absolute top-0 right-0 p-8 text-red-500/20"><Film className="w-12 h-12" /></div>
                <div className="text-5xl font-black mb-2 text-white">+142%</div>
                <div className="text-xs font-black uppercase tracking-[0.3em] text-red-500">Network Growth</div>
                <p className="mt-6 text-sm text-gray-400 leading-relaxed">A psychology-led onboarding flow drove record-high talent registration rates.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Psychology of the Spotlight */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-12">
            <div className="space-y-4">
              <Badge className="bg-red-500/10 text-red-500 border-red-500/20">Design Psychology</Badge>
              <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-none">
                Designing for <br />
                <span className="italic">Exclusivity.</span>
              </h2>
            </div>
            
            <div className="grid gap-8">
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-red-500/10 border border-red-500/20 flex items-center justify-center">
                  <Brain className="w-7 h-7 text-red-500" />
                </div>
                <div>
                  <h4 className="text-2xl font-bold mb-2">Self-Determination Theory</h4>
                  <p className="text-gray-400 leading-relaxed italic">Autonomy over one's digital presence. We gave talents high-agency tools to craft their "Reels", making them feel like stars before they even book a job.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center">
                  <Heart className="w-7 h-7 text-rose-500" />
                </div>
                <div>
                  <h4 className="text-2xl font-bold mb-2">Peak-End Experience</h4>
                  <p className="text-gray-400 leading-relaxed">The hiring flow was designed to peak during the 'Talent Reveal' moment, using cinematic transitions to heighten the emotional reward for recruiters.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative h-[600px] rounded-[60px] overflow-hidden border border-white/5 bg-gradient-to-br from-red-500/5 to-transparent flex items-center justify-center p-12">
             <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-red-500/20 to-transparent blur-3xl opacity-30" />
             <div className="relative w-full aspect-[9/16] max-w-[300px] rounded-[48px] border-8 border-neutral-800 bg-black shadow-3xl overflow-hidden">
                <img 
                  src="/velvetreel-mobile.png" 
                  alt="Mobile Experience" 
                  className="w-full h-full object-cover"
                />
             </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-32 px-6">
        <div className="max-w-5xl mx-auto rounded-[80px] bg-gradient-to-br from-red-600/20 via-red-950/20 to-black border border-red-500/20 p-16 md:p-32 text-center space-y-12 relative overflow-hidden group">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-red-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
          
          <h2 className="text-5xl md:text-8xl font-black tracking-tighter leading-none relative z-10">Want to build <br /> something iconic?</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto font-medium relative z-10">
            Let's merge high-end aesthetics with psychological precision to create your next industry-leading product.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center relative z-10">
            <Button 
                variant="premium" 
                size="xl" 
                className="rounded-full px-12 h-20 text-xl font-bold bg-white text-black hover:bg-white/90 border-none"
                onClick={() => window.open('https://wa.me/917210562014', '_blank')}
            >
              Get Integrated <ArrowRight className="ml-3 w-6 h-6" />
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 border-t border-white/5 text-center">
        <div className="text-[10px] font-black uppercase tracking-[1em] text-white/20 mb-4">The Velvet Reel</div>
        <p className="text-gray-600 text-xs font-medium">© 2024 MD AQIL. ALL SHOTS TAKEN. ALL VISIONS REALIZED.</p>
      </footer>
    </div>
  );
};

export default VelvetReelCaseStudy;
