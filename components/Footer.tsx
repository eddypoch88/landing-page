import React from 'react';
import { Zap } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white pt-16 pb-8 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
               <div className="w-6 h-6 bg-brand-green rounded flex items-center justify-center text-white">
                  <Zap size={14} fill="currentColor" />
               </div>
               <span className="font-bold text-lg text-gray-900">AutoLeads.my</span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs mb-6">
               The #1 WhatsApp automation tool for Malaysian TikTok advertisers. Made with ❤️ in Kuala Lumpur.
            </p>
            <div className="flex gap-2">
               {[1, 2, 3].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"></div>
               ))}
            </div>
          </div>

          {/* Links Columns */}
          <div>
             <h4 className="font-bold text-gray-900 mb-4">Product</h4>
             <ul className="space-y-3 text-sm text-gray-500">
                <li><a href="#" className="hover:text-brand-green">Features</a></li>
                <li><a href="#" className="hover:text-brand-green">Pricing</a></li>
                <li><a href="#" className="hover:text-brand-green">Integrations</a></li>
                <li><a href="#" className="hover:text-brand-green">Updates</a></li>
             </ul>
          </div>

          <div>
             <h4 className="font-bold text-gray-900 mb-4">Company</h4>
             <ul className="space-y-3 text-sm text-gray-500">
                <li><a href="#" className="hover:text-brand-green">About Us</a></li>
                <li><a href="#" className="hover:text-brand-green">Careers</a></li>
                <li><a href="#" className="hover:text-brand-green">Blog</a></li>
                <li><a href="#" className="hover:text-brand-green">Contact</a></li>
             </ul>
          </div>

          <div>
             <h4 className="font-bold text-gray-900 mb-4">Legal</h4>
             <ul className="space-y-3 text-sm text-gray-500">
                <li><a href="#" className="hover:text-brand-green">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-brand-green">Terms of Service</a></li>
             </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4">
           <p className="text-xs text-gray-400">
              © 2024 AutoLeads Sdn Bhd. All rights reserved.
           </p>
           <div className="flex items-center gap-2 text-xs text-gray-500">
              <span>Made for Malaysians 🇲🇾</span>
           </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;