import { useEffect, useRef } from 'react'
import { Sparkles } from 'lucide-react'
import { motion as Motion } from 'motion/react'
import BlurText from '../ui/BlurText'
import ShinyText from '../ui/ShinyText'

export default function Hero() {
  const stats = [
    { number: 150, label: 'Projects Completed', suffix: '+' },
    { number: 50, label: 'Satisfied Clients', suffix: '+' },
    { number: 5, label: 'Years Experience', suffix: '+' }
  ]
  const statRefs = [useRef(), useRef(), useRef()]

  useEffect(() => {
    statRefs.forEach((ref, i) => {
      let start = 0
      const end = stats[i].number
      if (ref.current) {
        const duration = 800
        const step = Math.ceil(end / (duration / 16))
        const animate = () => {
          start += step
          if (start >= end) {
            ref.current.textContent = end + stats[i].suffix
          } else {
            ref.current.textContent = start + stats[i].suffix
            requestAnimationFrame(animate)
          }
        }
        setTimeout(animate, 1200)
      }
    })
  }, [])

  return (
    <section id="home" className="relative min-h-screen flex items-center px-6 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-blue-500/30 via-cyan-400/20 to-blue-400/10 rounded-full blur-3xl animate-blob" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-tr from-cyan-500/30 via-blue-400/20 to-cyan-400/10 rounded-full blur-3xl animate-blob2" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="max-w-4xl space-y-8">
          <Motion.div 
            initial={{ opacity: 0, scale: 1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 hover:bg-white/10 hover:shadow-[0_0_16px_rgba(34,211,238,0.3)] hover:scale-105 transition-all duration-300"
          >
            <Sparkles size={16} className="text-cyan-400 animate-spin-slow" />
            <ShinyText 
              text="City of Smiles Developers" 
              disabled={false} 
              speed={3} 
              className="text-xs md:text-sm font-medium cursor-default"
            />
          </Motion.div>

          <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-medium cursor-default leading-tight">
            <BlurText
              text="Your Vision, Built into"
              delay={50}
              animateBy="words"
              direction="top"
              className="text-white block mb-2"
            />
            <BlurText
              text="Digital Reality."
              delay={50}
              animateBy="words"
              direction="top"
              className="bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400 bg-clip-text text-transparent animate-gradient-text block"
            />
          </h1>

          {/* Subtitle */}
          <BlurText
            text="We build the custom software you need to move beyond manual processes, connect with your customers, and achieve real growth."
            delay={30}
            animateBy="words"
            direction="top"
            className="text-sm md:text-lg text-blue-200/80 leading-relaxed cursor-default max-w-2xl"
          />

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 pt-6 max-w-3xl">
            {stats.map((stat, index) => (
              <Motion.div 
                key={index} 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1 + (index * 0.1) }}
                className="group hover:scale-102 transition-transform duration-300"
              >
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/10 hover:bg-white/10 hover:shadow-[0_0_16px_rgba(34,211,238,0.3)] transition-all duration-300 cursor-pointer">
                  <div
                    ref={statRefs[index]}
                    className="font-heading text-2xl md:text-3xl font-medium bg-linear-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent mb-2"
                  >
                    {stat.number + stat.suffix}
                  </div>
                  <div className="text-xs text-blue-200/60">{stat.label}</div>
                </div>
              </Motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Custom Animations */}
      <style>{`
        .animate-gradient-text {
          background-size: 200% 200%;
          animation: gradientMove 3s ease-in-out infinite;
        }
        @keyframes gradientMove {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-blob {
          animation: blobMove 8s ease-in-out infinite;
        }
        .animate-blob2 {
          animation: blobMove2 10s ease-in-out infinite;
        }
        @keyframes blobMove {
          0%, 100% { transform: scale(1) translateY(0); }
          50% { transform: scale(1.1) translateY(20px); }
        }
        @keyframes blobMove2 {
          0%, 100% { transform: scale(1) translateY(0); }
          50% { transform: scale(1.15) translateY(-20px); }
        }
        .animate-spin-slow {
          animation: spin 3s linear infinite;
        }
        @keyframes spin {
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  )
}