import React from 'react';
import { motion } from 'motion/react';
import { AppWindow, Layers, Bug, Share2, Compass, AlertCircle, Sparkles } from 'lucide-react';

export const Slide3_ProblemStatement: React.FC = () => {
  const problems = [
    {
      num: '01',
      title: 'App Fragmentation',
      desc: 'Farmers switch between 4–5 different apps for weather, news, crop prices, and disease help, creating friction.',
      icon: AppWindow,
      img: 'https://images.unsplash.com/photo-1586771107445-d3ca888129ff?w=300&auto=format&fit=crop&q=80',
    },
    {
      num: '02',
      title: 'Limited Feature Set',
      desc: 'Single-purpose tools offer isolated data without predictive analytics or actionable step-by-step guidance.',
      icon: Layers,
      img: 'https://images.unsplash.com/photo-1592982537447-7440770cbfc9?w=300&auto=format&fit=crop&q=80',
    },
    {
      num: '03',
      title: 'Low AI Accuracy',
      desc: 'Basic image scanners fail in field lighting conditions, producing misleading diagnoses.',
      icon: Bug,
      img: 'https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=300&auto=format&fit=crop&q=80',
    },
    {
      num: '04',
      title: 'Lack of Central Hub',
      desc: 'No centralized platform connects farm labor, community peer support, news, and market forecasts.',
      icon: Share2,
      img: 'https://images.unsplash.com/photo-1595974482597-4b8da8879bc5?w=300&auto=format&fit=crop&q=80',
    },
    {
      num: '05',
      title: 'Generic Advisory',
      desc: 'Absence of localized guidance translated into regional Indian languages with audio readout.',
      icon: Compass,
      img: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=300&auto=format&fit=crop&q=80',
    },
    {
      num: '06',
      title: 'Uninformed Distress Selling',
      desc: 'Middleman price opacity forces farmers to sell produce below cost during peak harvests.',
      icon: AlertCircle,
      img: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=300&auto=format&fit=crop&q=80',
    },
  ];

  return (
    <div className="relative w-full h-full min-h-screen flex flex-col justify-between pt-16 pb-16 px-6 md:px-12 max-w-7xl mx-auto z-10 text-[#1B4332] select-none">
      {/* Slide Header */}
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
                03
              </span>
              <span className="text-xs md:text-sm font-extrabold uppercase tracking-widest text-[#D97706] flex items-center gap-1">
                <Sparkles className="w-4 h-4" /> Major Bottlenecks
              </span>
            </div>
            <h2 className="font-outfit font-black text-3xl md:text-5xl lg:text-6xl text-[#2C5E3B] tracking-tight">
              Problem Statement: Farming Pain Points
            </h2>
          </div>
        </div>

        <p className="text-sm md:text-base text-[#2C5E3B]/90 font-medium max-w-md leading-snug">
          Key systemic challenges in conventional digital farming tools that FARM SHIELD AI resolves.
        </p>
      </motion.div>

      {/* 6 Grid Cards with Clean High Contrast Cards & Image Badges */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 my-auto py-4">
        {problems.map((p, idx) => {
          const IconComp = p.icon;
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="bg-white/95 p-6 rounded-3xl border-2 border-[#2C5E3B]/15 hover:border-[#D97706] hover:shadow-xl transition-all shadow-md space-y-4 flex flex-col justify-between relative overflow-hidden group"
            >
              {/* Dual Color Left Border Accent */}
              <div className="absolute left-0 top-0 bottom-0 w-2 bg-gradient-to-b from-[#2C5E3B] to-[#D97706]" />

              <div className="flex items-center justify-between pl-2">
                <div className="flex items-center gap-3">
                  {/* Circular Image Thumbnail */}
                  <div className="relative">
                    <img
                      src={p.img}
                      alt={p.title}
                      className="w-12 h-12 rounded-full object-cover border-2 border-[#D97706] shadow-sm group-hover:scale-105 transition-transform"
                    />
                    <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-[#2C5E3B] text-white flex items-center justify-center text-[10px] shadow">
                      <IconComp className="w-3 h-3 text-[#D97706]" />
                    </div>
                  </div>
                  <h3 className="font-outfit font-black text-lg md:text-xl text-[#2C5E3B] leading-tight">{p.title}</h3>
                </div>

                <span className="text-xs font-mono font-black text-[#D97706] bg-[#D97706]/10 border border-[#D97706]/30 px-2.5 py-1 rounded-full uppercase tracking-wider shrink-0">
                  P-{p.num}
                </span>
              </div>

              <div className="pl-2">
                <p className="text-xs md:text-sm text-[#2C5E3B]/90 leading-relaxed font-normal">
                  {p.desc}
                </p>
              </div>

              <div className="pl-2 pt-3 border-t border-[#2C5E3B]/10 text-xs font-mono font-bold text-[#D97706] uppercase tracking-wider">
                Impact: High Severity
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Footer Banner */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="pt-3 border-t border-[#2C5E3B]/20 flex items-center justify-between text-xs text-[#2C5E3B] font-semibold"
      >
        <span className="flex items-center gap-1.5">
          <Sparkles className="w-4 h-4 text-[#D97706]" />
          <span>FARM SHIELD AI replaces fragmented tools with a single unified, zero-cost intelligence ecosystem.</span>
        </span>
        <span className="font-mono text-[#D97706] font-extrabold">Slide 03</span>
      </motion.div>
    </div>
  );
};
