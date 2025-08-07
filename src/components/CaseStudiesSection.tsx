import { useEffect, useRef } from 'react';
import { ExternalLink, ArrowRight, TrendingUp, Users, Zap } from 'lucide-react';
import { Button } from './ui/button';
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
    <section id="work" ref={sectionRef} className="py-16 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 font-satoshi">
            Crafted <span className="text-transparent bg-gradient-to-r from-primary to-accent bg-clip-text">
              Experiences
            </span>
          </h2>
          <p className="text-body text-muted-foreground max-w-3xl mx-auto">
            Real projects, real results. Each case study showcases how behavioral psychology 
            transforms user experiences and drives measurable business impact.
          </p>
        </div>

        <div className="case-studies-grid space-y-24">
          {caseStudies.map((study, index) => (
            <div 
              key={study.title}
              className={`case-study-card flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 items-center`}
            >
              {/* Image Side */}
              <div className="lg:w-1/2 relative">
                <div className="relative overflow-hidden rounded-3xl group">
                  <img 
                    src={study.image}
                    alt={`Case study - ${study.title}`}
                    className="case-image w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ExternalLink className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>

              {/* Content Side */}
              <div className="lg:w-1/2 space-y-6">
                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {study.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="px-3 py-1 text-sm bg-primary/10 text-primary rounded-full border border-primary/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-3xl font-bold font-satoshi">
                  {study.title}
                </h3>

                <p className="text-lg text-muted-foreground">
                  <span className="font-semibold text-foreground">Client:</span> {study.client}
                </p>

                {/* Challenge */}
                <div className="space-y-2">
                  <h4 className="font-semibold text-foreground flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-red-500" />
                    Challenge
                  </h4>
                  <p className="text-muted-foreground">{study.challenge}</p>
                </div>

                {/* Process */}
                <div className="space-y-2">
                  <h4 className="font-semibold text-foreground flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-blue-500" />
                    My Approach
                  </h4>
                  <p className="text-muted-foreground">{study.process}</p>
                </div>

                {/* Psychology Insight */}
                <div className="space-y-2">
                  <h4 className="font-semibold text-foreground flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-purple-500" />
                    Psychology Applied
                  </h4>
                  <p className="text-muted-foreground">{study.psychology}</p>
                </div>

                {/* Results */}
                <div className="glass rounded-2xl p-6">
                  <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-green-500" />
                    Results Achieved
                  </h4>
                  <div className="grid grid-cols-3 gap-4 text-center">
                    {Object.entries(study.results).map(([key, value]) => (
                      <div key={key}>
                        <div className="text-2xl font-bold text-primary mb-1">{value}</div>
                        <div className="text-sm text-muted-foreground capitalize">{key}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <Button 
                  variant="ghost" 
                  className="group"
                  onClick={() => {
                    if (study.id === 'deerika-grocery') {
                      navigate('/deerika-case-study');
                    } else {
                      navigate(`/case-study/${study.id}`);
                    }
                  }}
                >
                  View Full Case Study
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
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
            <Button variant="premium" size="lg" className="group">
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