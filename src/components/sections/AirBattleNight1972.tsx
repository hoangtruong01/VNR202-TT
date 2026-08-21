import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Radio, Crosshair, Zap, ShieldAlert, Sparkles, MapPin } from 'lucide-react';
import { RadarScanner } from '@/components/ui/RadarScanner';

interface AirBattleNightProps {
  onRadarPing?: () => void;
  onOpenImageModal: (key: string) => void;
}

export const AirBattleNight1972: React.FC<AirBattleNightProps> = ({
  onRadarPing,
  onOpenImageModal
}) => {
  const [activeStep, setActiveStep] = useState(0);

  const battleEvents = [
    {
      time: '19:15',
      title: 'Báo Động Quốc Gia',
      desc: 'Đài Radar 45 (Trung đoàn 291) đóng tại Nghệ An phát hiện sóng nhiễu B-52 từ hướng Tây Nam: "B-52 đang bay vào hướng Hà Nội!"',
      type: 'RADAR'
    },
    {
      time: '19:40',
      title: 'Bom Rơi Xuống Thủ Đô',
      desc: 'Đợt B-52 đầu tiên gồm hàng chục chiếc trút hàng trăm tấn bom xuống sân bay Nội Bài, Gia Lâm, Yên Viên. Còi báo động rú vang khắp các khu phố.',
      type: 'ALERT'
    },
    {
      time: '20:13',
      title: 'Chiến Công Lịch Sử – B-52 Rơi Tại Chỗ!',
      desc: 'Tiểu đoàn 59 (Trung đoàn 261) tại trận địa Cổ Loa – Đông Anh phóng 2 quả đạn SAM-2, bắn rơi tại chỗ pháo đài bay B-52 trên cánh đồng Chuôm.',
      type: 'VICTORY'
    }
  ];

  return (
    <section
      id="night-1972"
      className="relative min-h-screen py-24 px-4 sm:px-6 lg:px-8 bg-[#090C12] text-[#F8F3E8] border-b-2 border-[#D5B45A]/30 overflow-hidden"
    >
      {/* Background night grid & battle glow */}
      <div className="absolute inset-0 bg-dark-grid opacity-30 pointer-events-none" />

      {/* Flashing explosion effect overlay on trigger */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-[#9E1B1B]/15 rounded-full blur-3xl pointer-events-none animate-pulse" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#9E1B1B]/80 rounded-full border border-[#D5B45A]/40 text-xs font-mono text-[#D5B45A] font-bold uppercase tracking-widest mb-3">
            <Radio className="w-3.5 h-3.5 animate-pulse" /> ĐÊM MỞ MÀN CHIẾN DỊCH LINEBACKER II
          </div>
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-display font-black tracking-tight uppercase text-[#F8F3E8]">
            18.12.1972
          </h2>
          <p className="text-2xl sm:text-3xl font-display font-bold text-[#9E1B1B] uppercase mt-3">
            ĐÊM BẦU TRỜI HÀ NỘI RUNG CHUYỂN
          </p>
          <div className="w-24 h-1 bg-[#D5B45A] mx-auto my-5" />
          <p className="font-serif-title italic text-sm sm:text-base text-gray-300">
            “19 giờ 40 phút: Những quả bom đầu tiên rải thảm xuống Hà Nội... Cuộc đọ sức lịch sử giữa ý chí Việt Nam và siêu pháo đài bay chính thức bắt đầu.”
          </p>
        </div>

        {/* 2-Column Command Room View */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* LEFT: Tactical Radar Display Simulation */}
          <div className="lg:col-span-7">
            <RadarScanner onTargetClick={() => { if (onRadarPing) onRadarPing(); }} />
          </div>

          {/* RIGHT: Minute-by-Minute Action Diary */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center justify-between pb-2 border-b border-[#D5B45A]/30">
              <h3 className="font-display font-bold text-lg text-[#D5B45A] uppercase tracking-wider flex items-center gap-2">
                <Crosshair className="w-4 h-4 text-[#9E1B1B]" /> NHẬT KÝ ĐÊM 18/12/1972
              </h3>
              <span className="text-xs font-mono text-gray-400">TRẬN ĐỊA HÀ NỘI</span>
            </div>

            <div className="space-y-3">
              {battleEvents.map((evt, idx) => {
                const isSelected = activeStep === idx;
                return (
                  <motion.div
                    key={idx}
                    onClick={() => setActiveStep(idx)}
                    whileHover={{ scale: 1.01 }}
                    className={`p-4 rounded-xl border-2 transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-[#121824] border-[#D5B45A] shadow-[0_0_20px_rgba(213,180,90,0.15)]'
                        : 'bg-[#0E121B] border-[#D5B45A]/20 hover:border-[#D5B45A]/50'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2.5">
                      <div className="flex items-center gap-2">
                        <span className={`px-2 py-0.5 rounded text-xs font-mono font-bold ${
                          evt.type === 'VICTORY'
                            ? 'bg-[#9E1B1B] text-[#F8F3E8]'
                            : 'bg-[#D5B45A] text-[#171717]'
                        }`}>
                          {evt.time}
                        </span>
                        <h4 className="font-display font-bold text-sm sm:text-base text-[#F8F3E8]">
                          {evt.title}
                        </h4>
                      </div>
                      {evt.type === 'VICTORY' && (
                        <span className="text-[10px] font-mono text-[#D5B45A] bg-[#9E1B1B]/40 px-2 py-0.5 rounded border border-[#9E1B1B]">
                          CHIẾN CÔNG
                        </span>
                      )}
                    </div>
                    <p className="text-xs sm:text-sm text-gray-300 leading-relaxed text-justify">
                      {evt.desc}
                    </p>
                  </motion.div>
                );
              })}
            </div>

            {/* SAM-2 missile showcase button */}
            <div className="pt-2">
              <button
                onClick={() => onOpenImageModal('sam2_missile')}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-[#9E1B1B] hover:bg-[#7A1414] text-[#F8F3E8] font-display text-sm tracking-wider uppercase shadow-lg transition-colors cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-[#D5B45A]" />
                <span>Xem tư liệu: Rồng lửa SAM-2 lập công</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
