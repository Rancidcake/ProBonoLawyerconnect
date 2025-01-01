import React from 'react';
import { Lawyer } from '../types';
import { User, Briefcase, MapPin, Clock } from 'lucide-react';

interface LawyerProfileProps {
  lawyer: Lawyer;
  onAcceptCase: () => void;
}

export default function LawyerProfile({ lawyer, onAcceptCase }: LawyerProfileProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center space-x-4">
        <div className="bg-indigo-100 p-3 rounded-full">
          <User className="w-8 h-8 text-indigo-600" />
        </div>
        <div>
          <h2 className="text-xl font-semibold text-gray-900">{lawyer.name}</h2>
          <p className="text-gray-500">{lawyer.email}</p>
        </div>
      </div>
      
      <div className="mt-6 grid grid-cols-2 gap-4">
        <div className="flex items-center space-x-2 text-gray-600">
          <Briefcase className="w-5 h-5" />
          <span>{lawyer.experience} years experience</span>
        </div>
        <div className="flex items-center space-x-2 text-gray-600">
          <MapPin className="w-5 h-5" />
          <span>{lawyer.location}</span>
        </div>
        <div className="flex items-center space-x-2 text-gray-600">
          <Clock className="w-5 h-5" />
          <span>{lawyer.availableHours}h/week available</span>
        </div>
      </div>

      <div className="mt-6">
        <h3 className="font-semibold text-gray-900">Specialties</h3>
        <div className="mt-2 flex flex-wrap gap-2">
          {lawyer.specialties.map((specialty, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm"
            >
              {specialty}
            </span>
          ))}
        </div>
      </div>

      <button
        onClick={onAcceptCase}
        className="mt-6 w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors"
      >
        Accept Case
      </button>
    </div>
  );
}