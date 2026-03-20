import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, Zap, ExternalLink } from 'lucide-react';
import { caseStudies } from '@/data/caseStudies';
import Navigation from '@/components/Navigation';

// ─── navigation helper ────────────────────────────────────────────────────────
const getStudyPath = (id: string) => {
  const map: Record<string, string> = {
    'deerika-grocery': '/deerika-case-study',
    'changecaptain':   '/changecaptain-case-study',
    'velvet-reel':     '/velvet-reel-case-study',
    'stay-clueless':   '/stay-clueless-case-study',
    'houssy':          '/houssy-case-study',
    'goatx':           '/goatx-case-study',
    'exotic':          '/exotic-case-study',
    'tpm':             '/tpm-case-study',
    'career-talks':    '/career-talks-case-study',
  };
  return map[id] ?? `/case-study/${id}`;
};

const ALL_FILTERS = ['All', 'E-commerce', 'SaaS', 'Mobile App', 'Web3', 'Brand Identity', 'FinTech', 'WordPress'];

// ─── Per-project fallback palette (used when no mockup image is present) ─────
const PROJECT_PALETTES: Record<string, { bg: string; accent: string; glow: string }> = {
  changecaptain: {
    bg: 'linear-gradient(135deg, #0f172a 0%, #1e3a5f 60%, #0f172a 100%)',
    accent: '#38bdf8',
    glow: 'rgba(56,189,248,0.12)',
  },
  'velvet-reel': {
    bg: 'linear-gradient(135deg, #1a0a2e 0%, #3d0d5c 60%, #1a0a2e 100%)',
    accent: '#c084fc',
    glow: 'rgba(192,132,252,0.12)',
  },
  'stay-clueless': {
    bg: 'linear-gradient(135deg, #0d1f14 0%, #14532d 60%, #0d1f14 100%)',
    accent: '#4ade80',
    glow: 'rgba(74,222,128,0.12)',
  },
  exotic: {
    bg: 'linear-gradient(135deg, #1f0a14 0%, #5c0d2a 60%, #1f0a14 100%)',
    accent: '#f472b6',
    glow: 'rgba(244,114,182,0.12)',
  },
};
const DEFAULT_PALETTE = {
  bg: 'linear-gradient(135deg, hsl(220,15%,10%) 0%, hsl(230,25%,14%) 100%)',
  accent: 'hsl(45,100%,72%)',
  glow: 'rgba(255,185,0,0.08)',
};

// ─── Branded fallback panel (shown when image is missing/broken) ──────────────
const FallbackPanel = ({ id, title }: { id: string; title: string }) => {
  const pal = PROJECT_PALETTES[id] ?? DEFAULT_PALETTE;
  return (
    <div className="absolute inset-0 overflow-hidden" style={{ background: pal.bg }}>
      {/* Glow orb */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full pointer-events-none"
        style={{ background: `radial-gradient(circle, ${pal.glow} 0%, transparent 70%)` }}
      />
      {/* Decorative rings */}
      <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full border opacity-[0.18]"
        style={{ borderColor: pal.accent }} />
      <div className="absolute -bottom-10 -left-10 w-52 h-52 rounded-full border opacity-[0.1]"
        style={{ borderColor: pal.accent }} />
      <div className="absolute top-1/3 right-1/4 w-28 h-28 rounded-full border opacity-[0.12]"
        style={{ borderColor: pal.accent }} />
      {/* Giant letter */}
      <div className="absolute inset-0 flex items-center justify-center select-none pointer-events-none">
        <span className="text-[13rem] font-black leading-none" style={{ color: `${pal.accent}14` }}>
          {title.charAt(0)}
        </span>
      </div>
      {/* Label */}
      <div className="absolute bottom-7 left-7">
        <div className="text-[9px] font-black uppercase tracking-[0.3em] mb-1.5" style={{ color: `${pal.accent}80` }}>
          Visual in progress
        </div>
        <div className="text-lg font-black tracking-tighter" style={{ color: pal.accent }}>
          {title}
        </div>
      </div>
    </div>
  );
};

// ─── Smart image component (falls back to branded panel on 404) ───────────────
const CardImage = ({
  src,
  alt,
  id,
  title,
  overlay,
}: {
  src: string;
  alt: string;
  id: string;
  title: string;
  overlay: string;
}) => {
  const [broken, setBroken] = useState(!src);

  if (broken) return <FallbackPanel id={id} title={title} />;

  const isVideo = src.endsWith('.mp4');

  return (
    <>
      {isVideo ? (
        <video
          src={src}
          autoPlay loop muted playsInline
          onError={() => setBroken(true)}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]"
          style={{ filter: 'brightness(0.85) saturate(1.1)' }}
        />
      ) : (
        <img
          src={src}
          alt={title}
          loading="lazy"
          onError={() => setBroken(true)}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]"
          style={{ filter: 'brightness(0.85) saturate(1.1)' }}
        />
      )}
      <div
        className="absolute inset-0 transition-opacity duration-500 group-hover:opacity-60"
        style={{ background: overlay, opacity: 0.8 }}
      />
    </>
  );
};

// ─── footer ──────────────────────────────────────────────────────────────────
const Footer = () => (
  <footer style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }} className="py-10 px-6">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-3">
      <div className="text-[10px] text-white/20 font-black uppercase tracking-[0.25em]">
        © 2026 Md Aqil — Psychology-led Design
      </div>
      <div className="text-[10px] text-white/20 font-black uppercase tracking-[0.25em]">
        Available for select projects only
      </div>
    </div>
  </footer>
);

// ─── Main ─────────────────────────────────────────────────────────────────────
const Work = () => {
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState('All');
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.title = 'Work & Case Studies | UX Design Portfolio';
  }, []);

  // Intersection-based reveal
  useEffect(() => {
    const items = document.querySelectorAll<HTMLElement>('.wc-item');
    items.forEach((el, i) => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(56px)';
    });
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            const delay = Number(el.dataset.delay ?? 0);
            setTimeout(() => {
              el.style.transition = 'opacity 0.9s cubic-bezier(0,0.55,0.45,1), transform 0.9s cubic-bezier(0,0.55,0.45,1)';
              el.style.opacity = '1';
              el.style.transform = 'translateY(0)';
            }, delay);
            io.unobserve(el);
          }
        });
      },
      { threshold: 0.08 }
    );
    items.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [activeFilter]);

  const filtered =
    activeFilter === 'All'
      ? caseStudies
      : caseStudies.filter((s) =>
          s.tags.some((t) => t.toLowerCase().includes(activeFilter.toLowerCase()))
        );

  return (
    <div className="min-h-screen text-foreground" style={{ background: 'hsl(220 15% 7%)' }}>
      <Navigation />

      {/* ═══════════════════════════════════════════════ HERO ══ */}
      <section className="relative pt-36 pb-16 px-6 overflow-hidden">
        {/* Background mesh */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(ellipse 80% 50% at 20% 0%, hsl(45 100% 72% / 0.07) 0%, transparent 60%),
                              radial-gradient(ellipse 60% 40% at 80% 0%, hsl(250 100% 65% / 0.06) 0%, transparent 60%)`,
          }}
        />
        {/* Subtle grid lines */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.025]"
          style={{
            backgroundImage: `linear-gradient(hsl(220 5% 60%) 1px, transparent 1px),
                              linear-gradient(90deg, hsl(220 5% 60%) 1px, transparent 1px)`,
            backgroundSize: '72px 72px',
          }}
        />

        <div className="max-w-7xl mx-auto relative">
          {/* Eyebrow */}
          <div
            className="wc-item inline-flex items-center gap-3 mb-8 px-4 py-2 rounded-full border"
            data-delay="0"
            style={{
              background: 'rgba(255,185,0,0.06)',
              borderColor: 'rgba(255,185,0,0.15)',
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-amber-400">
              Portfolio — Selected Work
            </span>
          </div>

          {/* Headline */}
          <h1
            className="wc-item text-[clamp(2.5rem,8vw,7rem)] font-black tracking-tighter leading-[0.9] mb-6"
            data-delay="80"
          >
            Work &amp;{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, hsl(45,100%,72%) 0%, hsl(35,100%,62%) 40%, hsl(280,80%,72%) 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Case Studies
            </span>
          </h1>

          <p
            className="wc-item text-base md:text-xl text-white/40 font-medium leading-relaxed max-w-2xl mb-14"
            data-delay="160"
          >
            A curated selection of design systems and product builds — blending
            behavioural psychology with modern, conversion-focused interfaces.
          </p>

          {/* Stats row */}
          <div className="wc-item grid grid-cols-2 lg:grid-cols-4 gap-y-8 divide-x-0 lg:divide-x border-y lg:border-none border-white/5 py-8 lg:py-0" data-delay="240" style={{ borderColor: 'rgba(255,255,255,0.08)' }}>
            {[
              { v: '7+', l: 'Projects shipped' },
              { v: '500k+', l: 'Users impacted' },
              { v: '3× avg', l: 'Conversion uplift' },
              { v: '8 yrs', l: 'Design experience' },
            ].map(({ v, l }, i) => (
              <div
                key={v}
                className="px-6 lg:px-8 flex flex-col gap-1 lg:first:pl-0"
                style={{ borderColor: 'rgba(255,255,255,0.08)' }}
              >
                <span
                  className="text-3xl md:text-4xl font-black tracking-tighter"
                  style={{ color: 'hsl(45,100%,72%)' }}
                >
                  {v}
                </span>
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white/25">{l}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════ BODY (sidebar + cards) ══ */}
      <div className="max-w-7xl mx-auto px-6 pb-28 pt-6 flex flex-col lg:flex-row gap-12 items-stretch lg:items-start">

        {/* ── Sticky Vertical Filter Sidebar ── */}
        <aside
          className="hidden lg:flex flex-col gap-1 shrink-0"
          style={{
            width: 176,
            position: 'sticky',
            top: 96,
            alignSelf: 'flex-start',
          }}
        >
          {/* Label */}
          <div
            className="text-[9px] font-black uppercase tracking-[0.3em] mb-3"
            style={{ color: 'rgba(255,255,255,0.2)' }}
          >
            Filter by type
          </div>

          {/* Filter pills */}
          <div
            className="flex flex-col gap-1 rounded-2xl p-2"
            style={{
              background: 'rgba(15,17,25,0.80)',
              backdropFilter: 'blur(24px)',
              border: '1px solid rgba(255,255,255,0.07)',
              boxShadow: '0 8px 32px rgba(0,0,0,0.35)',
            }}
          >
            {ALL_FILTERS.map((f) => {
              const count =
                f === 'All'
                  ? caseStudies.length
                  : caseStudies.filter((s) =>
                      s.tags.some((t) => t.toLowerCase().includes(f.toLowerCase()))
                    ).length;
              const isActive = activeFilter === f;
              return (
                <button
                  key={f}
                  onClick={() => setActiveFilter(f)}
                  className="group/btn flex items-center justify-between gap-2 w-full px-4 py-2.5 rounded-xl text-left transition-all duration-300"
                  style={
                    isActive
                      ? {
                          background: 'hsl(45,100%,72%)',
                          color: '#000',
                          boxShadow: '0 4px 20px hsl(45,100%,72%/0.3)',
                        }
                      : {
                          color: 'rgba(255,255,255,0.38)',
                          background: 'transparent',
                        }
                  }
                  onMouseEnter={(e) => {
                    if (!isActive) {
                      (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.8)';
                      (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.06)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) {
                      (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.38)';
                      (e.currentTarget as HTMLElement).style.background = 'transparent';
                    }
                  }}
                >
                  <span className="text-[10px] font-black uppercase tracking-widest">{f}</span>
                  <span
                    className="text-[9px] font-black tabular-nums px-1.5 py-0.5 rounded-md min-w-[20px] text-center"
                    style={{
                      background: isActive ? 'rgba(0,0,0,0.15)' : 'rgba(255,255,255,0.07)',
                      color: isActive ? '#000' : 'rgba(255,255,255,0.25)',
                    }}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Decorative side accent line */}
          <div
            className="mt-4 mx-auto rounded-full"
            style={{
              width: 2,
              height: 48,
              background: 'linear-gradient(to bottom, hsl(45,100%,72%/0.4), transparent)',
            }}
          />
        </aside>

        {/* ── Mobile horizontal filter (shown < lg) ── */}
        <div className="lg:hidden mb-10 w-full overflow-x-auto no-scrollbar pb-2">
          <div
            className="flex gap-2 w-max rounded-2xl p-1.5"
            style={{
              background: 'rgba(15,17,25,0.80)',
              backdropFilter: 'blur(24px)',
              border: '1px solid rgba(255,255,255,0.07)',
            }}
          >
            {ALL_FILTERS.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className="px-5 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all duration-300 whitespace-nowrap"
                style={
                  activeFilter === f
                    ? { background: 'hsl(45,100%,72%)', color: '#000', boxShadow: '0 4px 20px hsl(45,100%,72%/0.25)' }
                    : { color: 'rgba(255,255,255,0.35)' }
                }
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        {/* ── Cards column ── */}
        <main className="flex-1 w-full min-w-0" ref={cardsRef}>
          <div className="space-y-6">
            {filtered.map((study, index) => (
              <article
                key={study.id}
                className="wc-item group relative overflow-hidden rounded-[32px] cursor-pointer"
                data-delay={`${index * 60}`}
                style={{
                  border: '1px solid rgba(255,255,255,0.06)',
                  background: 'linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)',
                  transition: 'border-color 0.4s ease, box-shadow 0.4s ease',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,185,0,0.2)';
                  (e.currentTarget as HTMLElement).style.boxShadow = '0 0 80px hsl(45,100%,72%/0.06), 0 32px 80px rgba(0,0,0,0.4)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.06)';
                  (e.currentTarget as HTMLElement).style.boxShadow = 'none';
                }}
                onClick={() => {
                  if (study.externalLink) {
                    window.open(study.externalLink, '_blank');
                  } else {
                    navigate(getStudyPath(study.id));
                  }
                }}
              >
                {/* Inner layout */}
                <div className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} lg:min-h-[420px]`}>

                  {/* ── Image panel ── */}
                  <div className="w-full lg:w-[52%] relative overflow-hidden" style={{ minHeight: 280 }}>
                    <CardImage
                      src={study.image}
                      alt={study.title}
                      id={study.id}
                      title={study.title}
                      overlay={
                        index % 2 === 0
                          ? 'linear-gradient(to right, rgba(10,12,18,0.2) 0%, transparent 60%)'
                          : 'linear-gradient(to left, rgba(10,12,18,0.2) 0%, transparent 60%)'
                      }
                    />

                    {/* Index watermark */}
                    <div
                      className="absolute bottom-5 right-5 text-[80px] font-black leading-none select-none pointer-events-none"
                      style={{ color: 'rgba(255,255,255,0.06)' }}
                    >
                      {String(index + 1).padStart(2, '0')}
                    </div>

                    {/* Client chip */}
                    <div className="absolute top-5 left-5 flex items-center gap-2 px-3 py-1.5 rounded-full"
                      style={{ background: 'rgba(0,0,0,0.55)', backdropFilter: 'blur(12px)', border: '1px solid rgba(255,255,255,0.1)' }}>
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                      <span className="text-[9px] font-black uppercase tracking-[0.25em] text-white/60">{study.client}</span>
                    </div>

                    {/* "View" arrow — reveals on hover */}
                    <div
                      className="absolute bottom-5 left-5 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0"
                      style={{ background: 'hsl(45,100%,72%)', color: '#000' }}
                    >
                      <ArrowUpRight size={18} />
                    </div>
                  </div>

                  {/* ── Content panel ── */}
                  <div className="lg:w-[48%] flex flex-col justify-between p-6 md:p-10 lg:p-12 gap-8">
                    {/* Top: badge + title + tags + description */}
                    <div className="space-y-5">
                      <div className="flex items-center gap-3">
                        <span
                          className="text-[10px] font-black uppercase tracking-[0.3em] px-3 py-1 rounded-full"
                          style={{ background: 'hsl(45,100%,72%/0.12)', color: 'hsl(45,100%,72%)' }}
                        >
                          Case {String(index + 1).padStart(2, '0')}
                        </span>
                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white/20">
                          {study.tags[0]}
                        </span>
                      </div>

                      <h2
                        className="font-black tracking-tighter leading-[0.88] transition-all duration-500 group-hover:tracking-tight"
                        style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)' }}
                      >
                        {study.title}
                      </h2>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2">
                        {study.tags.map((tag, ti) => (
                          <span
                            key={tag}
                            className="px-3 py-1 text-[9px] font-black uppercase tracking-widest rounded-full border bg-gradient-to-r"
                            style={{
                              background: `linear-gradient(to right, ${['rgba(255,185,0,0.1)','rgba(139,92,246,0.1)','rgba(14,165,233,0.1)','rgba(16,185,129,0.1)'][ti % 4]}, transparent)`,
                              borderColor: ['rgba(255,185,0,0.2)','rgba(139,92,246,0.2)','rgba(14,165,233,0.2)','rgba(16,185,129,0.2)'][ti % 4],
                              color: ['rgba(251,191,36,0.9)','rgba(167,139,250,0.9)','rgba(56,189,248,0.9)','rgba(52,211,153,0.9)'][ti % 4],
                            }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <p className="text-sm md:text-base text-white/50 leading-relaxed font-medium">
                        {study.challenge}
                      </p>
                    </div>

                    {/* Bottom: metrics + CTA */}
                    <div className="space-y-7">
                      {/* Metrics */}
                      <div
                        className="grid grid-cols-2 sm:grid-cols-3 gap-6 py-8"
                        style={{ borderTop: '1px solid rgba(255,255,255,0.06)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}
                      >
                        {Object.entries(study.results).map(([key, value]) => (
                          <div key={key} className="flex flex-col gap-2">
                            <div
                              className="text-2xl sm:text-3xl font-black tracking-tighter transition-colors duration-500 group-hover:text-amber-400"
                              style={{ color: 'white' }}
                            >
                              {value}
                            </div>
                            <div className="text-[10px] font-black uppercase tracking-widest text-white/25 leading-tight">
                              {key}
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* CTA */}
                      <div className="flex items-center justify-between">
                        <button
                          className="inline-flex items-center gap-3 px-7 py-3.5 rounded-full text-[11px] font-black uppercase tracking-[0.18em] transition-all duration-300 hover:-translate-y-0.5"
                          style={{
                            background: 'hsl(45,100%,72%)',
                            color: '#000',
                            boxShadow: '0 0 0 0 hsl(45,100%,72%/0)',
                          }}
                          onMouseEnter={(e) => {
                            (e.currentTarget as HTMLElement).style.boxShadow = '0 8px 32px hsl(45,100%,72%/0.35)';
                          }}
                          onMouseLeave={(e) => {
                            (e.currentTarget as HTMLElement).style.boxShadow = '0 0 0 0 hsl(45,100%,72%/0)';
                          }}
                          onClick={(e) => {
                            e.stopPropagation();
                            if (study.externalLink) {
                              window.open(study.externalLink, '_blank');
                            } else {
                              navigate(getStudyPath(study.id));
                            }
                          }}
                        >
                          {study.externalLink ? 'Visit Website' : 'View Case Study'}
                          <ArrowRight size={14} />
                        </button>

                        <ExternalLink size={14} className="text-white/15 group-hover:text-white/40 transition-colors duration-300" />
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}

            {filtered.length === 0 && (
              <div className="text-center py-32">
                <p className="text-white/20 text-sm font-bold uppercase tracking-widest">
                  No projects match this filter.
                </p>
              </div>
            )}
          </div>

          {/* ═══════════════════════════════ CTA BANNER ══ */}
          <div
            className="wc-item mt-16 rounded-[40px] overflow-hidden relative"
            data-delay="0"
            style={{
              background: 'linear-gradient(135deg, hsl(220,15%,10%) 0%, hsl(240,20%,13%) 100%)',
              border: '1px solid rgba(255,255,255,0.06)',
            }}
          >
            {/* Glowing orb */}
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full pointer-events-none"
              style={{ background: 'radial-gradient(circle, hsl(45,100%,72%/0.08) 0%, transparent 70%)' }}
            />
            {/* Grid overlay */}
            <div
              className="absolute inset-0 pointer-events-none opacity-[0.03]"
              style={{
                backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
                backgroundSize: '48px 48px',
              }}
            />

            <div className="relative z-10 text-center py-16 px-6 lg:py-24 lg:px-12">
              <div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 text-[10px] font-black uppercase tracking-[0.25em]"
                style={{ background: 'hsl(45,100%,72%/0.1)', border: '1px solid hsl(45,100%,72%/0.2)', color: 'hsl(45,100%,72%)' }}
              >
                <Zap size={10} />
                Let's Build Together
              </div>

              <h3
                className="font-black tracking-tighter mb-4 leading-tight"
                style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}
              >
                Want results like these?
              </h3>

              <p className="text-white/40 text-base max-w-lg mx-auto mb-10 font-medium leading-relaxed">
                Let's discuss how behavioural psychology can transform your user experience and drive real business growth.
              </p>

              <button
                className="inline-flex items-center gap-3 px-10 py-4 rounded-full text-xs font-black uppercase tracking-[0.2em] transition-all duration-300 hover:-translate-y-1"
                style={{
                  background: 'hsl(45,100%,72%)',
                  color: '#000',
                  boxShadow: '0 8px 48px hsl(45,100%,72%/0.25)',
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = '0 16px 64px hsl(45,100%,72%/0.4)'; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = '0 8px 48px hsl(45,100%,72%/0.25)'; }}
                onClick={() => window.open('https://wa.me/917210562014', '_blank')}
              >
                Start Your Project
                <Zap size={14} />
              </button>
            </div>
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
};

export default Work;
