import { Zap, Target, Search, PenTool, Rocket, Code2 } from 'lucide-react';
import { motion } from 'framer-motion';

export default function About() {
  const steps = [
    { icon: <Search className="group-hover:text-cyan-300 group-hover:drop-shadow-[0_0_8px_cyan] transition-all duration-300" />, title: '1. Discovery' },
    { icon: <PenTool className="group-hover:text-cyan-300 group-hover:drop-shadow-[0_0_8px_cyan] transition-all duration-300" />, title: '2. Design' },
    { icon: <Code2 className="group-hover:text-cyan-300 group-hover:drop-shadow-[0_0_8px_cyan] transition-all duration-300" />, title: '3. Develop' },
    { icon: <Rocket className="group-hover:text-cyan-300 group-hover:drop-shadow-[0_0_8px_cyan] transition-all duration-300" />, title: '4. Deploy' },
  ];

  const stepVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: i * 0.15 }
    })
  };

  return (
    <section id="about" className="py-24">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ">
          {/* Left Column: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-4xl font-heading font-bold text-white mb-2 inline-block relative">
              About COS Devs
              <span className="block h-1 w-24 mx-auto mt-2 bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400 rounded-full" />
            </h2>
            <p className="text-lg text-blue-200/80 mb-6">
              We are a passionate team of developers and designers dedicated to building exceptional digital products. Our mission is to partner with visionaries like you to turn complex problems into elegant, user-friendly solutions. We believe in the power of technology to create a better future.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-4 group hover:shadow-[0_0_16px_cyan] hover:border-cyan-400/70 focus-within:shadow-[0_0_16px_cyan] focus-within:border-cyan-400/70 transition-all duration-300 bg-slate-900/60 border border-slate-800 rounded-2xl p-4 cursor-pointer">
                <div className="bg-blue-500/10 p-2 rounded-full mt-1">
                  <Zap className="text-cyan-400" />
                </div>
                <div>
                  <h3 className="font-bold text-white">Our Mission</h3>
                  <p className="text-blue-200/70">To craft high-quality software that is intuitive, efficient, and impactful.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 group hover:shadow-[0_0_16px_cyan] hover:border-cyan-400/70 focus-within:shadow-[0_0_16px_cyan] focus-within:border-cyan-400/70 transition-all duration-300 bg-slate-900/60 border border-slate-800 rounded-2xl p-4 cursor-pointer">
                <div className="bg-blue-500/10 p-2 rounded-full mt-1">
                  <Target className="text-cyan-400" />
                </div>
                <div>
                  <h3 className="font-bold text-white">Our Vision</h3>
                  <p className="text-blue-200/70">To be a leading partner in digital innovation, recognized for our commitment to excellence and client success.</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Our Process */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="bg-slate-900 p-8 rounded-2xl border border-slate-800"
          >
            <h3 className="text-2xl font-heading font-bold text-center text-white mb-8">Our Streamlined Process</h3>
            <div className="relative">
              {/* Dashed line with gradient pulse */}
              <div className="absolute left-1/2 -translate-x-1/2 top-5 h-[calc(100%-2.5rem)] w-0.5 border-l-2 border-dashed border-slate-700 animate-gradient-pulse" />
              <div className="space-y-12 ">
                {steps.map((step, index) => (
                  <motion.div
                    key={index}
                    custom={index}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    variants={stepVariants}
                    tabIndex={0}
                    className="flex items-center gap-6 relative group outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 cursor-pointer"
                  >
                    <div className="bg-slate-800 border-2 border-slate-700 group-hover:border-cyan-400/70 group-focus-visible:border-cyan-400/70 p-3 rounded-full z-10 transition-all duration-300">
                      {step.icon}
                    </div>
                    <span className="font-semibold text-lg text-white">{step.title}</span>
                  </motion.div>
                ))}
              </div>
            </div>
            {/* Custom Animations */}
            <style>{`
              .animate-gradient-pulse {
                animation: gradientPulse 2s infinite alternate;
              }
              @keyframes gradientPulse {
                0% { border-color: #334155; }
                100% { border-color: #22d3ee; }
              }
            `}</style>
          </motion.div>
        </div>
      </div>
    </section>
  );
}