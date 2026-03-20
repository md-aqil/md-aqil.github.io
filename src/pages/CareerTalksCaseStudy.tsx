import { useEffect, useRef } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  ArrowLeft, ArrowRight, ExternalLink, Shield, TrendingUp,
  Zap, Brain, Eye, Lock, Globe, Cpu, Layout, Search, Code, GraduationCap, Map
} from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const CareerTalksCaseStudy = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Career Talks — Educational Consultancy Platform | Md Aqil';

    const ctx = gsap.context(() => {
      // Hero entrance
      gsap.fromTo(
        '.hero-content > *',
        { y: 70, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.1, stagger: 0.15, ease: 'power4.out' }
      );

      // Reveal sections
      gsap.utils.toArray<HTMLElement>('.reveal-section').forEach((el) => {
        gsap.fromTo(
          el,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 85%',
              toggleActions: 'play none none none',
              once: true,
            },
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen bg-[#020617] text-white selection:bg-blue-500/20 overflow-x-hidden">

      {/* ── Navigation ── */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 bg-[#020617]/80 backdrop-blur-2xl border-b border-white/5">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link to="/work" className="flex items-center gap-2 group text-white/50 hover:text-white transition-colors">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span className="text-xs font-black uppercase tracking-widest">All Works</span>
          </Link>
          <Badge className="bg-blue-500/15 text-blue-400 border-blue-500/30 text-[10px] tracking-widest font-black uppercase">
            Education · Consulting · Web App
          </Badge>
        </div>
      </nav>

      {/* ── Hero ── */}
      <section className="relative pt-36 pb-24 px-6 overflow-hidden">
        {/* Gradient orbs */}
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-blue-500/5 blur-[180px] rounded-full pointer-events-none" />
        <div className="absolute top-20 right-0 w-[400px] h-[400px] bg-indigo-500/5 blur-[140px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="hero-content space-y-8 relative z-10">
            {/* Badges */}
            <div className="flex flex-wrap gap-2">
              <Badge variant="outline" className="border-blue-400/30 text-blue-400 bg-blue-400/5 text-[10px] uppercase tracking-widest">Education</Badge>
              <Badge variant="outline" className="border-indigo-400/20 text-indigo-400/70 text-[10px] uppercase tracking-widest">Consulting</Badge>
              <Badge variant="outline" className="border-slate-400/20 text-slate-400/70 text-[10px] uppercase tracking-widest">Platform</Badge>
            </div>

            <div>
              <h1 className="text-6xl md:text-9xl font-black tracking-tighter leading-none">
                Career
                <span className="text-transparent bg-gradient-to-r from-blue-400 via-indigo-400 to-blue-300 bg-clip-text"> Talks</span>
              </h1>
              <p className="text-sm font-black uppercase tracking-[0.4em] text-white/30 mt-2">
                Study in Germany
              </p>
            </div>

            <p className="text-lg md:text-xl text-gray-400 font-medium leading-relaxed max-w-xl">
              <em className="text-white/80 not-italic">Bridging the Gap to Global Education.</em>
              <br /><br />
              Developing a comprehensive educational consultancy platform connecting students to world-class programs in Germany. Emphasizing clarity, trust, and comprehensive program details.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <Button
                variant="premium"
                className="rounded-full px-10 h-14 bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-400 hover:to-indigo-400 border-none font-black tracking-wide shadow-[0_0_60px_rgba(59,130,246,0.25)]"
                onClick={() => window.open('https://career-talks.in/', '_blank')}
              >
                Visit Live Site <ExternalLink className="ml-2 w-4 h-4" />
              </Button>
            </div>

            {/* Quick meta */}
            <div className="grid grid-cols-4 gap-4 pt-4 border-t border-white/5">
              {[
                { label: 'Role', value: 'Developer' },
                { label: 'Platform', value: 'Web App' },
                { label: 'Focus', value: 'UI / UX' },
                { label: 'Type', value: 'Education' },
              ].map(({ label, value }) => (
                <div key={label}>
                  <div className="text-[9px] font-black uppercase tracking-widest text-white/25 mb-1">{label}</div>
                  <div className="text-sm font-bold text-white/70">{value}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Hero mockup */}
          <div className="relative group">
            <div className="absolute -inset-8 bg-gradient-to-r from-blue-500/10 via-indigo-500/5 to-slate-500/10 rounded-[60px] blur-3xl opacity-60 group-hover:opacity-90 transition-opacity duration-700" />
            <div className="relative rounded-[40px] overflow-hidden border border-blue-500/10 shadow-2xl bg-[#030C1A] aspect-[4/3]">
              <img
                src="/career-talks-mockup.png"
                alt="Career Talks Website UI"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#020617]/70 via-transparent to-transparent" />
              {/* Live badge */}
              <div className="absolute top-5 left-5 flex items-center gap-2 bg-black/50 backdrop-blur-md rounded-full px-3 py-1.5 border border-blue-500/20">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
                <span className="text-[9px] font-black uppercase tracking-[0.2em] text-blue-400">Live Website</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Features ── */}
      <section className="reveal-section py-24 px-6 border-y border-white/5 bg-white/[0.01]">
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <Badge className="bg-blue-500/10 text-blue-400 border-blue-500/20 text-[10px] tracking-widest uppercase">The Challenge</Badge>
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter">
              Clarity in <br />
              <span className="text-transparent bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text">Global Admissions.</span>
            </h2>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Studying abroad involves complex procedures. The goal was to build a digital platform that reduces friction, easily explaining various programs—from Engineering to Medical PG in Germany—while instantly establishing trust with prospective students and their families.
            </p>
          </div>

          {/* Feature cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                icon: Globe,
                title: 'Comprehensive Content',
                body: 'Detailed breakdowns for myriad courses: MBBS, Engineering, Vocational Training, and German Languages.',
                color: 'blue',
              },
              {
                icon: Layout,
                title: 'Clean Architecture',
                body: 'A clutter-free interface focusing on the core journey of a student seeking to study in Germany.',
                color: 'indigo',
              },
              {
                icon: Search,
                title: 'Easy Discovery',
                body: 'Optimized search and taxonomy allowing students to swiftly navigate to their desired educational program.',
                color: 'slate',
              },
            ].map(({ icon: Icon, title, body, color }) => (
              <div key={title} className={`p-8 rounded-[36px] bg-white/[0.02] border border-white/5 group hover:border-${color}-500/20 transition-all duration-300`}>
                <div className={`w-12 h-12 rounded-2xl bg-${color}-500/10 border border-${color}-500/15 flex items-center justify-center mb-5`}>
                  <Icon className={`w-5 h-5 text-${color}-400`} />
                </div>
                <h3 className="text-lg font-black mb-3">{title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Design Psychology ── */}
      <section className="reveal-section py-24 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-10">
            <div className="space-y-4">
              <Badge className="bg-blue-500/10 text-blue-400 border-blue-500/20 text-[10px] tracking-widest uppercase">Process & Strategy</Badge>
              <h2 className="text-5xl md:text-6xl font-black tracking-tighter leading-[0.9]">
                Building <br />
                <span className="italic">Institutional Trust.</span>
              </h2>
            </div>

            <div className="space-y-8">
              {[
                {
                  icon: Shield,
                  title: 'Authority Signaling',
                  body: 'Incorporating verified badges, partner university logos (TU9), and student success metrics to signal institutional credibility.',
                  color: 'blue',
                },
                {
                  icon: Map,
                  title: 'Guided Journeys',
                  body: 'Transforming overwhelming admission criteria into step-by-step visual roadmaps to reduce cognitive load.',
                  color: 'indigo',
                },
                {
                  icon: Brain,
                  title: 'Information Hierarchy',
                  body: 'Using prominent CTAs and distinct course pages to immediately direct intent into actionable inquiries.',
                  color: 'slate',
                },
              ].map(({ icon: Icon, title, body, color }) => (
                <div key={title} className="flex gap-5">
                  <div className={`flex-shrink-0 w-12 h-12 rounded-2xl bg-${color}-500/10 border border-${color}-500/20 flex items-center justify-center`}>
                    <Icon className={`w-5 h-5 text-${color}-400`} />
                  </div>
                  <div>
                    <h4 className="text-base font-black mb-1.5">{title}</h4>
                    <p className="text-sm text-gray-400 leading-relaxed">{body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-blue-500/5 blur-3xl rounded-[80px]" />
            <div className="relative rounded-[48px] overflow-hidden border border-white/5 bg-[#030C1A] p-8 space-y-6 text-center">
              <div className="text-[10px] font-black uppercase tracking-widest text-blue-400/60">Core Impact Metrics</div>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-6 rounded-[28px] bg-blue-500/5 border border-blue-500/15">
                  <div className="text-3xl font-black text-blue-400">+150%</div>
                  <div className="text-[10px] font-black uppercase tracking-widest text-white/30">Course Inquiries</div>
                </div>
                <div className="p-6 rounded-[28px] bg-indigo-500/5 border border-indigo-500/15">
                  <div className="text-3xl font-black text-indigo-400">+60%</div>
                  <div className="text-[10px] font-black uppercase tracking-widest text-white/30">Engagement</div>
                </div>
              </div>
              <div className="p-6 rounded-[28px] bg-white/[0.03] border border-white/5">
                <div className="text-lg font-black text-white/80">Simplified Admissions UX</div>
                <p className="text-xs text-gray-500">Accessible Multi-Course Navigation</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="reveal-section py-32 px-6">
        <div className="max-w-5xl mx-auto relative overflow-hidden rounded-[80px] border border-blue-500/15 bg-gradient-to-br from-blue-500/8 via-indigo-500/4 to-slate-500/5 p-16 md:p-24 text-center space-y-10 group">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.07),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
          
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-none relative z-10">
            Digital platforms <br />
            <span className="text-transparent bg-gradient-to-r from-blue-400 via-indigo-400 to-blue-300 bg-clip-text">built for growth.</span>
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
            <Button
              variant="premium"
              size="xl"
              className="rounded-full px-14 h-16 text-base font-black bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-400 hover:to-indigo-400 border-none shadow-[0_0_60px_rgba(59,130,246,0.3)]"
              onClick={() => window.open('https://wa.me/917210562014', '_blank')}
            >
              Start Your Project <ArrowRight className="ml-2 w-5 h-5" />
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
        <p className="text-[10px] font-black uppercase tracking-[1em] text-white/15">
          © 2026 MD AQIL · ARCHITECTING TRUST IN DIGITAL PLATFORMS.
        </p>
      </footer>
    </div>
  );
};

export default CareerTalksCaseStudy;
