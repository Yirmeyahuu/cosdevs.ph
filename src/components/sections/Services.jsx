import { Layers, Brush, Smartphone, Server, Code, Users } from 'lucide-react'
import ShinyText from '../ui/ShinyText'
import ScrollReveal from '../ui/ScrollReveal'

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
  {
    icon: Users,
    title: 'Consulting & Training',
    description: 'Expert advice, workshops, and training for teams and organizations'
  },
]

export default function Services() {
  return (
    <section id="services" className="min-h-screen py-20 px-6 relative">
      <div className="max-w-7xl mx-auto w-full">
        {/* Section Header */}
        <ScrollReveal direction="up" delay={0.1}>
          <div className="text-left mb-16">
            <h2 className="font-heading text-4xl md:text-5xl lg:text-5xl font-bold mb-6 cursor-default">
              <ShinyText 
                text="Services we Offer" 
                disabled={false} 
                speed={5} 
                className=""
              />
            </h2>
          </div>
        </ScrollReveal>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <ScrollReveal 
                key={index} 
                direction="up" 
                delay={0.1 + (index * 0.1)}
                duration={0.5}
              >
                <div
                  className="group bg-white/5 backdrop-blur-sm rounded-3xl p-6 md:p-8 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-102 hover:shadow-[0_0_24px_rgba(34,211,238,0.2)] focus-within:shadow-[0_0_24px_rgba(34,211,238,0.2)] focus-within:scale-105 cursor-pointer h-full"
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
              </ScrollReveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}