import { useState } from 'react';
import { BRANCHES } from '../data';
import { Branch } from '../types';
import { MapPin, Phone, Mail, Clock, User, CheckCircle2, Navigation } from 'lucide-react';

export default function Branches() {
  const [selectedBranchId, setSelectedBranchId] = useState<string>('amuana-praso');

  const activeBranch = BRANCHES.find((b) => b.id === selectedBranchId) || BRANCHES[0];

  const servicesMap = [
    'Cocoa Farmer Payments Processing',
    'Western Union & RIA Cash Payouts',
    'Susu Daily Cash Collections Support',
    'SME Working Capital Valuations',
    'Mobile Money Cash In & Out Terminals',
    'Direct Check Clearing Services'
  ];

  return (
    <div id="branches_tab_view" className="bg-gray-50 pb-20">
      
      {/* Banner */}
      <section className="bg-gradient-to-r from-blue-950 to-blue-900 text-white py-16 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <span className="text-amber-400 font-bold uppercase tracking-widest text-xs">Our Network Outlets</span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight mt-2 text-white">
            Six Interactive Branches
          </h2>
          <p className="text-blue-100 font-light mt-4 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Convenient and cozy physical banking facilities spread throughout the Eastern Region of Ghana, equipped with fiber systems for maximum transaction efficiency.
          </p>
        </div>
      </section>

      {/* Main interactive panel */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Branch Selector Sidebar (4 Cols) */}
          <div className="lg:col-span-4 bg-white rounded-3xl p-6 shadow-sm border border-slate-100 space-y-3">
            <h3 className="font-extrabold text-blue-900 text-lg mb-4 border-b border-slate-100 pb-3">
              Locations Directory
            </h3>
            
            <div className="space-y-2 max-h-[480px] overflow-y-auto pr-1">
              {BRANCHES.map((branch) => (
                <button
                  key={branch.id}
                  id={`branch_item_${branch.id}`}
                  onClick={() => setSelectedBranchId(branch.id)}
                  className={`w-full text-left p-4 rounded-xl cursor-pointer transition-all border flex items-center justify-between ${
                    selectedBranchId === branch.id
                      ? 'bg-blue-900 text-white border-blue-900 shadow'
                      : 'bg-slate-50 text-slate-700 border-slate-100 hover:bg-slate-100 hover:border-blue-500/10'
                  }`}
                >
                  <div className="space-y-1">
                    <p className={`font-bold text-sm ${selectedBranchId === branch.id ? 'text-white' : 'text-blue-900'}`}>
                      {branch.name}
                    </p>
                    <p className={`text-xs ${selectedBranchId === branch.id ? 'text-blue-200' : 'text-slate-400'}`}>
                      {branch.location.split(',')[0]}
                    </p>
                  </div>
                  <MapPin className={`h-4 w-4 shrink-0 ml-3 ${selectedBranchId === branch.id ? 'text-amber-400' : 'text-slate-400'}`} />
                </button>
              ))}
            </div>
          </div>

          {/* Branch Details and Map (8 Cols) */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* Visual Real Google Map Interface */}
            <div className="bg-slate-100 rounded-3xl h-80 overflow-hidden border border-slate-200 relative shadow bg-slate-200">
              <iframe
                id="google_maps_iframe"
                title={`${activeBranch.name} Google Map`}
                src={`https://maps.google.com/maps?q=${encodeURIComponent(activeBranch.location + ' ' + activeBranch.name)}&t=&z=14&ie=UTF8&iwloc=&output=embed`}
                className="w-full h-full border-0 select-none rounded-3xl"
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer"
              />

              {/* Map Information Badge */}
              <div className="absolute top-4 left-4 bg-blue-900/90 text-white text-[10px] px-3 py-1.5 rounded-lg font-bold flex items-center space-x-2 border border-blue-950 shadow">
                <Navigation className="h-3 w-3 text-amber-400" />
                <span>Live Google Map: {activeBranch.name}</span>
              </div>
            </div>

            {/* General Branch Detail Panel */}
            <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-sm border border-gray-100">
              <span className="text-xs uppercase font-bold text-amber-600 tracking-wider">Active Choice Details</span>
              <h4 className="text-xl sm:text-2xl font-black text-blue-900 mt-1 mb-6">{activeBranch.name}</h4>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                
                {/* Contact items */}
                <div className="space-y-4">
                  <div className="flex items-start space-x-3.5">
                    <MapPin className="h-5 w-5 text-amber-500 shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">Postal Location Address</p>
                      <p className="text-sm font-semibold text-gray-700">{activeBranch.location}</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3.5">
                    <Phone className="h-5 w-5 text-amber-500 shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">Branch Telephone Hotline</p>
                      <p className="text-sm font-semibold text-gray-700">{activeBranch.phone}</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3.5">
                    <Mail className="h-5 w-5 text-amber-500 shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">Branch Official Email</p>
                      <p className="text-sm font-semibold text-gray-700">{activeBranch.email}</p>
                    </div>
                  </div>
                </div>

                {/* Operations Hours and Managers */}
                <div className="space-y-4">
                  <div className="flex items-start space-x-3.5">
                    <Clock className="h-5 w-5 text-amber-505 shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs font-bold text-blue-900 uppercase tracking-wider">Standard Operating Times</p>
                      <p className="text-sm font-semibold text-gray-705 leading-snug">{activeBranch.hours}</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3.5">
                    <User className="h-5 w-5 text-amber-500 shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">Authorized Branch Manager</p>
                      <p className="text-sm font-semibold text-gray-700">{activeBranch.manager}</p>
                    </div>
                  </div>
                </div>

              </div>

              {/* Branch description and services bullet checks */}
              <div className="bg-gray-50 border border-gray-100 p-6 rounded-2xl">
                <h5 className="text-xs font-black uppercase text-gray-400 mb-2 tracking-wider">Branch Description</h5>
                <p className="text-sm text-gray-600 font-light leading-relaxed mb-6">
                  {activeBranch.details}
                </p>

                <h5 className="text-xs font-black uppercase text-blue-900 mb-3 tracking-wider">Available Local Services:</h5>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {servicesMap.map((serv, index) => (
                    <div key={index} className="flex items-center space-x-2 text-xs text-gray-500">
                      <CheckCircle2 className="h-4 w-4 text-amber-500 shrink-0" />
                      <span>{serv}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
