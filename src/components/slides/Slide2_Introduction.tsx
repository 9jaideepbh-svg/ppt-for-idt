import React from 'react';
import { motion } from 'motion/react';
import { Sprout, AlertTriangle, Cpu, Layers, Globe2, ShieldAlert, Sparkles, TrendingUp } from 'lucide-react';

export const Slide2_Introduction: React.FC = () => {
  return (
    <div className="relative w-full h-full flex flex-col justify-between pt-20 pb-20 px-6 md:px-12 max-w-7xl mx-auto z-10 text-[#1B4332] select-none">
      {/* Slide Header Layout - Canva Style */}
      <motion.div
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col md:flex-row md:items-end justify-between border-b-2 border-[#2C5E3B]/20 pb-5 gap-4"
      >
        <div className="flex items-start gap-3">
          {/* Dual Color Vertical Bar */}
          <div className="w-2 h-14 bg-gradient-to-b from-[#D97706] via-[#2C5E3B] to-[#88B04B] rounded-full shrink-0 mt-1" />
          <div>
            <div className="flex items-center gap-2.5 mb-1.5">
              <span className="text-xs md:text-sm font-mono font-black text-white bg-[#2C5E3B] px-3.5 py-1 rounded-full shadow-sm">
                02
              </span>
              <span className="text-xs md:text-sm font-extrabold uppercase tracking-widest text-[#D97706] flex items-center gap-1">
                <Sparkles className="w-4 h-4" /> Introduction & Context
              </span>
            </div>
            <h2 className="font-outfit font-black text-3xl md:text-5xl lg:text-6xl text-[#2C5E3B] tracking-tight">
              Current Agriculture Scenario & The AI Need
            </h2>
          </div>
        </div>

        <p className="text-sm md:text-base text-[#2C5E3B]/90 font-medium max-w-md leading-snug">
          Bridging traditional Indian farming with cutting-edge artificial intelligence for yield optimization.
        </p>
      </motion.div>

      {/* Main Content Grid with Circular Photo Frame & Clean Text */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 my-auto py-2 items-center">
        {/* Left Side: 4 Key Pillars (7 cols) */}
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Pillar 1 */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-2.5 bg-white/90 p-5 rounded-3xl border-2 border-[#2C5E3B]/15 shadow-md"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-[#2C5E3B] text-white flex items-center justify-center shadow-sm shrink-0">
                <Sprout className="w-5 h-5 text-[#D97706]" />
              </div>
              <h3 className="font-outfit font-black text-xl text-[#2C5E3B]">1. Agriculture Scale</h3>
            </div>
            <p className="text-sm md:text-base text-[#2C5E3B]/90 leading-relaxed font-normal">
              Backbone of Indian economy powering 18%+ GDP. Over 140M smallholder farmers work across diverse agro-climatic zones facing water stress.
            </p>
            <span className="inline-block text-xs font-mono font-bold text-[#D97706] bg-[#E8EFE6] px-3 py-1 rounded-full border border-[#2C5E3B]/10">
              58% Population Dependent
            </span>
          </motion.div>

          {/* Pillar 2 */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-2.5 bg-white/90 p-5 rounded-3xl border-2 border-[#2C5E3B]/15 shadow-md"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-[#D97706] text-white flex items-center justify-center shadow-sm shrink-0">
                <AlertTriangle className="w-5 h-5" />
              </div>
              <h3 className="font-outfit font-black text-xl text-[#2C5E3B]">2. Core Challenges</h3>
            </div>
            <p className="text-sm md:text-base text-[#2C5E3B]/90 leading-relaxed font-normal">
              Pests and crop diseases destroy over ₹50,000 Crores in crop value every season due to delayed diagnosis and erratic market rates.
            </p>
            <span className="inline-block text-xs font-mono font-bold text-[#D97706] bg-[#E8EFE6] px-3 py-1 rounded-full border border-[#2C5E3B]/10">
              35% Seasonal Yield Loss
            </span>
          </motion.div>

          {/* Pillar 3 */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="space-y-2.5 bg-white/90 p-5 rounded-3xl border-2 border-[#2C5E3B]/15 shadow-md"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-[#2C5E3B] text-white flex items-center justify-center shadow-sm shrink-0">
                <Cpu className="w-5 h-5 text-[#D97706]" />
              </div>
              <h3 className="font-outfit font-black text-xl text-[#2C5E3B]">3. The AI Advantage</h3>
            </div>
            <p className="text-sm md:text-base text-[#2C5E3B]/90 leading-relaxed font-normal">
              Computer Vision diagnoses crop leaf diseases instantly from photos, while machine learning predicts market prices to maximize profits.
            </p>
            <span className="inline-block text-xs font-mono font-bold text-[#2C5E3B] bg-[#E8EFE6] px-3 py-1 rounded-full border border-[#2C5E3B]/10">
              98.4% Diagnosis Accuracy
            </span>
          </motion.div>

          {/* Pillar 4 */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="space-y-2.5 bg-white/90 p-5 rounded-3xl border-2 border-[#2C5E3B]/15 shadow-md"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-[#D97706] text-white flex items-center justify-center shadow-sm shrink-0">
                <Layers className="w-5 h-5" />
              </div>
              <h3 className="font-outfit font-black text-xl text-[#2C5E3B]">4. Unified Platform</h3>
            </div>
            <p className="text-sm md:text-base text-[#2C5E3B]/90 leading-relaxed font-normal">
              FARM SHIELD AI unifies disease detection, community network, mandi rates, and 13-language voice assistance into one simple app.
            </p>
            <span className="inline-block text-xs font-mono font-bold text-[#2C5E3B] bg-[#E8EFE6] px-3 py-1 rounded-full border border-[#2C5E3B]/10">
              All-In-One Solution
            </span>
          </motion.div>
        </div>

        {/* Right Side: Creative Overlapping Circular Photos (5 cols) - Exact Canva Style */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="lg:col-span-5 relative flex items-center justify-center h-72 md:h-80"
        >
          {/* Main Circular Image */}
          <div className="relative w-56 h-56 sm:w-64 sm:h-64 rounded-full border-4 border-[#2C5E3B] overflow-hidden shadow-2xl z-10">
            <img
              src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=1000&auto=format&fit=crop"
              alt="Indian Agriculture Field"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Overlapping Smaller Secondary Circular Image */}
          <div className="absolute -bottom-2 -left-2 w-36 h-36 sm:w-40 sm:h-40 rounded-full border-4 border-[#FAF7F0] overflow-hidden shadow-xl z-20">
            <img
              src="https://images.unsplash.com/photo-1592982537447-7440770cbfc9?q=80&w=600&auto=format&fit=crop"
              alt="Smart Agriculture Farmer"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Terracotta Orange Accent Circle - Matches Canva Ref */}
          <div className="absolute -top-3 -right-3 w-16 h-16 rounded-full bg-[#D97706] shadow-lg z-0" />
          <div className="absolute bottom-6 -right-6 w-10 h-10 rounded-full bg-[#2C5E3B] z-0" />
        </motion.div>
      </div>

      {/* Footer Objective Banner */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="pt-3 border-t border-[#2C5E3B]/20 flex items-center justify-between text-xs text-[#2C5E3B] font-semibold"
      >
        <span>💡 Objective: Transitioning reactive farming to proactive, AI-driven precision agriculture.</span>
        <span className="font-mono text-[#D97706] font-extrabold">Slide 02</span>
      </motion.div>
    </div>
  );
};
