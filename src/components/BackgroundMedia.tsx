import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SLIDES_META } from '../data/slidesData';

interface BackgroundMediaProps {
  currentSlide: number;
}

export const BackgroundMedia: React.FC<BackgroundMediaProps> = ({ currentSlide }) => {
  const meta = SLIDES_META[currentSlide - 1] || SLIDES_META[0];
  const showImageBg = currentSlide === 1 || currentSlide === 8 || currentSlide === 12;

  return (
    <div className="fixed inset-0 z-0 overflow-hidden select-none bg-[#FAF7F0]">
      <AnimatePresence mode="wait">
        {showImageBg ? (
          <motion.div
            key={`image-bg-${currentSlide}`}
            initial={{ opacity: 0, scale: 1.02 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="absolute inset-0 overflow-hidden"
          >
            <img
              src={meta.bgImage}
              alt={meta.title}
              loading="eager"
              fetchPriority="high"
              decoding={currentSlide === 1 ? 'sync' : 'async'}
              className="w-full h-full object-cover object-center"
            />
            {/* Overlay: Bright for Slide 1 (subtle tint), refined overlay for Slide 8 */}
            {currentSlide === 1 ? (
              <div className="absolute inset-0 bg-black/10 backdrop-brightness-105" />
            ) : (
              <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60 backdrop-blur-[2px]" />
            )}
          </motion.div>
        ) : (
          <motion.div
            key={`slide-bg-${currentSlide}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 bg-[#FAF7F0]"
          >
            {/* Decorative subtle background gradient accents inspired by Canva template */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-[#E8EFE6]/60 filter blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-[#F3E2C8]/40 filter blur-3xl pointer-events-none" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
