import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, PlayCircle } from 'lucide-react';

const Hero: React.FC = () => {
  // Framer Motion variants for staggered animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        ease: 'easeOut',
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section className="relative w-full min-h-[100svh] flex items-center justify-center bg-gray-900 text-white overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-900 to-black"></div>
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>

      <div className="relative max-w-7xl w-full mx-auto px-6 lg:px-8 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Left: Text Content */}
          <motion.div
            className="flex flex-col items-center lg:items-start text-center lg:text-left"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Problem */}
            <motion.h1
              variants={itemVariants}
              className="font-extrabold tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-400 leading-tight text-[clamp(2.5rem,6vw,4.5rem)]"
            >
              Iklan jalan, tapi customer <span className="text-green-400">senyap?</span>
            </motion.h1>

            {/* Agitation & Solution */}
            <motion.p
              variants={itemVariants}
              className="mt-6 max-w-xl text-[clamp(1rem,2.5vw,1.125rem)] leading-relaxed text-gray-300"
            >
              Jangan biarkan sales terlepas hanya kerana lambat balas WhatsApp. AutoLeads membalas setiap prospek WhatsApp 24/7, walaupun anda sedang tidur atau sibuk.
            </motion.p>
            
            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 w-full sm:w-auto"
            >
              {/* Primary CTA */}
              <motion.a
                href="#pricing"
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-green-500 text-white font-bold py-3 px-6 rounded-lg transition-all shadow-[0_4px_14px_0_rgb(0,0,0,0.1)] hover:shadow-[0_6px_20px_0_rgb(0,0,0,0.2)]"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Cuba Percuma
                <ArrowRight size={18} />
              </motion.a>
              
              {/* Secondary CTA */}
              <motion.a
                href="#how-it-works"
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white/10 text-gray-200 font-medium py-3 px-6 rounded-lg border border-white/20 backdrop-blur-md transition-colors hover:bg-white/20"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <PlayCircle size={18} />
                Lihat Cara Ia Berfungsi
              </motion.a>
            </motion.div>
          </motion.div>
          
          {/* Right: Visual Placeholder */}
          <div className="relative h-[400px] lg:h-[600px] flex items-center justify-center">
            {/* 
              VISUAL HERO:
              Letakkan komponen Phone Mockup atau Lottie animation di sini.
              Contoh: <PhoneMockup />
              Lazy-load komponen ini untuk prestasi yang lebih baik.
            */}
            <div className="w-full h-full bg-white/5 rounded-2xl border border-white/10 flex items-center justify-center">
              <p className="text-gray-400">Visual Hero (e.g., Phone Mockup / Animation)</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
