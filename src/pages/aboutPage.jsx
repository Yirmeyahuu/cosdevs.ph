import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBriefcase, FaExternalLinkAlt } from 'react-icons/fa';

import poypoyImg from '../assets/images/teamProfile/poypoy.png';
import bayerImg from '../assets/images/teamProfile/bayer.png';
import roqueImg from '../assets/images/teamProfile/roque.png';
import wenardImg from '../assets/images/teamProfile/wenard.png';
import jhinwooImg from '../assets/images/teamProfile/jhinwoo.png';
import johnImg from '../assets/images/teamProfile/john.png';


const teamMembers = [
  {
    id: 1,
    name: 'Jeremiah P. Pantaras',
    nickname: 'Poypoy',
    position: 'Founder · Junior Software Engineer · Full Stack Developer',
    mantra: '"Innovation is the key to progress."',
    gradient: 'from-purple-500 via-pink-400 to-yellow-300',
    image: poypoyImg,
    portfolio: {
      url: 'https://jeremiahpantaras.vercel.app/',
      projects: 15,
      experience: '5+ years',
      specialty: 'Full-Stack Development'
    }
  },
  {
    id: 2,
    name: 'Joseph Charles A. Roque',
    nickname: 'Rok',
    position: 'Co-founder · Cybersecurity Specialist · Quality Assurance · Cloud Engineer',
    mantra: '"Security is not a product, but a process."',
    gradient: 'from-blue-600 via-cyan-400 to-green-300',
    image: roqueImg,
    portfolio: {
      url: 'https://josephroque.dev',
      projects: 12,
      experience: '4+ years',
      specialty: 'Cybersecurity & QA'
    }
  },
  {
    id: 3,
    name: 'John Eric G. Bayer',
    nickname: 'Bonbon',
    position: 'Co-founder · Full Stack Developer · System Analyst',
    mantra: '"Every system is a story waiting to be told."',
    gradient: 'from-indigo-500 via-blue-400 to-cyan-300',
    image: bayerImg,
    portfolio: {
      url: 'https://johnbayer.dev',
      projects: 18,
      experience: '6+ years',
      specialty: 'System Architecture'
    }
  },
  {
    id: 4,
    name: 'Wenard Roy F. Barrera',
    nickname: 'Royroy',
    position: 'Co-founder · UI/UX Designer · Front End Developer',
    mantra: '"Design is intelligence made visible."',
    gradient: 'from-pink-500 via-red-400 to-yellow-300',
    image: wenardImg,
    portfolio: {
      url: 'https://wenardbarrera.dev',
      projects: 20,
      experience: '5+ years',
      specialty: 'UI/UX Design'
    }
  },
  {
    id: 5,
    name: 'Brian Steven G. Pajarillo',
    nickname: 'Jhinwoo',
    position: 'Co-founder · Graphic Artist · Game Developer',
    mantra: '"Creativity takes courage."',
    gradient: 'from-green-400 via-teal-400 to-blue-500',
    image: jhinwooImg,
    portfolio: {
      url: 'https://brianpajarillo.dev',
      projects: 10,
      experience: '3+ years',
      specialty: 'Game Development'
    }
  },
  {
    id: 6,
    name: 'John Michael P. Pantaras',
    nickname: 'Archael',
    position: 'Co-founder · Company Advisor · Business Strategist',
    mantra: '"Strategy is about making choices."',
    gradient: 'from-yellow-400 via-orange-400 to-red-500',
    image: johnImg,
    portfolio: {
      url: 'https://johnpantaras.dev',
      projects: 25,
      experience: '8+ years',
      specialty: 'Business Strategy'
    }
  },
];

export default function AboutPage() {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [flippedCard, setFlippedCard] = useState(null);

  const handleCardClick = (id) => {
    setFlippedCard(flippedCard === id ? null : id);
  };

  return (
    <section className="min-h-screen py-20 px-4 md:px-6 bg-gradient-to-br from-brandBlue-darkest via-brandBlue-dark to-cyan-900">
      <div className="max-w-7xl mx-auto w-full">
        {/* ...existing code... */}
        {/* Animated Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 mb-6 animate-fadeIn">
            <span className="text-sm text-cyan-400 font-medium tracking-wide">ABOUT US</span>
          </div>
          <h1 className="font-heading text-5xl md:text-6xl font-bold text-white mb-6 animate-slideDown">
            Meet COS Devs
          </h1>
          <p className="text-lg md:text-xl text-blue-200/80 max-w-2xl mx-auto animate-fadeIn">
            We are a passionate team of developers, designers, and strategists based in Bacolod City, Philippines. Our mission is to deliver modern, scalable, and impactful digital solutions for businesses and organizations worldwide.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-8 shadow-lg animate-fadeIn">
            <h2 className="text-2xl font-bold text-cyan-300 mb-4">Our Mission</h2>
            <p className="text-blue-200/70">
              To empower local businesses and small companies across Negros Island by delivering tailored, high-quality custom software solutions. We partner with our clients to simplify complex challenges, providing continuous development, maintenance, and support to ensure their digital success and sustainable growth.
            </p>
          </div>
          <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-8 shadow-lg animate-fadeIn">
            <h2 className="text-2xl font-bold text-cyan-300 mb-4">Our Vision</h2>
            <p className="text-blue-200/70">
              To be the leading custom software development company by 2030 and the trusted, long-term digital transformation partner for small and medium enterprises across the Visayas. We envision a future where our custom software solutions are integral to our clients' efficiency and competitive edge, recognized for their impact, reliability, and our unwavering commitment to their ongoing success.
            </p>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-8 shadow-lg mb-12 animate-fadeIn">
          <h2 className="text-2xl font-bold text-cyan-300 mb-4">Why Choose COS Devs?</h2>
          <ul className="list-disc pl-6 text-blue-200/70 space-y-2">
            <li>Expertise in modern frameworks and technologies</li>
            <li>Client-focused approach and transparent communication</li>
            <li>Creative solutions tailored to your needs</li>
            <li>Timely delivery and ongoing support</li>
            <li>Agile development and rapid prototyping</li>
            <li>Mobile-first, responsive, and accessible design</li>
          </ul>
        </div>

        {/* Team Cards Grid */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-cyan-300 mb-20 text-center">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {teamMembers.map((member, index) => (
              <div
                key={member.id}
                className="group relative perspective"
                style={{
                  animation: `float ${3 + index * 0.5}s ease-in-out infinite`,
                  animationDelay: `${index * 0.2}s`
                }}
                onMouseEnter={() => setHoveredCard(member.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Card Container with 3D flip */}
                <div
                  className={`relative w-full h-[440px] transition-transform duration-700 preserve-3d cursor-pointer ${
                    flippedCard === member.id ? 'rotate-y-180' : ''
                  }`}
                  onClick={() => handleCardClick(member.id)}
                >
                  {/* Front Side */}
                  <div className="absolute inset-0 backface-hidden">
                    <div className="relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg rounded-2xl p-6 border border-gray-700/50 transition-all duration-500 hover:scale-105 hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-500/20 h-full">
                      {/* Glow effect on hover */}
                      <div className={`absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-2xl blur-xl transition-opacity duration-500 ${hoveredCard === member.id ? 'opacity-100' : 'opacity-0'}`}></div>
                      
                      <div className="relative z-10">
                        {/* Profile Image */}
                        <div className="relative mb-6 mx-auto w-32 h-32 mt-10">
                          {/* Spinning rounded background */}
                          <div className={`absolute inset-0 bg-gradient-to-r ${member.gradient} rounded-full animate-spin-slow border-4 border-white z-10`}></div>
                          {/* Floating particles */}
                          <div className="absolute inset-0 pointer-events-none z-10">
                            <span className="absolute w-3 h-3 bg-white/40 rounded-full left-6 top-8 animate-particle1"></span>
                            <span className="absolute w-2 h-2 bg-white/30 rounded-full left-16 top-4 animate-particle2"></span>
                            <span className="absolute w-1.5 h-1.5 bg-white/20 rounded-full left-20 top-16 animate-particle3"></span>
                            <span className="absolute w-2.5 h-2.5 bg-white/30 rounded-full left-10 top-20 animate-particle4"></span>
                          </div>
                          {/* PNG image overlapping the background */}
                          <img
                            src={member.image}
                            alt={member.name}
                            className="absolute left-1/2 top-1/2 w-48 h-48 -translate-x-1/2 -translate-y-1/2 object-cover transition-transform duration-500 group-hover:scale-110 z-30"
                            style={{ zIndex: 10 }}
                          />
                        </div>
                  
                        {/* Name */}
                        <h3 className="text-2xl font-bold mb-2 text-center bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                          {member.name}
                        </h3>
                  
                        {/* Nickname */}
                        <p className="text-sm text-purple-400 text-center mb-3 font-semibold italic">
                          "{member.nickname}"
                        </p>
                  
                        {/* Position */}
                        <p className="text-sm text-gray-400 text-center mb-4 font-medium">
                          {member.position}
                        </p>
                  
                        {/* Divider */}
                        <div className="w-16 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent mx-auto mb-4"></div>
                  
                        {/* Mantra */}
                        <p className="text-xs text-gray-400 text-center italic leading-relaxed">
                          {member.mantra}
                        </p>
                      </div>
                  
                      {/* Hover Text Overlay - Moved to bottom to have higher z-index */}
                      <div className={`absolute inset-0 flex items-center justify-center bg-black/60 backdrop-blur-sm rounded-2xl transition-opacity duration-300 z-999 ${hoveredCard === member.id && flippedCard !== member.id ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                        <p className="text-white text-lg font-semibold tracking-wide">Tap to reveal Portfolio</p>
                      </div>
                    </div>
                  </div>

                  {/* Back Side - Portfolio */}
                  <div className="absolute inset-0 backface-hidden rotate-y-180">
                    <div className="relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg rounded-2xl p-6 border border-gray-700/50 h-full flex flex-col items-center justify-center">
                      <div className={`absolute inset-0 bg-gradient-to-r ${member.gradient} opacity-10 rounded-2xl`}></div>
                      
                      <div className="relative z-10 w-full flex flex-col items-center justify-center h-full">
                        {/* Portfolio Icon */}
                        <div className="relative mb-2 w-20 h-20">
                          <div className={`w-full h-full bg-gradient-to-r ${member.gradient} rounded-full flex items-center justify-center shadow-lg`}>
                            <FaBriefcase className="text-3xl text-white" />
                          </div>
                        </div>
                        {/* View Portfolio Button */}
                        <a
                          href={member.portfolio.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-6 px-8 py-3 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-all duration-300 hover:scale-105 border border-white/20"
                          onClick={(e) => e.stopPropagation()}
                        >
                          View Portfolio
                        </a>
                  
                        <p className="text-xs text-center text-gray-400 italic mt-8">Tap to go back</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center animate-fadeIn">
          <p className="text-blue-200/80 text-lg mb-4">
            Ready to start your next project? <br />
            <span className="text-cyan-300 font-semibold">Contact us at <a href="mailto:jeremiahpantaras@gmail.com" className="underline">contact@cosdevs.com</a></span>
          </p>
          <Link
            to="/contact"
            className="inline-block px-8 py-4 bg-gradient-to-r from-blue-400 to-cyan-300 text-brandBlue-darkest rounded-2xl font-heading font-semibold shadow-lg hover:scale-105 hover:shadow-cyan-400/30 transition-all duration-300"
          >
            Contact Us
          </Link>
        </div>
      </div>
      {/* Animations */}
      <style>{`
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
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-12px); }
        }
        @keyframes spin-slow {
          0% { transform: rotate(0deg);}
          100% { transform: rotate(360deg);}
        }
        .animate-spin-slow { animation: spin-slow 8s linear infinite; }
        @keyframes particle1 { 0%,100%{opacity:1;} 50%{opacity:0.3;} }
        .animate-particle1 { animation: particle1 3s infinite; }
        @keyframes particle2 { 0%,100%{opacity:1;} 50%{opacity:0.2;} }
        .animate-particle2 { animation: particle2 2.5s infinite; }
        @keyframes particle3 { 0%,100%{opacity:1;} 50%{opacity:0.1;} }
        .animate-particle3 { animation: particle3 2s infinite; }
        @keyframes particle4 { 0%,100%{opacity:1;} 50%{opacity:0.15;} }
        .animate-particle4 { animation: particle4 2.8s infinite; }
        
        /* 3D Flip Styles */
        .perspective { perspective: 1000px; }
        .preserve-3d { transform-style: preserve-3d; }
        .backface-hidden { backface-visibility: hidden; }
        .rotate-y-180 { transform: rotateY(180deg); }
      `}</style>
    </section>
  );
}