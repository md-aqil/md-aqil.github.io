export type CaseStudy = {
  id: string;
  title: string;
  client: string;
  challenge: string;
  process: string;
  psychology: string;
  results: Record<string, string>;
  image: string;
  tags: string[];
};

export const caseStudies: CaseStudy[] = [
  {
    id: 'deerika-grocery',
    title: 'Deerika Grocery App',
    client: 'Deerika.in',
    challenge:
      'Traditional grocery shopping was time-consuming with limited delivery options and poor user experience leading to low customer retention.',
    process:
      'Redesigned the entire user journey from product discovery to checkout, implemented flexible delivery slots, and created a membership program with instant cashback rewards.',
    psychology:
      'Applied convenience psychology and instant gratification through same-day delivery and immediate cashback rewards',
    results: {
      orders: '+284%',
      retention: '+167%',
      satisfaction: '+92%'
    },
    image:
      'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=600&fit=crop',
    tags: ['E-commerce', 'Mobile App', 'Grocery Delivery']
  },
  {
    id: 'saas-dashboard',
    title: 'SaaS Dashboard Redesign',
    client: 'TechFlow Analytics',
    challenge:
      'Users were abandoning the complex analytics dashboard, leading to poor retention rates.',
    process:
      "Conducted user interviews, simplified navigation using Hick's Law, and implemented progressive disclosure.",
    psychology: 'Applied cognitive load theory to reduce information density by 60%',
    results: {
      engagement: '+142%',
      retention: '+85%',
      satisfaction: '+94%'
    },
    image:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
    tags: ['UX Research', 'Dashboard Design', 'B2B SaaS']
  },
  {
    id: 'ecommerce-app',
    title: 'E-commerce Mobile App',
    client: 'StyleHub Fashion',
    challenge:
      'Low conversion rates on mobile checkout flow, with 68% cart abandonment.',
    process:
      'Redesigned checkout using loss aversion principles and social proof indicators.',
    psychology:
      'Leveraged scarcity psychology and simplified decision-making pathways',
    results: {
      conversion: '+156%',
      revenue: '+89%',
      completion: '+134%'
    },
    image:
      'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop',
    tags: ['Mobile Design', 'E-commerce', 'Conversion Optimization']
  },
  {
    id: 'fintech-landing',
    title: 'FinTech Landing Page',
    client: 'CryptoVault',
    challenge:
      'Complex financial product needed clear communication to build trust with new users.',
    process:
      'Applied behavioral economics to design trust-building elements and clear value propositions.',
    psychology:
      'Used authority bias and social proof to overcome financial service skepticism',
    results: {
      signups: '+203%',
      engagement: '+78%',
      trust: '+167%'
    },
    image:
      'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=800&h=600&fit=crop',
    tags: ['Landing Page', 'FinTech', 'Trust Building']
  },
  {
    id: 'vaclav-fashion',
    title: 'Vaclav Fashion',
    client: 'Vaclav',
    challenge:
      'The fashion market often separates sustainability and luxury, with limited focus on inclusive sizing and timeless styles.',
    process:
      'Designed a mobile-first, minimal, luxury e-commerce experience with strong brand storytelling, sizing guides, and community features.',
    psychology:
      'Leveraged authority and social proof with storytelling, inclusive imagery, and transparency to build trust and desirability.',
    results: {
      recognition: 'Luxury label status',
      followers: '19K Instagram',
      satisfaction: 'High NPS'
    },
    image:
      'https://images.unsplash.com/photo-1520975916090-3105956dac38?w=800&h=600&fit=crop',
    tags: ['Fashion', 'E-commerce', 'Sustainability']
  }
];
