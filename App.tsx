import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Logos from './components/Logos';
import ProblemSection from './components/ProblemSection';
import SolutionSection from './components/SolutionSection';
import CTASection from './components/CTASection';
import Footer from './components/Footer';
import { motion } from 'framer-motion';
import { Users, Briefcase, Bell } from 'lucide-react';

// Social Proof Section Component (defined in-file)
const SocialProof: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: 'easeOut' },
    },
  };

  return (
    <section className="py-16 md:py-24 bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-400">
            Dipercayai oleh SME Malaysia
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg leading-8 text-gray-400">
            AutoLeads membantu bisnes membalas WhatsApp lebih pantas dan konsisten.
          </p>
        </motion.div>

        <motion.div
          className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Trust Indicator: Used by sellers */}
          <motion.div variants={itemVariants} className="p-6 bg-white/5 rounded-2xl border border-white/10">
            <Users className="w-8 h-8 text-green-400" />
            <p className="mt-4 font-semibold text-white">Digunakan oleh seller TikTok & admin WhatsApp</p>
          </motion.div>

          {/* Trust Indicator: 500+ SMEs */}
          <motion.div variants={itemVariants} className="p-6 bg-white/5 rounded-2xl border border-white/10">
            <Briefcase className="w-8 h-8 text-green-400" />
            <p className="mt-4 font-semibold text-white">Dipercayai oleh 500+ SME</p>
          </motion.div>

          {/* FOMO Element */}
          <motion.div variants={itemVariants} className="p-6 bg-green-500/10 rounded-2xl border border-green-500/20">
             <div className="flex items-center gap-3">
                <Bell className="w-6 h-6 text-green-400 flex-shrink-0" />
                <p className="font-medium text-green-300">3 bisnes baru aktifkan AutoLeads hari ini</p>
             </div>
          </motion.div>

          {/* Trust Indicator: 24/7 Response */}
          <motion.div variants={itemVariants} className="p-6 bg-white/5 rounded-2xl border border-white/10">
            <p className="text-4xl font-bold text-green-400">24/7</p>
            <p className="mt-2 font-semibold text-white">Respons Automatik</p>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900 overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <SocialProof />
        {/* GRADIENT BRIDGE ADDED HERE */}
        <div className="w-full h-32 bg-gradient-to-b from-black to-white pointer-events-none" aria-hidden="true" />
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
