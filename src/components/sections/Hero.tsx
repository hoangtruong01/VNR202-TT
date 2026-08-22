import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Shield, Calendar, Award, Plane, ZoomIn } from 'lucide-react';
import { HISTORICAL_IMAGES } from '@/data/imagesData';

interface HeroProps {
  onScrollDown: () => void;
  onOpenImageModal: (imageKey: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onScrollDown, onOpenImageModal }) => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-between pt-24 pb-12 px-4 sm:px-6 lg:px-8 bg-paper-texture border-b-4 border-[#704512] overflow-hidden"
    >
      {/* Background Military Map Overlay & Grid Lines */}
      <div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(#704512_1px,transparent_1px)] [background-size:24px_24px]" />
      
      {/* Top Banner Tag */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="z-10 flex items-center gap-2 px-4 py-1.5 bg-[#E2D3B3] rounded-full border border-[#704512]/40 text-xs sm:text-sm font-mono text-[#704512] uppercase tracking-widest shadow-sm"
      >
        <Shield className="w-4 h-4 text-[#9E1B1B]" />
        <span>TƯ LIỆU LỊCH SỬ QUÂN SỰ VIỆT NAM</span>
      </motion.div>

      {/* Main Title Group */}
      <div className="z-10 max-w-5xl w-full text-center my-auto py-6">
        
        {/* Primary Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="font-display font-extrabold uppercase tracking-tight text-[#171717] leading-[1.1] text-5xl sm:text-7xl md:text-8xl lg:text-9xl mb-4"
        >
          HÀ NỘI
          <span className="block text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-[#9E1B1B] mt-3">
            ĐIỆN BIÊN PHỦ
          </span>
          <span className="block text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-[#704512] mt-3 tracking-normal">
            TRÊN KHÔNG
          </span>
        </motion.h1>

        {/* PROMINENT B-52 HISTORICAL PHOTO CARD (As requested in diagram) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.7 }}
          className="max-w-2xl mx-auto my-8 bg-[#F8F3E8] p-3 sm:p-5 rounded-2xl border-2 border-[#704512] shadow-2xl group cursor-pointer"
          onClick={() => onOpenImageModal('hero_b52_flying')}
        >
          <div className="relative overflow-hidden rounded-xl bg-black aspect-16/9">
            <img
              src={HISTORICAL_IMAGES.hero_b52_flying.url}
              alt={HISTORICAL_IMAGES.hero_b52_flying.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter contrast-[1.05]"
            />
            {/* Label badge */}
            <div className="absolute top-2 left-2 bg-[#9E1B1B] text-[#F8F3E8] text-[11px] font-display font-bold uppercase px-2.5 py-1 rounded shadow flex items-center gap-1">
              <Plane className="w-3.5 h-3.5" /> SIÊU PHÁO ĐÀI BAY B-52 STRATOFORTRESS
            </div>
            <div className="absolute bottom-2 right-2 bg-black/80 text-[#F8F3E8] text-[10px] px-2 py-1 rounded flex items-center gap-1">
              <ZoomIn className="w-3 h-3 text-[#D5B45A]" /> Phóng to tư liệu gốc
            </div>
          </div>
          <div className="mt-2.5 flex items-center justify-between text-xs font-mono text-[#704512]">
            <span className="truncate pr-2 font-medium">{HISTORICAL_IMAGES.hero_b52_flying.title}</span>
            <span className="text-[#9E1B1B] font-bold shrink-0">1972</span>
          </div>
        </motion.div>

        {/* Sub-header Date & Scaled Year */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex items-center justify-center gap-4 text-sm sm:text-base font-mono font-bold tracking-widest text-[#9E1B1B] uppercase mb-4"
        >
          <span className="w-8 sm:w-16 h-[2px] bg-[#9E1B1B]" />
          <span className="flex items-center gap-1.5">
            <Calendar className="w-4 h-4" /> 18.12 — 29.12
          </span>
          <span className="w-8 sm:w-16 h-[2px] bg-[#9E1B1B]" />
        </motion.div>

        {/* Big Scaled Year 1972 */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: 'spring', damping: 15, stiffness: 100, delay: 1 }}
          className="my-2 sm:my-4"
        >
          <span className="inline-block font-display font-black text-6xl sm:text-8xl md:text-9xl text-transparent bg-clip-text bg-gradient-to-b from-[#9E1B1B] via-[#704512] to-[#171717] tracking-tighter drop-shadow-sm">
            1972
          </span>
        </motion.div>

        {/* Subtitle / Documentary Quote */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="font-serif-title italic text-base sm:text-xl md:text-2xl text-[#171717] max-w-3xl mx-auto leading-relaxed"
        >
          “12 ngày đêm làm rung chuyển bầu trời Hà Nội – Khúc tráng ca của ý chí, bản lĩnh và trí tuệ Việt Nam”
        </motion.p>

        {/* Archival Badge Preview (B-52 lake wreckage) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.3 }}
          className="mt-5 flex flex-wrap items-center justify-center gap-3"
        >
          <button
            onClick={() => onOpenImageModal('hero_b52_ruins')}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E2D3B3] hover:bg-[#D5B45A]/40 border border-[#704512]/40 text-xs font-mono text-[#171717] transition-all cursor-pointer shadow-xs"
          >
            <Award className="w-3.5 h-3.5 text-[#9E1B1B]" />
            <span>Xem xác B-52 rơi trên phố Hà Nội</span>
          </button>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{
          opacity: { delay: 1.5, duration: 0.6 },
          y: { repeat: Infinity, duration: 1.8, ease: 'easeInOut' }
        }}
        onClick={onScrollDown}
        className="z-10 flex flex-col items-center gap-1.5 text-xs font-mono text-[#704512] hover:text-[#9E1B1B] transition-colors cursor-pointer focus:outline-none"
      >
        <span className="tracking-widest uppercase font-semibold">↓ CUỘN ĐỂ KHÁM PHÁ LỊCH SỬ</span>
        <ChevronDown className="w-4 h-4" />
      </motion.button>
    </section>
  );
};
