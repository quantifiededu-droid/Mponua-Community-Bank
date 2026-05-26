import { useState } from 'react';
import { Building2, Menu, X, ShieldCheck } from 'lucide-react';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function Navbar({ activeTab, setActiveTab }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'products', label: 'Products & Services' },
    { id: 'branches', label: 'Branches' },
    { id: 'portal', label: 'Calculators & Tools' },
    { id: 'contact', label: 'Contact Support' },
  ];

  const handleNavClick = (id: string) => {
    setActiveTab(id);
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header id="nav_header" className="sticky top-0 z-50 bg-white text-slate-900 border-b border-slate-200 shadow-sm">
      {/* Top Bar for trust elements */}
      <div className="bg-blue-950 border-b border-blue-900/30 text-xs py-1.5 px-4 sm:px-6 lg:px-8 flex justify-between items-center text-slate-300">
        <div className="flex items-center space-x-2">
          <ShieldCheck className="h-3.5 w-3.5 text-amber-400" />
          <span>Licensed by the <strong>Bank of Ghana</strong></span>
          <span className="hidden sm:inline text-blue-800">|</span>
          <span className="hidden sm:inline">Member of Ghana Deposit Protection Corp.</span>
        </div>
        <div className="flex space-x-4">
          <span className="hidden md:inline">Call Center: +233 (0) 50 123 4567</span>
          <span className="text-amber-400 font-medium animate-pulse">● Secure Banking Portal</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div 
            id="brand_logo_container"
            onClick={() => handleNavClick('home')} 
            className="flex items-center space-x-3 cursor-pointer group"
          >
            <div className="bg-blue-900 p-2.5 rounded-lg text-white transition-all group-hover:scale-105">
              <Building2 className="h-6 w-6" />
            </div>
            <div>
              <h1 className="text-lg sm:text-xl font-extrabold tracking-tight text-blue-900 flex items-center uppercase">
                Mponua
              </h1>
              <span className="text-[10px] text-slate-500 tracking-widest uppercase block -mt-1 font-semibold">
                Community Bank
              </span>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex space-x-1 xl:space-x-2 items-center">
            {navItems.map((item) => (
              <button
                key={item.id}
                id={`nav_btn_${item.id}`}
                onClick={() => handleNavClick(item.id)}
                className={`px-3 py-2 text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  activeTab === item.id
                    ? 'text-blue-900 border-b-2 border-blue-900 rounded-none font-bold px-3 py-2'
                    : 'text-slate-600 hover:text-blue-950 hover:bg-slate-50 rounded-md'
                }`}
              >
                {item.label}
              </button>
            ))}
            <button
              id="cta_open_account"
              onClick={() => handleNavClick('portal')}
              className="ml-4 bg-amber-500 hover:bg-amber-600 text-white px-5 py-2 rounded font-bold text-sm flex items-center gap-2 shadow-sm transition-transform hover:-translate-y-0.5 active:translate-y-0"
            >
              Loan Calculator
            </button>
          </nav>

          {/* Mobile menu button */}
          <div className="flex lg:hidden">
            <button
              id="mobile_menu_toggle"
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-lg text-slate-600 hover:text-blue-900 hover:bg-slate-100"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div id="mobile_menu_dropdown" className="lg:hidden border-t border-slate-200 bg-white transition-all duration-300 shadow-md">
          <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                id={`mobile_nav_btn_${item.id}`}
                onClick={() => handleNavClick(item.id)}
                className={`block w-full text-left px-4 py-3 rounded-lg text-base font-semibold transition-all ${
                  activeTab === item.id
                    ? 'bg-blue-50 text-blue-900 border-l-4 border-blue-900 font-bold'
                    : 'text-slate-600 hover:bg-slate-50 hover:text-blue-900'
                }`}
              >
                {item.label}
              </button>
            ))}
            <div className="pt-4 pb-2 px-4">
              <button
                id="mobile_cta_open_account"
                onClick={() => handleNavClick('portal')}
                className="w-full bg-amber-500 hover:bg-amber-600 text-white py-3 rounded font-bold text-center block shadow-sm"
              >
                Loan Calculator
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
