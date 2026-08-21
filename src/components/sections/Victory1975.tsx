import React from 'react';
import { motion } from 'framer-motion';
import { Award, Sparkles, ExternalLink, Flag, Heart, Star, CheckCircle } from 'lucide-react';
import confetti from 'canvas-confetti';
import { HISTORICAL_IMAGES } from '@/data/imagesData';

interface VictoryProps {
  onOpenImageModal: (key: string) => void;
}

export const Victory1975: React.FC<VictoryProps> = ({ onOpenImageModal }) => {
  const triggerConfetti = () => {
    confetti({
      particleCount: 100,
      spread: 80,
      origin: { y: 0.6 },
      colors: ['#9E1B1B', '#D5B45A', '#F8F3E8', '#E2D3B3']
    });
  };

  return (
    <section
      id="victory-1975"
      className="relative min-h-screen py-28 px-4 sm:px-6 lg:px-8 bg-paper-texture border-b-4 border-[#9E1B1B] flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Radiant golden sun burst in background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(213,180,90,0.22)_0%,rgba(241,230,204,0.85)_60%,#F1E6CC_100%)] pointer-events-none" />

      <div className="max-w-6xl mx-auto text-center relative z-10 space-y-12">
        
        {/* Victory Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          onViewportEnter={triggerConfetti}
          className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#9E1B1B] text-[#F8F3E8] font-display text-xs sm:text-sm font-bold uppercase tracking-widest shadow-2xl border-2 border-[#D5B45A]"
        >
          <Flag className="w-4 h-4 text-[#D5B45A]" /> 11 GIỜ 30 PHÚT • NGÀY 30 THÁNG 4 NĂM 1975
        </motion.div>

        {/* Main Victory Title */}
        <div className="space-y-4 max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-display font-black tracking-tight uppercase text-[#9E1B1B] leading-none drop-shadow-sm"
          >
            NON SÔNG THU VỀ
            <span className="block text-[#171717] mt-3 text-4xl sm:text-6xl md:text-7xl lg:text-8xl">
              MỘT MỐI
            </span>
          </motion.h2>

          <div className="w-24 h-1 bg-[#D5B45A] mx-auto my-4" />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="font-serif-title italic text-lg sm:text-2xl md:text-3xl text-[#704512] max-w-3xl mx-auto pt-2 leading-relaxed"
          >
            “Kết thúc thắng lợi trọn vẹn 21 năm kháng chiến chống Mỹ cứu nước, non sông nối liền một dải, Bắc – Nam sum họp một nhà.”
          </motion.p>
        </div>

        {/* Archival Masterpiece Photo: Tank 390 entering Doc Lap Palace */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
          className="max-w-4xl mx-auto bg-[#F8F3E8] p-5 sm:p-8 rounded-3xl border-4 border-[#704512] shadow-2xl group cursor-pointer"
          onClick={() => onOpenImageModal('victory_tank_390')}
        >
          <div className="relative overflow-hidden rounded-2xl bg-black aspect-16/10 border border-[#704512]/40">
            <img
              src={HISTORICAL_IMAGES.victory_tank_390.url}
              alt={HISTORICAL_IMAGES.victory_tank_390.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter contrast-[1.05]"
            />
            <div className="absolute top-3 left-3 bg-[#9E1B1B] text-[#F8F3E8] text-xs font-mono font-bold px-3 py-1 rounded shadow uppercase tracking-wider">
              ẢNH TƯ LIỆU QUỐC BẢO
            </div>
            <div className="absolute bottom-3 right-3 bg-[#171717]/90 text-[#F8F3E8] text-xs px-3.5 py-2 rounded-xl flex items-center gap-2 shadow-xl group-hover:bg-[#9E1B1B] transition-colors">
              <ExternalLink className="w-4 h-4 text-[#D5B45A]" /> Xem chi tiết ảnh lịch sử trưa 30/4
            </div>
          </div>

          <div className="mt-6 text-left space-y-2">
            <div className="flex items-center justify-between text-xs font-mono font-bold text-[#9E1B1B] uppercase">
              <span>KHOẢNH KHẮC LỊCH SỬ</span>
              <span>11:30 — 30/4/1975</span>
            </div>
            <h3 className="font-serif-title font-bold text-xl sm:text-2xl text-[#171717]">
              {HISTORICAL_IMAGES.victory_tank_390.title}
            </h3>
            <p className="text-xs sm:text-sm text-[#4A4A4A] leading-relaxed text-justify">
              {HISTORICAL_IMAGES.victory_tank_390.caption}
            </p>
          </div>
        </motion.div>

        {/* Climax Celebration Button & Victory Stats */}
        <div className="space-y-6 pt-2">
          <button
            onClick={triggerConfetti}
            className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-[#D5B45A] hover:bg-[#B39238] text-[#171717] font-display font-black text-sm sm:text-base tracking-widest uppercase shadow-2xl transition-all hover:scale-105 cursor-pointer border-2 border-[#171717]/20"
          >
            <Sparkles className="w-5 h-5 text-[#9E1B1B]" />
            <span>Ăn Mừng Ngày Non Sông Thống Nhất (Bấm Thả Pháo Hoa)</span>
          </button>

          <div className="flex flex-wrap justify-center items-center gap-6 text-xs font-mono font-bold text-[#704512]">
            <span className="flex items-center gap-1.5">
              <Star className="w-4 h-4 text-[#9E1B1B] fill-[#9E1B1B]" /> 21 NĂM KHÁNG CHIẾN
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <Star className="w-4 h-4 text-[#9E1B1B] fill-[#9E1B1B]" /> 55 NGÀY ĐÊM THẦN TỐC
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <Star className="w-4 h-4 text-[#9E1B1B] fill-[#9E1B1B]" /> ĐỘC LẬP — TỰ DO — TOÀN VẸN
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};
