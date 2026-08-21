import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Compass, Flame, MapPin, Calendar, CheckCircle2, ChevronRight } from 'lucide-react';
import { SPRING_1975_CAMPAIGNS } from '@/data/timelineData';

export const Spring1975: React.FC = () => {
  const [selectedCampaign, setSelectedCampaign] = useState(0);

  return (
    <section
      id="spring-1975"
      className="relative py-28 px-4 sm:px-6 lg:px-8 bg-[#E8DEC4] border-b-2 border-[#704512]/30 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#D8CAAC] rounded-full border border-[#704512]/30 text-xs font-mono text-[#9E1B1B] font-bold uppercase tracking-wider mb-3">
            <Compass className="w-3.5 h-3.5" /> TỔNG TIẾN CÔNG VÀ NỔI DẬY MÙA XUÂN 1975
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-7xl font-display font-black text-[#171717] tracking-tight uppercase">
            THẦN TỐC — TÁO BẠO — TOÀN THẮNG
          </h2>
          <div className="w-24 h-1 bg-[#9E1B1B] mx-auto my-4" />
          <p className="font-serif-title italic text-base sm:text-lg text-[#704512]">
            “‘Thần tốc, thần tốc hơn nữa; táo bạo, táo bạo hơn nữa; tranh thủ từng giờ, từng phút xốc tới mặt trận giải phóng miền Nam!’”
          </p>
        </div>

        {/* 4-Step Campaign Progression Carousel / Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {SPRING_1975_CAMPAIGNS.map((camp, idx) => {
            const isSelected = selectedCampaign === idx;
            return (
              <button
                key={idx}
                onClick={() => setSelectedCampaign(idx)}
                className={`p-5 rounded-2xl text-left border-2 transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-[#9E1B1B] text-[#F8F3E8] border-[#9E1B1B] shadow-xl scale-[1.03]'
                    : 'bg-[#F1E6CC] text-[#171717] border-[#704512]/30 hover:bg-[#F8F3E8]'
                }`}
              >
                <div className="flex items-center justify-between text-xs font-mono mb-2">
                  <span className={`font-bold ${isSelected ? 'text-[#D5B45A]' : 'text-[#9E1B1B]'}`}>
                    {camp.date}
                  </span>
                  <span className="flex items-center gap-1 opacity-80">
                    <MapPin className="w-3 h-3" /> {camp.location}
                  </span>
                </div>
                <h3 className="font-display font-black text-xl leading-tight">
                  {camp.title}
                </h3>
                <p className={`text-xs mt-1 truncate ${isSelected ? 'text-gray-200' : 'text-[#704512]'}`}>
                  {camp.subtitle}
                </p>
              </button>
            );
          })}
        </div>

        {/* Selected Campaign Cinematic Focus Card */}
        <motion.div
          key={selectedCampaign}
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-[#F8F3E8] p-6 sm:p-10 rounded-2xl border-2 border-[#704512] shadow-2xl"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-8 space-y-4">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 bg-[#9E1B1B] text-[#F8F3E8] font-display font-bold text-sm rounded">
                  CHIẾN DỊCH {selectedCampaign + 1} / 4
                </span>
                <span className="text-xs font-mono font-bold text-[#704512] bg-[#E2D3B3] px-2.5 py-1 rounded">
                  {SPRING_1975_CAMPAIGNS[selectedCampaign].date}
                </span>
                <span className="text-xs font-mono font-bold text-[#704512] bg-[#E2D3B3] px-2.5 py-1 rounded">
                  {SPRING_1975_CAMPAIGNS[selectedCampaign].location}
                </span>
              </div>

              <h3 className="text-3xl sm:text-4xl font-display font-black text-[#171717] uppercase">
                {SPRING_1975_CAMPAIGNS[selectedCampaign].title}
              </h3>

              <p className="text-lg font-serif-title italic text-[#9E1B1B]">
                {SPRING_1975_CAMPAIGNS[selectedCampaign].subtitle}
              </p>

              <p className="text-sm sm:text-base text-[#171717] leading-relaxed text-justify">
                {SPRING_1975_CAMPAIGNS[selectedCampaign].description}
              </p>

              <div className="pt-2">
                <h4 className="text-xs font-display font-bold text-[#704512] uppercase tracking-wider mb-2">
                  KẾT QUẢ ĐỘT PHÁ:
                </h4>
                <ul className="space-y-2">
                  {SPRING_1975_CAMPAIGNS[selectedCampaign].keyPoints.map((pt, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-[#171717]">
                      <CheckCircle2 className="w-4 h-4 text-[#9E1B1B] shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Strategic Graphic Map Callout */}
            <div className="lg:col-span-4 bg-[#F1E6CC] p-6 rounded-xl border border-[#704512]/30 flex flex-col justify-between h-full text-center">
              <div className="p-3 bg-[#704512] text-[#F8F3E8] rounded-lg font-display font-bold text-xs uppercase tracking-widest mb-4">
                BƯỚC TIẾN CỦA CÁC ĐOÀN QUÂN
              </div>

              <div className="my-auto py-6">
                <Flame className="w-12 h-12 text-[#9E1B1B] mx-auto animate-bounce mb-3" />
                <div className="text-xs font-mono uppercase tracking-wider text-[#704512] font-semibold">
                  TỐC ĐỘ TIẾN CÔNG KỶ LỤC
                </div>
                <div className="text-2xl font-display font-black text-[#171717] mt-1">
                  1 NGÀY BẰNG 20 NĂM
                </div>
              </div>

              <div className="text-xs font-mono text-[#9E1B1B] pt-4 border-t border-[#704512]/20 font-bold">
                TIẾN VỀ SÀI GÒN ĐÔ THÀNH
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
