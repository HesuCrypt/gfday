import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSwipeable } from 'react-swipeable';
import DiaryPage from './components/DiaryPage';
import PolaroidPhoto from './components/PolaroidPhoto';
import FloatingHearts from './components/FloatingHearts';
import MusicPlayer from './components/MusicPlayer';
import NavigationControls from './components/NavigationControls';
import { Heart, Sparkles } from 'lucide-react';

function App() {
  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = 7;

  const nextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages - 1));
  };

  const prevPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 0));
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: nextPage,
    onSwipedRight: prevPage,
    trackMouse: true,
    preventScrollOnSwipe: true,
  });

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        nextPage();
      } else if (e.key === 'ArrowLeft') {
        prevPage();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, []);

  const pageVariants = {
    enter: (direction: number) => ({
      rotateY: direction > 0 ? 180 : -180,
      opacity: 0,
    }),
    center: {
      rotateY: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      rotateY: direction < 0 ? 180 : -180,
      opacity: 0,
    }),
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-diary-gray-dark via-diary-gray to-diary-black overflow-hidden relative">
      <FloatingHearts />
      
      {/* Book Container */}
      <div 
        {...swipeHandlers}
        className="flex items-center justify-center min-h-screen p-4 relative perspective-1000"
      >
        <div className="relative w-full max-w-4xl h-[600px] md:h-[700px] book-shadow">
          {/* Book Spine */}
          <div className="absolute left-0 top-0 w-8 h-full bg-gradient-to-r from-diary-black to-diary-gray-dark rounded-l-lg z-30 shadow-inner">
            <div className="h-full w-1 bg-diary-gray-light ml-2 opacity-50"></div>
          </div>

          {/* Pages Container */}
          <div className="relative ml-8 h-full bg-diary-off-white rounded-r-lg shadow-2xl overflow-hidden">
            <AnimatePresence mode="wait" custom={currentPage}>
              {/* Cover Page */}
              {currentPage === 0 && (
                <motion.div
                  key="cover"
                  className="absolute inset-0 bg-gradient-to-br from-diary-white to-diary-off-white rounded-r-lg"
                  variants={pageVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                >
                  <div className="h-full flex flex-col items-center justify-center text-center p-8">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.5, duration: 0.8, type: "spring" }}
                    >
                      <Heart size={80} className="text-diary-gray mx-auto mb-8 animate-heart-beat" />
                    </motion.div>
                    
                    <motion.h1
                      className="text-4xl md:text-6xl font-serif text-diary-black mb-4"
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.8, duration: 0.8 }}
                    >
                      Our Diary
                    </motion.h1>
                    
                    <motion.p
                      className="text-xl text-diary-gray font-handwriting"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1.2, duration: 0.8 }}
                    >
                      A collection of beautiful moments
                    </motion.p>

                    <motion.div
                      className="mt-8 text-diary-gray-light text-sm"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1.5, duration: 0.8 }}
                    >
                      Swipe or use arrow keys to turn pages
                    </motion.div>
                  </div>
                </motion.div>
              )}

              {/* Memory Page 1 */}
              {currentPage === 1 && (
                <motion.div
                  key="memory1"
                  className="absolute inset-0"
                  variants={pageVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                >
                  <div className="h-full flex flex-col items-center justify-center p-8">
                    <motion.h2
                      className="text-3xl font-serif text-diary-black mb-8 text-center"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3, duration: 0.8 }}
                    >
                      Coffee Date
                    </motion.h2>
                    
                    <div className="flex flex-wrap justify-center gap-8">
                      <PolaroidPhoto
                        src="project/public/1.JPG"
                        caption="Coffee date"
                        rotation={-5}
                        delay={0.5}
                      />
                      <PolaroidPhoto
                        src="project/public/2.JPG"
                        caption="First Matchy outfit"
                        rotation={3}
                        delay={0.8}
                      />
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Special Quote Page */}
              {currentPage === 2 && (
                <motion.div
                  key="quote"
                  className="absolute inset-0"
                  variants={pageVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                >
                  <div className="h-full flex flex-col items-center justify-center p-8 text-center">
                    <motion.div
                      className="mb-8"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.5, duration: 0.8 }}
                    >
                      <Sparkles size={60} className="text-diary-gray mx-auto animate-float" />
                    </motion.div>
                    
                    <motion.blockquote
                      className="text-3xl md:text-4xl font-serif text-diary-black leading-relaxed italic"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.8, duration: 1, type: "spring" }}
                    >
                      "Never in my life have I been more sure"
                    </motion.blockquote>
                    
                    <motion.p
                      className="text-diary-gray-light mt-6 font-handwriting text-lg"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1.3, duration: 0.8 }}
                    >
                      - ^^
                    </motion.p>
                  </div>
                </motion.div>
              )}

              {/* Memory Page 2 */}
              {currentPage === 3 && (
                <motion.div
                  key="memory2"
                  className="absolute inset-0"
                  variants={pageVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                >
                  <div className="h-full flex flex-col items-center justify-center p-8">
                    <motion.h2
                      className="text-3xl font-serif text-diary-black mb-8 text-center"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3, duration: 0.8 }}
                    >
                      First Bouquet Flower
                    </motion.h2>
                    
                    <div className="flex flex-wrap justify-center gap-8">
                      <PolaroidPhoto
                        src="project/public/3.JPG"
                        caption="Muji Date"
                        rotation={2}
                        delay={0.5}
                      />
                      <PolaroidPhoto
                        src="project/public/4.JPG"
                        caption="Even the prettiest flowers can't compare to you."
                        rotation={-3}
                        delay={0.8}
                      />
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Love Note Page */}
              {currentPage === 4 && (
                <motion.div
                  key="lovenote"
                  className="absolute inset-0"
                  variants={pageVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                >
                  <div className="h-full flex flex-col items-center justify-center p-8 text-center">
                    <motion.div
                      className="bg-diary-white p-8 shadow-lg transform rotate-1 max-w-md border-l-4 border-diary-gray-light"
                      initial={{ opacity: 0, rotate: 10, scale: 0.8 }}
                      animate={{ opacity: 1, rotate: 1, scale: 1 }}
                      transition={{ delay: 0.5, duration: 0.8 }}
                    >
                      <h3 className="text-2xl font-handwriting text-diary-black mb-4">My Dearest Love,</h3>
                      <p className="text-diary-gray leading-relaxed font-handwriting text-lg">
                      Thank you for being such an important part of my life. I’m so grateful for your love, your patience, and all the little things you do that make me feel special every day. You’ve always been there for me, and I really appreciate everything about you—your smile, your kindness, and your heart.
I feel so lucky to call you mine. I’ll always be here for you too, no matter what.
I love you so much!
                      </p>
                      <p className="text-right text-diary-gray-light mt-6 font-handwriting">
                        Forever yours ♡
                      </p>
                    </motion.div>
                  </div>
                </motion.div>
              )}

              {/* Memory Page 3 */}
              {currentPage === 5 && (
                <motion.div
                  key="memory3"
                  className="absolute inset-0"
                  variants={pageVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                >
                  <div className="h-full flex flex-col items-center justify-center p-8">
                    <motion.h2
                      className="text-3xl font-serif text-diary-black mb-8 text-center"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3, duration: 0.8 }}
                    >
                      Random Photos
                    </motion.h2>
                    
                    <div className="flex flex-wrap justify-center gap-8">
                      <PolaroidPhoto
                        src="project/public/5.JPG"
                        caption="^^"
                        rotation={-2}
                        delay={0.5}
                      />
                      <PolaroidPhoto
                        src="project/public/6.JPG"
                        caption="^^"
                        rotation={4}
                        delay={0.8}
                      />
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Final Page */}
              {currentPage === 6 && (
                <motion.div
                  key="final"
                  className="absolute inset-0"
                  variants={pageVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                >
                  <div className="h-full flex flex-col items-center justify-center text-center p-8 bg-gradient-to-br from-diary-off-white to-diary-white">
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ delay: 0.5, duration: 1, type: "spring" }}
                    >
                      <Heart size={100} className="text-diary-black mx-auto mb-8 animate-heart-beat" />
                    </motion.div>
                    
                    <motion.h1
                      className="text-4xl md:text-5xl font-serif text-diary-black mb-4"
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.8, duration: 0.8 }}
                    >
                      Happy Girlfriend Day
                    </motion.h1>
                    
                    <motion.p
                      className="text-xl text-diary-gray font-handwriting max-w-md"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1.2, duration: 0.8 }}
                    >
                       To the most special person in my life, thank you for the love and moments we share. This album holds just a few of my favorite memories with you.
                    </motion.p>

                    <motion.div
                      className="mt-8 text-diary-gray-light"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1.8, duration: 0.8 }}
                    >
                      With all my love ♡
                    </motion.div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Navigation Controls */}
      <NavigationControls
        currentPage={currentPage}
        totalPages={totalPages}
        onPrevious={prevPage}
        onNext={nextPage}
      />

      {/* Music Player */}
      <MusicPlayer />
    </div>
  );
}

export default App;