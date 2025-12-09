import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiPython, SiDjango, SiPostgresql, SiFirebase, SiUnity, SiNodedotjs } from 'react-icons/si';
import { FiExternalLink } from 'react-icons/fi';
import satoruLogo from '../../assets/images/satorulogo.webp';
import project2Logo from '../../assets/images/avendrologo.webp';
import project3Logo from '../../assets/images/poslogo.webp';
import project4Logo from '../../assets/images/sentinelslogo.webp';
import project5Logo from '../../assets/images/tabanglogo.webp';
import ShinyText from '../ui/ShinyText';
import ScrollReveal from '../ui/ScrollReveal';

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
    description: 'A comprehensive lending management system built with Django, designed to streamline loan operations and financial management for lending institutions. ',
    tags: ['Next.js', 'TypeScript', 'Firebase', 'Tailwind CSS'],
    logo: project2Logo,
    link: 'https://avendrobcd.onrender.com/',
    gradient: 'from-blue-900/40 via-cyan-900/40 to-teal-900/40',
    techStack: [
      { icon: SiNextdotjs, color: "text-white" },
      { icon: SiTypescript, color: "text-blue-500" },
      { icon: SiFirebase, color: "text-yellow-400" },
      { icon: SiTailwindcss, color: "text-cyan-300" },
    ],
  },
  {
    title: 'Point of Sale System',
    description: 'A point of sale (POS) system for retail businesses, featuring inventory management, sales tracking, and customer management functionalities.',
    tags: ['Python', 'Django', 'React', 'PostgreSQL'],
    logo: project3Logo,
    link: 'https://example.com/lms',
    gradient: 'from-emerald-900/40 via-green-900/40 to-lime-900/40',
    techStack: [
      { icon: SiPython, color: "text-yellow-300" },
      { icon: SiDjango, color: "text-green-600" },
      { icon: SiReact, color: "text-cyan-400" },
      { icon: SiPostgresql, color: "text-blue-400" },
    ],
  },
  {
    title: 'Mobile Game Application',
    description: 'An engaging mobile game with multiplayer functionality, leaderboards, and in-app purchases.',
    tags: ['Unity', 'C#', 'Firebase', 'PostgreSQL'],
    logo: project4Logo,
    link: 'https://drive.google.com/file/d/1dB0u3wjIOWzKIGJtJPzDSgzceLOgFC2-/view',
    gradient: 'from-orange-900/40 via-red-900/40 to-pink-900/40',
    techStack: [
      { icon: SiUnity, color: "text-white" },
      { icon: SiFirebase, color: "text-yellow-400" },
      { icon: SiPostgresql, color: "text-blue-400" },
      { icon: SiTailwindcss, color: "text-cyan-300" },
    ],
  },
  {
    title: 'Student Management System with Analytics Dashboard',
    description: 'A comprehensive dashboard for business intelligence with data visualization and reporting tools.',
    tags: ['Python', 'Django','Firebase', 'PostgreSQL'],
    logo: project4Logo,
    link: 'https://sentinelsadmin.onrender.com/',
    gradient: 'from-violet-900/40 via-purple-900/40 to-fuchsia-900/40',
    techStack: [
      { icon: SiReact, color: "text-cyan-400" },
      { icon: SiTypescript, color: "text-blue-500" },
      { icon: SiNodedotjs, color: "text-green-500" },
      { icon: SiPostgresql, color: "text-blue-400" },
    ],
  },
  {
    title: 'Tabang Nebros',
    description: 'A modern, real-time emergency help request system designed for Negros Island, Philippines. This full-stack web application allows users to quiclly sen emergency request with their exact location to resonders.',
    tags: ['React','Leaflet', 'Python', 'Django', 'PostgreSQL', 'Cloudinary'],
    logo: project5Logo,
    link: 'https://tabangnegros-installation.vercel.app/',
    gradient: 'from-sky-900/40 via-blue-900/40 to-indigo-900/40',
    techStack: [
      { icon: SiReact, color: "text-white" },
      { icon: SiPython, color: "text-yellow-300" },
      { icon: SiDjango, color: "text-green-600" },
      { icon: SiPostgresql, color: "text-blue-400" },
    ],
  },
];

export default function Work() {
  return (
    <section id="work" className="min-h-screen py-20 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto w-full">
        {/* Section Header */}
        <ScrollReveal direction="up" delay={0.1}>
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl md:text-5xl lg:text-5xl font-bold mb-6 cursor-default">
              <ShinyText 
                text="Featured Projects" 
                disabled={false} 
                speed={5} 
                className=""
              />
            </h2>
          </div>
        </ScrollReveal>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[320px]">
          {projects.map((project, index) => (
            <ScrollReveal 
              key={index} 
              direction="up" 
              delay={0.1 + (index * 0.08)}
              duration={0.5}
            >
              <div className="group relative bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 transition-all duration-300 cursor-pointer h-full">
              {/* Project Card Background with Logo */}
              <div className="w-full h-full relative overflow-hidden flex items-center justify-center">
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

              {/* Project Info - Hidden by default, shown on hover */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end bg-gradient-to-t from-black/95 via-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                {/* Title */}
                <h3 className="font-heading text-xl md:text-2xl font-bold text-white mb-2 text-cyan-300 drop-shadow-lg">
                  {project.title}
                </h3>
                
                {/* Description */}
                <p className="text-sm text-blue-100/90 mb-4 leading-relaxed line-clamp-2 drop-shadow-md">
                  {project.description}
                </p>
                
                {/* Tech Stack Icons */}
                <div className="flex gap-2 mb-4">
                  {project.techStack.map((tech, i) => {
                    const Icon = tech.icon;
                    return (
                      <div key={i} className="bg-black/60 backdrop-blur-md p-2 rounded-lg border border-white/10">
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
                      className="text-xs font-semibold bg-cyan-500/20 backdrop-blur-sm text-cyan-200 px-3 py-1.5 rounded-full border border-cyan-400/30 drop-shadow-lg"
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
                  className="inline-flex items-center gap-2 px-4 py-2.5 text-white hover:text-cyan-300 font-semibold rounded-lg transition-all duration-300 backdrop-blur-sm group/btn w-fit"
                  onClick={(e) => e.stopPropagation()}
                >
                  <span>Visit Website</span>
                  <FiExternalLink className="text-base group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform duration-300" />
                </a>
              </div>
            </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}