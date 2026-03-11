import { useEffect, useRef } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ArrowRight, CheckCircle2, Layout, Zap, Brain, TrendingUp } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ChangeCaptainCaseStudy = () => {
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

      // Section reveals
      gsap.utils.toArray<HTMLElement>(".reveal-section").forEach((section) => {
        gsap.from(section, {
          y: 40,
          opacity: 0,
          duration: 1,
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            toggleActions: "play none none none"
          }
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen bg-[#0B0F19] text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 p-6 glass border-b border-white/5">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2 group">
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span className="font-bold tracking-tighter">BACK TO PORTFOLIO</span>
          </Link>
          <Badge className="bg-primary/20 text-primary border-primary/30">LATEST PROJECT</Badge>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="hero-content space-y-8">
            <div className="flex gap-3">
              <Badge variant="outline" className="border-cyan-400/30 text-cyan-400">FinTech</Badge>
              <Badge variant="outline" className="border-teal-400/30 text-teal-400">Wordpress Automation</Badge>
            </div>
            <h1 className="text-4xl md:text-7xl font-black leading-tight tracking-tighter">
              Change <br />
              <span className="text-transparent bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text">
                Captain
              </span>
            </h1>
            <p className="text-xl text-gray-400 font-medium leading-relaxed max-w-xl">
              Where tech meets finance. A custom-built WordPress solution automating 
              R&D tax credits and engineering labor capitalization for modern tech companies.
            </p>
            <div className="flex gap-6">
              <Button onClick={() => window.open('https://changecaptain.co/', '_blank')} variant="premium" className="rounded-full px-8 h-12">
                Live Site <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </div>
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 to-teal-500/20 rounded-[40px] blur-2xl group-hover:opacity-100 transition-opacity opacity-50" />
            <div className="relative rounded-[40px] overflow-hidden border border-white/10 aspect-video bg-[#131B2B]">
                <img 
                  src="/changecaptain-mockup.png" 
                  alt="Change Captain Hero"
                  className="w-full h-full object-cover"
                />
            </div>
          </div>
        </div>
      </section>

      {/* The Context */}
      <section className="reveal-section py-24 px-6 border-y border-white/5 bg-[#0B0F19]">
        <div className="max-w-4xl mx-auto space-y-12 text-center">
          <div className="inline-flex p-4 rounded-3xl bg-white/5 border border-white/10">
            <Zap className="w-8 h-8 text-cyan-400" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">The Big Problem</h2>
          <p className="text-xl text-gray-400 leading-relaxed">
            Finance teams spend hundreds of hours manually tagging engineering tasks for 
            R&D tax credits. Change Captain solves this by using **code as the source of truth**, 
            automatically capturing technical activity from the origin.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/5 text-left">
              <div className="text-3xl font-bold text-cyan-400 mb-2">50%</div>
              <div className="text-sm font-medium text-gray-400 uppercase tracking-widest">Dev Cost Savings</div>
            </div>
            <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/5 text-left">
              <div className="text-3xl font-bold text-teal-400 mb-2">100%</div>
              <div className="text-sm font-medium text-gray-400 uppercase tracking-widest">Audit Readiness</div>
            </div>
            <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/5 text-left">
              <div className="text-3xl font-bold text-blue-400 mb-2">0</div>
              <div className="text-sm font-medium text-gray-400 uppercase tracking-widest">Manual Tagging</div>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Design */}
      <section className="reveal-section py-24 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-10">
            <Badge className="bg-cyan-500/10 text-cyan-400 border-cyan-500/20">Behavioral UX</Badge>
            <h2 className="text-5xl font-black tracking-tighter leading-tight">
              Designing for <br />
              <span className="italic">Data Integrity.</span>
            </h2>
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
                  <Brain className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Cognitive Offloading</h4>
                  <p className="text-gray-400">By automating complex calculations and tax rules, we allow finance professionals to focus on strategy rather than spreadsheets.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-teal-400" />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Decision Facilitation</h4>
                  <p className="text-gray-400">The interactive ROI calculator reduces the psychological barrier to entry by showing immediate, tangible value.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
             <div className="rounded-[40px] overflow-hidden border border-white/5 shadow-2xl bg-[#131B2B] aspect-square">
                 <img src="/changecaptain-feature-1.png" alt="Feature 1" className="w-full h-full object-cover" />
             </div>
             <div className="rounded-[40px] overflow-hidden border border-white/5 shadow-2xl bg-[#131B2B] aspect-square mt-8">
                 <img src="/changecaptain-feature-2.png" alt="Feature 2" className="w-full h-full object-cover" />
             </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="reveal-section py-32 px-6">
        <div className="max-w-4xl mx-auto rounded-[60px] bg-gradient-to-br from-cyan-500/20 to-teal-500/5 border border-cyan-500/20 p-16 text-center space-y-8">
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter">Ready to scale?</h2>
          <p className="text-xl text-gray-400 max-w-xl mx-auto font-medium">
            Discover how I can help your product blend cutting-edge psychology with engineering precision.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="premium" 
              size="xl" 
              className="rounded-full px-12 h-16 text-lg font-bold" 
              onClick={() => window.open('https://wa.me/917210562014', '_blank')}
            >
              Let's Talk
            </Button>
            <Button variant="glass" size="xl" className="rounded-full px-12 h-16 text-lg font-bold" onClick={() => navigate('/')}>
              Full Portfolio
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/5 text-center text-gray-500 text-sm font-medium">
        © 2024 MD AQIL. BUILT FOR SCALE, DESIGNED FOR HUMANS.
      </footer>
    </div>
  );
};

export default ChangeCaptainCaseStudy;
