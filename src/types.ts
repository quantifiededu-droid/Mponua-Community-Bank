export interface Branch {
  id: string;
  name: string;
  location: string;
  phone: string;
  email: string;
  hours: string;
  manager: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  details: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  imageUrl?: string;
  type: 'board' | 'management';
}

export interface BankProduct {
  id: string;
  category: 'savings' | 'loans' | 'remittance';
  title: string;
  tagline: string;
  features: string[];
  description: string;
  minBalance?: string;
  interestRate?: string;
}

export interface NewsPost {
  id: string;
  title: string;
  category: string;
  date: string;
  excerpt: string;
  content: string;
  imageUrl: string;
}

export interface AccountApplication {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  residentialAddress: string;
  occupation: string;
  branch: string;
  accountType: string;
  idType: string;
  idNumber: string;
  dateApplied: string;
  status: 'Pending Verification' | 'Document Review' | 'Pre-Approved' | 'Active';
}
