import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

const Skills = () => {
  return (
    <section id="skills" className="py-24 px-6 md:px-12 lg:px-20 bg-white text-slate-900 relative">
      <div className="max-w-6xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <span className="text-orange-600 font-bold uppercase tracking-widest text-sm mb-2 block">Technical Proficiency</span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-12">Skills & Technologies</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          {portfolioData.skills.map((skillGroup, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-orange-500 to-amber-600 text-white p-8 rounded-3xl shadow-xl shadow-orange-500/15"
            >
              <h3 className="text-2xl font-bold text-white mb-6 border-b border-white/20 pb-3">{skillGroup.category}</h3>
              <div className="flex flex-wrap gap-3">
                {skillGroup.items.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="px-4 py-2 rounded-xl bg-white/15 backdrop-blur-md text-white text-sm font-semibold border border-white/20 hover:bg-white hover:text-orange-600 transition-all hover:-translate-y-1 shadow-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
