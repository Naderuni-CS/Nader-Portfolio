import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ExternalLink, Target } from 'lucide-react';
import { siteConfig } from '@/config';

export default function BlogSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Filter out email from socials for this specific platforms section
  const platforms = siteConfig.socials.filter(link => link.label !== 'Email');

  return (
    <section className="min-h-screen py-20 flex items-center justify-center relative overflow-hidden" ref={ref}>
      <div className="container mx-auto px-6 lg:px-20 relative z-10">
        <div className="lg:ml-20 max-w-4xl">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="text-center lg:text-left mb-16"
          >
            <span className="text-green-500 font-mono text-sm tracking-widest uppercase">Presence</span>
            <h2 className="text-3xl md:text-5xl font-bold text-white mt-4 mb-6">
              Hacker Platforms
            </h2>
            <p className="text-gray-400 text-lg">
              Check out my profiles across various platforms to see my challenges, repositories, and professional experience.
            </p>
          </motion.div>

          {/* Platforms Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {platforms.map((platform, index) => {
              const Icon = platform.icon;
              return (
                <motion.a
                  key={platform.label}
                  href={platform.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="block p-8 border border-white/10 rounded-2xl bg-white/5 backdrop-blur-sm group hover:border-green-500/50 hover:bg-green-500/5 transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 bg-gradient-to-br from-gray-800 to-black rounded-xl flex items-center justify-center border border-white/10 group-hover:border-green-500/50 transition-colors">
                        <Icon size={28} className="text-gray-300 group-hover:text-green-500 transition-colors" />
                      </div>
                      <h3 className="text-xl font-bold text-white group-hover:text-green-400 transition-colors">{platform.label}</h3>
                    </div>
                    <ExternalLink className="text-gray-600 group-hover:text-green-500 transition-colors" size={24} />
                  </div>
                  <div className="text-gray-400 text-sm font-mono opacity-60">
                    {platform.href.replace('https://', '').replace('www.', '').substring(0, 30)}...
                  </div>
                </motion.a>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
