import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Compass, Flame, MapPin, Calendar, CheckCircle2, ChevronRight, ChevronLeft, Zap, Shield, Sparkles } from 'lucide-react';
import { SPRING_1975_CAMPAIGNS } from '@/data/timelineData';

export const Spring1975: React.FC = () => {
  const [selectedCampaign, setSelectedCampaign] = useState(0);
  const currentCamp = SPRING_1975_CAMPAIGNS[selectedCampaign];

  return (
    <section
      id="spring-1975"
      className="relative py-28 px-4 sm:px-6 lg:px-8 bg-[#E8DEC4] border-b-2 border-[#704512]/30 overflow-hidden"
    >
      {/* Decorative Background Text */}
      <div className="absolute top-10 right-10 text-[160px] sm:text-[240px] font-display font-black text-[#704512]/5 pointer-events-none select-none leading-none">
        1975
      </div>

      <div className="max-w-7xl mx-auto space-y-16 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto space-y-4">
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#D8CAAC] rounded-full border border-[#704512]/30 text-xs font-mono text-[#9E1B1B] font-bold uppercase tracking-wider shadow-sm"
          >
            <Compass className="w-3.5 h-3.5" /> TỔNG TIẾN CÔNG VÀ NỔI DẬY MÙA XUÂN 1975
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-3xl sm:text-5xl lg:text-7xl font-display font-black text-[#171717] tracking-tight uppercase leading-tight"
          >
            THẦN TỐC — TÁO BẠO — TOÀN THẮNG
          </motion.h2>

          <div className="w-24 h-1 bg-[#9E1B1B] mx-auto my-3" />

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-serif-title italic text-base sm:text-xl text-[#704512] max-w-3xl mx-auto leading-relaxed"
          >
            “‘Thần tốc, thần tốc hơn nữa; táo bạo, táo bạo hơn nữa; tranh thủ từng giờ, từng phút xốc tới mặt trận giải phóng miền Nam!’”
          </motion.p>
        </div>

        {/* 4-Step Campaign Progression Carousel / Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {SPRING_1975_CAMPAIGNS.map((camp, idx) => {
            const isSelected = selectedCampaign === idx;
            return (
              <button
                key={idx}
                onClick={() => setSelectedCampaign(idx)}
                className={`p-5 rounded-2xl text-left border-2 transition-all cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? 'bg-[#9E1B1B] text-[#F8F3E8] border-[#9E1B1B] shadow-xl scale-[1.02]'
                    : 'bg-[#F8F3E8] text-[#171717] border-[#704512]/30 hover:border-[#9E1B1B] hover:bg-[#F1E6CC]'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between text-xs font-mono mb-2">
                    <span className={`font-bold ${isSelected ? 'text-[#D5B45A]' : 'text-[#9E1B1B]'}`}>
                      CHIẾN DỊCH 0{idx + 1}
                    </span>
                    <span className="flex items-center gap-1 opacity-80 text-[10px]">
                      <MapPin className="w-3 h-3" /> {camp.location}
                    </span>
                  </div>
                  <h3 className="font-display font-black text-lg sm:text-xl leading-snug uppercase">
                    {camp.title}
                  </h3>
                </div>

                <div className="mt-4 pt-3 border-t border-current/20 flex items-center justify-between text-xs font-mono">
                  <span className="opacity-90">{camp.date}</span>
                  <span className="font-bold">{isSelected ? '● Đang xem' : '○ Xem →'}</span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Campaign Cinematic Focus Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCampaign}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.4 }}
            className="bg-[#F8F3E8] p-6 sm:p-10 rounded-3xl border-2 border-[#704512] shadow-2xl space-y-6"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Left Content */}
              <div className="lg:col-span-8 space-y-5">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="px-3 py-1 bg-[#9E1B1B] text-[#F8F3E8] font-display font-bold text-xs tracking-wider uppercase rounded">
                    CHIẾN DỊCH 0{selectedCampaign + 1} / 04
                  </span>
                  <span className="text-xs font-mono font-bold text-[#704512] bg-[#E2D3B3] px-3 py-1 rounded border border-[#704512]/30">
                    📅 {currentCamp.date}
                  </span>
                  <span className="text-xs font-mono font-bold text-[#704512] bg-[#E2D3B3] px-3 py-1 rounded border border-[#704512]/30">
                    📍 {currentCamp.location}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-4xl font-display font-black text-[#171717] uppercase tracking-tight leading-tight">
                  {currentCamp.title}
                </h3>

                <p className="text-base sm:text-lg font-serif-title italic text-[#9E1B1B] font-bold border-l-3 border-[#9E1B1B] pl-3 py-0.5">
                  “{currentCamp.subtitle}”
                </p>

                <p className="text-sm sm:text-base text-[#171717] leading-relaxed text-justify">
                  {currentCamp.description}
                </p>

                <div className="pt-2">
                  <h4 className="text-xs font-display font-bold text-[#704512] uppercase tracking-wider mb-2.5">
                    KẾT QUẢ ĐỘT PHÁ & Ý NGHĨA:
                  </h4>
                  <ul className="space-y-2.5">
                    {currentCamp.keyPoints.map((pt, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-[#171717] bg-[#F1E6CC] p-2.5 rounded-xl border border-[#704512]/20">
                        <CheckCircle2 className="w-4 h-4 text-[#9E1B1B] shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Right Strategic Graphic Map Callout */}
              <div className="lg:col-span-4 bg-[#E8DEC4] p-6 sm:p-8 rounded-2xl border-2 border-[#704512]/40 flex flex-col justify-between h-full text-center space-y-6">
                <div className="p-2.5 bg-[#9E1B1B] text-[#F8F3E8] rounded-xl font-display font-bold text-xs uppercase tracking-widest shadow-sm">
                  KHÍ THẾ TIẾN CÔNG MÙA XUÂN
                </div>

                <div className="py-4 space-y-2">
                  <Flame className="w-14 h-14 text-[#9E1B1B] mx-auto animate-bounce" />
                  <div className="text-xs font-mono uppercase tracking-wider text-[#704512] font-bold">
                    TỐC ĐỘ TIẾN CÔNG KỶ LỤC
                  </div>
                  <div className="text-2xl sm:text-3xl font-display font-black text-[#171717] uppercase">
                    1 NGÀY BẰNG 20 NĂM
                  </div>
                </div>

                {/* Stepper Buttons */}
                <div className="flex items-center justify-between pt-4 border-t border-[#704512]/30">
                  <button
                    onClick={() => setSelectedCampaign(prev => Math.max(0, prev - 1))}
                    disabled={selectedCampaign === 0}
                    className="p-2 rounded-lg bg-[#F8F3E8] border border-[#704512]/30 text-[#171717] disabled:opacity-30 cursor-pointer text-xs font-mono font-bold"
                  >
                    ← Trước
                  </button>
                  <span className="text-xs font-mono font-bold text-[#704512]">
                    {selectedCampaign + 1} / 4
                  </span>
                  <button
                    onClick={() => setSelectedCampaign(prev => Math.min(SPRING_1975_CAMPAIGNS.length - 1, prev + 1))}
                    disabled={selectedCampaign === SPRING_1975_CAMPAIGNS.length - 1}
                    className="p-2 rounded-lg bg-[#F8F3E8] border border-[#704512]/30 text-[#171717] disabled:opacity-30 cursor-pointer text-xs font-mono font-bold"
                  >
                    Tiếp →
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
};
