import React from 'react';
import { motion } from 'motion/react';
import { Users, HeartHandshake, Share2, MapPin, ThumbsUp, MessageSquare, Sparkles } from 'lucide-react';

export const Slide7_KrishiSetu: React.FC = () => {
  return (
    <div className="relative w-full h-full flex flex-col justify-between pt-20 pb-20 px-6 md:px-12 max-w-7xl mx-auto z-10 text-[#1B4332] select-none">
      {/* Slide Header */}
      <motion.div
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col md:flex-row md:items-end justify-between border-b border-[#2C5E3B]/20 pb-4 gap-4"
      >
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xs font-mono font-black text-white bg-[#2C5E3B] px-3 py-0.5 rounded-full">
              06
            </span>
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#D97706]">
              Feature 01 • Krishi Setu
            </span>
          </div>
          <h2 className="font-outfit font-black text-3xl md:text-5xl text-[#2C5E3B] tracking-tight">
            Krishi Setu: "LinkedIn for Farmers"
          </h2>
        </div>

        <p className="text-xs md:text-sm text-[#2C5E3B]/80 font-medium max-w-md">
          Peer-to-peer digital network connecting farmers, skilled agricultural labor, and equipment owners.
        </p>
      </motion.div>

      {/* Grid Content */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 my-auto py-2 items-center">
        {/* Left Column: Core Pillars (5 cols) */}
        <div className="lg:col-span-5 space-y-3.5">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white/95 p-5 rounded-3xl border-2 border-[#2C5E3B]/15 hover:border-[#D97706] transition shadow-md space-y-2"
          >
            <div className="flex items-center gap-3 text-[#2C5E3B] font-black">
              <div className="w-10 h-10 rounded-2xl bg-[#2C5E3B] text-white flex items-center justify-center shrink-0">
                <Users className="w-5 h-5 text-[#D97706]" />
              </div>
              <h3 className="font-outfit text-lg md:text-xl">Labor & Equipment Hiring</h3>
            </div>
            <p className="text-xs md:text-sm text-[#2C5E3B]/90 leading-relaxed font-normal">
              Post harvesting jobs or rent tractors and rotavators directly from neighboring farmers during peak seasons.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white/95 p-5 rounded-3xl border-2 border-[#2C5E3B]/15 hover:border-[#D97706] transition shadow-md space-y-2"
          >
            <div className="flex items-center gap-3 text-[#2C5E3B] font-black">
              <div className="w-10 h-10 rounded-2xl bg-[#D97706] text-white flex items-center justify-center shrink-0">
                <HeartHandshake className="w-5 h-5 text-white" />
              </div>
              <h3 className="font-outfit text-lg md:text-xl">Peer Community Support</h3>
            </div>
            <p className="text-xs md:text-sm text-[#2C5E3B]/90 leading-relaxed font-normal">
              Share real-world field insights on high-yield seeds, organic fertilizers, and local buyer trustworthiness.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-white/95 p-5 rounded-3xl border-2 border-[#2C5E3B]/15 hover:border-[#D97706] transition shadow-md space-y-2"
          >
            <div className="flex items-center gap-3 text-[#2C5E3B] font-black">
              <div className="w-10 h-10 rounded-2xl bg-[#2C5E3B] text-white flex items-center justify-center shrink-0">
                <Share2 className="w-5 h-5 text-[#D97706]" />
              </div>
              <h3 className="font-outfit text-lg md:text-xl">Bulk Buying Alliances</h3>
            </div>
            <p className="text-xs md:text-sm text-[#2C5E3B]/90 leading-relaxed font-normal">
              Group together with village neighbors to purchase fertilizer and seeds at wholesale prices, cutting input costs.
            </p>
          </motion.div>
        </div>

        {/* Right Column: Live Feed Mockup (7 cols) */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="lg:col-span-7 bg-[#2C5E3B] text-white p-5 rounded-3xl shadow-xl space-y-3"
        >
          <div className="flex items-center justify-between border-b border-white/15 pb-2.5">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#D97706] animate-pulse"></span>
              <h3 className="font-outfit font-black text-sm text-white">Krishi Setu Live Activity Feed</h3>
            </div>
            <span className="text-[10px] font-mono font-bold text-white bg-black/30 px-2.5 py-0.5 rounded-full">
              Mandya District, Karnataka
            </span>
          </div>

          {/* Post 1 */}
          <div className="bg-white/10 p-3.5 rounded-2xl border border-white/15 space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-[#D97706] text-white font-black flex items-center justify-center text-xs">
                  RG
                </div>
                <div>
                  <h4 className="text-xs font-black text-white">Ramesh Gowda</h4>
                  <p className="text-[10px] text-emerald-200 flex items-center gap-1 font-medium">
                    <MapPin className="w-3 h-3 text-[#D97706]" /> Mandya • Sugarcane Farmer
                  </p>
                </div>
              </div>
              <span className="text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full bg-black/30 text-emerald-200">
                Harvesting Labor
              </span>
            </div>

            <p className="text-xs text-emerald-100 font-normal">
              Need 6 experienced labors for sugarcane harvesting starting this Friday. Daily wage ₹700 + food provided. Contact directly!
            </p>

            <div className="flex items-center gap-4 text-[11px] text-emerald-200 pt-1 border-t border-white/10">
              <span className="flex items-center gap-1 font-bold cursor-pointer"><ThumbsUp className="w-3.5 h-3.5 text-[#D97706]" /> 24 Interested</span>
              <span className="flex items-center gap-1 font-bold cursor-pointer"><MessageSquare className="w-3.5 h-3.5" /> 8 Replies</span>
              <span className="text-[#D97706] font-extrabold ml-auto">Verified Request</span>
            </div>
          </div>

          {/* Post 2 */}
          <div className="bg-white/10 p-3.5 rounded-2xl border border-white/15 space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-emerald-700 text-white font-black flex items-center justify-center text-xs">
                  SK
                </div>
                <div>
                  <h4 className="text-xs font-black text-white">Suresh Kumar</h4>
                  <p className="text-[10px] text-emerald-200 flex items-center gap-1 font-medium">
                    <MapPin className="w-3 h-3 text-[#D97706]" /> Hassan • Paddy Farmer
                  </p>
                </div>
              </div>
              <span className="text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full bg-black/30 text-emerald-200">
                Tractor Rental
              </span>
            </div>

            <p className="text-xs text-emerald-100 font-normal">
              45HP Mahindra Tractor available for rent with rotavator attachment. Available for next 4 days in Hassan zone.
            </p>

            <div className="flex items-center gap-4 text-[11px] text-emerald-200 pt-1 border-t border-white/10">
              <span className="flex items-center gap-1 font-bold cursor-pointer"><ThumbsUp className="w-3.5 h-3.5 text-[#D97706]" /> 15 Likes</span>
              <span className="flex items-center gap-1 font-bold cursor-pointer"><MessageSquare className="w-3.5 h-3.5" /> 5 Quotes</span>
              <span className="text-[#D97706] font-extrabold ml-auto">₹1,200 / hr</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="pt-3 border-t border-[#2C5E3B]/20 flex items-center justify-between text-xs text-[#2C5E3B] font-semibold"
      >
        <span className="flex items-center gap-1.5">
          <Sparkles className="w-4 h-4 text-[#D97706]" />
          <span>Direct peer-to-peer village collaboration eliminates middleman exploitation.</span>
        </span>
        <span className="font-mono text-[#D97706] font-extrabold">Slide 06</span>
      </motion.div>
    </div>
  );
};
