import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Briefcase, Calendar, Award, GraduationCap, ChevronDown } from 'lucide-react';

const experiences = [
  {
    type: 'contract',
    title: 'Junior Penetration Tester (Internship)',
    company: 'ITGate',
    date: 'Present (Enrolled for 1 Year)',
    location: '',
    description: [
      'Currently enrolled in a comprehensive 1-year internship as a Junior Penetration Tester.',
      'Performing continuous vulnerability assessments, network security analysis, and web exploitation tasks.',
      'Building hands-on proficiency in real-world offensive security.'
    ],
  }
];

const education = {
  degree: 'Bachelor of Computer Science',
  institution: 'Modern Academy',
  date: '2024 - 2028 (Expected)',
  location: 'Egypt',
  achievements: [],
};


export default function ExperienceSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const scrollToSkills = () => {
    document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' });
  };

  const experienceTypeStyles = {
    volunteer: {
      border: 'border-yellow-500',
      ping: 'bg-yellow-500',
      badge: 'bg-yellow-500/20 text-yellow-500',
      label: 'Volunteer',
    },
    contract: {
      border: 'border-white',
      ping: 'bg-white',
      badge: 'bg-white/20 text-white',
      label: 'Contract',
    },
    seasonal: {
      border: 'border-white',
      ping: 'bg-white',
      badge: 'bg-white/20 text-white',
      label: 'Seasonal',
    },
  };
  return (
    <section id="experience" className="min-h-screen py-20 lg:py-32 relative flex flex-col items-center justify-center" ref={ref}>
      <div className="container mx-auto px-4 md:px-8 flex justify-center">
        <div className="max-w-4xl w-full flex flex-col items-center">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="mb-16 text-center flex flex-col items-center"
          >
            <span className="text-gray-400 text-sm tracking-widest uppercase mb-2 inline-block">Journey</span>
            <h2 className="text-3xl md:text-5xl font-bold text-white mt-2">
              Professional Experience
            </h2>
          </motion.div>

          {/* Education Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="mb-16"
          >
            <div className="p-8 border-2 border-white/20 rounded-xl bg-gradient-to-r from-white/10 to-transparent shadow-[0_0_30px_rgba(255,255,255,0.05)]">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0 border border-white/5 shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                  <GraduationCap className="text-white" size={28} />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-1">{education.degree}</h3>
                  <p className="text-white opacity-80 font-medium mb-2">{education.institution}</p>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-4">
                    <span className="flex items-center gap-1">
                      <Calendar size={14} />
                      {education.date}
                    </span>
                    <span>📍 {education.location}</span>
                  </div>
                  {education.achievements.map((achievement, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm">
                      <Award className="text-white" size={16} />
                      <span className="text-gray-300">{achievement}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Timeline */}
          <div className="relative mb-16 w-full text-left">
            <motion.div
              initial={{ height: 0 }}
              animate={isInView ? { height: '100%' } : {}}
              transition={{ duration: 1.5, delay: 0.4 }}
              className="absolute left-2 md:left-8 top-0 w-px bg-gradient-to-b from-white via-white/50 to-transparent shadow-[0_0_10px_rgba(255,255,255,0.2)]"
            />

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.5 + index * 0.2 }}
                  className="relative pl-10 md:pl-20"
                >
                  {/* Timeline Dot */}
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ delay: 0.6 + index * 0.2 }}
                    className={`absolute left-2 md:left-8 top-0 w-4 h-4 -translate-x-1/2 
                      bg-[#0a0a0a] border-2 rounded-full
                      ${experienceTypeStyles[exp.type]?.border || 'border-white'}
                    `}
                  >
                    <div
                      className={`absolute inset-0 rounded-full animate-ping opacity-20
                        ${experienceTypeStyles[exp.type]?.ping || 'bg-white'}
                      `}
                    />
                  </motion.div>

                  <motion.div
                    whileHover={{ x: 10, borderColor: 'rgba(0, 212, 170, 0.5)' }}
                    className="p-5 md:p-6 border border-white/10 rounded-lg bg-white/5 backdrop-blur-sm shadow-xl"
                  >
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                          {experienceTypeStyles[exp.type] && (
                            <span
                              className={`text-xs px-2 py-1 rounded-full
                                ${experienceTypeStyles[exp.type].badge}
                              `}
                            >
                              {experienceTypeStyles[exp.type].label}
                            </span>
                          )}
                        </div>
                        <p className="text-white opacity-80 font-medium">{exp.company}</p>
                      </div>
                      <div className="text-right text-sm">
                        <div className="flex items-center gap-2 text-gray-500 mb-1">
                          <Calendar size={14} />
                          {exp.date}
                        </div>
                        <div className="text-gray-500">📍 {exp.location}</div>
                      </div>
                    </div>
                    <ul className="space-y-2">
                      {exp.description.map((item, i) => (
                        <li key={i} className="text-gray-400 text-sm flex items-start gap-2">
                          <span className="text-white mt-1.5 opacity-60">▹</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.button
        onClick={scrollToSkills}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{
          opacity: { delay: 1, duration: 0.5 },
          y: { delay: 1, duration: 1.5, repeat: Infinity },
        }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/40 hover:text-white transition-colors cursor-pointer z-10"
      >
        <ChevronDown size={32} />
      </motion.button>
    </section>
  );
}
