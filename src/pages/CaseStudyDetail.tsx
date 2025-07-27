import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import { ArrowLeft, ExternalLink, TrendingUp, Users, Clock, Target, Brain, Lightbulb } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const caseStudyData: Record<string, any> = {
  'saas-dashboard': {
    title: "SaaS Dashboard Redesign",
    client: "TechFlow Analytics",
    duration: "12 weeks",
    team: "Solo Designer",
    challenge: "Users were abandoning the complex analytics dashboard, leading to poor retention rates and low feature adoption. The existing interface overwhelmed users with too much information at once.",
    process: "Conducted user interviews, simplified navigation using Hick's Law, and implemented progressive disclosure to reduce cognitive load.",
    psychology: "Applied cognitive load theory to reduce information density by 60%",
    results: {
      engagement: "+142%",
      retention: "+85%", 
      satisfaction: "+94%"
    },
    heroImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=600&fit=crop",
    beforeImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop",
    afterImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop",
    tags: ["UX Research", "Dashboard Design", "B2B SaaS"],
    overview: "TechFlow Analytics approached me with a critical problem: their powerful analytics dashboard was driving users away instead of engaging them. Despite having robust features, the 68% abandonment rate was threatening their business growth.",
    researchFindings: [
      "Users felt overwhelmed by the information density",
      "Navigation structure was confusing and non-intuitive", 
      "Key features were buried under multiple menu levels",
      "No clear hierarchy of information importance"
    ],
    designPrinciples: [
      {
        icon: Brain,
        title: "Cognitive Load Theory",
        description: "Reduced information density by implementing progressive disclosure and smart defaults"
      },
      {
        icon: Target,
        title: "Fitts' Law",
        description: "Optimized button sizes and spacing for faster user interactions"
      },
      {
        icon: Lightbulb,
        title: "Hick's Law",
        description: "Simplified navigation by reducing choices and creating clear pathways"
      }
    ],
    implementation: "The redesign was implemented in phases over 12 weeks, with continuous user testing and iteration. We maintained all existing functionality while dramatically improving the user experience.",
    impact: "Within 3 months of launch, user engagement increased by 142%, retention improved by 85%, and user satisfaction scores jumped by 94%. The client reported their highest-ever feature adoption rates."
  },
  'ecommerce-app': {
    title: "E-commerce Mobile App",
    client: "StyleHub Fashion",
    duration: "8 weeks",
    team: "Lead Designer + Developer",
    challenge: "Low conversion rates on mobile checkout flow, with 68% cart abandonment rates significantly impacting revenue.",
    process: "Redesigned checkout using loss aversion principles and social proof indicators to build trust and urgency.",
    psychology: "Leveraged scarcity psychology and simplified decision-making pathways",
    results: {
      conversion: "+156%",
      revenue: "+89%",
      completion: "+134%"
    },
    heroImage: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200&h=600&fit=crop",
    beforeImage: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=500&fit=crop",
    afterImage: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=500&fit=crop",
    tags: ["Mobile Design", "E-commerce", "Conversion Optimization"],
    overview: "StyleHub Fashion was losing nearly 7 out of 10 potential customers during the checkout process. The mobile experience was particularly problematic, with users abandoning their carts at alarming rates.",
    researchFindings: [
      "Checkout process was too lengthy and complex",
      "Lack of trust signals during payment",
      "No sense of urgency or scarcity", 
      "Multiple unnecessary form fields"
    ],
    designPrinciples: [
      {
        icon: Users,
        title: "Social Proof",
        description: "Added real-time purchase notifications and customer reviews at key decision points"
      },
      {
        icon: Clock,
        title: "Loss Aversion",
        description: "Implemented urgency indicators and limited-time offers to prevent abandonment"
      },
      {
        icon: Target,
        title: "Progressive Disclosure",
        description: "Broke down the checkout into digestible steps with clear progress indicators"
      }
    ],
    implementation: "The new mobile checkout experience was built using React Native with careful attention to performance and user experience across different devices.",
    impact: "Post-launch metrics showed a 156% increase in conversion rates, 89% boost in revenue, and 134% improvement in checkout completion rates. The client saw ROI within the first month."
  },
  'fintech-landing': {
    title: "FinTech Landing Page",
    client: "CryptoVault",
    duration: "6 weeks", 
    team: "Solo Designer",
    challenge: "Complex financial product needed clear communication to build trust with new users in a skeptical market.",
    process: "Applied behavioral economics to design trust-building elements and clear value propositions that overcame financial service skepticism.",
    psychology: "Used authority bias and social proof to overcome financial service skepticism",
    results: {
      signups: "+203%",
      engagement: "+78%",
      trust: "+167%"
    },
    heroImage: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=1200&h=600&fit=crop",
    beforeImage: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=500&fit=crop",
    afterImage: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=800&h=500&fit=crop",
    tags: ["Landing Page", "FinTech", "Trust Building"],
    overview: "CryptoVault needed to establish credibility in the competitive cryptocurrency space. Their complex product required clear communication to convert skeptical visitors into trusted users.",
    researchFindings: [
      "High bounce rate due to unclear value proposition",
      "Lack of trust signals and credibility indicators",
      "Complex financial jargon alienated potential users",
      "No social proof or customer testimonials"
    ],
    designPrinciples: [
      {
        icon: Users,
        title: "Authority Bias",
        description: "Featured industry certifications, partnerships, and expert endorsements prominently"
      },
      {
        icon: Brain,
        title: "Social Proof",
        description: "Integrated customer testimonials, usage statistics, and trust badges throughout the experience"
      },
      {
        icon: Lightbulb,
        title: "Clarity Principle",
        description: "Simplified complex financial concepts into digestible, benefit-focused messaging"
      }
    ],
    implementation: "The landing page was built with performance in mind, featuring fast load times, mobile optimization, and conversion tracking integration.",
    impact: "The redesigned landing page achieved a 203% increase in signups, 78% improvement in engagement metrics, and 167% boost in trust indicators measured through user surveys."
  }
};

const CaseStudyDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const heroRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const caseStudy = slug ? caseStudyData[slug] : null;

  useEffect(() => {
    if (!caseStudy) return;

    // Hero section animation
    gsap.fromTo(heroRef.current, 
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
    );

    // Content sections stagger animation
    gsap.fromTo(".content-section", 
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: contentRef.current,
          start: "top 80%",
        }
      }
    );

    // Parallax effect for images
    gsap.to(".parallax-image", {
      yPercent: -20,
      ease: "none",
      scrollTrigger: {
        trigger: ".parallax-image",
        start: "top bottom",
        end: "bottom top",
        scrub: true
      }
    });
  }, [caseStudy]);

  if (!caseStudy) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Case Study Not Found</h1>
          <Button onClick={() => navigate('/')} variant="premium">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Button 
              variant="ghost" 
              onClick={() => navigate('/')}
              className="text-foreground hover:text-primary"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Portfolio
            </Button>
            <div className="text-sm text-muted-foreground">
              Case Study
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section ref={heroRef} className="pt-24 pb-12 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
        
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="flex flex-wrap gap-2 mb-6">
            {caseStudy.tags.map((tag: string) => (
              <span 
                key={tag}
                className="px-3 py-1 text-sm bg-primary/10 text-primary rounded-full border border-primary/20"
              >
                {tag}
              </span>
            ))}
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-6 font-satoshi">
            {caseStudy.title}
          </h1>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div>
              <h3 className="text-sm font-semibold text-muted-foreground mb-2">CLIENT</h3>
              <p className="text-lg">{caseStudy.client}</p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-muted-foreground mb-2">DURATION</h3>
              <p className="text-lg">{caseStudy.duration}</p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-muted-foreground mb-2">TEAM</h3>
              <p className="text-lg">{caseStudy.team}</p>
            </div>
          </div>

          <div className="relative rounded-3xl overflow-hidden">
            <img 
              src={caseStudy.heroImage}
              alt={caseStudy.title}
              className="parallax-image w-full h-[500px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
          </div>
        </div>
      </section>

      {/* Content */}
      <section ref={contentRef} className="py-12 px-4">
        <div className="max-w-4xl mx-auto space-y-16">
          
          {/* Overview */}
          <div className="content-section">
            <h2 className="text-3xl font-bold mb-6">Project Overview</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {caseStudy.overview}
            </p>
          </div>

          {/* Challenge */}
          <div className="content-section">
            <h2 className="text-3xl font-bold mb-6">The Challenge</h2>
            <div className="glass rounded-2xl p-8">
              <p className="text-lg leading-relaxed mb-6">
                {caseStudy.challenge}
              </p>
              <h3 className="text-xl font-semibold mb-4">Key Research Findings:</h3>
              <ul className="space-y-3">
                {caseStudy.researchFindings.map((finding: string, index: number) => (
                  <li key={index} className="flex items-start">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 mr-4 flex-shrink-0" />
                    <span className="text-muted-foreground">{finding}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Psychology Principles */}
          <div className="content-section">
            <h2 className="text-3xl font-bold mb-6">Psychology Applied</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {caseStudy.designPrinciples.map((principle: any, index: number) => {
                const IconComponent = principle.icon;
                return (
                  <div key={index} className="card-premium">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-primary to-accent flex items-center justify-center mb-4">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-bold mb-3">{principle.title}</h3>
                    <p className="text-muted-foreground text-sm">{principle.description}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Before & After */}
          <div className="content-section">
            <h2 className="text-3xl font-bold mb-6">Before & After</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4 text-red-400">Before</h3>
                <div className="rounded-xl overflow-hidden">
                  <img 
                    src={caseStudy.beforeImage}
                    alt="Before redesign"
                    className="w-full h-64 object-cover"
                  />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4 text-green-400">After</h3>
                <div className="rounded-xl overflow-hidden">
                  <img 
                    src={caseStudy.afterImage}
                    alt="After redesign"
                    className="w-full h-64 object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="content-section">
            <h2 className="text-3xl font-bold mb-6">Results Achieved</h2>
            <div className="glass rounded-2xl p-8">
              <div className="grid md:grid-cols-3 gap-8 text-center mb-8">
                {Object.entries(caseStudy.results).map(([key, value]) => (
                  <div key={key}>
                    <div className="text-4xl font-bold text-primary mb-2">{value as string}</div>
                    <div className="text-lg text-muted-foreground capitalize">{key}</div>
                  </div>
                ))}
              </div>
              <p className="text-lg leading-relaxed">
                {caseStudy.impact}
              </p>
            </div>
          </div>

          {/* Implementation */}
          <div className="content-section">
            <h2 className="text-3xl font-bold mb-6">Implementation</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {caseStudy.implementation}
            </p>
          </div>

          {/* CTA */}
          <div className="content-section text-center">
            <div className="card-premium max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">
                Interested in similar results?
              </h3>
              <p className="text-muted-foreground mb-6">
                Let's discuss how I can help transform your user experience using proven psychological principles.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="premium" size="lg" onClick={() => navigate('/#contact')}>
                  Start Your Project
                </Button>
                <Button variant="glass" size="lg" onClick={() => navigate('/')}>
                  View More Work
                </Button>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default CaseStudyDetail;