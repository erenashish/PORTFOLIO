import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { portfolioData } from '../data/portfolioData';

gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Header Animation
      gsap.from(".exp-header", {
        scrollTrigger: {
          trigger: ".exp-header",
          start: "top 80%",
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out"
      });

      // Timeline nodes animation
      gsap.utils.toArray('.timeline-node').forEach((node, i) => {
        gsap.from(node, {
          scrollTrigger: {
            trigger: node,
            start: "top 85%",
          },
          x: i % 2 === 0 ? -50 : 50,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out"
        });
        
        // Dot pop animation
        gsap.from(node.querySelector('.timeline-dot'), {
          scrollTrigger: {
            trigger: node,
            start: "top 85%",
          },
          scale: 0,
          duration: 0.6,
          delay: 0.2,
          ease: "back.out(2)"
        });
      });
      
      // Vertical Line growth
      gsap.from(".timeline-line", {
        scrollTrigger: {
          trigger: ".timeline-container",
          start: "top 80%",
          end: "bottom 50%",
          scrub: 1
        },
        scaleY: 0,
        transformOrigin: "top center"
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="experience" ref={sectionRef} className="py-32 px-6 md:px-12 lg:px-20 bg-white text-black relative">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-24">
          <span className="exp-header text-orange-600 font-extrabold uppercase tracking-[0.2em] text-xs mb-4 block">
            Career Timeline
          </span>
          <h2 className="exp-header text-4xl md:text-5xl lg:text-7xl font-black text-black tracking-tighter">
            Work <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-800 to-black">Experience</span>
          </h2>
        </div>

        <div className="timeline-container relative space-y-12 before:absolute before:inset-0 before:ml-5 md:before:ml-[50%] before:-translate-x-px md:before:translate-x-0 before:h-full before:w-1 before:bg-slate-100">
          
          {/* Animated thick black line overlay */}
          <div className="timeline-line absolute inset-0 ml-5 md:ml-[50%] -translate-x-px md:translate-x-0 h-full w-1 bg-black origin-top z-0"></div>

          {portfolioData.experience.map((exp, idx) => (
            <div key={idx} className={`timeline-node relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active`}>
              
              {/* Timeline Dot */}
              <div className="timeline-dot flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-black absolute left-0 md:left-1/2 -translate-x-1/2 shadow-[0_0_0_4px_rgba(249,115,22,0.2)] group-hover:bg-orange-500 group-hover:scale-125 transition-all duration-300 z-10">
                <div className="w-2 h-2 rounded-full bg-white"></div>
              </div>

              {/* Content Card */}
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] bg-black p-8 rounded-[2rem] shadow-2xl border border-slate-900 group-hover:-translate-y-2 group-hover:border-orange-500/50 transition-all duration-300">
                <span className="px-4 py-1.5 rounded-full bg-white/10 text-white text-xs font-bold uppercase tracking-widest inline-block mb-4">
                  {exp.period}
                </span>
                <h3 className="text-2xl font-black text-white mb-1 group-hover:text-orange-500 transition-colors">{exp.role}</h3>
                <p className="text-orange-600 font-bold text-sm mb-5 tracking-wide">{exp.company}</p>
                <p className="text-slate-400 text-base leading-relaxed font-medium">{exp.description}</p>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
