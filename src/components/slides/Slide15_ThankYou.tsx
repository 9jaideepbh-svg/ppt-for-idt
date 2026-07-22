import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Heart, Leaf, Award } from 'lucide-react';
import { PROJECT_INFO, TEAM_MEMBERS } from '../../data/slidesData';

export const Slide15_ThankYou: React.FC = () => {
  return (
    <div className="relative w-full h-full min-h-screen flex flex-col justify-between pt-12 pb-20 px-6 md:px-12 max-w-7xl mx-auto z-10 text-[#4A2E18] select-none overflow-hidden">
      {/* CANVA-STYLE DECORATIVE HALF CIRCLE / ARCH DESIGNS */}
      {/* Top Right Earthy Brown & Green Overlapping Half Circles */}
      <div className="absolute top-0 right-0 w-72 h-36 md:w-96 md:h-48 bg-[#6D4C41]/15 rounded-b-full blur-sm pointer-events-none -z-10 transform translate-x-12 -translate-y-6" />
      <div className="absolute top-0 right-20 w-56 h-28 md:w-72 md:h-36 bg-[#2C5E3B]/15 rounded-b-full blur-sm pointer-events-none -z-10" />

      {/* Bottom Left Terracotta/Brown Half Circle */}
      <div className="absolute bottom-12 left-0 w-64 h-32 md:w-80 md:h-40 bg-[#D97706]/15 rounded-t-full blur-sm pointer-events-none -z-10 transform -translate-x-10" />

      {/* Center Background Subtle Arch */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#8D6E63]/10 rounded-t-full blur-2xl pointer-events-none -z-10" />

      {/* Main Thank You Card Container with White Canvas & Arched Visual Frame */}
      <div className="my-auto py-6 flex flex-col items-center text-center space-y-8 relative z-10">

        {/* Top Floating Half-Circle Image Badge Frame */}
        <motion.div
          initial={{ opacity: 0, y: -20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          {/* Half-Circle / Arch Framed Image */}
          <div className="w-44 h-28 md:w-56 md:h-36 rounded-t-full overflow-hidden border-4 border-[#6D4C41] shadow-2xl bg-white mx-auto relative group">
            <img
              src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=600&auto=format&fit=crop&q=80"
              alt="Green Farm Field"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#4A2E18]/40 via-transparent to-transparent" />
          </div>

          {/* Plant Leaf Badge */}
          <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-[#2C5E3B] text-white p-2.5 rounded-full shadow-lg border-2 border-white flex items-center justify-center">
            <Leaf className="w-5 h-5 text-[#D97706]" />
          </div>
        </motion.div>

        {/* Thank You Main Heading in Rich Brown Font */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-3 max-w-3xl"
        >
          <div className="flex items-center justify-center gap-3">
            <div className="h-0.5 w-12 bg-[#6D4C41]/30 rounded-full" />
            <span className="text-xs md:text-sm font-mono font-extrabold uppercase tracking-[0.3em] text-[#8D6E63]">
              Presentation Concluded
            </span>
            <div className="h-0.5 w-12 bg-[#6D4C41]/30 rounded-full" />
          </div>

          <h1 className="font-outfit font-black text-5xl sm:text-7xl md:text-8xl text-[#4A2E18] tracking-tight drop-shadow-sm">
            THANK YOU
          </h1>

          {/* Main User Requested Text: "THE FUTURE WITH - FARM SHIELD" */}
          <div className="pt-2">
            <h2 className="font-outfit font-black text-2xl sm:text-3xl md:text-4xl text-[#6D4C41] tracking-wider uppercase flex items-center justify-center gap-2 md:gap-3 flex-wrap">
              <span>THE FUTURE WITH</span>
              <span className="text-[#D97706] font-mono">—</span>
              <span className="bg-[#4A2E18] text-[#FAF7F0] px-5 py-1.5 rounded-2xl shadow-md border border-[#D97706]/40">
                FARM SHIELD
              </span>
            </h2>
          </div>

          <p className="text-base sm:text-lg text-[#5D4037]/90 font-medium max-w-2xl mx-auto pt-2 leading-relaxed">
            Empowering Indian agriculture through sub-second AI disease diagnosis, predictive market forecasting, and vernacular community support.
          </p>
        </motion.div>

        {/* Half-Circle Arch Cards for Team & College Acknowledgements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl pt-4"
        >
          {/* Institution Card */}
          <div className="bg-white/95 backdrop-blur-sm p-6 rounded-3xl border-2 border-[#6D4C41]/20 shadow-md text-left flex items-start gap-4 relative overflow-hidden group hover:border-[#D97706] transition-all">
            <div className="w-14 h-14 rounded-2xl bg-white p-1 border border-[#6D4C41]/20 flex items-center justify-center shrink-0 shadow-md overflow-hidden">
              <img src="/bit_logo.png" alt="Bangalore Institute of Technology Logo" className="w-full h-full object-contain" />
            </div>
            <div className="space-y-1">
              <span className="text-xs font-mono font-bold text-[#8D6E63] uppercase tracking-wider block">
                Academic Institution
              </span>
              <h3 className="font-outfit font-black text-lg text-[#4A2E18]">
                {PROJECT_INFO.college}
              </h3>
              <p className="text-xs text-[#D97706] font-extrabold font-mono">
                {PROJECT_INFO.department} • {PROJECT_INFO.academicYear}
              </p>
              <p className="text-xs text-[#8D6E63] pt-1">
                Guided by: <strong className="text-[#4A2E18] font-bold">{PROJECT_INFO.guide}</strong>
              </p>
            </div>
          </div>

          {/* Team Members Brief Card */}
          <div className="bg-white/95 backdrop-blur-sm p-6 rounded-3xl border-2 border-[#6D4C41]/20 shadow-md text-left flex items-start gap-4 relative overflow-hidden group hover:border-[#D97706] transition-all">
            <div className="w-12 h-12 rounded-2xl bg-[#2C5E3B] text-white flex items-center justify-center shrink-0 shadow-md">
              <Sparkles className="w-6 h-6 text-[#D97706]" />
            </div>
            <div className="space-y-1 w-full">
              <span className="text-xs font-mono font-bold text-[#8D6E63] uppercase tracking-wider block">
                Project Team
              </span>
              <div className="grid grid-cols-2 gap-x-3 gap-y-1.5 pt-1">
                {TEAM_MEMBERS.map((member, i) => (
                  <div key={i} className="text-xs font-bold text-[#4A2E18] flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#D97706] shrink-0" />
                    <span className="truncate">{member.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
};
