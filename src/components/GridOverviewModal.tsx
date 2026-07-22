import React from 'react';
import { motion } from 'motion/react';
import { X, Grid, Sparkles } from 'lucide-react';
import { SLIDES_META } from '../data/slidesData';

interface GridOverviewModalProps {
  isOpen: boolean;
  currentSlide: number;
  onClose: () => void;
  onSelectSlide: (slideNum: number) => void;
}

export const GridOverviewModal: React.FC<GridOverviewModalProps> = ({
  isOpen,
  currentSlide,
  onClose,
  onSelectSlide,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="bg-[#FAF7F0] border-2 border-[#2C5E3B] rounded-3xl p-6 md:p-8 max-w-5xl w-full shadow-2xl text-[#1B4332] space-y-6 max-h-[90vh] overflow-y-auto"
      >
        <div className="flex items-center justify-between border-b border-[#2C5E3B]/20 pb-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-full bg-[#2C5E3B] text-white">
              <Grid className="w-6 h-6 text-[#D97706]" />
            </div>
            <div>
              <h2 className="font-outfit font-black text-xl text-[#2C5E3B]">Presentation Slide Index</h2>
              <p className="text-xs text-[#D97706] font-bold">Jump directly to any of the 15 keynote slides</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full bg-[#E8EFE6] hover:bg-[#D4E2D2] text-[#2C5E3B] transition cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* 14 Thumbnails Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3">
          {SLIDES_META.map((s) => {
            const isActive = s.id === currentSlide;
            return (
              <button
                key={s.id}
                onClick={() => {
                  onSelectSlide(s.id);
                  onClose();
                }}
                className={`group relative p-3 rounded-2xl border text-left transition cursor-pointer flex flex-col justify-between h-32 overflow-hidden shadow-sm ${
                  isActive
                    ? 'bg-[#2C5E3B] text-white border-[#2C5E3B] ring-2 ring-[#D97706] scale-105 shadow-md'
                    : 'bg-[#F2ECE1] text-[#2C5E3B] border-[#2C5E3B]/15 hover:bg-[#E8E0D2] hover:scale-102'
                }`}
              >
                <div className="flex items-center justify-between z-10">
                  <span className={`text-[10px] font-mono font-black px-2 py-0.5 rounded-full ${
                    isActive ? 'bg-[#D97706] text-white' : 'bg-[#E1D7C6] text-[#2C5E3B]'
                  }`}>
                    SLIDE {s.id.toString().padStart(2, '0')}
                  </span>
                  {isActive && <Sparkles className="w-3.5 h-3.5 text-[#D97706]" />}
                </div>

                <div className="z-10">
                  <span className={`text-[9px] uppercase font-bold block truncate ${
                    isActive ? 'text-emerald-200' : 'text-[#D97706]'
                  }`}>
                    {s.category}
                  </span>
                  <h4 className={`font-outfit font-black text-xs leading-tight line-clamp-2 ${
                    isActive ? 'text-white' : 'text-[#2C5E3B]'
                  }`}>
                    {s.title}
                  </h4>
                </div>
              </button>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
};
