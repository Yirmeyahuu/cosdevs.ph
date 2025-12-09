import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiPython, SiDjango, SiPostgresql, SiFirebase, SiUnity, SiNodedotjs } from 'react-icons/si';
import { FiExternalLink } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import satoruLogo from '../assets/images/satorulogo.webp';
import avendroLogo from '../assets/images/avendrologo.webp';
import posLogo from '../assets/images/poslogo.webp';
import sentinelsLogo from '../assets/images/sentinelslogo.webp';
import tabangLogo from '../assets/images/tabanglogo.webp';

const projects = [
  {
    title: 'Satoru',
    description: 'A web application designed to intelligently summarize and extract key information from uploaded documents, providing users with quick, distilled insights.',
    tags: ['React', 'REST Framework', 'GSAP', 'Python', 'Django', 'PostgreSQL', 'Tailwind CSS'],
    logo: satoruLogo,
    link: 'https://satoru-chi.vercel.app/',
    gradient: 'from-indigo-900/40 via-purple-900/40 to-pink-900/40',
    techStack: [
      { icon: SiReact, color: "text-cyan-400" },
      { icon: SiPython, color: "text-yellow-300" },
      { icon: SiPostgresql, color: "text-blue-400" },
      { icon: SiTailwindcss, color: "text-cyan-300" },
    ],
  },
  {
    title: 'Avendro',
    description: 'A comprehensive lending management system built with Django, designed to streamline loan operations and financial management for lending institutions.',
    tags: ['Python', 'Django', 'PostgreSQL', 'Tailwind CSS'],
    logo: avendroLogo,
    link: 'https://avendrobcd.onrender.com/',
    gradient: 'from-blue-900/40 via-cyan-900/40 to-teal-900/40',
    techStack: [
      { icon: SiPython, color: "text-yellow-300" },
      { icon: SiDjango, color: "text-green-600" },
      { icon: SiPostgresql, color: "text-blue-400" },
      { icon: SiTailwindcss, color: "text-cyan-300" },
    ],
  },
  {
    title: 'Point of Sale System',
    description: 'A point of sale (POS) system for retail businesses, featuring inventory management, sales tracking, and customer management functionalities.',
    tags: ['Python', 'Django', 'React', 'PostgreSQL'],
    logo: posLogo,
    link: 'https://example.com/pos',
    gradient: 'from-emerald-900/40 via-green-900/40 to-lime-900/40',
    techStack: [
      { icon: SiPython, color: "text-yellow-300" },
      { icon: SiDjango, color: "text-green-600" },
      { icon: SiReact, color: "text-cyan-400" },
      { icon: SiPostgresql, color: "text-blue-400" },
    ],
  },
  {
    title: 'Sentinels - Gamified Cybersecurity',
    description: 'An engaging mobile game with multiplayer functionality, leaderboards, and in-app purchases focused on cybersecurity education.',
    tags: ['Unity', 'C#', 'Firebase', 'Python', 'Django', 'PostgreSQL'],
    logo: sentinelsLogo,
    link: 'https://drive.google.com/file/d/1dB0u3wjIOWzKIGJtJPzDSgzceLOgFC2-/view',
    gradient: 'from-orange-900/40 via-red-900/40 to-pink-900/40',
    techStack: [
      { icon: SiUnity, color: "text-white" },
      { icon: SiFirebase, color: "text-yellow-400" },
      { icon: SiPython, color: "text-yellow-300" },
      { icon: SiPostgresql, color: "text-blue-400" },
    ],
  },
  {
    title: 'Student Management System',
    description: 'A comprehensive dashboard for educational institutions with data visualization, analytics, and reporting tools for student management.',
    tags: ['Python', 'Django', 'Firebase', 'PostgreSQL'],
    logo: sentinelsLogo,
    link: 'https://sentinelsadmin.onrender.com/',
    gradient: 'from-violet-900/40 via-purple-900/40 to-fuchsia-900/40',
    techStack: [
      { icon: SiPython, color: "text-yellow-300" },
      { icon: SiDjango, color: "text-green-600" },
      { icon: SiFirebase, color: "text-yellow-400" },
      { icon: SiPostgresql, color: "text-blue-400" },
    ],
  },
  {
    title: 'Tabang Negros',
    description: 'A modern, real-time emergency help request system designed for Negros Island, Philippines. This full-stack web application allows users to quickly send emergency requests with their exact location to responders.',
    tags: ['React', 'Leaflet', 'Python', 'Django', 'PostgreSQL', 'Cloudinary'],
    logo: tabangLogo,
    link: 'https://tabangnegros-installation.vercel.app/',
    gradient: 'from-sky-900/40 via-blue-900/40 to-indigo-900/40',
    techStack: [
      { icon: SiReact, color: "text-cyan-400" },
      { icon: SiPython, color: "text-yellow-300" },
      { icon: SiDjango, color: "text-green-600" },
      { icon: SiPostgresql, color: "text-blue-400" },
    ],
  },
];

export default function WorkPage() {
  return (
    <section className="min-h-screen py-20 pt-40 px-4 md:px-6 bg-gradient-to-br from-brandBlue-darkest via-brandBlue-dark to-cyan-900 animate-pageFadeIn">
      <div className="max-w-7xl mx-auto w-full">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Our Work
          </h1>
          <p className="text-base md:text-lg text-blue-200/80 max-w-2xl mx-auto">
            Explore a selection of our featured projects and case studies. Each project showcases our commitment to quality, innovation, and client success.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-white/5 backdrop-blur-sm rounded-3xl overflow-hidden border border-white/10 transition-all duration-300 cursor-pointer"
            >
              {/* Project Card Background with Logo */}
              <div className="w-full h-64 relative overflow-hidden flex items-center justify-center">
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient}`}></div>
                
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black/50"></div>
                
                {/* Logo */}
                <img
                  src={project.logo}
                  alt={`${project.title} logo`}
                  className="relative z-10 w-32 h-32 object-contain opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                />
              </div>

              {/* Project Info - Always Visible */}
              <div className="p-6">
                <h3 className="font-heading text-lg md:text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-sm text-blue-200/70 mb-4 leading-relaxed line-clamp-3">
                  {project.description}
                </p>
                
                {/* Tech Stack Icons */}
                <div className="flex gap-2 mb-4">
                  {project.techStack.map((tech, i) => {
                    const Icon = tech.icon;
                    return (
                      <div key={i} className="bg-black/40 backdrop-blur-md p-2 rounded-lg border border-white/10 group-hover:bg-black/60 transition-colors duration-300">
                        <Icon className={`text-lg ${tech.color}`} />
                      </div>
                    );
                  })}
                </div>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.slice(0, 3).map((tag, i) => (
                    <span
                      key={i}
                      className="text-xs font-semibold bg-cyan-500/10 text-cyan-300 px-3 py-1 rounded-full hover:bg-cyan-500/20 hover:scale-105 transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Visit Website Button */}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 font-semibold rounded-lg border border-cyan-400/30 hover:border-cyan-400/50 transition-all duration-300 backdrop-blur-sm group/btn w-full justify-center"
                  onClick={(e) => e.stopPropagation()}
                >
                  <span>Visit Website</span>
                  <FiExternalLink className="text-base group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform duration-300" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-cyan-300 mb-4">Ready to build something amazing?</h2>
          <p className="text-blue-200/80 mb-6">
            We're passionate about turning ideas into reality. Let's collaborate on your next project!
          </p>
          <Link
            to="/contact"
            className="inline-block px-8 py-4 bg-gradient-to-r from-blue-400 to-cyan-300 text-brandBlue-darkest rounded-2xl font-heading font-semibold shadow-lg hover:scale-105 hover:shadow-cyan-400/30 transition-all duration-300"
          >
            Contact Us
          </Link>
        </div>
      </div>

      {/* Custom Animation */}
      <style>{`
        @keyframes pageFadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-pageFadeIn {
          animation: pageFadeIn 0.5s cubic-bezier(.4,0,.2,1);
        }
      `}</style>
    </section>
  );
}