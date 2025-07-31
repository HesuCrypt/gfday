import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause, Volume2 } from 'lucide-react';

const MusicPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const toggleMusic = () => {
    setIsPlaying((prev) => !prev);
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    if (isPlaying) {
      audio.play();
    } else {
      audio.pause();
    }
  }, [isPlaying]);

  return (
    <motion.div
      className="fixed bottom-6 right-6 z-20 bg-diary-white/80 backdrop-blur-sm rounded-full p-3 shadow-lg border border-diary-gray-lighter/30"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1, duration: 0.5 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <button
        onClick={toggleMusic}
        className="flex items-center space-x-2 text-diary-gray hover:text-diary-black transition-colors"
      >
        {isPlaying ? (
          <Pause size={20} />
        ) : (
          <Play size={20} />
        )}
        <Volume2 size={16} className="opacity-70" />
      </button>
      <audio
        ref={audioRef}
        src="project/public/music.mp3"
        loop
        style={{ display: 'none' }}
      />
      {isPlaying && (
        <motion.div
          className="absolute -top-12 right-0 bg-diary-black text-diary-white px-3 py-1 rounded text-xs whitespace-nowrap"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Playing: Old Love
        </motion.div>
      )}
    </motion.div>
  );
};

export default MusicPlayer;