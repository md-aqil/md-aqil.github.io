import { useEffect, useRef } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  ArrowLeft, ArrowRight, ExternalLink, ShoppingBag,
  Palette, Star, Globe, Layers, Award, ImageOff
} from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// ─── Collections ──────────────────────────────────────────────────────────────
const collections = [
  { name: 'Personalised Tote Bags', desc: 'Monogrammed to order. Structured jute canvas, tan leather trim, gold hardware.' },
  { name: 'Hobo Bags', desc: 'Relaxed slouch silhouette in croc-embossed faux leather — everyday luxury.' },
  { name: 'Mini Bags', desc: 'Compact cross-body styles with bamboo clasps. Festive and understated.' },
  { name: 'Festive Series', desc: 'Embroidered clutches and metallic evening bags for every celebration.' },
  { name: 'Handbag Luxe', desc: 'Structured top-handle bags with turn-lock hardware — the brand DNA.' },
  { name: 'Sling Bags', desc: 'Hands-free city styles. Lightweight, convertible, and versatile.' },
];

// ─── Platforms ────────────────────────────────────────────────────────────────
const platforms = [
  { name: 'D2C Website', url: 'exoticstore.in', desc: 'Shopify storefront with full brand UI, collection pages, PDPs, and editorial sections.', icon: Globe },
  { name: 'Amazon Store', desc: 'Branded A+ content, storefronts, and catalog imagery optimised for conversion.', icon: ShoppingBag },
  { name: 'Myntra Brand Store', desc: 'Custom brand page design following Myntra guidelines with campaign banners.', icon: Award },
];

// ─── Design pillars ───────────────────────────────────────────────────────────
const pillars = [
  {
    icon: Palette,
    title: 'Brand Identity',
    body: 'Created the magenta (#A70D5A) and gold (#D4AF37) palette, the circular serif logo mark, and a complete typography system pairing editorial serifs with clean sans-serif body text.',
  },
  {
    icon: Layers,
    title: 'Aspirational UI',
    body: 'Every layout decision — whitespace, imagery scale, product card proportions — was calibrated to make a mid-market brand feel like a luxury label.',
  },
  {
    icon: Star,
    title: 'Sensory Substitution',
    body: 'Without physical touch, the design compensates: rich macro product shots, tactile texture language in copy, and warm ambient photography that triggers desire.',
  },
  {
    icon: Globe,
    title: 'Multi-Platform System',
    body: 'One visual language adapted across three distinct platforms — each with its own constraints — while keeping the "Exotic" identity recognisable everywhere.',
  },
];

const ExoticCaseStudy = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Exotic — Premium Women\'s Fashion Brand Identity | Md Aqil';

    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.hero-content > *',
        { y: 60, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.1, stagger: 0.14, ease: 'power4.out' }
      );

      gsap.utils.toArray<HTMLElement>('.reveal-up').forEach((el) => {
        gsap.fromTo(
          el,
          { y: 45, opacity: 0 },
          {
            y: 0, opacity: 1, duration: 0.9, ease: 'power3.out',
            scrollTrigger: { trigger: el, start: 'top 87%', once: true },
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="min-h-screen text-[#1a0a10] overflow-x-hidden"
      style={{ background: '#FDFAF8', fontFamily: "'Georgia', serif" }}
    >

      {/* ── Navigation ── */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 bg-[#FDFAF8]/90 backdrop-blur-2xl border-b border-[#A70D5A]/10">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link to="/work" className="flex items-center gap-2 group text-[#A70D5A]/60 hover:text-[#A70D5A] transition-colors">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span className="text-xs font-bold uppercase tracking-widest font-sans">All Works</span>
          </Link>
          <div className="flex items-center gap-2">
            <Badge
              className="text-[10px] tracking-widest font-bold uppercase border"
              style={{ background: 'rgba(167,13,90,0.07)', color: '#A70D5A', borderColor: 'rgba(167,13,90,0.2)' }}
            >
              Fashion · E-Commerce
            </Badge>
          </div>
        </div>
      </nav>

      {/* ── Hero ── */}
      <section className="relative pt-36 pb-20 px-6 overflow-hidden">
        {/* Soft gradient orbs */}
        <div className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(167,13,90,0.05) 0%, transparent 70%)' }} />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(212,175,55,0.06) 0%, transparent 70%)' }} />

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left — text */}
          <div className="hero-content space-y-8 relative z-10">
            {/* Tags */}
            <div className="flex flex-wrap gap-2 font-sans">
              {['E-Commerce', 'Brand Identity', 'Fashion', 'UI/UX'].map(t => (
                <span
                  key={t}
                  className="text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full border"
                  style={{ borderColor: 'rgba(167,13,90,0.2)', color: '#A70D5A', background: 'rgba(167,13,90,0.05)' }}
                >
                  {t}
                </span>
              ))}
            </div>

            {/* Brand name */}
            <div>
              <div className="text-[11px] font-sans font-bold uppercase tracking-[0.4em] mb-3" style={{ color: '#A70D5A' }}>
                Case Study
              </div>
              <h1 className="text-7xl md:text-[110px] font-black tracking-tight leading-none" style={{ fontFamily: 'Georgia, serif', color: '#1a0a10' }}>
                Exotic
              </h1>
              <p className="text-sm font-sans font-bold uppercase tracking-[0.3em] mt-2" style={{ color: '#A70D5A', opacity: 0.5 }}>
                Made for Evermoment™
              </p>
            </div>

            <p className="text-lg text-[#4a2030]/70 font-sans font-medium leading-relaxed max-w-xl" style={{ fontFamily: 'inherit' }}>
              <em className="not-italic" style={{ color: '#1a0a10' }}>A complete brand identity and e-commerce design system</em>
              {' '}for a premium Indian women's handbag label — bringing artisan leather goods to life across D2C, Amazon, and Myntra.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 font-sans">
              <button
                className="flex items-center gap-2.5 px-8 h-13 rounded-full text-sm font-bold tracking-wide text-white transition-all hover:opacity-90 hover:shadow-lg"
                style={{ background: 'linear-gradient(135deg, #A70D5A, #d01470)', boxShadow: '0 8px 30px rgba(167,13,90,0.25)', height: '52px', paddingLeft: '28px', paddingRight: '28px' }}
                onClick={() => window.open('https://exoticstore.in', '_blank')}
              >
                Visit Live Site <ExternalLink className="w-3.5 h-3.5" />
              </button>
              <button
                className="flex items-center gap-2.5 px-8 rounded-full text-sm font-bold tracking-wide border transition-all hover:shadow-md"
                style={{ height: '52px', borderColor: 'rgba(167,13,90,0.25)', color: '#A70D5A', background: 'transparent', paddingLeft: '28px', paddingRight: '28px' }}
                onClick={() => window.open('https://www.figma.com/design/Ho6UE1FtBinDtAjKH4pRFz/Exotic?node-id=0-1', '_blank')}
              >
                View Figma <ExternalLink className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Meta strip */}
            <div className="grid grid-cols-4 gap-4 pt-5 border-t font-sans" style={{ borderColor: 'rgba(167,13,90,0.1)' }}>
              {[
                { label: 'Role', value: 'Brand + UI' },
                { label: 'Industry', value: 'Fashion' },
                { label: 'Platforms', value: '3 Channels' },
                { label: 'Deliverable', value: 'Full System' },
              ].map(({ label, value }) => (
                <div key={label}>
                  <div className="text-[9px] font-bold uppercase tracking-widest mb-1" style={{ color: 'rgba(167,13,90,0.4)' }}>{label}</div>
                  <div className="text-sm font-bold" style={{ color: '#1a0a10' }}>{value}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — image placeholder */}
          <div className="relative group">
            <div className="absolute -inset-6 rounded-[60px] blur-3xl opacity-30 pointer-events-none" style={{ background: 'linear-gradient(135deg, rgba(167,13,90,0.15), rgba(212,175,55,0.1))' }} />
            <div
              className="relative rounded-[40px] overflow-hidden border flex flex-col items-center justify-center aspect-[4/3] gap-6"
              style={{ borderColor: 'rgba(167,13,90,0.12)', background: 'linear-gradient(135deg, rgba(167,13,90,0.04), rgba(212,175,55,0.04))' }}
            >
              {/* Placeholder waiting for image */}
              <div className="flex flex-col items-center gap-4 py-12 px-8 text-center">
                <div
                  className="w-20 h-20 rounded-full flex items-center justify-center"
                  style={{ background: 'rgba(167,13,90,0.08)', border: '1px solid rgba(167,13,90,0.15)' }}
                >
                  <ImageOff className="w-8 h-8" style={{ color: '#A70D5A', opacity: 0.5 }} />
                </div>
                <div>
                  <p className="text-sm font-bold font-sans" style={{ color: '#A70D5A', opacity: 0.7 }}>Image Coming Soon</p>
                  <p className="text-xs font-sans mt-1" style={{ color: '#A70D5A', opacity: 0.4 }}>
                    Place your mockup at<br />
                    <code className="text-[10px]">/public/exotic-mockup.png</code>
                  </p>
                </div>
              </div>

              {/* Brand color swatches — decorative */}
              <div className="absolute bottom-6 left-6 right-6 flex items-center gap-3 font-sans">
                <div className="flex gap-2">
                  <div className="w-6 h-6 rounded-full border border-white/30 shadow" style={{ background: '#A70D5A' }} title="#A70D5A" />
                  <div className="w-6 h-6 rounded-full border border-white/30 shadow" style={{ background: '#D4AF37' }} title="#D4AF37" />
                  <div className="w-6 h-6 rounded-full border" style={{ background: '#FDFAF8', borderColor: 'rgba(167,13,90,0.2)' }} title="Off-white" />
                  <div className="w-6 h-6 rounded-full" style={{ background: '#1a0a10' }} title="Near-black" />
                </div>
                <span className="text-[9px] font-bold uppercase tracking-widest ml-1" style={{ color: 'rgba(167,13,90,0.4)' }}>Brand Palette</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Brand Palette Showcase ── */}
      <section className="reveal-up py-16 px-6 border-y" style={{ borderColor: 'rgba(167,13,90,0.08)', background: 'rgba(167,13,90,0.02)' }}>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-px overflow-hidden rounded-3xl border" style={{ borderColor: 'rgba(167,13,90,0.1)' }}>
          {[
            { color: '#A70D5A', label: 'Brand Magenta', hex: '#A70D5A', role: 'Logo · CTA · Accents', textColor: 'white' },
            { color: '#D4AF37', label: 'Prestige Gold', hex: '#D4AF37', role: 'Hardware · Badges · Highlights', textColor: '#1a0a10' },
            { color: '#FDFAF8', label: 'Cream Canvas', hex: '#FDFAF8', role: 'Background · Cards · Breathing room', textColor: '#1a0a10', border: true },
          ].map(({ color, label, hex, role, textColor, border }) => (
            <div
              key={label}
              className="p-10 flex flex-col gap-3"
              style={{
                background: color,
                border: border ? '1px solid rgba(167,13,90,0.1)' : 'none',
              }}
            >
              <div className="text-xs font-bold uppercase tracking-widest" style={{ color: textColor, opacity: 0.5, fontFamily: 'sans-serif' }}>{hex}</div>
              <div className="text-xl font-black" style={{ color: textColor, fontFamily: 'Georgia, serif' }}>{label}</div>
              <div className="text-xs" style={{ color: textColor, opacity: 0.6, fontFamily: 'sans-serif' }}>{role}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── The Brief ── */}
      <section className="reveal-up py-24 px-6">
        <div className="max-w-5xl mx-auto space-y-14">
          <div className="text-center space-y-4">
            <div className="text-[10px] font-sans font-bold uppercase tracking-widest" style={{ color: '#A70D5A' }}>The Brief</div>
            <h2 className="text-4xl md:text-6xl font-black tracking-tight leading-tight" style={{ fontFamily: 'Georgia, serif' }}>
              Luxury that feels within reach.
            </h2>
            <p className="text-base text-[#4a2030]/60 font-sans max-w-2xl mx-auto leading-relaxed">
              Exotic needed to stake its claim in a crowded market — between fast fashion and true luxury.
              The design had to elevate the brand to aspirational tier without alienating its core audience of
              style-conscious Indian women aged 22–40.
            </p>
          </div>

          {/* Challenge cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                icon: ShoppingBag,
                title: 'Market Positioning',
                body: 'Standing out among thousands of bag brands on Shopify, Amazon, and Myntra required a distinctive visual identity — not just a logo.',
              },
              {
                icon: Star,
                title: 'Tactile Desire Online',
                body: 'Leather goods live and die on texture and touch. The entire UI had to compensate for the absence of physical sensation through imagery and copy.',
              },
              {
                icon: Layers,
                title: 'Multi-Platform Coherence',
                body: 'Each platform — D2C, Amazon, Myntra — has wildly different templates and constraints. The brand still needed to feel unmistakably "Exotic" everywhere.',
              },
            ].map(({ icon: Icon, title, body }) => (
              <div
                key={title}
                className="p-8 rounded-[32px] border group transition-all duration-300 hover:shadow-lg"
                style={{ borderColor: 'rgba(167,13,90,0.1)', background: 'rgba(167,13,90,0.02)' }}
              >
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5"
                  style={{ background: 'rgba(167,13,90,0.08)', border: '1px solid rgba(167,13,90,0.12)' }}
                >
                  <Icon className="w-5 h-5" style={{ color: '#A70D5A' }} />
                </div>
                <h3 className="text-lg font-black mb-2.5" style={{ fontFamily: 'Georgia, serif', color: '#1a0a10' }}>{title}</h3>
                <p className="text-sm leading-relaxed font-sans" style={{ color: '#4a2030', opacity: 0.65 }}>{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Collections ── */}
      <section className="reveal-up py-24 px-6 border-y" style={{ borderColor: 'rgba(167,13,90,0.08)', background: 'rgba(167,13,90,0.015)' }}>
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="text-center space-y-3">
            <div className="text-[10px] font-sans font-bold uppercase tracking-widest" style={{ color: '#A70D5A' }}>Collections Designed</div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight" style={{ fontFamily: 'Georgia, serif' }}>6 Collections. 1 Universe.</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {collections.map(({ name, desc }, i) => (
              <div
                key={name}
                className="group relative p-7 rounded-[28px] border overflow-hidden transition-all duration-300 hover:shadow-md"
                style={{ borderColor: 'rgba(167,13,90,0.1)', background: 'white' }}
              >
                {/* Index number */}
                <div
                  className="absolute -top-3 -right-3 text-[80px] font-black leading-none select-none pointer-events-none"
                  style={{ color: 'rgba(167,13,90,0.04)', fontFamily: 'Georgia, serif' }}
                >
                  {String(i + 1).padStart(2, '0')}
                </div>
                <div className="relative">
                  <h3 className="text-base font-black mb-2" style={{ fontFamily: 'Georgia, serif', color: '#1a0a10' }}>{name}</h3>
                  <p className="text-sm font-sans leading-relaxed" style={{ color: '#4a2030', opacity: 0.6 }}>{desc}</p>
                </div>
                {/* Bottom accent */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ background: 'linear-gradient(90deg, #A70D5A, #D4AF37)' }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Design System pillars ── */}
      <section className="reveal-up py-24 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Text side */}
          <div className="space-y-10">
            <div className="space-y-4">
              <div className="text-[10px] font-sans font-bold uppercase tracking-widest" style={{ color: '#A70D5A' }}>Design Psychology</div>
              <h2 className="text-5xl md:text-6xl font-black tracking-tight leading-[0.95]" style={{ fontFamily: 'Georgia, serif' }}>
                Designing for<br />
                <em>Aspiration.</em>
              </h2>
            </div>
            <div className="space-y-8">
              {pillars.map(({ icon: Icon, title, body }) => (
                <div key={title} className="flex gap-5">
                  <div
                    className="flex-shrink-0 w-12 h-12 rounded-2xl flex items-center justify-center"
                    style={{ background: 'rgba(167,13,90,0.07)', border: '1px solid rgba(167,13,90,0.12)' }}
                  >
                    <Icon className="w-5 h-5" style={{ color: '#A70D5A' }} />
                  </div>
                  <div>
                    <h4 className="text-base font-black mb-1.5" style={{ fontFamily: 'Georgia, serif', color: '#1a0a10' }}>{title}</h4>
                    <p className="text-sm font-sans leading-relaxed" style={{ color: '#4a2030', opacity: 0.65 }}>{body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Platform cards */}
          <div className="space-y-4">
            <div className="text-[10px] font-sans font-bold uppercase tracking-widest mb-6" style={{ color: '#A70D5A', opacity: 0.6 }}>Platforms Delivered</div>
            {platforms.map(({ name, url, desc, icon: Icon }) => (
              <div
                key={name}
                className="p-6 rounded-[28px] border flex gap-5 items-start transition-all duration-300 hover:shadow-md"
                style={{ borderColor: 'rgba(167,13,90,0.1)', background: 'white' }}
              >
                <div
                  className="flex-shrink-0 w-12 h-12 rounded-2xl flex items-center justify-center mt-0.5"
                  style={{ background: 'rgba(167,13,90,0.07)', border: '1px solid rgba(167,13,90,0.1)' }}
                >
                  <Icon className="w-5 h-5" style={{ color: '#A70D5A' }} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1 flex-wrap">
                    <h4 className="font-black text-base" style={{ fontFamily: 'Georgia, serif', color: '#1a0a10' }}>{name}</h4>
                    {url && (
                      <a href={`https://${url}`} target="_blank" rel="noopener noreferrer"
                        className="text-[9px] font-bold uppercase tracking-widest flex items-center gap-1 transition-opacity hover:opacity-100 font-sans"
                        style={{ color: '#A70D5A', opacity: 0.5 }}
                      >
                        {url} <ExternalLink className="w-2.5 h-2.5" />
                      </a>
                    )}
                  </div>
                  <p className="text-sm font-sans leading-relaxed" style={{ color: '#4a2030', opacity: 0.6 }}>{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Results bar ── */}
      <section
        className="reveal-up py-20 px-6"
        style={{ background: 'linear-gradient(135deg, rgba(167,13,90,0.04), rgba(212,175,55,0.04))' }}
      >
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 space-y-2">
            <div className="text-[10px] font-sans font-bold uppercase tracking-widest" style={{ color: '#A70D5A' }}>Deliverables</div>
            <h2 className="text-3xl md:text-4xl font-black tracking-tight" style={{ fontFamily: 'Georgia, serif' }}>Everything built.</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { value: '3', label: 'Platforms', sub: 'D2C · Amazon · Myntra' },
              { value: '6+', label: 'Collections', sub: 'Full page layouts' },
              { value: '1', label: 'Brand System', sub: 'Logo · Color · Type' },
              { value: '∞', label: 'Banners', sub: 'Marketing creatives' },
            ].map(({ value, label, sub }) => (
              <div
                key={label}
                className="p-7 rounded-[28px] text-center border transition-all hover:shadow-md"
                style={{ background: 'white', borderColor: 'rgba(167,13,90,0.1)' }}
              >
                <div className="text-4xl font-black mb-1" style={{ fontFamily: 'Georgia, serif', color: '#A70D5A' }}>{value}</div>
                <div className="text-[9px] font-bold uppercase tracking-widest font-sans mb-1" style={{ color: '#A70D5A', opacity: 0.7 }}>{label}</div>
                <div className="text-[10px] font-sans" style={{ color: '#4a2030', opacity: 0.45 }}>{sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="reveal-up pt-28 pb-24 px-6">
        <div
          className="max-w-5xl mx-auto relative overflow-hidden rounded-[64px] p-16 md:p-24 text-center space-y-8"
          style={{ background: 'linear-gradient(135deg, #A70D5A 0%, #7a0940 60%, #1a0a10 100%)' }}
        >
          {/* Decorative circles */}
          <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full opacity-10" style={{ background: '#D4AF37' }} />
          <div className="absolute -bottom-20 -left-20 w-48 h-48 rounded-full opacity-10" style={{ background: '#D4AF37' }} />

          <h2 className="text-5xl md:text-7xl font-black tracking-tight leading-none text-white relative z-10" style={{ fontFamily: 'Georgia, serif' }}>
            Every brand<br />tells a story.
          </h2>
          <p className="text-base text-white/60 max-w-xl mx-auto font-sans relative z-10">
            Let's write yours. From identity to interface — I design experiences that people feel before they think.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10 font-sans">
            <button
              className="flex items-center justify-center gap-2 px-10 rounded-full text-sm font-bold tracking-wide text-[#A70D5A] transition-all hover:shadow-xl hover:scale-105"
              style={{ height: '56px', background: 'white' }}
              onClick={() => window.open('https://wa.me/917210562014', '_blank')}
            >
              Start a Project <ArrowRight className="w-4 h-4" />
            </button>
            <button
              className="flex items-center justify-center gap-2 px-10 rounded-full text-sm font-bold tracking-wide text-white border border-white/20 transition-all hover:bg-white/10"
              style={{ height: '56px' }}
              onClick={() => navigate('/work')}
            >
              View All Work
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t text-center font-sans" style={{ borderColor: 'rgba(167,13,90,0.08)' }}>
        <p className="text-[10px] font-bold uppercase tracking-[1em]" style={{ color: 'rgba(167,13,90,0.25)' }}>
          © 2024 MD AQIL · BUILT FOR SCALE, DESIGNED FOR HUMANS.
        </p>
      </footer>
    </div>
  );
};

export default ExoticCaseStudy;
