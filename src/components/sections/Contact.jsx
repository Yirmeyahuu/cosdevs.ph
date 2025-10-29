import { useState } from 'react'
import { Send, Mail, Phone, MapPin, CheckCircle, AlertCircle } from 'lucide-react'

export default function Contact() {
  const [status, setStatus] = useState('idle') // idle, submitting, success, error

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('submitting')

    const form = e.target
    const formData = new FormData(form)

    try {
      const response = await fetch('https://formspree.io/f/xovpdlzz', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      })

      if (response.ok) {
        setStatus('success')
        form.reset()
        // Reset status after 5 seconds
        setTimeout(() => setStatus('idle'), 5000)
      } else {
        setStatus('error')
        setTimeout(() => setStatus('idle'), 5000)
      }
    } catch (error) {
      setStatus('error')
      setTimeout(() => setStatus('idle'), 5000)
    }
  }

  return (
    <section id="contact" className="min-h-screen py-20 px-6 relative">
      <div className="max-w-7xl mx-auto w-full">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 mb-6">
            <span className="text-sm text-cyan-400 font-medium">GET IN TOUCH</span>
          </div>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Contact Us
          </h2>
          <p className="text-base md:text-lg text-blue-200/80 max-w-2xl mx-auto">
            Let's build something amazing together
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="space-y-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-6 md:p-8 shadow-lg hover:shadow-[0_0_24px_rgba(34,211,238,0.2)] focus-within:shadow-[0_0_24px_rgba(34,211,238,0.2)] transition-all duration-300"
          >
            {/* Success/Error Message */}
            {status === 'success' && (
              <div className="flex items-center gap-3 p-4 bg-green-500/10 border border-green-400/30 rounded-2xl text-green-400 animate-fadeIn">
                <CheckCircle size={20} className="flex-shrink-0" />
                <span className="text-sm font-medium">Message sent successfully! We'll get back to you soon.</span>
              </div>
            )}
            
            {status === 'error' && (
              <div className="flex items-center gap-3 p-4 bg-red-500/10 border border-red-400/30 rounded-2xl text-red-400 animate-fadeIn">
                <AlertCircle size={20} className="flex-shrink-0" />
                <span className="text-sm font-medium">Oops! Something went wrong. Please try again.</span>
              </div>
            )}

            {/* Name Field */}
            <div className="relative">
              <input 
                type="text" 
                id="name" 
                name="name"
                required 
                className="peer w-full bg-brandBlue-dark/50 border border-white/10 rounded-2xl px-4 py-3 text-white placeholder-transparent focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-200" 
                placeholder="Your Name"
              />
              <label 
                htmlFor="name" 
                className="absolute left-4 -top-2.5 text-cyan-400 text-sm font-medium bg-brandBlue-darkest px-2 transition-all duration-200 peer-placeholder-shown:text-base peer-placeholder-shown:text-blue-200/50 peer-placeholder-shown:top-3 peer-placeholder-shown:bg-transparent peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-cyan-400 peer-focus:bg-brandBlue-darkest"
              >
                Your Name
              </label>
            </div>

            {/* Email Field */}
            <div className="relative">
              <input 
                type="email" 
                id="email" 
                name="email"
                required 
                className="peer w-full bg-brandBlue-dark/50 border border-white/10 rounded-2xl px-4 py-3 text-white placeholder-transparent focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-200" 
                placeholder="Your Email"
              />
              <label 
                htmlFor="email" 
                className="absolute left-4 -top-2.5 text-cyan-400 text-sm font-medium bg-brandBlue-darkest px-2 transition-all duration-200 peer-placeholder-shown:text-base peer-placeholder-shown:text-blue-200/50 peer-placeholder-shown:top-3 peer-placeholder-shown:bg-transparent peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-cyan-400 peer-focus:bg-brandBlue-darkest"
              >
                Your Email
              </label>
            </div>

            {/* Subject Field */}
            <div className="relative">
              <input 
                type="text" 
                id="subject" 
                name="subject"
                required 
                className="peer w-full bg-brandBlue-dark/50 border border-white/10 rounded-2xl px-4 py-3 text-white placeholder-transparent focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-200" 
                placeholder="Subject"
              />
              <label 
                htmlFor="subject" 
                className="absolute left-4 -top-2.5 text-cyan-400 text-sm font-medium bg-brandBlue-darkest px-2 transition-all duration-200 peer-placeholder-shown:text-base peer-placeholder-shown:text-blue-200/50 peer-placeholder-shown:top-3 peer-placeholder-shown:bg-transparent peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-cyan-400 peer-focus:bg-brandBlue-darkest"
              >
                Subject
              </label>
            </div>

            {/* Message Field */}
            <div className="relative">
              <textarea 
                id="message" 
                name="message"
                rows="5" 
                required 
                className="peer w-full bg-brandBlue-dark/50 border border-white/10 rounded-2xl px-4 py-3 text-white placeholder-transparent focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-200 resize-none" 
                placeholder="Your Message"
              />
              <label 
                htmlFor="message" 
                className="absolute left-4 -top-2.5 text-cyan-400 text-sm font-medium bg-brandBlue-darkest px-2 transition-all duration-200 peer-placeholder-shown:text-base peer-placeholder-shown:text-blue-200/50 peer-placeholder-shown:top-3 peer-placeholder-shown:bg-transparent peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-cyan-400 peer-focus:bg-brandBlue-darkest"
              >
                Your Message
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={status === 'submitting'}
              className="group relative w-full px-8 py-4 bg-gradient-to-r from-blue-400 to-cyan-300 text-brandBlue-darkest rounded-2xl font-heading font-semibold overflow-hidden hover:scale-105 hover:shadow-[0_0_24px_rgba(34,211,238,0.5)] transition-all duration-300 shadow-lg shadow-blue-500/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 cursor-pointer"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                {status === 'submitting' ? (
                  <>
                    <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send size={20} />
                  </>
                )}
              </span>
            </button>

            {/* Honeypot field to prevent spam */}
            <input type="text" name="_gotcha" style={{ display: 'none' }} tabIndex="-1" autoComplete="off" />
          </form>

          {/* Contact Info */}
          <div className="space-y-6">
            <div className="flex items-start gap-4 group bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-6 hover:bg-white/10 hover:shadow-[0_0_24px_rgba(34,211,238,0.2)] transition-all duration-300 cursor-pointer">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-cyan-300 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                <Mail className="w-6 h-6 text-brandBlue-darkest" />
              </div>
              <div>
                <h3 className="text-lg font-heading font-semibold text-white mb-1">Email</h3>
                <a 
                  href="mailto:contact@cosdevs.com"
                  className="text-sm md:text-base text-blue-200/70 hover:text-cyan-400 transition-colors duration-200"
                >
                  contact@cosdevs.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4 group bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-6 hover:bg-white/10 hover:shadow-[0_0_24px_rgba(34,211,238,0.2)] transition-all duration-300 cursor-pointer">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-cyan-300 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                <Phone className="w-6 h-6 text-brandBlue-darkest" />
              </div>
              <div>
                <h3 className="text-lg font-heading font-semibold text-white mb-1">Phone</h3>
                <a 
                  href="tel:+639085608811"
                  className="text-sm md:text-base text-blue-200/70 hover:text-cyan-400 transition-colors duration-200"
                >
                  (+63) 908 560 8811
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4 group bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-6 hover:bg-white/10 hover:shadow-[0_0_24px_rgba(34,211,238,0.2)] transition-all duration-300 cursor-pointer">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-cyan-300 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                <MapPin className="w-6 h-6 text-brandBlue-darkest" />
              </div>
              <div>
                <h3 className="text-lg font-heading font-semibold text-white mb-1">Location</h3>
                <p className="text-sm md:text-base text-blue-200/70">
                  Bacolod City, Negros Island<br />Philippines, 6100
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Animation */}
      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </section>
  )
}