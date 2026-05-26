import { BankProduct } from '../types';
import { PRODUCTS } from '../data';
import { Sparkles, ArrowRight, ShieldCheck, CheckCircle2, DollarSign, Award, Clock } from 'lucide-react';

interface ProductsProps {
  selectedCategory: 'savings' | 'loans' | 'remittance';
  setSelectedCategory: (category: 'savings' | 'loans' | 'remittance') => void;
  setActiveTab: (tab: string) => void;
}

export default function Products({ selectedCategory, setSelectedCategory, setActiveTab }: ProductsProps) {
  
  const categoriesList = [
    { id: 'savings', label: 'Savings & Investments', count: PRODUCTS.filter(p => p.category === 'savings').length },
    { id: 'loans', label: 'Credit & Business Loans', count: PRODUCTS.filter(p => p.category === 'loans').length },
    { id: 'remittance', label: 'E-Banking & Remittance', count: PRODUCTS.filter(p => p.category === 'remittance').length },
  ] as const;

  const activeProducts = PRODUCTS.filter((p) => p.category === selectedCategory);

  return (
    <div id="products_tab_view" className="bg-gray-50 pb-20">
      
      {/* Banner */}
      <section className="bg-gradient-to-r from-blue-950 to-blue-900 text-white py-16 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <span className="text-amber-400 font-bold uppercase tracking-widest text-xs">Our Bank Catalog</span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight mt-2 text-white">
            Savings Assets & Loans
          </h2>
          <p className="text-blue-100 font-light mt-4 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Every product is structured down to earth to serve Ghanaian enterprise patterns, cocoa crop seasons, and student tuition deadlines.
          </p>
        </div>
      </section>

      {/* Filter Menu Bar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-3 sm:space-y-0 sm:space-x-4 bg-white p-4 rounded-2xl shadow-sm border border-slate-100 max-w-3xl mx-auto">
          {categoriesList.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`w-full sm:w-auto px-5 py-3 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center justify-center space-x-2 cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-blue-900 text-white shadow'
                  : 'text-slate-500 hover:bg-slate-50 hover:text-blue-900'
              }`}
            >
              <span>{cat.label}</span>
              <span className={`text-[10px] px-2 py-0.5 rounded-full ${
                selectedCategory === cat.id ? 'bg-amber-400 text-amber-950 font-bold' : 'bg-slate-200 text-slate-600'
              }`}>
                {cat.count}
              </span>
            </button>
          ))}
        </div>
      </section>

      {/* Products list grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-12">
          {activeProducts.map((product: BankProduct, index) => (
            <div 
              key={product.id}
              className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-lg border border-gray-100 transition-all grid grid-cols-1 lg:grid-cols-12"
            >
              
              {/* Product Info Left (or alternating) */}
              <div className="p-8 sm:p-12 lg:col-span-8 flex flex-col justify-between">
                <div>
                  <div className="flex items-center space-x-2.5 mb-3">
                    <span className="bg-blue-900/5 text-blue-900 text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                      {product.category}
                    </span>
                    {product.interestRate && (
                      <span className="bg-amber-100/60 text-amber-800 text-[10px] font-bold px-3 py-1 rounded-full">
                        {product.interestRate}
                      </span>
                    )}
                  </div>
                  
                  <h3 className="text-2xl sm:text-3xl font-black text-blue-900 tracking-tight">{product.title}</h3>
                  <p className="text-amber-805 font-semibold text-xs sm:text-sm mt-1.5 mb-4">{product.tagline}</p>
                  
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed font-light mb-8">
                    {product.description}
                  </p>

                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Key Solution Benefits:</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {product.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start space-x-2 text-xs sm:text-sm text-slate-505">
                        <CheckCircle2 className="h-5 w-5 text-amber-500 shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Submitting link button */}
                <div className="pt-8 border-t border-slate-100 mt-8 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 items-center justify-between">
                  <div className="flex space-x-3 text-xs text-slate-400 items-center">
                    <ShieldCheck className="h-4 w-4 text-amber-500 shrink-0" />
                    <span>Safe encryption guaranteed. Requires standard Ghana Card or ID.</span>
                  </div>
                  <button
                    onClick={() => {
                      setActiveTab('branches');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="w-full sm:w-auto bg-blue-900 hover:bg-slate-900 text-white px-6 py-3 rounded-xl font-bold text-xs flex items-center justify-center space-x-2 hover:shadow cursor-pointer animate-fade-in"
                  >
                    <span>Inquire At Nearest Branch</span>
                    <ArrowRight className="h-4.5 w-4.5" />
                  </button>
                </div>
              </div>

              {/* Requirements & Yield parameters Panel Right */}
              <div className="bg-slate-50 lg:col-span-4 p-8 sm:p-12 border-t lg:border-t-0 lg:border-l border-slate-100 flex flex-col justify-center text-center">
                <div className="space-y-6">
                  {product.minBalance && (
                    <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm animate-fade-in">
                      <span className="text-[10px] uppercase font-bold text-slate-400 block mb-1">Minimum Fund Requirement</span>
                      <span className="text-xl font-black text-blue-900 block">
                        {product.minBalance}
                      </span>
                    </div>
                  )}

                  {product.interestRate ? (
                    <div className="bg-blue-900/5 p-5 rounded-2xl border border-slate-100">
                      <span className="text-[10px] uppercase font-bold text-blue-90 block mb-1">Standard Account Yield</span>
                      <span className="text-lg font-bold text-amber-600 block">
                        {product.interestRate}
                      </span>
                    </div>
                  ) : (
                    <div className="bg-blue-900/5 p-5 rounded-2xl border border-slate-100">
                      <span className="text-[10px] uppercase font-bold text-blue-90 block mb-1 font-semibold">Service Coverage</span>
                      <span className="text-xs text-slate-600 block italic leading-tight">
                        Available across all six main branches daily.
                      </span>
                    </div>
                  )}

                  <div className="bg-white rounded-2xl p-5 border border-slate-100 text-left space-y-4 animate-fade-in">
                    <span className="text-[10px] uppercase font-bold text-slate-400 block">Requirements:</span>
                    <ul className="space-y-2 text-xs text-slate-500">
                      <li className="flex items-center">
                        <span className="w-1.5 h-1.5 bg-amber-400 rounded-full mr-2" />
                        Valid Ghana Card Passport ID
                      </li>
                      <li className="flex items-center">
                        <span className="w-1.5 h-1.5 bg-amber-400 rounded-full mr-2" />
                        2 Passport-sized Photographs
                      </li>
                      <li className="flex items-center">
                        <span className="w-1.5 h-1.5 bg-amber-400 rounded-full mr-2" />
                        Completed Form Details (or portal)
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
