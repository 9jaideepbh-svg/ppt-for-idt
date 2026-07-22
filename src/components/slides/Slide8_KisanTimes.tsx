import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Newspaper, Calendar, ArrowUpRight, Sparkles } from 'lucide-react';

export const Slide8_KisanTimes: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const newsItems = [
    {
      id: 1,
      category: 'schemes',
      catLabel: 'Government Scheme',
      title: 'PM-KISAN 17th Installment Direct Benefit Transfer Initiated',
      summary: 'Central government transfers ₹2,000 directly to 9.5 crore farmers across India. Check your Aadhaar seeding status in FARM SHIELD AI.',
      date: 'Today, 08:30 AM',
      impact: '₹2,000 / Farmer',
    },
    {
      id: 2,
      category: 'weather',
      catLabel: 'Weather Intelligence',
      title: 'Monsoon Rainfall Radar: Moderate Showers Expected in Karnataka Plains',
      summary: 'IMD forecasts 45mm rainfall over Mandya, Shimoga & Hassan districts over next 48 hours. Ideal window for nitrogen fertilizer application.',
      date: 'Today, 07:15 AM',
      impact: 'Humidity 82%',
    },
    {
      id: 3,
      category: 'tech',
      catLabel: 'Agri Innovation',
      title: 'Drones Approved for 50% Subsidy under Sub-Mission on Ag Mechanization',
      summary: 'Smallholder farmers can now access aerial pesticide spraying drones at half price through local Custom Hiring Centers (CHCs).',
      date: 'Yesterday',
      impact: '50% Govt Subsidy',
    },
    {
      id: 4,
      category: 'news',
      catLabel: 'Market Alert',
      title: 'Global Organic Cotton Demand Surges 28%: Export Price Outlook',
      summary: 'Domestic mandi prices for premium staple cotton reach ₹7,200 per quintal. AI price forecasting advises holding 30% stock for July peak.',
      date: 'Yesterday',
      impact: '₹7,200 / Quintal',
    },
  ];

  const filteredItems = activeCategory === 'all'
    ? newsItems
    : newsItems.filter((item) => item.category === activeCategory);

  return (
    <div className="relative w-full h-full flex flex-col justify-between pt-16 pb-16 px-6 md:px-12 max-w-7xl mx-auto z-10 text-white select-none">
      {/* Slide Header */}
      <motion.div
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col md:flex-row md:items-end justify-between border-b border-white/20 pb-4 gap-4"
      >
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xs font-mono font-black text-black bg-amber-400 px-3 py-0.5 rounded-full shadow-md">
              07
            </span>
            <span className="text-xs font-extrabold uppercase tracking-widest text-amber-300">
              Feature 02 • Kisan Times
            </span>
          </div>
          <h2 className="font-outfit font-black text-3xl md:text-5xl text-white tracking-tight drop-shadow-sm">
            Kisan Times: Daily Agricultural Gazette
          </h2>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-1.5 bg-black/40 backdrop-blur-md p-1.5 rounded-full border border-white/30 self-start md:self-auto shadow-lg">
          {[
            { id: 'all', label: 'All Feeds' },
            { id: 'schemes', label: 'Schemes' },
            { id: 'weather', label: 'Weather' },
            { id: 'tech', label: 'AgriTech' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveCategory(tab.id)}
              className={`px-3 py-1 rounded-full text-xs font-bold transition cursor-pointer ${
                activeCategory === tab.id
                  ? 'bg-amber-500 text-black shadow-md'
                  : 'text-slate-200 hover:text-white hover:bg-white/10'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </motion.div>

      {/* Grid Content Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-auto py-4">
        {filteredItems.map((item, idx) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
            className="bg-white/95 backdrop-blur-md p-6 rounded-3xl border-2 border-white/80 hover:border-amber-500 hover:shadow-2xl transition-all shadow-xl flex flex-col justify-between space-y-4 text-[#1B4332]"
          >
            <div className="space-y-2.5">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-black px-3 py-1 rounded-full bg-[#D97706] text-white shadow-sm">
                  {item.catLabel}
                </span>
                <span className="text-xs text-[#2C5E3B]/90 font-mono font-bold flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-[#2C5E3B]" /> {item.date}
                </span>
              </div>

              <h3 className="font-outfit font-black text-lg md:text-xl text-[#2C5E3B] leading-snug">
                {item.title}
              </h3>

              <p className="text-xs md:text-sm text-[#2C5E3B]/90 leading-relaxed font-normal">
                {item.summary}
              </p>
            </div>

            <div className="pt-3 border-t border-[#2C5E3B]/10 flex items-center justify-between text-xs md:text-sm">
              <span className="font-mono font-extrabold text-[#D97706] bg-[#D97706]/10 px-3 py-1 rounded-full border border-[#D97706]/30">
                Key Metric: {item.impact}
              </span>
              <button className="text-xs md:text-sm font-black text-[#2C5E3B] hover:text-[#D97706] flex items-center gap-1 cursor-pointer">
                <span>Read Bulletin</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="pt-3 border-t border-white/20 flex items-center justify-between text-xs text-slate-100 font-semibold"
      >
        <span className="flex items-center gap-1.5">
          <Newspaper className="w-4 h-4 text-amber-300" />
          <span>Kisan Times updates daily at 06:00 AM with regional government advisories and weather radar.</span>
        </span>
        <span className="font-mono text-amber-300 font-extrabold bg-black/30 px-3 py-1 rounded-full border border-white/20">Slide 07</span>
      </motion.div>
    </div>
  );
};
