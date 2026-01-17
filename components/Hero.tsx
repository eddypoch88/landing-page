import React from 'react';
import { motion } from "framer-motion";
import { MessageCircle, ShoppingBag, Heart, Share2, Music2 } from 'lucide-react';

// SVG Icon for WhatsApp, as it's more recognizable
const WhatsAppIcon: React.FC = () => (
    <svg
      viewBox="0 0 24 24"
      className="w-6 h-6"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16.75,13.96C17,14.26 17.06,14.81 16.71,15.36C16.37,15.91 15.3,16.5 14.82,16.56C14.34,16.62 13.5,16.83 12.22,16.22C10.73,15.5 9.5,14.15 9.35,13.96C9.2,13.78 8.44,12.75 8.44,11.81C8.44,10.87 9,10.32 9.15,10.14C9.3,9.96 9.56,9.81 9.81,9.81C10.06,9.81 10.26,9.81 10.43,9.81C10.6,9.81 10.73,9.66 10.91,10C11.08,10.35 11.41,11.21 11.47,11.33C11.53,11.46 11.59,11.64 11.5,11.81C11.41,12 11.35,12.06 11.17,12.24C11,12.42 10.85,12.51 10.73,12.63C10.61,12.75 10.47,12.91 10.64,13.18C10.82,13.46 11.27,14.11 11.88,14.64C12.65,15.33 13.2,15.53 13.45,15.62C13.7,15.72 13.91,15.66 14.05,15.53C14.2,15.39 14.53,14.97 14.71,14.71C14.88,14.46 15.14,14.43 15.39,14.53C15.64,14.62 16.5,15.06 16.75,13.96M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22C13.66,22 15.25,21.54 16.6,20.73L21,22L20.27,17.76C21.21,16.42 21.78,14.78 21.94,13.06C21.95,12.73 22,12.37 22,12A10,10 0 0,0 12,2Z"
      />
    </svg>
);

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
            
            <div className="flex justify-center lg:justify-start mb-10">
               <motion.a
                href="https://wa.me/60123456789?text=Hi!%20Saya%20berminat%20dengan%20servis%20AutoLeads."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#128C7E] text-white font-bold py-4 px-8 rounded-full shadow-xl shadow-green-200 text-lg transition-colors"
                animate={{
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
                whileTap={{ scale: 0.95 }}
              >
                <WhatsAppIcon />
                Cuba AutoLeads Sekarang
              </motion.a>
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

          {/* Right Visuals (Unchanged) */}
          <div className="relative mx-auto w-full max-w-[500px] lg:max-w-none h-[600px] flex items-center justify-center lg:justify-end perspective-1000">
            <div className="relative w-[300px] h-[600px] bg-gray-900 rounded-[40px] border-[8px] border-gray-900 shadow-2xl z-20 overflow-hidden transform rotate-[-2deg] hover:rotate-0 transition-transform duration-500">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-black rounded-b-2xl z-30"></div>
              <div className="relative w-full h-full bg-gray-800">
                 <img 
                  src="https://images.unsplash.com/photo-1542596768-5d1d21f1cfb6?q=80&w=800&auto=format&fit=crop" 
                  className="w-full h-full object-cover opacity-80" 
                  alt="TikTok Video Background"
                />
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
                  <button className="w-full bg-[#FE2C55] text-white font-bold py-3 rounded-lg flex items-center justify-center gap-2 animate-pulse">
                    <ShoppingBag size={18} />
                    Shop Now
                  </button>
                </div>
              </div>
            </div>
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