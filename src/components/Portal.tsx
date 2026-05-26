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
            Apply & Calculators
          </h2>
          <p className="text-blue-100 font-light mt-4 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Submit virtual digital request files and evaluate loan amortizations before scheduling interviews with the main board credit managers.
          </p>
        </div>
      </section>

      {/* Segment Selector Tabs */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        <div className="flex bg-white p-2 rounded-2xl shadow-sm border border-slate-150 max-w-2xl mx-auto">
          <button
            onClick={() => setActivePortalTab('calculator')}
            className={`flex-1 py-3 text-xs sm:text-sm font-bold rounded-xl transition-all flex items-center justify-center space-x-2 cursor-pointer ${
              activePortalTab === 'calculator'
                ? 'bg-blue-900 text-white shadow'
                : 'text-slate-500 hover:bg-slate-50'
            }`}
          >
            <Calculator className="h-4 w-4 shrink-0" />
            <span>Loan Amortizer</span>
          </button>
          
          <button
            onClick={() => {
              setActivePortalTab('apply');
              setLatestAppId(null);
            }}
            className={`flex-1 py-3 text-xs sm:text-sm font-bold rounded-xl transition-all flex items-center justify-center space-x-2 cursor-pointer ${
              activePortalTab === 'apply'
                ? 'bg-blue-900 text-white shadow'
                : 'text-slate-500 hover:bg-slate-50'
            }`}
          >
            <UserPlus className="h-4 w-4 shrink-0" />
            <span>Account Application</span>
          </button>
          
          <button
            onClick={() => setActivePortalTab('status')}
            className={`flex-1 py-3 text-xs sm:text-sm font-bold rounded-xl transition-all flex items-center justify-center space-x-2 cursor-pointer ${
              activePortalTab === 'status'
                ? 'bg-blue-900 text-white shadow'
                : 'text-slate-500 hover:bg-slate-50'
            }`}
          >
            <Search className="h-4 w-4 shrink-0" />
            <span>Status Check</span>
          </button>
        </div>
      </section>

      {/* Tab Panels body */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* PANEL A: LOAN CALCULATOR */}
        {activePortalTab === 'calculator' && (
          <div id="panel_loan_calculator" className="bg-white rounded-3xl shadow-sm border border-slate-100 p-8 sm:p-12 lg:grid lg:grid-cols-12 lg:gap-12">
            
            {/* Input fields panel - 7 Cols */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="text-xs uppercase font-bold text-amber-600 tracking-wider">Plan Your Funding</span>
                <h3 className="text-2xl font-black text-blue-900 mt-1 mb-4">Loan Installments Estimator</h3>
                <p className="text-xs sm:text-sm text-slate-500 font-light leading-relaxed">
                  Enter your expected farm expandings, trade needs, or salary advances. This evaluates standard repayments using specific rural development rates.
                </p>
              </div>

              {/* Loan type category selector */}
              <div>
                <label className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-2 font-bold select-none text-[11px]">Loan Category Program</label>
                <div className="grid grid-cols-3 gap-3">
                  <button
                    onClick={() => setLoanCategory('sme')}
                    className={`py-3 rounded-xl border text-xs font-bold transition-all cursor-pointer ${
                      loanCategory === 'sme'
                        ? 'bg-amber-100/60 border-amber-500 text-blue-905 font-bold'
                        : 'bg-slate-50 border-slate-100 text-slate-605 hover:bg-slate-100'
                    }`}
                  >
                    SME Commercial (18%)
                  </button>
                  <button
                    onClick={() => setLoanCategory('agri')}
                    className={`py-3 rounded-xl border text-xs font-bold transition-all cursor-pointer ${
                      loanCategory === 'agri'
                        ? 'bg-amber-100/60 border-amber-500 text-blue-905 font-bold'
                        : 'bg-slate-50 border-slate-100 text-slate-605 hover:bg-slate-100'
                    }`}
                  >
                    Agricultural Support (14%)
                  </button>
                  <button
                    onClick={() => setLoanCategory('salary')}
                    className={`py-3 rounded-xl border text-xs font-bold transition-all cursor-pointer ${
                      loanCategory === 'salary'
                        ? 'bg-amber-100/60 border-amber-500 text-blue-905 font-bold'
                        : 'bg-slate-50 border-slate-100 text-slate-605 hover:bg-slate-100'
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
                      <span className="text-sm font-bold text-amber-705">+ GH₵ {loanResults.totalInterest.toLocaleString()}</span>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-150/40">
                    <span className="text-[10px] text-slate-400 uppercase font-bold block">Consolidated Payback Total</span>
                    <span className="text-lg font-extrabold text-blue-900">GH₵ {loanResults.totalRepay.toLocaleString()}</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-150/40 space-y-4">
                <div className="flex items-center space-x-2.5 text-xs text-slate-500">
                  <ShieldCheck className="h-5 w-5 text-amber-550 shrink-0" />
                  <span>Interest rate based on annualized simple rate system</span>
                </div>
                <button
                  onClick={() => {
                    alert(`Loan Estimate Saved!\nCategory: ${loanCategory.toUpperCase()}\nAmount: GH₵ ${loanAmount}\nRepayment: GH₵ ${loanResults.monthly}/month for ${loanPeriod} months.\n\nOur credit officer will contact you within 5 working days of portal submission.`);
                  }}
                  className="w-full bg-blue-900 hover:bg-slate-900 text-white py-3.5 rounded-xl font-bold text-sm shadow transition-all cursor-pointer block text-center"
                >
                  Save Loan Quote
                </button>
              </div>

            </div>

          </div>
        )}

        {/* PANEL B: ACCOUNT APPLICATION FORM */}
        {activePortalTab === 'apply' && (
          <div id="panel_open_account" className="bg-white rounded-3xl shadow-sm border border-slate-100 p-8 sm:p-12 max-w-4xl mx-auto">
            <div>
              <span className="text-xs uppercase font-bold text-amber-600 tracking-wider">Join our community</span>
              <h3 className="text-2xl sm:text-3xl font-black text-blue-900 mt-1 mb-2">Opening Account Request Form</h3>
              <p className="text-xs sm:text-sm text-slate-400 font-light mb-8">
                Fill the required details below to secure your applicant verification file. Bring matching printouts or ID codes to claim checkout cards at your preferred branch outlet.
              </p>
            </div>

            <form onSubmit={handleApplySubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Full name */}
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Full Legal Name *</label>
                  <input
                    id="apply_input_name"
                    type="text"
                    required
                    placeholder="e.g. Kwame Ofori Boateng"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 outline-none focus:border-blue-900 text-sm bg-slate-50 transition-all font-medium"
                  />
                </div>

                {/* Telephone */}
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Mobile Telephone Number *</label>
                  <input
                    id="apply_input_phone"
                    type="tel"
                    required
                    placeholder="e.g. +233 (0) 50 123 4567"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 outline-none focus:border-blue-900 text-sm bg-slate-50 transition-all font-mono"
                  />
                </div>

                {/* Email address */}
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Email Address (Optional)</label>
                  <input
                    id="apply_input_email"
                    type="email"
                    placeholder="e.g. kwame@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 outline-none focus:border-blue-900 text-sm bg-slate-50 transition-all"
                  />
                </div>

                {/* Occupation */}
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Core Occupation / Trader Type</label>
                  <input
                    id="apply_input_occupation"
                    type="text"
                    placeholder="e.g. Cocoa Merchant, Teacher, Retailer"
                    value={occupation}
                    onChange={(e) => setOccupation(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 outline-none focus:border-blue-900 text-sm bg-slate-50 transition-all"
                  />
                </div>

                {/* Residential Address */}
                <div className="md:col-span-2">
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Residential Physical Address</label>
                  <input
                    id="apply_input_address"
                    type="text"
                    placeholder="House block, Street, Town/District"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 outline-none focus:border-blue-900 text-sm bg-slate-50 transition-all"
                  />
                </div>

                {/* Preferred Branch select */}
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Handling Home Branch Outlet *</label>
                  <select
                    id="apply_select_branch"
                    value={preferredBranch}
                    onChange={(e) => setPreferredBranch(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 outline-none focus:border-blue-900 text-sm bg-slate-50 transition-all"
                  >
                    {BRANCHES.map((b) => (
                      <option key={b.id} value={b.name}>{b.name}</option>
                    ))}
                  </select>
                </div>

                {/* Account Type select */}
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Preferred Saving Program *</label>
                  <select
                    id="apply_select_account_type"
                    value={accountType}
                    onChange={(e) => setAccountType(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 outline-none focus:border-blue-900 text-sm bg-slate-50 transition-all"
                  >
                    {PRODUCTS.filter(p => p.category === 'savings').map((p) => (
                      <option key={p.id} value={p.title}>{p.title}</option>
                    ))}
                  </select>
                </div>

                {/* ID Type */}
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Identity Document Type *</label>
                  <select
                    id="apply_select_id_type"
                    value={idType}
                    onChange={(e) => setIdType(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 outline-none focus:border-blue-900 text-sm bg-slate-50 transition-all"
                  >
                    <option value="Ghana Card (National ID)">Ghana Card (National ID)</option>
                    <option value="International Passport">International Passport</option>
                    <option value="Voters Identity Card">Voters Identity Card</option>
                    <option value="NHIS Card">National Health Insurance Card</option>
                  </select>
                </div>

                {/* ID Document Number */}
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Document Identifier Number *</label>
                  <input
                    id="apply_input_id_number"
                    type="text"
                    required
                    placeholder="e.g. GHA-10293022-7"
                    value={idNumber}
                    onChange={(e) => setIdNumber(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 outline-none focus:border-blue-900 text-sm bg-slate-50 transition-all font-mono"
                  />
                </div>
              </div>

              {/* Submit panel */}
              <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 items-center justify-between">
                <div className="flex space-x-3 text-xs text-slate-400 items-center">
                  <ShieldCheck className="h-4.5 w-4.5 text-amber-500 shrink-0 select-none" />
                  <span>Licensed by Bank of Ghana. Your local data remains strictly encrypted and protected.</span>
                </div>
                <button
                  id="btn_submit_apply"
                  type="submit"
                  className="w-full sm:w-auto bg-blue-900 hover:bg-slate-900 text-white px-8 py-3.5 rounded-xl font-bold text-xs flex items-center justify-center space-x-2 shadow transition-transform cursor-pointer"
                >
                  <span>Submit Secure Application</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </form>
          </div>
        )}

        {/* PANEL C: RECRUIT STATUS CHECKER */}
        {activePortalTab === 'status' && (
          <div id="panel_status_checker" className="max-w-3xl mx-auto space-y-8 font-sans">
            
            {/* Search inputs */}
            <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-sm border border-slate-100">
              <h3 className="text-xl font-extrabold text-blue-900 mb-2 flex items-center col-span-1">
                <Search className="h-5 w-5 mr-2 text-amber-500" />
                Track Application Progress
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-light mb-6">
                Enter the core application identifier slip given after submitting your request (e.g. <strong>MP-ACCT-48902</strong>) to retrieve its latest checkouts.
              </p>

              <form onSubmit={handleStatusSearch} className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3">
                <input
                  id="status_search_input"
                  type="text"
                  required
                  placeholder="e.g. MP-ACCT-12345"
                  value={searchId}
                  onChange={(e) => setSearchId(e.target.value)}
                  className="flex-1 px-4 py-3 rounded-xl border border-slate-200 outline-none focus:border-blue-900 text-sm bg-slate-50 transition-all font-mono"
                />
                <button
                  id="btn_search_submit"
                  type="submit"
                  className="bg-blue-900 hover:bg-slate-900 text-white px-6 py-3 rounded-xl font-bold text-xs uppercase tracking-wider cursor-pointer flex items-center justify-center space-x-1"
                >
                  <span>Verify Slip</span>
                </button>
              </form>

              {searchStatusError && (
                <p id="search_error_msg" className="text-xs text-red-500 mt-3 font-semibold bg-red-50 px-3 py-2 rounded-lg border border-red-100">{searchStatusError}</p>
              )}
            </div>

            {/* If application found, render rich tracking layout */}
            {searchStatusResult && (
              <div id="search_result_details" className="bg-white rounded-3xl p-8 sm:p-10 shadow border-t-4 border-amber-500 space-y-8">
                <div className="flex flex-col sm:flex-row justify-between sm:items-center space-y-4 sm:space-y-0 border-b border-slate-100 pb-6">
                  <div>
                    <span className="text-[10px] text-slate-400 uppercase font-black tracking-widest block">Slip Identifier Code</span>
                    <span className="text-xl font-black text-blue-900 font-mono">{searchStatusResult.id}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-xs text-slate-400 font-semibold uppercase font-bold text-[11px]">Verification Status:</span>
                    <span className="flex items-center bg-amber-100 text-amber-900 font-bold text-xs px-3 py-1.5 rounded-full border border-amber-300">
                      <Clock className="h-3 w-3 mr-1 animate-spin" />
                      {searchStatusResult.status}
                    </span>
                  </div>
                </div>

                {/* Progress bar simulation */}
                <div>
                  <div className="flex justify-between text-xs text-slate-400 font-bold mb-2">
                    <span>1. Verification</span>
                    <span>2. Document Review</span>
                    <span>3. Approved</span>
                    <span>4. Debit Card Issued</span>
                  </div>
                  <div className="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden flex">
                    <div className="w-1/4 bg-amber-400" />
                    <div className="w-1/4 bg-amber-200 animate-pulse" />
                    <div className="w-2/4 bg-slate-100" />
                  </div>
                </div>

                {/* Slip parameters values */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 bg-slate-50 p-6 rounded-2xl text-xs sm:text-sm border border-slate-100">
                  <div>
                    <span className="text-[10px] text-slate-400 uppercase font-bold block">Applicant Full Name</span>
                    <span className="font-semibold text-slate-705">{searchStatusResult.fullName}</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 uppercase font-bold block">Mobile phone contact</span>
                    <span className="font-semibold text-slate-705 font-mono">{searchStatusResult.phone}</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 uppercase font-bold block">Assigned Home Branch</span>
                    <span className="font-semibold text-slate-705">{searchStatusResult.branch}</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 uppercase font-bold block">Savings Program Option</span>
                    <span className="font-semibold text-blue-900">{searchStatusResult.accountType}</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 uppercase font-bold block">Form Date Applied</span>
                    <span className="font-semibold text-slate-705">{searchStatusResult.dateApplied}</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 uppercase font-bold block">ID Verification</span>
                    <span className="font-semibold text-slate-705">{searchStatusResult.idType}: {searchStatusResult.idNumber.replace(/.(?=.{4})/g, '*')}</span>
                  </div>
                </div>

                {/* Printable option button */}
                <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3 pt-4 justify-end">
                  <button
                    onClick={() => {
                      alert(`Downloading account verification ticket PDF...\nApplication Tracking ID: ${searchStatusResult.id}\nThank you for choosing Mponua Community Bank.`);
                    }}
                    className="border border-blue-900 text-blue-900 hover:bg-slate-50 px-5 py-3 rounded-xl font-bold text-xs flex items-center justify-center space-x-1.5 cursor-pointer"
                  >
                    <Download className="h-4 w-4 shrink-0" />
                    <span>Print Application Copy</span>
                  </button>
                  <button
                    onClick={() => {
                      // Simulate approval
                      const updated = { ...searchStatusResult, status: 'Active' as const };
                      setSearchStatusResult(updated);
                      // Update main list
                      setApplications(applications.map(a => a.id === updated.id ? updated : a));
                      alert('Applicant approved! Your temporary digital savings pass is now generated. Bring reference code to teller desks.');
                    }}
                    className="bg-blue-900 hover:bg-slate-900 text-white px-5 py-3 rounded-xl font-bold text-xs flex items-center justify-center space-x-1.5 cursor-pointer"
                  >
                    <CheckCircle className="h-4 w-4 shrink-0" />
                    <span>Simulate Instant Approval</span>
                  </button>
                </div>
              </div>
            )}

            {/* Fallback visual helper if list is empty */}
            {applications.length > 0 ? (
              <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100">
                <h4 className="text-xs uppercase font-black text-blue-900 tracking-wider mb-4 border-b border-slate-100 pb-2">Your Local Session Applications ({applications.length})</h4>
                <div className="space-y-3">
                  {applications.map((app) => (
                    <div 
                      key={app.id} 
                      onClick={() => {
                        setSearchId(app.id);
                        setSearchStatusResult(app);
                      }}
                      className="p-4 rounded-xl border border-slate-100 hover:border-blue-900 cursor-pointer transition-all flex justify-between items-center text-xs bg-slate-50/50 hover:bg-white"
                    >
                      <div className="space-y-1">
                        <span className="font-mono font-extrabold text-blue-900">{app.id}</span>
                        <span className="text-slate-400 ml-3 font-semibold">| {app.fullName}</span>
                      </div>
                      <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                        app.status === 'Active' ? 'bg-emerald-100 text-emerald-850' : 'bg-amber-100 text-amber-800'
                      }`}>
                        {app.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-3xl p-8 text-center text-slate-400 text-sm font-light border border-slate-100">
                Submit details under the <strong>Account Application</strong> tab above to view simulated outputs.
              </div>
            )}

          </div>
        )}

      </section>

    </div>
  );
}
