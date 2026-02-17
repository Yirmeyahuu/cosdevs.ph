import React, { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { FaLinkedin, FaGithub, FaTwitter, FaGlobe } from 'react-icons/fa';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

import poypoyImg from '../assets/images/teamProfile/poypoy.webp';
import bayerImg from '../assets/images/teamProfile/bayer.webp';
import roqueImg from '../assets/images/teamProfile/roque.webp';
import wenardImg from '../assets/images/teamProfile/wenard.webp';
import jhinwooImg from '../assets/images/teamProfile/jhinwoo.webp';
import johnImg from '../assets/images/teamProfile/john.webp';
import mahinayImg from '../assets/images/teamProfile/kenken.webp';

const teamMembers = [
  {
    id: 1,
    name: 'Jeremiah',
    nickname: 'Pantaras',
    position: 'Founder · Software Engineer · Full Stack Developer',
    gradient: 'from-purple-500 via-pink-400 to-yellow-300',
    image: poypoyImg,
    handle: '@jeremiahpantaras',
    portfolio: { url: 'https://jeremiah.cosedevs.com/' }
  },
  {
    id: 2,
    name: 'John Michael',
    nickname: 'Pantaras',
    position: 'Co-founder · Company Advisor · Business Strategist',
    gradient: 'from-yellow-400 via-orange-400 to-red-500',
    image: johnImg,
    handle: '@Archael2025',
    portfolio: { url: '#' }
  },
    {
    id: 3,
    name: 'Brian Steven',
    nickname: 'Pajarillo',
    position: 'Co-founder · Graphic Artist · Game Developer',
    gradient: 'from-green-400 via-teal-400 to-blue-500',
    image: jhinwooImg,
    handle: '@Jhinwoo2025',
    portfolio: { url: '#' }
  },
  {
    id: 4,
    name: 'Joseph Charles',
    nickname: 'Roque',
    position: 'Co-founder · Cybersecurity Specialist · Quality Assurance · Cloud Engineer',
    gradient: 'from-blue-600 via-cyan-400 to-green-300',
    image: roqueImg,
    handle: '@Roque2025',
    portfolio: { url: 'https://caelum.cosedevs.com/' }
  },
  {
    id: 5,
    name: 'Krishnan',
    nickname: 'Mahinay',
    position: 'Co-founder · Cybersecurity Specialist · Quality Assurance',
    gradient: 'from-red-600 via-rose-400 to-red-300',
    image: mahinayImg,
    handle: '@Kinkin2025',
    portfolio: { url: 'https://kerokenn.cosedevs.com/' }
  },
  {
    id: 6,
    name: 'John Eric',
    nickname: 'Bayer',
    position: 'Co-founder · Full Stack Developer · System Analyst',
    gradient: 'from-indigo-500 via-blue-400 to-cyan-300',
    image: bayerImg,
    handle: '@Bonbon2025',
    portfolio: { url: 'https://gengarit.cosedevs.com/' }
  },
  {
    id: 7,
    name: 'Wenard Roy',
    nickname: 'Barrera',
    position: 'Co-founder · UI/UX Designer · Front End Developer',
    gradient: 'from-pink-500 via-red-400 to-yellow-300',
    image: wenardImg,
    handle: '@Royroy2025',
    portfolio: { url: 'https://kr1stik.cosedevs.com/' }
  }
];

export default function AboutPage() {
  const [hoveredCard, setHoveredCard] = useState(null);

  // Create autoplay plugin instance
  const autoplayPlugin = Autoplay({ 
    delay: 3000, 
    stopOnInteraction: false,
    stopOnMouseEnter: true, // Pause on hover
    playOnInit: true
  });

  // Embla Carousel setup with autoplay
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { 
      loop: true,
      align: 'start',
      skipSnaps: false,
      dragFree: false,
      containScroll: 'trimSnaps'
    },
    [autoplayPlugin]
  );

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  // Handle card hover to pause autoplay
  const handleCardHover = useCallback((memberId) => {
    setHoveredCard(memberId);
    if (autoplayPlugin) {
      autoplayPlugin.stop();
    }
  }, [autoplayPlugin]);

  const handleCardLeave = useCallback(() => {
    setHoveredCard(null);
    if (autoplayPlugin) {
      autoplayPlugin.play();
    }
  }, [autoplayPlugin]);

  return (
    <section className="min-h-screen py-20 pt-40 px-4 md:px-6 bg-gradient-to-br from-brandBlue-darkest via-brandBlue-dark to-cyan-900">
      <div className="max-w-7xl mx-auto w-full">
        {/* Header Section */}
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

        {/* Team Cards Carousel */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-cyan-300 mb-12 text-center">Our Team</h2>
          
          <div className="relative py-4">
            {/* Carousel Container */}
            <div className="overflow-hidden px-2" ref={emblaRef}>
              <div className="flex" style={{ marginLeft: '-1.5 rem', padding:'24px' }}>
                {teamMembers.map((member) => (
                  <div
                    key={member.id}
                    className="group relative flex-shrink-0 pl-8"
                    style={{ flexBasis: '280px', minWidth: 0 }}
                    onMouseEnter={() => handleCardHover(member.id)}
                    onMouseLeave={handleCardLeave}
                  >
                    <div className="relative bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl rounded-3xl overflow-hidden border border-slate-700/50 transition-all duration-500 hover:scale-105  h-[450px]">
                      {/* Gradient Background */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${member.gradient} opacity-20`}></div>
                      
                      {/* Glow effects */}
                      <div className="absolute top-0 left-0 w-32 h-32 bg-white/20 rounded-full blur-3xl"></div>
                      <div className="absolute bottom-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-3xl"></div>
                      
                      <div className="relative z-10 p-6 h-full flex flex-col">
                        {/* Profile Image */}
                        <div className="relative mb-4 mx-auto w-full h-48 flex items-end justify-center overflow-visible">
                          <img
                            src={member.image}
                            alt={member.name}
                            className="h-full w-auto object-contain transition-transform duration-500 group-hover:scale-105"
                          />
                        </div>
                        
                        {/* Content */}
                        <div className="flex-1 flex flex-col">
                          {/* Name & Nickname */}
                          <div className="mb-3">
                            <h3 className="text-2xl font-bold text-white mb-1">
                              {member.nickname},
                            </h3>
                            <h4 className="text-lg font-medium text-white">
                              {member.name}
                            </h4>
                          </div>
                          
                          {/* Position */}
                          <p className="text-xs text-gray-300 mb-4 line-clamp-2">
                            {member.position}
                          </p>
                          
                          {/* Handle */}
                          <p className="text-sm text-cyan-400 mb-4 mt-auto">
                            {member.handle}
                          </p>
                          
                          {/* Social Icons */}
                          <div className="flex gap-3">
                            <a
                              href={member.portfolio.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-all duration-300 border border-white/20"
                              onClick={(e) => e.stopPropagation()}
                            >
                              <FaGlobe className="text-white text-sm" />
                            </a>
                            <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center border border-white/20">
                              <FaGithub className="text-white text-sm" />
                            </div>
                            <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center border border-white/20">
                              <FaLinkedin className="text-white text-sm" />
                            </div>
                            <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center border border-white/20">
                              <FaTwitter className="text-white text-sm" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
        
            {/* Navigation Buttons */}
            <button
              onClick={scrollPrev}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 border border-white/20 z-10"
              aria-label="Previous slide"
            >
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={scrollNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 border border-white/20 z-10"
              aria-label="Next slide"
            >
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
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
        .animate-slideDown { animation: slideDown 0.2s cubic-bezier(.4,0,.2,1) both; }
      `}</style>
    </section>
  );
}