import { Layers, Brush, Smartphone, Server, Code } from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
  {
    icon: <Layers size={32} className="text-cyan-400 group-hover:text-cyan-300 group-hover:drop-shadow-[0_0_8px_cyan] transition-all duration-300" />,
    title: 'Custom Software Development',
    description: 'Bespoke solutions tailored to your unique business needs, designed for scalability and performance.',
  },
  {
    icon: <Brush size={32} className="text-cyan-400 group-hover:text-cyan-300 group-hover:drop-shadow-[0_0_8px_cyan] transition-all duration-300" />,
    title: 'UI/UX Design',
    description: 'Intuitive and beautiful interfaces that provide a seamless user experience and drive engagement.',
  },
  {
    icon: <Code size={32} className="text-cyan-400 group-hover:text-cyan-300 group-hover:drop-shadow-[0_0_8px_cyan] transition-all duration-300" />,
    title: 'Web Application Development',
    description: 'Modern, responsive, and powerful web apps built with the latest technologies to elevate your online presence.',
  },
  {
    icon: <Smartphone size={32} className="text-cyan-400 group-hover:text-cyan-300 group-hover:drop-shadow-[0_0_8px_cyan] transition-all duration-300" />,
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile applications for iOS and Android that captivate your users.',
  },
  {
    icon: <Server size={32} className="text-cyan-400 group-hover:text-cyan-300 group-hover:drop-shadow-[0_0_8px_cyan] transition-all duration-300" />,
    title: 'Maintenance & Support',
    description: 'Ongoing support, updates, and maintenance to ensure your systems run smoothly and securely.',
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
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      bounce: 0.4,
      duration: 0.8
    }
  }
};

export default function Services() {
  return (
    <section id="services" className="py-24 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-heading font-bold text-white inline-block relative">
            Our Services
            <span className="block h-1 w-24 mx-auto mt-2 bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400 rounded-full" />
          </h2>
          <p className="mt-4 text-lg text-blue-200/80">
            What we can do for you.
          </p>
        </div>

        {/* Services Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 "
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              tabIndex={0}
              className="bg-slate-900 p-8 rounded-2xl border border-slate-800 hover:border-cyan-400/70 focus-visible:border-cyan-400/70 transition-all duration-300 group hover:-translate-y-2 focus-visible:-translate-y-2 shadow-lg hover:shadow-cyan-400/20 focus-visible:shadow-cyan-400/20 relative overflow-hidden outline-none cursor-pointer"
            >
              {/* Gradient hover background */}
              <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 focus-visible:opacity-100 transition-all duration-300 bg-gradient-to-br from-cyan-400/10 via-blue-400/10 to-transparent rounded-2xl" />
              <div className="mb-6 flex items-center justify-center">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold font-heading text-white mb-4">{service.title}</h3>
              <p className="text-blue-200/70">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}