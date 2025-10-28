import { useState, useEffect } from 'react'
import { Home, Briefcase, Info, Folder, Mail, X, Menu } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  const navLinks = [
    { name: 'Home', id: 'home', icon: Home },
    { name: 'Our Services', id: 'services', icon: Briefcase },
    { name: 'About Us', id: 'about', icon: Info },
    { name: 'Our Work', id: 'work', icon: Folder },
    { name: 'Contact', id: 'contact', icon: Mail },
  ]

  // Smooth scroll function
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const navbarHeight = 100 // Adjust based on your navbar height
      const offsetTop = element.offsetTop - navbarHeight
      
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      })
      // Add slight delay for closing mobile menu
      setTimeout(() => setIsOpen(false), 200)
    }
  }

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map(link => link.id)
      const scrollPosition = window.scrollY + 150

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <>
      {/* Floating Navbar */}
      <nav className="fixed top-4 left-4 right-4 z-50 bg-gradient-to-r from-brandBlue-darkest/80 to-brandBlue-dark/80 backdrop-blur-2xl rounded-3xl shadow-2xl border border-white/10 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <button 
              onClick={() => scrollToSection('home')}
              className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 h-14 overflow-hidden cursor-pointer"
            >
              <img
                src="/COSDEVSLOGOTEXT.webp"
                alt="COS Devs Logo"
                className="w-44 h-20 object-cover transition-transform duration-200 group-hover:scale-102"
                style={{ objectPosition: 'center' }}
              />
            </button>

            {/* Desktop Navigation */}
            <ul className="hidden lg:flex items-center gap-2">
              {navLinks.map((link) => {
                const Icon = link.icon
                const isActive = activeSection === link.id

                return (
                  <li key={link.id}>
                    <button
                      onClick={() => scrollToSection(link.id)}
                      className={`relative flex items-center gap-2 px-5 py-2.5 rounded-2xl font-heading transition-all duration-200 cursor-pointer group focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400
                        ${
                          isActive
                            ? 'bg-white/10 text-white shadow-lg backdrop-blur-sm'
                            : 'hover:bg-white/5 hover:text-white text-blue-200/80'
                        }
                      `}
                    >
                      <Icon 
                        size={18} 
                        className={`transition-transform duration-200 ${
                          isActive ? 'scale-110 drop-shadow-[0_0_6px_cyan]' : 'group-hover:scale-110'
                        }`}
                      />
                      <span className="font-medium text-sm">{link.name}</span>
                      {/* Animated underline */}
                      <span
                        className={`absolute left-5 right-5 -bottom-1 h-0.5 rounded-full bg-cyan-400 transition-all duration-300
                          opacity-0 scale-x-0 group-hover:opacity-80 group-hover:scale-x-100
                        `}
                      ></span>
                      {isActive && (
                        <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse ml-2" />
                      )}
                    </button>
                  </li>
                )
              })}
            </ul>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="lg:hidden bg-white/10 text-white p-2.5 rounded-xl hover:bg-white/20 transition-all duration-200 hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${
            isOpen ? 'max-h-96 opacity-100 translate-y-0' : 'max-h-0 opacity-0 -translate-y-8'
          }`}
        >
          <div className="px-6 pb-6 pt-2 border-t border-white/10">
            <ul className="space-y-2">
              {navLinks.map((link) => {
                const Icon = link.icon
                const isActive = activeSection === link.id

                return (
                  <li key={link.id}>
                    <button
                      onClick={() => scrollToSection(link.id)}
                      className={`relative w-full flex items-center gap-3 py-3 px-4 rounded-2xl font-heading transition-all duration-200 group focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400
                        ${
                          isActive
                            ? 'bg-white/10 text-white shadow-lg backdrop-blur-sm'
                            : 'hover:bg-white/5 hover:text-white text-blue-200/80'
                        }
                      `}
                    >
                      <Icon 
                        size={20} 
                        className={`transition-transform duration-200 ${
                          isActive ? 'scale-110 drop-shadow-[0_0_6px_cyan]' : 'group-hover:scale-110'
                        }`}
                      />
                      <span className="font-medium">{link.name}</span>
                      {/* Animated underline */}
                      <span
                        className={`absolute left-4 right-4 -bottom-1 h-0.5 rounded-full bg-cyan-400 transition-all duration-300
                          opacity-0 scale-x-0 group-hover:opacity-80 group-hover:scale-x-100
                        `}
                      ></span>
                      {isActive && (
                        <div className="ml-auto w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                      )}
                    </button>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </nav>

      {/* Spacer */}
      <div className="h-24" />
    </>
  )
}