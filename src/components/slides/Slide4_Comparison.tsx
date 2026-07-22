import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, XCircle, Sparkles, Zap, MessageSquare, DollarSign, Layers, Shield } from 'lucide-react';

export const Slide4_Comparison: React.FC = () => {
  const comparisonItems = [
    {
      feature: 'AI Diagnostic Accuracy',
      traditional: '60%–70% (Generic templates)',
      farmShield: '98.4% (85K+ Trained CNN Leaf Model)',
      icon: Zap,
    },
    {
      feature: 'Multilingual Voice AI',
      traditional: 'English / Hindi text only',
      farmShield: '13 Indian Languages with Voice Readout',
      icon: MessageSquare,
    },
    {
      feature: 'Platform Pricing',
      traditional: 'Paid subscriptions or ad-heavy',
      farmShield: '100% Free Platform for All Farmers',
      icon: DollarSign,
    },
    {
      feature: 'Agricultural Scope',
      traditional: 'Fragmented single-purpose apps',
      farmShield: 'Diagnostics + Krishi Setu + News + Prices',
      icon: Layers,
    },
    {
      feature: 'Farmer Networking',
      traditional: 'None (No community peer support)',
      farmShield: 'Krishi Setu ("LinkedIn for Farmers")',
      icon: Shield,
    },
    {
      feature: 'Price Analytics',
      traditional: 'Static current mandi rates',
      farmShield: 'Predictive Mandi Trend AI Forecasting',
      icon: Sparkles,
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
                04
              </span>
              <span className="text-xs md:text-sm font-extrabold uppercase tracking-widest text-[#D97706] flex items-center gap-1">
                <Sparkles className="w-4 h-4" /> Strategic Benchmark
              </span>
            </div>
            <h2 className="font-outfit font-black text-3xl md:text-5xl lg:text-6xl text-[#2C5E3B] tracking-tight">
              Existing Solutions vs FARM SHIELD AI
            </h2>
          </div>
        </div>

        <p className="text-sm md:text-base text-[#2C5E3B]/90 font-medium max-w-md leading-snug">
          Comparative matrix demonstrating technological and economic superiority.
        </p>
      </motion.div>

      {/* Main Content: Split Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 my-auto py-2 items-center">
        {/* Left Col: Creative Circular Crop + Key Highlight (4 cols) */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-4 bg-[#2C5E3B] text-white p-6 rounded-3xl shadow-xl flex flex-col justify-between h-full space-y-4"
        >
          <div>
            <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#D97706] bg-black/20 px-2.5 py-1 rounded-full">
              Competitive Advantage
            </span>
            <h3 className="font-outfit font-black text-2xl text-white mt-2">
              Why FARM SHIELD AI Outperforms Traditional Apps
            </h3>
            <p className="text-xs text-emerald-100/90 leading-relaxed mt-2 font-normal">
              By consolidating disease diagnosis, community networking, mandi price prediction, and voice accessibility into one free platform, we eliminate all adoption barriers for rural farmers.
            </p>
          </div>

          <div className="relative flex items-center justify-center py-2">
            <div className="w-36 h-36 rounded-full border-4 border-white/20 overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1595974482597-4b8da8879bc5?q=80&w=600&auto=format&fit=crop"
                alt="Farmer Comparison"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-1 -right-1 w-10 h-10 rounded-full bg-[#D97706] flex items-center justify-center font-black text-white text-xs shadow-md">
              100%
            </div>
          </div>
        </motion.div>

        {/* Right Col: Clean Comparison Table (8 cols) */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-8 space-y-2.5"
        >
          <div className="grid grid-cols-12 px-4 py-2 bg-[#E8EFE6] rounded-2xl border border-[#2C5E3B]/20 font-mono text-[11px] font-extrabold text-[#2C5E3B] uppercase">
            <div className="col-span-4">Capability</div>
            <div className="col-span-4 text-red-700">Existing Apps</div>
            <div className="col-span-4 text-[#D97706]">FARM SHIELD AI</div>
          </div>

          {comparisonItems.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <div
                key={idx}
                className="grid grid-cols-12 px-5 py-3.5 bg-white/95 rounded-2xl border-2 border-[#2C5E3B]/15 hover:border-[#D97706] transition shadow-sm items-center text-xs sm:text-sm md:text-base"
              >
                <div className="col-span-4 font-outfit font-black text-[#2C5E3B] flex items-center gap-2.5">
                  <IconComp className="w-5 h-5 text-[#D97706] shrink-0" />
                  <span className="truncate">{item.feature}</span>
                </div>

                <div className="col-span-4 text-red-700/90 font-medium flex items-center gap-2 pr-2">
                  <XCircle className="w-4 h-4 text-red-600 shrink-0" />
                  <span className="truncate">{item.traditional}</span>
                </div>

                <div className="col-span-4 font-extrabold text-[#2C5E3B] flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#2C5E3B] shrink-0" />
                  <span className="truncate">{item.farmShield}</span>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="pt-3 border-t border-[#2C5E3B]/20 flex items-center justify-between text-xs text-[#2C5E3B] font-semibold"
      >
        <span>✨ Zero subscription fee, high AI accuracy, and complete voice accessibility.</span>
        <span className="font-mono text-[#D97706] font-extrabold">Slide 04</span>
      </motion.div>
    </div>
  );
};
