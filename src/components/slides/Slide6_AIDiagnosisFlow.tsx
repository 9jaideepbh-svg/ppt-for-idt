import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { DIAGNOSIS_STEPS } from '../../data/slidesData';
import {
  Camera,
  Sliders,
  Code,
  CloudUpload,
  GitFork,
  Cpu,
  Database,
  BrainCircuit,
  CheckCircle2,
  FileText,
  HardDrive,
  LayoutDashboard,
  Play,
  RefreshCw,
  Sparkles,
  Zap,
  ShieldCheck,
  Activity,
  Layers,
  Terminal,
  Server,
  AlertTriangle,
  Leaf
} from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
  Camera,
  Sliders,
  Code,
  CloudUpload,
  GitFork,
  Cpu,
  Database,
  BrainCircuit,
  CheckCircle2,
  FileText,
  HardDrive,
  LayoutDashboard,
};

// Rich technical metadata for each pipeline step
const STEP_TECHNICAL_SPECS: Record<number, {
  category: string;
  node: string;
  inputFormat: string;
  outputFormat: string;
  latency: string;
  algorithm: string;
  fallback: string;
}> = {
  1: {
    category: 'Edge Ingestion',
    node: 'Smartphone Camera / PWA Client',
    inputFormat: '12MP Camera Stream / Raw Image File',
    outputFormat: 'Uncompressed Image Array (RGB)',
    latency: '15 ms',
    algorithm: 'Camera API + Auto-Focus & OpenCV Blur Filter',
    fallback: 'Prompt re-capture if blur score < 0.65',
  },
  2: {
    category: 'Preprocessing',
    node: 'Client-Side WebWorker / Canvas API',
    inputFormat: 'Raw RGB Image (Variable Resolution)',
    outputFormat: 'Normalized 512x512x3 Float32 Tensor [-1, 1]',
    latency: '35 ms',
    algorithm: 'Bilinear Resizing + Histogram Equalization',
    fallback: 'Bicubic Interpolation with standard RGB scaling',
  },
  3: {
    category: 'Payload Serialization',
    node: 'Edge Client Memory Buffer',
    inputFormat: 'Processed Float32 Matrix',
    outputFormat: 'Base64 Encrypted String Stream',
    latency: '20 ms',
    algorithm: 'Chunked Base64 Serialization',
    fallback: 'Gzip compression before transport',
  },
  4: {
    category: 'Cloud Ingestion',
    node: 'Firebase Cloud Storage / Edge Bucket',
    inputFormat: 'Encrypted Base64 Payload',
    outputFormat: 'Secure Public HTTPS Storage URL',
    latency: '80 ms',
    algorithm: 'AES-256 Object Storage & CDN Caching',
    fallback: 'Async queue to local IndexedDB if offline',
  },
  5: {
    category: 'Async Pipeline Routing',
    node: 'Cloud Run / Microservice Dispatcher',
    inputFormat: 'Incoming Diagnostics Event Trigger',
    outputFormat: 'Dual Parallel Threads (AI + DB Sync)',
    latency: '10 ms',
    algorithm: 'Event-Driven Async/Await Thread Dispatcher',
    fallback: 'Sequential fallback execution',
  },
  6: {
    category: 'Deep Vision Neural Network',
    node: 'TFLite / ONNX Neural Engine',
    inputFormat: '512x512x3 Normalized Tensor',
    outputFormat: '128-Dimension Feature Vector Map',
    latency: '110 ms',
    algorithm: 'MobileNetV3-Large + Squeeze-Excitation Layers',
    fallback: 'ResNet-18 Light fallback model',
  },
  7: {
    category: 'Cloud DB Indexing',
    node: 'Cloud Firestore Database',
    inputFormat: 'User ID, GPS Coordinates & Timestamp',
    outputFormat: 'Indexed Session Document Ref ID',
    latency: '45 ms',
    algorithm: 'Firestore Composite B-Tree Index Query',
    fallback: 'Write-to-Cache Local Storage persistence',
  },
  8: {
    category: 'Multi-Class Inference',
    node: 'AI Compute Engine',
    inputFormat: '128-Dim Feature Map Vector',
    outputFormat: '42-Class Softmax Probability Distribution',
    latency: '25 ms',
    algorithm: 'Softmax Cross-Entropy Categorical Classifier',
    fallback: 'Top-k ensemble voting',
  },
  9: {
    category: 'Confidence Analytics',
    node: 'Statistical Validation Module',
    inputFormat: 'Raw Probability Scores',
    outputFormat: 'Verified Pathogen ID & Confidence Score (e.g. 98.4%)',
    latency: '10 ms',
    algorithm: 'Confidence Threshold Filter (>80% Auto-Verify)',
    fallback: 'Flag scan for Human Agronomist Review if <80%',
  },
  10: {
    category: 'Actionable Agronomy Engine',
    node: 'Knowledge Graph & Expert Rule Engine',
    inputFormat: 'Pathogen ID + Severity Index',
    outputFormat: 'Localized Prescription (Chemical + Organic)',
    latency: '20 ms',
    algorithm: 'Agronomist Rule Graph Matching & Dosage Calculator',
    fallback: 'Broad-spectrum organic neem treatment guide',
  },
  11: {
    category: 'Cloud State Persist',
    node: 'Cloud Firestore Realtime DB',
    inputFormat: 'Complete Diagnosis & Treatment Object',
    outputFormat: 'Synced Document with Listener Triggers',
    latency: '30 ms',
    algorithm: 'Firestore Realtime Listener Patch Sync',
    fallback: 'Offline Sync Queue with Retry Exponential Backoff',
  },
  12: {
    category: 'Client Presentation',
    node: 'React UI Dashboard / Voice Engine',
    inputFormat: 'Synced Diagnostic JSON Object',
    outputFormat: 'Interactive Card Render + Audio Readout',
    latency: '15 ms',
    algorithm: 'React Virtual DOM Patch + Web Speech TTS',
    fallback: 'Static visual card without TTS audio',
  },
};

export const Slide6_AIDiagnosisFlow: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(1);
  const [isSimulating, setIsSimulating] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<'inspector' | 'matrix' | 'specs'>('inspector');

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isSimulating) {
      timer = setInterval(() => {
        setActiveStep((prev) => {
          if (prev >= DIAGNOSIS_STEPS.length) {
            setIsSimulating(false);
            return 12;
          }
          return prev + 1;
        });
      }, 900);
    }
    return () => clearInterval(timer);
  }, [isSimulating]);

  const currentStepObj = DIAGNOSIS_STEPS.find((s) => s.id === activeStep) || DIAGNOSIS_STEPS[0];
  const currentSpec = STEP_TECHNICAL_SPECS[activeStep] || STEP_TECHNICAL_SPECS[1];

  const handleStartSimulation = () => {
    setActiveStep(1);
    setIsSimulating(true);
  };

  return (
    <div className="relative w-full min-h-screen h-full flex flex-col justify-between p-4 sm:p-6 md:p-8 z-10 text-[#1B4332] select-none bg-gradient-to-b from-[#F2ECE1]/80 via-[#E8EFE6]/50 to-[#F2ECE1]/80 overflow-y-auto lg:overflow-hidden">
      {/* 1. TOP HEADER & INTERACTIVE CONTROL TOOLBAR */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col lg:flex-row lg:items-center justify-between border-b-2 border-[#2C5E3B]/20 pb-4 gap-3"
      >
        <div className="flex items-start gap-3">
          {/* Dual Color Vertical Bar */}
          <div className="w-2 h-14 bg-gradient-to-b from-[#D97706] via-[#2C5E3B] to-[#88B04B] rounded-full shrink-0 mt-1" />
          <div>
            <div className="flex items-center gap-2.5 mb-1.5">
              <span className="text-xs md:text-sm font-mono font-black text-white bg-[#2C5E3B] px-3.5 py-1 rounded-full shadow-sm">
                05 | AI PIPELINE ENGINEERING
              </span>
              <span className="text-xs md:text-sm font-extrabold uppercase tracking-widest text-[#D97706] flex items-center gap-1">
                <Zap className="w-4 h-4" /> End-to-End Deep Learning Architecture
              </span>
            </div>
            <h2 className="font-outfit font-black text-2xl sm:text-3xl md:text-5xl lg:text-6xl text-[#2C5E3B] tracking-tight">
              AI Disease Diagnosis Architecture & Pipeline
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-[#2C5E3B]/90 font-medium hidden sm:block mt-1">
              Sub-second computer vision pipeline performing crop leaf pathogen identification from image capture to agronomist advisory.
            </p>
          </div>
        </div>

        {/* Toolbar Controls */}
        <div className="flex flex-wrap items-center gap-2">
          {/* View Mode Toggle Tabs */}
          <div className="flex bg-[#2C5E3B]/10 p-1 rounded-xl border border-[#2C5E3B]/15 text-xs sm:text-sm font-bold">
            <button
              onClick={() => setActiveTab('inspector')}
              className={`px-3.5 py-2 rounded-lg transition ${
                activeTab === 'inspector'
                  ? 'bg-[#2C5E3B] text-white shadow-sm'
                  : 'text-[#2C5E3B] hover:bg-[#2C5E3B]/10'
              }`}
            >
              Pipeline Inspector
            </button>
            <button
              onClick={() => setActiveTab('matrix')}
              className={`px-3.5 py-2 rounded-lg transition ${
                activeTab === 'matrix'
                  ? 'bg-[#2C5E3B] text-white shadow-sm'
                  : 'text-[#2C5E3B] hover:bg-[#2C5E3B]/10'
              }`}
            >
              Disease Matrix
            </button>
            <button
              onClick={() => setActiveTab('specs')}
              className={`px-3.5 py-2 rounded-lg transition ${
                activeTab === 'specs'
                  ? 'bg-[#2C5E3B] text-white shadow-sm'
                  : 'text-[#2C5E3B] hover:bg-[#2C5E3B]/10'
              }`}
            >
              Model Specs
            </button>
          </div>

          {/* Simulation Trigger Button */}
          <button
            onClick={handleStartSimulation}
            disabled={isSimulating}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#D97706] hover:bg-[#B45309] font-black text-xs sm:text-sm text-white shadow-md transition cursor-pointer"
          >
            {isSimulating ? (
              <>
                <RefreshCw className="w-4 h-4 animate-spin text-white" />
                <span>Simulating Step {activeStep}/12...</span>
              </>
            ) : (
              <>
                <Play className="w-4 h-4 fill-white text-white" />
                <span>Run Live Scanning Simulation</span>
              </>
            )}
          </button>
        </div>
      </motion.div>

      {/* 2. TOP FULL-WIDTH PIPELINE STEPS FLOW GRID (12 STEPS ACROSS THE SCREEN) */}
      <div className="my-3">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs sm:text-sm font-mono font-bold uppercase tracking-wider text-[#2C5E3B]/90 flex items-center gap-1.5">
            <Layers className="w-4 h-4 text-[#D97706]" /> 12-Stage Execution Flow (Click Any Step to Inspect):
          </span>
          <span className="text-xs sm:text-sm font-mono font-extrabold text-[#D97706]">
            Active Phase: Step #{activeStep} - {currentSpec.category}
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 lg:grid-cols-12 gap-2">
          {DIAGNOSIS_STEPS.map((step) => {
            const IconComponent = iconMap[step.icon] || Cpu;
            const isActive = step.id === activeStep;
            const isPassed = step.id < activeStep;
            const spec = STEP_TECHNICAL_SPECS[step.id];

            return (
              <motion.button
                key={step.id}
                onClick={() => {
                  setIsSimulating(false);
                  setActiveStep(step.id);
                }}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className={`p-2.5 rounded-xl border text-left transition cursor-pointer flex flex-col justify-between h-24 ${
                  isActive
                    ? 'bg-[#2C5E3B] text-white border-[#2C5E3B] shadow-md ring-2 ring-[#D97706] scale-[1.02]'
                    : isPassed
                    ? 'bg-[#E8EFE6] text-[#2C5E3B] border-[#2C5E3B]/30'
                    : 'bg-[#F2ECE1] text-[#2C5E3B]/80 border-[#2C5E3B]/15 hover:bg-[#E8E0D2]'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className={`text-xs font-mono font-black ${isActive ? 'text-[#D97706]' : 'text-[#2C5E3B]/70'}`}>
                    #{step.id.toString().padStart(2, '0')}
                  </span>
                  <IconComponent className={`w-4 h-4 ${isActive ? 'text-[#D97706]' : 'text-[#2C5E3B]'}`} />
                </div>

                <div>
                  <h4 className="font-outfit font-extrabold text-xs sm:text-xs leading-tight line-clamp-1">
                    {step.title.replace(/^\d+\.\s*/, '')}
                  </h4>
                  <div className="flex items-center justify-between mt-1">
                    <span className={`text-[10px] font-mono font-bold px-1.5 py-0.5 rounded ${
                      isActive ? 'bg-[#D97706] text-white' : 'bg-black/5 text-[#2C5E3B]/80'
                    }`}>
                      {spec?.latency || '20ms'}
                    </span>
                    {isPassed && <span className="text-xs text-[#2C5E3B] font-extrabold">✓</span>}
                  </div>
                </div>
              </motion.button>
            );
          })}
        </div>
      </div>

      {/* 3. MAIN FULL-WIDTH EXPANDED VIEWPANEL (EXPANDED CONTENT FILLING THE CENTER) */}
      <div className="my-auto py-1">
        <AnimatePresence mode="wait">
          {activeTab === 'inspector' && (
            <motion.div
              key={`inspector-${activeStep}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-4"
            >
              {/* LEFT 7 COLUMNS: Step Technical Inspector & Details */}
              <div className="lg:col-span-7 bg-[#2C5E3B] text-white p-5 rounded-2xl shadow-xl flex flex-col justify-between space-y-4">
                <div>
                  {/* Step Header */}
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/15 pb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-11 h-11 rounded-xl bg-[#D97706] text-white flex items-center justify-center font-bold shadow-md">
                        {React.createElement(iconMap[currentStepObj.icon] || Cpu, { className: 'w-6 h-6' })}
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-[10px] font-mono font-bold text-[#D97706] bg-black/40 px-2.5 py-0.5 rounded-full uppercase">
                            STEP {currentStepObj.id} OF 12 • {currentSpec.category}
                          </span>
                          <span className="text-[10px] font-mono font-extrabold text-emerald-200 bg-white/10 px-2 py-0.5 rounded-full">
                            ⏱ Latency: {currentSpec.latency}
                          </span>
                        </div>
                        <h3 className="font-outfit font-black text-xl md:text-2xl text-white mt-1">
                          {currentStepObj.title}
                        </h3>
                      </div>
                    </div>
                  </div>

                  {/* High-Density Technical Spec Grid */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 my-3">
                    <div className="bg-black/20 p-2.5 rounded-xl border border-white/10">
                      <span className="text-[10px] font-mono uppercase text-emerald-200 block">Execution Node</span>
                      <span className="text-xs font-bold text-white block truncate">{currentSpec.node}</span>
                    </div>

                    <div className="bg-black/20 p-2.5 rounded-xl border border-white/10">
                      <span className="text-[10px] font-mono uppercase text-emerald-200 block">Input Format</span>
                      <span className="text-xs font-bold text-white block truncate">{currentSpec.inputFormat}</span>
                    </div>

                    <div className="bg-black/20 p-2.5 rounded-xl border border-white/10">
                      <span className="text-[10px] font-mono uppercase text-emerald-200 block">Output Payload</span>
                      <span className="text-xs font-bold text-white block truncate">{currentSpec.outputFormat}</span>
                    </div>

                    <div className="bg-black/20 p-2.5 rounded-xl border border-white/10 sm:col-span-2">
                      <span className="text-[10px] font-mono uppercase text-emerald-200 block">Primary Algorithm / Layer</span>
                      <span className="text-xs font-bold text-white block truncate">{currentSpec.algorithm}</span>
                    </div>

                    <div className="bg-black/20 p-2.5 rounded-xl border border-white/10">
                      <span className="text-[10px] font-mono uppercase text-emerald-200 block">Error Fallback</span>
                      <span className="text-xs font-bold text-emerald-100 block truncate">{currentSpec.fallback}</span>
                    </div>
                  </div>

                  {/* Detailed Description */}
                  <div className="bg-black/25 p-3.5 rounded-xl border border-white/10 space-y-1.5">
                    <p className="text-xs text-emerald-50 leading-relaxed font-medium">
                      <strong className="text-[#D97706] uppercase tracking-wider text-[11px] font-mono block mb-0.5">
                        Operational Scope:
                      </strong>
                      {currentStepObj.subtitle}
                    </p>
                    <p className="text-xs text-emerald-100/90 leading-relaxed font-normal pt-1 border-t border-white/10">
                      💡 <strong className="text-white">Under The Hood:</strong> {currentStepObj.details}
                    </p>
                  </div>
                </div>

                {/* Status Bar */}
                <div className="flex items-center justify-between text-[11px] font-mono text-emerald-200 pt-2 border-t border-white/15">
                  <span className="flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-[#D97706]" /> Active Security: AES-256 Cloud Encryption
                  </span>
                  <span className="text-white font-extrabold bg-[#D97706] px-2 py-0.5 rounded text-[10px]">
                    Subsystem Verified
                  </span>
                </div>
              </div>

              {/* RIGHT 5 COLUMNS: Live AI Vision Scanner & Output Visualizer */}
              <div className="lg:col-span-5 bg-white p-4 rounded-2xl border border-[#2C5E3B]/20 shadow-lg flex flex-col justify-between space-y-3">
                <div className="flex items-center justify-between border-b border-[#2C5E3B]/15 pb-2">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-[#D97706]" />
                    <span className="font-outfit font-black text-sm text-[#2C5E3B]">Live AI Scanning & Diagnosis Simulator</span>
                  </div>
                  <span className="text-[10px] font-mono font-bold text-white bg-[#2C5E3B] px-2.5 py-0.5 rounded-full">
                    Rice Crop Scan
                  </span>
                </div>

                {/* Simulated Leaf Image Scanner */}
                <div className="relative h-28 w-full bg-emerald-950 rounded-xl overflow-hidden border border-[#2C5E3B]/30 flex items-center justify-center">
                  <img
                    src="https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?q=80&w=800&auto=format&fit=crop"
                    alt="Leaf Scan Sample"
                    className="w-full h-full object-cover opacity-60"
                  />
                  {/* Bounding Box Infection Indicator */}
                  <div className="absolute top-4 left-1/3 w-28 h-16 border-2 border-[#D97706] bg-[#D97706]/20 rounded flex flex-col items-center justify-center animate-pulse">
                    <span className="text-[9px] font-mono font-bold text-white bg-black/70 px-1 py-0.2 rounded">
                      Pathogen Focus Area [98.4%]
                    </span>
                  </div>
                  {/* Animated Scan Line */}
                  {isSimulating && (
                    <div className="absolute left-0 right-0 h-1 bg-[#D97706] shadow-[0_0_12px_#D97706] animate-bounce top-1/2" />
                  )}
                  <div className="absolute bottom-1 right-2 text-[9px] font-mono text-emerald-300 bg-black/60 px-2 py-0.5 rounded">
                    512x512 RGB Matrix
                  </div>
                </div>

                {/* Live Diagnostic Output Metrics */}
                <div className="bg-[#E8EFE6] p-3 rounded-xl border border-[#2C5E3B]/15 space-y-2">
                  <div className="flex justify-between items-center text-xs">
                    <span className="font-bold text-[#2C5E3B]">Detected Pathogen:</span>
                    <span className="font-black text-[#D97706] bg-[#D97706]/10 px-2 py-0.5 rounded">
                      Bacterial Leaf Blight
                    </span>
                  </div>

                  <div className="flex justify-between items-center text-xs">
                    <span className="font-bold text-[#2C5E3B]">Confidence Score:</span>
                    <div className="flex items-center gap-2">
                      <div className="w-20 bg-gray-200 rounded-full h-2 overflow-hidden">
                        <div className="bg-[#2C5E3B] h-2 rounded-full w-[98%]" />
                      </div>
                      <span className="font-mono font-black text-xs text-[#2C5E3B]">98.4%</span>
                    </div>
                  </div>

                  <div className="flex justify-between items-center text-xs">
                    <span className="font-bold text-[#2C5E3B]">Disease Severity:</span>
                    <span className="font-bold text-[#2C5E3B] text-[11px]">34.2% Surface Damage (Stage II)</span>
                  </div>

                  <div className="border-t border-[#2C5E3B]/15 pt-1.5 text-xs">
                    <span className="font-bold text-[#2C5E3B] block mb-0.5">Recommended Remedy:</span>
                    <p className="text-[11px] text-[#2C5E3B]/90 font-medium">
                      Spray Copper Oxychloride 50% WP @ 2.5g/L + Neem Oil 5ml/L. Drain standing water.
                    </p>
                  </div>
                </div>

                {/* Storage Sync Badge */}
                <div className="flex items-center justify-between text-[10px] font-mono font-bold text-[#2C5E3B] bg-[#F2ECE1] px-3 py-1.5 rounded-lg border border-[#2C5E3B]/10">
                  <span className="flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#D97706]" /> Cloud Sync Status:
                  </span>
                  <span className="text-[#2C5E3B]">Persisted to Firestore & Local Cache</span>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'matrix' && (
            <motion.div
              key="matrix-tab"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="bg-[#2C5E3B] text-white p-5 rounded-2xl shadow-xl space-y-4"
            >
              <div className="flex items-center justify-between border-b border-white/15 pb-2">
                <div>
                  <h3 className="font-outfit font-black text-xl text-white">42-Class Crop Pathogen & Disease Matrix</h3>
                  <p className="text-xs text-emerald-200">
                    Neural classification coverage across 18 major Indian field crops and horticulture crops.
                  </p>
                </div>
                <span className="text-xs font-mono font-bold bg-[#D97706] text-white px-3 py-1 rounded-full">
                  PlantVillage + 15k Indian Samples
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                <div className="bg-black/20 p-3 rounded-xl border border-white/10 space-y-1">
                  <span className="text-xs font-black text-[#D97706] block">🌾 Cereal Crops (Rice, Wheat, Maize)</span>
                  <ul className="text-xs space-y-1 text-emerald-100 font-medium">
                    <li>• Bacterial Leaf Blight (Xanthomonas)</li>
                    <li>• Brown Spot & Blast Disease</li>
                    <li>• Yellow Rust & Smut</li>
                  </ul>
                </div>

                <div className="bg-black/20 p-3 rounded-xl border border-white/10 space-y-1">
                  <span className="text-xs font-black text-[#D97706] block">🥔 Vegetables (Tomato, Potato, Chilli)</span>
                  <ul className="text-xs space-y-1 text-emerald-100 font-medium">
                    <li>• Early & Late Blight (Phytophthora)</li>
                    <li>• Leaf Curl Virus & Mosaic Virus</li>
                    <li>• Bacterial Spot & Powdery Mildew</li>
                  </ul>
                </div>

                <div className="bg-black/20 p-3 rounded-xl border border-white/10 space-y-1">
                  <span className="text-xs font-black text-[#D97706] block">🌱 Commercial (Cotton, Sugarcane)</span>
                  <ul className="text-xs space-y-1 text-emerald-100 font-medium">
                    <li>• Cotton Leaf Curl & Black Rot</li>
                    <li>• Red Rot & Wilt in Sugarcane</li>
                    <li>• Pink Bollworm Feeding Signs</li>
                  </ul>
                </div>

                <div className="bg-black/20 p-3 rounded-xl border border-white/10 space-y-1">
                  <span className="text-xs font-black text-[#D97706] block">🍏 Fruits (Mango, Citrus, Grape)</span>
                  <ul className="text-xs space-y-1 text-emerald-100 font-medium">
                    <li>• Anthracnose & Powdery Mildew</li>
                    <li>• Citrus Canker & Greening</li>
                    <li>• Black Rot & Downy Mildew</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'specs' && (
            <motion.div
              key="specs-tab"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="bg-white text-[#2C5E3B] p-5 rounded-2xl border border-[#2C5E3B]/20 shadow-xl space-y-4"
            >
              <div className="flex items-center justify-between border-b border-[#2C5E3B]/15 pb-2">
                <div>
                  <h3 className="font-outfit font-black text-xl text-[#2C5E3B]">Deep Vision Model Technical Specifications</h3>
                  <p className="text-xs text-[#2C5E3B]/80">
                    Optimized deep learning neural architecture designed for low-power mobile deployment in offline rural environments.
                  </p>
                </div>
                <span className="text-xs font-mono font-bold bg-[#2C5E3B] text-white px-3 py-1 rounded-full">
                  MobileNetV3 Backbone
                </span>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                <div className="bg-[#E8EFE6] p-3 rounded-xl border border-[#2C5E3B]/15">
                  <span className="text-[10px] font-mono font-bold text-[#D97706] uppercase block">Model Architecture</span>
                  <span className="text-sm font-black text-[#2C5E3B] block mt-1">MobileNetV3 Large</span>
                  <span className="text-[10px] text-[#2C5E3B]/70 block">Hard-Swish Activation & SE Blocks</span>
                </div>

                <div className="bg-[#E8EFE6] p-3 rounded-xl border border-[#2C5E3B]/15">
                  <span className="text-[10px] font-mono font-bold text-[#D97706] uppercase block">Quantization & Size</span>
                  <span className="text-sm font-black text-[#2C5E3B] block mt-1">INT8 TensorRT (14.2 MB)</span>
                  <span className="text-[10px] text-[#2C5E3B]/70 block">92% size reduction vs FP32</span>
                </div>

                <div className="bg-[#E8EFE6] p-3 rounded-xl border border-[#2C5E3B]/15">
                  <span className="text-[10px] font-mono font-bold text-[#D97706] uppercase block">Edge Execution Latency</span>
                  <span className="text-sm font-black text-[#2C5E3B] block mt-1">320 ms / Image</span>
                  <span className="text-[10px] text-[#2C5E3B]/70 block">Tested on ARM Cortex-A53 CPU</span>
                </div>

                <div className="bg-[#E8EFE6] p-3 rounded-xl border border-[#2C5E3B]/15">
                  <span className="text-[10px] font-mono font-bold text-[#D97706] uppercase block">Training Dataset Size</span>
                  <span className="text-sm font-black text-[#2C5E3B] block mt-1">85,000+ Leaf Images</span>
                  <span className="text-[10px] text-[#2C5E3B]/70 block">80/10/10 Train/Val/Test Split</span>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* 4. BOTTOM FULL-WIDTH ARCHITECTURE BENCHMARK METRIC CARDS */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mt-3 pt-3 border-t border-[#2C5E3B]/20 grid grid-cols-2 md:grid-cols-4 gap-2.5 text-xs text-[#2C5E3B]"
      >
        <div className="bg-[#2C5E3B]/10 p-2.5 rounded-xl border border-[#2C5E3B]/15 flex items-center gap-2.5">
          <Zap className="w-5 h-5 text-[#D97706] shrink-0" />
          <div>
            <span className="text-[10px] font-mono font-bold uppercase text-[#D97706] block">Latency Budget</span>
            <span className="font-extrabold text-[#2C5E3B] block text-xs">&lt; 350ms End-to-End</span>
          </div>
        </div>

        <div className="bg-[#2C5E3B]/10 p-2.5 rounded-xl border border-[#2C5E3B]/15 flex items-center gap-2.5">
          <Activity className="w-5 h-5 text-[#2C5E3B] shrink-0" />
          <div>
            <span className="text-[10px] font-mono font-bold uppercase text-[#2C5E3B] block">Top-1 Accuracy</span>
            <span className="font-extrabold text-[#2C5E3B] block text-xs">98.7% Verified Score</span>
          </div>
        </div>

        <div className="bg-[#2C5E3B]/10 p-2.5 rounded-xl border border-[#2C5E3B]/15 flex items-center gap-2.5">
          <Leaf className="w-5 h-5 text-[#D97706] shrink-0" />
          <div>
            <span className="text-[10px] font-mono font-bold uppercase text-[#D97706] block">Disease Scope</span>
            <span className="font-extrabold text-[#2C5E3B] block text-xs">42 Pathogens across 18 Crops</span>
          </div>
        </div>

        <div className="bg-[#2C5E3B]/10 p-2.5 rounded-xl border border-[#2C5E3B]/15 flex items-center gap-2.5">
          <Server className="w-5 h-5 text-[#2C5E3B] shrink-0" />
          <div>
            <span className="text-[10px] font-mono font-bold uppercase text-[#2C5E3B] block">Offline Capability</span>
            <span className="font-extrabold text-[#2C5E3B] block text-xs">TFLite On-Device Execution</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

