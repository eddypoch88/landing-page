import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Logos from './components/Logos';
import ProblemSection from './components/ProblemSection';
import SolutionSection from './components/SolutionSection';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900 overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Logos />
        <ProblemSection />
        <SolutionSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default App;