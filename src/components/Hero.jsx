import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ArrowUpRight, Menu } from 'lucide-react';
import { FaLinkedinIn, FaGithub, FaTwitter, FaInstagram } from 'react-icons/fa6';
import { portfolioData } from '../data/portfolioData';

const Hero = () => {
  const container = useRef(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline();

      // 1. Navbar fade in
      tl.from('.nav-item', {
        y: -20,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power3.out'
      });

      // 2. Huge Text Reveal
      tl.from('.huge-text', {
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: 'power4.out',
        rotate: 2
      }, "-=0.5");

      // 3. Subtitle and CTA fade in
      tl.from('.hero-sub-element', {
        x: -30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power3.out'
      }, "-=0.6");

      // 4. Main Image Slide up
      tl.from('.main-image', {
        y: '100%',
        opacity: 0,
        duration: 1.2,
        ease: 'power3.inOut'
      }, "-=1.2");

      // 5. Right side content (Quote & Availability)
      tl.from('.right-element', {
        x: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out'
      }, "-=0.8");

      // 6. Social icons stagger pop
      tl.from('.social-icon', {
        scale: 0,
        opacity: 0,
        duration: 0.5,
        stagger: 0.1,
        ease: 'back.out(1.7)'
      }, "-=0.5");

      // Floating animation for decorative shapes
      gsap.to('.shape-1', {
        y: -30,
        x: -20,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
      });
      
      gsap.to('.shape-2', {
        y: 40,
        x: 30,
        duration: 5,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
      });
    }, container);
    
    return () => ctx.revert();
  }, []);

  return (
    <section ref={container} className="relative min-h-screen w-full overflow-hidden flex flex-col md:flex-row bg-[#fafafa]">
      
      {/* Horizontal Menu Bar */}
      <nav className="absolute top-6 left-0 w-full z-50 flex justify-between items-center px-6 md:px-12 pointer-events-none">
        {/* Logo */}
        <div className="flex items-center gap-2 pointer-events-auto nav-item bg-white/10 backdrop-blur-md px-5 py-2.5 rounded-full border border-white/20 shadow-lg">
          <div className="text-white font-extrabold text-xl tracking-tighter">
            <span className="text-orange-500 mr-1">α</span> Aashish
          </div>
        </div>

        {/* Horizontal Navigation Links */}
        <div className="hidden lg:flex items-center gap-2 pointer-events-auto nav-item bg-white/90 backdrop-blur-md px-6 py-2.5 rounded-full shadow-lg border border-orange-100">
          <a href="#work" className="px-4 py-2 rounded-full text-sm font-bold text-slate-700 hover:text-orange-600 hover:bg-orange-50 transition-all">WORK</a>
          <a href="#about" className="px-4 py-2 rounded-full text-sm font-bold text-slate-700 hover:text-orange-600 hover:bg-orange-50 transition-all">ABOUT</a>
          <a href="#experience" className="px-4 py-2 rounded-full text-sm font-bold text-slate-700 hover:text-orange-600 hover:bg-orange-50 transition-all">EXPERIENCE</a>
          <a href="#contact" className="px-4 py-2 rounded-full text-sm font-bold text-slate-700 hover:text-orange-600 hover:bg-orange-50 transition-all">CONTACT</a>
          <button className="ml-2 p-2 rounded-full bg-slate-100 hover:bg-orange-100 text-slate-700 hover:text-orange-600 transition-colors">
            <Menu size={18} />
          </button>
        </div>

        {/* Mobile Nav Toggle */}
        <div className="lg:hidden nav-item pointer-events-auto">
          <button className="p-3 rounded-full bg-white text-orange-600 shadow-xl border border-orange-100">
            <Menu size={20} />
          </button>
        </div>
      </nav>

      {/* LEFT SECTION (Orange Gradient with Rounded Corners) */}
      <div className="w-full md:w-[55%] min-h-[60vh] md:min-h-screen relative flex flex-col justify-center px-6 md:px-12 lg:px-20 pt-28 pb-12 z-10 overflow-hidden md:rounded-r-[3rem] lg:rounded-r-[4rem] shadow-2xl shadow-orange-500/20"
        style={{ background: 'linear-gradient(135deg, #c2410c 0%, #ea580c 50%, #f97316 100%)' }}>

        {/* GSAP Floating background shapes */}
        <div className="absolute top-0 left-0 w-full h-full opacity-40 pointer-events-none">
          <div className="shape-1 absolute -top-[10%] -left-[10%] w-[50%] h-[50%] rounded-full bg-orange-700 blur-[80px]" />
          <div className="shape-2 absolute bottom-[20%] right-[10%] w-[35%] h-[35%] rounded-full bg-orange-900 blur-[60px]" />
        </div>

        <div className="relative z-20 flex flex-col items-start mt-10 md:mt-0">
          
          {/* HUGE TEXT for GSAP reveal */}
          <h1 
            className="text-[4rem] sm:text-[6rem] md:text-[7.5rem] lg:text-[9.5rem] xl:text-[11.5rem] leading-[0.82] font-black text-white tracking-tighter uppercase mb-6 md:mb-10 w-[120%] md:w-[150%] max-w-[150vw]"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            <div className="overflow-hidden"><span className="inline-block huge-text">AASHISH</span></div>
            <div className="overflow-hidden"><span className="inline-block huge-text">SINGH</span></div>
          </h1>

          <p className="hero-sub-element text-white/90 text-lg md:text-xl font-medium mb-8 max-w-md leading-relaxed">
            {portfolioData.hero.subtitle.split('\n').map((line, i) => (
              <React.Fragment key={i}>
                {line}<br />
              </React.Fragment>
            ))}
          </p>

          <button className="hero-sub-element group flex items-center gap-3 bg-white text-orange-600 px-6 py-3 md:px-8 md:py-4 rounded-full font-bold text-sm md:text-base shadow-2xl hover:shadow-[0_0_40px_rgba(255,255,255,0.6)] transition-all hover:-translate-y-1">
            {portfolioData.hero.cta}
            <ArrowUpRight size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>

        {/* Socials / Trust area (Bottom Left) */}
        <div className="relative z-20 mt-auto pt-16 flex flex-col sm:flex-row items-start sm:items-center gap-5">
          <div className="flex -space-x-3">
            <a href={portfolioData.hero.socials[0].url} target="_blank" rel="noreferrer" className="social-icon w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-orange-500 bg-white flex items-center justify-center text-[#0077b5] shadow-lg relative z-[4] hover:-translate-y-1 transition-transform">
              <FaLinkedinIn size={18} />
            </a>
            <a href={portfolioData.hero.socials[1].url} target="_blank" rel="noreferrer" className="social-icon w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-orange-500 bg-slate-900 flex items-center justify-center text-white shadow-lg relative z-[3] hover:-translate-y-1 transition-transform">
              <FaGithub size={18} />
            </a>
            <div className="social-icon w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-orange-500 bg-[#1DA1F2] flex items-center justify-center text-white shadow-lg relative z-[2] hover:-translate-y-1 transition-transform">
              <FaTwitter size={18} />
            </div>
            <div className="social-icon w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-orange-500 bg-[#E1306C] flex items-center justify-center text-white shadow-lg relative z-[1] hover:-translate-y-1 transition-transform">
              <FaInstagram size={18} />
            </div>
          </div>
          <p className="hero-sub-element text-white/80 text-xs md:text-sm max-w-[200px] leading-tight font-medium">
            Connect with me across all social platforms.
          </p>
        </div>
      </div>

      {/* RIGHT SECTION (White) */}
      <div className="w-full md:w-[45%] min-h-[40vh] md:min-h-screen relative flex flex-col justify-between p-6 md:p-12 lg:p-20 pt-10 md:pt-32 z-0">
        
        {/* Availability */}
        <div className="right-element flex flex-col items-end text-right ml-auto z-20">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">AVAILABLE FOR</span>
            <div className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></div>
          </div>
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-slate-900 leading-tight">
            Internships &<br />Projects
          </h3>
        </div>

        {/* Quote Card */}
        <div className="right-element bg-white rounded-3xl p-6 md:p-8 shadow-2xl shadow-slate-200 border border-slate-100 max-w-sm w-full relative z-20 mt-auto ml-auto">
          <div className="text-orange-500 text-5xl font-serif leading-none absolute -top-5 left-6 opacity-60">"</div>
          <p className="text-slate-600 text-sm md:text-base font-medium mb-6 pt-2">
            {portfolioData.hero.quote.text}
          </p>
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 font-bold">
              ID
            </div>
            <div>
              <h4 className="text-slate-900 font-bold text-sm">{portfolioData.hero.quote.author}</h4>
              <p className="text-orange-600 text-xs font-bold tracking-wide">{portfolioData.hero.quote.role}</p>
            </div>
          </div>
        </div>
      </div>

      {/* MAIN CHARACTER IMAGE (Absolute Center) */}
      <div className="main-image absolute bottom-0 left-1/2 -translate-x-1/2 w-full md:w-auto h-[50vh] md:h-[85vh] z-30 pointer-events-none flex justify-center items-end">
        <img
          src="/images/Ashish image.png"
          alt="Aashish Singh"
          className="h-full w-auto object-contain object-bottom drop-shadow-2xl"
          style={{
            filter: "drop-shadow(0px -10px 40px rgba(0,0,0,0.35))"
          }}
        />
      </div>
    </section>
  );
};

export default Hero;
