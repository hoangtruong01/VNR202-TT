import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Shield, Award, Calendar, Flame, AlertCircle, ChevronLeft, ChevronRight } from 'lucide-react';
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
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#9E1B1B] text-[#F8F3E8] rounded-full text-xs font-mono font-bold uppercase tracking-widest mb-3">
            <Calendar className="w-3.5 h-3.5 text-[#D5B45A]" /> 18.12 — 29.12.1972
          </div>
          <h2 className="text-4xl sm:text-6xl md:text-8xl font-display font-black text-[#F8F3E8] tracking-tight uppercase">
            12 NGÀY ĐÊM
          </h2>
          <p className="text-xl sm:text-3xl font-display font-bold text-[#D5B45A] uppercase mt-1">
            BẢN HÙNG CA CHIẾN THẮNG TRÊN BẦU TRỜI THỦ ĐÔ
          </p>
          <div className="w-24 h-1 bg-[#9E1B1B] mx-auto my-4" />
        </div>

        {/* STATISTICAL COUNTER GRID */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-16">
          
          {/* Card 1: Total planes */}
          <div className="bg-[#121824] p-5 sm:p-6 rounded-2xl border-2 border-[#9E1B1B] text-center shadow-lg hover:border-[#D5B45A] transition-all">
            <div className="text-xs sm:text-sm font-mono text-[#D5B45A] font-bold uppercase tracking-wider mb-2">
              TỔNG MÁY BAY BỊ BẮN RƠI
            </div>
            <div className="text-5xl sm:text-7xl font-display font-black text-[#9E1B1B]">
              <Counter to={AIR_BATTLE_STATS.totalPlanesDowned} duration={2200} />
            </div>
            <div className="text-xs font-mono text-gray-400 mt-2">Chiếc trên miền Bắc</div>
          </div>

          {/* Card 2: B-52 */}
          <div className="bg-[#121824] p-5 sm:p-6 rounded-2xl border-2 border-[#D5B45A] text-center shadow-lg hover:scale-[1.02] transition-all">
            <div className="text-xs sm:text-sm font-mono text-[#D5B45A] font-bold uppercase tracking-wider mb-2">
              SIÊU PHÁO ĐÀI BAY B-52
            </div>
            <div className="text-5xl sm:text-7xl font-display font-black text-[#D5B45A]">
              <Counter to={AIR_BATTLE_STATS.b52Downed} duration={2000} />
            </div>
            <div className="text-xs font-mono text-gray-400 mt-2">16 chiếc rơi tại chỗ</div>
          </div>

          {/* Card 3: F-111 */}
          <div className="bg-[#121824] p-5 sm:p-6 rounded-2xl border-2 border-[#704512] text-center shadow-lg">
            <div className="text-xs sm:text-sm font-mono text-gray-300 font-bold uppercase tracking-wider mb-2">
              F-111 CÁNH CỤP CÁNH XÒE
            </div>
            <div className="text-5xl sm:text-7xl font-display font-black text-[#F8F3E8]">
              <Counter to={AIR_BATTLE_STATS.f111Downed} duration={1800} />
            </div>
            <div className="text-xs font-mono text-gray-400 mt-2">Máy bay chiến thuật tối tân</div>
          </div>

          {/* Card 4: Pilots Captured */}
          <div className="bg-[#121824] p-5 sm:p-6 rounded-2xl border-2 border-[#704512] text-center shadow-lg">
            <div className="text-xs sm:text-sm font-mono text-gray-300 font-bold uppercase tracking-wider mb-2">
              GIẶC LÁI BỊ BẮT SỐNG
            </div>
            <div className="text-5xl sm:text-7xl font-display font-black text-emerald-400">
              <Counter to={AIR_BATTLE_STATS.pilotsCaptured} duration={2000} />
            </div>
            <div className="text-xs font-mono text-gray-400 mt-2">Sĩ quan hoa tiêu & phi công</div>
          </div>
        </div>

        {/* 12-DAY INTERACTIVE COMBAT LOG SELECTOR */}
        <div className="bg-[#121824] rounded-2xl border-2 border-[#D5B45A]/40 p-6 sm:p-8 shadow-2xl">
          
          <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#D5B45A]/20">
            <div className="flex items-center gap-2">
              <span className="p-2 bg-[#9E1B1B] text-[#F8F3E8] rounded-lg">
                <Flame className="w-5 h-5" />
              </span>
              <div>
                <h3 className="font-display font-bold text-xl uppercase tracking-wider text-[#F8F3E8]">
                  NHẬT KÝ CHIẾN SỰ 12 NGÀY ĐÊM TỪNG NGÀY
                </h3>
                <span className="text-xs font-mono text-[#D5B45A]">Bấm chọn ngày để xem chi tiết diễn biến</span>
              </div>
            </div>

            {/* Quick Next/Prev buttons */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setSelectedDayIdx(prev => Math.max(0, prev - 1))}
                disabled={selectedDayIdx === 0}
                className="p-2 rounded bg-[#07090E] border border-[#D5B45A]/40 text-[#D5B45A] disabled:opacity-30 cursor-pointer"
                title="Ngày trước"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => setSelectedDayIdx(prev => Math.min(TWELVE_DAYS_DIARY.length - 1, prev + 1))}
                disabled={selectedDayIdx === TWELVE_DAYS_DIARY.length - 1}
                className="p-2 rounded bg-[#07090E] border border-[#D5B45A]/40 text-[#D5B45A] disabled:opacity-30 cursor-pointer"
                title="Ngày tiếp"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* 12-Day Step Pills */}
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-12 gap-2 mb-8">
            {TWELVE_DAYS_DIARY.map((day, idx) => {
              const isSelected = selectedDayIdx === idx;
              return (
                <button
                  key={day.dayNumber}
                  onClick={() => setSelectedDayIdx(idx)}
                  className={`p-2.5 rounded-lg text-center border transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-[#9E1B1B] text-[#F8F3E8] border-[#D5B45A] shadow-md font-bold scale-105'
                      : day.highlight
                      ? 'bg-[#0E121B] text-[#D5B45A] border-[#9E1B1B]/60 hover:bg-[#1A2232]'
                      : 'bg-[#07090E] text-gray-400 border-gray-800 hover:text-white'
                  }`}
                >
                  <div className="text-[10px] font-mono">NGÀY</div>
                  <div className="text-base sm:text-lg font-display font-black leading-none my-0.5">{day.dayNumber}</div>
                  <div className="text-[9px] font-mono truncate">{day.date.split('/')[0]}/{day.date.split('/')[1]}</div>
                </button>
              );
            })}
          </div>

          {/* Selected Day Detailed View */}
          <motion.div
            key={selectedDayIdx}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start bg-[#07090E] p-6 sm:p-8 rounded-xl border border-[#D5B45A]/20"
          >
            {/* Day Info */}
            <div className="lg:col-span-8 space-y-4">
              <div className="flex flex-wrap items-center gap-3">
                <span className="px-3 py-1 rounded bg-[#9E1B1B] text-[#F8F3E8] font-display font-bold text-sm">
                  NGÀY THỨ {currentDay.dayNumber}
                </span>
                <span className="text-xs font-mono text-[#D5B45A] font-bold">
                  {currentDay.date}
                </span>
                {currentDay.b52Downed > 0 && (
                  <span className="text-xs font-mono bg-red-950 text-red-300 border border-red-800 px-2 py-0.5 rounded">
                    ⚡ {currentDay.b52Downed} B-52 BỊ BẮN RƠI
                  </span>
                )}
              </div>

              <h4 className="text-2xl sm:text-3xl font-display font-bold text-[#F8F3E8]">
                {currentDay.headline}
              </h4>

              <p className="text-sm sm:text-base text-gray-300 leading-relaxed text-justify">
                {currentDay.summary}
              </p>

              <div className="p-3.5 bg-[#121824] rounded-lg border border-[#D5B45A]/20 text-xs sm:text-sm text-[#D5B45A]">
                <strong>Nghệ thuật tác chiến:</strong> {currentDay.tacticalAction}
              </div>

              {currentDay.heroicStory && (
                <div className="p-3.5 bg-red-950/40 rounded-lg border border-[#9E1B1B]/40 text-xs sm:text-sm text-red-200">
                  <strong>Tấm gương anh hùng:</strong> {currentDay.heroicStory}
                </div>
              )}
            </div>

            {/* Side Action / Photo preview triggers */}
            <div className="lg:col-span-4 space-y-3">
              <div className="bg-[#121824] p-5 rounded-xl border border-[#D5B45A]/20 text-center">
                <div className="text-xs font-mono text-gray-400 uppercase mb-1">Thiệt hại B-52 trong ngày</div>
                <div className="text-5xl font-display font-black text-[#9E1B1B]">{currentDay.b52Downed}</div>
                <div className="text-xs font-mono text-[#D5B45A] mt-1">Pháo đài bay bị hạ</div>
              </div>

              {/* Day 9 (26/12) Kham Thien button */}
              {currentDay.dayNumber === 9 && (
                <button
                  onClick={() => onOpenImageModal('kham_thien_1972')}
                  className="w-full py-2.5 px-3 bg-[#9E1B1B] hover:bg-[#7A1414] text-[#F8F3E8] text-xs font-display uppercase tracking-wider rounded-lg transition-colors cursor-pointer"
                >
                  Xem ảnh tư liệu phố Khâm Thiên (26/12)
                </button>
              )}

              {/* Day 10 (27/12) Pham Tuan button */}
              {currentDay.dayNumber === 10 && (
                <button
                  onClick={() => onOpenImageModal('pham_tuan_mig21')}
                  className="w-full py-2.5 px-3 bg-[#9E1B1B] hover:bg-[#7A1414] text-[#F8F3E8] text-xs font-display uppercase tracking-wider rounded-lg transition-colors cursor-pointer"
                >
                  Xem ảnh Anh hùng Phạm Tuân & MiG-21
                </button>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
