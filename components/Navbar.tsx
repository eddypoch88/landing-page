import React from 'react';
import { Menu, X, Zap } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer">
            <div className="w-8 h-8 bg-brand-green rounded-lg flex items-center justify-center text-white">
              <Zap size={20} fill="currentColor" />
            </div>
            <span className="font-bold text-xl tracking-tight text-gray-900">AutoLeads.my</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-600 hover:text-brand-green font-medium transition-colors">Features</a>
            <a href="#" className="text-gray-600 hover:text-brand-green font-medium transition-colors">Pricing</a>
            <a href="#" className="text-gray-600 hover:text-brand-green font-medium transition-colors">Testimonials</a>
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="#" className="text-gray-900 font-semibold hover:text-brand-green transition-colors">Login</a>
            <button className="bg-brand-green hover:bg-green-500 text-white font-bold py-2.5 px-6 rounded-full transition-all shadow-lg shadow-green-200 transform hover:-translate-y-0.5">
              Get Instant Access →
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-gray-900 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 absolute w-full shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-brand-green hover:bg-green-50">Features</a>
            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-brand-green hover:bg-green-50">Pricing</a>
            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-brand-green hover:bg-green-50">Testimonials</a>
            <div className="pt-4 pb-2 border-t border-gray-100 mt-2">
              <a href="#" className="block px-3 py-2 text-base font-semibold text-gray-900">Login</a>
              <button className="w-full mt-2 bg-brand-green text-white font-bold py-3 px-4 rounded-lg shadow-md">
                Get Instant Access
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;