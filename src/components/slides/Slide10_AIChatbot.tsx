import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Globe, Mic, Volume2, Sparkles, User, Bot } from 'lucide-react';

export const Slide10_AIChatbot: React.FC = () => {
  const [selectedLanguage, setSelectedLanguage] = useState<string>('Kannada');
  const [activePromptIdx, setActivePromptIdx] = useState<number>(0);
  const [isPlayingAudio, setIsPlayingAudio] = useState<boolean>(false);

  const sampleChats = [
    {
      query: 'ನನ್ನ ಮೆಣಸಿನಕಾಯಿ ಗಿಡದ ಎಲೆಗಳು ಹಳದಿಯಾಗುತ್ತಿವೆ, ಏನು ಮಾಡಬೇಕು?',
      lang: 'Kannada',
      translation: 'My chili plant leaves are turning yellow, what should I do?',
      response: 'ನಿಮ್ಮ ಮೆಣಸಿನಕಾಯಿ ಗಿಡಕ್ಕೆ ಸಾರಜನಕದ ಕೊರತೆ ಅಥವಾ ಹಳದಿ ಕಾಯಿ ನಂಜು ರೋಗ (Yellow Mosaic Virus) ಇರಬಹುದು. 1 ಲೀಟರ್ ನೀರಿಗೆ 2 ಗ್ರಾಂ ನೀಮ್ ಎಣ್ಣೆ ಬೆರೆಸಿ ಸಿಂಪಡಿಸಿ.',
      responseTranslation: 'Your chili plant may have nitrogen deficiency or Yellow Mosaic Virus. Mix 2g Neem Oil in 1L water and spray early morning.',
    },
    {
      query: 'गेहूं की फसल में यूरिया की सही मात्रा कितनी होनी चाहिए?',
      lang: 'Hindi',
      translation: 'What is the correct dose of urea for wheat crop?',
      response: 'गेहूं की फसल में प्रति एकड़ 45-50 किलोग्राम यूरिया का प्रयोग करें। इसे दो भागों में बांटकर सिंचाई के बाद डालें।',
      responseTranslation: 'Apply 45-50 kg urea per acre for wheat crop, divided into two split doses after irrigation.',
    },
    {
      query: 'தக்காளி பயிருக்கு சொட்டு நீர் பாசனம் அமைப்பது எப்படி?',
      lang: 'Tamil',
      translation: 'How to setup drip irrigation for tomato crop?',
      response: 'தக்காளி பயிருக்கு 40 செ.மீ இடைவெளியில் சொட்டு நீர் குழாய்களை அமைக்கவும். இது 50% நீர் சேமிப்பை தரும்.',
      responseTranslation: 'Space drip emitters at 40cm intervals for tomato crops. This saves 50% water while boosting yield.',
    },
  ];

  const currentChat = sampleChats[activePromptIdx];

  const handlePlayAudioDemo = () => {
    setIsPlayingAudio(true);
    setTimeout(() => {
      setIsPlayingAudio(false);
    }, 3000);
  };

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
              09
            </span>
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#D97706]">
              Feature 04 • Voice & Text AI
            </span>
          </div>
          <h2 className="font-outfit font-black text-3xl md:text-5xl text-[#2C5E3B] tracking-tight">
            24/7 Multilingual AI Assistant
          </h2>
        </div>

        <div className="px-4 py-1.5 rounded-full bg-[#2C5E3B] text-white text-xs font-black flex items-center gap-2 self-start md:self-auto shadow-sm">
          <Globe className="w-4 h-4 text-[#D97706]" />
          <span>13 Regional Languages Supported</span>
        </div>
      </motion.div>

      {/* Main Grid Content */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 my-auto py-2 items-center">
        {/* Left Column: Interactive Chat Interface Demo (7 cols) */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-7 bg-[#2C5E3B] text-white p-5 rounded-3xl shadow-xl space-y-4 flex flex-col justify-between"
        >
          {/* Chat Header */}
          <div className="flex items-center justify-between border-b border-white/15 pb-3">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-[#D97706] text-white font-black flex items-center justify-center text-xs shadow-md">
                <Bot className="w-4 h-4 text-white" />
              </div>
              <div>
                <h4 className="font-outfit font-black text-sm text-white">FARM SHIELD AI Voice Assistant</h4>
                <p className="text-[10px] text-emerald-200 font-mono font-bold flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D97706] animate-pulse"></span> Language: {selectedLanguage}
                </p>
              </div>
            </div>

            <button
              onClick={handlePlayAudioDemo}
              className={`px-3 py-1.5 rounded-full text-xs font-bold transition flex items-center gap-1.5 cursor-pointer border ${
                isPlayingAudio
                  ? 'bg-[#D97706] border-[#D97706] text-white animate-pulse'
                  : 'bg-white/10 border-white/20 text-white hover:bg-white/20'
              }`}
            >
              <Volume2 className="w-3.5 h-3.5" />
              <span>{isPlayingAudio ? 'Speaking...' : 'Voice Readout'}</span>
            </button>
          </div>

          {/* Chat Bubbles */}
          <div className="space-y-3 font-sans text-xs my-auto py-1">
            {/* User Message */}
            <div className="flex items-start gap-2.5 justify-end">
              <div className="bg-[#D97706] text-white p-3.5 rounded-2xl rounded-tr-none max-w-md space-y-1 shadow-md">
                <p className="font-black text-white text-sm">{currentChat.query}</p>
                <p className="text-[10px] text-amber-100 italic font-normal">"{currentChat.translation}"</p>
              </div>
              <div className="w-7 h-7 rounded-full bg-white/20 text-white flex items-center justify-center font-bold shrink-0">
                <User className="w-3.5 h-3.5" />
              </div>
            </div>

            {/* AI Message */}
            <div className="flex items-start gap-2.5">
              <div className="w-7 h-7 rounded-full bg-emerald-700 text-white flex items-center justify-center font-bold shrink-0">
                <Sparkles className="w-3.5 h-3.5 text-[#D97706]" />
              </div>
              <div className="bg-white/10 border border-white/15 p-3.5 rounded-2xl rounded-tl-none text-emerald-100 max-w-md space-y-1">
                <p className="font-semibold text-white text-xs leading-relaxed">{currentChat.response}</p>
                <p className="text-[10px] text-emerald-200 italic border-t border-white/10 pt-1 font-normal">
                  💡 English: "{currentChat.responseTranslation}"
                </p>
              </div>
            </div>
          </div>

          {/* Language Switcher */}
          <div className="pt-2 border-t border-white/15 flex items-center justify-between text-[11px]">
            <span className="text-emerald-200 font-mono font-bold">Try Sample Query:</span>
            <div className="flex items-center gap-1.5">
              {sampleChats.map((sc, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setActivePromptIdx(i);
                    setSelectedLanguage(sc.lang);
                  }}
                  className={`px-3 py-1 rounded-full text-xs font-bold transition cursor-pointer ${
                    activePromptIdx === i
                      ? 'bg-[#D97706] text-white font-black shadow-sm'
                      : 'bg-white/10 text-emerald-100 hover:bg-white/20'
                  }`}
                >
                  {sc.lang}
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right Column: Key Benefits (5 cols) */}
        <div className="lg:col-span-5 space-y-3.5">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white/95 p-5 rounded-3xl border-2 border-[#2C5E3B]/15 hover:border-[#D97706] transition shadow-md space-y-2"
          >
            <div className="flex items-center gap-3 text-[#2C5E3B] font-black">
              <div className="w-9 h-9 rounded-2xl bg-[#2C5E3B] text-white flex items-center justify-center shrink-0">
                <Globe className="w-5 h-5 text-[#D97706]" />
              </div>
              <span className="font-outfit text-lg">13 Indian Dialects</span>
            </div>
            <p className="text-xs md:text-sm text-[#2C5E3B]/90 leading-relaxed font-normal">
              Kannada, Hindi, Tamil, Telugu, Marathi, Bengali, Gujarati, Punjabi, Malayalam, Odia, Assamese, Urdu & English.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white/95 p-5 rounded-3xl border-2 border-[#2C5E3B]/15 hover:border-[#D97706] transition shadow-md space-y-2"
          >
            <div className="flex items-center gap-3 text-[#2C5E3B] font-black">
              <div className="w-9 h-9 rounded-2xl bg-[#D97706] text-white flex items-center justify-center shrink-0">
                <Mic className="w-5 h-5 text-white" />
              </div>
              <span className="font-outfit text-lg">Speech Input & Audio Readout</span>
            </div>
            <p className="text-xs md:text-sm text-[#2C5E3B]/90 leading-relaxed font-normal">
              Farmers speak directly into their phone mic and receive spoken advice, breaking rural illiteracy barriers.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-white/95 p-5 rounded-3xl border-2 border-[#2C5E3B]/15 hover:border-[#D97706] transition shadow-md space-y-2"
          >
            <div className="flex items-center gap-3 text-[#2C5E3B] font-black">
              <div className="w-9 h-9 rounded-2xl bg-[#2C5E3B] text-white flex items-center justify-center shrink-0">
                <Sparkles className="w-5 h-5 text-[#D97706]" />
              </div>
              <span className="font-outfit text-lg">Hyper-Local Agronomy Rules</span>
            </div>
            <p className="text-xs md:text-sm text-[#2C5E3B]/90 leading-relaxed font-normal">
              Calculates precise fertilizer dosages and spray schedules based on localized soil and climate data.
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
        <span>🗣️ Overcoming rural language barriers with voice-enabled AI conversational intelligence.</span>
        <span className="font-mono text-[#D97706] font-extrabold">Slide 09</span>
      </motion.div>
    </div>
  );
};
