import React from 'react';
import { PlayCircle, MessageCircle, ShoppingBag, Heart, Share2, Music2 } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-12 pb-20 lg:pt-20 lg:pb-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Left Content */}
          <div className="max-w-2xl mx-auto lg:mx-0 text-center lg:text-left z-10">
            <div className="inline-flex items-center space-x-2 bg-green-50 border border-green-100 rounded-full px-3 py-1 mb-6">
              <span className="w-2 h-2 rounded-full bg-brand-green animate-pulse"></span>
              <span className="text-xs font-bold text-green-800 uppercase tracking-wide">New for Malaysian SMEs</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-gray-900 leading-[1.1] mb-6">
              Iklan jalan, tapi <br />
              <span className="text-brand-green">customer senyap?</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed">
              Automate your TikTok leads directly to WhatsApp. Close sales while you sleep. No more manual replies, no more "pm tepi".
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-10">
              <button className="w-full sm:w-auto bg-brand-green hover:bg-green-500 text-white font-bold py-4 px-8 rounded-full transition-all shadow-xl shadow-green-200 transform hover:-translate-y-1 text-lg">
                Start Free Trial
              </button>
              <button className="w-full sm:w-auto bg-white hover:bg-gray-50 text-gray-800 border-2 border-gray-200 font-bold py-3.5 px-8 rounded-full transition-all flex items-center justify-center gap-2 group">
                <PlayCircle className="text-brand-green group-hover:scale-110 transition-transform" size={24} />
                <span>See how it works</span>
              </button>
            </div>
            
            <div className="flex items-center justify-center lg:justify-start gap-4">
              <div className="flex -space-x-3">
                {[1, 2, 3].map((i) => (
                  <img 
                    key={i}
                    src={`https://i.pravatar.cc/100?img=${i + 10}`} 
                    alt="User" 
                    className="w-10 h-10 rounded-full border-2 border-white object-cover shadow-sm"
                  />
                ))}
              </div>
              <p className="text-sm font-medium text-gray-500">
                Trusted by <span className="font-bold text-gray-900">500+ Malaysian SMEs</span>
              </p>
            </div>
          </div>

          {/* Right Visuals */}
          <div className="relative mx-auto w-full max-w-[500px] lg:max-w-none h-[600px] flex items-center justify-center lg:justify-end perspective-1000">
            
            {/* Phone Mockup */}
            <div className="relative w-[300px] h-[600px] bg-gray-900 rounded-[40px] border-[8px] border-gray-900 shadow-2xl z-20 overflow-hidden transform rotate-[-2deg] hover:rotate-0 transition-transform duration-500">
              {/* Dynamic Island / Notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-black rounded-b-2xl z-30"></div>
              
              {/* Screen Content - TikTok Style */}
              <div className="relative w-full h-full bg-gray-800">
                 <img 
                  src="https://images.unsplash.com/photo-1542596768-5d1d21f1cfb6?q=80&w=800&auto=format&fit=crop" 
                  className="w-full h-full object-cover opacity-80" 
                  alt="TikTok Video Background"
                />
                
                {/* TikTok UI Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent pt-20 text-white">
                  <div className="flex items-end justify-between mb-4">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-gray-200 overflow-hidden">
                           <img src="https://i.pravatar.cc/100?img=9" className="w-full h-full object-cover" />
                        </div>
                        <span className="font-bold text-sm">@tudungviral.my</span>
                      </div>
                      <p className="text-sm line-clamp-2">Promo Merdeka Sale! 🔥 50% Off semua item...</p>
                      <div className="flex items-center gap-2 text-xs opacity-80">
                         <Music2 size={12} />
                         <span>Original Sound - Tudung Viral</span>
                      </div>
                    </div>
                    
                    {/* Side Actions */}
                    <div className="flex flex-col gap-4 items-center">
                       <div className="flex flex-col items-center gap-1">
                          <div className="w-10 h-10 rounded-full bg-gray-800/50 flex items-center justify-center backdrop-blur-sm">
                             <Heart size={20} fill="white" className="text-red-500" />
                          </div>
                          <span className="text-xs font-bold">12.5K</span>
                       </div>
                       <div className="flex flex-col items-center gap-1">
                          <div className="w-10 h-10 rounded-full bg-gray-800/50 flex items-center justify-center backdrop-blur-sm">
                             <MessageCircle size={20} fill="white" />
                          </div>
                          <span className="text-xs font-bold">482</span>
                       </div>
                       <div className="flex flex-col items-center gap-1">
                          <div className="w-10 h-10 rounded-full bg-gray-800/50 flex items-center justify-center backdrop-blur-sm">
                             <Share2 size={20} fill="white" />
                          </div>
                          <span className="text-xs font-bold">2.1K</span>
                       </div>
                    </div>
                  </div>
                  
                  {/* Shop Now Button */}
                  <button className="w-full bg-[#FE2C55] text-white font-bold py-3 rounded-lg flex items-center justify-center gap-2 animate-pulse">
                    <ShoppingBag size={18} />
                    Shop Now
                  </button>
                </div>
              </div>
            </div>

            {/* Chat Float Card - Positioned absolutely relative to the phone container */}
            <div className="absolute top-[20%] left-[-20px] md:left-[-80px] w-64 md:w-72 bg-white rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] p-4 z-30 animate-in fade-in slide-in-from-bottom-10 duration-1000 border border-gray-100">
               <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-brand-green">
                     <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" x2="12" y1="19" y2="22"/></svg>
                  </div>
                  <div>
                     <h3 className="font-bold text-gray-900 text-sm">Sales Bot</h3>
                     <p className="text-xs text-brand-green flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-green"></span>
                        Online
                     </p>
                  </div>
                  <span className="ml-auto text-xs text-gray-400">Now</span>
               </div>

               <div className="space-y-3">
                  <div className="bg-gray-100 rounded-2xl rounded-tl-none p-3 text-sm text-gray-700">
                     Hi! Saya berminat dengan promo Merdeka ni. Ada stock lagi?
                  </div>
                  <div className="bg-green-50 border border-green-100 rounded-2xl rounded-bl-none p-3 relative">
                     <span className="absolute -top-2 left-0 text-[10px] font-bold text-brand-green bg-white px-1 rounded border border-green-100">Auto-Reply</span>
                     <p className="text-sm text-gray-800">
                        Hai! Yes stock masih ada untuk kod #M12. Nak grab sekarang sebelum habis? 🚀
                     </p>
                  </div>
               </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;