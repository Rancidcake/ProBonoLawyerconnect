export interface Lawyer {
  id: string;
  name: string;
  email: string;
  specialties: string[];
  experience: number;
  location: string;
  availableHours: number;
  cases: number;
}

export interface Client {
  id: string;
  caseType: string;
  description: string;
  location: string;
  urgency: 'low' | 'medium' | 'high';
  status: 'pending' | 'matched' | 'closed';
}