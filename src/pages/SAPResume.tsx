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
  Zap,
  Layout,
  FileSearch,
  Users
} from 'lucide-react';

const SAPResume = () => {
  useEffect(() => {
    document.title = 'Tailored Resume | Md Aqil - Enterprise UX Specialist';
  }, []);

  const handleDownload = () => {
    window.print();
  };

  const experience = [
    {
      company: 'DJT Corporation & Investments',
      role: 'Senior UI/UX Designer (Enterprise Focus)',
      period: 'July 2021 — Dec 2025',
      location: 'Noida, India',
      points: [
        'Lead the conceptualization and design of end-to-end user experiences for complex investment portals using Fiori-aligned design patterns.',
        'Create high-fidelity mockups, journey maps, and service blueprints to align product direction across distributed engineering teams.',
        'Drive design consistency by building and maintaining advanced Figma component libraries and reusable design systems.',
        'Facilitate design workshops and discovery sessions with key stakeholders to frame and solve complex business problems.',
        'Balanced accessibility and technical feasibility in enterprise environments, resulting in a 20% increase in workflow efficiency.'
      ]
    },
    {
      company: 'Bigly.io',
      role: 'Lead UI/UX Designer & Developer',
      period: 'Nov 2017 — Sept 2020',
      points: [
        'Designed B2B SaaS interfaces focusing on information architecture and complex data-driven interaction models.',
        'Spearheaded user research activities (qualitative & quantitative) to refine product roadmaps and user journeys.',
        'Collaborated closely with product managers and developers in an agile environment to own UX milestones and deliverables.'
      ]
    },
    {
      company: 'Edunuts.com',
      role: 'UI Developer',
      period: 'Jan 2015 — Nov 2017',
      points: [
        'Optimized frontend performance for large-scale web applications, reducing load times by 30%.',
        'Bridged the gap between design and code, ensuring pixel-perfect implementation of complex visual designs.'
      ]
    }
  ];

  const enterpriseProjects = [
    {
      company: 'Dizilight India',
      role: 'UI/UX Consultant (Contract)',
      period: 'Oct 2023 — March 2026',
      points: [
        'Lead designer for enterprise clients including Avika Creation and Magnificence Media.',
        'Architected high-fidelity UI systems and digital ecosystems for premium marketing and retail brands.'
      ]
    },
    {
      company: 'Wroffer Automation Studio',
      role: 'UX Architect (Contract)',
      period: '2024',
      points: [
        'Architected a low-code visual automation engine for conversational commerce.',
        'Designed defensive routing systems and interactive UI nodes for complex flow building.'
      ]
    },
    {
      company: 'SEO-Genie',
      role: 'Product Designer (Contract)',
      period: '2024',
      points: [
        'Designed an AI-powered SEO automation platform for enterprise-scale keyword research and content intelligence.',
        'Bridged the gap between technical SEO requirements and user-friendly predictive dashboards.'
      ]
    },
    {
      company: 'Pirafy',
      role: 'Lead Product Designer (Contract)',
      period: '2024',
      points: [
        'Designed an enterprise-grade digital security dashboard for IP protection following high-stakes interaction models.',
        'Implemented real-time monitoring interfaces and automated enforcement workflows for complex B2B environments.'
      ]
    },
    {
      company: 'Change Captain',
      role: 'Product Designer (Contract)',
      period: '2023 — 2024',
      points: [
        'Architected a B2B automation platform for R&D tax compliance, technical feasibility, and business requirements.',
        'Developed interactive ROI calculators and financial visualization tools for high-level stakeholders.'
      ]
    },
    {
      company: 'TPM Consulting',
      role: 'Enterprise Web Consultant (Contract)',
      period: '2022',
      points: [
        'Modernized the digital presence for a premier trade remedies firm, focusing on clear hierarchy and professional authority.',
        'Optimized information architecture for complex legal and consulting content management.'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-[#080A0F] selection:bg-blue-500 selection:text-white">
      {/* WEB UI VERSION */}
      <div className="print:hidden text-white">
        <Navigation />
        
        <main className="max-w-6xl mx-auto pt-32 pb-20 px-6 lg:px-12">
          {/* Header Section */}
          <div className="flex flex-col lg:flex-row justify-between items-start gap-8 mb-20">
            <div className="space-y-6 max-w-3xl">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-500">
                  Tailored Professional Profile — Enterprise UX
                </span>
              </div>
              <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-none uppercase italic">
                Md <span className="text-blue-500 not-italic">Aqil</span>
              </h1>
              <p className="text-2xl font-bold text-white/40 tracking-tight">
                Enterprise UX Designer & Product Experience Lead
              </p>
              <p className="text-lg text-white/60 leading-relaxed font-medium">
                Specializing in **complex B2B applications** and **SAP Fiori aligned ecosystems**. 
                Expert in translating business requirements into high-fidelity interaction models and 
                scalable design systems.
              </p>
            </div>
            
            <Button 
              onClick={handleDownload}
              className="mt-8 lg:mt-0 rounded-full bg-blue-600 hover:bg-blue-500 text-white px-8 py-6 h-auto"
            >
              <Download className="w-5 h-5 mr-3" />
              <span className="font-bold text-xs uppercase tracking-widest">Download Tailored CV</span>
            </Button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            {/* Main Content */}
            <div className="lg:col-span-8 space-y-20">
              {/* Core Enterprise Competencies */}
              <section className="space-y-10">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-2xl bg-blue-500/10 border border-blue-500/20 text-blue-500">
                    <Layout size={24} />
                  </div>
                  <h2 className="text-3xl font-black italic tracking-tight uppercase underline decoration-blue-500/30 decoration-4 underline-offset-8">
                    Enterprise Competencies
                  </h2>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {[
                    { title: 'Fiori Framework', icon: Layout, desc: 'Deep understanding of SAP Fiori design guidelines and UI patterns.' },
                    { title: 'Discovery & Research', icon: FileSearch, desc: 'Facilitating workshops, stakeholder interviews, and user validation sessions.' },
                    { title: 'Agile Delivery', icon: Users, desc: 'Seamless collaboration in product-led, cross-functional engineering teams.' }
                  ].map((skill, i) => (
                    <div key={i} className="p-6 rounded-3xl bg-white/5 border border-white/5 hover:border-blue-500/30 transition-colors">
                      <skill.icon size={20} className="text-blue-500 mb-4" />
                      <h4 className="font-bold text-sm uppercase tracking-wider mb-2">{skill.title}</h4>
                      <p className="text-white/40 text-xs leading-relaxed">{skill.desc}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Experience */}
              <section className="space-y-12">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-2xl bg-white/5 border border-white/10 text-white/60">
                    <Briefcase size={24} />
                  </div>
                  <h2 className="text-3xl font-black italic tracking-tight uppercase">Professional Experience</h2>
                </div>

                <div className="space-y-16 pl-8 border-l border-white/5 ml-6">
                  {experience.map((exp, i) => (
                    <div key={i} className="relative">
                      <div className="absolute -left-[45px] top-0 w-[26px] h-[26px] rounded-full bg-[#080A0F] border-2 border-blue-500 flex items-center justify-center">
                        <div className="w-2 h-2 rounded-full bg-blue-500" />
                      </div>
                      <div className="space-y-4">
                        <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-2">
                          <h3 className="text-2xl font-black tracking-tight text-white uppercase italic">{exp.company}</h3>
                          <span className="text-[10px] font-black uppercase tracking-widest text-blue-500/60">{exp.period}</span>
                        </div>
                        <p className="text-blue-400 font-bold text-xs uppercase tracking-widest">{exp.role}</p>
                        <ul className="space-y-4 text-white/50 text-sm leading-relaxed">
                          {exp.points.map((p, j) => (
                            <li key={j} className="flex gap-4">
                              <span className="text-blue-500 font-bold">/</span>
                              {p}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Enterprise B2B Projects */}
              <section className="space-y-12">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-2xl bg-white/5 border border-white/10 text-white/60">
                    <Zap size={24} />
                  </div>
                  <h2 className="text-3xl font-black italic tracking-tight uppercase">Selected B2B Projects</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pl-8 ml-6">
                  {enterpriseProjects.map((proj, i) => (
                    <div key={i} className="p-8 rounded-[2.5rem] bg-white/5 border border-white/5 hover:border-blue-500/20 transition-all group">
                      <h3 className="text-xl font-black uppercase italic group-hover:text-blue-500 transition-colors mb-2">{proj.company}</h3>
                      <p className="text-blue-500/60 font-bold text-[10px] uppercase tracking-[0.2em] mb-4">{proj.role}</p>
                      <ul className="space-y-3">
                        {proj.points.map((p, j) => (
                          <li key={j} className="text-xs text-white/40 leading-relaxed flex gap-2">
                            <span className="text-blue-500">→</span>{p}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-4 space-y-12">
              <section className="p-8 rounded-[3rem] bg-blue-600/5 border border-blue-600/10 space-y-8">
                <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-500">Specialized Skills</h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="text-[10px] font-black uppercase tracking-widest text-white/40 mb-3">Systems & Frameworks</h4>
                    <div className="flex flex-wrap gap-2">
                      {['SAP Fiori', 'Design Systems', 'Figma (Advanced)', 'UI Patterns'].map(s => (
                        <span key={s} className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/5 text-[10px] font-bold text-white/70">{s}</span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-[10px] font-black uppercase tracking-widest text-white/40 mb-3">Methods</h4>
                    <div className="flex flex-wrap gap-2">
                      {['Journey Mapping', 'Service Blueprinting', 'Usability Testing', 'Stakeholder Management'].map(s => (
                        <span key={s} className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/5 text-[10px] font-bold text-white/70">{s}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </section>

              <section className="space-y-6">
                <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-white/25">Contact</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4 text-white/60"><Mail size={16} /><span className="text-sm font-bold">aqilali381@gmail.com</span></div>
                  <div className="flex items-center gap-4 text-white/60"><Phone size={16} /><span className="text-sm font-bold">+91 7210562014</span></div>
                  <div className="flex items-center gap-4 text-white/60"><MapPin size={16} /><span className="text-sm font-bold">Noida, India</span></div>
                </div>
              </section>

              <section className="space-y-6">
                <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-white/25">Education</h3>
                <div className="p-6 rounded-3xl bg-white/5 border border-white/5">
                  <GraduationCap className="text-blue-500 mb-4" size={24} />
                  <p className="text-sm font-bold">Bachelor of Arts</p>
                  <p className="text-xs text-white/40">Subharti University, Meerut</p>
                  <p className="text-xs text-blue-500/60 font-black mt-2">Graduated: 2024</p>
                </div>
              </section>
            </div>
          </div>
        </main>
      </div>

      {/* PRINT VERSION */}
      <div className="hidden print:block bg-white text-black p-0 m-0 font-sans leading-tight">
        <div className="max-w-[800px] mx-auto py-10 px-8">
          <div className="flex justify-between items-start border-b-4 border-blue-600 pb-6 mb-8">
            <div>
              <h1 className="text-5xl font-black uppercase tracking-tighter mb-1">Md Aqil</h1>
              <p className="text-xl font-bold text-blue-600 uppercase tracking-widest">Enterprise UX Designer</p>
            </div>
            <div className="text-right text-sm font-bold space-y-1">
              <p>aqilali381@gmail.com</p>
              <p>+91 7210562014</p>
              <p>Noida, India</p>
            </div>
          </div>

          <div className="mb-10">
            <h2 className="text-lg font-black uppercase tracking-widest border-b-2 border-black mb-3">Professional Summary</h2>
            <p className="text-[13px] leading-relaxed font-medium">
              Enterprise UI/UX Specialist with 8+ years of experience in leading the conceptualization and design of complex 
              B2B products. **Expertise in SAP Fiori Design Guidelines**, complex interaction models, and 
              advanced design system architecture. Proven track record in facilitating design workshops, discovery sessions, 
              and design validation in agile, product-led environments.
            </p>
          </div>

          <div className="mb-10">
            <h2 className="text-lg font-black uppercase tracking-widest border-b-2 border-black mb-4">Core Experience</h2>
            <div className="space-y-6">
              {experience.map((exp, i) => (
                <div key={i}>
                  <div className="flex justify-between items-baseline mb-1">
                    <h3 className="font-black text-[15px] uppercase">{exp.company}</h3>
                    <span className="text-[12px] font-bold italic">{exp.period}</span>
                  </div>
                  <p className="font-bold text-blue-600 text-[12px] uppercase mb-2">{exp.role}</p>
                  <ul className="list-disc ml-5 text-[12px] space-y-1.5 font-medium">
                    {exp.points.map((p, j) => <li key={j}>{p}</li>)}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-10">
            <h2 className="text-lg font-black uppercase tracking-widest border-b-2 border-black mb-4">Specialized B2B Projects</h2>
            <div className="grid grid-cols-2 gap-x-8 gap-y-4">
              {enterpriseProjects.map((proj, i) => (
                <div key={i}>
                  <h3 className="font-black text-[14px] uppercase mb-1">{proj.company}</h3>
                  <p className="font-bold text-gray-500 text-[10px] uppercase mb-2">{proj.role}</p>
                  <ul className="list-disc ml-4 text-[11px] space-y-1 font-medium">
                    {proj.points.map((p, j) => <li key={j}>{p}</li>)}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-12">
            <div>
              <h2 className="text-lg font-black uppercase tracking-widest border-b-2 border-black mb-3">Expertise</h2>
              <div className="text-[12px] space-y-2 font-bold">
                <p><span className="text-blue-600">Frameworks:</span> SAP Fiori, Carbon Design, Human Interface Guidelines</p>
                <p><span className="text-blue-600">Design:</span> Figma (Design Systems), Journey Maps, Service Blueprints</p>
                <p><span className="text-blue-600">Research:</span> Qual/Quant Analysis, Usability Testing, Discovery Workshops</p>
              </div>
            </div>
            <div>
              <h2 className="text-lg font-black uppercase tracking-widest border-b-2 border-black mb-3">Education</h2>
              <p className="text-[13px] font-black">Bachelor of Arts</p>
              <p className="text-[12px] font-medium text-gray-600 italic">Subharti University, Meerut (Graduated: 2024)</p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media print {
          @page { margin: 0; size: A4; }
          body { background: white !important; }
        }
      `}</style>
    </div>
  );
};

export default SAPResume;
