import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Scroll,
  BookOpen,
  ArrowRight,
  ChevronRight,
  CheckCircle2,
  Compass,
  Sparkles,
  Layers,
  FileCheck2,
  Flame,
  ShieldAlert,
  ArrowDown
} from 'lucide-react';
import {
  PARTY_LINE_OPENING,
  PARTY_LINE_CONTEXT,
  STRATEGIC_PILLARS,
  PARTY_LINE_VALIDATIONS,
  PARTY_LINE_DRAWER_DATA,
  PARTY_LINE_FOOTNOTE
} from '@/data/partyLineData';
import { DetailContent } from '@/components/ui/DetailDrawer';

interface PartyLineProps {
  onOpenDetailDrawer?: (data: DetailContent) => void;
  onNavigate?: (id: string) => void;
}

export const PartyLine1965_1975: React.FC<PartyLineProps> = ({
  onOpenDetailDrawer,
  onNavigate
}) => {
  const [activePillarIndex, setActivePillarIndex] = useState(0);
  const currentPillar = STRATEGIC_PILLARS[activePillarIndex];

  const handleContinue = () => {
    if (onNavigate) {
      onNavigate('context-1965');
    } else {
      const elem = document.getElementById('context-1965');
      if (elem) {
        elem.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section
      id="party-line-1965"
      className="relative py-28 px-4 sm:px-6 lg:px-8 bg-paper-texture border-b-2 border-[#704512]/30 overflow-hidden"
    >
      {/* Decorative Archival Watermark / Texture Accent */}
      <div className="absolute top-12 right-12 text-[140px] sm:text-[220px] font-display font-black text-[#704512]/5 pointer-events-none select-none leading-none">
        1965
      </div>

      <div className="max-w-7xl mx-auto space-y-28">
        
        {/* ========================================================================= */}
        {/* TẦNG 1: OPENING — ĐƯỜNG LỐI KHÁNG CHIẾN CHỐNG MỸ, CỨU NƯỚC (1965 → 1975) */}
        {/* ========================================================================= */}
        <div className="relative text-center max-w-4xl mx-auto space-y-6">
          
          {/* Archival Stamp Header */}
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#E2D3B3] rounded-full border border-[#704512]/40 text-xs font-mono text-[#9E1B1B] font-bold uppercase tracking-wider shadow-sm"
          >
            <Scroll className="w-3.5 h-3.5" /> NGHỊ QUYẾT LỊCH SỬ • CHƯƠNG 2 (II.2)
          </motion.div>

          {/* Main Exhibition Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-3xl sm:text-5xl lg:text-6xl font-display font-black text-[#171717] tracking-tight uppercase leading-tight"
          >
            {PARTY_LINE_OPENING.title}
          </motion.h2>

          {/* Archival Date Stamp Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-block"
          >
            <span className="px-4 py-1.5 bg-[#9E1B1B] text-[#F8F3E8] font-display font-black tracking-widest text-lg sm:text-xl rounded shadow-md vintage-stamp border-[#D5B45A]/40">
              {PARTY_LINE_OPENING.period}
            </span>
          </motion.div>

          <div className="w-24 h-1 bg-[#9E1B1B] mx-auto my-4" />

          {/* Opening Narrative Summary */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-base sm:text-xl text-[#4A4A4A] leading-relaxed font-normal max-w-3xl mx-auto text-justify sm:text-center"
          >
            {PARTY_LINE_OPENING.summary}
          </motion.p>

          {/* Two Historical Central Committee Conferences (TW 11 & TW 12) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="pt-6 grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto"
          >
            {PARTY_LINE_OPENING.conferences.map((conf, idx) => (
              <div
                key={idx}
                className="bg-[#F8F3E8] p-4 sm:p-5 rounded-xl border-2 border-[#704512]/30 shadow-sm text-left flex flex-col justify-between group hover:border-[#9E1B1B] transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between text-xs font-mono font-bold text-[#9E1B1B] mb-1">
                    <span className="uppercase">{conf.time}</span>
                    <FileCheck2 className="w-4 h-4 text-[#704512] group-hover:text-[#9E1B1B] transition-colors" />
                  </div>
                  <h3 className="text-base sm:text-lg font-display font-bold text-[#171717] uppercase">
                    {conf.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#4A4A4A] mt-2 leading-relaxed">
                    {conf.decision}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Quick Drawer Trigger */}
          {onOpenDetailDrawer && (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="pt-2"
            >
              <button
                onClick={() => onOpenDetailDrawer(PARTY_LINE_DRAWER_DATA)}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#E2D3B3] hover:bg-[#D5B45A]/30 text-[#704512] font-mono text-xs uppercase font-bold border border-[#704512]/40 transition-all cursor-pointer shadow-xs"
              >
                <BookOpen className="w-3.5 h-3.5 text-[#9E1B1B]" />
                <span>Xem tư liệu: Toàn văn Nghị quyết TW 11 & 12 (1965)</span>
              </button>
            </motion.div>
          )}
        </div>


        {/* ========================================================================= */}
        {/* TẦNG 2: BỐI CẢNH — VÌ SAO ĐƯỜNG LỐI PHẢI ĐƯỢC HOÀN CHỈNH?                 */}
        {/* ========================================================================= */}
        <div className="relative bg-[#E8DEC4] rounded-3xl p-6 sm:p-10 lg:p-12 border-2 border-[#704512]/40 shadow-xl">
          
          {/* Section Sub-header */}
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#D8CAAC] rounded-full border border-[#704512]/30 text-[11px] font-mono text-[#9E1B1B] font-bold uppercase tracking-wider mb-2">
              <ShieldAlert className="w-3.5 h-3.5" /> BỐI CẢNH CHIẾN TRƯỜNG 1965
            </div>
            <h3 className="text-2xl sm:text-4xl font-display font-black text-[#171717] uppercase">
              {PARTY_LINE_CONTEXT.title}
            </h3>
            <div className="w-16 h-0.5 bg-[#9E1B1B] mx-auto my-3" />
          </div>

          {/* Split 2 Halves: South (Local War) vs North (Destructive War) with 1965 Center Axis */}
          <div className="grid grid-cols-1 lg:grid-cols-11 gap-6 sm:gap-8 items-center">
            
            {/* LEFT HALF: MIỀN NAM */}
            <motion.div
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-5 bg-[#F8F3E8] p-6 sm:p-7 rounded-2xl border-2 border-[#9E1B1B] shadow-md relative group"
            >
              <div className="flex items-center justify-between mb-3 border-b border-[#704512]/20 pb-2">
                <span className="text-xs font-mono font-bold text-[#9E1B1B] uppercase tracking-wider">
                  TIỀN TUYẾN MIỀN NAM
                </span>
                <span className="px-2 py-0.5 bg-[#9E1B1B] text-[#F8F3E8] text-[10px] font-display font-bold rounded">
                  8/3/1965
                </span>
              </div>
              <h4 className="text-xl sm:text-2xl font-display font-black text-[#171717] uppercase mb-1">
                {PARTY_LINE_CONTEXT.south.region}
              </h4>
              <div className="text-sm font-serif-title italic text-[#9E1B1B] font-bold mb-3">
                {PARTY_LINE_CONTEXT.south.tag}
              </div>
              <p className="text-xs sm:text-sm text-[#171717] leading-relaxed text-justify">
                {PARTY_LINE_CONTEXT.south.description}
              </p>
            </motion.div>

            {/* CENTER AXIS: 1965 PIVOT */}
            <div className="lg:col-span-1 flex flex-col items-center justify-center py-2">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#9E1B1B] text-[#D5B45A] flex items-center justify-center font-display font-black text-base sm:text-lg shadow-lg border-2 border-[#D5B45A] shrink-0">
                1965
              </div>
              <div className="hidden lg:block w-0.5 h-10 bg-[#704512]/40 my-1" />
              <span className="text-[10px] font-mono text-[#704512] uppercase font-bold tracking-widest mt-1 text-center">
                BƯỚC NGOẶT
              </span>
            </div>

            {/* RIGHT HALF: MIỀN BẮC */}
            <motion.div
              initial={{ opacity: 0, x: 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-5 bg-[#F8F3E8] p-6 sm:p-7 rounded-2xl border-2 border-[#704512] shadow-md relative group"
            >
              <div className="flex items-center justify-between mb-3 border-b border-[#704512]/20 pb-2">
                <span className="text-xs font-mono font-bold text-[#704512] uppercase tracking-wider">
                  HẬU PHƯƠNG MIỀN BẮC
                </span>
                <span className="px-2 py-0.5 bg-[#704512] text-[#F8F3E8] text-[10px] font-display font-bold rounded">
                  8/1964 – 1965
                </span>
              </div>
              <h4 className="text-xl sm:text-2xl font-display font-black text-[#171717] uppercase mb-1">
                {PARTY_LINE_CONTEXT.north.region}
              </h4>
              <div className="text-sm font-serif-title italic text-[#704512] font-bold mb-3">
                {PARTY_LINE_CONTEXT.north.tag}
              </div>
              <p className="text-xs sm:text-sm text-[#171717] leading-relaxed text-justify">
                {PARTY_LINE_CONTEXT.north.description}
              </p>
            </motion.div>
          </div>

          {/* Context Conclusion Bar */}
          <div className="mt-8 pt-6 border-t border-[#704512]/20 text-center">
            <p className="text-xs sm:text-sm font-serif-title italic text-[#704512] max-w-2xl mx-auto">
              ➔ {PARTY_LINE_CONTEXT.conclusion}
            </p>
          </div>
        </div>


        {/* ========================================================================= */}
        {/* TẦNG 3: 6 TRỤ CỘT CỦA ĐƯỜNG LỐI (TRỌNG TÂM CỐT LÕI - INTERACTIVE)          */}
        {/* ========================================================================= */}
        <div className="space-y-10">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#E2D3B3] rounded-full border border-[#704512]/30 text-xs font-mono text-[#9E1B1B] font-bold uppercase tracking-wider mb-3">
              <Layers className="w-3.5 h-3.5" /> NỘI DUNG ĐƯỜNG LỐI KHÁNG CHIẾN
            </div>
            <h3 className="text-3xl sm:text-5xl font-display font-black text-[#171717] tracking-tight uppercase leading-tight">
              6 TRỤ CỘT ĐƯỜNG LỐI CHIẾN LƯỢC
            </h3>
            <div className="w-20 h-1 bg-[#9E1B1B] mx-auto my-4" />
            <p className="font-serif-title italic text-sm sm:text-base text-[#704512]">
              Hệ thống quan điểm toàn diện, khoa học và sáng tạo của Đảng trong kháng chiến chống Mỹ
            </p>
          </div>

          {/* Pillar Selector Tabs (Horizontal Navigation Bar) */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-3">
            {STRATEGIC_PILLARS.map((pillar, idx) => {
              const isSelected = activePillarIndex === idx;
              return (
                <button
                  key={pillar.id}
                  onClick={() => setActivePillarIndex(idx)}
                  className={`p-3.5 rounded-xl border-2 text-left transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                    isSelected
                      ? 'bg-[#9E1B1B] text-[#F8F3E8] border-[#9E1B1B] shadow-lg scale-[1.02]'
                      : 'bg-[#F8F3E8] text-[#171717] border-[#704512]/20 hover:border-[#9E1B1B]/60 hover:bg-[#E8DEC4]'
                  }`}
                >
                  <div className="flex items-center justify-between text-xs font-mono mb-1.5">
                    <span className={`font-black text-sm ${isSelected ? 'text-[#D5B45A]' : 'text-[#9E1B1B]'}`}>
                      {pillar.number}
                    </span>
                    <span className={`text-[9px] uppercase px-1 py-0.5 rounded font-mono ${isSelected ? 'bg-black/30 text-white' : 'bg-[#E2D3B3] text-[#704512]'}`}>
                      TRỤ CỘT
                    </span>
                  </div>
                  <div className="font-display font-bold text-xs sm:text-sm line-clamp-2 uppercase leading-snug">
                    {pillar.category}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Pillar Card (Detailed Interactive Presentation) */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentPillar.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="bg-[#F8F3E8] rounded-3xl border-2 border-[#704512] p-6 sm:p-10 shadow-2xl relative overflow-hidden"
            >
              {/* Background Watermark Number */}
              <div className="absolute right-4 bottom-2 text-8xl sm:text-[180px] font-display font-black text-[#704512]/10 select-none pointer-events-none leading-none">
                {currentPillar.number}
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10">
                
                {/* Left Col: Main Manifesto & Content */}
                <div className="lg:col-span-7 space-y-5">
                  
                  {/* Category & Badge */}
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="px-3 py-1 bg-[#9E1B1B] text-[#F8F3E8] font-display font-bold text-xs tracking-wider uppercase rounded">
                      {currentPillar.number} — {currentPillar.category}
                    </span>
                    <span className="px-2.5 py-1 bg-[#E2D3B3] text-[#704512] font-mono text-xs font-bold uppercase rounded border border-[#704512]/30">
                      {currentPillar.badge}
                    </span>
                  </div>

                  {/* Pillar Headline */}
                  <h4 className="text-2xl sm:text-4xl font-display font-black text-[#171717] tracking-tight uppercase leading-snug">
                    {currentPillar.headline}
                  </h4>

                  {/* Lead Quote / Highlight */}
                  {currentPillar.leadQuote && (
                    <div className="p-4 bg-[#F1E6CC] rounded-xl border-l-4 border-[#9E1B1B] shadow-xs">
                      <p className="font-serif-title italic font-bold text-base sm:text-lg text-[#9E1B1B]">
                        {currentPillar.leadQuote}
                      </p>
                    </div>
                  )}

                  {/* Detailed Explanation */}
                  <p className="text-sm sm:text-base text-[#171717] leading-relaxed text-justify">
                    {currentPillar.content}
                  </p>

                  {/* Subtext explanation */}
                  {currentPillar.subText && (
                    <p className="text-xs sm:text-sm font-serif-title italic text-[#704512] border-t border-[#704512]/20 pt-3">
                      ✦ {currentPillar.subText}
                    </p>
                  )}
                </div>

                {/* Right Col: Strategic Infographic / Visual Flow */}
                <div className="lg:col-span-5 bg-[#F1E6CC] rounded-2xl border-2 border-[#704512]/30 p-5 sm:p-6 flex flex-col justify-between">
                  
                  <div className="mb-4 pb-2 border-b border-[#704512]/20 flex items-center justify-between">
                    <span className="text-xs font-display font-bold text-[#9E1B1B] uppercase tracking-wider flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-[#D5B45A]" /> MÔ HÌNH CHIẾN LƯỢC
                    </span>
                    <span className="text-[11px] font-mono text-[#704512]">
                      Trụ cột {currentPillar.number}/06
                    </span>
                  </div>

                  {/* VISUAL TYPE 1: Quote Highlight (Pillar 01) */}
                  {currentPillar.visualType === 'quote-highlight' && (
                    <div className="space-y-4 py-2">
                      <div className="p-4 rounded-xl bg-[#F8F3E8] border border-[#9E1B1B]/40 text-center space-y-2">
                        <div className="w-8 h-8 rounded-full bg-[#9E1B1B] text-[#F8F3E8] flex items-center justify-center font-black mx-auto">
                          ★
                        </div>
                        <div className="font-display font-bold text-sm text-[#9E1B1B] uppercase">
                          Ý CHÍ QUYẾT CHIẾN QUYẾT THẮNG
                        </div>
                        <p className="text-xs text-[#4A4A4A] leading-relaxed">
                          Dù địch đưa quân viễn chinh ồ ạt, tương quan lực lượng cơ bản không đổi. Ta vẫn giữ vững thế chủ động.
                        </p>
                      </div>
                      <div className="p-3 bg-[#E2D3B3] rounded-lg text-xs font-mono text-[#704512] text-center font-bold">
                        ĐÁNH BẠI Ý CHÍ XÂM LƯỢC CỦA ĐẾ QUỐC MỸ
                      </div>
                    </div>
                  )}

                  {/* VISUAL TYPE 2: Three Steps (Pillar 02) */}
                  {currentPillar.visualType === 'three-steps' && (
                    <div className="space-y-3 py-1">
                      {currentPillar.visualData.steps.map((step: any, sIdx: number) => (
                        <div key={sIdx} className="space-y-1">
                          <div className="p-3 rounded-lg bg-[#F8F3E8] border border-[#704512]/30 flex items-center gap-3">
                            <span className="w-6 h-6 rounded-full bg-[#9E1B1B] text-[#F8F3E8] text-xs font-display font-bold flex items-center justify-center shrink-0">
                              {sIdx + 1}
                            </span>
                            <div>
                              <div className="text-xs font-display font-bold text-[#171717] uppercase">
                                {step.label}
                              </div>
                              <div className="text-[11px] text-[#704512] font-mono">
                                {step.desc}
                              </div>
                            </div>
                          </div>
                          {sIdx < 2 && (
                            <div className="flex justify-center my-0.5">
                              <ArrowDown className="w-3.5 h-3.5 text-[#9E1B1B]" />
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}

                  {/* VISUAL TYPE 3: Long-term Timeline (Pillar 03) */}
                  {currentPillar.visualType === 'long-term-timeline' && (
                    <div className="space-y-4 py-1">
                      <div className="space-y-2">
                        {currentPillar.visualData.principles.map((p: string, pIdx: number) => (
                          <div key={pIdx} className="flex items-center gap-2 text-xs font-serif-title font-semibold text-[#171717] bg-[#F8F3E8] p-2 rounded border border-[#704512]/20">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#9E1B1B] shrink-0" />
                            <span>{p}</span>
                          </div>
                        ))}
                      </div>

                      {/* Progression Flow */}
                      <div className="p-3 bg-[#E2D3B3] rounded-xl border border-[#704512]/30">
                        <div className="text-[10px] font-mono font-bold text-[#9E1B1B] uppercase mb-2">
                          TIẾN TRÌNH TẠO BƯỚC NGOẶT:
                        </div>
                        <div className="flex flex-wrap items-center gap-1 text-[10px] font-mono text-[#171717]">
                          <span className="bg-[#F8F3E8] px-1.5 py-0.5 rounded">XÂY LỰC LƯỢNG</span>
                          <span>→</span>
                          <span className="bg-[#F8F3E8] px-1.5 py-0.5 rounded">TẠO THẾ</span>
                          <span>→</span>
                          <span className="bg-[#F8F3E8] px-1.5 py-0.5 rounded">THỜI CƠ</span>
                          <span>→</span>
                          <span className="bg-[#9E1B1B] text-white px-1.5 py-0.5 rounded font-bold">1975 TOÀN THẮNG</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* VISUAL TYPE 4: Three Prongs & Three Zones (Pillar 04) */}
                  {currentPillar.visualType === 'three-prongs' && (
                    <div className="space-y-3.5 py-1">
                      <div>
                        <div className="text-[10px] font-mono font-bold text-[#9E1B1B] uppercase mb-1.5">
                          3 MŨI GIÁP CÔNG CHIẾN LƯỢC:
                        </div>
                        <div className="grid grid-cols-3 gap-1.5 text-center">
                          {currentPillar.visualData.threeProngs.map((prong: any, prIdx: number) => (
                            <div key={prIdx} className="bg-[#F8F3E8] p-2 rounded border border-[#704512]/30">
                              <div className="text-xs font-display font-black text-[#9E1B1B]">
                                {prong.name}
                              </div>
                              <div className="text-[9px] text-[#704512] line-clamp-2 mt-0.5">
                                {prong.role}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="pt-2 border-t border-[#704512]/20">
                        <div className="text-[10px] font-mono font-bold text-[#704512] uppercase mb-1.5">
                          3 VÙNG CHIẾN LƯỢC:
                        </div>
                        <div className="flex justify-between items-center bg-[#E2D3B3] p-2 rounded text-[11px] font-mono text-[#171717] font-bold text-center">
                          <span>RỪNG NÚI</span>
                          <span>•</span>
                          <span>NÔNG THÔN</span>
                          <span>•</span>
                          <span>ĐÔ THỊ</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* VISUAL TYPE 5: Four Tasks & Route (Pillar 05) */}
                  {currentPillar.visualType === 'four-tasks' && (
                    <div className="space-y-3 py-1">
                      <div className="grid grid-cols-2 gap-2">
                        {currentPillar.visualData.tasks.map((task: any, tIdx: number) => (
                          <div key={tIdx} className="bg-[#F8F3E8] p-2.5 rounded-lg border border-[#704512]/20">
                            <div className="text-[10px] font-mono font-bold text-[#9E1B1B]">
                              {task.no}. {task.title}
                            </div>
                            <div className="text-[10px] text-[#4A4A4A] mt-0.5">
                              {task.desc}
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Route Line */}
                      <div className="bg-[#E2D3B3] p-2.5 rounded-lg text-center text-[10px] font-mono text-[#704512] font-semibold border border-[#704512]/20">
                        <span className="font-bold text-[#9E1B1B]">MIỀN BẮC</span>
                        {' '}➔{' '}
                        <span>SỨC NGƯỜI & SỨC CỦA</span>
                        {' '}➔{' '}
                        <span className="font-bold text-[#704512]">TRƯỜNG SƠN</span>
                        {' '}➔{' '}
                        <span className="font-bold text-[#9E1B1B]">MIỀN NAM</span>
                      </div>
                    </div>
                  )}

                  {/* VISUAL TYPE 6: Dual Regions (Pillar 06) */}
                  {currentPillar.visualType === 'dual-regions' && (
                    <div className="space-y-3 py-1">
                      <div className="grid grid-cols-2 gap-2">
                        <div className="bg-[#F8F3E8] p-2.5 rounded border border-[#9E1B1B]">
                          <div className="text-xs font-display font-bold text-[#9E1B1B]">
                            {currentPillar.visualData.south.title}
                          </div>
                          <div className="text-[10px] font-mono text-[#704512] font-bold">
                            {currentPillar.visualData.south.role}
                          </div>
                          <div className="text-[10px] text-[#4A4A4A] mt-1">
                            {currentPillar.visualData.south.mission}
                          </div>
                        </div>

                        <div className="bg-[#F8F3E8] p-2.5 rounded border border-[#704512]">
                          <div className="text-xs font-display font-bold text-[#704512]">
                            {currentPillar.visualData.north.title}
                          </div>
                          <div className="text-[10px] font-mono text-[#704512] font-bold">
                            {currentPillar.visualData.north.role}
                          </div>
                          <div className="text-[10px] text-[#4A4A4A] mt-1">
                            {currentPillar.visualData.north.mission}
                          </div>
                        </div>
                      </div>

                      <div className="p-2.5 bg-[#9E1B1B] text-[#F8F3E8] rounded-lg text-center">
                        <div className="text-[10px] font-mono uppercase text-[#D5B45A] font-bold">
                          MỘT MỤC TIÊU TỐI THƯỢNG:
                        </div>
                        <div className="text-xs font-display font-black tracking-wide uppercase mt-0.5">
                          {currentPillar.visualData.unity}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Navigation Helper Buttons */}
                  <div className="pt-4 mt-2 border-t border-[#704512]/20 flex items-center justify-between">
                    <button
                      onClick={() => setActivePillarIndex((prev) => Math.max(0, prev - 1))}
                      disabled={activePillarIndex === 0}
                      className="px-3 py-1.5 rounded bg-[#E2D3B3] text-[#171717] text-xs font-mono font-bold disabled:opacity-30 cursor-pointer"
                    >
                      ← Trước
                    </button>
                    <span className="text-xs font-mono text-[#704512] font-bold">
                      {activePillarIndex + 1} / {STRATEGIC_PILLARS.length}
                    </span>
                    <button
                      onClick={() => setActivePillarIndex((prev) => Math.min(STRATEGIC_PILLARS.length - 1, prev + 1))}
                      disabled={activePillarIndex === STRATEGIC_PILLARS.length - 1}
                      className="px-3 py-1.5 rounded bg-[#E2D3B3] text-[#171717] text-xs font-mono font-bold disabled:opacity-30 cursor-pointer"
                    >
                      Tiếp →
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>


        {/* ========================================================================= */}
        {/* TẦNG 4: ĐƯỜNG LỐI → THỰC TIỄN & FORESHADOWING                              */}
        {/* ========================================================================= */}
        <div className="space-y-12 bg-[#E8DEC4] rounded-3xl p-6 sm:p-10 lg:p-12 border-2 border-[#704512]/40 shadow-xl">
          
          {/* Tier 4 Header */}
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#D8CAAC] rounded-full border border-[#704512]/30 text-xs font-mono text-[#9E1B1B] font-bold uppercase tracking-wider mb-3">
              <Compass className="w-3.5 h-3.5" /> TỪ QUYẾT SÁCH ĐẾN CHIẾN TRƯỜNG
            </div>
            <h3 className="text-2xl sm:text-4xl lg:text-5xl font-display font-black text-[#171717] uppercase">
              ĐƯỜNG LỐI ĐƯỢC KIỂM CHỨNG BẰNG THỰC TIỄN
            </h3>
            <div className="w-20 h-1 bg-[#9E1B1B] mx-auto my-4" />
            <p className="font-serif-title italic text-sm sm:text-base text-[#704512]">
              Quy trình tổ chức lực lượng và hiện thực hóa đường lối qua các mốc son lịch sử 1965 – 1975
            </p>
          </div>

          {/* Sequential Process Flow (Horizontal Chain) */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-4xl mx-auto text-center">
            {[
              { step: '01', title: 'ĐƯỜNG LỐI', desc: 'Hội nghị TW 11 & 12 (1965)' },
              { step: '02', title: 'TỔ CHỨC LỰC LƯỢNG', desc: 'Huy động hai miền cả nước' },
              { step: '03', title: 'THỰC HIỆN', desc: 'Đấu tranh quân sự, chính trị, ngoại giao' },
              { step: '04', title: 'KẾT QUẢ', desc: '30/4/1975 Thống nhất non sông' }
            ].map((st, sIdx) => (
              <div
                key={sIdx}
                className="bg-[#F8F3E8] p-3.5 rounded-xl border border-[#704512]/30 shadow-xs relative"
              >
                <div className="w-6 h-6 rounded-full bg-[#9E1B1B] text-[#F8F3E8] text-xs font-display font-bold flex items-center justify-center mx-auto mb-1.5">
                  {st.step}
                </div>
                <div className="font-display font-bold text-xs sm:text-sm text-[#171717] uppercase">
                  {st.title}
                </div>
                <div className="text-[10px] font-mono text-[#704512] mt-1">
                  {st.desc}
                </div>
              </div>
            ))}
          </div>

          {/* 5 Real-world Historical Validation Milestones */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-3 sm:gap-4 pt-4">
            {PARTY_LINE_VALIDATIONS.map((val, vIdx) => (
              <motion.div
                key={vIdx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: vIdx * 0.1 }}
                className="bg-[#F8F3E8] p-4 rounded-xl border-2 border-[#704512]/30 shadow-sm flex flex-col justify-between hover:border-[#9E1B1B] transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between text-xs font-mono font-bold text-[#9E1B1B] mb-2">
                    <span>{val.period}</span>
                    <span className="w-2 h-2 rounded-full bg-[#9E1B1B]" />
                  </div>
                  <h4 className="font-display font-bold text-sm text-[#171717] uppercase mb-1.5">
                    {val.title}
                  </h4>
                  <p className="text-xs text-[#4A4A4A] leading-relaxed">
                    {val.description}
                  </p>
                </div>
                <div className="mt-3 pt-2 border-t border-[#704512]/20">
                  <span className="text-[9px] font-mono font-bold text-[#704512] uppercase tracking-wider block">
                    {val.badge}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* ===================================================================== */}
          {/* PHẦN LIÊN HỆ & FORESHADOWING: BẦU TRỜI HÀ NỘI & CALL TO ACTION        */}
          {/* ===================================================================== */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="pt-8 border-t-2 border-[#704512]/20 text-center space-y-6 max-w-3xl mx-auto"
          >
            <div className="space-y-3">
              <p className="font-serif-title italic text-base sm:text-xl text-[#704512]">
                “Nhưng đường lối ấy sẽ được kiểm chứng rõ nhất ở đâu?”
              </p>
              <h4 className="font-display font-black text-2xl sm:text-4xl text-[#9E1B1B] uppercase tracking-wide">
                TRÊN CHIẾN TRƯỜNG VÀ TRÊN BẦU TRỜI HÀ NỘI.
              </h4>
              <p className="text-xs sm:text-sm font-mono text-[#4A4A4A]">
                Câu trả lời sẽ xuất hiện trong những diễn biến từ 1965 đến 1975.
              </p>
            </div>

            {/* Seamless Next Section CTA */}
            <div className="pt-4">
              <button
                onClick={handleContinue}
                className="inline-flex items-center gap-3 px-8 py-3.5 rounded-xl bg-[#9E1B1B] hover:bg-[#7A1414] text-[#F8F3E8] font-display font-bold text-sm sm:text-base uppercase tracking-widest shadow-xl hover:scale-105 transition-all cursor-pointer group border border-[#D5B45A]/40"
              >
                <span>TIẾP TỤC → BỐI CẢNH 1965</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform text-[#D5B45A]" />
              </button>
            </div>
          </motion.div>
        </div>


        {/* ========================================================================= */}
        {/* NGUỒN THAM KHẢO / FOOTNOTE                                               */}
        {/* ========================================================================= */}
        <div className="p-4 sm:p-5 bg-[#E2D3B3]/60 rounded-xl border border-[#704512]/30 text-xs text-[#704512] max-w-4xl mx-auto">
          <div className="font-display font-bold uppercase tracking-wider text-[#9E1B1B] mb-1">
            {PARTY_LINE_FOOTNOTE.title}:
          </div>
          <p className="leading-relaxed">
            • <strong>{PARTY_LINE_FOOTNOTE.source}</strong> {PARTY_LINE_FOOTNOTE.chapter} {PARTY_LINE_FOOTNOTE.section} {PARTY_LINE_FOOTNOTE.topic}
          </p>
        </div>

      </div>
    </section>
  );
};
