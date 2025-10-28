import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Avendro - Lending Management System',
    description: 'A comprehensive system to manage lending operations, from client onboarding to payment tracking.',
    tags: ['Python Django', 'PostgreSQL', 'React', 'Tailwind CSS'],
    imageUrl: 'https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?q=80&w=1974&auto=format&fit=crop',
  },
  {
    title: 'CyberGuard - Gamified Learning App',
    description: 'An interactive mobile application that teaches cybersecurity concepts through engaging games and quizzes.',
    tags: ['React Native', 'Firebase', 'Gamification', 'UI/UX'],
    imageUrl: 'https://images.unsplash.com/photo-1555774698-0b77e0ab235f?q=80&w=2070&auto=format&fit=crop',
  },
  {
    title: 'Marketplace - E-commerce Platform',
    description: 'A full-featured e-commerce website with product listings, user accounts, and a secure checkout process.',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe API'],
    imageUrl: 'https://images.unsplash.com/photo-1522204523234-8729aa6e3d5f?q=80&w=2070&auto=format&fit=crop',
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15
    }
  }
};

const cardVariants = {
  hidden: { scale: 0.9, opacity: 0, y: 40 },
  visible: {
    scale: 1,
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      duration: 0.8
    }
  }
};

export default function Work() {
  return (
    <section id="work" className="py-24 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-heading font-bold text-white inline-block relative">
            Our Work
            <span className="block h-1 w-24 mx-auto mt-2 bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400 rounded-full" />
          </h2>
          <p className="mt-4 text-lg text-blue-200/80">
            A selection of projects we are proud of.
          </p>
        </div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              tabIndex={0}
              className="bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 group hover:border-cyan-400/70 focus-visible:border-cyan-400/70 transition-all duration-300 hover:-translate-y-2 focus-visible:-translate-y-2 shadow-lg hover:shadow-cyan-400/20 focus-visible:shadow-cyan-400/20 relative outline-none"
            >
              <div className="overflow-hidden h-56 relative">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 group-focus-visible:scale-110 transition-transform duration-500"
                />
                {/* Gradient overlay on hover/focus */}
                <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-all duration-300 bg-gradient-to-t from-cyan-400/20 via-blue-400/10 to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold font-heading text-white mb-2">{project.title}</h3>
                <p className="text-blue-200/70 mb-4 text-sm">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-xs font-semibold bg-cyan-500/10 text-cyan-300 px-3 py-1 rounded-full transition-all duration-300 hover:bg-cyan-500/20 hover:scale-105 focus-visible:bg-cyan-500/20 focus-visible:scale-105 shadow hover:shadow-cyan-400/20 focus-visible:shadow-cyan-400/20 outline-none"
                      tabIndex={0}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}