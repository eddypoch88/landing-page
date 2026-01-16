import React from 'react';

const Logos: React.FC = () => {
  return (
    <section className="py-10 bg-white border-y border-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs font-bold text-gray-400 tracking-widest uppercase mb-8">
          Powering Top Local Brands
        </p>
        <div className="flex flex-wrap justify-center gap-12 lg:gap-20 grayscale opacity-50">
           {/* Replaced real SVGs with placeholder boxes that look like generic tech logos for the demo */}
           {[1, 2, 3, 4, 5].map((i) => (
             <div key={i} className="h-8 w-24 bg-gray-300 rounded animate-pulse" style={{ animationDelay: `${i * 0.1}s` }}></div>
           ))}
        </div>
      </div>
    </section>
  );
};

export default Logos;