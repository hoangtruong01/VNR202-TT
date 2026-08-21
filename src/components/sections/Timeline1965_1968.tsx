import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Swords, MapPin, Calendar, CheckCircle2, ChevronRight, ChevronLeft } from 'lucide-react';
import { TIMELINE_1965_1968 } from '@/data/timelineData';

export const Timeline1965_1968: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="timeline-1968" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-[#E8DEC4] border-b-2 border-[#704512]/30">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#D8CAAC] rounded-full border border-[#704512]/30 text-xs font-mono text-[#9E1B1B] font-bold uppercase tracking-wider mb-3">
            <Swords className="w-3.5 h-3.5" /> GIAI ĐOẠN 1965 — 1968
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display font-black text-[#171717] tracking-tight uppercase">
            BẺ GÃY PHẢN CÔNG CHIẾN LƯỢC
          </h2>
          <div className="w-20 h-1 bg-[#9E1B1B] mx-auto my-4" />
          <p className="font-serif-title italic text-base sm:text-lg text-[#704512]">
            “Từ đòn phủ đầu Núi Thành, Vạn Tường đến cơn địa chấn Tổng tiến công Tết Mậu Thân 1968.”
          </p>
        </div>

        {/* Milestone Steps Bar */}
        <div className="flex items-center justify-between gap-2 overflow-x-auto pb-4 mb-8 border-b-2 border-[#704512]/20">
          {TIMELINE_1965_1968.map((item, idx) => {
            const isSelected = activeTab === idx;
            return (
              <button
                key={idx}
                onClick={() => setActiveTab(idx)}
                className={`flex-1 min-w-[200px] p-4 rounded-xl text-left border-2 transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-[#9E1B1B] text-[#F8F3E8] border-[#9E1B1B] shadow-lg scale-[1.02]'
                    : 'bg-[#F1E6CC] text-[#171717] border-[#704512]/30 hover:bg-[#F8F3E8]'
                }`}
              >
                <div className="flex items-center justify-between text-xs font-mono mb-1">
                  <span className={`font-bold ${isSelected ? 'text-[#D5B45A]' : 'text-[#9E1B1B]'}`}>
                    {item.year}
                  </span>
                  <span className={`text-[10px] uppercase px-1.5 py-0.5 rounded ${isSelected ? 'bg-black/30' : 'bg-[#E2D3B3]'}`}>
                    {item.badge}
                  </span>
                </div>
                <div className="font-display font-bold text-base truncate">
                  {item.title}
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Stage Display Card */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-[#F8F3E8] rounded-2xl border-2 border-[#704512] p-6 sm:p-10 shadow-xl"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Main Content */}
            <div className="lg:col-span-8 space-y-5">
              <div className="flex flex-wrap items-center gap-3">
                <span className="px-3 py-1 bg-[#9E1B1B] text-[#F8F3E8] rounded font-display font-bold text-sm">
                  {TIMELINE_1965_1968[activeTab].year}
                </span>
                <span className="flex items-center gap-1.5 text-xs font-mono text-[#704512] font-semibold bg-[#E2D3B3] px-2.5 py-1 rounded">
                  <Calendar className="w-3.5 h-3.5" /> {TIMELINE_1965_1968[activeTab].date}
                </span>
                <span className="flex items-center gap-1.5 text-xs font-mono text-[#704512] font-semibold bg-[#E2D3B3] px-2.5 py-1 rounded">
                  <MapPin className="w-3.5 h-3.5" /> {TIMELINE_1965_1968[activeTab].location}
                </span>
              </div>

              <h3 className="text-2xl sm:text-4xl font-display font-black text-[#171717] uppercase leading-tight">
                {TIMELINE_1965_1968[activeTab].title}
              </h3>

              <p className="text-base sm:text-lg font-serif-title italic text-[#704512] border-l-3 border-[#9E1B1B] pl-4">
                {TIMELINE_1965_1968[activeTab].subtitle}
              </p>

              <p className="text-sm sm:text-base text-[#171717] leading-relaxed text-justify">
                {TIMELINE_1965_1968[activeTab].description}
              </p>

              {/* Key strategic points */}
              <div className="pt-2">
                <h4 className="text-xs font-display font-bold text-[#9E1B1B] uppercase tracking-wider mb-2">
                  Ý NGHĨA CHIẾN LƯỢC:
                </h4>
                <ul className="space-y-2">
                  {TIMELINE_1965_1968[activeTab].keyPoints.map((pt, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#171717]">
                      <CheckCircle2 className="w-4 h-4 text-[#9E1B1B] shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Stage Summary Sidebar Badge */}
            <div className="lg:col-span-4 bg-[#F1E6CC] rounded-xl border border-[#704512]/40 p-6 flex flex-col justify-between h-full text-center">
              <div className="p-3 bg-[#9E1B1B] text-[#F8F3E8] rounded-lg font-display font-bold uppercase tracking-widest text-sm mb-4">
                BƯỚC NGOẶT QUÂN SỰ
              </div>
              <div className="my-auto py-4">
                <div className="font-display font-black text-5xl text-[#704512]">
                  {TIMELINE_1965_1968[activeTab].year}
                </div>
                <div className="text-xs font-mono uppercase tracking-wider text-[#9E1B1B] font-bold mt-1">
                  {TIMELINE_1965_1968[activeTab].badge}
                </div>
              </div>
              <div className="flex items-center justify-between pt-4 border-t border-[#704512]/20">
                <button
                  onClick={() => setActiveTab(prev => Math.max(0, prev - 1))}
                  disabled={activeTab === 0}
                  className="p-2 rounded bg-[#E2D3B3] text-[#171717] disabled:opacity-30 cursor-pointer"
                  title="Mốc trước"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <span className="text-xs font-mono font-bold text-[#704512]">
                  {activeTab + 1} / {TIMELINE_1965_1968.length}
                </span>
                <button
                  onClick={() => setActiveTab(prev => Math.min(TIMELINE_1965_1968.length - 1, prev + 1))}
                  disabled={activeTab === TIMELINE_1965_1968.length - 1}
                  className="p-2 rounded bg-[#E2D3B3] text-[#171717] disabled:opacity-30 cursor-pointer"
                  title="Mốc tiếp"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
