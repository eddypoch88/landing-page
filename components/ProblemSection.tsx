import React from 'react';
import { XCircle, Clock } from 'lucide-react';

const ProblemSection: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Interactive UI Component */}
          <div className="bg-white rounded-3xl shadow-xl p-6 md:p-8 border border-gray-100 relative">
             <div className="flex items-center justify-between mb-6">
                <h3 className="font-bold text-lg text-gray-900">Manual Replies</h3>
                <span className="px-3 py-1 bg-red-100 text-red-600 text-xs font-bold rounded-full">Slow</span>
             </div>

             {/* Skeleton Loaders for context */}
             <div className="flex items-center gap-4 mb-6 opacity-30">
                <div className="w-10 h-10 rounded-full bg-gray-200"></div>
                <div className="flex-1 space-y-2">
                   <div className="h-3 bg-gray-200 rounded w-1/4"></div>
                   <div className="h-3 bg-gray-200 rounded w-3/4"></div>
                </div>
             </div>

             {/* Message 1 */}
             <div className="bg-red-50 rounded-xl p-4 mb-4 border-l-4 border-red-400">
                <div className="flex items-start gap-3">
                   <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-xs">
                      A
                   </div>
                   <div className="flex-1">
                      <p className="text-sm font-semibold text-gray-900">PM harga sis?</p>
                      <div className="flex items-center gap-1 mt-1 text-red-500">
                         <Clock size={12} />
                         <span className="text-xs font-medium">Received 4 hours ago</span>
                      </div>
                   </div>
                </div>
             </div>

             {/* Message 2 */}
             <div className="bg-red-50 rounded-xl p-4 border-l-4 border-red-400">
                <div className="flex items-start gap-3">
                   <div className="w-8 h-8 rounded-full bg-pink-100 flex items-center justify-center text-pink-600 font-bold text-xs">
                      S
                   </div>
                   <div className="flex-1">
                      <p className="text-sm font-semibold text-gray-900">Is this available?</p>
                      <div className="flex items-center gap-1 mt-1 text-red-500">
                         <Clock size={12} />
                         <span className="text-xs font-medium">Received 6 hours ago</span>
                      </div>
                   </div>
                </div>
             </div>

             <div className="absolute -z-10 top-10 -right-10 w-full h-full bg-gray-200 rounded-3xl transform rotate-3"></div>
          </div>

          {/* Right: Text Content */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Stop losing leads to <br/>
              <span className="text-red-500">slow replies.</span>
            </h2>
            
            <p className="text-lg text-gray-600 leading-relaxed">
               Your customers want answers now. If you reply 4 hours later, they've already bought from your competitor. Don't let manual typing kill your conversion rate.
            </p>

            <ul className="space-y-4 pt-4">
              {[
                "Lost sales opportunities",
                "Wasted ad budget",
                "Stressed admin staff"
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                   <div className="bg-red-100 rounded-full p-1 text-red-500">
                     <XCircle size={20} fill="currentColor" className="text-white" />
                   </div>
                   <span className="font-semibold text-gray-800">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;