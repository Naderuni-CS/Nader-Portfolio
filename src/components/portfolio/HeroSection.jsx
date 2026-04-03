import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { siteConfig } from '@/config';

export default function HeroSection() {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  const nameLetters = siteConfig.name.split('');

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 pb-10"
    >
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-white/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-gray-500/10 rounded-full blur-[100px] animate-pulse delay-1000" />
      </div>

      {/* Geometric Ring */}
      <motion.div
        animate={{ rotate: 360, scale: [1, 1.05, 1] }}
        transition={{ rotate: { duration: 25, repeat: Infinity, ease: 'linear' }, scale: { duration: 5, repeat: Infinity, ease: 'easeInOut' } }}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white/5 rounded-full hidden md:block z-0 pointer-events-none"
      />

      <div className="container mx-auto px-4 relative z-10 flex justify-center">
        {/* Glassmorphism Profile Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full max-w-2xl bg-black/15 backdrop-blur-3xl border border-green-500/10 rounded-3xl p-8 md:p-12 mb-16 md:mb-0 shadow-[0_0_50px_rgba(34,197,94,0.05)] flex flex-col items-center text-center relative overflow-hidden group"
        >
          {/* Subtle top glare effect for glass */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-green-500/20 to-transparent" />

          {/* Terminal Hacker Prompt */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="w-full text-left bg-black/80 p-4 rounded-xl border border-green-500/30 mb-8 font-mono text-xs md:text-sm relative overflow-hidden shadow-[0_0_20px_rgba(34,197,94,0.1)]"
          >
            <div className="flex gap-2 mb-3 border-b border-green-500/20 pb-3">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-green-500/80" />
            </div>
            
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ delay: 1, duration: 1.5, ease: "linear" }}
              className="overflow-hidden whitespace-nowrap text-green-500 font-bold drop-shadow-[0_0_8px_rgba(34,197,94,0.6)]"
            >
              root@kali:~# whoami
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.8 }}
              className="text-white mt-2 pl-4"
            >
              {siteConfig.name}
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 3.5, repeat: Infinity, duration: 1 }}
              className="w-2 h-4 bg-green-500 inline-block ml-2 align-middle mt-2"
            />
          </motion.div>

          {/* Glowing Avatar */}
          <motion.div
            initial={{ opacity: 0, y: 70, scale: 0.5 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 4.8, type: "spring", stiffness: 150 }}
            className="w-40 h-40 rounded-full border border-green-500/30 p-[2px] mb-6 relative cursor-pointer shadow-[0_0_30px_rgba(34,197,94,0.2)] group-hover:shadow-[0_0_50px_rgba(34,197,94,0.4)] transition-shadow duration-500"
          >
            <img
              src={siteConfig.avatarUrl}
              alt={siteConfig.name}
              className="w-full h-full rounded-full object-cover relative z-10 bg-zinc-900 shadow-inner"
            />
          </motion.div>

          {/* Main Title / Bio */}
          <div className="overflow-hidden mb-2">
            <motion.h1
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 5.2, duration: 0.6 }}
              className="text-3xl md:text-5xl font-extrabold text-white tracking-wider font-sans drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]"
            >
              {siteConfig.name}
            </motion.h1>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 5.6, duration: 0.6 }}
            className="text-green-500/80 font-mono text-lg md:text-xl max-w-md mb-8 italic"
          >
            {siteConfig.bio}
          </motion.p>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 6.2, duration: 0.5 }}
            className="flex flex-wrap justify-center gap-3 md:gap-4"
          >
            {siteConfig.socials.map((link) => {
              const Icon = link.icon;
              return (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={link.label}
                  whileHover={{ scale: 1.15, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-white/5 border border-green-500/20 flex items-center justify-center text-gray-400 hover:text-green-500 hover:border-green-500/50 hover:bg-green-500/10 hover:shadow-[0_0_20px_rgba(34,197,94,0.2)] transition-all duration-300 backdrop-blur-sm"
                >
                  <Icon size={22} />
                </motion.a>
              );
            })}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.button
        onClick={scrollToAbout}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{
          opacity: { delay: 2.5, duration: 0.5 },
          y: { delay: 2.5, duration: 1.5, repeat: Infinity },
        }}
        className="absolute bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 text-white/40 hover:text-white transition-colors cursor-pointer z-10"
      >
        <ChevronDown size={32} />
      </motion.button>
    </section>
  );
}
