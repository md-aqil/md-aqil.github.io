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
  }
];
