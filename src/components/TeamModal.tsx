import React from 'react';
import { motion } from 'motion/react';
import { X, Award, GraduationCap, Users } from 'lucide-react';
import { TEAM_MEMBERS, PROJECT_INFO } from '../data/slidesData';

interface TeamModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const TeamModal: React.FC<TeamModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="bg-[#FAF7F0] border-2 border-[#2C5E3B] rounded-3xl p-6 md:p-8 max-w-2xl w-full shadow-2xl text-[#1B4332] space-y-6 max-h-[90vh] overflow-y-auto"
      >
        <div className="flex items-center justify-between border-b border-[#2C5E3B]/20 pb-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-full bg-[#2C5E3B] text-white">
              <Award className="w-6 h-6 text-[#D97706]" />
            </div>
            <div>
              <h2 className="font-outfit font-black text-xl text-[#2C5E3B]">{PROJECT_INFO.title}</h2>
              <p className="text-xs text-[#D97706] font-bold">{PROJECT_INFO.subtitle}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full bg-[#E8EFE6] hover:bg-[#D4E2D2] text-[#2C5E3B] transition cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Institution & Guide */}
        <div className="bg-[#F2ECE1] p-4 rounded-2xl border border-[#2C5E3B]/15 space-y-2">
          <div className="flex items-center gap-2 text-[#D97706] font-black text-xs uppercase tracking-wider">
            <GraduationCap className="w-4 h-4 text-[#2C5E3B]" /> Institution & Mentorship
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
            <div>
              <span className="text-[#2C5E3B]/70 block font-medium">College Name:</span>
              <strong className="text-[#2C5E3B] text-sm">{PROJECT_INFO.college}</strong>
            </div>
            <div>
              <span className="text-[#2C5E3B]/70 block font-medium">Project Guide:</span>
              <strong className="text-[#D97706] text-sm font-black">{PROJECT_INFO.guide}</strong>
            </div>
            <div className="sm:col-span-2">
              <span className="text-[#2C5E3B]/70 block font-medium">Departments:</span>
              <span className="text-[#2C5E3B] font-bold">{PROJECT_INFO.department}</span>
            </div>
          </div>
        </div>

        {/* Team Members Grid */}
        <div className="space-y-3">
          <h3 className="font-outfit font-black text-sm text-[#2C5E3B] flex items-center gap-2 uppercase tracking-wider">
            <Users className="w-4 h-4 text-[#D97706]" /> Team Members & USN List
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {TEAM_MEMBERS.map((m, idx) => (
              <div key={idx} className="bg-[#2C5E3B] text-white p-3.5 rounded-2xl flex items-center justify-between shadow-sm">
                <div>
                  <h4 className="font-black text-white text-sm">{m.name}</h4>
                  <span className="font-mono text-xs text-[#D97706] font-extrabold">{m.usn}</span>
                </div>
                <span className="text-[10px] px-2.5 py-0.5 rounded-full bg-white/20 text-white font-bold">
                  {m.department}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="pt-2 text-center text-xs text-[#2C5E3B]/70 font-semibold border-t border-[#2C5E3B]/15">
          Bangalore Institute Of Technology • Academic Project Keynote 2026
        </div>
      </motion.div>
    </div>
  );
};
