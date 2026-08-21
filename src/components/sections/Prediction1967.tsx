import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, HelpCircle } from 'lucide-react';
import { HISTORICAL_IMAGES } from '@/data/imagesData';

interface PredictionProps {
  onOpenImageModal: (key: string) => void;
}

export const Prediction1967: React.FC<PredictionProps> = ({ onOpenImageModal }) => {
  return (
    <section
      id="prediction-1967"
      className="relative min-h-screen py-28 px-4 sm:px-6 lg:px-8 bg-[#07090E] text-[#F8F3E8] flex flex-col items-center justify-center border-b-2 border-[#D5B45A]/30 overflow-hidden"
    >
      {/* Background Spotlight Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[900px] h-[600px] sm:h-[900px] bg-[radial-gradient(circle,rgba(213,180,90,0.12)_0%,rgba(158,27,27,0.06)_45%,transparent_70%)] pointer-events-none" />

      {/* Subtle Archival Portrait of President Ho Chi Minh in Background */}
      <motion.div
        initial={{ opacity: 0, scale: 1.05 }}
        whileInView={{ opacity: 0.18, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.8 }}
        className="absolute inset-0 bg-center bg-no-repeat bg-cover pointer-events-none mix-blend-luminosity filter contrast-125"
        style={{ backgroundImage: `url(${HISTORICAL_IMAGES.ho_chi_minh_1967.url})` }}
      />

      <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8">
        
        {/* Year & Strategic Context Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#9E1B1B]/80 border border-[#D5B45A]/60 text-xs sm:text-sm font-mono text-[#D5B45A] font-bold uppercase tracking-widest shadow-lg"
        >
          <Sparkles className="w-4 h-4 text-[#D5B45A]" /> DỰ BÁO CHIẾN LƯỢC THIÊN TÀI — 1967
        </motion.div>

        {/* The Immortal Quote */}
        <div className="space-y-4 py-4">
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            className="font-serif-title italic font-black text-3xl sm:text-5xl md:text-6xl text-[#F8F3E8] leading-tight tracking-tight drop-shadow-[0_4px_20px_rgba(0,0,0,0.9)]"
          >
            “Ở Việt Nam, Mỹ nhất định thua.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.6 }}
            className="font-serif-title italic font-black text-3xl sm:text-5xl md:text-6xl text-[#D5B45A] leading-tight tracking-tight drop-shadow-[0_4px_25px_rgba(213,180,90,0.3)]"
          >
            Nhưng nó chỉ chịu thua sau khi
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.9 }}
            className="font-serif-title italic font-black text-3xl sm:text-5xl md:text-6xl text-[#9E1B1B] leading-tight tracking-tight drop-shadow-[0_4px_25px_rgba(158,27,27,0.5)]"
          >
            thua trên bầu trời Hà Nội.”
          </motion.p>
        </div>

        {/* Author & Circumstance */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-center"
        >
          <div className="text-base sm:text-lg font-display uppercase tracking-widest text-[#D5B45A] font-bold">
            — CHỦ TỊCH HỒ CHÍ MINH
          </div>
          <div className="text-xs sm:text-sm font-mono text-gray-400 mt-1 max-w-xl mx-auto">
            (Căn dặn Tư lệnh Quân chủng Phòng không – Không quân Phùng Thế Tài, cuối năm 1967)
          </div>
        </motion.div>

        {/* Dramatic Narrative Question */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="pt-10 border-t border-[#D5B45A]/20 flex flex-col items-center gap-3"
        >
          <div className="flex items-center gap-2 text-sm sm:text-base font-serif-title italic text-emerald-400">
            <HelpCircle className="w-4 h-4" />
            <span>Liệu lời dự đoán thiên tài ấy có trở thành hiện thực?</span>
          </div>

          <button
            onClick={() => onOpenImageModal('ho_chi_minh_1967')}
            className="mt-2 text-xs font-mono text-[#D5B45A] hover:text-white underline underline-offset-4 cursor-pointer"
          >
            Xem ảnh tư liệu Bác Hồ làm việc với Quân chủng PK-KQ
          </button>
        </motion.div>
      </div>
    </section>
  );
};
