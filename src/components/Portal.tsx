import React, { useState } from 'react';
import { BRANCHES, PRODUCTS } from '../data';
import { AccountApplication } from '../types';
import { 
  Calculator, UserPlus, Search, CheckCircle, Clock, ShieldCheck, 
  Download, ArrowRight, TrendingUp, HelpCircle 
} from 'lucide-react';

interface PortalProps {
  applications: AccountApplication[];
  setApplications: (apps: AccountApplication[]) => void;
}

export default function Portal({ applications, setApplications }: PortalProps) {
  const [activePortalTab, setActivePortalTab] = useState<'calculator' | 'apply' | 'status'>('calculator');
  
  // Account Application State
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [occupation, setOccupation] = useState('');
  const [preferredBranch, setPreferredBranch] = useState(BRANCHES[0].name);
  const [accountType, setAccountType] = useState(PRODUCTS[0].title);
  const [idType, setIdType] = useState('Ghana Card (National ID)');
  const [idNumber, setIdNumber] = useState('');
  
  // Submission success tracking
  const [latestAppId, setLatestAppId] = useState<string | null>(null);

  // Status Check search states
  const [searchId, setSearchId] = useState('');
  const [searchStatusResult, setSearchStatusResult] = useState<AccountApplication | null>(null);
  const [searchStatusError, setSearchStatusError] = useState('');

  // Loan Calculator State
  const [loanCategory, setLoanCategory] = useState<'sme' | 'agri' | 'salary'>('sme');
  const [loanAmount, setLoanAmount] = useState(10000);
  const [loanPeriod, setLoanPeriod] = useState(12);
  // Interest rates: SME 18% (1.5%/mo), Agri 14% (1.16%/mo), Salary 16% (1.33%/mo)
  const rateMultiplier = loanCategory === 'agri' ? 0.14 : loanCategory === 'salary' ? 0.16 : 0.18;

  const handleApplySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !phone || !idNumber) {
      alert('Please fill out all mandatory fields (Full Name, Phone, and ID Identifier Details)');
      return;
    }

    const newId = `MP-ACCT-${Math.floor(10000 + Math.random() * 90000)}`;
    const newApp: AccountApplication = {
      id: newId,
      fullName,
      email: email || 'No email provided',
      phone,
      residentialAddress: address || 'Amuana Praso Central',
      occupation: occupation || 'General Trader',
      branch: preferredBranch,
      accountType,
      idType,
      idNumber,
      dateApplied: new Date().toLocaleDateString('en-GB'),
      status: 'Pending Verification'
    };

    setApplications([newApp, ...applications]);
    setLatestAppId(newId);
    
    // Clear inputs
    setFullName('');
    setEmail('');
    setPhone('');
    setAddress('');
    setOccupation('');
    setIdNumber('');
    
    // Auto shift to Status Check showing their app
    setSearchId(newId);
    setSearchStatusResult(newApp);
    setActivePortalTab('status');
  };

  const handleStatusSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setSearchStatusError('');
    setSearchStatusResult(null);

    const found = applications.find(app => app.id.toUpperCase().trim() === searchId.toUpperCase().trim());
    if (found) {
      setSearchStatusResult(found);
    } else {
      setSearchStatusError('No application found with that tracking identifier. Check format e.g. MP-ACCT-12345');
    }
  };

  // Calculations for loan outputs
  const calculateLoanRepayments = () => {
    const totalInterest = loanAmount * rateMultiplier * (loanPeriod / 12);
    const totalRepay = loanAmount + totalInterest;
    const monthlyInstallment = totalRepay / loanPeriod;

    return {
      monthly: Math.round(monthlyInstallment),
      totalRepay: Math.round(totalRepay),
      totalInterest: Math.round(totalInterest)
    };
  };

  const loanResults = calculateLoanRepayments();

  return (
    <div id="portal_tab_view" className="bg-gray-50 pb-20">
      
      {/* Banner */}
      <section className="bg-gradient-to-r from-blue-950 to-blue-900 text-white py-16 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <span className="text-amber-400 font-bold uppercase tracking-widest text-xs">Self-Service Terminal</span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight mt-2 text-white">
            Loan Estimators & Calculators
          </h2>
          <p className="text-blue-100 font-light mt-4 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Evaluate loan amortizations, interest ratios, and monthly payments before establishing your custom credit schedule with our branch loan officers.
          </p>
        </div>
      </section>

      {/* Tab Panels body - loan calculator is now the sole primary tool */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* PANEL A: LOAN CALCULATOR */}
        <div id="panel_loan_calculator" className="bg-white rounded-3xl shadow-sm border border-slate-100 p-8 sm:p-12 lg:grid lg:grid-cols-12 lg:gap-12">
          
          {/* Input fields panel - 7 Cols */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <span className="text-xs uppercase font-bold text-amber-600 tracking-wider">Plan Your Funding</span>
              <h3 className="text-2xl font-black text-blue-900 mt-1 mb-4">Loan Installments Estimator</h3>
              <p className="text-xs sm:text-sm text-slate-500 font-light leading-relaxed">
                Enter your expected farm expandings, trade needs, or salary advances. This evaluates standard repayments using specific community development rates.
              </p>
            </div>

            {/* Loan type category selector */}
            <div>
              <label className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-2 select-none text-[11px]">Loan Category Program</label>
              <div className="grid grid-cols-3 gap-3">
                <button
                  onClick={() => setLoanCategory('sme')}
                  className={`py-3 rounded-xl border text-xs font-bold transition-all cursor-pointer ${
                    loanCategory === 'sme'
                      ? 'bg-amber-100/60 border-amber-500 text-blue-900 font-bold'
                      : 'bg-slate-50 border-slate-100 text-slate-600 hover:bg-slate-100'
                  }`}
                >
                  SME Commercial (18%)
                </button>
                <button
                  onClick={() => setLoanCategory('agri')}
                  className={`py-3 rounded-xl border text-xs font-bold transition-all cursor-pointer ${
                    loanCategory === 'agri'
                      ? 'bg-amber-100/60 border-amber-500 text-blue-900 font-bold'
                      : 'bg-slate-50 border-slate-100 text-slate-600 hover:bg-slate-100'
                  }`}
                >
                  Agricultural Support (14%)
                </button>
                <button
                  onClick={() => setLoanCategory('salary')}
                  className={`py-3 rounded-xl border text-xs font-bold transition-all cursor-pointer ${
                    loanCategory === 'salary'
                      ? 'bg-amber-100/60 border-amber-500 text-blue-900 font-bold'
                      : 'bg-slate-50 border-slate-100 text-slate-600 hover:bg-slate-100'
                  }`}
                >
                  Salary Payroll (16%)
                </button>
              </div>
            </div>

            {/* Amount slider */}
            <div>
              <div className="flex justify-between mb-2">
                <label className="text-sm font-semibold text-slate-700">Required Credit Amount</label>
                <span className="text-sm font-black text-blue-900">GH₵ {loanAmount.toLocaleString()}</span>
              </div>
              <input
                id="input_loan_amount"
                type="range"
                min="500"
                max="150000"
                step="500"
                value={loanAmount}
                onChange={(e) => setLoanAmount(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded appearance-none cursor-pointer accent-blue-900"
              />
              <div className="flex justify-between text-[10px] text-slate-400 mt-1">
                <span>GH₵ 500</span>
                <span>GH₵ 150,000 (Max Limit)</span>
              </div>
            </div>

            {/* Period slider */}
            <div>
              <div className="flex justify-between mb-2">
                <label className="text-sm font-semibold text-slate-700">Repayment Period</label>
                <span className="text-sm font-black text-blue-900">{loanPeriod} Months</span>
              </div>
              <input
                id="input_loan_duration"
                type="range"
                min="3"
                max="36"
                step="1"
                value={loanPeriod}
                onChange={(e) => setLoanPeriod(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded appearance-none cursor-pointer accent-blue-900"
              />
              <div className="flex justify-between text-[10px] text-slate-400 mt-1">
                <span>3 Months</span>
                <span>36 Months (3 Years)</span>
              </div>
            </div>

          </div>

          {/* Output columns - 5 Cols */}
          <div className="lg:col-span-5 bg-blue-900/5 rounded-3xl p-8 border border-white flex flex-col justify-between mt-10 lg:mt-0">
            <div className="space-y-6">
              <h4 className="text-xs font-black text-blue-900 uppercase tracking-widest border-b border-slate-150 pb-3">
                Summary Estimation Yield
              </h4>

              <div className="space-y-4">
                <div>
                  <span className="text-[11px] text-slate-400 uppercase font-semibold block">Monthly Amortized Payment</span>
                  <span className="text-3xl sm:text-4xl font-black text-blue-900">GH₵ {loanResults.monthly.toLocaleString()}<span className="text-sm font-normal text-slate-500 ml-1">/ mo</span></span>
                </div>

                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-150/40">
                  <div>
                    <span className="text-[10px] text-slate-400 uppercase font-bold block">Borrow Principal</span>
                    <span className="text-sm font-bold text-slate-700">GH₵ {loanAmount.toLocaleString()}</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 uppercase font-bold block">Total Interest Cost</span>
                    <span className="text-sm font-bold text-amber-700">+ GH₵ {loanResults.totalInterest.toLocaleString()}</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-150/40">
                  <span className="text-[10px] text-slate-400 uppercase font-bold block">Consolidated Payback Total</span>
                  <span className="text-lg font-extrabold text-blue-900">GH₵ {loanResults.totalRepay.toLocaleString()}</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-150/40 space-y-4 font-sans text-xs">
              <div className="flex items-center space-x-2.5 text-slate-500">
                <ShieldCheck className="h-5 w-5 text-amber-500 shrink-0" />
                <span>Interest rate based on annualized simple rate system</span>
              </div>
              <button
                onClick={() => {
                  alert(`Loan Estimate Saved!\nCategory: ${loanCategory.toUpperCase()}\nAmount: GH₵ ${loanAmount.toLocaleString()}\nRepayment: GH₵ ${loanResults.monthly.toLocaleString()}/month for ${loanPeriod} months.\n\nTake this estimate to any of our 8 branches (New Abirem, Obogu, Asankare, Nkawkaw, Asuboni Rails, Koforidua, Amuana Praso, or Konongo) to complete your application!`);
                }}
                className="w-full bg-blue-900 hover:bg-slate-900 text-white py-3.5 rounded-xl font-bold text-sm shadow transition-all cursor-pointer block text-center"
              >
                Save Loan Quote
              </button>
            </div>

          </div>

        </div>

      </section>

    </div>
  );
}
