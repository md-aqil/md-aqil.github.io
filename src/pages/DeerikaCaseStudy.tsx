import { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { ArrowLeft, ExternalLink, Clock, Users, TrendingUp, Smartphone, Shield, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const DeerikaCaseStudy = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero animation
      gsap.from('.hero-content', {
        opacity: 0,
        y: 100,
        duration: 1.2,
        ease: 'power3.out'
      });

      // Stagger animations for sections
      gsap.from('.section-reveal', {
        opacity: 0,
        y: 60,
        duration: 1,
        stagger: 0.2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.section-reveal',
          start: 'top 80%',
        }
      });

      // Stats counter animation
      gsap.from('.stat-number', {
        innerHTML: 0,
        duration: 2,
        ease: 'power2.out',
        snap: { innerHTML: 1 },
        scrollTrigger: {
          trigger: '.stats-section',
          start: 'top 80%',
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to Portfolio
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="hero-content text-center">
            <Badge variant="outline" className="mb-6">Case Study</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 font-satoshi">
              Deerika Grocery App
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Revolutionizing grocery shopping with an intuitive mobile-first experience that increased customer orders by 284% and transformed how people buy groceries online.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <Badge>UI/UX Design</Badge>
              <Badge>Mobile App</Badge>
              <Badge>E-commerce</Badge>
              <Badge>User Research</Badge>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild>
                <a href="https://www.deerika.in/" target="_blank" rel="noopener noreferrer">
                  View Live App <ExternalLink className="w-4 h-4 ml-2" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="py-16 px-4 section-reveal">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Project Overview</h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Deerika is a comprehensive grocery delivery platform that connects customers with local stores and fresh produce suppliers. The challenge was to create an intuitive, fast, and reliable shopping experience that could compete with established players while serving the unique needs of Indian grocery shoppers.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-primary" />
                  <span>6 months development timeline</span>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="w-5 h-5 text-primary" />
                  <span>50,000+ active users</span>
                </div>
                <div className="flex items-center gap-3">
                  <TrendingUp className="w-5 h-5 text-primary" />
                  <span>284% increase in orders</span>
                </div>
              </div>
            </div>
            <div className="glass p-8 rounded-2xl">
              <h3 className="text-xl font-semibold mb-4">Key Metrics</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-muted-foreground">User Retention</span>
                    <span className="font-semibold">87%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{width: '87%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-muted-foreground">App Store Rating</span>
                    <span className="font-semibold">4.6/5</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{width: '92%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-muted-foreground">Order Completion</span>
                    <span className="font-semibold">94%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{width: '94%'}}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Challenge */}
      <section className="py-16 px-4 section-reveal">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">The Challenge</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6">
              <Smartphone className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-3">Mobile-First Experience</h3>
              <p className="text-muted-foreground">
                Creating a seamless mobile experience for grocery shopping with complex product categories and varying quantities.
              </p>
            </Card>
            <Card className="p-6">
              <Shield className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-3">Trust & Security</h3>
              <p className="text-muted-foreground">
                Building user confidence in online grocery shopping with secure payments and reliable delivery tracking.
              </p>
            </Card>
            <Card className="p-6">
              <Zap className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-3">Speed & Performance</h3>
              <p className="text-muted-foreground">
                Ensuring fast load times and smooth navigation despite complex product catalogs and real-time inventory updates.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="py-16 px-4 section-reveal">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">The Solution</h2>
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Design Strategy</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-medium mb-2">1. User-Centric Research</h4>
                  <p className="text-muted-foreground">
                    Conducted extensive user interviews with 200+ grocery shoppers to understand pain points, shopping behaviors, and expectations for online grocery platforms.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-medium mb-2">2. Intuitive Navigation</h4>
                  <p className="text-muted-foreground">
                    Designed a category-based navigation system with smart search, filters, and predictive suggestions to help users find products quickly.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-medium mb-2">3. Trust Building</h4>
                  <p className="text-muted-foreground">
                    Implemented transparent pricing, real-time delivery tracking, and secure payment gateways to build user confidence and encourage repeat purchases.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-6">Key Features</h3>
              <div className="space-y-4">
                <div className="glass p-4 rounded-lg">
                  <h4 className="font-medium mb-2">Smart Product Discovery</h4>
                  <p className="text-sm text-muted-foreground">AI-powered recommendations and visual search capabilities</p>
                </div>
                <div className="glass p-4 rounded-lg">
                  <h4 className="font-medium mb-2">Real-time Inventory</h4>
                  <p className="text-sm text-muted-foreground">Live stock updates to prevent order cancellations</p>
                </div>
                <div className="glass p-4 rounded-lg">
                  <h4 className="font-medium mb-2">Flexible Delivery</h4>
                  <p className="text-sm text-muted-foreground">Multiple delivery slots with live tracking</p>
                </div>
                <div className="glass p-4 rounded-lg">
                  <h4 className="font-medium mb-2">Multi-Payment Options</h4>
                  <p className="text-sm text-muted-foreground">UPI, cards, wallets, and cash on delivery</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-16 px-4 stats-section section-reveal">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Results & Impact</h2>
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2 stat-number">284</div>
              <div className="text-sm text-muted-foreground">% Increase in Orders</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2 stat-number">87</div>
              <div className="text-sm text-muted-foreground">% User Retention Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2 stat-number">50</div>
              <div className="text-sm text-muted-foreground">K+ Active Users</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2 stat-number">4.6</div>
              <div className="text-sm text-muted-foreground">/5 App Store Rating</div>
            </div>
          </div>
          
          <div className="glass p-8 rounded-2xl">
            <h3 className="text-2xl font-semibold mb-6 text-center">Business Impact</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-medium mb-4">Customer Success</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• 40% reduction in order cancellations</li>
                  <li>• 60% increase in average order value</li>
                  <li>• 92% customer satisfaction score</li>
                  <li>• 75% of users make repeat purchases within 30 days</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-medium mb-4">Business Growth</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• 200% growth in monthly revenue</li>
                  <li>• Expanded to 15+ cities</li>
                  <li>• 500+ partner stores onboarded</li>
                  <li>• Featured in top 10 grocery apps</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-16 px-4 section-reveal">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Technologies & Tools</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Design</h3>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline">Figma</Badge>
                <Badge variant="outline">Adobe XD</Badge>
                <Badge variant="outline">Sketch</Badge>
                <Badge variant="outline">Principle</Badge>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Development</h3>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline">React Native</Badge>
                <Badge variant="outline">Node.js</Badge>
                <Badge variant="outline">MongoDB</Badge>
                <Badge variant="outline">AWS</Badge>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Analytics</h3>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline">Google Analytics</Badge>
                <Badge variant="outline">Mixpanel</Badge>
                <Badge variant="outline">Hotjar</Badge>
                <Badge variant="outline">Firebase</Badge>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Next Project */}
      <section className="py-16 px-4 section-reveal">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready for Your Next Project?</h2>
          <p className="text-muted-foreground mb-8 text-lg">
            Let's create something amazing together. I'd love to help bring your vision to life with user-centered design and strategic thinking.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link to="/#contact">Start a Project</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/#work">View More Work</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DeerikaCaseStudy;