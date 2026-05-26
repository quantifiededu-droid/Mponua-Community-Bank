import { useState, useEffect } from 'react';
import { 
  ArrowRight, Users, Sparkles, Sprout, ShoppingBag, Landmark, 
  ChevronLeft, ChevronRight, TrendingUp, ShieldCheck, Mail, Phone, Calendar, Clock
} from 'lucide-react';
import { LATEST_NEWS, PRODUCTS } from '../data';
import { BankProduct } from '../types';
// @ts-ignore
import cocoaFarmersImg from '../assets/images/cocoa_farmers_mponua_1779802964608.png';

interface HomeProps {
  setActiveTab: (tab: string) => void;
  setSelectedProductCategory: (category: 'savings' | 'loans' | 'remittance') => void;
}

export default function Home({ setActiveTab, setSelectedProductCategory }: HomeProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedProductType, setSelectedProductType] = useState<'savings' | 'loans'>('savings');
  
  // Custom quick savings rates calculator
  const [calcPrincipal, setCalcPrincipal] = useState(500);
  const [calcMonths, setCalcMonths] = useState(12);
  const [calcResult, setCalcResult] = useState({ total: 0, interest: 0 });

  const slides = [
    {
      title: 'Supporting Cocoa Farming Families',
      description: 'Strengthening local enterprises, crop yields, and family livelihoods since 1983. Proudly serving Ghanaian cocoa farming cooperatives and small businesses with community-first banking.',
      image: cocoaFarmersImg,
      ctaText: 'Learn About Agri Loans',
      ctaAction: 'products'
    },
    {
      title: 'Our Community. Our Future. Our Bank.',
      description: 'Strengthening local enterprises and agricultural builders in the Eastern & neighboring regions. Formerly Mponua Rural Bank, now reimagined as Mponua Community Bank.',
      image: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&q=80&w=1600',
      ctaText: 'Explore Our Core Products',
      ctaAction: 'products'
    },
    {
      title: 'Drive Your Business Forward.',
      description: 'Unlock flexible working capital, small business Susu credits, and group loan cycles tailored for traders, market vendors, and cooperative members.',
      image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=1600',
      ctaText: 'Calculate Loan Terms',
      ctaAction: 'portal'
    },
    {
      title: 'Secure Savings For Peaceful Security.',
      description: 'Your deposits are 100% fortified under Bank of Ghana guidelines. Check out high-yield fixed deposits, kiddy plans, and regular interest savings.',
      image: 'https://images.unsplash.com/photo-1554197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=1600',
      ctaText: 'View Our Branch Directory',
      ctaAction: 'branches'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 7000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    // Basic calculation for savings estimator
    // Simple rate assumed: 6.5% for simulation
    const annualRate = 0.065;
    const monthlyRate = annualRate / 12;
    let accumulated = calcPrincipal;
    
    // Simulate recurring monthly plan
    for (let i = 1; i < calcMonths; i++) {
      accumulated = (accumulated + calcPrincipal) * (1 + monthlyRate);
    }
    
    const principalPaid = calcPrincipal * calcMonths;
    const totalWithRate = accumulated * (1 + monthlyRate);
    const interestEarned = Math.max(0, parseFloat((totalWithRate - principalPaid).toFixed(2)));
    
    setCalcResult({
      total: parseFloat(totalWithRate.toFixed(2)),
      interest: interestEarned
    });
  }, [calcPrincipal, calcMonths]);

  const handleProductNavigate = (category: 'savings' | 'loans' | 'remittance') => {
    setSelectedProductCategory(category);
    setActiveTab('products');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div id="home_tab_view" className="bg-slate-50 text-slate-900 font-sans">
      
      {/* Hero Carousel */}
      <section id="hero_slider" className="relative h-[550px] sm:h-[650px] overflow-hidden bg-blue-950 text-white">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100 scale-100 z-10' : 'opacity-0 scale-95 z-0'
            }`}
          >
            {/* Background Image with Dark Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-950/90 via-blue-900/40 to-black/80 mix-blend-multiply" />
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            {/* Slide Content */}
            <div className="absolute inset-0 flex items-center">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mr-auto">
                <div className="max-w-2xl space-y-6">
                  <span className="inline-block bg-amber-500 text-blue-950 text-[10px] font-black px-2.5 py-1 rounded mb-4 uppercase tracking-tighter shadow-sm">
                    Since 1983 • Celebrating 40+ Years of Excellence
                  </span>
                  <h2 className="text-3xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight">
                    {slide.title}
                  </h2>
                  <p className="text-base sm:text-xl text-blue-100 max-w-xl leading-relaxed font-light">
                    {slide.description}
                  </p>
                  <div className="pt-4 flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
                    <button
                      onClick={() => {
                        if (slide.ctaAction === 'products') {
                          handleProductNavigate('savings');
                        } else {
                          setActiveTab(slide.ctaAction);
                        }
                      }}
                      className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-3.5 rounded font-bold text-sm tracking-wide shadow-md hover:-translate-y-0.5 transition-transform cursor-pointer inline-flex items-center justify-center space-x-2"
                    >
                      <span>{slide.ctaText}</span>
                      <ArrowRight className="h-4 w-4" />
                    </button>
                    <button
                      onClick={() => setActiveTab('about')}
                      className="border-2 border-white text-white px-6 py-3.5 rounded font-bold text-sm hover:bg-white/10 transition-colors cursor-pointer"
                    >
                      Our Story & History
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Slides Navigation */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-black/30 hover:bg-black/60 p-2.5 rounded-full border border-white/10 text-white hover:scale-110 transition-all cursor-pointer"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-black/30 hover:bg-black/60 p-2.5 rounded-full border border-white/10 text-white hover:scale-110 transition-all cursor-pointer"
        >
          <ChevronRight className="h-6 w-6" />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex space-x-2.5">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`h-2.5 rounded-full transition-all cursor-pointer ${
                idx === currentSlide ? 'w-8 bg-amber-400' : 'w-2.5 bg-white/40'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Quick Access Action Grid */}
      <section className="bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 border-x border-b border-slate-200 bg-white">
            
            <div 
              onClick={() => handleProductNavigate('savings')}
              className="p-8 border-b sm:border-b-0 sm:border-r border-slate-200 hover:bg-blue-50/20 transition-colors flex flex-col justify-between group cursor-pointer"
            >
              <div>
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-900 group-hover:bg-blue-900 group-hover:text-white mb-6 transition-all duration-300">
                  <Landmark className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Personal Banking</h3>
                <p className="text-sm text-slate-500 mb-4">Savings, current accounts, Susu schemes & fixed deposits tailored for your future.</p>
              </div>
              <span className="text-blue-600 text-xs font-bold flex items-center gap-1 uppercase tracking-wider mt-4">Learn More →</span>
            </div>

            <div 
              onClick={() => handleProductNavigate('loans')}
              className="p-8 border-b sm:border-b-0 lg:border-r border-slate-200 hover:bg-blue-50/20 transition-colors flex flex-col justify-between group cursor-pointer"
            >
              <div>
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-900 group-hover:bg-blue-900 group-hover:text-white mb-6 transition-all duration-300">
                  <Sprout className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">SME & Agri Loans</h3>
                <p className="text-sm text-slate-500 mb-4">Empowering local entrepreneurs and farmers with credit facilities & support programs.</p>
              </div>
              <span className="text-blue-600 text-xs font-bold flex items-center gap-1 uppercase tracking-wider mt-4">Learn More →</span>
            </div>

            <div 
              onClick={() => handleProductNavigate('remittance')}
              className="p-8 border-b sm:border-r border-slate-200 hover:bg-blue-50/20 transition-colors flex flex-col justify-between group cursor-pointer"
            >
              <div>
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-900 group-hover:bg-blue-900 group-hover:text-white mb-6 transition-all duration-300">
                  <ShoppingBag className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Agent & Money Payouts</h3>
                <p className="text-sm text-slate-500 mb-4">Western Union and money transfers payouts hosted close to your market stall.</p>
              </div>
              <span className="text-blue-600 text-xs font-bold flex items-center gap-1 uppercase tracking-wider mt-4">Find payout →</span>
            </div>

            <div 
              onClick={() => setActiveTab('portal')}
              className="p-8 hover:bg-blue-50/20 transition-colors flex flex-col justify-between group cursor-pointer"
            >
              <div>
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-900 group-hover:bg-blue-900 group-hover:text-white mb-6 transition-all duration-300">
                  <Users className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Personal Loan Estimator</h3>
                <p className="text-sm text-slate-500 mb-4">Calculate customized repayment values, interest ratios, and periods dynamically.</p>
              </div>
              <span className="text-blue-600 text-xs font-bold flex items-center gap-1 uppercase tracking-wider mt-4">Try Calculator →</span>
            </div>

          </div>
        </div>
      </section>

      {/* Main Core Values Banner */}
      <section className="relative py-20 bg-blue-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <div className="absolute top-0 left-0 w-full h-full" style={{ backgroundImage: 'radial-gradient(circle at 1.5px 1.5px, white 1px, transparent 0)', backgroundSize: '24px 24px' }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block bg-amber-500 text-blue-950 text-[10px] font-black px-2 py-0.5 rounded tracking-tighter uppercase mb-3">Since 1983 • Community Growth</span>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Your Partner for <span className="text-amber-400">Community</span> Growth
            </h2>
            <p className="text-blue-100 mt-4 leading-relaxed font-light text-sm sm:text-base">
              Providing innovative and accessible financial solutions to empower individuals and businesses in our community since 1983.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-blue-950/40 border border-amber-400/20 rounded-2xl p-8 hover:-translate-y-1 transition-all shadow-lg backdrop-blur-sm">
              <div className="bg-amber-500 text-blue-950 w-12 h-12 rounded-lg flex items-center justify-center mb-6 shadow font-bold">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Secured Trust & Integrity</h3>
              <p className="text-blue-100 text-sm leading-relaxed font-light">
                Regulated rigorously by the Bank of Ghana. We maintain sound financial liquidity sheets and apply modern technical protocols, ensuring complete protection.
              </p>
            </div>

            <div className="bg-blue-950/40 border border-amber-400/20 rounded-2xl p-8 hover:-translate-y-1 transition-all shadow-lg backdrop-blur-sm">
              <div className="bg-amber-500 text-blue-950 w-12 h-12 rounded-lg flex items-center justify-center mb-6 shadow font-bold">
                <TrendingUp className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Proactive Rural Financing</h3>
              <p className="text-blue-100 text-sm leading-relaxed font-light">
                We believe in growing local food security. We structure tailored agro-credit terms that directly accommodate cocoa crops seasonal harvest patterns.
              </p>
            </div>

            <div className="bg-blue-950/40 border border-amber-400/20 rounded-2xl p-8 hover:-translate-y-1 transition-all shadow-lg backdrop-blur-sm">
              <div className="bg-amber-500 text-blue-950 w-12 h-12 rounded-lg flex items-center justify-center mb-6 shadow font-bold">
                <Users className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Susu Collectors Network</h3>
              <p className="text-blue-100 text-sm leading-relaxed font-light">
                We bring the banking institution straight to your doorstep. Our verified Susu coordinators collect funds straight from sellers saving time and travel costs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products & Rates Selector */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
            <div>
              <span className="text-amber-600 font-bold uppercase tracking-wider text-xs">Solutions Built For You</span>
              <h2 className="text-3xl font-extrabold tracking-tight text-blue-900 mt-1.5">
                Our Financial Programs
              </h2>
            </div>
            
            {/* Category Toggle buttons */}
            <div className="flex bg-slate-100 p-1.5 rounded-lg mt-6 md:mt-0">
              <button
                onClick={() => setSelectedProductType('savings')}
                className={`px-5 py-2 rounded text-sm font-semibold transition-all cursor-pointer ${
                  selectedProductType === 'savings'
                    ? 'bg-blue-900 text-white shadow'
                    : 'text-slate-600 hover:text-blue-900'
                }`}
              >
                Deposit & Savings
              </button>
              <button
                onClick={() => setSelectedProductType('loans')}
                className={`px-5 py-2 rounded text-sm font-semibold transition-all cursor-pointer ${
                  selectedProductType === 'loans'
                    ? 'bg-blue-900 text-white shadow'
                    : 'text-slate-600 hover:text-blue-900'
                }`}
              >
                Agricultural & SME Loans
              </button>
            </div>
          </div>

          {/* Render Products Filter */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PRODUCTS.filter(p => p.category === selectedProductType).slice(0, 3).map((product: BankProduct) => (
              <div 
                key={product.id}
                className="bg-slate-50 hover:bg-white border border-slate-100 hover:border-blue-500/20 rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <span className="bg-blue-100 text-blue-900 text-[10px] uppercase font-bold px-2.5 py-1 rounded">
                      {product.category} program
                    </span>
                    {product.interestRate && (
                      <span className="text-amber-600 text-xs font-bold bg-amber-50 px-2.5 py-1 rounded">
                        {product.interestRate}
                      </span>
                    )}
                  </div>
                  <h3 className="text-xl font-bold text-slate-950 mb-2">{product.title}</h3>
                  <p className="text-xs text-amber-600 font-medium mb-3">{product.tagline}</p>
                  <p className="text-sm text-slate-600 mb-6 leading-relaxed line-clamp-3">
                    {product.description}
                  </p>
                  
                  <ul className="space-y-2 mb-6">
                    {product.features.slice(0, 3).map((feat, i) => (
                      <li key={i} className="flex items-center text-xs text-slate-500">
                        <span className="w-1.5 h-1.5 bg-amber-500 rounded-full mr-2" />
                        {feat}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="border-t border-slate-100 pt-4 flex items-center justify-between mt-auto">
                  {product.minBalance && (
                    <div className="text-left">
                      <p className="text-[10px] text-slate-450 uppercase font-semibold">Min Opening</p>
                      <p className="text-xs font-bold text-slate-750">{product.minBalance}</p>
                    </div>
                  )}
                  <button
                    onClick={() => handleProductNavigate(selectedProductType)}
                    className="ml-auto flex items-center space-x-1.5 text-xs font-bold text-blue-900 hover:text-amber-600 cursor-pointer"
                  >
                    <span>Full Details</span>
                    <ArrowRight className="h-3 w-3" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Savings Estimator Widget / Live Interest Plan */}
      <section className="py-20 bg-slate-100/50 border-t border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-200 grid grid-cols-1 lg:grid-cols-12">
            
            {/* Left Column info */}
            <div className="p-8 sm:p-12 lg:col-span-6 bg-blue-900 text-white flex flex-col justify-between">
              <div>
                <span className="text-amber-400 font-bold uppercase tracking-wider text-xs">Aesthetic Investment Planning</span>
                <h3 className="text-2xl sm:text-3xl font-bold mt-2 text-white">
                  See Your Regular Susu & Savings Grow Over Time
                </h3>
                <p className="text-blue-100 text-sm mt-4 leading-relaxed font-light">
                  Mponua Community Bank sets high competitive interest limits for community savings accounts. Use our mathematical estimator widget to preview estimated earnings with <strong>6.5% interest per year</strong>.
                </p>
              </div>

              <div className="mt-8 pt-8 border-t border-white/10 space-y-4">
                <div className="flex items-center space-x-3">
                  <span className="bg-amber-400 text-blue-950 p-1.5 rounded font-bold text-xs">PRO-TIPS</span>
                  <p className="text-xs text-blue-100">Cocoa farming bonuses can compound in our quarterly Fixed Deposit schemes!</p>
                </div>
              </div>
            </div>

            {/* Right Column Controls */}
            <div className="p-8 sm:p-12 lg:col-span-6 flex flex-col justify-between">
              <div className="space-y-6">
                {/* Principal range */}
                <div>
                  <div className="flex justify-between mb-2">
                    <label id="lbl_calculator_amount" className="text-sm font-semibold text-slate-700">Monthly Deposit Contribution</label>
                    <span className="text-sm font-extrabold text-blue-900">GH₵ {calcPrincipal}</span>
                  </div>
                  <input
                    id="input_calculator_amount"
                    type="range"
                    min="10"
                    max="5000"
                    step="10"
                    value={calcPrincipal}
                    onChange={(e) => setCalcPrincipal(Number(e.target.value))}
                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-900"
                  />
                  <div className="flex justify-between text-[10px] text-slate-400 mt-1">
                    <span>GH₵ 10</span>
                    <span>GH₵ 5,000</span>
                  </div>
                </div>

                {/* Duration select */}
                <div>
                  <div className="flex justify-between mb-2">
                    <label id="lbl_calculator_months" className="text-sm font-semibold text-slate-700">Target Duration</label>
                    <span className="text-sm font-extrabold text-blue-900">{calcMonths} Months</span>
                  </div>
                  <input
                    id="input_calculator_months"
                    type="range"
                    min="3"
                    max="60"
                    step="1"
                    value={calcMonths}
                    onChange={(e) => setCalcMonths(Number(e.target.value))}
                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-900"
                  />
                  <div className="flex justify-between text-[10px] text-slate-400 mt-1">
                    <span>3 Months</span>
                    <span>60 Months (5 Years)</span>
                  </div>
                </div>
              </div>

              {/* Simulation Output Layout */}
              <div className="mt-8 bg-slate-50 border border-slate-100 p-6 rounded-2xl flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
                <div>
                  <span className="text-[10px] text-slate-400 uppercase font-bold block">Estimated Future Fund</span>
                  <span className="text-2xl sm:text-3xl font-black text-blue-900">GH₵ {calcResult.total.toLocaleString()}</span>
                </div>
                <div>
                  <span className="text-[10px] text-slate-400 uppercase font-bold block sm:text-right">Estimated Yield Earned</span>
                  <span className="text-lg font-bold text-amber-600 block sm:text-right">+ GH₵ {calcResult.interest.toLocaleString()}</span>
                </div>
              </div>

              <button
                onClick={() => setActiveTab('portal')}
                className="mt-6 w-full py-3.5 bg-blue-900 hover:bg-blue-800 text-white text-sm font-bold rounded shadow hover:shadow-lg transition-all cursor-pointer text-center block"
              >
                Use Personal Loan Estimator
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* News & Public Announcements with dynamic read modal */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-amber-600 font-bold uppercase tracking-wider text-xs">Public Bulletin & Press Releases</span>
            <h2 className="text-3xl font-extrabold tracking-tight text-blue-900 mt-1.5">
              News & Community Announcements
            </h2>
            <div className="h-1 bg-amber-400 w-16 mx-auto mt-4 rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {LATEST_NEWS.map((post) => (
              <article 
                key={post.id}
                id={`news_article_${post.id}`}
                className="bg-slate-50 border border-slate-100 rounded-2xl overflow-hidden shadow-sm flex flex-col justify-between hover:shadow-lg transition-all"
              >
                <div>
                  <div className="h-48 overflow-hidden relative bg-blue-900">
                    <img
                      src={post.imageUrl}
                      alt={post.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500 opacity-90"
                      referrerPolicy="no-referrer"
                    />
                    <span className="absolute top-4 left-4 bg-blue-900 text-white text-[10px] font-bold uppercase px-2.5 py-1 rounded">
                      {post.category}
                    </span>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center space-x-2 text-xs text-slate-400 mb-3">
                      <Calendar className="h-3.5 w-3.5 text-amber-500" />
                      <span>{post.date}</span>
                    </div>
                    
                    <h3 className="text-lg font-bold text-slate-900 mb-2 leading-snug line-clamp-2">
                      {post.title}
                    </h3>
                    
                    <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-light line-clamp-3">
                      {post.excerpt}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <button
                    onClick={() => {
                      // Trigger normal alert for simple readings or open virtual state in main App
                      alert(`--- ${post.title} ---\n\n${post.content}\n\nDate published: ${post.date}`);
                    }}
                    className="text-xs font-bold text-blue-900 hover:text-amber-650 flex items-center space-x-1 hover:underline cursor-pointer"
                  >
                    <span>Read Full Story</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Happy Client Testimonials */}
      <section className="py-20 bg-slate-900 text-slate-100 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-amber-450 font-bold uppercase tracking-wider text-xs block">Customer Success Stories</span>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight mt-1 text-white">
              Sustaining Growth & Livelihoods
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-slate-950/40 border border-slate-800 p-8 rounded-xl relative shadow-md">
              <span className="text-5xl text-amber-500/10 font-serif absolute top-4 right-6">“</span>
              <p className="text-slate-300 text-sm leading-relaxed mb-6 italic">
                "I am a cocoa farmer in Amuana Praso. Saving my crop money used to be a problem. Mponua Community Bank introduced me to the Farmer savings vault. They also granted me specialized farming credit to access fertilizer early in the crop cycle. My yield increased by 40%!"
              </p>
              <div>
                <p className="text-white font-bold text-sm">Opanin Yaw Mensah</p>
                <p className="text-amber-500 text-xs font-semibold">Cocoa Farmer Cooperative Leader, Amuana Praso</p>
              </div>
            </div>

            <div className="bg-slate-950/40 border border-slate-800 p-8 rounded-xl relative shadow-md">
              <span className="text-5xl text-amber-500/10 font-serif absolute top-4 right-6">“</span>
              <p className="text-slate-300 text-sm leading-relaxed mb-6 italic">
                "Our daily trading requires fast cash layout to purchase supplies from Accra. The Mponua Susu collector visits my store daily in Koforidua Market. Because of my steady Susu saving, my micro-loan was approved in just a few days. Dynamic customer service!"
              </p>
              <div>
                <p className="text-white font-bold text-sm">Madam Deborah Oforiwaa</p>
                <p className="text-amber-500 text-xs font-semibold">Wholesale Textile Trader, Koforidua Market</p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
