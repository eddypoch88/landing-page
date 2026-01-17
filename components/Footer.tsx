import React from 'react';
import { Zap } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-50 pt-16 pb-8 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
               <div className="w-6 h-6 bg-green-500 rounded flex items-center justify-center text-white">
                  <Zap size={14} fill="currentColor" />
               </div>
               <span className="font-bold text-lg text-slate-800">AutoLeads.my</span>
            </div>
            <p className="text-slate-600 text-sm leading-relaxed max-w-xs mb-6">
               The #1 WhatsApp automation tool for Malaysian TikTok advertisers. Made with ❤️ in Kuala Lumpur.
            </p>
            <div className="flex gap-2">
               {[1, 2, 3].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full bg-slate-200 hover:bg-slate-300 transition-colors"></div>
               ))}
            </div>
          </div>

          {/* Links Columns */}
          <div>
             <h4 className="font-bold text-slate-800 mb-4">Product</h4>
             <ul className="space-y-3 text-sm text-slate-600">
                <li><a href="#" className="hover:text-green-500">Features</a></li>
                <li><a href="#" className="hover:text-green-500">Pricing</a></li>
                <li><a href="#" className="hover:text-green-500">Integrations</a></li>
                <li><a href="#" className="hover:text-green-500">Updates</a></li>
             </ul>
          </div>

          <div>
             <h4 className="font-bold text-slate-800 mb-4">Company</h4>
             <ul className="space-y-3 text-sm text-slate-600">
                <li><a href="#" className="hover:text-green-500">About Us</a></li>
                <li><a href="#" className="hover:text-green-500">Careers</a></li>
                <li><a href="#" className="hover:text-green-500">Blog</a></li>
                <li><a href="#" className="hover:text-green-500">Contact</a></li>
             </ul>
          </div>

          <div>
             <h4 className="font-bold text-slate-800 mb-4">Legal</h4>
             <ul className="space-y-3 text-sm text-slate-600">
                <li><a href="#" className="hover:text-green-500">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-green-500">Terms of Service</a></li>
             </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4">
           <p className="text-xs text-slate-400">
              © 2024 AutoLeads Sdn Bhd. All rights reserved.
           </p>
           <div className="flex items-center gap-2 text-xs text-slate-500">
              <span>Made for Malaysians 🇲🇾</span>
           </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;