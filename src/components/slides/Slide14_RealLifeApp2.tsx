import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Legend,
  ReferenceLine,
} from 'recharts';
import { RURAL_ADOPTION_DATA } from '../../data/slidesData';
import {
  TrendingUp,
  BarChart3,
  AreaChart as AreaIcon,
  Zap,
  Smartphone,
  Wifi,
  DollarSign,
  Mic,
  ShieldCheck,
  Globe,
  Database,
  ArrowUpRight,
  ArrowDownRight,
  Activity,
  Layers,
} from 'lucide-react';

export const Slide14_RealLifeApp2: React.FC = () => {
  const [chartType, setChartType] = useState<'area' | 'bar'>('area');
  const [activeMetric, setActiveMetric] = useState<'all' | 'smartphone' | 'internet'>('all');

  return (
    <div className="relative w-full h-full min-h-screen flex flex-col justify-between pt-12 pb-12 px-4 sm:px-8 md:px-12 max-w-[1500px] mx-auto z-10 text-slate-100 select-none bg-[#0B1120]">
      {/* POWER BI DASHBOARD HEADER BAR */}
      <motion.div
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-[#1E293B] border border-slate-700/80 rounded-2xl p-4 shadow-2xl flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4"
      >
        <div className="flex items-center gap-3">
          {/* Power BI Style Glowing Badge */}
          <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-500/50 flex items-center justify-center text-amber-400 shrink-0 shadow-lg shadow-amber-500/10">
            <BarChart3 className="w-6 h-6 text-amber-400" />
          </div>
          <div>
            <div className="flex items-center gap-2 mb-0.5">
              <span className="text-[10px] font-mono font-black text-amber-400 bg-amber-500/10 border border-amber-500/30 px-2 py-0.5 rounded-md uppercase tracking-wider">
                POWER BI ANALYTICS BOARD
              </span>
              <span className="text-[10px] font-mono font-bold text-slate-400 flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                LIVE DATA: TRAI & IAMAI RURAL TECH REPORT
              </span>
            </div>
            <h2 className="font-outfit font-black text-2xl sm:text-3xl text-white tracking-tight flex items-center gap-2">
              <span>Rural Connectivity & Keypad Phone Transition</span>
              <span className="text-amber-400 font-mono text-lg font-bold">(2018–2026)</span>
            </h2>
          </div>
        </div>

        {/* Dashboard Filters & Controls */}
        <div className="flex items-center gap-2 flex-wrap">
          <div className="bg-[#0F172A] border border-slate-700 p-1 rounded-xl flex items-center gap-1">
            <button
              onClick={() => setChartType('area')}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold flex items-center gap-1.5 transition ${
                chartType === 'area'
                  ? 'bg-amber-500 text-black shadow-md shadow-amber-500/20'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <AreaIcon className="w-3.5 h-3.5" /> Area Trend
            </button>
            <button
              onClick={() => setChartType('bar')}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold flex items-center gap-1.5 transition ${
                chartType === 'bar'
                  ? 'bg-amber-500 text-black shadow-md shadow-amber-500/20'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <BarChart3 className="w-3.5 h-3.5" /> Bar Comparison
            </button>
          </div>

          <div className="bg-[#0F172A] border border-slate-700 px-3 py-1.5 rounded-xl text-xs font-mono font-semibold text-slate-300 flex items-center gap-2">
            <Database className="w-3.5 h-3.5 text-cyan-400" />
            <span>Scope: Indian Agriculture</span>
          </div>
        </div>
      </motion.div>

      {/* TOP EXECUTIVE SCORECARD KPIS (4 BOLD KPI CARDS) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 my-3">
        {/* KPI 1 */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="bg-[#1E293B] border-l-4 border-l-amber-500 border border-slate-700/80 p-4 rounded-2xl shadow-lg relative overflow-hidden group hover:border-amber-500/80 transition"
        >
          <div className="flex items-center justify-between text-slate-400 text-xs font-mono font-bold">
            <span className="uppercase tracking-wider">Rural Smartphone %</span>
            <span className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 px-2 py-0.5 rounded-full flex items-center gap-0.5 text-[10px]">
              <ArrowUpRight className="w-3 h-3" /> +292%
            </span>
          </div>
          <div className="mt-2 flex items-baseline justify-between">
            <span className="font-outfit font-black text-3xl sm:text-4xl text-amber-400 tracking-tight">
              71.4%
            </span>
            <span className="text-xs font-mono text-slate-400">Est. 2026</span>
          </div>
          <p className="text-[11px] text-slate-300 font-medium mt-1">
            <strong>7 in 10 rural households</strong> own a 4G/5G smartphone.
          </p>
        </motion.div>

        {/* KPI 2 */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="bg-[#1E293B] border-l-4 border-l-rose-500 border border-slate-700/80 p-4 rounded-2xl shadow-lg relative overflow-hidden group hover:border-rose-500/80 transition"
        >
          <div className="flex items-center justify-between text-slate-400 text-xs font-mono font-bold">
            <span className="uppercase tracking-wider">Keypad Phone Only</span>
            <span className="bg-rose-500/10 text-rose-400 border border-rose-500/30 px-2 py-0.5 rounded-full flex items-center gap-0.5 text-[10px]">
              <ArrowDownRight className="w-3 h-3" /> -65.0%
            </span>
          </div>
          <div className="mt-2 flex items-baseline justify-between">
            <span className="font-outfit font-black text-3xl sm:text-4xl text-rose-400 tracking-tight">
              28.6%
            </span>
            <span className="text-xs font-mono text-slate-400">Rapid Phased-out</span>
          </div>
          <p className="text-[11px] text-slate-300 font-medium mt-1">
            Feature phones are no longer a barrier for AI apps.
          </p>
        </motion.div>

        {/* KPI 3 */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="bg-[#1E293B] border-l-4 border-l-cyan-400 border border-slate-700/80 p-4 rounded-2xl shadow-lg relative overflow-hidden group hover:border-cyan-400/80 transition"
        >
          <div className="flex items-center justify-between text-slate-400 text-xs font-mono font-bold">
            <span className="uppercase tracking-wider">Rural Internet Users</span>
            <span className="bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 px-2 py-0.5 rounded-full flex items-center gap-0.5 text-[10px]">
              <Zap className="w-3 h-3" /> 420M+
            </span>
          </div>
          <div className="mt-2 flex items-baseline justify-between">
            <span className="font-outfit font-black text-3xl sm:text-4xl text-cyan-400 tracking-tight">
              68.9%
            </span>
            <span className="text-xs font-mono text-slate-400">BharatNet 5G</span>
          </div>
          <p className="text-[11px] text-slate-300 font-medium mt-1">
            High-speed internet in 95%+ Gram Panchayats.
          </p>
        </motion.div>

        {/* KPI 4 */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="bg-[#1E293B] border-l-4 border-l-emerald-400 border border-slate-700/80 p-4 rounded-2xl shadow-lg relative overflow-hidden group hover:border-emerald-400/80 transition"
        >
          <div className="flex items-center justify-between text-slate-400 text-xs font-mono font-bold">
            <span className="uppercase tracking-wider">Device Price Point</span>
            <span className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 px-2 py-0.5 rounded-full flex items-center gap-0.5 text-[10px]">
              <DollarSign className="w-3 h-3" /> Sub-$60
            </span>
          </div>
          <div className="mt-2 flex items-baseline justify-between">
            <span className="font-outfit font-black text-3xl sm:text-4xl text-emerald-400 tracking-tight">
              ₹4,999
            </span>
            <span className="text-xs font-mono text-slate-400">Android Go</span>
          </div>
          <p className="text-[11px] text-slate-300 font-medium mt-1">
            Cheap data & devices bring AI to every farm.
          </p>
        </motion.div>
      </div>

      {/* MAIN DATA ANALYTICS GRID: GRAPH (8 COLS) + BOLD DATA INSIGHTS (4 COLS) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 my-auto">
        {/* GRAPH PANEL (8 COLS) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="lg:col-span-7 bg-[#1E293B] border border-slate-700/80 p-5 rounded-3xl shadow-2xl flex flex-col justify-between space-y-3 relative"
        >
          {/* Graph Header */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-slate-700/80 pb-3 gap-2">
            <div>
              <div className="flex items-center gap-2">
                <Activity className="w-4 h-4 text-amber-400" />
                <h3 className="font-outfit font-black text-base text-white">
                  Empirical Rural Tech Adoption Trajectory (% Households)
                </h3>
              </div>
              <p className="text-[11px] text-slate-400 font-mono">
                Source: TRAI Telecom Reports, IAMAI Rural Data & Nielsen Tech Indices
              </p>
            </div>

            <div className="flex items-center gap-1.5">
              <button
                onClick={() => setActiveMetric('all')}
                className={`px-2.5 py-1 rounded-lg text-[11px] font-mono font-bold transition ${
                  activeMetric === 'all'
                    ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                All Metrics
              </button>
              <button
                onClick={() => setActiveMetric('smartphone')}
                className={`px-2.5 py-1 rounded-lg text-[11px] font-mono font-bold transition ${
                  activeMetric === 'smartphone'
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Smartphones Only
              </button>
            </div>
          </div>

          {/* Recharts Power BI Interactive Area / Bar Chart */}
          <div className="h-64 sm:h-72 w-full pt-1">
            <ResponsiveContainer width="100%" height="100%">
              {chartType === 'area' ? (
                <AreaChart data={RURAL_ADOPTION_DATA} margin={{ top: 15, right: 15, left: -20, bottom: 0 }}>
                  <defs>
                    <linearGradient id="smartphoneGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#F59E0B" stopOpacity={0.8} />
                      <stop offset="95%" stopColor="#F59E0B" stopOpacity={0.1} />
                    </linearGradient>
                    <linearGradient id="internetGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#06B6D4" stopOpacity={0.8} />
                      <stop offset="95%" stopColor="#06B6D4" stopOpacity={0.1} />
                    </linearGradient>
                    <linearGradient id="keypadGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#EF4444" stopOpacity={0.8} />
                      <stop offset="95%" stopColor="#EF4444" stopOpacity={0.05} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                  <XAxis dataKey="year" stroke="#94A3B8" tick={{ fontSize: 11, fill: '#CBD5E1', fontWeight: 'bold' }} />
                  <YAxis stroke="#94A3B8" tick={{ fontSize: 11, fill: '#CBD5E1' }} domain={[0, 100]} unit="%" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: '#0F172A',
                      borderColor: '#F59E0B',
                      borderRadius: '16px',
                      fontSize: '12px',
                      color: '#F8FAFC',
                      boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.5)',
                    }}
                    labelStyle={{ color: '#F59E0B', fontWeight: 'bold' }}
                  />
                  <Legend wrapperStyle={{ fontSize: '11px', paddingTop: '10px', color: '#94A3B8' }} />
                  <ReferenceLine y={50} stroke="#64748B" strokeDasharray="4 4" label={{ value: '50% Majority Threshold', fill: '#94A3B8', fontSize: 10 }} />

                  {(activeMetric === 'all' || activeMetric === 'smartphone') && (
                    <Area
                      type="monotone"
                      dataKey="ruralSmartphones"
                      name="Rural Smartphone %"
                      stroke="#F59E0B"
                      strokeWidth={3}
                      fillOpacity={1}
                      fill="url(#smartphoneGradient)"
                    />
                  )}

                  {(activeMetric === 'all' || activeMetric === 'internet') && (
                    <Area
                      type="monotone"
                      dataKey="ruralInternet"
                      name="Rural Active Internet %"
                      stroke="#06B6D4"
                      strokeWidth={3}
                      fillOpacity={1}
                      fill="url(#internetGradient)"
                    />
                  )}

                  {activeMetric === 'all' && (
                    <Area
                      type="monotone"
                      dataKey="keypadOnly"
                      name="Keypad Phone Only %"
                      stroke="#EF4444"
                      strokeWidth={2}
                      fillOpacity={1}
                      fill="url(#keypadGradient)"
                    />
                  )}
                </AreaChart>
              ) : (
                <BarChart data={RURAL_ADOPTION_DATA} margin={{ top: 15, right: 15, left: -20, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                  <XAxis dataKey="year" stroke="#94A3B8" tick={{ fontSize: 11, fill: '#CBD5E1', fontWeight: 'bold' }} />
                  <YAxis stroke="#94A3B8" tick={{ fontSize: 11, fill: '#CBD5E1' }} domain={[0, 100]} unit="%" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: '#0F172A',
                      borderColor: '#F59E0B',
                      borderRadius: '16px',
                      fontSize: '12px',
                      color: '#F8FAFC',
                    }}
                    labelStyle={{ color: '#F59E0B', fontWeight: 'bold' }}
                  />
                  <Legend wrapperStyle={{ fontSize: '11px', paddingTop: '10px', color: '#94A3B8' }} />
                  <Bar dataKey="ruralSmartphones" name="Rural Smartphone %" fill="#F59E0B" radius={[6, 6, 0, 0]} />
                  <Bar dataKey="ruralInternet" name="Rural Active Internet %" fill="#06B6D4" radius={[6, 6, 0, 0]} />
                  <Bar dataKey="keypadOnly" name="Keypad Phone Only %" fill="#EF4444" radius={[6, 6, 0, 0]} />
                </BarChart>
              )}
            </ResponsiveContainer>
          </div>

          {/* Graph Footer Callout */}
          <div className="bg-[#0F172A] border border-slate-700/80 p-2.5 rounded-xl flex items-center justify-between text-xs font-mono text-slate-300">
            <span className="flex items-center gap-1.5 text-amber-400 font-bold">
              <Zap className="w-4 h-4" />
              <span>2024 Crossover: Smartphones passed 58.6% threshold</span>
            </span>
            <span className="text-emerald-400 font-black">71.4% Target Reached</span>
          </div>
        </motion.div>

        {/* BOLD ANALYTICS INSIGHTS & DRIVERS (5 COLS) */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="lg:col-span-5 space-y-3 flex flex-col justify-between"
        >
          {/* Key Analytics Summary Card */}
          <div className="bg-gradient-to-br from-[#1E293B] to-[#0F172A] border-2 border-amber-500/40 p-4 rounded-3xl shadow-xl space-y-2">
            <div className="flex items-center gap-2 text-amber-400 font-black text-xs uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4" />
              <span>EXECUTIVE ANALYTICS INSIGHT</span>
            </div>
            <p className="text-sm md:text-base text-white font-bold leading-snug">
              Keypad phones are <span className="text-amber-400 underline decoration-amber-500 decoration-2">no longer a functional constraint</span> for deploying FarmShield AI in Indian villages.
            </p>
            <p className="text-xs text-slate-300 leading-relaxed font-normal">
              Empirical data demonstrates that <strong>over 71% of rural agricultural families</strong> operate at least one touch-screen 4G/5G smartphone per household, catalyzed by UPI digital payments and subsidized mobile data.
            </p>
          </div>

          {/* 3 Bold Analytical Pillars */}
          <div className="space-y-2.5">
            {/* Pillar 1 */}
            <div className="bg-[#1E293B] p-3.5 rounded-2xl border border-slate-700/80 flex items-start gap-3 hover:border-cyan-400 transition">
              <div className="w-9 h-9 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center shrink-0 mt-0.5 border border-cyan-500/40">
                <Wifi className="w-4 h-4" />
              </div>
              <div className="text-xs">
                <h4 className="font-black text-white text-sm">
                  1. BharatNet 5G & Fiber Infrastructure
                </h4>
                <p className="text-slate-300 mt-0.5 font-medium leading-relaxed">
                  <strong>95%+ Gram Panchayats</strong> connected with optical fiber, guaranteeing sub-second cloud server latency for leaf disease inference.
                </p>
              </div>
            </div>

            {/* Pillar 2 */}
            <div className="bg-[#1E293B] p-3.5 rounded-2xl border border-slate-700/80 flex items-start gap-3 hover:border-emerald-400 transition">
              <div className="w-9 h-9 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5 border border-emerald-500/40">
                <Smartphone className="w-4 h-4" />
              </div>
              <div className="text-xs">
                <h4 className="font-black text-white text-sm">
                  2. Sub-$60 Ultra-Budget Android Phones
                </h4>
                <p className="text-slate-300 mt-0.5 font-medium leading-relaxed">
                  Entry-level smartphones under <strong>₹4,999 (~$60)</strong> make advanced camera & voice capabilities affordable to every farming family.
                </p>
              </div>
            </div>

            {/* Pillar 3 */}
            <div className="bg-[#1E293B] p-3.5 rounded-2xl border border-slate-700/80 flex items-start gap-3 hover:border-amber-400 transition">
              <div className="w-9 h-9 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0 mt-0.5 border border-amber-500/40">
                <Mic className="w-4 h-4" />
              </div>
              <div className="text-xs">
                <h4 className="font-black text-white text-sm">
                  3. 13-Language Vernacular Voice AI
                </h4>
                <p className="text-slate-300 mt-0.5 font-medium leading-relaxed">
                  Eliminates literacy barriers completely — farmers simply <strong>speak in their native dialect</strong> to receive audio agronomic guidance.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* DASHBOARD FOOTER STATUS */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="pt-3 border-t border-slate-700/80 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 font-mono gap-2"
      >
        <span className="flex items-center gap-2 text-slate-300">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>Conclusion: Empirical rural trends validate FARM SHIELD AI is commercially viable & scalable.</span>
        </span>
        <div className="flex items-center gap-3">
          <span className="bg-amber-500/10 text-amber-400 border border-amber-500/30 px-3 py-1 rounded-full font-bold">
            SLIDE 13 / 14
          </span>
        </div>
      </motion.div>
    </div>
  );
};
