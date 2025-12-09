import React from 'react';
import { FaLaptopCode, FaMobileAlt, FaShieldAlt, FaPalette, FaCloud, FaUsers } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const services = [
  {
    title: 'Web Development',
    description: 'Custom, scalable, and high-performance websites and web apps using modern frameworks.',
    icon: <FaLaptopCode className="text-cyan-400" size={32} />,
  },
  {
    title: 'Mobile App Development',
    description: 'Intuitive and robust mobile applications for iOS and Android platforms.',
    icon: <FaMobileAlt className="text-cyan-400" size={32} />,
  },
  {
    title: 'Cybersecurity & QA',
    description: 'Comprehensive security audits, penetration testing, and quality assurance services.',
    icon: <FaShieldAlt className="text-cyan-400" size={32} />,
  },
  {
    title: 'UI/UX & Graphic Design',
    description: 'Modern, user-centered design for web, mobile, and branding assets.',
    icon: <FaPalette className="text-cyan-400" size={32} />,
  },
  {
    title: 'Cloud & DevOps',
    description: 'Cloud infrastructure setup, CI/CD pipelines, and scalable deployments.',
    icon: <FaCloud className="text-cyan-400" size={32} />,
  },
  {
    title: 'Consulting & Training',
    description: 'Expert advice, workshops, and training for teams and organizations.',
    icon: <FaUsers className="text-cyan-400" size={32} />,
  },
];

export default function ServicesPage() {
  return (
    <section className="min-h-screen py-20 pt-40 px-4 md:px-6 bg-gradient-to-br from-brandBlue-darkest via-brandBlue-dark to-cyan-900">
      <div className="max-w-7xl mx-auto w-full animate-pageFadeIn">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-white mb-4">
            Our Services
          </h1>
          <p className="text-lg text-blue-200/80 max-w-2xl mx-auto">
            Discover how we help businesses grow with technology, design, and expertise.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, idx) => (
            <div
              key={service.title}
              className="group relative bg-slate-900/70 border border-slate-800 rounded-2xl p-8 shadow-lg hover:shadow-cyan-400/10 transition-all duration-300"
            >
              <div className="flex items-center justify-center mb-6">
                {service.icon}
              </div>
              <h3 className="text-lg font-bold text-white mb-2 text-center group-hover:text-cyan-400 transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-blue-200/80 text-center mb-4">{service.description}</p>
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="px-3 py-1 bg-cyan-400/10 text-cyan-300 rounded-full text-xs font-semibold">Learn More</span>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-cyan-300 mb-4">Ready to elevate your business?</h2>
          <p className="text-blue-200/80 mb-6">
            Contact us for a free consultation and let’s build something amazing together!
          </p>
          <Link
            to="/contact"
            className="inline-block px-8 py-4 bg-cyan-400 text-brandBlue-darkest rounded-2xl font-heading font-semibold shadow-lg hover:scale-105 hover:shadow-cyan-400/30 transition-all duration-300"
          >
            Get Started
          </Link>
        </div>
      </div>
      {/* Animations */}
      <style>{`
        @keyframes pageFadeIn {
          from { opacity: 0; transform: translateY(40px);}
          to { opacity: 1; transform: translateY(0);}
        }
        .animate-pageFadeIn {
          animation: pageFadeIn 0.8s cubic-bezier(.4,0,.2,1) both;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px);}
          to { opacity: 1; transform: translateY(0);}
        }
        .animate-fadeIn { animation: fadeIn 0.7s cubic-bezier(.4,0,.2,1) both; }
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-40px);}
          to { opacity: 1; transform: translateY(0);}
        }
        .animate-slideDown { animation: slideDown 0.7s cubic-bezier(.4,0,.2,1) both; }
      `}</style>
    </section>
  );
}