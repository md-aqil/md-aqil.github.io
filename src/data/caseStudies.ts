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
    id: 'changecaptain',
    title: 'Change Captain',
    client: 'ChangeCaptain.co',
    challenge:
      'Finance teams lacked visibility into engineering ROI, while developers were burdened by manual R&D tax credit tagging and labor capitalization tracking.',
    process:
      'Designed a code-as-truth automation platform that eliminates manual tagging. Developed a complex interactive ROI calculator and unified technical activity with GAAP/IFRS compliance.',
    psychology:
      'Leveraged the "Power of Objectivity" through automated data, reducing cognitive load for finance teams and friction for engineering teams.',
    results: {
      savings: '+50%',
      visibility: '100%',
      efficiency: '+40%'
    },
    image:
      '/changecaptain-mockup.png', 
    tags: ['FinTech', 'SaaS', 'Automation', 'Wordpress']
  },
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
      '/deerika-mockup.png',
    tags: ['E-commerce', 'Mobile App', 'Grocery Delivery']
  },
  {
    id: 'velvet-reel',
    title: 'The Velvet Reel',
    client: 'Velvet Reel Entertainment',
    challenge: 'Redefining the talent acquisition landscape by creating a premium, psychology-led platform for actors, models, and directors to build elite portfolios.',
    process: 'Combining high-fashion editorial aesthetics with a robust recruitment engine and automated talent verification workflows.',
    psychology: 'Self-Determination Theory & Social Proof',
    results: {
      growth: '+142%',
      talents: '5,000+',
      efficiency: '60%'
    },
    image: '/velvetreel-mockup.png',
    tags: ['Entertainment', 'Marketplace', 'Next.js']
  },
  {
    id: 'stay-clueless',
    title: 'Stay Clueless',
    client: 'StayClueless.com',
    challenge: 'Transforming a streetwear brand into a lifestyle movement for travelers. The goal was to bridge high-fashion aesthetics with e-commerce conversion optimization.',
    process: 'Developed a storytelling-first digital storefront with interactive collection reveals and a seamless mobile-native shopping experience.',
    psychology: 'Social Identity & Scarcity Principle',
    results: {
      growth: '+210%',
      community: '10k+',
      conversion: '+45%'
    },
    image: '/stayclueless-mockup.png',
    tags: ['Streetwear', 'E-commerce', 'Lifestyle']
  },
  {
    id: 'houssy',
    title: 'Houssy.in',
    client: 'Houssy.in',
    challenge:
      'Homebuyers in India faced a fragmented, trust-deficient property search experience — overwhelming listings, zero personalization, and no transparency in the buyer journey.',
    process:
      'Designed a psychology-led property discovery platform with curated listings, visual storytelling, a smart filter UX, and a seamless inquiry-to-viewing pipeline that builds trust at every step.',
    psychology:
      'Choice Architecture & Trust Signaling — reducing decision paralysis by surfacing the right properties at the right time with social proof and verified badges.',
    results: {
      inquiries: '+320%',
      trust: '+85%',
      conversion: '+60%'
    },
    image: '/houssy-mockup.png',
    tags: ['Real Estate', 'PropTech', 'UI/UX Design']
  },
  {
    id: 'goatx',
    title: 'GoatX',
    client: 'GoatX.io',
    challenge:
      'Bridging the gap between traditional goat farming and Web3 investors — creating a credible, transparent, and visually compelling DeFi platform for fractional on-chain livestock ownership.',
    process:
      'Designed a full Web3 landing page from the ground up, including NFT tier architecture, dual-token economy visualization, live asset verification UI, an interactive roadmap, and a tokenomics dashboard.',
    psychology:
      'Trust Architecture & Novelty Effect — using radical transparency (live farm CCTV feeds, blockchain-verified tags) and premium visual storytelling to convert Web3 skeptics into early investors.',
    results: {
      'NFT Tiers': '4 Designed',
      'Trust UX': 'Full Stack',
      'Roadmap': '4 Phases'
    },
    image: '/goatx-mockup.png',
    tags: ['Web3', 'Blockchain', 'DeFi', 'NFT']
  },
  {
    id: 'exotic',
    title: 'Exotic',
    client: 'exoticstore.in',
    challenge:
      'Designing a premium e-commerce brand identity and Shopify storefront for a women\'s luxury handbag label — making artisan leather goods feel aspirational, discoverable, and effortless to purchase online.',
    process:
      'Built a full visual identity system and e-commerce UI — including logo, color system, collection page layouts, product detail pages, promotional banners, and marketing creatives for Amazon, Myntra, and direct D2C.',
    psychology:
      'Aspirational Identity & Sensory Substitution — using rich imagery, editorial typography, and a magenta-gold palette to trigger tactile desire and luxury association in a purely digital shopping experience.',
    results: {
      'Channels': '3 Platforms',
      'Collections': '6+ Designed',
      'Brand System': 'Complete'
    },
    image: '',
    tags: ['E-Commerce', 'Brand Identity', 'Fashion', 'UI/UX']
  }
];
