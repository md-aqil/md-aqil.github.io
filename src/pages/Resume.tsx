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
    document.title = 'Resume | Md Aqil - Senior UI/UX Designer & Developer';
  }, []);

  const handleDownload = () => {
    window.print();
  };

  const experience = [
    {
      company: 'DJT Corporation & Investments',
      role: 'Senior UI/UX Designer',
      period: 'July 2021 — Present',
      location: 'Noida, India',
      points: [
        'Implemented design system resulting in 20% conversion uplift.',
        'Conducted UX audits identifying key pain points for major apps.',
        'Designed mobile apps with 10k+ first-month downloads.',
        'Secured ₹500,000+ funding via high-fidelity prototyping.'
      ]
    },
    {
      company: 'Bigly.io',
      role: 'Lead UI/UX Designer & Developer',
      period: 'Nov 2017 — Sept 2020',
      points: [
        'Increased user engagement by 30% through intuitive, psychology-led design.',
        'Reduced user errors by 20% by incorporating meticulous user feedback loops.'
      ]
    },
    {
      company: 'Edunuts.com',
      role: 'UI Developer',
      period: 'Jan 2015 — Nov 2017',
      points: [
        'Focused on highly responsive, performance-optimized interfaces.',
        'Reduced page load times by 30% through advanced frontend architecture.'
      ]
    }
  ];

  const projects = [
    { name: 'Deerika Grocery App', result: '+284% Orders' },
    { name: 'Change Captain', result: '+50% Savings' },
    { name: 'The Velvet Reel', result: '+142% Growth' },
    { name: 'GoatX.io', result: 'Web3 DeFi' },
    { name: 'Houssy.in', result: '+320% Inquiries' },
    { name: 'Exotic Store', result: 'Brand Identity' }
  ];

  return (
    <div className="min-h-screen bg-[#0A0C12] selection:bg-amber-400 selection:text-black">
      {/* WEB UI VERSION - HIDDEN ON PRINT */}
      <div className="print:hidden text-white">
        <Navigation />
        
        <main className="max-w-6xl mx-auto pt-32 pb-20 px-6 lg:px-12">
          {/* Actions bar */}
          <div className="flex justify-between items-center mb-12 group">
            <div className="flex items-center gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-amber-400">
                Resume — 2026 Edition
              </span>
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
                  <h2 className="text-3xl font-black italic tracking-tight uppercase">Selected Experience</h2>
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
            <h2 className="text-lg font-bold uppercase border-b border-gray-300 mb-3">Work Experience</h2>
            <div className="space-y-6">
              {experience.map((exp, i) => (
                <div key={i}>
                  <div className="flex justify-between items-baseline mb-1">
                    <h3 className="font-bold text-md">{exp.company}</h3>
                    <span className="text-sm italic">{exp.period}</span>
                  </div>
                  <p className="font-bold text-sm text-gray-700 mb-2">{exp.role}</p>
                  <ul className="list-disc ml-5 text-sm space-y-1">
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
                <p><strong>Design:</strong> Figma, Adobe XD, Photoshop, Illustrator, Prototyping</p>
                <p><strong>Development:</strong> React, Next.js, TypeScript, Tailwind CSS, GSAP</p>
                <p><strong>AI:</strong> LLM Vibe Coding, AI Agent Research, GPT Automation</p>
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
