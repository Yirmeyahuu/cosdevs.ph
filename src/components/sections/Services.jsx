import { Layers, Brush, Smartphone, Server, Code } from 'lucide-react'

const services = [
  {
    icon: Layers,
    title: 'Custom Software Development',
    description: 'Bespoke solutions tailored to your unique business needs, designed for scalability and performance.',
  },
  {
    icon: Brush,
    title: 'UI/UX Design',
    description: 'Intuitive and beautiful interfaces that provide a seamless user experience and drive engagement.',
  },
  {
    icon: Code,
    title: 'Web Application Development',
    description: 'Modern, responsive, and powerful web apps built with the latest technologies to elevate your online presence.',
  },
  {
    icon: Smartphone,
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile applications for iOS and Android that captivate your users.',
  },
  {
    icon: Server,
    title: 'Maintenance & Support',
    description: 'Ongoing support, updates, and maintenance to ensure your systems run smoothly and securely.',
  },
]

export default function Services() {
  return (
    <section id="services" className="min-h-screen py-20 px-6 relative">
      <div className="max-w-7xl mx-auto w-full">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 mb-6 cursor-default">
            <span className="text-sm text-cyan-400 font-medium">WHAT WE DO</span>
          </div>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 cursor-default">
            Our Services
          </h2>
          <p className="text-base md:text-lg text-blue-200/80 max-w-2xl mx-auto cursor-default">
            Comprehensive solutions tailored to bring your digital vision to life
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                className="group bg-white/5 backdrop-blur-sm rounded-3xl p-6 md:p-8 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_24px_rgba(34,211,238,0.2)] focus-within:shadow-[0_0_24px_rgba(34,211,238,0.2)] focus-within:scale-105 cursor-pointer"
                tabIndex={0}
              >
                {/* Icon */}
                <div className="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-blue-400 to-cyan-300 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon size={28} className="text-brandBlue-darkest" />
                </div>

                {/* Content */}
                <h3 className="font-heading text-xl md:text-2xl font-bold text-white mb-4 group-hover:text-cyan-300 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-sm md:text-base text-blue-200/70 leading-relaxed">
                  {service.description}
                </p>
              </div>
            )
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 bg-gradient-to-r from-blue-400 to-cyan-300 text-brandBlue-darkest rounded-2xl font-heading font-semibold hover:scale-105 transition-all duration-300 shadow-lg shadow-blue-500/30 hover:shadow-[0_0_24px_rgba(34,211,238,0.5)] focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 cursor-pointer"
          >
            Let's Build Something Amazing
          </button>
        </div>
      </div>
    </section>
  )
}