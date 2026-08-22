import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Flag, CheckCircle2, ZoomIn, MapPin, Truck, ShieldCheck, ArrowRight, Sparkles } from 'lucide-react';
import { HISTORICAL_IMAGES } from '@/data/imagesData';

interface TwoRegionsProps {
  onOpenImageModal?: (key: string) => void;
}

export const TwoRegions: React.FC<TwoRegionsProps> = ({ onOpenImageModal }) => {
  const [activeRegion, setActiveRegion] = useState<'north' | 'south' | 'both'>('both');

  const northPoints = [
    'Xây dựng & bảo vệ vững chắc Chủ nghĩa Xã hội ở miền Bắc',
    'Đánh trả các cuộc tập kích phá hoại bằng không quân & hải quân Mỹ',
    'Huy động toàn lực sức người, sức của chi viện cho tiền tuyến',
    'Phong trào "Thóc không thiếu một cân, quân không thiếu một người"'
  ];

  const southPoints = [
    'Giữ vững thế chủ động tiến công trên khắp các chiến trường',
    'Kết hợp 3 mũi giáp công: Quân sự – Chính trị – Binh vận',
    'Đánh bại chiến lược "Chiến tranh cục bộ" và "Việt Nam hóa chiến tranh"',
    'Tiến tới Tổng tiến công và nổi dậy giải phóng hoàn toàn miền Nam'
  ];

  return (
    <section
      id="two-regions"
      className="relative py-28 px-4 sm:px-6 lg:px-8 bg-paper-texture border-b-2 border-[#704512]/30 overflow-hidden"
    >
      {/* Background Decorative Graphic */}
      <div className="absolute top-12 left-12 text-[140px] sm:text-[200px] font-display font-black text-[#704512]/5 pointer-events-none select-none leading-none">
        1965–1975
      </div>

      <div className="max-w-7xl mx-auto relative z-10 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto space-y-4">
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#E2D3B3] rounded-full border border-[#704512]/30 text-xs font-mono text-[#9E1B1B] font-bold uppercase tracking-wider shadow-sm"
          >
            <Flag className="w-3.5 h-3.5" /> CHIẾN LƯỢC TOÀN DIỆN • HAI MIỀN ĐẤT NƯỚC
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-3xl sm:text-5xl lg:text-6xl font-display font-black text-[#171717] tracking-tight uppercase leading-tight"
          >
            HAI MIỀN – MỘT MỤC TIÊU
          </motion.h2>

          <div className="w-24 h-1 bg-[#9E1B1B] mx-auto my-3" />

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-serif-title italic text-base sm:text-xl text-[#704512] max-w-2xl mx-auto"
          >
            “Tất cả vì miền Nam ruột thịt, tất cả để đánh thắng giặc Mỹ xâm lược”
          </motion.p>
        </div>

        {/* Region Toggle Navigation */}
        <div className="flex flex-wrap justify-center gap-2.5">
          <button
            onClick={() => setActiveRegion('north')}
            className={`px-5 py-2.5 rounded-full font-display text-xs sm:text-sm tracking-wider uppercase transition-all cursor-pointer border ${
              activeRegion === 'north'
                ? 'bg-[#9E1B1B] text-[#F8F3E8] border-[#9E1B1B] shadow-lg scale-105'
                : 'bg-[#E2D3B3] text-[#704512] border-[#704512]/30 hover:bg-[#D5B45A]/40'
            }`}
          >
            ★ Miền Bắc: Hậu Phương Lớn
          </button>
          <button
            onClick={() => setActiveRegion('both')}
            className={`px-5 py-2.5 rounded-full font-display text-xs sm:text-sm tracking-wider uppercase transition-all cursor-pointer border ${
              activeRegion === 'both'
                ? 'bg-[#704512] text-[#F8F3E8] border-[#704512] shadow-lg scale-105'
                : 'bg-[#E2D3B3] text-[#704512] border-[#704512]/30 hover:bg-[#D5B45A]/40'
            }`}
          >
            ⇄ Toàn Tuyến Chi Viện (Bắc ➔ Nam)
          </button>
          <button
            onClick={() => setActiveRegion('south')}
            className={`px-5 py-2.5 rounded-full font-display text-xs sm:text-sm tracking-wider uppercase transition-all cursor-pointer border ${
              activeRegion === 'south'
                ? 'bg-[#9E1B1B] text-[#F8F3E8] border-[#9E1B1B] shadow-lg scale-105'
                : 'bg-[#E2D3B3] text-[#704512] border-[#704512]/30 hover:bg-[#D5B45A]/40'
            }`}
          >
            ★ Miền Nam: Tiền Tuyến Lớn
          </button>
        </div>

        {/* 3-Column Exhibition Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* LEFT: MIỀN BẮC (Hậu phương lớn) */}
          <motion.div
            animate={{
              opacity: activeRegion === 'south' ? 0.4 : 1,
              scale: activeRegion === 'north' ? 1.02 : 1
            }}
            transition={{ duration: 0.4 }}
            className={`lg:col-span-4 p-6 sm:p-8 rounded-3xl border-2 transition-all shadow-xl flex flex-col justify-between ${
              activeRegion === 'north' || activeRegion === 'both'
                ? 'bg-[#F8F3E8] border-[#9E1B1B]'
                : 'bg-[#E2D3B3]/60 border-[#704512]/30'
            }`}
          >
            <div>
              <div className="flex items-center gap-3 mb-4 pb-3 border-b border-[#704512]/20">
                <span className="w-10 h-10 rounded-full bg-[#9E1B1B] text-[#F8F3E8] flex items-center justify-center font-display font-black text-xl shadow-md shrink-0">
                  B
                </span>
                <div>
                  <span className="text-[11px] font-mono font-bold text-[#9E1B1B] uppercase tracking-widest block">
                    HẬU PHƯƠNG LỚN
                  </span>
                  <h3 className="text-xl sm:text-2xl font-display font-black text-[#171717] uppercase leading-tight">
                    MIỀN BẮC XHCN
                  </h3>
                </div>
              </div>

              <p className="text-xs sm:text-sm font-serif-title italic text-[#704512] mb-5 border-l-3 border-[#9E1B1B] pl-3 py-1 bg-[#F1E6CC]/70 rounded-r-lg">
                “Vừa tay cày tay súng, vừa sản xuất vừa chiến đấu chi viện tối đa cho chiến trường.”
              </p>

              <ul className="space-y-3 text-xs sm:text-sm text-[#171717]">
                {northPoints.map((pt, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#9E1B1B] shrink-0 mt-0.5" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 pt-4 border-t border-[#704512]/20">
              <span className="text-[10px] font-mono font-bold text-[#9E1B1B] uppercase tracking-wider block">
                KHẨU HIỆU: “THÓC KHÔNG THIẾU MỘT CÂN, QUÂN KHÔNG THIẾU MỘT NGƯỜI”
              </span>
            </div>
          </motion.div>

          {/* CENTER: AUTHENTIC VINTAGE MILITARY MAP IMAGE */}
          <div className="lg:col-span-4 flex flex-col items-center justify-center">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="relative w-full max-w-[360px] bg-[#E8DEC4] rounded-3xl border-3 border-[#704512] p-3 sm:p-4 shadow-2xl overflow-hidden group cursor-pointer"
              onClick={() => onOpenImageModal && onOpenImageModal('map_two_regions')}
            >
              {/* Map Image Container */}
              <div className="relative overflow-hidden rounded-2xl bg-black aspect-3/4 border border-[#704512]/40">
                <img
                  src={HISTORICAL_IMAGES.map_two_regions.url}
                  alt={HISTORICAL_IMAGES.map_two_regions.title}
                  className="w-full h-full object-contain filter contrast-[1.05]"
                />
                
                {/* Zoom overlay badge */}
                <div className="absolute bottom-3 right-3 bg-[#171717]/90 text-[#F8F3E8] text-xs font-mono px-3 py-1.5 rounded-lg shadow-lg flex items-center gap-1.5 group-hover:bg-[#9E1B1B] transition-colors">
                  <ZoomIn className="w-3.5 h-3.5 text-[#D5B45A]" /> Phóng to bản đồ
                </div>

                {/* Top Live Coordinate Badge */}
                <div className="absolute top-3 left-3 bg-[#9E1B1B] text-[#F8F3E8] text-[10px] font-mono px-2.5 py-1 rounded shadow uppercase font-bold tracking-wider">
                  TOÀN TUYẾN BẮC – NAM
                </div>
              </div>

              {/* Caption beneath map */}
              <div className="mt-3 px-2 py-1.5 flex items-center justify-between text-xs font-mono text-[#704512] border-t border-[#704512]/20">
                <span className="font-bold flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#9E1B1B]" /> Đường Hồ Chí Minh
                </span>
                <span className="text-[#9E1B1B] font-bold">Pác Bó ➔ Đất Mũi</span>
              </div>
            </motion.div>
          </div>

          {/* RIGHT: MIỀN NAM (Tiền tuyến lớn) */}
          <motion.div
            animate={{
              opacity: activeRegion === 'north' ? 0.4 : 1,
              scale: activeRegion === 'south' ? 1.02 : 1
            }}
            transition={{ duration: 0.4 }}
            className={`lg:col-span-4 p-6 sm:p-8 rounded-3xl border-2 transition-all shadow-xl flex flex-col justify-between ${
              activeRegion === 'south' || activeRegion === 'both'
                ? 'bg-[#F8F3E8] border-[#9E1B1B]'
                : 'bg-[#E2D3B3]/60 border-[#704512]/30'
            }`}
          >
            <div>
              <div className="flex items-center gap-3 mb-4 pb-3 border-b border-[#704512]/20">
                <span className="w-10 h-10 rounded-full bg-[#704512] text-[#F8F3E8] flex items-center justify-center font-display font-black text-xl shadow-md shrink-0">
                  N
                </span>
                <div>
                  <span className="text-[11px] font-mono font-bold text-[#704512] uppercase tracking-widest block">
                    TIỀN TUYẾN LỚN
                  </span>
                  <h3 className="text-xl sm:text-2xl font-display font-black text-[#171717] uppercase leading-tight">
                    MIỀN NAM ANH DŨNG
                  </h3>
                </div>
              </div>

              <p className="text-xs sm:text-sm font-serif-title italic text-[#704512] mb-5 border-l-3 border-[#704512] pl-3 py-1 bg-[#F1E6CC]/70 rounded-r-lg">
                “Kiên cường bám trụ, tiến công liên tục đập tan mọi chiến lược xâm lược của kẻ thù.”
              </p>

              <ul className="space-y-3 text-xs sm:text-sm text-[#171717]">
                {southPoints.map((pt, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#704512] shrink-0 mt-0.5" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 pt-4 border-t border-[#704512]/20">
              <span className="text-[10px] font-mono font-bold text-[#704512] uppercase tracking-wider block">
                PHƯƠNG CHÂM: “ĐÁNH CHO MỸ CÚT, ĐÁNH CHO NGỤY NHÀO”
              </span>
            </div>
          </motion.div>
        </div>

        {/* Strategic Highway 559 Summary Banner */}
        <div className="bg-[#E8DEC4] p-5 sm:p-6 rounded-2xl border-2 border-[#704512]/30 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-[#9E1B1B] text-[#F8F3E8] rounded-xl shrink-0">
              <Truck className="w-6 h-6" />
            </div>
            <div>
              <div className="font-display font-bold uppercase text-sm sm:text-base text-[#171717]">
                TUYẾN VẬN TẢI CHIẾN LƯỢC ĐOÀN 559 — ĐƯỜNG TRƯỜNG SƠN
              </div>
              <p className="text-xs text-[#704512] mt-0.5">
                Huyết mạch nối liền hai miền, vận chuyển hàng triệu tấn vũ khí, lương thực, đạn dược và các binh đoàn chủ lực vào Nam.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 shrink-0 text-xs font-mono font-bold bg-[#F8F3E8] px-4 py-2 rounded-xl border border-[#704512]/30 text-[#9E1B1B]">
            <Sparkles className="w-4 h-4 text-[#D5B45A]" /> MẠCH MÁU KHÁNG CHIẾN
          </div>
        </div>

      </div>
    </section>
  );
};
