import React from 'react'
import { ArrowUp } from 'lucide-react'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative bg-brandBlue-darkest/90 text-white py-8 text-center font-sans backdrop-blur-lg shadow-inner border-t-4 border-gradient-to-r from-blue-400 via-cyan-300 to-blue-400">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <p className="mb-2 text-sm md:text-base">
            &copy; {new Date().getFullYear()} <span className="font-heading bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400 bg-clip-text text-transparent animate-gradient-text">COS Devs</span>. All rights reserved.
          </p>
          <p className="text-xs md:text-sm">
            Built with{' '}
            <span className="font-heading transition-colors duration-300 hover:text-cyan-300 focus-visible:text-cyan-300 cursor-pointer">React</span>,{' '}
            <span className="font-heading transition-colors duration-300 hover:text-cyan-300 focus-visible:text-cyan-300 cursor-pointer">Vite</span>,{' '}
            and{' '}
            <span className="font-heading transition-colors duration-300 hover:text-cyan-300 focus-visible:text-cyan-300 cursor-pointer">TailwindCSS</span>.
          </p>
        </div>
        <button
          onClick={scrollToTop}
          className="group flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 shadow hover:shadow-cyan-400/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
          aria-label="Back to top"
        >
          <ArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform duration-300 text-cyan-300" />
          <span className="text-sm font-semibold">Back to Top</span>
        </button>
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
      `}</style>
    </footer>
  )
}