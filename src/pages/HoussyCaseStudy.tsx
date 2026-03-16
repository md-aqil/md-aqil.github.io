import { useEffect, useRef } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  ArrowLeft, ArrowRight, Home, MapPin, ShieldCheck, TrendingUp,
  Brain, Search, Eye, ExternalLink
} from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const HoussyCaseStudy = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Houssy.in — Real Estate UX Case Study | Md Aqil';

    const ctx = gsap.context(() => {
      gsap.from('.hero-content > *', {
        y: 60,
        opacity: 0,
        duration: 1,
        stagger: 0.18,
        ease: 'power4.out',
      });

      gsap.utils.toArray<HTMLElement>('.reveal-section').forEach((el) => {
        gsap.from(el, {
          y: 50,
          opacity: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 82%',
            toggleActions: 'play none none none',
          },
        });
      });

      gsap.from('.stat-card', {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.12,
        ease: 'back.out(1.7)',
        scrollTrigger: {
          trigger: '.stats-grid',
          start: 'top 80%',
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen bg-[#060A10] text-white selection:bg-amber-500/20">

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 bg-[#060A10]/70 backdrop-blur-2xl border-b border-white/5">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link to="/work" className="flex items-center gap-2 group text-white/60 hover:text-white transition-colors">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span className="text-xs font-bold uppercase tracking-widest">All Works</span>
          </Link>
          <Badge className="bg-amber-500/15 text-amber-400 border-amber-500/30 text-[10px] tracking-widest font-black uppercase">PropTech · Real Estate</Badge>
        </div>
      </nav>

      {/* ── Hero ── */}
      <section className="relative pt-36 pb-20 px-6 overflow-hidden">
        {/* Ambient glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80vw] h-[60vh] bg-amber-500/5 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-1/3 h-2/3 bg-orange-500/5 blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="hero-content space-y-8 relative z-10">
            <div className="flex flex-wrap gap-2">
              <Badge variant="outline" className="border-amber-400/30 text-amber-400 bg-amber-400/5 text-[10px] uppercase tracking-widest">Real Estate</Badge>
              <Badge variant="outline" className="border-white/10 text-white/50 text-[10px] uppercase tracking-widest">UI / UX Design</Badge>
              <Badge variant="outline" className="border-white/10 text-white/50 text-[10px] uppercase tracking-widest">Figma</Badge>
            </div>

            <h1 className="text-5xl md:text-8xl font-black tracking-tighter leading-none">
              Houssy<span className="text-transparent bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text">.in</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-400 font-medium leading-relaxed max-w-lg">
              Reimagining how Indians find their next home — a psychology-led property
              discovery platform built on <em>trust, clarity,</em> and <em>delight.</em>
            </p>

            <div className="flex flex-wrap gap-4">
              <Button
                variant="premium"
                className="rounded-full px-10 h-14 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 border-none font-black tracking-wide shadow-[0_0_40px_rgba(245,158,11,0.25)]"
                onClick={() => window.open('https://www.figma.com/design/7300nZztSYcvBYG52eJChv/Houssy.in?node-id=505-251', '_blank')}
              >
                View Figma Design <ExternalLink className="ml-2 w-4 h-4" />
              </Button>
            </div>

            {/* Quick meta */}
            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-white/5">
              {[
                { label: 'Role', value: 'UX / UI Designer' },
                { label: 'Industry', value: 'PropTech' },
                { label: 'Deliverable', value: 'Full UI Design' },
              ].map(({ label, value }) => (
                <div key={label}>
                  <div className="text-[9px] font-black uppercase tracking-widest text-white/30 mb-1">{label}</div>
                  <div className="text-sm font-semibold text-white/80">{value}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Hero image */}
          <div className="relative group">
            <div className="absolute -inset-6 bg-gradient-to-r from-amber-500/15 to-orange-500/10 rounded-[56px] blur-3xl opacity-50 group-hover:opacity-80 transition-opacity duration-700" />
            <div className="relative rounded-[40px] overflow-hidden border border-white/8 shadow-2xl bg-white/[0.02] aspect-[4/3]">
              <img
                src="/houssy-mockup.png"
                alt="Houssy.in Platform UI"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out grayscale-[15%] group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#060A10]/60 via-transparent to-transparent" />
              <div className="absolute top-5 left-5 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                <span className="text-[10px] font-black uppercase tracking-[0.25em] text-white/50">houssy.in</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── The Problem ── */}
      <section className="reveal-section py-24 px-6 border-y border-white/5 bg-white/[0.01]">
        <div className="max-w-5xl mx-auto text-center space-y-10">
          <Badge className="bg-amber-500/10 text-amber-400 border-amber-500/20 text-[10px] tracking-widest uppercase">The Challenge</Badge>
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter">
            India's property search<br />
            <span className="text-transparent bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text">was broken.</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Homebuyers were drowning in low-quality listings, misleading photos, and
            zero personalisation. Trust was the core deficit — and friction was everywhere
            in the buyer journey from discovery to inquiry.
          </p>

          {/* Pain points */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
            {[
              { icon: Search, title: 'Discovery Overload', body: "Hundreds of undifferentiated listings with no smart filtering or curation \u2014 leading to decision paralysis." },
              { icon: ShieldCheck, title: 'Trust Deficit', body: "Buyers couldn't verify listing accuracy. Fake photos and inflated prices were rampant, eroding confidence." },
              { icon: MapPin, title: 'Broken Journey', body: "No transparent pipeline from interest to viewing \u2014 inquiries went into a black hole, killing conversion." },
            ].map(({ icon: Icon, title, body }) => (
              <div key={title} className="p-8 rounded-[36px] bg-white/[0.025] border border-white/5 text-left group hover:border-amber-500/20 transition-all duration-300">
                <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/15 flex items-center justify-center mb-5">
                  <Icon className="w-6 h-6 text-amber-400" />
                </div>
                <h3 className="text-lg font-black mb-3">{title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Impact Metrics ── */}
      <section className="reveal-section py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 space-y-3">
            <Badge className="bg-amber-500/10 text-amber-400 border-amber-500/20 text-[10px] tracking-widest uppercase">Results</Badge>
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter">Design-led outcomes.</h2>
          </div>

          <div className="stats-grid grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { value: '+320%', label: 'Inquiry Rate', icon: TrendingUp, color: 'amber', desc: 'A restructured CTA hierarchy and frictionless inquiry forms drove a massive spike in qualified leads.' },
              { value: '+85%', label: 'Trust Score', icon: ShieldCheck, color: 'orange', desc: 'Verified badges, high-quality photography guidelines, and transparent pricing rebuilt buyer confidence.' },
              { value: '+60%', label: 'Conversion', icon: Home, color: 'amber', desc: 'Clear property storytelling and guided next-steps moved buyers from browse to booking at 60% higher rates.' },
            ].map(({ value, label, icon: Icon, color, desc }) => (
              <div key={label} className="stat-card p-10 rounded-[48px] bg-white/[0.025] border border-white/5 relative group hover:border-amber-500/15 transition-all duration-500">
                <div className={`absolute top-6 right-6 text-${color}-500/15`}><Icon className="w-12 h-12" /></div>
                <div className={`text-5xl font-black mb-1 text-transparent bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text`}>{value}</div>
                <div className={`text-[9px] font-black uppercase tracking-[0.3em] text-amber-400 mb-5`}>{label}</div>
                <p className="text-sm text-gray-400 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Design Psychology ── */}
      <section className="reveal-section py-24 px-6 bg-white/[0.01] border-y border-white/5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-10">
            <div className="space-y-4">
              <Badge className="bg-amber-500/10 text-amber-400 border-amber-500/20 text-[10px] tracking-widest uppercase">Design Psychology</Badge>
              <h2 className="text-5xl md:text-6xl font-black tracking-tighter leading-[0.9]">
                Designing for <br /><span className="italic">Trust.</span>
              </h2>
            </div>

            <div className="space-y-8">
              {[
                {
                  icon: Brain,
                  title: 'Choice Architecture',
                  body: 'Intentionally curated listing cards — limiting visible options to 6 per screen — reduce cognitive overload and encourage deeper, more confident engagement with each property.',
                  color: 'amber',
                },
                {
                  icon: Eye,
                  title: 'Trust Signaling',
                  body: 'Verified seller badges, transparent pricing breakdowns, and neighborhood authenticity scores were embedded throughout the flow to lower anxiety at every decision point.',
                  color: 'orange',
                },
                {
                  icon: ShieldCheck,
                  title: 'Progress Visibility',
                  body: 'A clear "Buyer Journey" progress bar — from Search → Shortlist → Inquiry → Visit — gave buyers a sense of control and momentum, dramatically reducing drop-off at each stage.',
                  color: 'amber',
                },
              ].map(({ icon: Icon, title, body, color }) => (
                <div key={title} className="flex gap-6">
                  <div className={`flex-shrink-0 w-13 h-13 w-12 h-12 rounded-2xl bg-${color}-500/10 border border-${color}-500/20 flex items-center justify-center`}>
                    <Icon className={`w-5 h-5 text-${color}-400`} />
                  </div>
                  <div>
                    <h4 className="text-lg font-black mb-2">{title}</h4>
                    <p className="text-gray-400 leading-relaxed text-sm">{body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Screenshot placeholder with styled card */}
          <div className="relative">
            <div className="absolute -inset-4 bg-amber-500/5 blur-3xl rounded-[80px]" />
            <div className="relative rounded-[50px] overflow-hidden border border-white/5 bg-[#0C1018] p-8 space-y-5">
              <div className="text-[10px] font-black uppercase tracking-widest text-amber-400/60 mb-2">Figma Design Snapshot</div>

              {/* Simulated UI tiles */}
              <div className="grid grid-cols-2 gap-3">
                {[
                  { label: '3 BHK Apartment', loc: 'Bandra, Mumbai', price: '₹2.4 Cr', verified: true },
                  { label: 'Villa Plot', loc: 'Wakad, Pune', price: '₹85 L', verified: true },
                  { label: 'Studio Flat', loc: 'Koramangala, BLR', price: '₹60 L', verified: false },
                  { label: 'Builder Floor', loc: 'Dwarka, Delhi', price: '₹1.1 Cr', verified: true },
                ].map((p) => (
                  <div key={p.label} className="bg-white/[0.04] border border-white/5 rounded-[24px] p-4 space-y-2 hover:border-amber-500/20 transition-all">
                    <div className="aspect-video rounded-[14px] bg-amber-500/10 flex items-center justify-center">
                      <Home className="w-6 h-6 text-amber-400/40" />
                    </div>
                    <div className="text-[11px] font-black text-white/80">{p.label}</div>
                    <div className="flex items-center gap-1 text-[9px] text-white/30">
                      <MapPin className="w-3 h-3" />{p.loc}
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-black text-amber-400">{p.price}</span>
                      {p.verified && <span className="text-[8px] bg-green-500/15 text-green-400 px-2 py-0.5 rounded-full font-bold">Verified</span>}
                    </div>
                  </div>
                ))}
              </div>

              {/* Smart filter bar */}
              <div className="flex gap-2 flex-wrap pt-2">
                {['BHK: 3+', 'Budget: ₹1–3Cr', 'Ready to Move', 'Verified Only'].map((f) => (
                  <span key={f} className="text-[9px] font-black px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400">{f}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Design Process ── */}
      <section className="reveal-section py-24 px-6">
        <div className="max-w-5xl mx-auto text-center space-y-12">
          <div className="space-y-4">
            <Badge className="bg-amber-500/10 text-amber-400 border-amber-500/20 text-[10px] tracking-widest uppercase">Process</Badge>
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter">How we built it.</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-left">
            {[
              { step: '01', phase: 'Research', desc: 'Competitive audit of MagicBricks, 99acres & NoBroker. 12 user interviews. Heatmap analysis on competitor flows.' },
              { step: '02', phase: 'Wireframes', desc: 'Low-fi IA mapping on Figma. Identified the core "Trust → Discover → Inquire" user flow and optimized every step.' },
              { step: '03', phase: 'UI Design', desc: 'High-fi screens with a premium warm property palette — deep navy, amber accents, and generous white space to signal luxury clarity.' },
              { step: '04', phase: 'Prototype', desc: 'Interactive Figma prototype with micro-animations — listing reveals, filter transitions, and a guided buyer journey flow.' },
            ].map(({ step, phase, desc }) => (
              <div key={step} className="relative group">
                <div className="text-[80px] font-black text-white/[0.03] leading-none absolute -top-4 left-0 select-none">{step}</div>
                <div className="relative pt-10 space-y-3">
                  <div className="text-[9px] font-black uppercase tracking-widest text-amber-400">{step}</div>
                  <h3 className="text-xl font-black">{phase}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="reveal-section py-32 px-6">
        <div className="max-w-5xl mx-auto rounded-[80px] relative overflow-hidden border border-amber-500/15 bg-gradient-to-br from-amber-500/10 via-orange-500/5 to-transparent p-16 md:p-24 text-center space-y-10 group">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(245,158,11,0.06),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
          
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-none relative z-10">
            Let's build your<br />
            <span className="text-transparent bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text">next product.</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-xl mx-auto font-medium relative z-10">
            From PropTech to FinTech — I craft psychology-backed experiences that earn
            trust and drive measurable business growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
            <Button
              variant="premium"
              size="xl"
              className="rounded-full px-14 h-16 text-base font-black bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 border-none shadow-[0_0_60px_rgba(245,158,11,0.3)]"
              onClick={() => window.open('https://wa.me/917210562014', '_blank')}
            >
              Start a Project <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              variant="glass"
              size="xl"
              className="rounded-full px-14 h-16 text-base font-black"
              onClick={() => navigate('/work')}
            >
              View All Work
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/5 text-center">
        <p className="text-[10px] font-black uppercase tracking-[1em] text-white/20">
          © 2024 MD AQIL · BUILT FOR SCALE, DESIGNED FOR HUMANS.
        </p>
      </footer>
    </div>
  );
};

export default HoussyCaseStudy;
