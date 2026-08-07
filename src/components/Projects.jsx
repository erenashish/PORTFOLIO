import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Header Animation
      gsap.from(".projects-header", {
        scrollTrigger: {
          trigger: ".projects-header",
          start: "top 80%",
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out"
      });

      // Projects Animation
      gsap.from(".project-card", {
        scrollTrigger: {
          trigger: ".projects-grid",
          start: "top 70%",
        },
        y: 80,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out"
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="work" ref={sectionRef} className="py-32 px-6 md:px-12 lg:px-20 bg-black text-white relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16">
          <div>
            <span className="projects-header text-orange-600 font-extrabold uppercase tracking-[0.2em] text-xs mb-4 block">
              Portfolio
            </span>
            <h2 className="projects-header text-4xl md:text-5xl lg:text-7xl font-black text-white tracking-tighter">
              Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-600">Projects</span>
            </h2>
          </div>
        </div>

        <div className="projects-grid grid grid-cols-1 md:grid-cols-2 gap-10">
          {portfolioData.projects.map((project, idx) => (
            <div
              key={idx}
              className="project-card group bg-[#0a0a0a] rounded-[2.5rem] overflow-hidden border border-white/5 hover:border-orange-500/50 transition-colors duration-500"
            >
              <div className="h-72 md:h-80 overflow-hidden relative p-4">
                <div className="w-full h-full rounded-[2rem] overflow-hidden relative">
                  <div className="absolute inset-0 bg-orange-500/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
                  />
                </div>
                <div className="absolute top-8 right-8 bg-black/80 backdrop-blur-md px-5 py-2 rounded-full text-xs font-bold tracking-widest text-orange-500 border border-white/10 z-20">
                  {project.category}
                </div>
              </div>
              
              <div className="p-8 md:p-10 flex justify-between items-end">
                <div>
                  <h3 className="text-3xl font-black text-white mb-2 group-hover:text-orange-500 transition-colors">{project.title}</h3>
                  <a href={project.link} className="text-slate-400 text-sm font-bold tracking-wider hover:text-white transition-colors">
                    VIEW PROJECT
                  </a>
                </div>
                <a
                  href={project.link}
                  className="w-14 h-14 flex items-center justify-center rounded-full bg-white/5 hover:bg-orange-500 text-white hover:text-black border border-white/10 hover:border-orange-500 transition-all group-hover:-translate-y-2 group-hover:shadow-[0_10px_30px_rgba(249,115,22,0.3)]"
                >
                  <ArrowUpRight size={24} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
