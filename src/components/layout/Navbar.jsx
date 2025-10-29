import { useState, useEffect } from 'react'
import { Home, Briefcase, Info, Folder, Mail, X, Menu } from 'lucide-react'
import { useNavigate, useLocation } from 'react-router-dom'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const navigate = useNavigate()
  const location = useLocation()

  const navLinks = [
    { name: 'Home', id: 'home', icon: Home, path: '/' },
    { name: 'Our Services', id: 'services', icon: Briefcase, path: '/services' },
    { name: 'About Us', id: 'about', icon: Info, path: '/about' },
    { name: 'Our Work', id: 'work', icon: Folder, path: '/work' },
    { name: 'Contact', id: 'contact', icon: Mail, path: '/contact' },
  ]

  // Smooth scroll function
  const scrollToSection = (link) => {
    // If it's a different page (not just a section), navigate to it
    if (link.path.startsWith('/') && !link.path.includes('#')) {
      navigate(link.path)
      setActiveSection(link.id)
      setTimeout(() => setIsOpen(false), 200)
      return
    }

    // If we're on a different page and need to go to home section
    if (location.pathname !== '/' && link.path.includes('#')) {
      navigate('/')
      // Wait for navigation then scroll
      setTimeout(() => {
        const sectionId = link.id
        const element = document.getElementById(sectionId)
        if (element) {
          const navbarHeight = 100
          const offsetTop = element.offsetTop - navbarHeight
          window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
          })
        }
      }, 100)
      setTimeout(() => setIsOpen(false), 200)
      return
    }

    // Normal scroll on same page
    const element = document.getElementById(link.id)
    if (element) {
      const navbarHeight = 100
      const offsetTop = element.offsetTop - navbarHeight
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      })
      setTimeout(() => setIsOpen(false), 200)
    }
  }

  // Track active section on scroll (only on home page)
  useEffect(() => {
    // Set active based on current route
    if (location.pathname === '/') {
      const handleScroll = () => {
        const sections = navLinks.filter(link => link.path.includes('#')).map(link => link.id)
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
      handleScroll() // Initial check
      return () => window.removeEventListener('scroll', handleScroll)
    } else {
      // Set active section based on current path
      const currentLink = navLinks.find(link => link.path === location.pathname)
      if (currentLink) {
        setActiveSection(currentLink.id)
      }
    }
  }, [location.pathname])

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <>
      {/* Fixed Floating Navbar */}
      <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-[100] w-[calc(100%-2rem)] max-w-7xl">
        <div className="bg-gradient-to-r from-brandBlue-darkest/95 to-brandBlue-dark/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/10">
          <div className="px-6 py-4">
            <div className="flex items-center justify-between">
              {/* Logo */}
              <button 
                onClick={() => {
                  navigate('/')
                  setActiveSection('home')
                  // Scroll to top if already on home page
                  if (location.pathname === '/') {
                    window.scrollTo({ top: 0, behavior: 'smooth' })
                  }
                }}
                className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded-xl"
              >
                <div className="h-12 overflow-hidden flex items-center cursor-pointer">
                  <img
                    src="/COSDEVSLOGOTEXT.webp"
                    alt="COS Devs Logo"
                    className="h-16 w-auto object-contain transition-transform duration-200 group-hover:scale-105"
                  />
                </div>
              </button>

              {/* Desktop Navigation */}
              <ul className="hidden lg:flex items-center gap-2">
                {navLinks.map((link) => {
                  const Icon = link.icon
                  const isActive = activeSection === link.id

                  return (
                    <li key={link.id}>
                      <button
                        onClick={() => scrollToSection(link)}
                        className={`relative flex items-center gap-2 px-5 py-2.5 rounded-2xl font-heading transition-all duration-200 group focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 cursor-pointer
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
                        {isActive && (
                          <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse ml-1" />
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
            className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
              isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
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
                        onClick={() => scrollToSection(link)}
                        className={`w-full flex items-center gap-3 py-3 px-4 rounded-2xl font-heading transition-all duration-200 group focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400
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
        </div>
      </nav>

      {/* Spacer */}
      <div className="h-28" />
    </>
  )
}