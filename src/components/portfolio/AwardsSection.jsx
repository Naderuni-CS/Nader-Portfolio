import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Shield, Award } from 'lucide-react';

const awards = [
  { title: "1 Million Prompt", image: "/cert/1millionprompt.png" },
  { title: "Advent of Cyber", image: "/cert/adventofcyber.png" },
  { title: "BUE Certificate", image: "/cert/cert10.jpg" },
  { title: "Cisco", image: "/cert/cisco.png" },
  { title: "CRTOM", image: "/cert/crtom.png" },
  { title: "Cyber Security 101", image: "/cert/cyber security 101.png" },
  { title: "Jr Penetration Tester", image: "/cert/jr penetrartion tester.png" },
  { title: "Misk", image: "/cert/misk.png" },
  { title: "Pre Security", image: "/cert/presecurity.png" },
  { title: "Sprints", image: "/cert/sprints.png" },
];

export default function AwardsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="awards" className="min-h-screen py-20 lg:py-32 relative" ref={ref}>
      {/* Animated Stars Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-green-500 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.2, 1, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 lg:px-20 relative z-10">
        <div className="lg:ml-20">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="mb-16 text-center lg:text-left"
          >
            <span className="text-green-500 font-mono text-sm tracking-widest uppercase">Recognition</span>
            <h2 className="text-3xl md:text-5xl font-bold text-white mt-4">
              Awards & Certificates
            </h2>
          </motion.div>

          {/* Awards Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {awards.map((award, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.1 + (index * 0.05) }}
                className="group relative flex flex-col items-center"
              >
                <div className="w-full aspect-[4/3] rounded-xl overflow-hidden border border-white/10 group-hover:border-green-500/50 transition-all duration-300 shadow-[0_0_15px_rgba(0,0,0,0.5)] bg-black/40 backdrop-blur-sm cursor-pointer">
                  <img 
                    src={award.image} 
                    alt={award.title} 
                    className="w-full h-full object-cover group-hover:scale-110 opacity-80 group-hover:opacity-100 transition-all duration-500"
                  />
                </div>
                <div className="mt-3 text-center w-full">
                  <h3 className="text-gray-300 font-mono text-sm tracking-wide md:text-xs truncate px-2 group-hover:text-green-400 transition-colors uppercase">
                    {award.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Statistics */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6 }}
            className="mt-16 grid md:grid-cols-2 gap-6 max-w-4xl mx-auto"
          >
            <div className="p-6 border border-white/10 rounded-xl bg-white/5 text-center flex flex-col items-center justify-center shadow-lg backdrop-blur-sm">
              <Award className="w-10 h-10 text-green-500 mb-3 drop-shadow-[0_0_10px_rgba(34,197,94,0.6)]" />
              <div className="text-4xl font-bold text-white mb-2">{awards.length}</div>
              <div className="text-gray-400 font-mono tracking-widest uppercase text-xs">Earned Certificates</div>
            </div>
            <div className="p-6 border border-white/10 rounded-xl bg-white/5 text-center flex flex-col items-center justify-center shadow-lg backdrop-blur-sm">
              <Shield className="w-10 h-10 text-green-500 mb-3 drop-shadow-[0_0_10px_rgba(34,197,94,0.6)]" />
              <div className="text-2xl font-bold text-white mb-2 drop-shadow-md tracking-wide">Recovering Compromised</div>
              <div className="text-green-400 font-mono tracking-widest uppercase text-xs">& Hacked Accounts</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}