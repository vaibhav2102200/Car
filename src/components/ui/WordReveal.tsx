import { motion } from 'framer-motion';

interface WordRevealProps {
  text: string;
  delay?: number;
  className?: string;
}

export const WordReveal = ({ text, delay = 0, className = '' }: WordRevealProps) => {
  const words = text.split(' ');

  return (
    <div className={className}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: delay + i * 0.2,
            duration: 0.8
          }}
          className="inline-block mr-2"
        >
          {word}
        </motion.span>
      ))}
    </div>
  );
};
