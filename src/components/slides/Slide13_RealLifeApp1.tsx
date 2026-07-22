import React from 'react';
import { motion } from 'motion/react';
import { Globe, Smartphone, Landmark, Cpu, TrendingUp, CheckCircle2, Sparkles, ArrowRight } from 'lucide-react';

export const Slide13_RealLifeApp1: React.FC = () => {
  const applicabilityMetrics = [
    {
      stat: '58%',
      label: 'Indian Workforce in Agri',
      desc: 'Over 140 million agricultural households actively seeking yield optimization tools.',
      icon: Globe,
      img: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=300&auto=format&fit=crop&q=80',
    },
    {
      stat: '450M+',
      label: 'Rural Smartphone Users',
      desc: 'High-speed 4G/5G mobile internet penetration across 600,000+ Indian villages.',
      icon: Smartphone,
      img: 'https://images.unsplash.com/photo-1586771107445-d3ca888129ff?w=300&auto=format&fit=crop&q=80',
    },
    {
      stat: '₹1.4L Cr',
      label: 'Digital Agri Subsidies',
      desc: 'Strong government backing via AgSTACK, PM Digital Agriculture Mission & UPI.',
      icon: Landmark,
      img: 'https://images.unsplash.com/photo-1556742049-0a670f4a4591?w=300&auto=format&fit=crop&q=80',
    },
    {
      stat: '98.4%',
      label: 'AI Diagnostic Precision',
      desc: 'Proven computer vision models replacing expensive manual agronomist visits.',
      icon: Cpu,
      img: 'https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=300&auto=format&fit=crop&q=80',
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
          {/* Dual Color Vertical Accent Bar */}
          <div className="w-2 h-14 bg-gradient-to-b from-[#D97706] via-[#2C5E3B] to-[#88B04B] rounded-full shrink-0 mt-1" />
          <div>
            <div className="flex items-center gap-2.5 mb-1.5">
              <span className="text-xs md:text-sm font-mono font-black text-white bg-[#2C5E3B] px-3.5 py-1 rounded-full shadow-sm">
                12
              </span>
              <span className="text-xs md:text-sm font-extrabold uppercase tracking-widest text-[#D97706] flex items-center gap-1">
                <Sparkles className="w-4 h-4" /> Real-Life Applicability • Part 01
              </span>
            </div>
            <h2 className="font-outfit font-black text-3xl md:text-5xl lg:text-6xl text-[#2C5E3B] tracking-tight">
              Is FARM SHIELD AI Applicable in India?
            </h2>
          </div>
        </div>

        <p className="text-sm md:text-base text-[#2C5E3B]/90 font-medium max-w-md leading-snug">
          Economic dependence, mobile connectivity expansion, and Digital India government alignment.
        </p>
      </motion.div>

      {/* 4 Large Metric Cards Grid - High Contrast White Cards with Image Thumbnails */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 my-auto py-4">
        {applicabilityMetrics.map((m, idx) => {
          const IconComp = m.icon;
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
                <span className="font-outfit font-black text-4xl sm:text-5xl text-[#D97706]">{m.stat}</span>
                {/* Circular Plant/Agri Image Badge */}
                <div className="relative">
                  <img
                    src={m.img}
                    alt={m.label}
                    className="w-12 h-12 rounded-full object-cover border-2 border-[#D97706] shadow-sm group-hover:scale-105 transition-transform"
                  />
                  <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-[#2C5E3B] text-white flex items-center justify-center text-[10px] shadow">
                    <IconComp className="w-3 h-3 text-[#D97706]" />
                  </div>
                </div>
              </div>

              <div className="pl-2 space-y-1.5">
                <h3 className="font-outfit font-black text-base md:text-lg text-[#2C5E3B]">{m.label}</h3>
                <p className="text-xs md:text-sm text-[#2C5E3B]/90 leading-relaxed font-normal">
                  {m.desc}
                </p>
              </div>

              <div className="pl-2 pt-3 border-t border-[#2C5E3B]/10 text-xs font-mono font-bold text-[#2C5E3B] flex items-center justify-between">
                <span className="uppercase tracking-wider">Feasibility</span>
                <CheckCircle2 className="w-4 h-4 text-[#D97706]" />
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Detailed Key Drivers Panel */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="bg-[#2C5E3B] text-white p-6 rounded-3xl shadow-xl grid grid-cols-1 md:grid-cols-3 gap-6 border-2 border-[#2C5E3B]"
      >
        <div className="space-y-1.5">
          <h4 className="font-outfit font-black text-base md:text-lg text-[#D97706] flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-[#D97706]" /> Smartphone Adoption Wave
          </h4>
          <p className="text-xs md:text-sm text-emerald-100/90 leading-relaxed font-normal">
            With 4G/5G data rates among the lowest globally ($0.15/GB), rural farmers stream video tutorials and utilize mobile apps routinely.
          </p>
        </div>

        <div className="space-y-1.5">
          <h4 className="font-outfit font-black text-base md:text-lg text-[#D97706] flex items-center gap-2">
            <Landmark className="w-5 h-5 text-[#D97706]" /> Digital India Synergy
          </h4>
          <p className="text-xs md:text-sm text-emerald-100/90 leading-relaxed font-normal">
            Integration with PM-KISAN database and UPI payment rails enables frictionless onboarding across 600,000+ villages.
          </p>
        </div>

        <div className="space-y-1.5">
          <h4 className="font-outfit font-black text-base md:text-lg text-[#D97706] flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-[#D97706]" /> Vernacular AI Readiness
          </h4>
          <p className="text-xs md:text-sm text-emerald-100/90 leading-relaxed font-normal">
            Removing text literacy barriers through 13-language voice AI ensures 100% inclusivity across every region of India.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

