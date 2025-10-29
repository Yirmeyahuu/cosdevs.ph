import { useEffect, useRef } from 'react'
import { ArrowRight, Sparkles } from 'lucide-react'

export default function Hero() {
  const stats = [
    { number: 20, label: 'Projects Completed', suffix: '+' },
    { number: 20, label: 'Happy Clients', suffix: '+' },
    { number: 2, label: 'Years Experience', suffix: '+' }
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
        animate()
      }
    })
  }, [])

  const scrollToContact = () => {
    const element = document.getElementById('contact')
    if (element) {
      const navbarHeight = 100
      const offsetTop = element.offsetTop - navbarHeight
      window.scrollTo({ top: offsetTop, behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-blue-500/30 via-cyan-400/20 to-blue-400/10 rounded-full blur-3xl animate-blob" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-tr from-cyan-500/30 via-blue-400/20 to-cyan-400/10 rounded-full blur-3xl animate-blob2" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center w-full">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 mb-8 hover:bg-white/10 hover:shadow-[0_0_16px_rgba(34,211,238,0.3)] hover:scale-105 transition-all duration-300">
          <Sparkles size={16} className="text-cyan-400 animate-spin-slow" />
          <span className="text-sm text-blue-200/80 font-medium cursor-default">Welcome to the future of development</span>
        </div>

        {/* Main Heading */}
        <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 cursor-default leading-tight px-4">
          <span className="text-white">Your Vision, Built into</span>
          <br />
          <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400 bg-clip-text text-transparent animate-gradient-text">
            Digital Reality.
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-base md:text-lg lg:text-xl text-blue-200/80 mb-12 max-w-2xl mx-auto leading-relaxed px-4 cursor-default">
          We build the custom software you need to move beyond manual processes, connect with your customers, and achieve real growth.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 px-4">
          <button 
            onClick={scrollToContact}
            className="group relative px-8 py-4 bg-gradient-to-r from-blue-400 to-cyan-300 text-brandBlue-darkest rounded-2xl font-heading font-semibold overflow-hidden hover:scale-105 hover:shadow-[0_0_24px_rgba(34,211,238,0.5)] transition-all duration-300 shadow-lg shadow-blue-500/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 w-full sm:w-auto"
          >
            <span className="relative z-10 flex items-center justify-center gap-2 cursor-pointer">
              Start Your Project
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
            </span>
          </button>
          
          <button 
            onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 bg-white/5 backdrop-blur-sm text-white rounded-2xl font-heading font-semibold border border-white/10 hover:bg-white/10 hover:shadow-[0_0_16px_rgba(34,211,238,0.3)] transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 w-full sm:w-auto cursor-pointer"
          >
            View Our Work
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 md:gap-8 mt-16 mb-20 max-w-3xl mx-auto px-4">
          {stats.map((stat, index) => (
            <div key={index} className="group hover:scale-110 transition-transform duration-300">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 md:p-6 border border-white/10 hover:bg-white/10 hover:shadow-[0_0_16px_rgba(34,211,238,0.3)] transition-all duration-300 cursor-pointer">
                <div
                  ref={statRefs[index]}
                  className="font-heading text-2xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent mb-2"
                >
                  {stat.number + stat.suffix}
                </div>
                <div className="text-xs md:text-sm text-blue-200/60">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/20 rounded-full flex items-start justify-center p-2 shadow-[0_0_16px_rgba(34,211,238,0.3)] animate-pulse">
          <div className="w-1.5 h-3 bg-gradient-to-b from-blue-400 to-transparent rounded-full" />
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