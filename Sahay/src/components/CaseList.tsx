import React from 'react';
import { Client } from '../types';
import { AlertCircle, Clock, MapPin } from 'lucide-react';

interface CaseListProps {
  cases: Client[];
  onSelect: (caseId: string) => void;
}

export default function CaseList({ cases, onSelect }: CaseListProps) {
  const getUrgencyColor = (urgency: Client['urgency']) => {
    switch (urgency) {
      case 'high':
        return 'text-red-600';
      case 'medium':
        return 'text-yellow-600';
      default:
        return 'text-green-600';
    }
  };

  return (
    <div className="space-y-4">
      {cases.map((case_) => (
        <div
          key={case_.id}
          className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow cursor-pointer"
          onClick={() => onSelect(case_.id)}
        >
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-lg font-semibold text-gray-900">{case_.caseType}</h3>
              <p className="mt-2 text-gray-600">{case_.description}</p>
              <div className="mt-4 flex items-center space-x-4 text-sm text-gray-500">
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-1" />
                  {case_.location}
                </div>
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-1" />
                  {case_.status}
                </div>
              </div>
            </div>
            <div className={`flex items-center ${getUrgencyColor(case_.urgency)}`}>
              <AlertCircle className="w-5 h-5 mr-1" />
              {case_.urgency}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}