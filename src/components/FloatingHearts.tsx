import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

const FloatingHearts: React.FC = () => {
  const hearts = Array.from({ length: 5 }, (_, i) => i);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {hearts.map((heart) => (
        <motion.div
          key={heart}
          className="absolute text-diary-gray-lighter opacity-20"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [-20, -40, -20],
            x: [-10, 10, -10],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 4 + Math.random() * 2,
            repeat: Number.POSITIVE_INFINITY,
            delay: Math.random() * 2,
            ease: "easeInOut",
          }}
        >
          <Heart size={16 + Math.random() * 8} />
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingHearts;