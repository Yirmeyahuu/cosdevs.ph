import { motion } from 'framer-motion';
import { FiExternalLink } from 'react-icons/fi';
import project1 from '../../assets/images/project1.webp';
import project2 from '../../assets/images/project2.webp';
import project3 from '../../assets/images/project3.webp';
import satoruLogo from '../../assets/images/satorulogo.webp';
import avendroLogo from '../../assets/images/avendrologo.webp';
import posLogo from '../../assets/images/poslogo.webp';
import sentinelsLogo from '../../assets/images/sentinelslogo.webp';
import tabangLogo from '../../assets/images/tabanglogo.webp';

const projects = [
  {
    title: 'Satoru',
    image: project1,
    link: 'https://satoru-chi.vercel.app/',
  },
  {
    title: 'Avendro',
    image: project2,
    link: 'https://avendrobcd.onrender.com/',
  },
  {
    title: 'Point of Sale System',
    image: project3,
    link: 'https://example.com/lms',
  },
  {
    title: 'Tabang Negros',
    image: tabangLogo,
    link: 'https://tabangnegros-installation.vercel.app/',
  },
  {
    title: 'Mobile Game',
    image: sentinelsLogo,
    link: 'https://drive.google.com/file/d/1dB0u3wjIOWzKIGJtJPzDSgzceLOgFC2-/view',
  },
  {
    title: 'Student Management',
    image: satoruLogo,
    link: 'https://sentinelsadmin.onrender.com/',
  },
  {
    title: 'Avendro LMS',
    image: avendroLogo,
    link: 'https://avendrobcd.onrender.com/',
  },
  {
    title: 'POS System',
    image: posLogo,
    link: 'https://example.com/lms',
  },
];

const row1 = projects.slice(0, 4);
const row2 = [...projects].reverse().slice(0, 4);
const loopRow1 = [...row1, ...row1];
const loopRow2 = [...row2, ...row2];

function ProjectCard({ project }) {
  return (
    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative shrink-0 w-[280px] h-[168px] md:w-[400px] md:h-60 rounded-2xl overflow-hidden border border-white/5 block opacity-50 hover:opacity-90 transition-opacity duration-500"
    >
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
      />
      {/* Subtle dark overlay */}
      <div className="absolute inset-0 bg-black/20" />
      {/* Hover title overlay */}
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

export default function Work() {
  return (
    <section id="work" className="bg-black relative overflow-hidden py-24">
      {/* Vignette */}
      <div className="pointer-events-none absolute inset-0 z-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,black_0%,transparent_20%,transparent_80%,black_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,black_80%)]" />
      </div>

      {/* Header */}
      <div className="text-center max-w-4xl mx-auto mb-16 px-6 relative z-20">
        <p className="text-zinc-500 uppercase text-sm tracking-widest">Our Work</p>
        <h2 className="text-white/80 text-5xl md:text-7xl font-bold tracking-tight mt-4">
          Architecting the Future, One Line at a Time.
        </h2>
        <p className="text-zinc-400 mt-5 text-base md:text-lg leading-relaxed">
          A selection of products we've designed, built, and shipped.
        </p>
      </div>

      {/* Scroll Rows */}
      <div className="space-y-6">
        {/* Row 1 — left to right */}
        <div className="overflow-hidden">
          <motion.div
            className="flex gap-4 md:gap-6 w-max"
            animate={{ x: ['0%', '-50%'] }}
            transition={{ repeat: Infinity, duration: 28, ease: 'linear' }}
          >
            {loopRow1.map((project, i) => (
              <ProjectCard key={i} project={project} />
            ))}
          </motion.div>
        </div>

        {/* Row 2 — right to left */}
        <div className="overflow-hidden">
          <motion.div
            className="flex gap-4 md:gap-6 w-max"
            animate={{ x: ['-50%', '0%'] }}
            transition={{ repeat: Infinity, duration: 28, ease: 'linear' }}
          >
            {loopRow2.map((project, i) => (
              <ProjectCard key={i} project={project} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}