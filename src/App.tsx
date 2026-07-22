import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BackgroundMedia } from './components/BackgroundMedia';
import { HeaderBar } from './components/HeaderBar';
import { SlideNavControls } from './components/SlideNavControls';
import { TeamModal } from './components/TeamModal';
import { GridOverviewModal } from './components/GridOverviewModal';
import { generateStandaloneHtml } from './utils/exportHtml';
import { SLIDES_META } from './data/slidesData';

// Import all 14 Slide components
import { Slide1_Title } from './components/slides/Slide1_Title';
import { Slide2_Introduction } from './components/slides/Slide2_Introduction';
import { Slide3_ProblemStatement } from './components/slides/Slide3_ProblemStatement';
import { Slide4_Comparison } from './components/slides/Slide4_Comparison';
import { Slide6_AIDiagnosisFlow } from './components/slides/Slide6_AIDiagnosisFlow';
import { Slide7_KrishiSetu } from './components/slides/Slide7_KrishiSetu';
import { Slide8_KisanTimes } from './components/slides/Slide8_KisanTimes';
import { Slide9_PriceForecasting } from './components/slides/Slide9_PriceForecasting';
import { Slide10_AIChatbot } from './components/slides/Slide10_AIChatbot';
import { Slide11_FutureScope1 } from './components/slides/Slide11_FutureScope1';
import { Slide12_FutureScope2 } from './components/slides/Slide12_FutureScope2';
import { Slide13_RealLifeApp1 } from './components/slides/Slide13_RealLifeApp1';
import { Slide14_RealLifeApp2 } from './components/slides/Slide14_RealLifeApp2';
import { Slide15_ThankYou } from './components/slides/Slide15_ThankYou';

export default function App() {
  const [currentSlide, setCurrentSlide] = useState<number>(1);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  const [isAutoplay, setIsAutoplay] = useState<boolean>(false);
  const [soundEnabled, setSoundEnabled] = useState<boolean>(false);
  const [isTeamModalOpen, setIsTeamModalOpen] = useState<boolean>(false);
  const [isGridModalOpen, setIsGridModalOpen] = useState<boolean>(false);

  const TOTAL_SLIDES = 14;

  const handleNext = useCallback(() => {
    setCurrentSlide((prev) => (prev < TOTAL_SLIDES ? prev + 1 : prev));
  }, []);

  const handlePrev = useCallback(() => {
    setCurrentSlide((prev) => (prev > 1 ? prev - 1 : prev));
  }, []);

  const handleGoToSlide = useCallback((slideNum: number) => {
    if (slideNum >= 1 && slideNum <= TOTAL_SLIDES) {
      setCurrentSlide(slideNum);
    }
  }, []);

  // Autoplay Presenter Timer
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isAutoplay) {
      interval = setInterval(() => {
        setCurrentSlide((prev) => (prev < TOTAL_SLIDES ? prev + 1 : 1));
      }, 9000);
    }
    return () => clearInterval(interval);
  }, [isAutoplay]);

  // Preload background images and critical assets for sub-second slide loading
  useEffect(() => {
    const preloadAssets = () => {
      SLIDES_META.forEach((slide) => {
        if (slide.bgImage) {
          const img = new Image();
          img.src = slide.bgImage;
        }
      });
      const bitLogo = new Image();
      bitLogo.src = '/bit_logo.png';
    };

    if ('requestIdleCallback' in window) {
      (window as any).requestIdleCallback(preloadAssets);
    } else {
      setTimeout(preloadAssets, 200);
    }
  }, []);

  // Keyboard navigation shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isTeamModalOpen || isGridModalOpen) return;

      if (e.key === 'ArrowRight' || e.key === 'Space') {
        e.preventDefault();
        handleNext();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        handlePrev();
      } else if (e.key === 'f' || e.key === 'F') {
        handleToggleFullscreen();
      } else if (e.key === 'p' || e.key === 'P') {
        setIsAutoplay((prev) => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleNext, handlePrev, isTeamModalOpen, isGridModalOpen]);

  // Fullscreen Handler
  const handleToggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().then(() => setIsFullscreen(true)).catch(() => {});
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen().then(() => setIsFullscreen(false)).catch(() => {});
      }
    }
  };

  // Export Standalone Single-File HTML
  const handleExportHtml = () => {
    const htmlContent = generateStandaloneHtml();
    const blob = new Blob([htmlContent], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'FARM_SHIELD_AI_Presentation.html';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  // Render current slide component
  const renderSlideContent = () => {
    switch (currentSlide) {
      case 1:
        return <Slide1_Title onStartPresentation={() => handleGoToSlide(2)} />;
      case 2:
        return <Slide2_Introduction />;
      case 3:
        return <Slide3_ProblemStatement />;
      case 4:
        return <Slide4_Comparison />;
      case 5:
        return <Slide6_AIDiagnosisFlow />;
      case 6:
        return <Slide7_KrishiSetu />;
      case 7:
        return <Slide8_KisanTimes />;
      case 8:
        return <Slide9_PriceForecasting />;
      case 9:
        return <Slide10_AIChatbot />;
      case 10:
        return <Slide11_FutureScope1 />;
      case 11:
        return <Slide12_FutureScope2 />;
      case 12:
        return <Slide13_RealLifeApp1 />;
      case 13:
        return <Slide14_RealLifeApp2 />;
      case 14:
        return <Slide15_ThankYou />;
      default:
        return <Slide1_Title onStartPresentation={() => handleGoToSlide(2)} />;
    }
  };

  // Screen click navigation handler
  const handleScreenClick = (e: React.MouseEvent<HTMLDivElement>) => {
    // If clicking interactive elements like buttons, inputs, or modal content, don't trigger slide change
    const target = e.target as HTMLElement;
    if (target.closest('button') || target.closest('a') || target.closest('input') || target.closest('.modal-content')) {
      return;
    }

    const screenWidth = window.innerWidth;
    if (e.clientX < screenWidth * 0.15) {
      handlePrev();
    } else {
      handleNext();
    }
  };

  return (
    <div
      onClick={handleScreenClick}
      className="relative w-screen h-screen overflow-hidden bg-slate-950 font-sans select-none cursor-pointer"
    >
      {/* Background Agriculture & AI High-Res Media Layer */}
      <BackgroundMedia currentSlide={currentSlide} />

      {/* Top Left College Logo Badge (Compulsory Across All Slides except Slide 1) */}
      {currentSlide !== 1 && (
        <div className="fixed top-3 left-4 md:top-4 md:left-6 z-50 flex items-center gap-2.5 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-2xl shadow-xl border border-white/70 select-none pointer-events-none">
          <img
            src="/bit_logo.png"
            alt="Bangalore Institute of Technology Logo"
            className="h-8 md:h-10 w-auto object-contain"
          />
          <div className="hidden sm:flex flex-col text-left">
            <span className="font-outfit font-black text-xs md:text-sm text-[#1B4332] leading-tight">
              Bangalore Institute Of Technology
            </span>
            <span className="font-mono text-[10px] text-[#D97706] font-black leading-tight">
              Department of CSE(ICB)
            </span>
          </div>
        </div>
      )}

      {/* Slide Canvas Area */}
      <main className="relative w-full h-full z-10 flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className="w-full h-full"
          >
            {renderSlideContent()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Team Info & Slide Grid Modals */}
      <TeamModal isOpen={isTeamModalOpen} onClose={() => setIsTeamModalOpen(false)} />
      <GridOverviewModal
        isOpen={isGridModalOpen}
        currentSlide={currentSlide}
        onClose={() => setIsGridModalOpen(false)}
        onSelectSlide={handleGoToSlide}
      />
    </div>
  );
}
