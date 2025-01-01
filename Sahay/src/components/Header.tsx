import { Scale, Heart } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-indigo-700 text-white py-6 px-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Scale className="w-8 h-8" />
          <span className="text-2xl font-bold">JusticeBridge</span>
        </div>
        <div className="flex items-center space-x-2">
          <Heart className="w-5 h-5" />
          <span className="text-sm">Pro Bono Legal Services</span>
        </div>
      </div>
    </header>
  );
}