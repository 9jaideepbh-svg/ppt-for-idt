import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Smartphone, Server, Cpu, Database, Globe, LayoutDashboard, ArrowRight, ShieldCheck, Activity } from 'lucide-react';

export const Slide5_Architecture: React.FC = () => {
  const [selectedNode, setSelectedNode] = useState<number>(1);

  const nodes = [
    {
      id: 1,
      title: 'Farmer Client',
      subtitle: 'Mobile App / PWA',
      icon: Smartphone,
      description: 'Captures crop leaf photos, records voice queries in 13 languages, or searches Kisan Times news.',
      protocol: 'HTTPS / WebSockets',
      latency: '< 50ms',
    },
    {
      id: 2,
      title: 'Frontend Engine',
      subtitle: 'React 19 + Vite SPA',
      icon: LayoutDashboard,
      description: 'Renders clean responsive UI, handles camera preview, client-side state, and Base64 image serialization.',
      protocol: 'Client Runtime',
      latency: 'Zero Latency',
    },
    {
      id: 3,
      title: 'Express API Gateway',
      subtitle: 'Node.js Server',
      icon: Server,
      description: 'Authenticates requests, enforces rate limits, orchestrates parallel AI model calls, and proxies third-party APIs.',
      protocol: 'RESTful API / Express',
      latency: '~ 120ms',
    },
    {
      id: 4,
      title: 'AI Intelligence',
      subtitle: 'Gemini 2.5 + CNNs',
      icon: Cpu,
      description: 'Vision models analyze leaf disease patterns; Gemini handles 13-language NLP and price trend forecasting.',
      protocol: 'gRPC / Tensor Serving',
      latency: '~ 450ms',
    },
    {
      id: 5,
      title: 'Cloud Database',
      subtitle: 'Firebase Firestore',
      icon: Database,
      description: 'Secure encrypted storage for user leaf scans, Krishi Setu post logs, Mandi prices, and newsfeed records.',
      protocol: 'SSL Encrypted Store',
      latency: '~ 80ms',
    },
    {
      id: 6,
      title: 'Advisory Output',
      subtitle: 'Voice & Dashboard',
      icon: Globe,
      description: 'Delivers diagnostic reports with pesticide dosage, audio voice playback, and Krishi Setu community alerts.',
      protocol: 'Realtime Sync',
      latency: '< 100ms',
    },
  ];

  const activeNode = nodes.find((n) => n.id === selectedNode) || nodes[0];

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
                05
              </span>
              <span className="text-xs md:text-sm font-extrabold uppercase tracking-widest text-[#D97706] flex items-center gap-1">
                <Activity className="w-4 h-4" /> System Engineering
              </span>
            </div>
            <h2 className="font-outfit font-black text-3xl md:text-5xl lg:text-6xl text-[#2C5E3B] tracking-tight">
              Full-Stack System Architecture
            </h2>
          </div>
        </div>

        <p className="text-sm md:text-base text-[#2C5E3B]/90 font-medium max-w-md leading-snug">
          End-to-end data pipeline between client, API gateway, AI models, and Cloud database.
        </p>
      </motion.div>

      {/* Architecture Node Row */}
      <div className="my-auto py-2 space-y-4">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-3">
          {nodes.map((node, idx) => {
            const IconComp = node.icon;
            const isSelected = node.id === selectedNode;
            return (
              <motion.button
                key={node.id}
                onClick={() => setSelectedNode(node.id)}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className={`p-4 rounded-3xl border-2 text-left transition cursor-pointer flex flex-col justify-between h-36 shadow-sm ${
                  isSelected
                    ? 'bg-[#2C5E3B] text-white border-[#2C5E3B] shadow-lg ring-2 ring-[#D97706]'
                    : 'bg-white/95 text-[#2C5E3B] border-[#2C5E3B]/20 hover:border-[#D97706]'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className={`text-[10px] font-mono font-black ${isSelected ? 'text-[#D97706]' : 'text-[#2C5E3B]/60'}`}>
                    NODE 0{node.id}
                  </span>
                  <div className={`p-1.5 rounded-full ${isSelected ? 'bg-white/20' : 'bg-[#2C5E3B]/10'}`}>
                    <IconComp className={`w-4 h-4 ${isSelected ? 'text-[#D97706]' : 'text-[#2C5E3B]'}`} />
                  </div>
                </div>

                <div>
                  <h4 className="font-outfit font-black text-xs sm:text-sm leading-tight">{node.title}</h4>
                  <p className={`text-[10px] ${isSelected ? 'text-emerald-100' : 'text-[#2C5E3B]/70'} truncate mt-0.5`}>
                    {node.subtitle}
                  </p>
                </div>

                {idx < nodes.length - 1 && (
                  <div className="hidden md:block absolute -right-2 top-1/2 -translate-y-1/2 z-20 pointer-events-none">
                    <ArrowRight className="w-3 h-3 text-[#D97706]" />
                  </div>
                )}
              </motion.button>
            );
          })}
        </div>

        {/* Selected Component Explanation Box */}
        <motion.div
          key={activeNode.id}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="bg-[#2C5E3B] text-white p-5 rounded-3xl shadow-xl grid grid-cols-1 md:grid-cols-3 gap-4"
        >
          <div className="md:col-span-2 space-y-2">
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-mono font-bold text-white bg-[#D97706] px-2.5 py-0.5 rounded-full">
                ACTIVE COMPONENT 0{activeNode.id}
              </span>
              <h3 className="font-outfit font-black text-lg text-white">
                {activeNode.title} ({activeNode.subtitle})
              </h3>
            </div>
            <p className="text-xs text-emerald-100/90 leading-relaxed font-normal">
              {activeNode.description}
            </p>
          </div>

          <div className="bg-white/10 p-3.5 rounded-2xl border border-white/10 flex flex-col justify-between text-xs space-y-1.5">
            <div className="flex items-center justify-between border-b border-white/10 pb-1">
              <span className="text-emerald-200">Data Protocol:</span>
              <span className="font-mono font-bold text-[#D97706]">{activeNode.protocol}</span>
            </div>
            <div className="flex items-center justify-between border-b border-white/10 pb-1">
              <span className="text-emerald-200">Target Latency:</span>
              <span className="font-mono font-bold text-white">{activeNode.latency}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-emerald-200">Security Layer:</span>
              <span className="font-mono font-bold text-emerald-300 flex items-center gap-1">
                <ShieldCheck className="w-3 h-3 text-[#D97706]" /> TLS 1.3
              </span>
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
          <Activity className="w-4 h-4 text-[#D97706]" />
          <span>Bidirectional data streaming with offline synchronization for remote rural connectivity.</span>
        </span>
        <span className="font-mono text-[#D97706] font-extrabold">Slide 05</span>
      </motion.div>
    </div>
  );
};
