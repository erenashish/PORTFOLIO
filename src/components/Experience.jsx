import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

const Experience = () => {
  return (
    <section id="experience" className="py-24 px-6 md:px-12 lg:px-20 bg-white text-slate-900 relative">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-orange-600 font-bold uppercase tracking-widest text-sm mb-2 block">Career Timeline</span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900">Work Experience</h2>
        </div>

        <div className="space-y-8">
          {portfolioData.experience.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              viewport={{ once: true }}
              className="bg-orange-50/80 p-8 rounded-3xl border border-orange-200/80 shadow-lg shadow-orange-500/5 relative flex flex-col md:flex-row justify-between gap-4"
            >
              <div>
                <span className="px-3 py-1 rounded-full bg-orange-600 text-white text-xs font-bold uppercase tracking-wider inline-block mb-3 shadow-sm">
                  {exp.period}
                </span>
                <h3 className="text-2xl font-extrabold text-slate-900">{exp.role}</h3>
                <p className="text-orange-600 font-bold text-sm mb-4">{exp.company}</p>
                <p className="text-slate-700 text-base leading-relaxed font-medium">{exp.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
