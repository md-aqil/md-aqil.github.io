import { useEffect } from 'react';
import Navigation from '@/components/Navigation';
import { Button } from '@/components/ui/button';
import { 
  Download, 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Github, 
  Globe, 
  Briefcase, 
  GraduationCap, 
  Terminal, 
  Sparkles,
  ExternalLink,
  Award,
  Zap
} from 'lucide-react';

const Resume = () => {
  useEffect(() => {
    document.title = 'Resume | Md Aqil - Senior Product Design Engineer';
  }, []);

  const handleDownload = () => {
    const doc = new jsPDF();
    doc.text('Md Aqil - Senior Product Design Engineer', 10, 10);
    doc.text('Experience:', 10, 20);
    doc.text('Company: DJT Corporation & Investments', 10, 30);
    doc.text('Role: Senior UI/UX Designer | Period: July 2021 - Dec 2025', 10, 40);
    doc.text('Achievements:', 10, 50);
    doc.text(' - Implemented design system resulting in 20% conversion uplift.', 10, 60);
    doc.text(' - Conducted UX audits identifying key pain points.', 10, 70);
    doc.text(' - Designed mobile apps with 10k+ downloads.', 10, 80);
    doc.save('Md_Aqil_Resume.pdf');
  };

  const experience = [
    {
      company: 'DJT Corporation & Investments',
      role: 'Senior Product Design Engineer',
      period: 'July 2021 — Dec 2025',
      location: 'Noida, India',
      points: [
        'Owned design system end-to-end: Figma → React/TypeScript/Tailwind → Storybook (code-as-truth architecture).',
        'Shipped 50+ production components with Radix UI, Framer Motion, design token theming — 40% faster feature delivery.',
        'Daily AI-assisted workflow: Claude Code for component generation, token sync automation, PR reviews, design-to-code pipeline.',
        'Designed AND built complex B2B SaaS interfaces: ROI calculators, data dashboards, automation workflows.',
        'Global remote: 15+ countries served, async-first, cross-timezone collaboration (US/EU/Asia).'
      ]
    },
    {
      company: 'Bigly.io',
      role: 'Lead Product Design Engineer',
      period: 'Nov 2017 — Sept 2020',
      points: [
        'Increased user engagement by 30% through intuitive, psychology-led design.',
        'Reduced user errors by 20% by incorporating meticulous user feedback loops.',
        'Designed and built production React components, design systems, and frontend architecture.'
      ]
    },
    {
      company: 'Edunuts.com',
      role: 'Frontend Engineer (Design Systems)',
      period: 'Jan 2015 — Nov 2017',
      points: [
        'Focused on highly responsive, performance-optimized interfaces.',
        'Reduced page load times by 30% through advanced frontend architecture.',
        'Built reusable component libraries and design token systems.'
      ]
    }
  ];

  const contractualExperience = [
    {
      company: 'Change Captain',
      role: 'Product Design Engineer (Contract)',
      period: '2023 — 2024',
      points: [
        'Designed and built a code-as-truth automation platform eliminating manual R&D tax tagging.',
        'Developed complex interactive ROI calculators in React/TypeScript for finance teams.',
        'Shipped production React components, design tokens, and automated workflows end-to-end.'
      ]
    },
    {
      company: 'Deerika Grocery',
      role: 'UX Consultant (Contract)',
      period: '2022 — 2023',
      points: [
        'Redesigned end-to-end user journey resulting in 284% order increase.',
        'Implemented membership programs with instant cashback psychological triggers.'
      ]
    },
    {
      company: 'GoatX.io',
      role: 'Product Design Engineer (Contract)',
      period: '2023',
      points: [
        'Designed and built full Web3 landing page and NFT tier architecture for DeFi farming.',
        'Created live asset verification UI and interactive roadmap in React/TypeScript.',
        'Shipped production components with wallet integration and blockchain data visualization.'
      ]
    },
    {
      company: 'Houssy.in',
      role: 'UX Designer (Freelance)',
      period: '2023',
      points: [
        'Designed psychology-led property discovery platform with smart filters.',
        'Increased lead inquiries by 320% through trust signaling and choice architecture.'
      ]
    },
    {
      company: 'IES Gate Academy',
      role: 'Full Stack Designer (Contract)',
      period: '2024',
      points: [
        'Modernized engineering coaching portal with live classes and test series.',
        'Built high-conversion landing pages resulting in pan-India reach expansion.'
      ]
    },
    {
      company: 'The Velvet Reel',
      role: 'UI/UX Designer (Contract)',
      period: '2023',
      points: [
        'Created a premium marketplace for actors and models with automated verification.',
        'Reduced talent onboarding friction by 60% through streamlined UX.'
      ]
    },
    {
      company: 'Stay Clueless',
      role: 'E-commerce Designer (Contract)',
      period: '2022',
      points: [
        'Transformed streetwear brand into a lifestyle movement with interactive collection reveals.',
        'Achieved +45% conversion uplift through mobile-native shopping experience.'
      ]
    },
    {
      company: 'TPM Consulting',
      role: 'WordPress Expert (Contract)',
      period: '2022',
      points: [
        'Developed a high-performance custom WordPress theme for a premier trade remedies firm.',
        'Optimized site architecture for SEO and complex legal content management.'
      ]
    },
    {
      company: 'Havenly',
      role: 'UI/UX Designer (Contract)',
      period: '2024',
      points: [
        'Designed a high-empathy mental health app with anonymous feeds and private journaling.',
        'Implemented calming color psychology and emotional regulation UI patterns.'
      ]
    },
    {
      company: 'The Pot Dealer',
      role: 'E-commerce Specialist (Contract)',
      period: '2022',
      points: [
        'Built a premium plant e-commerce storefront focusing on biophilic design and lifestyle integration.',
        'Optimized user flow for curated plant collections and corporate gifting modules.'
      ]
    },
    {
      company: 'Dizilight India',
      role: 'UI/UX Consultant (Contract)',
      period: 'Oct 2023 — March 2026',
      points: [
        'Lead designer for premium clients including Avika Creation (Fashion Boutique) and Magnificence Media (Full-service Marketing Agency).',
        'Designed high-fidelity UI systems, advertising portfolios, and cinematic brand identities.'
      ]
    },
    {
      company: 'Pirafy',
      role: 'Lead Product Designer (Contract)',
      period: '2024',
      points: [
        'Designed an enterprise-grade cybersecurity dashboard for intellectual property protection.',
        'Architected real-time monitoring interfaces and automated threat enforcement workflows.'
      ]
    },
    {
      company: 'SEO-Genie',
      role: 'Product Designer (Contract)',
      period: '2024',
      points: [
        'Designed an AI-powered SEO automation suite for enterprise marketing workflows.',
        'Developed predictive SEO scoring dashboards and real-time content intelligence interfaces.'
      ]
    },
    {
      company: 'Wroffer',
      role: 'UX Architect (Contract)',
      period: '2024',
      points: [
        'Architected a low-code WhatsApp automation engine with drag-and-drop flow building capabilities.',
        'Implemented defensive routing and interactive menu mapping for high-scale conversational commerce.'
      ]
    }
  ];

  const projects = [
    { name: 'Deerika Grocery App', result: '+284% Orders' },
    { name: 'Change Captain', result: '+50% Savings' },
    { name: 'The Velvet Reel', result: '+142% Growth' },
    { name: 'GoatX.io', result: 'Web3 DeFi' },
    { name: 'Houssy.in', result: '+320% Inquiries' },
    { name: 'Havenly Wellness', result: 'Empathy UX' },
    { name: 'The Pot Dealer', result: '+40% Sales' },
    { name: 'Magnificence Media', result: 'Brand Identity' },
    { name: 'Pirafy Security', result: 'Security UX' },
    { name: 'SEO-Genie', result: 'AI SEO Automation' },
    { name: 'Wroffer.io', result: 'WhatsApp Automation' }
  ];

  return (
    <div className="min-h-screen bg-[#0A0C12] selection:bg-amber-400 selection:text-black">
      {/* WEB UI VERSION - HIDDEN ON PRINT */}
      <div className="print:hidden text-white">
        <Navigation />
        
        <main className="max-w-6xl mx-auto pt-32 pb-20 px-6 lg:px-12">
          {/* Actions bar */}
          <div className="flex justify-between items-center mb-12 group">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-amber-400">
                  Resume — 2026 Edition
                </span>
              </div>
              <a href="/resume-enterprise" className="text-[10px] font-bold uppercase tracking-widest text-white/30 hover:text-amber-400 transition-colors border-l border-white/10 pl-6">
                Switch to Enterprise CV
              </a>
            </div>
            <Button 
              onClick={handleDownload}
              variant="outline" 
              className="rounded-full border-white/10 bg-white/5 hover:bg-amber-400 hover:text-black transition-all group"
            >
              <Download className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
              <span className="font-bold text-[10px] uppercase tracking-widest">Download PDF</span>
            </Button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* LEFT COLUMN: Main Content */}
            <div className="lg:col-span-8 space-y-16">
              <header className="space-y-6">
                <div className="space-y-2">
                  <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-none uppercase italic">
                    Md <span className="text-amber-400 not-italic">Aqil</span>
                  </h1>
                  <p className="text-xl md:text-2xl font-bold text-white/40 tracking-tight flex items-center gap-3">
                    Senior UI/UX Designer & Developer
                  </p>
                </div>
                <p className="text-lg text-white/60 max-w-2xl leading-relaxed font-medium">
                  I design beautiful and user-friendly digital products, including websites, mobile apps, and software. 
                  With 8+ years of experience, I blend behavioral psychology with conversion-focused interfaces.
                </p>
              </header>

              <section className="space-y-8">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-2xl bg-amber-400/10 border border-amber-400/20 text-amber-400">
                    <Sparkles size={24} />
                  </div>
                  <h2 className="text-3xl font-black italic tracking-tight uppercase underline decoration-amber-400/30 decoration-4 underline-offset-8">
                    AI & Innovation
                  </h2>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-6 rounded-[2rem] bg-gradient-to-br from-white/[0.03] to-transparent border border-white/5">
                    <h3 className="text-primary font-bold text-sm tracking-widest uppercase mb-3 flex items-center gap-2">
                      <Terminal size={14} className="text-amber-400" />
                      LLM Vibe Coding
                    </h3>
                    <p className="text-white/50 text-sm leading-relaxed">
                      Expertise in leveraging Large Language Models for automated UI generation, component building, 
                      and rapid prototyping.
                    </p>
                  </div>
                  <div className="p-6 rounded-[2rem] bg-gradient-to-br from-white/[0.03] to-transparent border border-white/5">
                    <h3 className="text-primary font-bold text-sm tracking-widest uppercase mb-3 flex items-center gap-2">
                      <Zap size={14} className="text-amber-400" />
                      AI-Driven Research
                    </h3>
                    <p className="text-white/50 text-sm leading-relaxed">
                      Utilizing AI agents for user research analysis, usability testing simulation, 
                      and predictive design patterns.
                    </p>
                  </div>
                </div>
              </section>

              <section className="space-y-12">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-2xl bg-white/5 border border-white/10">
                    <Briefcase size={24} className="text-white/60" />
                  </div>
                  <h2 className="text-3xl font-black italic tracking-tight uppercase">Office Work</h2>
                </div>

                <div className="space-y-12 relative border-l border-white/5 pl-8 ml-6">
                  {experience.map((exp, i) => (
                    <div key={i} className="relative group">
                      <div className="absolute -left-[45px] top-0 w-[26px] h-[26px] rounded-full bg-[#0A0C12] border-2 border-amber-400 flex items-center justify-center">
                        <div className="w-2 h-2 rounded-full bg-amber-400" />
                      </div>
                      <div className="space-y-4">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                          <h3 className="text-2xl font-black tracking-tight group-hover:text-amber-400 transition-colors uppercase italic">{exp.company}</h3>
                          <span className="text-[10px] font-black uppercase tracking-widest text-white/30 px-3 py-1 rounded-full border border-white/10">{exp.period}</span>
                        </div>
                        <p className="text-amber-400 font-bold text-xs uppercase tracking-widest">{exp.role}</p>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-white/50 text-sm leading-relaxed">
                          {exp.points.map((p, j) => (
                            <li key={j} className="flex gap-3">
                              <span className="text-amber-400 font-bold">»</span>{p}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <section className="space-y-12">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-2xl bg-white/5 border border-white/10">
                    <Zap size={24} className="text-white/60" />
                  </div>
                  <h2 className="text-3xl font-black italic tracking-tight uppercase">Contractual Works</h2>
                </div>

                <div className="space-y-12 relative border-l border-white/5 pl-8 ml-6">
                  {contractualExperience.map((exp, i) => (
                    <div key={i} className="relative group">
                      <div className="absolute -left-[45px] top-0 w-[26px] h-[26px] rounded-full bg-[#0A0C12] border-2 border-white/20 flex items-center justify-center group-hover:border-amber-400 transition-colors">
                        <div className="w-2 h-2 rounded-full bg-white/20 group-hover:bg-amber-400 transition-colors" />
                      </div>
                      <div className="space-y-4">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                          <h3 className="text-xl font-black tracking-tight group-hover:text-amber-400 transition-colors uppercase italic">{exp.company}</h3>
                          <span className="text-[10px] font-black uppercase tracking-widest text-white/30">{exp.period}</span>
                        </div>
                        <p className="text-white/60 font-bold text-[10px] uppercase tracking-widest">{exp.role}</p>
                        <ul className="space-y-2 text-white/40 text-[13px] leading-relaxed">
                          {exp.points.map((p, j) => (
                            <li key={j} className="flex gap-3">
                              <span className="text-amber-400/50 font-bold">»</span>{p}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            <div className="lg:col-span-4 space-y-12">
              <div className="aspect-square rounded-[3rem] overflow-hidden border border-white/5 bg-white/5 relative group">
                <img src="https://md-aqil.github.io/md-aqil/img/about-me-img.png" alt="Md Aqil" className="w-full h-full object-cover filter grayscale" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0C12] to-transparent opacity-60" />
              </div>

              <section className="p-8 rounded-[3rem] bg-white/5 border border-white/5 space-y-6">
                <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-white/25">Contact</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4 text-white/60"><Mail size={16} /><span className="text-sm font-bold">aqilali381@gmail.com</span></div>
                  <div className="flex items-center gap-4 text-white/60"><Phone size={16} /><span className="text-sm font-bold">+91 7210562014</span></div>
                  <div className="flex items-start gap-4 text-white/60"><MapPin size={16} /><span className="text-sm font-medium">Noida, Uttar Pradesh, India 201304</span></div>
                </div>
                <div className="flex gap-4 pt-4 border-t border-white/5">
                  {[Linkedin, Github, Globe].map((Icon, i) => (
                    <div key={i} className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white/60"><Icon size={18} /></div>
                  ))}
                </div>
              </section>

              <section className="space-y-8">
                <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-white/25">Hard Skills</h3>
                <div className="space-y-4">
                  {['Design', 'Development'].map(cat => (
                    <div key={cat}>
                      <h4 className="text-[10px] font-black uppercase tracking-widest text-amber-400 mb-2">{cat}</h4>
                      <div className="flex flex-wrap gap-2">
                        {(cat === 'Design' ? ['Figma', 'Adobe XD', 'Photoshop'] : ['React', 'Next.js', 'TS', 'Tailwind']).map(s => (
                          <span key={s} className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/5 text-[10px] font-bold text-white/70">{s}</span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Education */}
              <section className="space-y-6">
                <div className="flex items-center gap-3">
                  <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-white/25">Education</h3>
                  <div className="h-px flex-1 bg-white/10" />
                </div>
                <div className="p-6 rounded-[2rem] bg-amber-400/5 border border-amber-400/10 space-y-3">
                  <GraduationCap className="text-amber-400" size={24} />
                  <div className="space-y-1">
                    <p className="text-[10px] font-black uppercase tracking-widest text-amber-400/60">Bachelor of Arts</p>
                    <p className="text-sm font-bold leading-tight">Subharti University, Meerut</p>
                  </div>
                  <p className="text-[11px] text-white/40 leading-relaxed font-bold italic">
                    Graduated: 2024
                  </p>
                </div>
              </section>
            </div>
          </div>

          <section className="mt-24 space-y-12">
            <h2 className="text-3xl font-black italic tracking-tight uppercase underline decoration-amber-400/30 decoration-4 underline-offset-8">Selected Case Studies</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {projects.map((p, i) => (
                <div key={i} className="p-6 rounded-[2rem] bg-white/5 border border-white/5 space-y-2">
                  <h3 className="text-lg font-bold text-white italic">{p.name}</h3>
                  <p className="text-amber-400 font-black uppercase tracking-widest text-[10px]">{p.result}</p>
                </div>
              ))}
            </div>
          </section>
        </main>
      </div>

      {/* PRINT-ONLY VERSION - PERFECT WORD-STYLE CV */}
      <div className="hidden print:block bg-white text-black p-0 m-0 font-serif leading-tight">
        <div className="max-w-[800px] mx-auto py-10">
          {/* Header */}
          <div className="text-center border-b-2 border-black pb-4 mb-6">
            <h1 className="text-4xl font-bold uppercase tracking-tight mb-1">Md Aqil</h1>
            <p className="text-xl font-bold text-gray-700 mb-2">Senior UI/UX Designer & Developer</p>
            <div className="text-sm font-medium flex justify-center gap-4 text-gray-600">
              <span>aqilali381@gmail.com</span>
              <span>|</span>
              <span>+91 7210562014</span>
              <span>|</span>
              <span>Noida, India</span>
            </div>
          </div>

          {/* Profile */}
          <div className="mb-8">
            <h2 className="text-lg font-bold uppercase border-b border-gray-300 mb-2">Professional Summary</h2>
            <p className="text-sm leading-relaxed">
              Senior UI/UX Designer & Developer with 8+ years of experience in designing high-converting digital products. 
              Specializing in blending behavioral psychology with modern design systems. Expert in LLM Vibe Coding 
              and AI-driven design research for rapid prototyping and conversion optimization.
            </p>
          </div>

          {/* Experience */}
          <div className="mb-8">
            <h2 className="text-lg font-bold uppercase border-b border-gray-300 mb-3">Professional Experience (Office)</h2>
            <div className="space-y-4">
              {experience.map((exp, i) => (
                <div key={i}>
                  <div className="flex justify-between items-baseline mb-0.5">
                    <h3 className="font-bold text-sm uppercase">{exp.company}</h3>
                    <span className="text-[11px] italic">{exp.period}</span>
                  </div>
                  <p className="font-bold text-[11px] text-gray-700 mb-1">{exp.role}</p>
                  <ul className="list-disc ml-5 text-[11px] space-y-0.5">
                    {exp.points.map((p, j) => <li key={j}>{p}</li>)}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Contractual Work */}
          <div className="mb-8">
            <h2 className="text-lg font-bold uppercase border-b border-gray-300 mb-3">Selected Contractual Works</h2>
            <div className="grid grid-cols-2 gap-x-8 gap-y-4">
              {contractualExperience.map((exp, i) => (
                <div key={i}>
                  <div className="flex justify-between items-baseline mb-0.5">
                    <h3 className="font-bold text-[11px] uppercase">{exp.company}</h3>
                    <span className="text-[9px] italic">{exp.period}</span>
                  </div>
                  <p className="font-bold text-[9px] text-gray-600 mb-1">{exp.role}</p>
                  <ul className="list-disc ml-4 text-[9px] space-y-0.5">
                    {exp.points.map((p, j) => <li key={j}>{p}</li>)}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-2 gap-8 mb-8">
            <div>
              <h2 className="text-lg font-bold uppercase border-b border-gray-300 mb-2">Core Skills</h2>
              <div className="text-sm space-y-1">
                <p><strong>Design:</strong> Figma, Adobe XD, Photoshop, Illustrator, Prototyping, Design Systems in Code</p>
                <p><strong>Development:</strong> React, Next.js, TypeScript, Tailwind CSS, GSAP, Storybook, Framer Motion, Radix UI</p>
                <p><strong>AI:</strong> LLM Vibe Coding, AI Agent Research, GPT Automation, Cursor, Claude Code</p>
                <p><strong>Design Engineering:</strong> Component Architecture, Design Tokens, Design-System-as-Code, Figma→Code Workflow</p>
              </div>
            </div>
            <div>
              <h2 className="text-lg font-bold uppercase border-b border-gray-300 mb-2">Education</h2>
              <p className="text-sm font-bold">Bachelor of Arts</p>
              <p className="text-sm text-gray-600">Subharti University, Meerut</p>
              <p className="text-sm text-gray-500 font-bold">Graduated: 2024</p>
            </div>
          </div>

          {/* Case Studies */}
          <div>
            <h2 className="text-lg font-bold uppercase border-b border-gray-300 mb-3">Key Projects & Impact</h2>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
              {projects.map((p, i) => (
                <div key={i} className="flex justify-between border-b border-gray-100 pb-1">
                  <span>{p.name}</span>
                  <span className="font-bold">{p.result}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 text-center text-[10px] text-gray-400 italic">
            Portfolio: md-aqil.github.io | LinkedIn: md-aquil-09430a109
          </div>
        </div>
      </div>

      <style>{`
        @media print {
          @page { margin: 0.5cm; size: A4; }
          body { background: white !important; }
          .min-h-screen { min-height: 0 !important; background: white !important; }
        }
      `}</style>
    </div>
  );
};

export default Resume;
