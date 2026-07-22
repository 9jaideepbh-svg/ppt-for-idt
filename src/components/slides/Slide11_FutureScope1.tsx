import React from 'react';
import { motion } from 'motion/react';
import { Cpu, Droplets, Plane, Sparkles, Activity, ArrowRight } from 'lucide-react';

export const Slide11_FutureScope1: React.FC = () => {
  const futurePillars = [
    {
      id: '01',
      title: 'IoT Soil & Climate Sensors',
      subtitle: 'Real-time Telemetry Grid',
      desc: 'Wireless LoRaWAN sensors measuring soil moisture, NPK chemical levels, pH balance, and canopy humidity in real-time.',
      icon: Cpu,
      img: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=300&auto=format&fit=crop&q=80',
    },
    {
      id: '02',
      title: 'Smart Automated Irrigation',
      subtitle: 'AI Water Conservation Engine',
      desc: 'Automated solenoid valves triggered by soil moisture levels and satellite rainfall forecasts, saving 40%+ water.',
      icon: Droplets,
      img: 'https://images.unsplash.com/photo-1595974482597-4b8da8879bc5?w=300&auto=format&fit=crop&q=80',
    },
    {
      id: '03',
      title: 'Drone Crop Monitoring',
      subtitle: 'Multispectral Aerial Analytics',
      desc: 'Autonomous agricultural drones capturing thermal & multispectral NDVI imagery to map nitrogen stress and weed patches.',
      icon: Plane,
      img: 'https://images.unsplash.com/photo-1508614589041-895b88991e3e?w=300&auto=format&fit=crop&q=80',
    },
    {
      id: '04',
      title: 'Precision Agriculture',
      subtitle: 'Micro-Targeted Treatment',
      desc: 'AI algorithms calculate variable-rate fertilizer application maps down to individual square meter field zones.',
      icon: Sparkles,
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
          {/* Dual Color Vertical Bar */}
          <div className="w-2 h-14 bg-gradient-to-b from-[#D97706] via-[#2C5E3B] to-[#88B04B] rounded-full shrink-0 mt-1" />
          <div>
            <div className="flex items-center gap-2.5 mb-1.5">
              <span className="text-xs md:text-sm font-mono font-black text-white bg-[#2C5E3B] px-3.5 py-1 rounded-full shadow-sm">
                10
              </span>
              <span className="text-xs md:text-sm font-extrabold uppercase tracking-widest text-[#D97706]">
                Future Scope • Part 01
              </span>
            </div>
            <h2 className="font-outfit font-black text-3xl md:text-5xl lg:text-6xl text-[#2C5E3B] tracking-tight">
              Precision Agriculture & Automation
            </h2>
          </div>
        </div>

        <p className="text-sm md:text-base text-[#2C5E3B]/90 font-medium max-w-md leading-snug">
          Integrating IoT sensors, autonomous drones, and smart automated irrigation pipelines into <strong className="text-[#2C5E3B] font-bold">FARM SHIELD AI</strong>.
        </p>
      </motion.div>

      {/* 4 Cards Grid - High Contrast Cards with Circular Images & Dual Color Bar */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 my-auto py-4">
        {futurePillars.map((fp, idx) => {
          const IconComp = fp.icon;
          return (
            <motion.div
              key={fp.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="bg-white/95 p-6 rounded-3xl border-2 border-[#2C5E3B]/15 hover:border-[#D97706] hover:shadow-xl transition-all shadow-md flex flex-col justify-between relative overflow-hidden group"
            >
              {/* Dual Color Left Border Accent */}
              <div className="absolute left-0 top-0 bottom-0 w-2 bg-gradient-to-b from-[#2C5E3B] to-[#D97706]" />

              <div className="flex items-center justify-between pl-2">
                <div className="flex items-center gap-3">
                  {/* Circular Plant/Agri Image Badge */}
                  <div className="relative">
                    <img
                      src={fp.img}
                      alt={fp.title}
                      className="w-14 h-14 rounded-full object-cover border-2 border-[#D97706] shadow-sm group-hover:scale-105 transition-transform"
                    />
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-[#2C5E3B] text-white flex items-center justify-center text-xs shadow">
                      <IconComp className="w-3.5 h-3.5 text-[#D97706]" />
                    </div>
                  </div>

                  <div>
                    <span className="text-xs font-mono font-extrabold text-[#D97706] uppercase block tracking-wider">{fp.subtitle}</span>
                    <h3 className="font-outfit font-black text-xl md:text-2xl text-[#2C5E3B]">{fp.title}</h3>
                  </div>
                </div>

                <span className="text-xs font-mono font-black text-[#D97706] bg-[#D97706]/10 border border-[#D97706]/30 px-3 py-1 rounded-full uppercase tracking-wider shrink-0">
                  PHASE {fp.id}
                </span>
              </div>

              <div className="pl-2 my-2">
                <p className="text-sm md:text-base text-[#2C5E3B]/90 leading-relaxed font-normal">
                  {fp.desc}
                </p>
              </div>

              <div className="pl-2 pt-3 border-t border-[#2C5E3B]/10 flex items-center justify-between text-xs md:text-sm font-mono font-bold text-[#2C5E3B]">
                <span className="uppercase tracking-wider">Technology Roadmap 2027</span>
                <span className="text-[#D97706] flex items-center gap-1 font-extrabold">
                  Hardware Integration <ArrowRight className="w-4 h-4" />
                </span>
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
          <Activity className="w-4 h-4 text-[#D97706]" />
          <span>Precision hardware integration cuts fertilizer waste by up to 35% across Indian farms.</span>
        </span>
        <span className="font-mono text-[#D97706] font-extrabold text-sm md:text-base">Slide 10</span>
      </motion.div>
    </div>
  );
};

