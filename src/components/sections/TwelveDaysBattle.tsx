import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, Award, Calendar, Flame, AlertCircle, ChevronLeft, ChevronRight, Zap, Target, Sparkles } from 'lucide-react';
import { Counter } from '@/components/ui/Counter';
import { TWELVE_DAYS_DIARY, AIR_BATTLE_STATS } from '@/data/battleDiary';

interface TwelveDaysBattleProps {
  onOpenImageModal: (key: string) => void;
}

export const TwelveDaysBattle: React.FC<TwelveDaysBattleProps> = ({ onOpenImageModal }) => {
  const [selectedDayIdx, setSelectedDayIdx] = useState(0);
  const currentDay = TWELVE_DAYS_DIARY[selectedDayIdx];

  return (
    <section
      id="twelve-days"
      className="relative py-28 px-4 sm:px-6 lg:px-8 bg-[#0B0E14] text-[#F8F3E8] border-b-2 border-[#D5B45A]/30 overflow-hidden"
    >
      {/* Background night battle glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[radial-gradient(circle,rgba(158,27,27,0.12)_0%,rgba(213,180,90,0.06)_40%,transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-16 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto space-y-4">
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#9E1B1B] text-[#F8F3E8] rounded-full text-xs font-mono font-bold uppercase tracking-widest shadow-lg border border-[#D5B45A]/40"
          >
            <Calendar className="w-3.5 h-3.5 text-[#D5B45A]" /> 18.12 — 29.12.1972
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-7xl md:text-8xl font-display font-black text-[#F8F3E8] tracking-tight uppercase leading-none"
          >
            12 NGÀY ĐÊM
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl sm:text-3xl font-display font-bold text-[#D5B45A] uppercase tracking-wide"
          >
            BẢN HÙNG CA CHIẾN THẮNG TRÊN BẦU TRỜI THỦ ĐÔ
          </motion.p>
          <div className="w-24 h-1 bg-[#9E1B1B] mx-auto my-3" />
        </div>

        {/* STATISTICAL COUNTER CARDS GRID */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          
          {/* Card 1: Total planes */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[#121824] p-5 sm:p-6 rounded-2xl border-2 border-[#9E1B1B] text-center shadow-xl hover:border-[#D5B45A] transition-all group"
          >
            <div className="text-[11px] sm:text-xs font-mono text-[#D5B45A] font-bold uppercase tracking-wider mb-2">
              TỔNG MÁY BAY BỊ BẮN RƠI
            </div>
            <div className="text-5xl sm:text-7xl font-display font-black text-[#9E1B1B] group-hover:scale-105 transition-transform">
              <Counter to={AIR_BATTLE_STATS.totalPlanesDowned} duration={2200} />
            </div>
            <div className="text-xs font-mono text-gray-400 mt-2">Chiếc trên miền Bắc</div>
          </motion.div>

          {/* Card 2: B-52 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-[#121824] p-5 sm:p-6 rounded-2xl border-2 border-[#D5B45A] text-center shadow-xl hover:scale-[1.02] transition-all group"
          >
            <div className="text-[11px] sm:text-xs font-mono text-[#D5B45A] font-bold uppercase tracking-wider mb-2">
              SIÊU PHÁO ĐÀI BAY B-52
            </div>
            <div className="text-5xl sm:text-7xl font-display font-black text-[#D5B45A] group-hover:scale-105 transition-transform">
              <Counter to={AIR_BATTLE_STATS.b52Downed} duration={2000} />
            </div>
            <div className="text-xs font-mono text-gray-400 mt-2">16 chiếc rơi tại chỗ</div>
          </motion.div>

          {/* Card 3: F-111 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-[#121824] p-5 sm:p-6 rounded-2xl border-2 border-[#704512] text-center shadow-xl hover:border-[#D5B45A]/60 transition-all group"
          >
            <div className="text-[11px] sm:text-xs font-mono text-gray-300 font-bold uppercase tracking-wider mb-2">
              F-111 CÁNH CỤP CÁNH XÒE
            </div>
            <div className="text-5xl sm:text-7xl font-display font-black text-[#F8F3E8] group-hover:scale-105 transition-transform">
              <Counter to={AIR_BATTLE_STATS.f111Downed} duration={1800} />
            </div>
            <div className="text-xs font-mono text-gray-400 mt-2">Máy bay chiến thuật tối tân</div>
          </motion.div>

          {/* Card 4: Pilots Captured */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="bg-[#121824] p-5 sm:p-6 rounded-2xl border-2 border-[#704512] text-center shadow-xl hover:border-emerald-500/60 transition-all group"
          >
            <div className="text-[11px] sm:text-xs font-mono text-gray-300 font-bold uppercase tracking-wider mb-2">
              GIẶC LÁI BỊ BẮT SỐNG
            </div>
            <div className="text-5xl sm:text-7xl font-display font-black text-emerald-400 group-hover:scale-105 transition-transform">
              <Counter to={AIR_BATTLE_STATS.pilotsCaptured} duration={2000} />
            </div>
            <div className="text-xs font-mono text-gray-400 mt-2">Sĩ quan hoa tiêu & phi công</div>
          </motion.div>
        </div>

        {/* 12-DAY INTERACTIVE COMBAT LOG SELECTOR */}
        <div className="bg-[#121824] rounded-3xl border-2 border-[#D5B45A]/40 p-6 sm:p-8 lg:p-10 shadow-2xl space-y-6">
          
          <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-[#D5B45A]/20">
            <div className="flex items-center gap-3">
              <span className="p-2.5 bg-[#9E1B1B] text-[#F8F3E8] rounded-xl shadow-md">
                <Flame className="w-5 h-5" />
              </span>
              <div>
                <h3 className="font-display font-black text-xl sm:text-2xl uppercase tracking-wider text-[#F8F3E8]">
                  NHẬT KÝ CHIẾN SỰ 12 NGÀY ĐÊM TỪNG NGÀY
                </h3>
                <span className="text-xs font-mono text-[#D5B45A]">Bấm chọn ngày để xem chi tiết diễn biến tác chiến</span>
              </div>
            </div>

            {/* Quick Next/Prev buttons */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setSelectedDayIdx(prev => Math.max(0, prev - 1))}
                disabled={selectedDayIdx === 0}
                className="px-3 py-1.5 rounded-lg bg-[#07090E] border border-[#D5B45A]/40 text-[#D5B45A] disabled:opacity-30 cursor-pointer font-mono text-xs flex items-center gap-1 hover:bg-[#9E1B1B] hover:text-white transition-colors"
                title="Ngày trước"
              >
                <ChevronLeft className="w-4 h-4" /> Trước
              </button>
              <span className="text-xs font-mono font-bold text-gray-400 px-1">
                {selectedDayIdx + 1}/12
              </span>
              <button
                onClick={() => setSelectedDayIdx(prev => Math.min(TWELVE_DAYS_DIARY.length - 1, prev + 1))}
                disabled={selectedDayIdx === TWELVE_DAYS_DIARY.length - 1}
                className="px-3 py-1.5 rounded-lg bg-[#07090E] border border-[#D5B45A]/40 text-[#D5B45A] disabled:opacity-30 cursor-pointer font-mono text-xs flex items-center gap-1 hover:bg-[#9E1B1B] hover:text-white transition-colors"
                title="Ngày tiếp"
              >
                Tiếp <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* 12-Day Step Pills Grid */}
          <div className="grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-12 gap-2">
            {TWELVE_DAYS_DIARY.map((day, idx) => {
              const isSelected = selectedDayIdx === idx;
              return (
                <button
                  key={day.dayNumber}
                  onClick={() => setSelectedDayIdx(idx)}
                  className={`p-2 sm:p-2.5 rounded-xl text-center border-2 transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-[#9E1B1B] text-[#F8F3E8] border-[#D5B45A] shadow-lg scale-105 font-bold'
                      : day.highlight
                      ? 'bg-[#0E121B] text-[#D5B45A] border-[#9E1B1B]/70 hover:bg-[#1A2232]'
                      : 'bg-[#07090E] text-gray-400 border-gray-800 hover:text-white hover:border-gray-600'
                  }`}
                >
                  <div className="text-[10px] font-mono opacity-80">NGÀY</div>
                  <div className="text-base sm:text-xl font-display font-black leading-none my-0.5">{day.dayNumber}</div>
                  <div className="text-[9px] font-mono truncate">{day.date.split('/')[0]}/{day.date.split('/')[1]}</div>
                </button>
              );
            })}
          </div>

          {/* Selected Day Detailed View Card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedDayIdx}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start bg-[#07090E] p-6 sm:p-8 rounded-2xl border border-[#D5B45A]/30"
            >
              {/* Day Info */}
              <div className="lg:col-span-8 space-y-4">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="px-3 py-1 rounded bg-[#9E1B1B] text-[#F8F3E8] font-display font-bold text-xs tracking-wider">
                    NGÀY THỨ {currentDay.dayNumber} / 12
                  </span>
                  <span className="text-xs font-mono text-[#D5B45A] font-bold bg-[#121824] px-2.5 py-1 rounded border border-[#D5B45A]/30">
                    📅 {currentDay.date}
                  </span>
                  {currentDay.b52Downed > 0 && (
                    <span className="text-xs font-mono bg-red-950 text-red-300 border border-red-800 px-2.5 py-1 rounded font-bold">
                      ⚡ {currentDay.b52Downed} B-52 BỊ BẮN RƠI
                    </span>
                  )}
                </div>

                <h4 className="text-2xl sm:text-3xl font-display font-black text-[#F8F3E8] uppercase leading-tight">
                  {currentDay.headline}
                </h4>

                <p className="text-sm sm:text-base text-gray-300 leading-relaxed text-justify">
                  {currentDay.summary}
                </p>

                <div className="p-4 bg-[#121824] rounded-xl border border-[#D5B45A]/30 text-xs sm:text-sm text-[#D5B45A] space-y-1">
                  <span className="font-bold font-mono text-[11px] uppercase tracking-wider block text-white">
                    🎯 Nghệ thuật tác chiến:
                  </span>
                  <p>{currentDay.tacticalAction}</p>
                </div>

                {currentDay.heroicStory && (
                  <div className="p-4 bg-red-950/40 rounded-xl border border-[#9E1B1B]/40 text-xs sm:text-sm text-red-200 space-y-1">
                    <span className="font-bold font-mono text-[11px] uppercase tracking-wider block text-[#D5B45A]">
                      ★ Tấm gương anh hùng:
                    </span>
                    <p>{currentDay.heroicStory}</p>
                  </div>
                )}
              </div>

              {/* Side Action Card & Special Photos Trigger */}
              <div className="lg:col-span-4 space-y-4">
                <div className="bg-[#121824] p-6 rounded-2xl border border-[#D5B45A]/30 text-center space-y-2">
                  <div className="text-xs font-mono text-gray-400 uppercase tracking-wider">
                    Thiệt hại B-52 trong ngày
                  </div>
                  <div className="text-6xl font-display font-black text-[#9E1B1B]">
                    {currentDay.b52Downed}
                  </div>
                  <div className="text-xs font-mono text-[#D5B45A] font-bold">
                    Pháo đài bay bị tiêu diệt
                  </div>
                </div>

                {/* Day 9 (26/12) Kham Thien button */}
                {currentDay.dayNumber === 9 && (
                  <button
                    onClick={() => onOpenImageModal('kham_thien_1972')}
                    className="w-full py-3 px-4 bg-[#9E1B1B] hover:bg-[#7A1414] text-[#F8F3E8] text-xs font-display font-bold uppercase tracking-wider rounded-xl transition-all shadow-lg hover:scale-105 cursor-pointer flex items-center justify-center gap-2"
                  >
                    <span>Xem ảnh tư liệu phố Khâm Thiên (26/12)</span>
                  </button>
                )}

                {/* Day 10 (27/12) Pham Tuan button */}
                {currentDay.dayNumber === 10 && (
                  <button
                    onClick={() => onOpenImageModal('pham_tuan_mig21')}
                    className="w-full py-3 px-4 bg-[#9E1B1B] hover:bg-[#7A1414] text-[#F8F3E8] text-xs font-display font-bold uppercase tracking-wider rounded-xl transition-all shadow-lg hover:scale-105 cursor-pointer flex items-center justify-center gap-2"
                  >
                    <span>Xem ảnh Anh hùng Phạm Tuân & MiG-21</span>
                  </button>
                )}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};
