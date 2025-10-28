import { Send, Mail, Phone, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <section id="contact" className="py-24">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-heading font-bold text-white inline-block relative">
            Contact Us
            <span className="block h-1 w-24 mx-auto mt-2 bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400 rounded-full" />
          </h2>
          <p className="mt-4 text-lg text-blue-200/80">
            Let's build something amazing together.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="space-y-6 bg-slate-900/60 border border-slate-800 rounded-2xl p-8 shadow-lg hover:shadow-cyan-400/20 focus-within:shadow-cyan-400/20 transition-all duration-300"
          >
            {/* Floating labels */}
            <div className="relative">
              <input type="text" id="name" required className="peer w-full bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400" />
              <label htmlFor="name" className="absolute left-4 top-3 text-blue-200/70 pointer-events-none transition-all duration-200 peer-focus:-top-5 peer-focus:text-cyan-400 peer-valid:-top-5 peer-valid:text-cyan-400 bg-slate-900/60 px-1 rounded">
                Your Name
              </label>
            </div>
            <div className="relative">
              <input type="email" id="email" required className="peer w-full bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400" />
              <label htmlFor="email" className="absolute left-4 top-3 text-blue-200/70 pointer-events-none transition-all duration-200 peer-focus:-top-5 peer-focus:text-cyan-400 peer-valid:-top-5 peer-valid:text-cyan-400 bg-slate-900/60 px-1 rounded">
                Your Email
              </label>
            </div>
            <div className="relative">
              <input type="text" id="subject" required className="peer w-full bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400" />
              <label htmlFor="subject" className="absolute left-4 top-3 text-blue-200/70 pointer-events-none transition-all duration-200 peer-focus:-top-5 peer-focus:text-cyan-400 peer-valid:-top-5 peer-valid:text-cyan-400 bg-slate-900/60 px-1 rounded">
                Subject
              </label>
            </div>
            <div className="relative">
              <textarea id="message" rows="5" required className="peer w-full bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400" />
              <label htmlFor="message" className="absolute left-4 top-3 text-blue-200/70 pointer-events-none transition-all duration-200 peer-focus:-top-5 peer-focus:text-cyan-400 peer-valid:-top-5 peer-valid:text-cyan-400 bg-slate-900/60 px-1 rounded">
                Your Message
              </label>
            </div>
            <button
              type="submit"
              className="group relative w-full px-8 py-4 bg-gradient-to-r from-blue-400 to-cyan-300 text-brandBlue-darkest rounded-xl font-heading font-semibold overflow-hidden hover:scale-105 hover:shadow-[0_0_24px_cyan] transition-transform duration-300 shadow-lg shadow-blue-500/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 cursor-pointer"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                Send Message <Send size={20} />
              </span>
              {/* Ripple effect */}
              <span className="absolute inset-0 pointer-events-none group-active:animate-ripple bg-cyan-300/20 rounded-xl" />
            </button>
            {/* Custom Animations */}
            <style>{`
              .group-active\\:animate-ripple:active {
                animation: ripple 0.4s linear;
              }
              @keyframes ripple {
                0% { opacity: 0.5; }
                100% { opacity: 0; }
              }
            `}</style>
          </motion.form>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-8 cursor-pointer"
          >
            <div className="flex items-center gap-4 group bg-slate-900/60 border border-slate-800 rounded-2xl p-6 hover:shadow-cyan-400/20 focus-within:shadow-cyan-400/20 transition-all duration-300">
              <Mail className="w-8 h-8 text-cyan-400 group-hover:text-cyan-300 group-hover:drop-shadow-[0_0_8px_cyan] transition-all duration-300 " />
              <div>
                <h3 className="text-lg font-semibold text-white">Email</h3>
                <p className="text-blue-200/70">contact@cosdevs.com</p>
              </div>
            </div>
            <div className="flex items-center gap-4 group bg-slate-900/60 border border-slate-800 rounded-2xl p-6 hover:shadow-cyan-400/20 focus-within:shadow-cyan-400/20 transition-all duration-300">
              <Phone className="w-8 h-8 text-cyan-400 group-hover:text-cyan-300 group-hover:drop-shadow-[0_0_8px_cyan] transition-all duration-300" />
              <div>
                <h3 className="text-lg font-semibold text-white">Phone</h3>
                <p className="text-blue-200/70">(+63) 9085608811</p>
              </div>
            </div>
            <div className="flex items-center gap-4 group bg-slate-900/60 border border-slate-800 rounded-2xl p-6 hover:shadow-cyan-400/20 focus-within:shadow-cyan-400/20 transition-all duration-300">
              <MapPin className="w-8 h-8 text-cyan-400 group-hover:text-cyan-300 group-hover:drop-shadow-[0_0_8px_cyan] transition-all duration-300" />
              <div>
                <h3 className="text-lg font-semibold text-white">Location</h3>
                <p className="text-blue-200/70">Bacolod City, Negros Island, Philippines, 6100</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}