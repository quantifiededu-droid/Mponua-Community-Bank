import { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import Products from './components/Products';
import Branches from './components/Branches';
import Portal from './components/Portal';
import Contact from './components/Contact';
import { AccountApplication } from './types';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('home');
  const [selectedProductCategory, setSelectedProductCategory] = useState<'savings' | 'loans' | 'remittance'>('savings');

  // Interactive Online applications state container
  const [applications, setApplications] = useState<AccountApplication[]>([
    {
      id: 'MP-ACCT-84952',
      fullName: 'Opanin Emmanuel Boateng',
      email: 'boateng.farms@gmail.com',
      phone: '+233 (0) 54 888 2931',
      residentialAddress: 'Cocoa House Road, Amuana Praso, Ghana',
      occupation: 'Cocoa Farmer Cooperative Lead',
      branch: 'Head Office & Amuana Praso Branch',
      accountType: 'High-Yield Fixed Deposits',
      idType: 'Ghana Card (National ID)',
      idNumber: 'GHA-77492022-8',
      dateApplied: '22/05/2026',
      status: 'Active'
    },
    {
      id: 'MP-ACCT-19203',
      fullName: 'Madam Florence Osei-Wusu',
      email: 'florence.trading@outlook.com',
      phone: '+233 (0) 50 111 5566',
      residentialAddress: 'Koforidua Market block B, Ghana',
      occupation: 'Retail Textile Merchant',
      branch: 'Koforidua Branch',
      accountType: 'Mponua Susu Savings Scheme',
      idType: 'Ghana Card (National ID)',
      idNumber: 'GHA-99201931-1',
      dateApplied: '25/05/2026',
      status: 'Document Review'
    }
  ]);

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return (
          <Home 
            setActiveTab={setActiveTab} 
            setSelectedProductCategory={setSelectedProductCategory} 
          />
        );
      case 'about':
        return <AboutUs />;
      case 'products':
        return (
          <Products
            selectedCategory={selectedProductCategory}
            setSelectedCategory={setSelectedProductCategory}
            setActiveTab={setActiveTab}
          />
        );
      case 'branches':
        return <Branches />;
      case 'portal':
        return (
          <Portal 
            applications={applications} 
            setApplications={setApplications} 
          />
        );
      case 'contact':
        return <Contact />;
      default:
        return (
          <Home 
            setActiveTab={setActiveTab} 
            setSelectedProductCategory={setSelectedProductCategory} 
          />
        );
    }
  };

  return (
    <div id="app_root" className="min-h-screen flex flex-col justify-between font-sans antialiased text-gray-805 bg-gray-50 bg-radial select-none">
      {/* Scroll-to-top custom behavior or tracking alert might bind on tab changes */}
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
      
      {/* Primary Dynamic State Panel Content */}
      <main className="flex-grow">
        {renderContent()}
      </main>

      <Footer setActiveTab={setActiveTab} />
    </div>
  );
}
