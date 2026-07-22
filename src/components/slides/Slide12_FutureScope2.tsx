import React from 'react';
import { motion } from 'motion/react';
import { ShoppingBag, Tractor, Truck, Route, Store, Globe2, ArrowRight, Sparkles } from 'lucide-react';

export const Slide12_FutureScope2: React.FC = () => {
  const ecosystemServices = [
    {
      title: 'Fertilizer E-Commerce',
      desc: 'Direct-from-manufacturer bio-fertilizers, seeds, and organic pesticides delivered to farmgate without retail markup.',
      icon: ShoppingBag,
      img: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=300&auto=format&fit=crop&q=80',
    },
    {
      title: 'Farm Equipment Rental',
      desc: 'On-demand Uber-style booking for combine harvesters, seed drills, and power tillers from local equipment owners.',
      icon: Tractor,
      img: 'https://images.unsplash.com/photo-1592982537447-7440770cbfc9?w=300&auto=format&fit=crop&q=80',
    },
    {
      title: 'Logistics & Trucking',
      desc: 'Seamless booking of refrigerated and standard transport trucks to ship produce directly to city wholesale markets.',
      icon: Truck,
      img: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=300&auto=format&fit=crop&q=80',
    },
    {
      title: 'Supply Chain AI Optimization',
      desc: 'Algorithms calculate optimal dispatch routes and group cold-storage shipments to minimize transport spoilage.',
      icon: Route,
      img: 'https://images.unsplash.com/photo-1586771107445-d3ca888129ff?w=300&auto=format&fit=crop&q=80',
    },
    {
      title: 'Direct B2B Marketplace',
      desc: 'Enables farmers to list harvested crops directly for commercial B2B buyers, supermarkets, and food processors.',
      icon: Store,
      img: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=300&auto=format&fit=crop&q=80',
    },
    {
      title: 'Digital Credit & Insurance',
      desc: 'Unified digital footprint combining credit scoring, crop insurance claims, and direct government subsidy disbursement.',
      icon: Globe2,
      img: 'https://images.unsplash.com/photo-1556742049-0a670f4a4591?w=300&auto=format&fit=crop&q=80',
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
                11
              </span>
              <span className="text-xs md:text-sm font-extrabold uppercase tracking-widest text-[#D97706] flex items-center gap-1">
                <Sparkles className="w-4 h-4" /> Future Scope • Part 02
              </span>
            </div>
            <h2 className="font-outfit font-black text-3xl md:text-5xl lg:text-6xl text-[#2C5E3B] tracking-tight">
              Complete Digital Agri Ecosystem
            </h2>
          </div>
        </div>

        <p className="text-sm md:text-base text-[#2C5E3B]/90 font-medium max-w-md leading-snug">
          Scaling <strong className="text-[#2C5E3B] font-bold">FARM SHIELD AI</strong> into a full end-to-end commerce, logistics, and marketplace infrastructure.
        </p>
      </motion.div>

      {/* 6 Grid Modules - High Contrast Cards with Circular Images & Dual Color Accent */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 my-auto py-4">
        {ecosystemServices.map((es, idx) => {
          const IconComp = es.icon;
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="bg-white/95 backdrop-blur-md p-6 rounded-3xl border-2 border-[#2C5E3B]/15 hover:border-[#D97706] hover:shadow-xl transition-all shadow-md flex flex-col justify-between relative overflow-hidden group space-y-4"
            >
              {/* Dual Color Left Border Accent */}
              <div className="absolute left-0 top-0 bottom-0 w-2 bg-gradient-to-b from-[#2C5E3B] to-[#D97706]" />

              <div className="flex items-center justify-between pl-2">
                <div className="flex items-center gap-3">
                  {/* Circular Image Thumbnail */}
                  <div className="relative">
                    <img
                      src={es.img}
                      alt={es.title}
                      className="w-12 h-12 rounded-full object-cover border-2 border-[#D97706] shadow-sm group-hover:scale-105 transition-transform"
                    />
                    <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-[#2C5E3B] text-white flex items-center justify-center text-[10px] shadow">
                      <IconComp className="w-3 h-3 text-[#D97706]" />
                    </div>
                  </div>
                  <h3 className="font-outfit font-black text-lg md:text-xl text-[#2C5E3B] leading-tight">{es.title}</h3>
                </div>

                <span className="text-xs font-mono font-black text-[#D97706] bg-[#D97706]/10 border border-[#D97706]/30 px-2.5 py-1 rounded-full uppercase tracking-wider shrink-0">
                  M0{idx + 1}
                </span>
              </div>

              <div className="pl-2">
                <p className="text-xs md:text-sm text-[#2C5E3B]/90 leading-relaxed font-normal">
                  {es.desc}
                </p>
              </div>

              <div className="pl-2 pt-3 border-t border-[#2C5E3B]/10 text-xs font-mono font-bold text-[#2C5E3B] flex items-center justify-between">
                <span className="uppercase tracking-wider">Ecosystem Module</span>
                <ArrowRight className="w-4 h-4 text-[#D97706]" />
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="pt-4 border-t-2 border-[#2C5E3B]/20 flex items-center justify-between text-xs md:text-sm text-[#2C5E3B] font-bold"
      >
        <span className="flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-[#D97706]" />
          <span>Building an interconnected value chain empowering farmers from sowing to consumer delivery.</span>
        </span>
        <span className="font-mono text-[#D97706] font-extrabold text-sm md:text-base">Slide 11</span>
      </motion.div>
    </div>
  );
};
