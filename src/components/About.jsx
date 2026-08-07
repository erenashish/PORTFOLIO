import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { portfolioData } from '../data/portfolioData';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          end: "bottom 25%",
          toggleActions: "play none none reverse"
        }
      });

      tl.from(".about-image", {
        x: -50,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
      })
      .from(".about-text", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out"
      }, "-=0.6")
      .from(".about-highlight", {
        scale: 0.8,
        opacity: 0,
        duration: 0.5,
        stagger: 0.1,
        ease: "back.out(1.5)"
      }, "-=0.4");
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-24 px-6 md:px-12 lg:px-20 bg-black text-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16 items-center">
        
        {/* Avatar / Profile Box */}
        <div className="about-image w-full md:w-1/2 flex justify-center relative">
          {/* Glowing Aura */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-orange-600/20 blur-[80px] rounded-full pointer-events-none"></div>
          
          <div className="relative group w-72 h-72 md:w-[400px] md:h-[400px] rounded-[3rem] overflow-hidden p-1 bg-gradient-to-br from-orange-500 to-black/0">
            <div className="w-full h-full rounded-[2.9rem] overflow-hidden bg-black relative">
              <img 
                src="/images/avatar.png" 
                alt="Aashish Singh" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
            </div>
          </div>
        </div>

        {/* Text Content */}
        <div className="w-full md:w-1/2 flex flex-col items-start text-left relative z-10">
          <span className="about-text text-orange-500 font-extrabold uppercase tracking-[0.2em] text-xs mb-4">About Me</span>
          <h2 className="about-text text-4xl md:text-5xl lg:text-6xl font-black text-white mb-8 leading-none tracking-tighter">
            Passionate Developer <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-600">& UI Specialist</span>
          </h2>
          <p className="about-text text-slate-400 text-lg md:text-xl leading-relaxed mb-10 font-medium">
            {portfolioData.about.bio}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
            {portfolioData.about.highlights.map((item, index) => (
              <div key={index} className="about-highlight flex items-center gap-4 bg-white/5 border border-white/10 p-5 rounded-2xl hover:border-orange-500/50 hover:bg-orange-500/10 transition-colors">
                <div className="w-2 h-2 rounded-full bg-orange-500 shadow-[0_0_10px_rgba(249,115,22,1)]"></div>
                <span className="text-slate-200 font-bold text-sm tracking-wide">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
