import { useEffect, useRef } from 'react';
import { ExternalLink, ArrowRight, TrendingUp, Users, Zap, LayoutGrid } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { useNavigate } from 'react-router-dom';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { caseStudies } from '@/data/caseStudies';

gsap.registerPlugin(ScrollTrigger);

const CaseStudiesSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (!sectionRef.current) return;

    // Animate section header
    gsap.fromTo(".cs-header", 
      { opacity: 0, y: 50 },
      {
        opacity: 1, y: 0, duration: 1, ease: "power3.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 75%" }
      }
    );

    // Animate individual case study cards
    gsap.utils.toArray<HTMLElement>('.case-study-card').forEach((el) => {
      gsap.fromTo(el, 
        { opacity: 0, y: 80, scale: 0.95 },
        {
          opacity: 1, y: 0, scale: 1, duration: 0.8, ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );
    });

  }, []);

  return (
    <section id="work" ref={sectionRef} className="py-32 px-6 relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80vw] h-[80vw] max-w-[1000px] max-h-[1000px] bg-primary/5 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto">
        <div className="cs-header flex flex-col md:flex-row justify-between items-end mb-24 gap-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 mb-6">
              <LayoutGrid className="w-4 h-4 text-primary" />
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary">Selected Works</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-[0.9] mb-6">
              Featured <br />
              <span className="text-transparent bg-gradient-to-r from-primary via-white to-primary/80 bg-clip-text animate-gradient">
                Impact Stories
              </span>
            </h2>
          </div>
          <div className="max-w-sm">
            <div className="w-12 h-1 bg-gradient-to-r from-primary to-transparent mb-4" />
            <p className="text-base text-muted-foreground font-medium leading-relaxed">
              A deep dive into how psychology-led UX and precision engineering transformed business ecosystems for over 500k+ global users.
            </p>
          </div>
        </div>

        <div className="case-studies-grid space-y-16">
          {caseStudies.map((study, index) => (
            <div 
              key={study.title}
              className="case-study-card group relative p-6 md:p-8 lg:p-10 rounded-[40px] lg:rounded-[56px] bg-[#0A0D14]/80 backdrop-blur-3xl border border-white/5 shadow-2xl overflow-hidden hover:border-primary/20 transition-colors duration-700"
            >
              {/* Dynamic subtle glow behind each card */}
              <div className="absolute -inset-20 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000 blur-3xl pointer-events-none -z-10" />

              <div className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-10 lg:gap-16 items-center w-full`}>
                
                {/* Visual Side */}
                <div className="w-full lg:w-[60%] relative h-[400px] lg:h-[500px] rounded-[32px] overflow-hidden border border-white/10 group-hover:border-primary/30 transition-colors duration-500 shadow-inner group-hover:shadow-[0_0_50px_rgba(var(--primary),0.1)]">
                  {study.image.endsWith('.mp4') ? (
                    <video 
                      src={study.image}
                      className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-[1.5s] ease-out grayscale-[20%] group-hover:grayscale-0"
                      autoPlay loop muted playsInline
                    />
                  ) : (
                    <img 
                      src={study.image}
                      alt={study.title}
                      className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-[1.5s] ease-out grayscale-[20%] group-hover:grayscale-0"
                    />
                  )}
                  {/* Subtle vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0D14]/90 via-[#0A0D14]/20 to-transparent opacity-80 group-hover:opacity-50 transition-opacity duration-700 pointer-events-none" />
                  
                  {/* Floating Client Meta */}
                  <div className="absolute top-6 left-6 flex items-center gap-3 bg-black/40 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
                    <div className="w-2 h-2 rounded-full bg-primary animate-pulse shadow-[0_0_10px_rgba(var(--primary),0.8)]" />
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white/80">{study.client}</span>
                  </div>
                </div>

                {/* Content Side */}
                <div className="w-full lg:w-[40%] flex flex-col justify-center relative z-10 space-y-8">
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <span className="text-[10px] font-black uppercase tracking-[0.3em] text-primary/80 bg-primary/10 px-3 py-1 rounded-full">
                        0{index + 1}
                      </span>
                      <span className="text-[10px] font-black uppercase tracking-widest text-white/40 border border-white/10 px-3 py-1 rounded-full">
                        {study.tags[0]}
                      </span>
                    </div>
                    <h3 className="text-4xl lg:text-5xl font-black tracking-tighter leading-[0.9] text-white group-hover:text-primary transition-colors duration-500">
                      {study.title}
                    </h3>
                  </div>

                  <p className="text-base text-muted-foreground leading-relaxed font-medium">
                    {study.challenge}
                  </p>

                  {/* Impact Grid */}
                  <div className="grid grid-cols-2 gap-4 pt-6 border-t border-white/5">
                    {Object.entries(study.results).slice(0, 2).map(([key, value]) => (
                      <div key={key} className="bg-white/[0.03] rounded-2xl p-4 border border-white/5 group-hover:border-primary/10 transition-colors duration-500">
                        <div className="text-2xl lg:text-3xl font-black text-white mb-1 group-hover:text-primary transition-colors duration-500">{value}</div>
                        <div className="text-[9px] font-black text-white/40 uppercase tracking-[0.2em]">{key}</div>
                      </div>
                    ))}
                  </div>

                  <div className="pt-2">
                    <Button 
                      variant="premium" 
                      size="xl"
                      className="w-full sm:w-auto rounded-full px-10 h-14 text-xs font-black uppercase tracking-[0.15em] shadow-[0_0_40px_rgba(var(--primary),0.2)] group-hover:shadow-[0_0_60px_rgba(var(--primary),0.4)] hover:-translate-y-1 transition-all duration-300"
                      onClick={() => {
                        if (study.externalLink) {
                          window.open(study.externalLink, '_blank');
                        } else if (study.id === 'deerika-grocery') {
                          navigate('/deerika-case-study');
                        } else if (study.id === 'changecaptain') {
                          navigate('/changecaptain-case-study');
                        } else if (study.id === 'velvet-reel') {
                          navigate('/velvet-reel-case-study');
                        } else if (study.id === 'stay-clueless') {
                          navigate('/stay-clueless-case-study');
                        } else if (study.id === 'houssy') {
                          navigate('/houssy-case-study');
                        } else if (study.id === 'goatx') {
                          navigate('/goatx-case-study');
                        } else if (study.id === 'exotic') {
                          navigate('/exotic-case-study');
                        } else if (study.id === 'tpm') {
                          navigate('/tpm-case-study');
                        } else if (study.id === 'career-talks') {
                          navigate('/career-talks-case-study');
                        } else {
                          navigate(`/case-study/${study.id}`);
                        }
                      }}
                    >
                      {study.externalLink ? 'Visit Website' : 'Explore Case Study'} <ArrowRight className="w-4 h-4 ml-3" />
                    </Button>
                  </div>
                </div>
                
              </div>
            </div>
          ))}
        </div>

        {/* Global CTA Block */}
        <div className="mt-32 relative group rounded-[40px] md:rounded-[64px] overflow-hidden border border-white/10 bg-[#0A0D14]/50 backdrop-blur-2xl p-10 md:p-20 text-center">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000 -z-10" />
          
          <div className="max-w-3xl mx-auto space-y-8 relative z-10">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center border border-primary/20 mx-auto shadow-[0_0_30px_rgba(var(--primary),0.3)]">
              <Zap className="w-6 h-6 text-primary" />
            </div>
            
            <h3 className="text-4xl md:text-6xl font-black tracking-tighter leading-none">
              Transform your digital ecosystem. <br />
              <span className="text-transparent bg-gradient-to-r from-primary via-white to-primary bg-clip-text">Let's connect.</span>
            </h3>
            
            <p className="text-lg text-muted-foreground font-medium max-w-xl mx-auto">
              Ready to harness behavioral psychology to scale your platform? Let’s design your next iteration together.
            </p>
            
            <div className="pt-4">
              <Button 
                variant="premium" 
                size="xl" 
                className="rounded-full px-12 h-16 text-sm font-black uppercase tracking-[0.2em]"
                onClick={() => window.open('https://wa.me/917210562014', '_blank')}
              >
                Start an Inquiry
                <ArrowRight className="w-5 h-5 ml-3" />
              </Button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default CaseStudiesSection;