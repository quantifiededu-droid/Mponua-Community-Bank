import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, MessageSquare, ShieldAlert, Sparkles, CheckCircle } from 'lucide-react';

export default function Contact() {
  const [formName, setFormName] = useState('');
  const [formEmail, setFormEmail] = useState('');
  const [formPhone, setFormPhone] = useState('');
  const [formSubject, setFormSubject] = useState('General Enquiry');
  const [formMessage, setFormMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  // Accordion state tracker for FAQs
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formName || !formMessage) {
      alert('Please fill out the name and message fields to reach customer support.');
      return;
    }
    // Simulate support ticket trigger
    setSubmitted(true);
    setFormName('');
    setFormEmail('');
    setFormPhone('');
    setFormMessage('');
  };

  const faqs = [
    {
      question: 'How do I join the Mponua Susu Savings Scheme?',
      answer: 'It is simple! You do not need to visit a branch space. Email us or call our Toll-Free hotline, and we will dispatch a licensed mobile Susu Officer with a register terminal directly to your shop, enterprise, or market booth.'
    },
    {
      question: 'Where is the main headquarters of Mponua Community Bank located?',
      answer: 'Our main Head Office is located at Amuana Praso in the Eastern Region of Ghana. We also operate five other fully computerised branches at Nkawkaw, Anyinam, New Abirem, Jejeti, and Koforidua.'
    },
    {
      question: 'Which legal identification cards are approved to open an account?',
      answer: 'In compliance with Bank of Ghana regulations, we accept the Ghana Card (National Identification Card) as our primary verification card. We can accept Voter Cards, Drivers Licences, or Passports as supplementary verification.'
    },
    {
      question: 'Are my deposits fully safe under Bank of Ghana guidelines?',
      answer: '100% Yes. Mponua Community Bank Limited is fully licensed by the Bank of Ghana. We are active, fully-paid members of the Ghana Deposit Protection Corporation (GDPC), which legalises maximum security of customer funds.'
    },
    {
      question: 'What are the tenure options for high-yield Fixed Deposits?',
      answer: 'We offer flexible durations of 91 days, 182 days, and 365 days. Interest yields are negotiated based on your amount size, offering some of the most competitive investment yields in local rural banking.'
    }
  ];

  return (
    <div id="contact_tab_view" className="bg-gray-50 pb-20">
      
      {/* Banner */}
      <section className="bg-gradient-to-r from-blue-950 to-blue-900 text-white py-16 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <span className="text-amber-400 font-bold uppercase tracking-widest text-xs">Customer Support Hub</span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight mt-2 text-white">
            Contact Grievance Desk
          </h2>
          <p className="text-blue-105 font-light mt-4 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Reach our regional call operators or visit local teller counters. We resolve problems fast with priority emphasis.
          </p>
        </div>
      </section>

      {/* Main grids */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Support Ticket fields (Col 7) */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-slate-100">
            <span className="text-xs uppercase font-extrabold text-amber-600 tracking-wider">Leave a Message</span>
            <h3 className="text-2xl font-black text-blue-900 mt-1 mb-6">Send Us a Secure Message</h3>
            
            {submitted ? (
              <div id="submitted_confirm_card" className="bg-green-500/10 border border-green-500/20 p-6 rounded-2xl text-center space-y-4">
                <div className="bg-green-500 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto shadow">
                   <CheckCircle className="h-6 w-6" />
                </div>
                <h4 className="text-lg font-bold text-green-905">Message Dispatched!</h4>
                <p className="text-xs sm:text-sm text-green-700 leading-relaxed max-w-md mx-auto">
                  Thank you for writing. Your support identifier is being routed to the Amuana Praso ICT grievance queue. We will telephone or email you within 24 operational hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-xs font-semibold text-blue-900 hover:underline cursor-pointer"
                >
                  Send another inquiry message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-2 font-bold select-none"> Your Name *</label>
                    <input
                      id="contact_form_name"
                      type="text"
                      required
                      placeholder="e.g. Ama Serwaa"
                      value={formName}
                      onChange={(e) => setFormName(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 outline-none focus:border-blue-900 text-sm bg-slate-50 transition-all font-light"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-2 font-bold select-none">Telephone Connection *</label>
                    <input
                      id="contact_form_phone"
                      type="tel"
                      required
                      placeholder="e.g. +233 50 123 4567"
                      value={formPhone}
                      onChange={(e) => setFormPhone(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 outline-none focus:border-blue-900 text-sm bg-slate-50 transition-all font-light"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-2 font-bold select-none">Email Address</label>
                  <input
                    id="contact_form_email"
                    type="email"
                    placeholder="e.g. ama@gmail.com"
                    value={formEmail}
                    onChange={(e) => setFormEmail(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 outline-none focus:border-blue-900 text-sm bg-slate-50 transition-all font-light"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-2 font-bold select-none">Select Inquiry Category</label>
                  <select
                    id="contact_form_subject"
                    value={formSubject}
                    onChange={(e) => setFormSubject(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 outline-none focus:border-blue-900 text-sm bg-slate-50 transition-all font-light"
                  >
                    <option value="General Enquiry">General Enquiry</option>
                    <option value="Susu Savings Scheme">Mponua Susu Scheme</option>
                    <option value="Loan Assistance">Credit / Seasonal Cocoa Loans</option>
                    <option value="Digital Platform Issues">WhatsApp/Mobile App Errors</option>
                    <option value="Grievances & Appeals">Customer Grievance Appeal</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-2 font-bold select-none">Detailed Support Message *</label>
                  <textarea
                    id="contact_form_message"
                    required
                    rows={4}
                    placeholder="Describe your enquiry here..."
                    value={formMessage}
                    onChange={(e) => setFormMessage(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 outline-none focus:border-blue-900 text-sm bg-slate-50 transition-all resize-none font-light"
                  />
                </div>

                <div className="pt-2 flex justify-end">
                  <button
                    id="btn_submit_contact"
                    type="submit"
                    className="w-full sm:w-auto bg-blue-900 hover:bg-slate-900 text-white px-8 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider cursor-pointer"
                  >
                    Send Support Message
                  </button>
                </div>
              </form>
            )}

          </div>

          {/* Quick Info contacts panel (Col 5) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Quick Connections Cards */}
            <div className="bg-blue-900 text-white rounded-3xl p-8 border border-blue-500/10 shadow space-y-6">
              <h4 className="text-base font-bold border-b border-white/10 pb-3 text-white flex items-center">
                <Sparkles className="h-4 w-4 mr-2 text-amber-400" />
                Regional Directory
              </h4>

              <div className="space-y-5">
                <div className="flex items-start space-x-3.5">
                  <MapPin className="h-5 w-5 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <h5 className="text-[10px] font-bold uppercase text-blue-200">Main Corporate HQ</h5>
                    <p className="text-sm font-light">P.O. Box AP 1, Amuana Praso, Eastern Region, Ghana</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3.5">
                  <Phone className="h-5 w-5 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <h5 className="text-[10px] font-bold uppercase text-blue-200">Direct Teller Hotline</h5>
                    <p className="text-sm font-light font-mono">+233 (0) 50 123 4567</p>
                    <p className="text-xs font-light text-slate-300">Mon - Sat Support Line</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3.5">
                  <Mail className="h-5 w-5 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <h5 className="text-[10px] font-bold uppercase text-blue-200">Inbound Support Email</h5>
                    <p className="text-sm font-light">info@mponuacb.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3.5">
                  <Clock className="h-5 w-5 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <h5 className="text-[10px] font-bold uppercase text-blue-200">Standard Desk Hours</h5>
                    <p className="text-sm font-light">Monday to Friday: 8:00 AM – 4:00 PM</p>
                    <p className="text-xs font-light text-blue-205">Saturday Schedule: 9:00 AM – 1:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Safety Reminder card */}
            <div className="bg-amber-100/60 border border-amber-300 p-6 rounded-2xl flex items-start space-x-3 text-xs text-amber-900 leading-relaxed font-medium shadow-sm">
              <ShieldAlert className="h-5 w-5 text-amber-700 shrink-0" />
              <p>
                <strong>Security Alert:</strong> Mponua Community Bank Limited will never telephone to request your secret mobile phone login codes or online pin combinations. Protect your credentials secure from imposters.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* Corporate Styled FAQ Accordion Lists */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 mt-10">
        <div className="text-center mb-10">
          <span className="text-amber-600 font-bold uppercase tracking-wider text-xs">Helpdesk Answers</span>
          <h3 className="text-2xl font-black text-blue-900 mt-1">Frequently Answered Questions</h3>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openFaqIndex === index;
            return (
              <div 
                key={index}
                className="bg-white rounded-2xl shadow-sm border border-slate-150 overflow-hidden text-sm"
              >
                <button
                  id={`faq_btn_${index}`}
                  onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                  className="w-full text-left p-5 flex justify-between items-center text-blue-900 font-bold cursor-pointer transition-colors hover:bg-slate-50"
                >
                  <span>{faq.question}</span>
                  <span className="text-amber-500 font-extrabold text-lg select-none leading-none">
                    {isOpen ? '−' : '+'}
                  </span>
                </button>
                
                {isOpen && (
                  <div id={`faq_ans_${index}`} className="p-5 pt-0 text-slate-500 border-t border-slate-50 leading-relaxed font-light text-xs sm:text-sm">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

    </div>
  );
}
