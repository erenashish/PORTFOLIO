import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Mail, MapPin, Send } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Header Animation
      gsap.from(".contact-header", {
        scrollTrigger: {
          trigger: ".contact-header",
          start: "top 80%",
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out"
      });

      // Left info boxes
      gsap.from(".contact-info", {
        scrollTrigger: {
          trigger: ".contact-info-container",
          start: "top 75%",
        },
        x: -40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out"
      });

      // Form animation
      gsap.from(".contact-form", {
        scrollTrigger: {
          trigger: ".contact-form",
          start: "top 75%",
        },
        x: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out"
      });
      
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="contact" ref={sectionRef} className="py-32 px-6 md:px-12 lg:px-20 bg-black text-white relative overflow-hidden">
      
      {/* Decorative Blur */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-orange-600/10 blur-[120px] rounded-full pointer-events-none -translate-y-1/2 -translate-x-1/2"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          <div className="contact-info-container">
            <span className="contact-header text-orange-600 font-extrabold uppercase tracking-[0.2em] text-xs mb-4 block">
              Get In Touch
            </span>
            <h2 className="contact-header text-4xl md:text-5xl lg:text-7xl font-black text-white mb-6 tracking-tighter leading-none">
              Let's Work <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-600">Together</span>
            </h2>
            <p className="contact-header text-slate-400 text-lg md:text-xl mb-12 leading-relaxed font-medium max-w-lg">
              Have a project in mind or want to collaborate? Send me a message and let me know how I can help you build something great.
            </p>

            <div className="space-y-6">
              <div className="contact-info flex items-center gap-6 bg-white/5 p-6 rounded-[2rem] border border-white/10 hover:border-orange-500/50 hover:bg-orange-500/5 transition-colors group">
                <div className="p-4 bg-black border border-white/10 text-white rounded-2xl group-hover:bg-orange-500 group-hover:border-orange-500 group-hover:text-black transition-all shadow-[0_0_20px_rgba(249,115,22,0)] group-hover:shadow-[0_0_20px_rgba(249,115,22,0.4)]">
                  <Mail size={24} />
                </div>
                <div>
                  <span className="text-xs text-slate-500 font-bold block tracking-widest uppercase mb-1">Email Me</span>
                  <span className="text-white font-bold text-lg">{portfolioData.contact.email}</span>
                </div>
              </div>
              
              <div className="contact-info flex items-center gap-6 bg-white/5 p-6 rounded-[2rem] border border-white/10 hover:border-orange-500/50 hover:bg-orange-500/5 transition-colors group">
                <div className="p-4 bg-black border border-white/10 text-white rounded-2xl group-hover:bg-orange-500 group-hover:border-orange-500 group-hover:text-black transition-all shadow-[0_0_20px_rgba(249,115,22,0)] group-hover:shadow-[0_0_20px_rgba(249,115,22,0.4)]">
                  <MapPin size={24} />
                </div>
                <div>
                  <span className="text-xs text-slate-500 font-bold block tracking-widest uppercase mb-1">Location</span>
                  <span className="text-white font-bold text-lg">{portfolioData.contact.location}</span>
                </div>
              </div>
            </div>
          </div>

          <form 
            onSubmit={handleSubmit}
            className="contact-form bg-[#0a0a0a] p-8 md:p-12 rounded-[3rem] shadow-2xl border border-white/10 relative overflow-hidden"
          >
            {/* Form Glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 blur-[80px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/2"></div>
            
            <h3 className="text-3xl font-black text-white mb-10">Send a Message</h3>
            
            <div className="space-y-6 relative z-10">
              <div>
                <label className="block text-slate-400 text-xs font-bold tracking-widest uppercase mb-2 ml-2">Your Name</label>
                <input 
                  type="text" 
                  required 
                  placeholder="John Doe" 
                  className="w-full bg-black border border-white/10 placeholder-slate-600 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-orange-500 focus:bg-orange-500/5 transition-all font-medium"
                />
              </div>
              <div>
                <label className="block text-slate-400 text-xs font-bold tracking-widest uppercase mb-2 ml-2">Your Email</label>
                <input 
                  type="email" 
                  required 
                  placeholder="john@example.com" 
                  className="w-full bg-black border border-white/10 placeholder-slate-600 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-orange-500 focus:bg-orange-500/5 transition-all font-medium"
                />
              </div>
              <div>
                <label className="block text-slate-400 text-xs font-bold tracking-widest uppercase mb-2 ml-2">Message</label>
                <textarea 
                  rows="4" 
                  required 
                  placeholder="Tell me about your project..." 
                  className="w-full bg-black border border-white/10 placeholder-slate-600 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-orange-500 focus:bg-orange-500/5 transition-all font-medium resize-none"
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="w-full mt-4 bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-400 hover:to-amber-500 text-black font-black tracking-widest uppercase py-5 rounded-2xl flex items-center justify-center gap-3 transition-all shadow-[0_0_40px_rgba(249,115,22,0.3)] hover:shadow-[0_0_60px_rgba(249,115,22,0.5)] hover:-translate-y-1"
              >
                {submitted ? "Message Sent!" : "Send Message"}
                <Send size={20} className={submitted ? "translate-x-2 transition-transform" : ""} />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
