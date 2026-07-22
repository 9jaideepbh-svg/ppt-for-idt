import React from 'react';
import { motion } from 'motion/react';
import { PROJECT_INFO, TEAM_MEMBERS } from '../../data/slidesData';
import { GraduationCap, Users, Play, ArrowRight, Award, Sparkles, Sprout } from 'lucide-react';

interface Slide1Props {
  onStartPresentation: () => void;
}

export const Slide1_Title: React.FC<Slide1Props> = () => {
  return (
    <div className="relative w-full h-full flex flex-col justify-between pt-10 pb-10 px-6 md:px-16 max-w-7xl mx-auto z-10 text-white select-none">
      {/* Main Hero Title Block - Minimalistic & Premium Typography */}
      <div className="my-auto text-center space-y-4 py-8 relative">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-4 max-w-4xl mx-auto"
        >
          {/* Giant Clean Title */}
          <h1 className="font-outfit font-black text-6xl sm:text-8xl md:text-9xl tracking-tight text-white leading-none drop-shadow-[0_4px_12px_rgba(0,0,0,0.3)]">
            FarmShield
          </h1>

          {/* Wide Tracked Subtitle */}
          <p className="text-sm sm:text-base md:text-lg text-white font-mono font-extrabold tracking-[0.25em] uppercase flex items-center justify-center gap-2 drop-shadow-sm">
            <span className="w-8 h-1 bg-[#D97706] rounded-full inline-block" />
            <span>{PROJECT_INFO.subtitle}</span>
            <span className="w-8 h-1 bg-[#D97706] rounded-full inline-block" />
          </p>

          <p className="text-xs sm:text-sm text-amber-100 font-semibold italic tracking-wider pt-1 drop-shadow-sm">
            "{PROJECT_INFO.tagline}"
          </p>
        </motion.div>
      </div>

      {/* Bottom Metadata Cards Grid: Plain Glassmorphism Cards with Ultra Clarity */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-stretch"
      >
        {/* Left Card: Project Guide - Plain Glassmorphism */}
        <div className="lg:col-span-4 bg-black/40 backdrop-blur-xl p-5 md:p-6 rounded-3xl border border-white/40 shadow-[0_20px_50px_rgba(0,0,0,0.4)] flex flex-col justify-center space-y-2 text-white relative overflow-hidden group">
          <div className="flex items-center gap-2 text-amber-400 font-mono font-black text-xs uppercase tracking-wider">
            <Award className="w-4 h-4 text-amber-400" />
            <span>Project Guide</span>
          </div>
          <h3 className="font-outfit font-black text-xl md:text-2xl text-white">{PROJECT_INFO.guide}</h3>
          <p className="text-xs text-amber-200/90 font-extrabold font-mono">{PROJECT_INFO.department}</p>
        </div>

        {/* Right Card: Team Members & USN List - Plain Glassmorphism */}
        <div className="lg:col-span-8 bg-black/40 backdrop-blur-xl p-5 md:p-6 rounded-3xl border border-white/40 shadow-[0_20px_50px_rgba(0,0,0,0.4)] space-y-3 text-white relative overflow-hidden">
          <div className="flex items-center justify-between border-b border-white/20 pb-2">
            <div className="flex items-center gap-2 text-amber-400 font-mono font-black text-xs uppercase tracking-wider">
              <Users className="w-4 h-4 text-amber-400" />
              <span>Project Team Members</span>
            </div>
            <span className="text-[10px] font-mono text-white bg-amber-500/80 px-3 py-1 rounded-full border border-amber-300/40 font-black shadow-sm">
              6 Developers • {PROJECT_INFO.academicYear}
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
            {TEAM_MEMBERS.map((m, idx) => (
              <div key={idx} className="bg-white/95 backdrop-blur-md p-2.5 rounded-2xl border border-white/80 transition flex flex-col justify-between shadow-md hover:bg-white text-[#1B4332]">
                <span className="text-xs font-outfit font-black text-[#1B4332]">{m.name}</span>
                <div className="flex items-center justify-between mt-1 text-[10px]">
                  <span className="font-mono text-[#D97706] font-black">{m.usn}</span>
                  <span className="px-2 py-0.5 rounded-full bg-[#1B4332] text-white font-extrabold text-[9px]">{m.department}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};
