import { useState } from 'react';
import { TEAM } from '../data';
import { TeamMember } from '../types';
import { Award, Landmark, Eye, Heart, Target, ChevronDown, CheckCircle, ShieldCheck } from 'lucide-react';

export default function AboutUs() {
  const [activeLeaderType, setActiveLeaderType] = useState<'board' | 'management'>('board');
  const [selectedMemberId, setSelectedMemberId] = useState<string | null>(null);

  const filteredTeam = TEAM.filter((member) => member.type === activeLeaderType);

  const stats = [
    { label: 'Year Established', value: '1983' },
    { label: 'Total Branches', value: '6 Outlets' },
    { label: 'Active Savers', value: '45,000+' },
    { label: 'Cocoa Farmers Funded', value: '12,000+' },
  ];

  const values = [
    {
      title: 'Integrity First',
      desc: 'We operate with rigid transparency, honesty and accuracy. Our financial ledgers and records undergo frequent external state audits under Bank of Ghana standards.',
      icon: ShieldCheck
    },
    {
      title: 'Customer Priority',
      desc: 'Our market traders and local farmers are our backbone. We treat each customer with dignity, crafting customized loan repayment calendars matching cash incomes.',
      icon: Heart
    },
    {
      title: 'Digital Innovation',
      desc: 'We are pioneering electronic wallets, high speed fiber connections, and modern mobile banking app structures designed specifically for rural and urban community integration.',
      icon: Award
    },
    {
      title: 'Community Empowerment',
      desc: 'We do not just hold deposits; we reinvest 80% of our local capital back into loans supporting agriculture, cocoa harvesting, and market trading in the very community we serve.',
      icon: Landmark
    }
  ];

  return (
    <div id="about_tab_view" className="bg-gray-50 pb-20">
      
      {/* Page Banner Header */}
      <section className="bg-gradient-to-r from-blue-950 to-blue-900 text-white py-16 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <span className="text-amber-400 font-bold uppercase tracking-widest text-xs">Our Corporate Profile</span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight mt-2 text-white">
            Our Story & Leadership
          </h2>
          <p className="text-blue-100 font-light mt-4 text-sm sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Strengthening microenterprises and improving incomes in Eastern Ghana through community banking with excellence since 1983.
          </p>
        </div>
      </section>

      {/* Corporate Overview History */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Text panel */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-blue-900 font-bold text-xs uppercase tracking-wider bg-blue-50 px-3 py-1 rounded">
              Historical Milestones
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-blue-900">
              Over 40 Years of Devoted Financial Inclusion
            </h3>
            <p className="text-sm sm:text-base text-slate-605 leading-relaxed font-light">
              Mponua Community Bank Limited (formerly registered and known as <strong>Mponua Rural Bank Limited</strong>) was incorporated under the Companies Act, 1963 (Act 179) on 18th January, 1983.
            </p>
            <p className="text-sm sm:text-base text-slate-605 leading-relaxed font-light">
              We were subsequently licensed by the Bank of Ghana under the Banking Act, 1970 (Act 339) to officially commence rural banking operations at <strong>Amuana Praso</strong> – the headquarters of the bank – on 16th September, 1983.
            </p>
            <p className="text-sm sm:text-base text-slate-605 leading-relaxed font-light">
              To support modern digitized economies, our Board and Shareholders initiated a strategic name transition to <strong>Mponua Community Bank</strong>. This aligns our core mission as a modern, technology-enabled community bank catering for traders, civil servants, and cooperative structures with modern branches across the Eastern Region.
            </p>

            {/* Quote block */}
            <div className="border-l-4 border-amber-500 bg-amber-500/5 p-5 rounded-r">
              <p className="text-xs sm:text-sm text-amber-905 italic font-medium">
                "We remain deeply rooted in local service, but our mechanisms have been fully modernized with real-time digital balance alerts, fiber linkages, and high-safeguard systems."
              </p>
              <span className="text-xs text-amber-700 font-bold block mt-2">— Felicia Boamah Hall, CEO</span>
            </div>
          </div>

          {/* Stats card banner */}
          <div className="lg:col-span-5 bg-white rounded-3xl shadow-xl p-8 border border-slate-100 flex flex-col justify-between h-full">
            <div>
              <h4 className="text-lg font-bold text-blue-900 mb-6 border-b border-slate-100 pb-3">Performance Highlights</h4>
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, idx) => (
                  <div key={idx} className="bg-slate-50 p-4 rounded border border-slate-100/50 text-center">
                    <span className="text-2xl sm:text-3xl font-black text-blue-900 block">{stat.value}</span>
                    <span className="text-[10px] text-slate-400 font-bold block uppercase mt-1 leading-tight">{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-100 space-y-4">
              <div className="flex items-center space-x-3 text-xs text-slate-500">
                <CheckCircle className="h-5 w-5 text-amber-500 shrink-0" />
                <span>Exhaustive Bank of Ghana regulatory compliance</span>
              </div>
              <div className="flex items-center space-x-3 text-xs text-slate-500">
                <CheckCircle className="h-5 w-5 text-amber-500 shrink-0" />
                <span>Over GH₵ 50,000,000 in local community assets</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Vision, Mission, Core Principles */}
      <section className="py-20 bg-slate-900 text-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            
            {/* Vision card */}
            <div className="bg-slate-950/40 border border-slate-800 rounded-2xl p-8 sm:p-10 flex space-x-5">
              <div className="bg-amber-500 text-blue-950 w-14 h-14 rounded flex items-center justify-center shrink-0">
                <Eye className="h-7 w-7" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Our Vision Statement</h3>
                <p className="text-slate-300 text-sm leading-relaxed font-light">
                  To be the pre-eminent, most secure, and customer-focused community bank in Ghana, acting as a dynamic catalyst for enterprise growth, agricultural abundance, and extreme poverty reduction.
                </p>
              </div>
            </div>

            {/* Mission card */}
            <div className="bg-slate-950/40 border border-slate-800 rounded-2xl p-8 sm:p-10 flex space-x-5">
              <div className="bg-amber-500 text-blue-950 w-14 h-14 rounded flex items-center justify-center shrink-0">
                <Target className="h-7 w-7" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Our Mission Statement</h3>
                <p className="text-slate-300 text-sm leading-relaxed font-light">
                  To deliver innovative microfinance products, flexible loans, and accessible savings accounts through safe automated banking technologies, exceptional customer treatment, and dedicated social reinvestment.
                </p>
              </div>
            </div>

          </div>

          <div className="text-center mb-12">
            <span className="text-amber-500 font-bold uppercase tracking-widest text-xs">Our Shared Conduct Rules</span>
            <h3 className="text-2xl sm:text-3xl font-bold text-white mt-1">Our Core Organizational Values</h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <div key={i} className="bg-slate-950/30 border border-slate-850 p-6 rounded-2xl">
                  <div className="bg-amber-450/10 text-amber-500 w-10 h-10 rounded-xl flex items-center justify-center mb-4 border border-amber-500/20">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h4 className="text-base font-bold text-white mb-2">{v.title}</h4>
                  <p className="text-xs text-slate-300 leading-relaxed font-light">{v.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Board & Management Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-amber-600 font-bold uppercase tracking-wider text-xs">Governing Trust & Operations</span>
          <h2 className="text-3xl font-extrabold text-blue-900 mt-1.5">
            Board Officers & Management Team
          </h2>
          <div className="h-1 bg-amber-400 w-12 mx-auto mt-3 rounded-full" />
          <p className="text-slate-500 text-sm mt-3 font-light">
            Our bank is guided by highly experienced micro-credit regulators, lawyers, and retail banking practitioners.
          </p>

          {/* Leaders Toggle */}
          <div className="flex bg-slate-100 p-1 rounded-lg w-72 sm:w-80 mx-auto mt-8">
            <button
              onClick={() => {
                setActiveLeaderType('board');
                setSelectedMemberId(null);
              }}
              className={`flex-1 py-2 text-xs font-bold rounded transition-all cursor-pointer ${
                activeLeaderType === 'board'
                  ? 'bg-blue-900 text-white shadow'
                  : 'text-slate-600 hover:text-blue-900'
              }`}
            >
              Board of Directors
            </button>
            <button
              id="tab_btn_management_members"
              onClick={() => {
                setActiveLeaderType('management');
                setSelectedMemberId(null);
              }}
              className={`flex-1 py-2 text-xs font-bold rounded transition-all cursor-pointer ${
                activeLeaderType === 'management'
                  ? 'bg-blue-900 text-white shadow'
                  : 'text-slate-600 hover:text-blue-900'
              }`}
            >
              Management Members
            </button>
          </div>
        </div>

        {/* Leaders Rendering */}
        {activeLeaderType === 'board' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {filteredTeam.map((member: TeamMember) => (
              <div 
                key={member.id}
                onClick={() => setSelectedMemberId(selectedMemberId === member.id ? null : member.id)}
                className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-blue-500/10 transition-all cursor-pointer relative flex flex-col justify-between"
              >
                <div>
                  {/* Standard abstract initial circle instead of random face placeholders for cleaner corporate design */}
                  <div className="w-16 h-16 bg-blue-100 text-blue-900 rounded flex items-center justify-center font-bold text-xl mb-4">
                    {member.name.split(' ').filter(n => !n.includes('(')).map(n => n[0]).join('')}
                  </div>
                  
                  <h3 className="font-extrabold text-slate-900 text-base leading-snug">{member.name}</h3>
                  <p className="text-amber-600 text-xs font-bold mt-1 uppercase tracking-wider">{member.role}</p>
                  
                  <div className={`mt-4 text-xs text-slate-550 leading-relaxed font-light ${
                    selectedMemberId === member.id ? 'block' : 'line-clamp-3'
                  }`}>
                    {member.bio}
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-bold text-blue-900">
                  <span>{selectedMemberId === member.id ? 'Collapse profile' : 'Show full bio'}</span>
                  <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${selectedMemberId === member.id ? 'rotate-180' : ''}`} />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden">
            {/* Table Header */}
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-slate-150">
                <thead className="bg-slate-50">
                  <tr>
                    <th scope="col" className="px-6 py-4 text-left text-xs font-bold text-slate-500 uppercase tracking-wider">
                      Management Member
                    </th>
                    <th scope="col" className="px-6 py-4 text-left text-xs font-bold text-slate-500 uppercase tracking-wider">
                      Position
                    </th>
                    <th scope="col" className="hidden md:table-cell px-6 py-4 text-left text-xs font-bold text-slate-500 uppercase tracking-wider">
                      Professional Background
                    </th>
                    <th scope="col" className="px-6 py-4 text-right text-xs font-bold text-slate-500 uppercase tracking-wider">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 bg-white">
                  {filteredTeam.map((member: TeamMember) => {
                    const isSelected = selectedMemberId === member.id;
                    const initials = member.name.split(' ').filter(n => !n.includes('(')).map(n => n[0]).join('');
                    
                    return (
                      <>
                        <tr 
                          key={member.id}
                          onClick={() => setSelectedMemberId(isSelected ? null : member.id)}
                          className="hover:bg-slate-50/70 transition-colors cursor-pointer"
                        >
                          <td className="px-6 py-5 whitespace-nowrap">
                            <div className="flex items-center space-x-3.5">
                              <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-900 border border-blue-100/50 flex items-center justify-center font-bold text-sm shrink-0">
                                {initials}
                              </div>
                              <span className="text-sm font-extrabold text-slate-900">{member.name}</span>
                            </div>
                          </td>
                          <td className="px-6 py-5 whitespace-nowrap">
                            <span className="inline-flex items-center px-3 py-1 rounded text-xs font-bold bg-amber-50 text-amber-800 border border-amber-200/50">
                              {member.role}
                            </span>
                          </td>
                          <td className="hidden md:table-cell px-6 py-5">
                            <p className="text-xs text-slate-500 line-clamp-1 font-light max-w-md">
                              {member.bio}
                            </p>
                          </td>
                          <td className="px-6 py-5 whitespace-nowrap text-right text-xs font-bold text-blue-900">
                            <button className="inline-flex items-center space-x-1.5 ml-auto text-blue-900 hover:text-slate-900 cursor-pointer">
                              <span>{isSelected ? 'Hide Bio' : 'View Bio'}</span>
                              <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-300 ${isSelected ? 'rotate-180' : ''}`} />
                            </button>
                          </td>
                        </tr>
                        {isSelected && (
                          <tr key={`bio-${member.id}`} className="bg-slate-50/40">
                            <td colSpan={4} className="px-8 py-5 text-xs sm:text-sm text-slate-600 font-light leading-relaxed border-t border-slate-100">
                              <div className="max-w-4xl space-y-2">
                                <h4 className="font-extrabold text-blue-950 text-xs uppercase tracking-wider">Biography & Portfolio Directive</h4>
                                <p>{member.bio}</p>
                              </div>
                            </td>
                          </tr>
                        )}
                      </>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </section>

    </div>
  );
}
