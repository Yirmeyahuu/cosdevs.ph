// eslint-disable-next-line no-unused-vars
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { useRef } from 'react';

const ParallaxSection = ({ children, className = '', speed = 0.5 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    once: false,
    margin: '-100px',
    amount: 0.3 
  });

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100 * speed, -100 * speed]);
  const opacity = useTransform(
    scrollYProgress, 
    [0, 0.2, 0.8, 1], 
    [0, 1, 1, 0]
  );

  return (
    <motion.section
      ref={ref}
      style={{ 
        y: isInView ? y : 100 * speed, 
        opacity: isInView ? opacity : 0 
      }}
      className={className}
    >
      {children}
    </motion.section>
  );
};

export default ParallaxSection;