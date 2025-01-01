import React from 'react';
import { X } from 'lucide-react';
import CaseSubmissionForm from './CaseSubmissionForm';
import { Client } from '../types';

interface CaseSubmissionModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (caseData: Omit<Client, 'id' | 'status'>) => void;
}

export default function CaseSubmissionModal({ isOpen, onClose, onSubmit }: CaseSubmissionModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg max-w-md w-full relative">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
        >
          <X className="w-6 h-6" />
        </button>
        
        <div className="p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Submit Your Case</h2>
          <CaseSubmissionForm onSubmit={(data) => {
            onSubmit(data);
            onClose();
          }} />
        </div>
      </div>
    </div>
  );
}