import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Send } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="contact" className="py-24 px-6 md:px-12 lg:px-20 bg-[#fafafa] text-slate-900 relative">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-orange-600 font-bold uppercase tracking-widest text-sm mb-2 block">Get In Touch</span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6">Let's Work Together</h2>
            <p className="text-slate-600 text-lg mb-8 leading-relaxed">
              Have a project in mind or want to collaborate? Send me a message and let me know how I can help you build something great.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-4 bg-white p-5 rounded-2xl border border-orange-100 shadow-md">
                <div className="p-3.5 bg-orange-500 text-white rounded-xl shadow-md shadow-orange-500/30">
                  <Mail size={22} />
                </div>
                <div>
                  <span className="text-xs text-slate-400 font-bold block tracking-wider">EMAIL ME</span>
                  <span className="text-slate-900 font-bold">{portfolioData.contact.email}</span>
                </div>
              </div>
              <div className="flex items-center gap-4 bg-white p-5 rounded-2xl border border-orange-100 shadow-md">
                <div className="p-3.5 bg-orange-500 text-white rounded-xl shadow-md shadow-orange-500/30">
                  <MapPin size={22} />
                </div>
                <div>
                  <span className="text-xs text-slate-400 font-bold block tracking-wider">LOCATION</span>
                  <span className="text-slate-900 font-bold">{portfolioData.contact.location}</span>
                </div>
              </div>
            </div>
          </div>

          <motion.form 
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-orange-500 to-amber-600 p-8 sm:p-10 rounded-3xl shadow-2xl shadow-orange-500/20 text-white space-y-6"
          >
            <h3 className="text-2xl font-extrabold text-white mb-2">Send a Message</h3>
            <div>
              <label className="block text-white/90 text-sm font-bold mb-2">Your Name</label>
              <input 
                type="text" 
                required 
                placeholder="John Doe" 
                className="w-full bg-white/15 border border-white/30 placeholder-white/60 rounded-2xl px-4 py-3.5 text-white focus:outline-none focus:bg-white focus:text-slate-900 transition-all font-medium"
              />
            </div>
            <div>
              <label className="block text-white/90 text-sm font-bold mb-2">Your Email</label>
              <input 
                type="email" 
                required 
                placeholder="john@example.com" 
                className="w-full bg-white/15 border border-white/30 placeholder-white/60 rounded-2xl px-4 py-3.5 text-white focus:outline-none focus:bg-white focus:text-slate-900 transition-all font-medium"
              />
            </div>
            <div>
              <label className="block text-white/90 text-sm font-bold mb-2">Message</label>
              <textarea 
                rows="4" 
                required 
                placeholder="Tell me about your project..." 
                className="w-full bg-white/15 border border-white/30 placeholder-white/60 rounded-2xl px-4 py-3.5 text-white focus:outline-none focus:bg-white focus:text-slate-900 transition-all font-medium"
              ></textarea>
            </div>

            <button 
              type="submit" 
              className="w-full bg-white hover:bg-slate-100 text-orange-600 font-extrabold py-4 rounded-2xl flex items-center justify-center gap-2 transition-all shadow-xl shadow-black/10 hover:-translate-y-0.5"
            >
              {submitted ? "Message Sent!" : "Send Message"}
              <Send size={18} />
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
