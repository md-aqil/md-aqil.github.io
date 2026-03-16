import { useEffect, useRef } from 'react';
import { ExternalLink, ArrowRight, TrendingUp, Users, Zap } from 'lucide-react';
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

    // Animate case study cards on scroll
    gsap.fromTo(".case-study-card", 
      { opacity: 0, y: 80 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".case-studies-grid",
          start: "top 70%",
          end: "bottom 20%",
        }
      }
    );

    // Parallax effect for images
    gsap.to(".case-image", {
      yPercent: -20,
      ease: "none",
      scrollTrigger: {
        trigger: ".case-studies-grid",
        start: "top bottom",
        end: "bottom top",
        scrub: true
      }
    });
  }, []);

  return (
    <section id="work" ref={sectionRef} className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <Badge variant="outline" className="mb-4 px-4 py-1 border-primary/20 bg-primary/5 text-primary">Case Studies</Badge>
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter leading-none mb-4">
              Featured <br />
              <span className="text-transparent bg-gradient-to-r from-primary via-white to-primary bg-clip-text animate-gradient">
                Impact Stories
              </span>
            </h2>
          </div>
          <p className="max-w-sm text-sm text-muted-foreground font-medium pb-1 border-l-2 border-primary/20 pl-6">
            A deep dive into how psychology-led UX transformed business ecosystems for over 500k+ global users.
          </p>
        </div>



        <div className="case-studies-grid space-y-32">
          {caseStudies.map((study, index) => (
            <div 
              key={study.title}
              className={`case-study-card relative flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-24 items-center group`}
            >
              {/* Background Industry Text (Creative Element) */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15vw] font-black text-white/[0.01] pointer-events-none select-none uppercase tracking-widest leading-none hidden lg:block">
                {study.tags[0]}
              </div>

              {/* Image Side - Cinematic Wide */}
              <div className="w-full lg:w-[55%] relative z-10">
                <div className="relative overflow-hidden rounded-[32px] lg:rounded-[48px] border border-white/5 shadow-3xl aspect-[16/10] group-hover:border-primary/30 transition-all duration-700">
                  <img 
                    src={study.image}
                    alt={study.title}
                    className="case-image w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-black/80 via-transparent to-transparent opacity-80 group-hover:opacity-40 transition-opacity" />
                  
                  {/* Floating Client Pin */}
                  <div className="absolute top-6 left-6 flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                    <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/60">{study.client}</span>
                  </div>
                </div>
              </div>

              {/* Content Side - Precise & Impactful */}
              <div className="w-full lg:w-[45%] space-y-8 relative z-10 lg:px-6">
                <div className="space-y-2">
                  <Badge variant="secondary" className="bg-primary/10 text-primary border-none text-[10px] font-black px-4 py-0">CASE 0{index + 1}</Badge>
                  <h3 className="text-4xl lg:text-5xl font-black tracking-tighter leading-[0.85] group-hover:tracking-tight transition-all duration-700">
                    {study.title}
                  </h3>
                </div>

                <p className="text-base lg:text-lg text-muted-foreground leading-relaxed font-medium">
                  {study.challenge}
                </p>

                {/* Metrics - Clean Minimalist Grid */}
                <div className="grid grid-cols-3 gap-6 py-8 border-y border-white/5">
                  {Object.entries(study.results).map(([key, value]) => (
                    <div key={key}>
                      <div className="text-2xl lg:text-4xl font-black text-white tracking-tighter group-hover:text-primary transition-colors">{value}</div>
                      <div className="text-[9px] font-black text-white/30 uppercase tracking-widest mt-1">{key}</div>
                    </div>
                  ))}
                </div>

                <div className="flex items-center gap-6">
                  <Button 
                    variant="premium" 
                    size="xl"
                    className="rounded-full px-10 h-14 text-xs font-black uppercase tracking-[0.2em] shadow-2xl hover:-translate-y-1 transition-all"
                    onClick={() => {
                      if (study.id === 'deerika-grocery') {
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
                      } else {
                        navigate(`/case-study/${study.id}`);
                      }
                    }}
                  >
                    Deep Dive <ArrowRight className="w-4 h-4 ml-3" />
                  </Button>
                  
                  {/* Dynamic Tag */}
                  <div className="hidden sm:flex flex-col">
                    <span className="text-[8px] font-black text-white/20 uppercase tracking-widest mb-1">Sector</span>
                    <span className="text-[10px] font-bold text-white/60">{study.tags[0]}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>




        {/* CTA */}
        <div className="text-center mt-20">
          <div className="card-premium max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4">
              Want results like these for your project?
            </h3>
            <p className="text-muted-foreground mb-6">
              Let's discuss how behavioral psychology can transform your user experience and drive real business growth.
            </p>
            <Button 
              variant="premium" 
              size="lg" 
              className="group"
              onClick={() => window.open('https://wa.me/917210562014', '_blank')}
            >
              Start Your Project
              <Zap className="w-5 h-5 group-hover:scale-110 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;