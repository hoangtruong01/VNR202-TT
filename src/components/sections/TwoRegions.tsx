import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Flag, CheckCircle2, ZoomIn, MapPin } from 'lucide-react';
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
    <section id="two-regions" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-paper-texture border-b-2 border-[#704512]/30 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#E2D3B3] rounded-full border border-[#704512]/30 text-xs font-mono text-[#9E1B1B] font-bold uppercase tracking-wider mb-3">
            <Flag className="w-3.5 h-3.5" /> CHIẾN LƯỢC TOÀN DIỆN 1965 – 1975
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display font-black text-[#171717] tracking-tight uppercase">
            HAI MIỀN – MỘT MỤC TIÊU
          </h2>
          <div className="w-20 h-1 bg-[#9E1B1B] mx-auto my-4" />
          <p className="font-serif-title italic text-base sm:text-lg text-[#704512]">
            “Tất cả vì miền Nam ruột thịt, tất cả để đánh thắng giặc Mỹ xâm lược”
          </p>
        </div>

        {/* Region Toggle Buttons */}
        <div className="flex justify-center gap-2 mb-10">
          <button
            onClick={() => setActiveRegion('north')}
            className={`px-4 py-2 rounded-full font-display text-xs sm:text-sm tracking-wider uppercase transition-all cursor-pointer ${
              activeRegion === 'north'
                ? 'bg-[#9E1B1B] text-[#F8F3E8] shadow-md'
                : 'bg-[#E2D3B3] text-[#704512] hover:bg-[#D5B45A]/40'
            }`}
          >
            ★ Miền Bắc: Hậu Phương Lớn
          </button>
          <button
            onClick={() => setActiveRegion('both')}
            className={`px-4 py-2 rounded-full font-display text-xs sm:text-sm tracking-wider uppercase transition-all cursor-pointer ${
              activeRegion === 'both'
                ? 'bg-[#704512] text-[#F8F3E8] shadow-md'
                : 'bg-[#E2D3B3] text-[#704512] hover:bg-[#D5B45A]/40'
            }`}
          >
            ⇄ Toàn Tuyến Chi Viện
          </button>
          <button
            onClick={() => setActiveRegion('south')}
            className={`px-4 py-2 rounded-full font-display text-xs sm:text-sm tracking-wider uppercase transition-all cursor-pointer ${
              activeRegion === 'south'
                ? 'bg-[#9E1B1B] text-[#F8F3E8] shadow-md'
                : 'bg-[#E2D3B3] text-[#704512] hover:bg-[#D5B45A]/40'
            }`}
          >
            ★ Miền Nam: Tiền Tuyến Lớn
          </button>
        </div>

        {/* 3-Column Layout: Left (North Info) - Center (Authentic Vintage Map Photo) - Right (South Info) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* LEFT: MIỀN BẮC */}
          <motion.div
            animate={{
              opacity: activeRegion === 'south' ? 0.45 : 1,
              scale: activeRegion === 'north' ? 1.02 : 1
            }}
            transition={{ duration: 0.4 }}
            className={`lg:col-span-4 p-6 sm:p-7 rounded-2xl border-2 transition-all shadow-lg ${
              activeRegion === 'north' || activeRegion === 'both'
                ? 'bg-[#F8F3E8] border-[#9E1B1B]'
                : 'bg-[#E2D3B3]/60 border-[#704512]/30'
            }`}
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="w-9 h-9 rounded-full bg-[#9E1B1B] text-[#F8F3E8] flex items-center justify-center font-display font-black text-lg">
                B
              </span>
              <div>
                <span className="text-xs font-mono font-bold text-[#9E1B1B] uppercase tracking-wider">HẬU PHƯƠNG LỚN</span>
                <h3 className="text-2xl font-display font-black text-[#171717] uppercase">MIỀN BẮC XÃ HỘI CHỦ NGHĨA</h3>
              </div>
            </div>

            <p className="text-sm font-serif-title italic text-[#704512] mb-4 border-l-2 border-[#9E1B1B] pl-3">
              “Vừa tay cày tay súng, vừa sản xuất vừa chiến đấu chi viện tối đa cho chiến trường.”
            </p>

            <ul className="space-y-3 text-xs sm:text-sm text-[#171717]">
              {northPoints.map((pt, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#9E1B1B] shrink-0 mt-0.5" />
                  <span>{pt}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* CENTER: AUTHENTIC VINTAGE MILITARY MAP IMAGE (User-provided) */}
          <div className="lg:col-span-4 flex flex-col items-center justify-center">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="relative w-full max-w-[340px] bg-[#E8DEC4] rounded-2xl border-3 border-[#704512] p-2 sm:p-3 shadow-2xl overflow-hidden group cursor-pointer"
              onClick={() => onOpenImageModal && onOpenImageModal('map_two_regions')}
            >
              <div className="relative overflow-hidden rounded-xl bg-black aspect-2/3">
                <img
                  src={HISTORICAL_IMAGES.map_two_regions.url}
                  alt={HISTORICAL_IMAGES.map_two_regions.title}
                  className="w-full h-full object-contain filter contrast-[1.05]"
                />
                
                {/* Zoom overlay badge */}
                <div className="absolute bottom-2.5 right-2.5 bg-[#171717]/85 text-[#F8F3E8] text-[10px] font-mono px-2 py-1 rounded shadow flex items-center gap-1 group-hover:bg-[#9E1B1B] transition-colors">
                  <ZoomIn className="w-3 h-3 text-[#D5B45A]" /> Phóng to bản đồ
                </div>
              </div>

              {/* Caption beneath map */}
              <div className="mt-2.5 px-2 py-1 flex items-center justify-between text-[11px] font-mono text-[#704512] border-t border-[#704512]/20">
                <span className="font-bold flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-[#9E1B1B]" /> Bản đồ quân sự
                </span>
                <span className="text-[#9E1B1B] font-semibold">Đường Trường Sơn</span>
              </div>
            </motion.div>
          </div>

          {/* RIGHT: MIỀN NAM */}
          <motion.div
            animate={{
              opacity: activeRegion === 'north' ? 0.45 : 1,
              scale: activeRegion === 'south' ? 1.02 : 1
            }}
            transition={{ duration: 0.4 }}
            className={`lg:col-span-4 p-6 sm:p-7 rounded-2xl border-2 transition-all shadow-lg ${
              activeRegion === 'south' || activeRegion === 'both'
                ? 'bg-[#F8F3E8] border-[#9E1B1B]'
                : 'bg-[#E2D3B3]/60 border-[#704512]/30'
            }`}
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="w-9 h-9 rounded-full bg-[#704512] text-[#F8F3E8] flex items-center justify-center font-display font-black text-lg">
                N
              </span>
              <div>
                <span className="text-xs font-mono font-bold text-[#704512] uppercase tracking-wider">TIỀN TUYẾN LỚN</span>
                <h3 className="text-2xl font-display font-black text-[#171717] uppercase">MIỀN NAM ANH DŨNG</h3>
              </div>
            </div>

            <p className="text-sm font-serif-title italic text-[#704512] mb-4 border-l-2 border-[#704512] pl-3">
              “Kiên cường bám trụ, tiến công liên tục đập tan mọi chiến lược xâm lược của kẻ thù.”
            </p>

            <ul className="space-y-3 text-xs sm:text-sm text-[#171717]">
              {southPoints.map((pt, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#704512] shrink-0 mt-0.5" />
                  <span>{pt}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
