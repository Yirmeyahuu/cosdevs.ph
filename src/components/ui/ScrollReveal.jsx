// eslint-disable-next-line no-unused-vars
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const ScrollReveal = ({ 
  children, 
  className = '',
  delay = 0,
  direction = 'up',
  duration = 0.6 
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    once: false,
    margin: '-100px',
    amount: 0.3 
  });

  const directions = {
    up: { y: 60, x: 0 },
    down: { y: -60, x: 0 },
    left: { y: 0, x: 60 },
    right: { y: 0, x: -60 }
  };

  return (
    <motion.div
      ref={ref}
      initial={{ 
        opacity: 0,
        ...directions[direction]
      }}
      animate={isInView ? { 
        opacity: 1, 
        y: 0, 
        x: 0 
      } : {
        opacity: 0,
        ...directions[direction]
      }}
      transition={{ 
        duration,
        delay: isInView ? delay : 0,
        ease: [0.25, 0.4, 0.25, 1]
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;