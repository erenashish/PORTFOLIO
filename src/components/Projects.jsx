import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const Projects = () => {
  return (
    <section id="work" className="py-24 px-6 md:px-12 lg:px-20 bg-[#fafafa] text-slate-900 relative">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
          <div>
            <span className="text-orange-600 font-bold uppercase tracking-widest text-sm mb-2 block">Portfolio</span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900">Featured Projects</h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {portfolioData.projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              viewport={{ once: true }}
              className="group bg-white rounded-3xl overflow-hidden border border-orange-100 shadow-xl shadow-orange-500/5 hover:shadow-2xl hover:shadow-orange-500/15 hover:border-orange-300 transition-all"
            >
              <div className="h-64 overflow-hidden relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-orange-600 text-white backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-bold shadow-md">
                  {project.category}
                </div>
              </div>
              <div className="p-8 flex justify-between items-center">
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 group-hover:text-orange-600 transition-colors">{project.title}</h3>
                </div>
                <a
                  href={project.link}
                  className="p-4 rounded-2xl bg-orange-500 hover:bg-orange-600 text-white shadow-lg shadow-orange-500/30 transition-all hover:-translate-y-1"
                >
                  <ArrowUpRight size={22} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
