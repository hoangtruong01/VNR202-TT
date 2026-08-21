import React from 'react';
import { motion } from 'framer-motion';
import { Newspaper, Calendar, ShieldAlert, ArrowDown } from 'lucide-react';
import { NEWSPAPER_1969_1972 } from '@/data/timelineData';

export const Newspaper1969_1972: React.FC = () => {
  return (
    <section
      id="newspaper-1972"
      className="relative py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#F1E6CC] via-[#2A2318] to-[#0E1015] text-[#F8F3E8] border-b-2 border-[#D5B45A]/30 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Newspaper Masthead */}
        <div className="bg-[#F8F3E8] text-[#171717] p-6 sm:p-8 rounded-2xl border-4 border-[#704512] shadow-2xl mb-16 relative overflow-hidden">
          
          {/* Newspaper Header Bar */}
          <div className="border-b-4 border-[#171717] pb-4 mb-6 text-center">
            <div className="flex items-center justify-between text-xs sm:text-sm font-mono border-b border-[#171717]/30 pb-2 mb-3">
              <span className="font-bold text-[#9E1B1B]">BÁO QUÂN ĐỘI NHÂN DÂN & TIỀN PHONG (TƯ LIỆU SỐ HÓA)</span>
              <span>XUẤT BẢN ĐẶC BIỆT 1969 — 1972</span>
              <span className="font-bold">GIÁO DỤC TRUYỀN THỐNG</span>
            </div>
            
            <h2 className="font-display font-black text-4xl sm:text-6xl md:text-7xl uppercase tracking-tighter text-[#171717]">
              KHÔI PHỤC VÀ ĐƯƠNG ĐẦU LEO THANG
            </h2>
            <p className="font-serif-title italic text-sm sm:text-base text-[#704512] mt-2">
              Dòng tin thời sự lịch sử những năm tháng vừa xây dựng hậu phương, vừa chuẩn bị đón đòn không kích chiến lược
            </p>
          </div>

          {/* 3-Column Newspaper Article Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 divide-y md:divide-y-0 md:divide-x divide-[#704512]/30">
            {NEWSPAPER_1969_1972.map((article, idx) => (
              <motion.article
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                className={`flex flex-col justify-between ${idx > 0 ? 'md:pl-6 pt-6 md:pt-0' : ''}`}
              >
                <div>
                  <div className="flex items-center justify-between text-xs font-mono font-bold text-[#9E1B1B] mb-2">
                    <span className="px-2 py-0.5 bg-[#9E1B1B] text-[#F8F3E8] rounded">NĂM {article.year}</span>
                    <span className="text-[#704512]">{article.location}</span>
                  </div>

                  <h3 className="font-display font-black text-xl sm:text-2xl text-[#171717] leading-snug mb-3">
                    {article.title}
                  </h3>

                  <p className="font-serif-title italic text-xs text-[#704512] mb-3">
                    {article.subtitle}
                  </p>

                  <p className="text-xs sm:text-sm text-[#333333] leading-relaxed text-justify mb-4">
                    {article.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#704512]/20">
                  <span className="text-[11px] font-display font-bold text-[#9E1B1B] uppercase tracking-wider block mb-1">
                    Trọng Tâm:
                  </span>
                  <ul className="space-y-2 text-xs text-[#4A4A4A]">
                    {article.keyPoints.map((pt, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-1.5">
                        <span className="text-[#9E1B1B] font-bold">•</span>
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.article>
            ))}
          </div>
        </div>

        {/* Transition Banner: Day to Night */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center max-w-2xl mx-auto py-10"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#9E1B1B]/80 text-[#F8F3E8] font-mono text-xs font-bold uppercase tracking-widest mb-4 animate-pulse">
            <ShieldAlert className="w-4 h-4" /> BẦU TRỜI CHUYỂN DẦN VÀO ĐÊM TỐI
          </div>
          <h3 className="font-serif-title italic text-xl sm:text-2xl text-[#D5B45A] leading-relaxed mb-3">
            “Mùa đông 1972... Mọi dấu hiệu tình báo đều chỉ ra rằng: Đế quốc Mỹ chuẩn bị tung đòn hủy diệt lớn nhất vào trái tim Hà Nội.”
          </h3>
          <div className="flex justify-center text-[#D5B45A] mt-4">
            <ArrowDown className="w-6 h-6 animate-bounce" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
