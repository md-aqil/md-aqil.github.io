import { useEffect, useRef } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  ArrowLeft, ArrowRight, ExternalLink, Shield, TrendingUp,
  Zap, Brain, Eye, Lock, Globe, Cpu
} from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// ─── NFT tier data ────────────────────────────────────────────────────────────
const nftTiers = [
  {
    tier: 'Kid NFT',
    age: '1–3 months',
    badge: 'Entry',
    desc: 'Low barrier to entry. Fast growth curve. 18–20 months to maturity.',
    returns: '18–22%',
    highlight: false,
  },
  {
    tier: 'Adult Goat NFT',
    age: '1.5–3 years',
    badge: 'Stable',
    desc: 'Higher starting weight. Immediate value appreciation on minting.',
    returns: '28–35%',
    highlight: true,
  },
  {
    tier: 'Breeder Female NFT',
    age: '2–4 years',
    badge: 'Compound',
    desc: 'Yields 2–3 kids/yr. Compounding model with offspring NFTs.',
    returns: '40–55%',
    highlight: false,
  },
  {
    tier: 'Premium Bloodline NFT',
    age: 'Rare breed',
    badge: 'Elite',
    desc: 'Rare genetics, highest breeding output. Limited availability.',
    returns: '60%+',
    highlight: false,
  },
];

// ─── Roadmap ──────────────────────────────────────────────────────────────────
const roadmap = [
  { phase: '01', title: 'Foundation', items: ['Farm setup & certification', 'Premium breed acquisition', 'Blockchain infrastructure', 'Smart contract audit'] },
  { phase: '02', title: 'Minting', items: ['NFT launch & presale', 'Real-time dashboard tracking', 'Live asset verification', 'Community governance'] },
  { phase: '03', title: 'Expansion', items: ['Breeding scale-up', 'Secondary NFT marketplace', 'Dual-token economy (GTX + GVC)', 'DAO treasury activation'] },
  { phase: '04', title: 'Globalization', items: ['International payments', 'Multi-species NFTs', 'GoatX Vault launch', 'Global farm partnerships'] },
];

const GoatXCaseStudy = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'GoatX — Blockchain Goat Farming NFT Platform | Md Aqil';

    const ctx = gsap.context(() => {
      // Hero entrance
      gsap.fromTo(
        '.hero-content > *',
        { y: 70, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.1, stagger: 0.15, ease: 'power4.out' }
      );

      // Reveal sections — always end at opacity:1
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

      // NFT cards
      gsap.fromTo(
        '.nft-card',
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.12,
          ease: 'back.out(1.5)',
          scrollTrigger: { trigger: '.nft-grid', start: 'top 85%', once: true },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen bg-[#020617] text-white selection:bg-emerald-500/20 overflow-x-hidden">

      {/* ── Navigation ── */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 bg-[#020617]/80 backdrop-blur-2xl border-b border-white/5">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link to="/work" className="flex items-center gap-2 group text-white/50 hover:text-white transition-colors">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span className="text-xs font-black uppercase tracking-widest">All Works</span>
          </Link>
          <Badge className="bg-emerald-500/15 text-emerald-400 border-emerald-500/30 text-[10px] tracking-widest font-black uppercase">
            Web3 · Blockchain · NFT
          </Badge>
        </div>
      </nav>

      {/* ── Hero ── */}
      <section className="relative pt-36 pb-24 px-6 overflow-hidden">
        {/* Gradient orbs */}
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-emerald-500/5 blur-[180px] rounded-full pointer-events-none" />
        <div className="absolute top-20 right-0 w-[400px] h-[400px] bg-cyan-500/5 blur-[140px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-violet-500/5 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="hero-content space-y-8 relative z-10">
            {/* Badges */}
            <div className="flex flex-wrap gap-2">
              <Badge variant="outline" className="border-emerald-400/30 text-emerald-400 bg-emerald-400/5 text-[10px] uppercase tracking-widest">Web3</Badge>
              <Badge variant="outline" className="border-cyan-400/20 text-cyan-400/70 text-[10px] uppercase tracking-widest">Blockchain</Badge>
              <Badge variant="outline" className="border-violet-400/20 text-violet-400/70 text-[10px] uppercase tracking-widest">NFT Platform</Badge>
            </div>

            <div>
              <h1 className="text-6xl md:text-9xl font-black tracking-tighter leading-none">
                Goat
                <span className="text-transparent bg-gradient-to-r from-emerald-400 via-cyan-400 to-emerald-300 bg-clip-text">X</span>
              </h1>
              <p className="text-sm font-black uppercase tracking-[0.4em] text-white/30 mt-2">
                Decentralized Goat Farming
              </p>
            </div>

            <p className="text-lg md:text-xl text-gray-400 font-medium leading-relaxed max-w-xl">
              <em className="text-white/80 not-italic">Own a Real Goat. On-Chain. Fraction by Fraction.</em>
              <br /><br />
              A full Web3 landing page designed to bridge the gap between traditional
              livestock farming and modern DeFi investors through radical transparency and premium UX.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <Button
                variant="premium"
                className="rounded-full px-10 h-14 bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-400 hover:to-cyan-400 border-none font-black tracking-wide shadow-[0_0_60px_rgba(16,185,129,0.25)]"
                onClick={() => window.open('https://www.figma.com/design/zgtQMBtllokWisBrA6wI8L/GoatX?node-id=78-1646', '_blank')}
              >
                View Figma Design <ExternalLink className="ml-2 w-4 h-4" />
              </Button>
            </div>

            {/* Quick meta */}
            <div className="grid grid-cols-4 gap-4 pt-4 border-t border-white/5">
              {[
                { label: 'Role', value: 'UI/UX Designer' },
                { label: 'Domain', value: 'Web3 / DeFi' },
                { label: 'Tool', value: 'Figma' },
                { label: 'Type', value: 'Landing Page' },
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
            <div className="absolute -inset-8 bg-gradient-to-r from-emerald-500/10 via-cyan-500/5 to-violet-500/10 rounded-[60px] blur-3xl opacity-60 group-hover:opacity-90 transition-opacity duration-700" />
            <div className="relative rounded-[40px] overflow-hidden border border-emerald-500/10 shadow-2xl bg-[#030C1A] aspect-[4/3]">
              <img
                src="/goatx-mockup.png"
                alt="GoatX Blockchain Platform UI"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#020617]/70 via-transparent to-transparent" />
              {/* Live badge */}
              <div className="absolute top-5 left-5 flex items-center gap-2 bg-black/50 backdrop-blur-md rounded-full px-3 py-1.5 border border-emerald-500/20">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-[9px] font-black uppercase tracking-[0.2em] text-emerald-400">Live Design</span>
              </div>
              {/* Web3 chip */}
              <div className="absolute bottom-5 right-5 bg-black/60 backdrop-blur-md rounded-2xl px-4 py-2 border border-white/5">
                <div className="text-[8px] font-black uppercase tracking-widest text-white/30 mb-0.5">Blockchain Verified</div>
                <div className="text-xs font-black text-emerald-400">🐐 GTX · GVC Token</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── The Problem ── */}
      <section className="reveal-section py-24 px-6 border-y border-white/5 bg-white/[0.01]">
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <Badge className="bg-emerald-500/10 text-emerald-400 border-emerald-500/20 text-[10px] tracking-widest uppercase">The Challenge</Badge>
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter">
              Livestock meets <br />
              <span className="text-transparent bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text">Blockchain.</span>
            </h2>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Goat farming is a $34B global industry with massive ROI potential — but inaccessible 
              to retail investors. GoatX needed a platform that made fractional livestock ownership 
              feel <em className="text-white/70">credible, transparent, and irresistible</em> to a Web3 audience that's seen every rug pull.
            </p>
          </div>

          {/* Problem cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                icon: Shield,
                title: 'Trust Deficit',
                body: 'Web3 investors are hyper-skeptical of real-world asset claims. The design had to make farm verification feel bulletproof.',
                color: 'emerald',
              },
              {
                icon: Eye,
                title: 'Complexity Barrier',
                body: 'Dual-token economics (GTX + GVC), NFT tiers, and breeding models needed to feel intuitive — not intimidating.',
                color: 'cyan',
              },
              {
                icon: Globe,
                title: 'Novelty Gap',
                body: 'No existing DeFi platform had merged livestock farming with NFTs. The design language had to invent its own visual category.',
                color: 'violet',
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

      {/* ── NFT Tiers ── */}
      <section className="reveal-section py-24 px-6">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <Badge className="bg-emerald-500/10 text-emerald-400 border-emerald-500/20 text-[10px] tracking-widest uppercase">NFT Architecture</Badge>
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter">The Goat Ecosystem.</h2>
            <p className="text-gray-400 max-w-xl mx-auto text-sm leading-relaxed">
              Four tiered NFTs mapped to the biological lifecycle of the animal — 
              from fast-growth kid to rare premium bloodline.
            </p>
          </div>

          <div className="nft-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {nftTiers.map((nft) => (
              <div
                key={nft.tier}
                className={`nft-card relative p-6 rounded-[32px] border transition-all duration-300 group cursor-default
                  ${nft.highlight
                    ? 'bg-gradient-to-b from-emerald-500/10 to-transparent border-emerald-500/30 shadow-[0_0_40px_rgba(16,185,129,0.10)]'
                    : 'bg-white/[0.02] border-white/5 hover:border-emerald-500/15'
                  }`}
              >
                {nft.highlight && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="text-[9px] font-black uppercase tracking-widest bg-emerald-500 text-black px-3 py-1 rounded-full">Most Popular</span>
                  </div>
                )}

                {/* Goat emoji as icon placeholder */}
                <div className="w-16 h-16 rounded-2xl bg-[#030C1A] border border-white/5 flex items-center justify-center text-3xl mb-5 group-hover:scale-110 transition-transform">
                  🐐
                </div>

                <div className="text-[9px] font-black uppercase tracking-widest text-emerald-400 mb-1">{nft.badge}</div>
                <h3 className="text-lg font-black mb-1">{nft.tier}</h3>
                <p className="text-[10px] text-white/30 font-bold uppercase tracking-wider mb-3">{nft.age}</p>
                <p className="text-sm text-gray-400 leading-relaxed mb-5">{nft.desc}</p>

                <div className="border-t border-white/5 pt-4">
                  <div className="text-[9px] font-black uppercase tracking-widest text-white/30 mb-1">Est. Annual Returns</div>
                  <div className="text-2xl font-black text-transparent bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text">{nft.returns}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Design Psychology ── */}
      <section className="reveal-section py-24 px-6 border-y border-white/5 bg-white/[0.01]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-10">
            <div className="space-y-4">
              <Badge className="bg-emerald-500/10 text-emerald-400 border-emerald-500/20 text-[10px] tracking-widest uppercase">Design Psychology</Badge>
              <h2 className="text-5xl md:text-6xl font-black tracking-tighter leading-[0.9]">
                Designing for <br />
                <span className="italic">Radical Trust.</span>
              </h2>
            </div>

            <div className="space-y-8">
              {[
                {
                  icon: Brain,
                  title: 'Trust Architecture',
                  body: 'Live CCTV feeds, blockchain-verified cattle tagging, and monthly vet inspection photos were surfaced prominently in the UI — making the "real goat" claim undeniable.',
                  color: 'emerald',
                },
                {
                  icon: Zap,
                  title: 'Novelty Effect',
                  body: 'By leaning into futuristic goat illustrations with holographic overlays, we made an unusual asset class feel premium and forward-thinking — not gimmicky.',
                  color: 'cyan',
                },
                {
                  icon: Cpu,
                  title: 'Complexity Reduction',
                  body: 'Dual-token economics, breeding models, and NFT tiers were visualized through clean infographics and circular charts — turning intimidating data into compelling narrative.',
                  color: 'violet',
                },
                {
                  icon: Lock,
                  title: 'Social Proof Layering',
                  body: 'Verified farm partners, DAO voting participation counters, and on-chain transaction stats were embedded throughout to provide continuous trust reassurance.',
                  color: 'emerald',
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

          {/* Dual token visualization */}
          <div className="relative">
            <div className="absolute -inset-4 bg-emerald-500/5 blur-3xl rounded-[80px]" />
            <div className="relative rounded-[48px] overflow-hidden border border-white/5 bg-[#030C1A] p-8 space-y-6">
              <div className="text-[10px] font-black uppercase tracking-widest text-emerald-400/60">Dual-Token Economy</div>

              {/* GTX Token */}
              <div className="p-6 rounded-[28px] bg-emerald-500/5 border border-emerald-500/15 space-y-3">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-[9px] font-black uppercase tracking-widest text-emerald-400/60">Governance Token</div>
                    <div className="text-2xl font-black text-emerald-400">GTX</div>
                  </div>
                  <div className="w-12 h-12 rounded-2xl bg-emerald-500/15 flex items-center justify-center text-xl">🏛️</div>
                </div>
                <p className="text-xs text-gray-400 leading-relaxed">DAO voting rights · Treasury control · Staking rewards</p>
                <div className="w-full h-1.5 rounded-full bg-white/5">
                  <div className="h-full w-3/5 rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500" />
                </div>
                <div className="text-[9px] text-white/30 font-bold">60% allocated to community</div>
              </div>

              {/* GVC Token */}
              <div className="p-6 rounded-[28px] bg-violet-500/5 border border-violet-500/15 space-y-3">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-[9px] font-black uppercase tracking-widest text-violet-400/60">Utility Token</div>
                    <div className="text-2xl font-black text-violet-400">GVC</div>
                  </div>
                  <div className="w-12 h-12 rounded-2xl bg-violet-500/15 flex items-center justify-center text-xl">🐐</div>
                </div>
                <p className="text-xs text-gray-400 leading-relaxed">NFT minting · Marketplace trading · Breeding fees</p>
                <div className="w-full h-1.5 rounded-full bg-white/5">
                  <div className="h-full w-4/5 rounded-full bg-gradient-to-r from-violet-500 to-pink-500" />
                </div>
                <div className="text-[9px] text-white/30 font-bold">80% in active circulation</div>
              </div>

              {/* Live asset */}
              <div className="flex items-center gap-3 p-4 rounded-2xl bg-white/[0.03] border border-white/5">
                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse flex-shrink-0" />
                <div>
                  <div className="text-[9px] font-black uppercase tracking-widest text-white/30">Live Asset Verification</div>
                  <div className="text-xs font-bold text-white/60">CCTV · Vet Records · Blockchain Tags</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Roadmap ── */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto space-y-14">
          <div className="text-center space-y-3">
            <Badge className="bg-emerald-500/10 text-emerald-400 border-emerald-500/20 text-[10px] tracking-widest uppercase">Roadmap to Revolution</Badge>
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter">4 Phases. 1 Vision.</h2>
            <p className="text-gray-400 max-w-xl mx-auto text-sm leading-relaxed">
              A clear path from farm setup to global expansion — each phase building on the last.
            </p>
          </div>

          <div className="roadmap-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {roadmap.map(({ phase, title, items }, i) => (
              <div
                key={phase}
                className="phase-card relative flex flex-col p-7 rounded-[32px] bg-white/[0.025] border border-white/5 hover:border-emerald-500/20 hover:bg-white/[0.04] transition-all duration-500 group overflow-hidden"
              >
                {/* Ghost number — inline style to avoid Tailwind purge issues */}
                <div
                  className="absolute -bottom-4 -right-2 text-[90px] font-black leading-none select-none pointer-events-none"
                  style={{ color: 'rgba(255,255,255,0.025)' }}
                >
                  {phase}
                </div>

                {/* Phase dot + label */}
                <div className="relative flex items-center gap-3 mb-5">
                  <div className="w-8 h-8 rounded-full bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center flex-shrink-0 group-hover:bg-emerald-500/25 transition-all">
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                  </div>
                  <span className="text-[9px] font-black uppercase tracking-widest text-emerald-400">Phase {phase}</span>
                </div>

                <h3 className="relative text-xl font-black mb-4 text-white">{title}</h3>

                <ul className="relative space-y-2.5 flex-1">
                  {items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-gray-400">
                      <span className="text-emerald-500 mt-0.5 flex-shrink-0 text-xs">▸</span>
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="relative mt-6 pt-4 border-t border-white/5">
                  <div className="text-[8px] font-black uppercase tracking-widest text-white/20">Step {i + 1} of 4</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Impact Stats ── */}
      <section className="reveal-section py-24 px-6 border-y border-white/5 bg-white/[0.01]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14 space-y-3">
            <Badge className="bg-emerald-500/10 text-emerald-400 border-emerald-500/20 text-[10px] tracking-widest uppercase">Design Deliverables</Badge>
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter">What was designed.</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {[
              { value: '1440px', label: 'Full Width Design', sub: 'Desktop-optimized layout' },
              { value: '4 NFT', label: 'Tier Architecture', sub: 'Complete token ecosystem' },
              { value: '4 Phase', label: 'Roadmap', sub: 'Illustrated milestones' },
              { value: '2 Token', label: 'Economy UI', sub: 'GTX + GVC visualization' },
            ].map(({ value, label, sub }) => (
              <div key={label} className="p-8 rounded-[36px] bg-white/[0.025] border border-white/5 hover:border-emerald-500/15 transition-all duration-300 group text-center">
                <div className="text-3xl md:text-4xl font-black text-transparent bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text mb-2 group-hover:scale-105 transition-transform">{value}</div>
                <div className="text-[9px] font-black uppercase tracking-widest text-emerald-400 mb-1">{label}</div>
                <div className="text-xs text-gray-500">{sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="reveal-section py-32 px-6">
        <div className="max-w-5xl mx-auto relative overflow-hidden rounded-[80px] border border-emerald-500/15 bg-gradient-to-br from-emerald-500/8 via-cyan-500/4 to-violet-500/5 p-16 md:p-24 text-center space-y-10 group">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(16,185,129,0.07),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-emerald-400/50 to-transparent" />

          <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-none relative z-10">
            Ready to build <br />
            <span className="text-transparent bg-gradient-to-r from-emerald-400 via-cyan-400 to-emerald-300 bg-clip-text">the future?</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-xl mx-auto font-medium relative z-10">
            From Web3 to PropTech — I design psychology-led platforms that earn trust,
            reduce friction, and drive real adoption.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
            <Button
              variant="premium"
              size="xl"
              className="rounded-full px-14 h-16 text-base font-black bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-400 hover:to-cyan-400 border-none shadow-[0_0_60px_rgba(16,185,129,0.3)]"
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
        <p className="text-[10px] font-black uppercase tracking-[1em] text-white/15">
          © 2024 MD AQIL · BUILT FOR SCALE, DESIGNED FOR HUMANS.
        </p>
      </footer>
    </div>
  );
};

export default GoatXCaseStudy;
