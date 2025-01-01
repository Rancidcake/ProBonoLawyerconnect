import React, { useState } from 'react';
import { Client } from '../types';
import { AlertCircle, MapPin } from 'lucide-react';

interface CaseSubmissionFormProps {
  onSubmit: (caseData: Omit<Client, 'id' | 'status'>) => void;
}

export default function CaseSubmissionForm({ onSubmit }: CaseSubmissionFormProps) {
  const [formData, setFormData] = useState({
    caseType: '',
    description: '',
    location: '',
    urgency: 'medium' as Client['urgency']
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({ caseType: '', description: '', location: '', urgency: 'medium' });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-6">
      <div className="space-y-4">
        <div>
          <label htmlFor="caseType" className="block text-sm font-medium text-gray-700">
            Case Type
          </label>
          <select
            id="caseType"
            value={formData.caseType}
            onChange={(e) => setFormData(prev => ({ ...prev, caseType: e.target.value }))}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            required
          >
            <option value="">Select a case type</option>
            <option value="Housing Rights">Housing Rights</option>
            <option value="Immigration">Immigration</option>
            <option value="Employment Law">Employment Law</option>
            <option value="Family Law">Family Law</option>
            <option value="Civil Rights">Civil Rights</option>
          </select>
        </div>

        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">
            Description
          </label>
          <textarea
            id="description"
            value={formData.description}
            onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            rows={4}
            required
          />
        </div>

        <div>
          <label htmlFor="location" className="block text-sm font-medium text-gray-700">
            Location
          </label>
          <div className="mt-1 relative">
            <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              id="location"
              value={formData.location}
              onChange={(e) => setFormData(prev => ({ ...prev, location: e.target.value }))}
              className="pl-10 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              required
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Urgency
          </label>
          <div className="mt-2 flex items-center space-x-4">
            {['low', 'medium', 'high'].map((urgency) => (
              <label key={urgency} className="flex items-center">
                <input
                  type="radio"
                  name="urgency"
                  value={urgency}
                  checked={formData.urgency === urgency}
                  onChange={(e) => setFormData(prev => ({ ...prev, urgency: e.target.value as Client['urgency'] }))}
                  className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                />
                <span className="ml-2 capitalize">{urgency}</span>
              </label>
            ))}
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors"
        >
          Submit Case
        </button>
      </div>
    </form>
  );
}