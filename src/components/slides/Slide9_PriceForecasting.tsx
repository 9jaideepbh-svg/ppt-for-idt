import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';
import { PRICE_FORECAST_DATA } from '../../data/slidesData';
import { TrendingUp, ShieldCheck, Sparkles, ArrowUpRight } from 'lucide-react';

export const Slide9_PriceForecasting: React.FC = () => {
  const [selectedCrop, setSelectedCrop] = useState<'rice' | 'wheat' | 'tomato' | 'cotton'>('cotton');

  const cropMeta = {
    rice: { name: 'Paddy Rice (Basmati)', color: '#D97706', unit: '₹ / Quintal' },
    wheat: { name: 'Wheat (Sharbati)', color: '#D97706', unit: '₹ / Quintal' },
    tomato: { name: 'Tomato (Hybrid Red)', color: '#D97706', unit: '₹ / Quintal' },
    cotton: { name: 'Cotton (Long Staple)', color: '#D97706', unit: '₹ / Quintal' },
  };

  const currentCrop = cropMeta[selectedCrop];

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
              08
            </span>
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#D97706]">
              Feature 03 • Market Intelligence
            </span>
          </div>
          <h2 className="font-outfit font-black text-3xl md:text-5xl text-[#2C5E3B] tracking-tight">
            AI Mandi Price Forecasting
          </h2>
        </div>

        {/* Crop Selector Tabs */}
        <div className="flex items-center gap-1.5 bg-[#E8EFE6] p-1 rounded-full border border-[#2C5E3B]/20 self-start md:self-auto">
          {(['cotton', 'rice', 'wheat', 'tomato'] as const).map((c) => (
            <button
              key={c}
              onClick={() => setSelectedCrop(c)}
              className={`px-3 py-1 rounded-full text-xs font-bold transition cursor-pointer capitalize ${
                selectedCrop === c
                  ? 'bg-[#2C5E3B] text-white shadow-sm font-extrabold'
                  : 'text-[#2C5E3B] hover:bg-[#2C5E3B]/10'
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </motion.div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 my-auto py-2 items-center">
        {/* Left Side: Recharts Area Chart Card (8 cols) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-8 bg-[#2C5E3B] text-white p-5 sm:p-6 rounded-3xl shadow-xl space-y-3"
        >
          <div className="flex items-center justify-between border-b border-white/15 pb-3">
            <div>
              <span className="text-[10px] font-mono font-bold text-emerald-200 uppercase">Selected Commodity</span>
              <h3 className="font-outfit font-black text-xl text-white flex items-center gap-2 mt-0.5">
                <span>{currentCrop.name}</span>
                <span className="text-xs font-mono font-bold px-2.5 py-0.5 rounded-full bg-black/30 text-[#D97706]">
                  {currentCrop.unit}
                </span>
              </h3>
            </div>

            <div className="text-right">
              <span className="text-[10px] text-emerald-200 font-mono font-bold uppercase block">Recommended Sell Window</span>
              <span className="text-xs font-extrabold text-white bg-[#D97706] px-3 py-1 rounded-full inline-flex items-center gap-1 shadow-sm">
                <ArrowUpRight className="w-3.5 h-3.5" /> August 2026 Peak
              </span>
            </div>
          </div>

          {/* Recharts Area Chart */}
          <div className="h-56 sm:h-60 w-full pt-2">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={PRICE_FORECAST_DATA} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="cropGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#D97706" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#D97706" stopOpacity={0.0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.15)" />
                <XAxis dataKey="month" stroke="#A7F3D0" tick={{ fontSize: 11 }} />
                <YAxis stroke="#A7F3D0" tick={{ fontSize: 11 }} domain={['dataMin - 200', 'dataMax + 200']} />
                <Tooltip
                  contentStyle={{ backgroundColor: '#183A2B', borderColor: '#D97706', borderRadius: '16px', fontSize: '12px', color: '#fff' }}
                  labelStyle={{ color: '#D97706', fontWeight: 'bold' }}
                />
                <Area
                  type="monotone"
                  dataKey={selectedCrop}
                  stroke="#D97706"
                  strokeWidth={3}
                  fillOpacity={1}
                  fill="url(#cropGradient)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          <div className="flex items-center justify-between text-[11px] text-emerald-200 font-mono pt-2 border-t border-white/15">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-emerald-400"></span> Jan - Apr: Agmarknet Data</span>
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-[#D97706] animate-pulse"></span> May - Aug: AI Time-Series Prediction</span>
          </div>
        </motion.div>

        {/* Right Side: 3 Key Economic Benefits (4 cols) */}
        <div className="lg:col-span-4 space-y-3.5">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white/95 p-5 rounded-3xl border-2 border-[#2C5E3B]/15 hover:border-[#D97706] transition shadow-md space-y-2"
          >
            <div className="flex items-center gap-3 text-[#2C5E3B] font-black text-base">
              <div className="w-9 h-9 rounded-2xl bg-[#2C5E3B] text-white flex items-center justify-center shrink-0">
                <TrendingUp className="w-5 h-5 text-[#D97706]" />
              </div>
              <span className="font-outfit text-lg">1. Maximizes Profitability</span>
            </div>
            <p className="text-xs md:text-sm text-[#2C5E3B]/90 leading-relaxed font-normal">
              Holding produce for 4-6 weeks post-harvest increases net farm revenue by <strong className="text-[#D97706] font-extrabold">20% to 35%</strong> per acre.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-white/95 p-5 rounded-3xl border-2 border-[#2C5E3B]/15 hover:border-[#D97706] transition shadow-md space-y-2"
          >
            <div className="flex items-center gap-3 text-[#2C5E3B] font-black text-base">
              <div className="w-9 h-9 rounded-2xl bg-[#D97706] text-white flex items-center justify-center shrink-0">
                <ShieldCheck className="w-5 h-5 text-white" />
              </div>
              <span className="font-outfit text-lg">2. Eliminates Distress Sales</span>
            </div>
            <p className="text-xs md:text-sm text-[#2C5E3B]/90 leading-relaxed font-normal">
              Prevents middleman exploitation by giving smallholder farmers real-time pricing power across nearby Mandis.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-white/95 p-5 rounded-3xl border-2 border-[#2C5E3B]/15 hover:border-[#D97706] transition shadow-md space-y-2"
          >
            <div className="flex items-center gap-3 text-[#2C5E3B] font-black text-base">
              <div className="w-9 h-9 rounded-2xl bg-[#2C5E3B] text-white flex items-center justify-center shrink-0">
                <Sparkles className="w-5 h-5 text-[#D97706]" />
              </div>
              <span className="font-outfit text-lg">3. Agmarknet Synergy</span>
            </div>
            <p className="text-xs md:text-sm text-[#2C5E3B]/90 leading-relaxed font-normal">
              Synced live with Ministry of Agriculture databases across 2,400+ APMC government mandis nationwide.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="pt-3 border-t border-[#2C5E3B]/20 flex items-center justify-between text-xs text-[#2C5E3B] font-semibold"
      >
        <span>📈 Predictive time-series models trained on official Agmarknet mandi historical datasets.</span>
        <span className="font-mono text-[#D97706] font-extrabold">Slide 08</span>
      </motion.div>
    </div>
  );
};
