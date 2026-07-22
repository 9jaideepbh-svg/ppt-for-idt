import React from 'react';
import { ChevronLeft, ChevronRight, Grid } from 'lucide-react';
import { SLIDES_META } from '../data/slidesData';

interface SlideNavControlsProps {
  currentSlide: number;
  totalSlides: number;
  onPrev: () => void;
  onNext: () => void;
  onGoToSlide: (slideNum: number) => void;
  onToggleGridModal: () => void;
}

export const SlideNavControls: React.FC<SlideNavControlsProps> = ({
  currentSlide,
  totalSlides,
  onPrev,
  onNext,
  onGoToSlide,
  onToggleGridModal,
}) => {
  const isTitleSlide = currentSlide === 1;

  return (
    <footer className={`fixed bottom-0 left-0 right-0 z-50 px-4 md:px-8 py-3 flex items-center justify-between transition-all select-none ${
      isTitleSlide
        ? 'bg-black/50 backdrop-blur-md border-t border-white/10 text-white'
        : 'bg-[#FAF7F0]/90 backdrop-blur-md border-t border-[#2C5E3B]/15 text-[#1B4332]'
    }`}>
      {/* Prev / Next Buttons */}
      <div className="flex items-center gap-2">
        <button
          onClick={onPrev}
          disabled={currentSlide === 1}
          className={`flex items-center gap-1 px-4 py-1.5 rounded-full text-xs font-bold transition cursor-pointer border ${
            currentSlide === 1
              ? 'opacity-40 cursor-not-allowed border-transparent'
              : isTitleSlide
                ? 'bg-white/10 hover:bg-white/20 border-white/20 text-white'
                : 'bg-[#E8EFE6] hover:bg-[#D4E2D2] border-[#2C5E3B]/30 text-[#1B4332]'
          }`}
        >
          <ChevronLeft className="w-4 h-4" />
          <span className="hidden sm:inline">Prev</span>
        </button>

        <button
          onClick={onNext}
          disabled={currentSlide === totalSlides}
          className={`flex items-center gap-1 px-5 py-1.5 rounded-full text-xs font-black transition cursor-pointer shadow-md ${
            currentSlide === totalSlides
              ? 'opacity-40 cursor-not-allowed'
              : 'bg-[#2C5E3B] hover:bg-[#1B4332] text-white shadow-[#2C5E3B]/20'
          }`}
        >
          <span className="hidden sm:inline">Next Slide</span>
          <ChevronRight className="w-4 h-4 text-[#D97706]" />
        </button>
      </div>

      {/* Slide Index Pills */}
      <div className="hidden md:flex items-center gap-1.5 overflow-x-auto max-w-xl py-1 px-2 scrollbar-none">
        {SLIDES_META.map((s) => {
          const isActive = s.id === currentSlide;
          return (
            <button
              key={s.id}
              onClick={() => onGoToSlide(s.id)}
              className={`px-2.5 py-1 rounded-full text-[11px] font-mono font-extrabold transition cursor-pointer ${
                isActive
                  ? 'bg-[#D97706] text-white shadow-md scale-105'
                  : isTitleSlide
                    ? 'bg-white/10 text-gray-300 hover:bg-white/20'
                    : 'bg-[#E8EFE6] text-[#2C5E3B] hover:bg-[#D4E2D2]'
              }`}
              title={`Slide ${s.id}: ${s.title}`}
            >
              {s.id.toString().padStart(2, '0')}
            </button>
          );
        })}
      </div>

      {/* Slide Grid Button */}
      <div className="flex items-center gap-2">
        <button
          onClick={onToggleGridModal}
          className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border text-xs font-bold transition cursor-pointer ${
            isTitleSlide
              ? 'bg-white/10 hover:bg-white/20 border-white/20 text-white'
              : 'bg-[#E8EFE6] hover:bg-[#D4E2D2] border-[#2C5E3B]/30 text-[#1B4332]'
          }`}
        >
          <Grid className="w-3.5 h-3.5 text-[#D97706]" />
          <span className="hidden lg:inline">Slide Index</span>
        </button>
      </div>
    </footer>
  );
};
