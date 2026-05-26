import { Building2, Phone, Mail, Clock, ShieldAlert, Award, FileSpreadsheet, Facebook, Linkedin, Twitter } from 'lucide-react';

interface FooterProps {
  setActiveTab: (tab: string) => void;
}

export default function Footer({ setActiveTab }: FooterProps) {
  const handleNavClick = (tabId: string) => {
    setActiveTab(tabId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="main_footer" className="bg-slate-900 text-slate-400 border-t border-slate-800">
      {/* Top Footer Widgets */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Info */}
          <div>
            <div className="flex items-center space-x-3 mb-6 cursor-pointer" onClick={() => handleNavClick('home')}>
              <div className="bg-blue-900 p-2 rounded-lg text-white">
                <Building2 className="h-5 w-5" />
              </div>
              <div>
                <span className="text-lg font-bold text-white block">Mponua Community</span>
                <span className="text-xs text-amber-500 tracking-wider uppercase block -mt-1 font-semibold">Bank Limited</span>
              </div>
            </div>
            <p className="text-sm leading-relaxed mb-6">
              Mponua Community Bank Limited (formerly Mponua Rural Bank) is Ghana’s premiere banking institution for micro-credit, agricultural finance, and community development. We empower businesses and enrich cocoa farmer households in the Eastern Region.
            </p>
            <div className="flex space-x-3">
              <span className="bg-slate-800 p-2 rounded text-white text-xs font-semibold border border-slate-705">BOG Licensed</span>
              <span className="bg-slate-800 p-2 rounded text-white text-xs font-semibold border border-slate-705">GDPC Safeguarded</span>
            </div>
            
            <div className="mt-6">
              <span className="text-xs uppercase font-bold text-slate-500 tracking-wider block mb-3">Follow Our Updates</span>
              <div className="flex items-center space-x-3">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-slate-800 hover:bg-amber-500 hover:text-white p-2.5 rounded-lg text-slate-400 transition-colors border border-slate-800 hover:border-amber-500/50 flex items-center justify-center cursor-pointer"
                  title="Follow us on Facebook"
                  aria-label="Facebook Page"
                >
                  <Facebook className="h-4 w-4" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-slate-800 hover:bg-amber-500 hover:text-white p-2.5 rounded-lg text-slate-400 transition-colors border border-slate-800 hover:border-amber-500/50 flex items-center justify-center cursor-pointer"
                  title="Follow us on LinkedIn"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-slate-800 hover:bg-amber-500 hover:text-white p-2.5 rounded-lg text-slate-400 transition-colors border border-slate-800 hover:border-amber-500/50 flex items-center justify-center cursor-pointer"
                  title="Follow us on Twitter"
                  aria-label="Twitter Feed"
                >
                  <Twitter className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6 border-b-2 border-amber-500 pb-2 w-16">Links</h3>
            <ul className="space-y-3.5 text-sm">
              <li>
                <button onClick={() => handleNavClick('home')} className="hover:text-amber-400 font-medium transition-colors cursor-pointer">
                  Home Landing
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('about')} className="hover:text-amber-400 font-medium transition-colors cursor-pointer">
                  Corporate Profile & History
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('products')} className="hover:text-amber-400 font-medium transition-colors cursor-pointer">
                  Savings & Loan Schemes
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('branches')} className="hover:text-amber-400 font-medium transition-colors cursor-pointer">
                  Our Branch Locations
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('portal')} className="hover:text-amber-400 font-medium transition-colors cursor-pointer">
                  Account Application & Calculator
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('contact')} className="hover:text-amber-400 font-medium transition-colors cursor-pointer">
                  Contact Customer Helpdesk
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6 border-b-2 border-amber-500 pb-2 w-24">Head Office</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start space-x-3">
                <FileSpreadsheet className="h-5 w-5 text-amber-400 shrink-0 mt-0.5" />
                <span>P.O. Box AP 1, Amuana Praso, Eastern Region, Ghana</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-amber-400 shrink-0" />
                <span>Hotline: +233 (0) 50 123 4567</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-amber-400 shrink-0" />
                <span>info@mponuacb.com</span>
              </li>
              <li className="flex items-center space-x-3">
                <Clock className="h-5 w-5 text-amber-400 shrink-0" />
                <span>Mon - Fri: 8:00 AM - 4:00 PM<br/>Saturday: 9:00 AM - 1:00 PM</span>
              </li>
            </ul>
          </div>

          {/* Regulatory Support */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6 border-b-2 border-amber-500 pb-2 w-32">Security & Trust</h3>
            <p className="text-xs leading-relaxed mb-4 text-slate-400">
              Mponua Community Bank is fully regulated by the Bank of Ghana (BoG) under the Banks and Specialised Deposit-Taking Institutions Act, 2016 (Act 930).
            </p>
            <p className="text-xs leading-relaxed text-slate-400 mb-4">
              Deposits are fully guaranteed by the Ghana Deposit Protection Corporation (GDPC) safeguarding customer deposits.
            </p>
            <div className="flex items-center space-x-3 bg-slate-950 p-3 rounded-lg border border-slate-800">
              <ShieldAlert className="h-6 w-6 text-amber-400 shrink-0" />
              <p className="text-[11px] text-slate-300">
                Do not share PIN codes or mobile banking passwords with anyone, including staff.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-slate-950 py-6 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center text-xs">
          <p className="text-slate-500 text-center sm:text-left">
            &copy; {new Date().getFullYear()} Mponua Community Bank Limited. All Rights Reserved.
          </p>
          <p className="text-slate-600 text-center sm:text-right mt-2 sm:mt-0">
            Replicated from mponuaruralbank.com with the updated name "Mponua Community Bank"
          </p>
        </div>
      </div>
    </footer>
  );
}
