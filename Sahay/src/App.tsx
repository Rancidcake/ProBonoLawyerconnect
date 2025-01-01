import React, { useState } from 'react';
import Header from './components/Header';
import CaseList from './components/CaseList';
import LawyerProfile from './components/LawyerProfile';
import CaseSubmissionModal from './components/CaseSubmissionModal';
import { Client, Lawyer } from './types';

// Mock data for demonstration
const mockCases: Client[] = [
  {
    id: '1',
    caseType: 'Housing Rights',
    description: 'Tenant facing wrongful eviction from apartment complex',
    location: 'Brooklyn, NY',
    urgency: 'high',
    status: 'pending'
  },
  {
    id: '2',
    caseType: 'Immigration',
    description: 'Family seeking asylum assistance and documentation support',
    location: 'Queens, NY',
    urgency: 'medium',
    status: 'pending'
  },
  {
    id: '3',
    caseType: 'Employment Law',
    description: 'Worker experiencing workplace discrimination',
    location: 'Manhattan, NY',
    urgency: 'high',
    status: 'pending'
  }
];

const mockLawyer: Lawyer = {
  id: '1',
  name: 'Sarah Johnson',
  email: 'sarah.johnson@law.com',
  specialties: ['Housing Law', 'Civil Rights', 'Immigration'],
  experience: 8,
  location: 'New York, NY',
  availableHours: 10,
  cases: 3
};

function App() {
  const [cases, setCases] = useState<Client[]>(mockCases);
  const [selectedCase, setSelectedCase] = useState<string | null>(null);
  const [isSubmissionModalOpen, setIsSubmissionModalOpen] = useState(false);

  const handleCaseSelect = (caseId: string) => {
    setSelectedCase(caseId);
  };

  const handleAcceptCase = () => {
    alert('Case accepted! The client will be notified.');
    setSelectedCase(null);
  };

  const handleCaseSubmit = (caseData: Omit<Client, 'id' | 'status'>) => {
    const newCase: Client = {
      ...caseData,
      id: String(cases.length + 1),
      status: 'pending'
    };
    setCases(prev => [...prev, newCase]);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-7xl mx-auto py-8 px-4">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Pro Bono Case Matching</h1>
          <button
            onClick={() => setIsSubmissionModalOpen(true)}
            className="bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors"
          >
            Submit New Case
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Available Cases</h2>
            <CaseList cases={cases} onSelect={handleCaseSelect} />
          </div>
          
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Your Profile</h2>
            <LawyerProfile 
              lawyer={mockLawyer}
              onAcceptCase={handleAcceptCase}
            />
          </div>
        </div>
      </main>

      <CaseSubmissionModal
        isOpen={isSubmissionModalOpen}
        onClose={() => setIsSubmissionModalOpen(false)}
        onSubmit={handleCaseSubmit}
      />
    </div>
  );
}

export default App;