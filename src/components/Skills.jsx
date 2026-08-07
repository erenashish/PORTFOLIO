import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { portfolioData } from '../data/portfolioData';

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Header Animation
      gsap.from(".skills-header", {
        scrollTrigger: {
          trigger: ".skills-header",
          start: "top 80%",
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out"
      });

      // Cards Animation
      gsap.from(".skill-card", {
        scrollTrigger: {
          trigger: ".skills-grid",
          start: "top 75%",
        },
        y: 60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out"
      });
      
      // Badges Animation inside cards
      gsap.from(".skill-badge", {
        scrollTrigger: {
          trigger: ".skills-grid",
          start: "top 60%",
        },
        scale: 0.8,
        opacity: 0,
        duration: 0.4,
        stagger: 0.05,
        ease: "back.out(2)"
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="skills" ref={sectionRef} className="py-32 px-6 md:px-12 lg:px-20 bg-white text-black relative">
      <div className="max-w-6xl mx-auto text-center">
        
        <div className="mb-16">
          <span className="skills-header text-orange-600 font-extrabold uppercase tracking-[0.2em] text-xs mb-4 block">
            Technical Proficiency
          </span>
          <h2 className="skills-header text-4xl md:text-5xl lg:text-7xl font-black text-black tracking-tighter">
            Skills & <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-800 to-black">Technologies</span>
          </h2>
        </div>

        <div className="skills-grid grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          {portfolioData.skills.map((skillGroup, idx) => (
            <div
              key={idx}
              className="skill-card bg-black p-10 md:p-12 rounded-[2.5rem] shadow-2xl relative overflow-hidden group border border-slate-900"
            >
              {/* Subtle orange glow on hover */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2 group-hover:bg-orange-500/20 transition-colors duration-700 pointer-events-none"></div>
              
              <h3 className="text-2xl font-black text-white mb-8 flex items-center gap-4">
                <span className="w-8 h-1 bg-orange-500 block"></span>
                {skillGroup.category}
              </h3>
              
              <div className="flex flex-wrap gap-3 relative z-10">
                {skillGroup.items.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="skill-badge px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-white text-sm font-bold tracking-wide hover:bg-orange-500 hover:border-orange-500 hover:text-black transition-all cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
