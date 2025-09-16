import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface ScrollSectionProps {
  children: ReactNode;
  delay?: number;
}

export const ScrollSection = ({ children, delay = 0 }: ScrollSectionProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration: 0.8,
        delay: delay,
        ease: [0.21, 0.47, 0.32, 0.98]
      }}
    >
      {children}
    </motion.div>
  );
};
