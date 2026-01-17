import React from 'react';
import { motion } from 'framer-motion';
import { Users, Briefcase, Bell } from 'lucide-react';

// Dummy avatar component
const AvatarStack: React.FC = () => (
  <div className="flex -space-x-3 rtl:space-x-reverse">
    <img className="w-10 h-10 border-2 border-gray-800 rounded-full" src="https://i.pravatar.cc/100?img=1" alt="User 1" />
    <img className="w-10 h-10 border-2 border-gray-800 rounded-full" src="https://i.pravatar.cc/100?img=2" alt="User 2" />
    <div className="flex items-center justify-center w-10 h-10 text-xs font-medium text-white bg-gray-700 border-2 border-gray-800 rounded-full">+500</div>
  </div>
);

const SocialProof: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section className="py-16 md:py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-400">
            Dipercayai oleh ratusan SME di Malaysia
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg leading-8 text-gray-400">
            AutoLeads membantu bisnes membalas WhatsApp lebih pantas dan konsisten, memastikan tiada lagi pelanggan yang terlepas.
          </p>
        </motion.div>

        {/* Bento-style Grid */}
        <motion.div
          className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Card 1: Main Trust Metric */}
          <motion.div
            variants={itemVariants}
            className="md:col-span-2 lg:col-span-2 flex flex-col justify-between p-6 bg-white/5 rounded-2xl border border-white/10 shadow-lg"
          >
            <div>
              <Briefcase className="w-8 h-8 text-green-400" />
              <h3 className="mt-4 text-xl font-semibold text-white">Direka untuk Peniaga & SME</h3>
              <p className="mt-2 text-gray-400">Sesuai untuk seller TikTok, ejen insurans, pemilik produk, dan sesiapa sahaja yang menggunakan WhatsApp untuk jualan.</p>
            </div>
            <div className="mt-6">
              <AvatarStack />
            </div>
          </motion.div>

          {/* Card 2: FOMO Element */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col justify-center items-center text-center p-6 bg-white/5 rounded-2xl border border-white/10 shadow-lg"
          >
            <div className="relative">
                <Bell className="w-10 h-10 text-green-400" />
                <span className="absolute -top-1 -right-1 flex h-4 w-4">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-4 w-4 bg-green-500"></span>
                </span>
            </div>
            <p className="mt-4 font-medium text-white">3 bisnes baru aktifkan AutoLeads hari ini</p>
            <p className="text-sm text-gray-500">(Data simulasi)</p>
          </motion.div>

          {/* Card 3 & 4: Small Trust Indicators */}
          <motion.div variants={itemVariants} className="p-6 bg-white/5 rounded-2xl border border-white/10 shadow-lg">
            <p className="text-4xl font-bold text-green-400">24/7</p>
            <p className="mt-2 font-semibold text-white">Respons Automatik</p>
            <p className="text-sm text-gray-400">Balas prospek serta-merta walaupun anda sedang tidur.</p>
          </motion.div>
          
          <motion.div variants={itemVariants} className="p-6 bg-white/5 rounded-2xl border border-white/10 shadow-lg">
            <p className="text-4xl font-bold text-green-400">100%</p>
            <p className="mt-2 font-semibold text-white">Fokus Jualan</p>
            <p className="text-sm text-gray-400">Luangkan lebih masa untuk close sales, bukan menaip perkara sama.</p>
          </motion.div>

          <motion.div variants={itemVariants} className="p-6 bg-white/5 rounded-2xl border border-white/10 shadow-lg">
            <p className="text-2xl font-bold text-white">Tiada Kad Kredit</p>
            <p className="mt-2 font-semibold text-white">Diperlukan untuk Mencuba</p>
            <p className="text-sm text-gray-400">Alami sendiri manfaat AutoLeads tanpa sebarang komitmen.</p>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default SocialProof;
