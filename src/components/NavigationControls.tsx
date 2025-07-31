import React from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface NavigationControlsProps {
  currentPage: number;
  totalPages: number;
  onPrevious: () => void;
  onNext: () => void;
}

const NavigationControls: React.FC<NavigationControlsProps> = ({
  currentPage,
  totalPages,
  onPrevious,
  onNext,
}) => {
  return (
    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
      <div className="flex items-center space-x-6 bg-diary-white/80 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg border border-diary-gray-lighter/30">
        <motion.button
          onClick={onPrevious}
          disabled={currentPage === 0}
          className="p-2 rounded-full hover:bg-diary-gray-light/20 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <ChevronLeft size={24} className="text-diary-gray" />
        </motion.button>

        <div className="flex space-x-2">
          {Array.from({ length: totalPages }, (_, i) => (
            <motion.div
              key={i}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                i === currentPage ? 'bg-diary-black w-6' : 'bg-diary-gray-lighter'
              }`}
              layoutId={`indicator-${i}`}
            />
          ))}
        </div>

        <motion.button
          onClick={onNext}
          disabled={currentPage === totalPages - 1}
          className="p-2 rounded-full hover:bg-diary-gray-light/20 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <ChevronRight size={24} className="text-diary-gray" />
        </motion.button>
      </div>
    </div>
  );
};

export default NavigationControls;