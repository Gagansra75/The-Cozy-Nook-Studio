import { X, Sparkles } from 'lucide-react';
import { useState } from 'react';

const PromoBanner = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-gradient-to-r from-craft-primary to-craft-secondary text-white py-3 px-4 relative overflow-hidden">
      <div className="container mx-auto flex items-center justify-center gap-2 relative z-10">
        <Sparkles size={20} className="animate-pulse" />
        <p className="text-sm md:text-base font-medium text-center">
          🎉 New Year Sale! Get <span className="font-bold">20% OFF</span> on all handcrafted items! 
          <span className="hidden sm:inline"> Use code: <span className="font-bold">CRAFT2026</span></span>
        </p>
        <Sparkles size={20} className="animate-pulse" />
      </div>
      <button
        onClick={() => setIsVisible(false)}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 hover:bg-white/20 p-1 rounded-full transition-colors"
        aria-label="Close banner"
      >
        <X size={18} />
      </button>
      
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-32 h-32 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-40 h-40 bg-white rounded-full translate-x-1/2 translate-y-1/2"></div>
      </div>
    </div>
  );
};

export default PromoBanner;
