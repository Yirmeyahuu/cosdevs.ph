import { motion } from 'framer-motion';
import { 
  SiReact, SiTailwindcss, SiPython, SiDjango, SiPostgresql, SiFirebase, SiUnity,
  SiNextdotjs, SiTypescript, SiSupabase, SiStripe, SiVite, SiNetlify, SiBootstrap, SiNodedotjs, SiFramer
} from 'react-icons/si';
import { FiExternalLink } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import project1 from '../assets/images/project1.webp';
import project2 from '../assets/images/project2.webp';
import project3 from '../assets/images/project3.webp';
import satoruLogo from '../assets/images/satorulogo.webp';
import avendroLogo from '../assets/images/avendrologo.webp';
import posLogo from '../assets/images/poslogo.webp';
import sentinelsLogo from '../assets/images/sentinelslogo.webp';
import tabangLogo from '../assets/images/tabanglogo.webp';
import aetherLogo from '../assets/images/AetherLogo.webp';
import aetherWeb from '../assets/images/AetherWeb.webp';
import luxuriagaLogo from '../assets/images/LuxuriagaLogo.webp';
import luxuriagaWeb from '../assets/images/LuxuriagaWeb.webp';
import totalEdgeLogo from '../assets/images/totaledge.webp';
import totalEdgeWeb from '../assets/images/totalEdgeProject.webp';
import talaWeb from '../assets/images/TalaWeb.webp';

const projects = [
  {
    title: 'Satoru',
    description: 'A web application designed to intelligently summarize and extract key information from uploaded documents, providing users with quick, distilled insights.',
    tags: ['React', 'REST Framework', 'GSAP', 'Python', 'Django', 'PostgreSQL', 'Tailwind CSS'],
    logo: satoruLogo,
    scrollImage: project1,
    link: 'https://satoru-chi.vercel.app/',
    techStack: [
      { icon: SiReact, color: 'text-cyan-400' },
      { icon: SiPython, color: 'text-yellow-300' },
      { icon: SiPostgresql, color: 'text-blue-400' },
      { icon: SiTailwindcss, color: 'text-cyan-300' },
    ],
  },
  {
    title: 'Avendro',
    description: 'A comprehensive lending management system built with Django, designed to streamline loan operations and financial management for lending institutions.',
    tags: ['Python', 'Django', 'PostgreSQL', 'Tailwind CSS'],
    logo: avendroLogo,
    scrollImage: project2,
    link: 'https://avendrobcd.onrender.com/',
    techStack: [
      { icon: SiPython, color: 'text-yellow-300' },
      { icon: SiDjango, color: 'text-green-600' },
      { icon: SiPostgresql, color: 'text-blue-400' },
      { icon: SiTailwindcss, color: 'text-cyan-300' },
    ],
  },
  {
    title: 'Point of Sale System',
    description: 'A point of sale (POS) system for retail businesses, featuring inventory management, sales tracking, and customer management functionalities.',
    tags: ['Python', 'Django', 'React', 'PostgreSQL'],
    logo: posLogo,
    scrollImage: project3,
    link: 'https://example.com/pos',
    techStack: [
      { icon: SiPython, color: 'text-yellow-300' },
      { icon: SiDjango, color: 'text-green-600' },
      { icon: SiReact, color: 'text-cyan-400' },
      { icon: SiPostgresql, color: 'text-blue-400' },
    ],
  },
  {
    title: 'Sentinels - Gamified Cybersecurity',
    description: 'An engaging mobile game with multiplayer functionality, leaderboards, and in-app purchases focused on cybersecurity education.',
    tags: ['Unity', 'C#', 'Firebase', 'Python', 'Django', 'PostgreSQL'],
    logo: sentinelsLogo,
    scrollImage: sentinelsLogo,
    link: 'https://drive.google.com/file/d/1dB0u3wjIOWzKIGJtJPzDSgzceLOgFC2-/view',
    techStack: [
      { icon: SiUnity, color: 'text-white' },
      { icon: SiFirebase, color: 'text-yellow-400' },
      { icon: SiPython, color: 'text-yellow-300' },
      { icon: SiPostgresql, color: 'text-blue-400' },
    ],
  },
  {
    title: 'Student Management System',
    description: 'A comprehensive dashboard for educational institutions with data visualization, analytics, and reporting tools for student management.',
    tags: ['Python', 'Django', 'Firebase', 'PostgreSQL'],
    logo: sentinelsLogo,
    scrollImage: satoruLogo,
    link: 'https://sentinelsadmin.onrender.com/',
    techStack: [
      { icon: SiPython, color: 'text-yellow-300' },
      { icon: SiDjango, color: 'text-green-600' },
      { icon: SiFirebase, color: 'text-yellow-400' },
      { icon: SiPostgresql, color: 'text-blue-400' },
    ],
  },
  {
    title: 'Tabang Negros',
    description: 'A modern, real-time emergency help request system designed for Negros Island, Philippines. This full-stack web application allows users to quickly send emergency requests with their exact location to responders.',
    tags: ['React', 'Leaflet', 'Python', 'Django', 'PostgreSQL', 'Cloudinary'],
    logo: tabangLogo,
    scrollImage: tabangLogo,
    link: 'https://tabangnegros-installation.vercel.app/',
    techStack: [
      { icon: SiReact, color: 'text-cyan-400' },
      { icon: SiPython, color: 'text-yellow-300' },
      { icon: SiDjango, color: 'text-green-600' },
      { icon: SiPostgresql, color: 'text-blue-400' },
    ],
  },
  {
    title: 'Aether-atelier',
    description: 'A sophisticated e-commerce platform and atelier management system built with Next.js, featuring seamless Stripe integration and Supabase backend.',
    tags: ['Next.js', 'TypeScript', 'GSAP', 'Supabase', 'Stripe'],
    logo: aetherLogo,
    scrollImage: aetherWeb,
    needsWhiteBg: true,
    link: 'https://aether-atelier.vercel.app/',
    techStack: [
      { icon: SiNextdotjs, color: 'text-white' },
      { icon: SiTypescript, color: 'text-blue-500' },
      { icon: SiSupabase, color: 'text-emerald-500' },
      { icon: SiStripe, color: 'text-indigo-400' },
    ],
  },
  {
    title: 'Luxuriaga',
    description: 'A high-end luxury real estate and lifestyle platform built with React and Vite, utilizing Supabase for a robust backend and dynamic content management.',
    tags: ['React', 'TypeScript', 'Vite', 'Supabase', 'Netlify'],
    logo: luxuriagaLogo,
    scrollImage: luxuriagaWeb,
    link: 'https://luxuriaga-hotel.netlify.app/',
    techStack: [
      { icon: SiReact, color: 'text-cyan-400' },
      { icon: SiVite, color: 'text-yellow-400' },
      { icon: SiSupabase, color: 'text-emerald-500' },
      { icon: SiNetlify, color: 'text-cyan-500' },
    ],
  },
  {
    title: 'TotalEdge',
    description: 'A modern enterprise-grade application built with Next.js 14, featuring advanced animations with Framer Motion and GSAP, integrated with Stripe and Google APIs.',
    tags: ['Next.js', 'Framer Motion', 'GSAP', 'Stripe', 'Supabase'],
    logo: totalEdgeLogo,
    scrollImage: totalEdgeWeb,
    link: 'https://www.totaledge.au/coaching',
    techStack: [
      { icon: SiNextdotjs, color: 'text-white' },
      { icon: SiFramer, color: 'text-pink-500' },
      { icon: SiSupabase, color: 'text-emerald-500' },
      { icon: SiStripe, color: 'text-indigo-400' },
    ],
  },
  {
    title: 'TALA',
    description: 'A cross-platform application utilizing Bootstrap and Node.js on the frontend, with a powerful Python/Django and Firebase backend for real-time data handling.',
    tags: ['Bootstrap', 'Node.js', 'Firebase', 'Django'],
    logo: talaWeb,
    scrollImage: talaWeb,
    link: 'https://tala.cosedevs.com/',
    techStack: [
      { icon: SiBootstrap, color: 'text-purple-500' },
      { icon: SiNodedotjs, color: 'text-green-500' },
      { icon: SiFirebase, color: 'text-yellow-400' },
      { icon: SiDjango, color: 'text-green-600' },
    ],
  },
];

const row1 = projects.slice(0, Math.ceil(projects.length / 2));
const row2 = projects.slice(Math.ceil(projects.length / 2));
const loopRow1 = [...row1, ...row1];
const loopRow2 = [...row2, ...row2];

function ScrollCard({ project }) {
  return (
    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative shrink-0 w-[280px] h-[168px] md:w-[400px] md:h-60 rounded-2xl overflow-hidden border border-white/5 block opacity-50 hover:opacity-90 transition-opacity duration-500"
    >
      <img
        src={project.scrollImage}
        alt={project.title}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
      />
      <div className="absolute inset-0 bg-black/20" />
      <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex items-end p-4 md:p-5">
        <div className="flex items-center justify-between w-full">
          <span className="text-white text-sm md:text-base font-medium tracking-tight">
            {project.title}
          </span>
          <FiExternalLink className="text-zinc-400 text-sm shrink-0 ml-2" />
        </div>
      </div>
    </a>
  );
}

export default function WorkPage() {
  return (
    <div className="bg-black min-h-screen">
      {/* ── Scrolling Showcase ── */}
      <section className="relative overflow-hidden pt-32 pb-20">
        {/* Vignette */}
        <div className="pointer-events-none absolute inset-0 z-10">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,black_0%,transparent_20%,transparent_80%,black_100%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,black_80%)]" />
        </div>

        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto mb-16 px-6 relative z-20"
        >
          <p className="text-zinc-500 uppercase text-sm tracking-widest">Our Work</p>
          <h1 className="text-white/80 text-5xl md:text-7xl font-bold tracking-tight mt-4">
            Architecting the Future,<br />One Line at a Time.
          </h1>
          <p className="text-zinc-400 mt-5 text-base md:text-lg leading-relaxed">
            A selection of products we've designed, built, and shipped.
          </p>
        </motion.div>

        {/* Scroll Rows */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="space-y-6"
        >
          {/* Row 1 — left to right */}
          <div className="overflow-hidden">
            <motion.div
              className="flex gap-4 md:gap-6 w-max"
              animate={{ x: ['0%', '-50%'] }}
              transition={{ repeat: Infinity, duration: 40, ease: 'linear' }}
            >
              {loopRow1.map((project, i) => (
                <ScrollCard key={i} project={project} />
              ))}
            </motion.div>
          </div>

          {/* Row 2 — right to left */}
          <div className="overflow-hidden">
            <motion.div
              className="flex gap-4 md:gap-6 w-max"
              animate={{ x: ['-50%', '0%'] }}
              transition={{ repeat: Infinity, duration: 40, ease: 'linear' }}
            >
              {loopRow2.map((project, i) => (
                <ScrollCard key={i} project={project} />
              ))}
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* ── Detailed Project Grid ── */}
      <section className="px-4 md:px-6 pb-24 relative z-20">
        <div className="max-w-7xl mx-auto">
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-zinc-500 uppercase text-xs tracking-widest text-center mb-12"
          >
            All Projects
          </motion.p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
                className="group relative bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 transition-all duration-300"
              >
                {/* Logo banner */}
                <div className="w-full h-52 relative overflow-hidden flex items-center justify-center bg-zinc-900">
                  <div className="absolute inset-0 bg-black/40" />
                  {project.title === 'TALA' ? (
                    <div className="relative z-10 flex items-center justify-center w-full h-full bg-zinc-900">
                      <span className="text-4xl font-bold tracking-tighter text-white">TALA</span>
                    </div>
                  ) : (
                    <div className={`${project.needsWhiteBg ? 'bg-white p-4 rounded-xl' : ''} relative z-10 flex items-center justify-center`}>
                      <img
                        src={project.logo}
                        alt={`${project.title} logo`}
                        className="w-28 h-28 object-contain opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                      />
                    </div>
                  )}
                </div>

                {/* Info */}
                <div className="p-5">
                  <h3 className="text-base md:text-lg font-semibold text-white mb-2 group-hover:text-zinc-200 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-xs text-zinc-500 mb-4 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tech Stack Icons */}
                  <div className="flex gap-2 mb-4">
                    {project.techStack.map((tech, i) => {
                      const Icon = tech.icon;
                      return (
                        <div key={i} className="bg-white/5 p-2 rounded-lg border border-white/10">
                          <Icon className={`text-base ${tech.color}`} />
                        </div>
                      );
                    })}
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.tags.slice(0, 3).map((tag, i) => (
                      <span
                        key={i}
                        className="text-xs text-zinc-400 bg-white/5 px-2.5 py-1 rounded-full border border-white/10"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Link */}
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors duration-300 group/btn"
                  >
                    <span>Visit Website</span>
                    <FiExternalLink className="text-xs group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform duration-300" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-20 text-center"
          >
            <h2 className="text-white text-2xl md:text-3xl font-medium tracking-tight mb-3">
              Ready to build something amazing?
            </h2>
            <p className="text-zinc-500 mb-8 text-sm md:text-base">
              We're passionate about turning ideas into reality. Let's collaborate on your next project.
            </p>
            <Link
              to="/contact"
              className="inline-block px-8 py-3.5 bg-white text-black rounded-full text-sm font-semibold hover:bg-zinc-200 transition-colors duration-300"
            >
              Contact Us
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}