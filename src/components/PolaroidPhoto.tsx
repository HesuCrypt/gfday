import React from 'react';
import { motion } from 'framer-motion';

interface PolaroidPhotoProps {
  src?: string;
  caption: string;
  rotation?: number;
  delay?: number;
}

const PolaroidPhoto: React.FC<PolaroidPhotoProps> = ({ 
  src = "https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=400", 
  caption, 
  rotation = 0,
  delay = 0 
}) => {
  return (
    <motion.div
      className="bg-white p-4 pb-16 shadow-lg transform hover:scale-105 transition-transform duration-300 cursor-pointer"
      style={{ 
        transform: `rotate(${rotation}deg)`,
        filter: 'grayscale(100%) contrast(1.1)',
      }}
      initial={{ opacity: 0, y: 50, rotate: rotation + 10 }}
      animate={{ opacity: 1, y: 0, rotate: rotation }}
      transition={{ delay, duration: 0.8, ease: "easeOut" }}
      whileHover={{ scale: 1.05, rotate: rotation + 2 }}
    >
      <div className="w-64 h-64 bg-diary-gray-lighter overflow-hidden mb-3">
        <img 
          src={src} 
          alt="Memory" 
          className="w-full h-full object-cover grayscale"
        />
      </div>
      <p className="text-diary-gray font-handwriting text-lg text-center leading-relaxed">
        {caption}
      </p>
    </motion.div>
  );
};

export default PolaroidPhoto;