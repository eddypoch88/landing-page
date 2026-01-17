import React from 'react';

const CTASection: React.FC = () => {
  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
      
      <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-extrabold text-slate-800 mb-6 tracking-tight">
          Ready to scale your <br className="hidden md:block"/>
          business?
        </h2>
        
        <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto">
          Join 500+ Malaysian business owners who are saving 20+ hours a week and closing 3x more sales.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
           <button className="w-full sm:w-auto bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-10 rounded-full transition-all shadow-xl shadow-green-200 text-lg transform hover:-translate-y-1">
             Get Started for Free
           </button>
           <button className="w-full sm:w-auto bg-white hover:bg-slate-100 text-slate-800 border border-slate-200 font-bold py-4 px-10 rounded-full transition-all text-lg">
             View Pricing
           </button>
        </div>
        
        <p className="text-sm text-slate-400">
           No credit card required • 14-day free trial
        </p>
      </div>
    </section>
  );
};

export default CTASection;