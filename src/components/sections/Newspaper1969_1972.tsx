import React from 'react';
import { motion } from 'framer-motion';
import { Newspaper, Calendar, ShieldAlert, ArrowDown, Sparkles, MapPin } from 'lucide-react';
import { NEWSPAPER_1969_1972 } from '@/data/timelineData';

export const Newspaper1969_1972: React.FC = () => {
  return (
    <section
      id="newspaper-1972"
      className="relative py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#F1E6CC] via-[#2A2318] to-[#0E1015] text-[#F8F3E8] border-b-2 border-[#D5B45A]/30 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Newspaper Masthead Container */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-[#F8F3E8] text-[#171717] p-6 sm:p-10 rounded-3xl border-4 border-[#704512] shadow-2xl relative overflow-hidden"
        >
          {/* Newspaper Header Bar */}
          <div className="border-b-4 border-[#171717] pb-6 mb-8 text-center">
            <div className="flex flex-wrap items-center justify-between text-xs sm:text-sm font-mono border-b-2 border-[#171717]/40 pb-3 mb-4 gap-2">
              <span className="font-bold text-[#9E1B1B] uppercase tracking-wider flex items-center gap-1.5">
                <Newspaper className="w-4 h-4" /> BÁO QUÂN ĐỘI NHÂN DÂN & TIỀN PHONG
              </span>
              <span className="px-3 py-0.5 bg-[#E2D3B3] rounded font-bold text-[#704512]">
                XUẤT BẢN ĐẶC BIỆT 1969 — 1972
              </span>
              <span className="font-bold text-[#171717]">HÀ NỘI — CHIẾN TRƯỜNG</span>
            </div>
            
            <h2 className="font-display font-black text-3xl sm:text-5xl md:text-6xl lg:text-7xl uppercase tracking-tight text-[#171717] leading-none my-2">
              KHÔI PHỤC VÀ ĐƯƠNG ĐẦU LEO THANG
            </h2>
            <p className="font-serif-title italic text-sm sm:text-lg text-[#704512] mt-3 max-w-3xl mx-auto">
              Dòng tin thời sự lịch sử những năm tháng vừa xây dựng hậu phương, vừa chuẩn bị đón đòn không kích chiến lược của không lực Hoa Kỳ
            </p>
          </div>

          {/* 3-Column Newspaper Article Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x-2 divide-[#704512]/30">
            {NEWSPAPER_1969_1972.map((article, idx) => (
              <motion.article
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className={`flex flex-col justify-between ${idx > 0 ? 'md:pl-8 pt-6 md:pt-0' : ''}`}
              >
                <div>
                  <div className="flex items-center justify-between text-xs font-mono font-bold text-[#9E1B1B] mb-2.5">
                    <span className="px-2.5 py-1 bg-[#9E1B1B] text-[#F8F3E8] rounded font-display tracking-wider">
                      NĂM {article.year}
                    </span>
                    <span className="text-[#704512] flex items-center gap-1">
                      <MapPin className="w-3 h-3" /> {article.location}
                    </span>
                  </div>

                  <h3 className="font-display font-black text-xl sm:text-2xl text-[#171717] leading-snug mb-2 hover:text-[#9E1B1B] transition-colors">
                    {article.title}
                  </h3>

                  <p className="font-serif-title italic text-xs sm:text-sm text-[#9E1B1B] font-semibold mb-3 border-l-2 border-[#9E1B1B] pl-2.5">
                    {article.subtitle}
                  </p>

                  <p className="text-xs sm:text-sm text-[#333333] leading-relaxed text-justify mb-4">
                    {article.description}
                  </p>
                </div>

                <div className="pt-3.5 border-t-2 border-[#704512]/20 bg-[#F1E6CC]/60 p-3 rounded-xl">
                  <span className="text-[11px] font-display font-bold text-[#9E1B1B] uppercase tracking-wider block mb-1.5">
                    ĐIỂM NHẤN CHIẾN LƯỢC:
                  </span>
                  <ul className="space-y-1.5 text-xs text-[#4A4A4A]">
                    {article.keyPoints.map((pt, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-1.5">
                        <span className="text-[#9E1B1B] font-bold">★</span>
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>

        {/* Transition Banner: Day to Night */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center max-w-3xl mx-auto py-8 space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#9E1B1B] text-[#F8F3E8] font-mono text-xs sm:text-sm font-bold uppercase tracking-widest shadow-xl animate-pulse border border-[#D5B45A]/40">
            <ShieldAlert className="w-4 h-4 text-[#D5B45A]" /> BẦU TRỜI CHUYỂN DẦN VÀO ĐÊM TỐI 1972
          </div>
          <h3 className="font-serif-title italic text-xl sm:text-3xl text-[#D5B45A] leading-relaxed drop-shadow-md">
            “Mùa đông 1972... Mọi dấu hiệu tình báo đều chỉ ra rằng: Đế quốc Mỹ chuẩn bị tung đòn hủy diệt lớn nhất vào trái tim Hà Nội.”
          </h3>
          <div className="flex justify-center text-[#D5B45A] pt-2">
            <ArrowDown className="w-6 h-6 animate-bounce text-[#D5B45A]" />
          </div>
        </motion.div>

      </div>
    </section>
  );
};
