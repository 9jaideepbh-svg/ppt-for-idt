import React from 'react';
import { Download, Maximize2, Minimize2, Play, Pause, Volume2, VolumeX, Award, Leaf } from 'lucide-react';
import { PROJECT_INFO } from '../data/slidesData';

interface HeaderBarProps {
  currentSlide: number;
  totalSlides: number;
  isFullscreen: boolean;
  isAutoplay: boolean;
  soundEnabled: boolean;
  onToggleFullscreen: () => void;
  onToggleAutoplay: () => void;
  onToggleSound: () => void;
  onExportHtml: () => void;
  onOpenTeamModal: () => void;
}

export const HeaderBar: React.FC<HeaderBarProps> = ({
  currentSlide,
  totalSlides,
  isFullscreen,
  isAutoplay,
  soundEnabled,
  onToggleFullscreen,
  onToggleAutoplay,
  onToggleSound,
  onExportHtml,
  onOpenTeamModal,
}) => {
  const isTitleSlide = currentSlide === 1;

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 px-4 md:px-8 py-3 flex items-center justify-between transition-all select-none ${
      isTitleSlide 
        ? 'bg-black/40 backdrop-blur-md border-b border-white/10 text-white' 
        : 'bg-[#FAF7F0]/90 backdrop-blur-md border-b border-[#2C5E3B]/15 text-[#1B4332]'
    }`}>
      {/* Left Brand Badge - Matches Canva pill style */}
      <div className="flex items-center gap-3">
        <div className={`px-3.5 py-1.5 rounded-full flex items-center gap-2 font-black text-xs uppercase tracking-wider ${
          isTitleSlide 
            ? 'bg-[#2C5E3B] text-white shadow-md' 
            : 'bg-[#2C5E3B] text-white shadow-sm'
        }`}>
          <Leaf className="w-3.5 h-3.5 text-[#D97706]" />
          <span>FARM SHIELD AI</span>
        </div>

        {/* Show college details ONLY on Slide 1 */}
        {isTitleSlide && (
          <span className="hidden md:inline-block text-xs text-emerald-200 font-medium">
            {PROJECT_INFO.college}
          </span>
        )}
      </div>

      {/* Slide Counter Badge */}
      <div className={`flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono font-bold ${
        isTitleSlide 
          ? 'bg-white/10 text-emerald-300 border border-white/20' 
          : 'bg-[#E8EFE6] text-[#2C5E3B] border border-[#2C5E3B]/20'
      }`}>
        <span className="w-2 h-2 rounded-full bg-[#D97706] animate-pulse"></span>
        <span>SLIDE {currentSlide.toString().padStart(2, '0')} / {totalSlides}</span>
      </div>

      {/* Action Controls */}
      <div className="flex items-center gap-2">
        {isTitleSlide && (
          <button
            onClick={onOpenTeamModal}
            className="hidden lg:flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-semibold transition cursor-pointer"
          >
            <Award className="w-3.5 h-3.5 text-[#D97706]" />
            <span>Team & Info</span>
          </button>
        )}

        <button
          onClick={onToggleSound}
          className={`p-1.5 rounded-full border text-xs font-medium transition cursor-pointer ${
            isTitleSlide 
              ? soundEnabled ? 'bg-[#2C5E3B] text-white border-white/20' : 'bg-white/10 text-gray-300 border-white/10'
              : soundEnabled ? 'bg-[#2C5E3B] text-white border-[#2C5E3B]' : 'bg-[#E8EFE6] text-[#2C5E3B] border-[#2C5E3B]/20'
          }`}
          title={soundEnabled ? 'Mute Audio' : 'Enable Subtle Audio'}
        >
          {soundEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
        </button>

        <button
          onClick={onToggleAutoplay}
          className={`hidden sm:flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold transition cursor-pointer border ${
            isTitleSlide
              ? isAutoplay ? 'bg-[#D97706] text-white border-[#D97706]' : 'bg-white/10 text-white border-white/20'
              : isAutoplay ? 'bg-[#D97706] text-white border-[#D97706]' : 'bg-[#E8EFE6] text-[#2C5E3B] border-[#2C5E3B]/20'
          }`}
        >
          {isAutoplay ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
          <span>{isAutoplay ? 'Autoplay On' : 'Presenter'}</span>
        </button>

        <button
          onClick={onExportHtml}
          className="flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#2C5E3B] hover:bg-[#1B4332] text-white font-bold text-xs transition shadow-sm cursor-pointer"
          title="Download Presentation HTML"
        >
          <Download className="w-3.5 h-3.5 text-[#D97706]" />
          <span className="hidden sm:inline">Export HTML</span>
        </button>

        <button
          onClick={onToggleFullscreen}
          className={`p-1.5 rounded-full border text-xs transition cursor-pointer ${
            isTitleSlide
              ? 'bg-white/10 border-white/20 text-white'
              : 'bg-[#E8EFE6] border-[#2C5E3B]/20 text-[#2C5E3B]'
          }`}
        >
          {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
        </button>
      </div>
    </header>
  );
};
