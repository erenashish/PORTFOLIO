import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

const About = () => {
  return (
    <section id="about" className="py-24 px-6 md:px-12 lg:px-20 bg-[#fafafa] text-slate-900 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row gap-12 items-center"
        >
          {/* Avatar / Profile Box with rounded orange container */}
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="relative group w-72 h-72 md:w-96 md:h-96 rounded-3xl overflow-hidden p-3 bg-gradient-to-br from-orange-500 to-amber-600 shadow-2xl shadow-orange-500/20">
              <img 
                src="/images/avatar.png" 
                alt="Aashish Singh" 
                className="w-full h-full object-cover rounded-2xl group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-orange-950/40 via-transparent to-transparent"></div>
            </div>
          </div>

          {/* Text Content */}
          <div className="w-full md:w-1/2 flex flex-col items-start text-left">
            <span className="text-orange-600 font-bold uppercase tracking-widest text-sm mb-2">About Me</span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
              Passionate Developer & UI Specialist
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-8">
              {portfolioData.about.bio}
            </p>

            <div className="grid grid-cols-2 gap-4 w-full">
              {portfolioData.about.highlights.map((item, index) => (
                <div key={index} className="flex items-center gap-3 bg-orange-50 p-4 rounded-2xl border border-orange-200/60 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-3 h-3 rounded-full bg-orange-500"></div>
                  <span className="text-slate-800 font-semibold text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
