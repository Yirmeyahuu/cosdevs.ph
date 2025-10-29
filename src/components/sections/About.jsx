import { useState } from 'react'
import { Zap, Target, Search, Users, Rocket } from 'lucide-react'

export default function About() {
  const [activeStep, setActiveStep] = useState(0)

  const steps = [
    { 
      icon: Search, 
      number: '01',
      title: 'Discovery and Strategy',
      description: 'We dive deep into understanding your vision, goals, and challenges to create a tailored roadmap for success.',
      features: ['Requirement Analysis', 'Market Research', 'Strategic Planning']
    },
    { 
      icon: Users, 
      number: '02',
      title: 'Custom Development and Partnership',
      description: 'Our expert team brings your ideas to life with cutting-edge technology and collaborative development.',
      features: ['Agile Development', 'Regular Updates', 'Quality Assurance']
    },
    { 
      icon: Rocket, 
      number: '03',
      title: 'Launch and Ongoing Support',
      description: 'We ensure a smooth launch and provide continuous support to keep your product running at peak performance.',
      features: ['Deployment', '24/7 Monitoring', 'Maintenance & Updates']
    },
  ]

  return (
    <section id="about" className="min-h-screen py-20 px-6 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse pointer-events-none" />
      
      <div className="relative z-10 max-w-7xl mx-auto w-full">
        {/* Section Header */}
        <div className="text-center mb-16 cursor-default">
          <div className="inline-block px-4 py-2 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 mb-6">
            <span className="text-sm text-cyan-400 font-medium">WHO WE ARE</span>
          </div>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            About COS Devs
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Left Content */}
          <div>
            <h3 className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6 leading-tight cursor-default">
              We are a <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">passionate team</span> dedicated to building exceptional digital products
            </h3>
            
            {/* Mission & Vision */}
            <div className="space-y-4">
              <div className="flex items-start gap-4 group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4 hover:bg-white/10 hover:shadow-[0_0_16px_rgba(34,211,238,0.3)] transition-all duration-300 cursor-pointer">
                <div className="bg-blue-500/10 p-2 rounded-full mt-1 flex-shrink-0">
                  <Zap className="text-cyan-400" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-white mb-1">Our Mission</h4>
                  <p className="text-sm md:text-base text-blue-200/70">To empower local businesses and small companies across Negros Island by delivering tailored, high-quality custom software solutions. We partner with our clients to simplify complex challenges, providing continuous development, maintenance, and support to ensure their digital success and sustainable growth.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4 hover:bg-white/10 hover:shadow-[0_0_16px_rgba(34,211,238,0.3)] transition-all duration-300 cursor-pointer">
                <div className="bg-blue-500/10 p-2 rounded-full mt-1 flex-shrink-0">
                  <Target className="text-cyan-400" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-white mb-1">Our Vision</h4>
                  <p className="text-sm md:text-base text-blue-200/70">To be the leading custom software development company by 2030 and the trusted, long-term digital transformation partner for small and medium enterprises across the Visayas. We envision a future where our custom software solutions are integral to our clients' efficiency and competitive edge, recognized for their impact, reliability, and our unwavering commitment to their ongoing success.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Interactive Process */}
          <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm p-6 md:p-8 rounded-3xl border border-white/10 shadow-xl h-full">
            <h3 className="text-xl md:text-2xl font-heading font-bold text-center text-white mb-8">
              Our Streamlined Process
            </h3>
            
            {/* Desktop View - Vertical Timeline */}
            <div className="hidden md:block relative">
              {/* Animated Progress Line */}
              <div className="absolute left-[30px] top-[80px] bottom-[80px] w-0.5 bg-slate-700/50" />
              <div 
                className="absolute left-[30px] top-[72px] w-0.5 bg-gradient-to-b from-cyan-400 to-blue-400 transition-all duration-700 ease-out"
                style={{ height: `calc(${(activeStep / (steps.length - 1)) * 50}% - 0px)` }}
              />
              
              <div className="space-y-6">
                {steps.map((step, index) => {
                  const Icon = step.icon
                  const isActive = activeStep === index
                  const isPast = index < activeStep
                  
                  return (
                    <div
                      key={index}
                      onClick={() => setActiveStep(index)}
                      tabIndex={0}
                      className="relative group cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded-2xl transition-all duration-300"
                    >
                      <div className={`flex items-start gap-6 p-4 rounded-2xl transition-all duration-300 ${
                        isActive ? ' shadow-[0_0_24px_rgba(34,211,238,0.3)]' : 'hover:bg-white/5'
                      }`}>
                        {/* Icon Circle */}
                        <div className={`relative flex-shrink-0 w-[60px] h-[60px] rounded-2xl flex items-center justify-center z-10 transition-all duration-300 ${
                          isActive || isPast
                            ? 'bg-gradient-to-br from-cyan-400 to-blue-400 shadow-[0_0_20px_rgba(34,211,238,0.5)]'
                            : 'bg-brandBlue-dark border-2 border-slate-700 group-hover:border-cyan-400/50'
                        }`}>
                          <Icon 
                            className={`transition-all duration-300 ${
                              isActive || isPast ? 'text-brandBlue-darkest scale-110' : 'text-cyan-400 group-hover:text-cyan-300'
                            }`} 
                            size={28} 
                          />
                          {/* Step Number Badge */}
                          <div className={`absolute -top-2 -right-2 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300 ${
                            isActive || isPast
                              ? 'bg-cyan-400 text-brandBlue-darkest'
                              : 'bg-slate-700 text-cyan-400'
                          }`}>
                            {step.number}
                          </div>
                        </div>

                        {/* Content */}
                        <div className="flex-1 pt-1">
                          <h4 className={`font-heading text-lg md:text-xl font-bold mb-2 transition-colors duration-300 ${
                            isActive ? 'text-cyan-300' : 'text-white group-hover:text-cyan-400'
                          }`}>
                            {step.title}
                          </h4>
                          
                          {/* Expandable Description */}
                          <div className={`overflow-hidden transition-all duration-500 ${
                            isActive ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                          }`}>
                            <p className="text-sm text-blue-200/80 mb-4 leading-relaxed">
                              {step.description}
                            </p>
                            <div className="flex flex-wrap gap-2">
                              {step.features.map((feature, i) => (
                                <span
                                  key={i}
                                  className="px-3 py-1 bg-cyan-500/10 text-cyan-300 text-xs font-medium rounded-full border border-cyan-400/20"
                                >
                                  {feature}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Mobile View - Card Swiper */}
            <div className="md:hidden">
              <div className="space-y-4">
                {steps.map((step, index) => {
                  const Icon = step.icon
                  const isActive = activeStep === index
                  
                  return (
                    <div
                      key={index}
                      onClick={() => setActiveStep(index)}
                      className={`relative p-5 rounded-2xl border-2 transition-all duration-300 cursor-pointer ${
                        isActive 
                          ? 'bg-white/10 border-cyan-400/70 shadow-[0_0_24px_rgba(34,211,238,0.3)]'
                          : 'bg-white/5 border-white/10 hover:border-cyan-400/30'
                      }`}
                    >
                      {/* Header */}
                      <div className="flex items-center gap-4 mb-3">
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${
                          isActive
                            ? 'bg-gradient-to-br from-cyan-400 to-blue-400'
                            : 'bg-brandBlue-dark'
                        }`}>
                          <Icon 
                            className={isActive ? 'text-brandBlue-darkest' : 'text-cyan-400'} 
                            size={24} 
                          />
                        </div>
                        <div className="flex-1">
                          <div className="text-xs text-cyan-400 font-semibold mb-1">STEP {step.number}</div>
                          <h4 className={`font-heading text-base font-bold transition-colors duration-300 ${
                            isActive ? 'text-cyan-300' : 'text-white'
                          }`}>
                            {step.title}
                          </h4>
                        </div>
                      </div>

                      {/* Expandable Content */}
                      <div className={`overflow-hidden transition-all duration-500 ${
                        isActive ? 'max-h-96 opacity-100 mt-3' : 'max-h-0 opacity-0'
                      }`}>
                        <p className="text-sm text-blue-200/80 mb-3 leading-relaxed">
                          {step.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {step.features.map((feature, i) => (
                            <span
                              key={i}
                              className="px-2.5 py-1 bg-cyan-500/10 text-cyan-300 text-xs font-medium rounded-full border border-cyan-400/20"
                            >
                              {feature}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Expand Indicator */}
                      <div className={`mt-3 text-center text-xs text-cyan-400 transition-all duration-300 ${
                        isActive ? 'opacity-0' : 'opacity-60'
                      }`}>
                        Tap to expand
                      </div>
                    </div>
                  )
                })}
              </div>

              {/* Progress Dots */}
              <div className="flex justify-center gap-2 mt-6">
                {steps.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveStep(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      activeStep === index
                        ? 'w-8 bg-gradient-to-r from-cyan-400 to-blue-400'
                        : 'bg-slate-600 hover:bg-slate-500'
                    }`}
                    aria-label={`Go to step ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}