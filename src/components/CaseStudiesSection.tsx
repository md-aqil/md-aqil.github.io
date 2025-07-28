import { useEffect, useRef } from 'react';
import { ExternalLink, ArrowRight, TrendingUp, Users, Zap } from 'lucide-react';
import { Button } from './ui/button';
import { useNavigate } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const caseStudies = [
  {
    id: 'deerika-grocery',
    title: "Deerika Grocery App",
    client: "Deerika.in",
    challenge: "Traditional grocery shopping was time-consuming with limited delivery options and poor user experience leading to low customer retention.",
    process: "Redesigned the entire user journey from product discovery to checkout, implemented flexible delivery slots, and created a membership program with instant cashback rewards.",
    psychology: "Applied convenience psychology and instant gratification through same-day delivery and immediate cashback rewards",
    results: {
      orders: "+284%",
      retention: "+167%",
      satisfaction: "+92%"
    },
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=600&fit=crop",
    tags: ["E-commerce", "Mobile App", "Grocery Delivery"]
  },
  {
    id: 'saas-dashboard',
    title: "SaaS Dashboard Redesign",
    client: "TechFlow Analytics",
    challenge: "Users were abandoning the complex analytics dashboard, leading to poor retention rates.",
    process: "Conducted user interviews, simplified navigation using Hick's Law, and implemented progressive disclosure.",
    psychology: "Applied cognitive load theory to reduce information density by 60%",
    results: {
      engagement: "+142%",
      retention: "+85%", 
      satisfaction: "+94%"
    },
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    tags: ["UX Research", "Dashboard Design", "B2B SaaS"]
  },
  {
    id: 'ecommerce-app',
    title: "E-commerce Mobile App",
    client: "StyleHub Fashion",
    challenge: "Low conversion rates on mobile checkout flow, with 68% cart abandonment.",
    process: "Redesigned checkout using loss aversion principles and social proof indicators.",
    psychology: "Leveraged scarcity psychology and simplified decision-making pathways",
    results: {
      conversion: "+156%",
      revenue: "+89%",
      completion: "+134%"
    },
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop",
    tags: ["Mobile Design", "E-commerce", "Conversion Optimization"]
  },
  {
    id: 'fintech-landing',
    title: "FinTech Landing Page",
    client: "CryptoVault",
    challenge: "Complex financial product needed clear communication to build trust with new users.",
    process: "Applied behavioral economics to design trust-building elements and clear value propositions.",
    psychology: "Used authority bias and social proof to overcome financial service skepticism",
    results: {
      signups: "+203%",
      engagement: "+78%",
      trust: "+167%"
    },
    image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=800&h=600&fit=crop",
    tags: ["Landing Page", "FinTech", "Trust Building"]
  }
];

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
                    alt={study.title}
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