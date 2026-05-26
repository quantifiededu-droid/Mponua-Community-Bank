import { Branch, TeamMember, BankProduct, NewsPost } from './types';

export const BRANCHES: Branch[] = [
  {
    id: 'amuana-praso',
    name: 'Head Office & Amuana Praso Branch',
    location: 'Amuana Praso, Eastern Region, Ghana',
    phone: '+233 (0) 50 123 4567',
    email: 'info@mponuacb.com',
    hours: 'Mon - Fri: 8:00 AM - 4:00 PM | Sat: 9:00 AM - 1:00 PM',
    manager: 'Mrs. Abigail Mensah-Prepeh',
    coordinates: { lat: 6.3681, lng: -0.8523 },
    details: 'Our main corporate headquarters. Located in Amuana Praso. Offers full retail, corporate and microfinance services.'
  },
  {
    id: 'nkawkaw',
    name: 'Nkawkaw Branch',
    location: 'Commercial Street, Nkawkaw, Ghana',
    phone: '+233 (0) 34 209 1122',
    email: 'nkawkaw@mponuacb.com',
    hours: 'Mon - Fri: 8:00 AM - 4:00 PM | Sat: 9:00 AM - 2:00 PM',
    manager: 'Mr. David Boateng',
    coordinates: { lat: 6.5528, lng: -0.7644 },
    details: 'Serving the bustling trading hub of Nkawkaw with tailored SME loans, Susu banking, and modern money transfer options.'
  },
  {
    id: 'anyinam',
    name: 'Anyinam Branch',
    location: 'Main Road, Anyinam, Eastern Region, Ghana',
    phone: '+233 (0) 34 209 3344',
    email: 'anyinam@mponuacb.com',
    hours: 'Mon - Fri: 8:00 AM - 4:00 PM',
    manager: 'Ms. Gladys Osei-Wusu',
    coordinates: { lat: 6.3811, lng: -0.5211 },
    details: 'Conveniently situated along the Accra-Kumasi highway, Anyinam branch supports farmers, local mining services, and retail traders.'
  },
  {
    id: 'new-abirem',
    name: 'New Abirem Branch',
    location: 'Market Street, Near District Assembly, New Abirem, Ghana',
    phone: '+233 (0) 50 987 6543',
    email: 'newabirem@mponuacb.com',
    hours: 'Mon - Fri: 8:00 AM - 4:00 PM | Sat: 8:30 AM - 1:00 PM',
    manager: 'Mr. Kingsley Appiah-Kubi',
    coordinates: { lat: 6.2944, lng: -0.9811 },
    details: 'Our dedicated branch serving New Abirem district with focus on agricultural financing, cocoa purchase support, and SME credit.'
  },
  {
    id: 'koforidua',
    name: 'Koforidua Branch',
    location: 'Central Market Road, Koforidua, Ghana',
    phone: '+233 (0) 34 202 5566',
    email: 'koforidua@mponuacb.com',
    hours: 'Mon - Fri: 8:00 AM - 4:30 PM | Sat: 9:00 AM - 3:00 PM',
    manager: 'Mrs. Harriet Agyeiwaa',
    coordinates: { lat: 6.0917, lng: -0.2600 },
    details: 'Our regional powerhouse branch in the Eastern Regional Capital. Excellent for corporate and government agency salary accounts.'
  },
  {
    id: 'jejeti',
    name: 'Jejeti Branch',
    location: 'Station Road, Jejeti, Ghana',
    phone: '+233 (0) 55 456 7890',
    email: 'jejeti@mponuacb.com',
    hours: 'Mon - Fri: 8:00 AM - 4:00 PM',
    manager: 'Mr. Samuel Boadi',
    coordinates: { lat: 6.4522, lng: -0.6122 },
    details: 'Fostering trade and agricultural production in Jejeti town since inception with customized loans and daily Susu mobilization.'
  }
];

export const TEAM: TeamMember[] = [
  {
    id: 'board-1',
    name: 'Major (Rtd) Kwabena Adjei-Okyere',
    role: 'Board Chairman',
    bio: 'A retired Major of the Ghana Armed Forces and an astute administrator. Under his visionary leadership, the bank has expanded from a single rural unit to six thriving branches throughout the Eastern Region.',
    type: 'board'
  },
  {
    id: 'board-2',
    name: 'Nana Yaw Boateng Amponsah II',
    role: 'Board Member & Traditional Representative',
    bio: 'An esteemed traditional leader representing the local communities and traditional councils. Assures the alignment of our banking policies with rural community progress.',
    type: 'board'
  },
  {
    id: 'board-3',
    name: 'Dr. Evelyn Serwaa Owusu',
    role: 'Board Secretary & Finance Specialist',
    bio: 'Lecturer in Finance and Development Studies with over 18 years of academic and professional consulting experience in banking regulation, accounting, and micro-loan portfolio risk management.',
    type: 'board'
  },
  {
    id: 'board-4',
    name: 'Mr. Samuel Osei-Tutu',
    role: 'Board Member & Legal Advisor',
    bio: 'Prominent Legal Practitioner in corporate disputes and banking regulations. Oversees compliance, corporate governance, and ethical legal compliance policies.',
    type: 'board'
  },
  {
    id: 'board-5',
    name: 'Mrs. Comfort Appiah',
    role: 'Board Member & Microenterprise Champion',
    bio: 'Experienced entrepreneur with over 20 years facilitating local agricultural cooperatives. She represents the interests of our market women and smallholders in strategy sessions.',
    type: 'board'
  },
  {
    id: 'mgt-1',
    name: 'Mr. Abraham K. Asare',
    role: 'Chief Executive Officer (CEO)',
    bio: 'A passionate, results-driven retail banking professional with 24 years of experience. He leads the strategic direction of Mponua Community Bank, transitioning traditional rural banking to modern digital and mobile platforms.',
    type: 'management'
  },
  {
    id: 'mgt-2',
    name: 'Mrs. Beatrice Mensah',
    role: 'Head of Credit Operations',
    bio: 'Expert credit risk analyst and rural lender. She designed our signature "Susu Farmers Reward Loans" and oversees credit disbursements, monitoring, and debt management.',
    type: 'management'
  },
  {
    id: 'mgt-3',
    name: 'Mr. Emmanuel Darko',
    role: 'Head of ICT & Electronic Banking',
    bio: 'Driving modern automation and mobile wallets integration. Leads the design of user interfaces, ATMs, network coverage across branches, and cyber protection systems.',
    type: 'management'
  },
  {
    id: 'mgt-4',
    name: 'Ms. Grace Ofori-Atta',
    role: 'Head of Finance & Internal Audit',
    bio: 'Chartered Accountant (ICAG) in charge of financial planning, liquidity safeguards, statutory reports to the Bank of Ghana, and apex compliance protocols.',
    type: 'management'
  }
];

export const PRODUCTS: BankProduct[] = [
  {
    id: 'prod-savings-1',
    category: 'savings',
    title: 'Regular Savings Account',
    tagline: 'Secure your future with flexible deposits and attractive returns.',
    description: 'The foundation of personal financial growth. Features a competitive standard interest rate, quick withdrawals at any of our branches, and zero setup fee.',
    minBalance: 'GH₵ 20.00',
    interestRate: 'Up to 5.5% per annum',
    features: [
      'Low opening balance requirement',
      'Instant SMS alerts on deposits and withdrawals',
      'Free quarterly statements upon request',
      'Eligible for securing overdrafts and emergency loans'
    ]
  },
  {
    id: 'prod-savings-2',
    category: 'savings',
    title: 'Mponua Susu Savings Scheme',
    tagline: 'Save gradually as you trade. Bring our mobile cash collectors to your shop.',
    description: 'Designed specifically for busy market women, shopkeepers, transport operators, and artisans who cannot leave their businesses to visit the bank. Our licensed Mobile Agents come straight to you daily.',
    minBalance: 'Flexible daily contribution',
    interestRate: 'Guaranteed bonuses based on regular daily saving cycles',
    features: [
      'Daily collection right at your shop or marketplace booth',
      'Enables high-priority access to Mponua micro loans',
      'Secure digital authentication checks per transaction',
      'Saves transport fare and commercial time'
    ]
  },
  {
    id: 'prod-savings-3',
    category: 'savings',
    title: 'Kiddy & Education Savings Account',
    tagline: 'Give your children the future they deserve. Prepare for fees early.',
    description: 'A premium-growth interest account handled by parents/guardians to safeguard their kids\' nursery, vocational or tertiary tuition. Ensures security during admission terms.',
    minBalance: 'GH₵ 10.00',
    interestRate: 'Bonus interest rate (+1.5% premium above regular savings)',
    features: [
      'Encourages children to build valuable savings discipline',
      'Special fee payment direct-draft discounts',
      'Annual awards and educational gift incentives',
      'No withdrawal fees for education-related payouts'
    ]
  },
  {
    id: 'prod-savings-4',
    category: 'savings',
    title: 'High-Yield Fixed Deposits',
    tagline: 'Maximize the return of your idle corporate or personal funds.',
    description: 'Tailored for associations, school boards, cocoa buying groups, churches, and individuals looking for stable, predictable investment vehicles. Choose term maturity periods from 91 days to 365 days.',
    minBalance: 'GH₵ 1,000.00',
    interestRate: 'Negotiable, competitive high yields based on amount & duration',
    features: [
      'Flexible tenure options (91, 182, or 365 Days)',
      'Can be rolled over automatically at maturity base',
      '100% principal and interest secured',
      'Exempt from standard micro-handling commissions'
    ]
  },
  {
    id: 'prod-savings-5',
    category: 'savings',
    title: 'Enterprise Current Account',
    tagline: 'Dynamic financial tools for business operations and payroll systems.',
    description: 'Streamline operational transactions, secure formal corporate chequebooks, process staff salary payrolls seamlessly, and unlock deep corporate overdraft reserves.',
    minBalance: 'GH₵ 100.00',
    interestRate: 'Premium commercial tier support',
    features: [
      'Dedicated relationship officer to manage business accounts',
      'Standard corporate chequebooks delivered to your nearest branch',
      'Mass salary payment processing for employees',
      'Direct integration with third-party local banking clearance systems'
    ]
  },
  {
    id: 'prod-loans-1',
    category: 'loans',
    title: 'Susu Microfinance Group Loans',
    tagline: 'No collateral? Form a group of 5, support each other, and grow together.',
    description: 'A co-guarantor group loan system. For small traders and micro-contractors. Group members assist each other through peer accountability, lowering interest risks.',
    minBalance: 'Active Susu savings record for at least 4 weeks',
    interestRate: 'Highly affordable microfinance terms',
    features: [
      'Zero traditional physical assets collateral required',
      'Flexible weekly or bi-weekly group repay options',
      'Financial training and accounting advisory workshops included',
      'Step-up credit increments upon successful group loan cycle repayment'
    ]
  },
  {
    id: 'prod-loans-2',
    category: 'loans',
    title: 'SME Commercial Working Capital',
    tagline: 'Finance container imports, local inventory purchases, and business expansions.',
    description: 'Fuel your formal business. Acquire stock during festive seasons or scale logistics. Backed by highly competitive valuation schedules and reasonable rates.',
    minBalance: 'Business registration records and bank statements required',
    interestRate: 'Flexible commercial rates',
    features: [
      'Rapid assessment within 5 working days',
      'Generous grace periods for inventory conversions',
      'Can construct specialized overdraft facilities',
      'Refinancing options for successful repeat business projects'
    ]
  },
  {
    id: 'prod-loans-3',
    category: 'loans',
    title: 'Agricultural Development Loans',
    tagline: 'Specialized financing matching farming planting and harvesting periods.',
    description: 'Specifically crafted for cocoa, maize, cassava, plantain, and poultry farmers. We understand your income depends on seasonal weather and harvest calendars, so we structure repayments around your selling cycles.',
    minBalance: 'Verification of farm location & size by our Credit Officer',
    interestRate: 'Subsidized community agriculture rate',
    features: [
      'Principal and interest repayments aligned with harvest sale months',
      'Financing for bulk fertilizers, hybrid seeds, and tractor rental hires',
      'Direct links to approved local warehouse buyers and distributors',
      'Special joint credit options for registered cocoa farmer cooperatives'
    ]
  },
  {
    id: 'prod-loans-4',
    category: 'loans',
    title: 'Payroll Salary Advance & Express Loans',
    tagline: 'Emergency home repair or school admission fees? Get credit within 24 hours.',
    description: 'For Government teachers, health workers, civil servants, and cooperative employees who receive their salaries through our bank. Standard process needs minimal papers.',
    minBalance: 'Minimum 2 consecutive salary payments through Mponua CB',
    interestRate: 'Low deducted salary payroll rate',
    features: [
      'Instant approval within 24 hours of form submission',
      'Repayments automatically deducted from incoming monthly payroll',
      'No hidden commissions or legal processing application costs',
      'Competitive multi-month term options'
    ]
  },
  {
    id: 'prod-remit-1',
    category: 'remittance',
    title: 'International Money Remittance',
    tagline: 'Receive money from relatives abroad quickly, safely, and in cash.',
    description: 'Receive remittances from the UK, USA, Europe, Canada, and elsewhere. Available at ALL our branches with instant cash payouts in Ghana Cedis.',
    features: [
      'Fully licensed partners: Western Union, MoneyGram, RIA, and WorldRemit',
      'Instant payout at any teller window across all 6 branches',
      'Requires only a valid ID and reference pickup code',
      'Zero conversion fees for the recipient'
    ]
  },
  {
    id: 'prod-remit-2',
    category: 'remittance',
    title: 'Mobile Money Agency (MoMo)',
    tagline: 'Your one-stop terminal for all networks. MTN, Telecel, and AT cash services.',
    description: 'Load cash into your phone or cash out instantly. Available directly at our branch tellers. Safer than wayside operators with secure vault backing.',
    features: [
      'Supported on MTN Mobile Money, Telecel Cash, and AT Money',
      'Full cash-out security with no liquidity shortages at our branches',
      'Safer transactions shielded from typical street agents fraud',
      'Direct link between your bank account and mobile wallet'
    ]
  },
  {
    id: 'prod-remit-3',
    category: 'remittance',
    title: 'Apex Link Cash Transfers',
    tagline: 'Send money to parents or suppliers sitting at any other Rural Bank in Ghana.',
    description: 'Maintained by ARB Apex Bank. Safe, fast, and secure instant domestic inter-bank fund transferring.',
    features: [
      'Connects over 140 rural and community banks nationwide',
      'Extremely safe and traceable funds transfer system',
      'Lowest transfer rates for local inter-district business transactions',
      'Recipient can cash out at their own home community bank within minutes'
    ]
  }
];

export const LATEST_NEWS: NewsPost[] = [
  {
    id: 'news-1',
    title: 'Mponua Community Bank Transitions All Branch Networks to Highly Secured Fiber Core',
    category: 'Technology Development',
    date: 'May 12, 2026',
    excerpt: 'To enhance transaction speeds, minimize digital down-times, and safeguard client bank records, our modern ICT team has successfully implemented fiber systems.',
    content: 'All six branches, starting from the Head Office at Amuana Praso through Anyinam, Nkawkaw, New Abirem, Jejeti, and Koforidua, are now linked with premium high-speed optical fiber lines. This milestone reduces customer transaction waiting time at teller windows by 75% and guards our records with world-class cloud backup operations.',
    imageUrl: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'news-2',
    title: 'Over 2,500 Cocoa and Cereal Farmers Share in Subsidized Agri-Equipment Loans',
    category: 'Community Support',
    date: 'April 20, 2026',
    excerpt: 'Ahead of the planting phase, the Board is excited to declare a subsidized agricultural input support loan scheme to raise food yields in our operational districts.',
    content: 'Staying true to our vision of encouraging the communities we serve, the Mponua Community Bank Board of Directors has approved a record funding facility aimed at our local peasant farmers. This grants subsidized access to quality fertilizers, tractors, and organic crop protectors, enabling them to expand crop farming outputs with ease.',
    imageUrl: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'news-3',
    title: 'Launch of "Mponua Mobile" & WhatsApp Banking Assistant Scheduled for Mid-Year',
    category: 'Product Launch',
    date: 'March 15, 2026',
    excerpt: 'Our valued customers can soon check personal Susu savings balances, purchase power tokens, and transfer cash to mobile wallets from their comfort.',
    content: 'We are delighted to tease our upcoming digital services, "Mponua Mobile" app & WhatsApp Banking. This digital innovation aligns Mponua Community Bank as a leading community bank in Ghana utilizing modern technology to serve rural traders, public workers, and farmers.',
    imageUrl: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=800'
  }
];
