import project1Img from '../assets/images/project1.webp';
import project2Img from '../assets/images/project2.webp';
import project3Img from '../assets/images/project3.webp';
import { Link } from 'react-router-dom';


const projects = [
  {
    title: 'Avendro - Lending Management System',
    description: 'A comprehensive system to manage lending operations, from client onboarding to payment tracking.',
    tags: ['Python Django', 'PostgreSQL', 'Tailwind CSS'],
    imageUrl: project1Img,
  },
  {
    title: 'Sentinels - Gamified Cybersecurity Education',
    description: 'An interactive mobile application that teaches cybersecurity concepts through engaging games and quizzes.',
    tags: ['C#', 'Firebase', 'Unity Engine', 'Python', 'Django', 'PostgreSQL', 'Tailwind CSS'],
    imageUrl: project2Img,
  },
  {
    title: 'Marketplace - E-commerce Platform',
    description: 'A full-featured e-commerce website with product listings, user accounts, and a secure checkout process.',
    tags: ['Python', 'Django', 'React', 'PostgreSQL', 'Tailwind CSS'],
    imageUrl: project3Img,
  },
];

export default function WorkPage() {
  return (
    <section className="min-h-screen py-20 px-4 md:px-6 bg-gradient-to-br from-brandBlue-darkest via-brandBlue-dark to-cyan-900 animate-pageFadeIn">
      <div className="max-w-7xl mx-auto w-full">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 mb-6">
            <span className="text-sm text-cyan-400 font-medium">PORTFOLIO</span>
          </div>
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
              tabIndex={0}
              className="group bg-white/5 backdrop-blur-sm rounded-3xl overflow-hidden border border-white/10 hover:bg-white/10 hover:border-cyan-400/70 focus-visible:border-cyan-400/70 transition-all duration-300 hover:-translate-y-2 focus-visible:-translate-y-2 hover:shadow-[0_0_24px_rgba(34,211,238,0.2)] focus-visible:shadow-[0_0_24px_rgba(34,211,238,0.2)] outline-none cursor-pointer"
            >
              {/* Project Image */}
              <div className="overflow-hidden h-56 relative">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 group-focus-visible:scale-110 transition-transform duration-500"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-all duration-300 bg-gradient-to-t from-cyan-400/20 via-blue-400/10 to-transparent" />
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="font-heading text-lg md:text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-sm text-blue-200/70 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-xs font-semibold bg-cyan-500/10 text-cyan-300 px-3 py-1 rounded-full hover:bg-cyan-500/20 hover:scale-105 transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-cyan-300 mb-4">Ready to build something amazing?</h2>
          <p className="text-blue-200/80 mb-6">
            We’re passionate about turning ideas into reality. Let’s collaborate on your next project!
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