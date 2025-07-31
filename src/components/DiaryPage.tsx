import React from 'react';
import { motion } from 'framer-motion';

interface DiaryPageProps {
  children: React.ReactNode;
  pageNumber: number;
  isActive: boolean;
  className?: string;
}

const DiaryPage: React.FC<DiaryPageProps> = ({ children, pageNumber, isActive, className = '' }) => {
  return (
    <motion.div
      className={`
        absolute inset-0 bg-diary-off-white rounded-r-lg shadow-2xl
        ${isActive ? 'z-10' : 'z-0'}
        ${className}
      `}
      initial={{ rotateY: pageNumber % 2 === 0 ? -180 : 0 }}
      animate={{ 
        rotateY: isActive ? 0 : (pageNumber % 2 === 0 ? -180 : 180),
        zIndex: isActive ? 10 : 0
      }}
      transition={{ 
        duration: 0.8, 
        ease: "easeInOut",
        type: "spring",
        stiffness: 50
      }}
      style={{
        transformOrigin: pageNumber % 2 === 0 ? 'left center' : 'right center',
        transformStyle: 'preserve-3d',
        backfaceVisibility: 'hidden'
      }}
    >
      <div className="h-full w-full p-8 flex flex-col justify-center items-center relative overflow-hidden">
        {/* Subtle page texture */}
        <div className="absolute inset-0 opacity-5 bg-gradient-to-br from-diary-gray-light to-transparent" />
        
        {/* Page content */}
        <div className="relative z-10 w-full h-full flex flex-col justify-center items-center">
          {children}
        </div>

        {/* Page number */}
        <div className="absolute bottom-4 right-6 text-diary-gray-light text-sm font-serif">
          {pageNumber}
        </div>
      </div>
    </motion.div>
  );
};

export default DiaryPage;