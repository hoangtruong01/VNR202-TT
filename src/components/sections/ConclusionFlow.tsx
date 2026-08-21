import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowDown,
  ArrowUp,
  BookCheck,
  ZoomIn,
  Camera,
  CheckCircle2,
  Sparkles,
  Award,
  Flame,
  ShieldCheck
} from 'lucide-react';
import { HISTORICAL_IMAGES } from '@/data/imagesData';

interface ConclusionFlowProps {
  onBackToTop: () => void;
  onOpenImageModal?: (key: string) => void;
}

export const ConclusionFlow: React.FC<ConclusionFlowProps> = ({
  onBackToTop,
  onOpenImageModal
}) => {
  const [selectedStep, setSelectedStep] = useState<number | null>(null);

  const galleryImages = [
    {
      key: 'tran_dia_long_bien_1967',
      timeBadge: '27/05/1967',
      phaseTag: 'DỰ BÁO & CHIẾN ĐẤU',
      title: 'Bảo Vệ Cầu Long Biên (1967)',
      location: 'Trận địa Gia Thượng — Gia Lâm',
      description:
        'Chiến sĩ pháo cao xạ tranh thủ đọc báo giữa giờ chiến đấu bảo vệ cầu Long Biên trong năm Chủ tịch Hồ Chí Minh đưa ra dự báo chiến lược.'
    },
    {
      key: 'khau_doi_cao_xa_ha_noi',
      timeBadge: '1967 — 1972',
      phaseTag: 'CHUẨN BỊ THẾ TRẬN',
      title: 'Lưới Lửa Phòng Không Hà Nội',
      location: 'Trận địa phòng không Thủ đô',
      description:
        'Khẩu đội pháo phòng không ngụy trang cành lá cẩn mật, ngày đêm canh giữ bầu trời, sẵn sàng đánh bại pháo đài bay chiến lược.'
    },
    {
      key: 'xac_may_bay_pho_ha_noi',
      timeBadge: '12/1972',
      phaseTag: 'HIỆN THỰC CHIẾN THẮNG',
      title: 'Xác B-52 Rơi Trên Phố Hà Nội',
      location: 'Nội thành Hà Nội (12/1972)',
      description:
        'Mảnh xác pháo đài bay B-52 bị bắn rơi tại chỗ nằm ngổn ngang trên đường phố Hà Nội — minh chứng thép cho thất bại của không lực Hoa Kỳ.'
    }
  ];

  const flowSteps = [
    {
      no: '01',
      year: '1967',
      label: 'DỰ BÁO CHIẾN LƯỢC',
      highlight: '“Mỹ chỉ chịu thua sau khi thua trên bầu trời Hà Nội”',
      desc: 'Chủ tịch Hồ Chí Minh chỉ đạo Quân chủng PK-KQ sớm chuẩn bị đánh B-52 ngay từ cuối năm 1967.',
      badge: 'TẦM NHÌN THIÊN TÀI'
    },
    {
      no: '02',
      year: '1968 — 1972',
      label: 'CHUẨN BỊ KỸ LƯỠNG',
      highlight: 'Xây dựng thế trận phòng không 3 thứ quân',
      desc: 'Đưa tên lửa, radar vào tuyến lửa Khu 4 nghiên cứu cách đánh B-52; hoàn thành cuốn "Cẩm nang bìa đỏ".',
      badge: 'BẢN LĨNH & TRÍ TUỆ'
    },
    {
      no: '03',
      year: '18/12/1972',
      label: 'B-52 TẬP KÍCH HÀ NỘI',
      highlight: 'Chiến dịch Linebacker II rải thảm bom huỷ diệt',
      desc: 'Mỹ huy động gần 200 máy bay B-52 và hơn 1.000 máy bay chiến thuật với dã tâm đưa miền Bắc về "thời kỳ đồ đá".',
      badge: 'THỬ THÁCH KHỐC LIỆT'
    },
    {
      no: '04',
      year: '18 — 29/12/1972',
      label: 'ĐIỆN BIÊN PHỦ TRÊN KHÔNG',
      highlight: '12 ngày đêm quật ngã 34 pháo đài bay B-52',
      desc: 'Lưới lửa phòng không Hà Nội – Hải Phòng lập nên kỳ tích lịch sử, bẻ gãy hoàn toàn uy thế răn đe chiến lược của Mỹ.',
      badge: 'BƯỚC NGOẶT QUYẾT ĐỊNH'
    },
    {
      no: '05',
      year: '27/01/1973',
      label: 'HIỆP ĐỊNH PARIS',
      highlight: '“Đánh cho Mỹ cút”',
      desc: 'Mỹ buộc phải ký hiệp định chấm dứt chiến tranh, rút toàn bộ quân viễn chinh về nước vô điều kiện.',
      badge: 'THẮNG LỢI NGOẠI GIAO'
    },
    {
      no: '06',
      year: 'MÙA XUÂN 1975',
      label: 'ĐẠI THẮNG MÙA XUÂN',
      highlight: '“Đánh cho ngụy nhào”',
      desc: 'Tổng tiến công và nổi dậy thần tốc mùa Xuân 1975 đỉnh cao là Chiến dịch Hồ Chí Minh lịch sử.',
      badge: 'TIẾN CÔNG THẦN TỐC'
    },
    {
      no: '07',
      year: '30/04/1975',
      label: 'THỐNG NHẤT NON SÔNG',
      highlight: 'Non sông liền một dải — Độc lập trọn vẹn',
      desc: 'Kết thúc thắng lợi 21 năm kháng chiến chống Mỹ cứu nước, mở ra kỷ nguyên độc lập, tự do và thống nhất.',
      badge: 'TOÀN THẮNG LỊCH SỬ'
    }
  ];

  return (
    <section
      id="conclusion"
      className="relative py-28 px-4 sm:px-6 lg:px-8 bg-paper-texture text-[#171717] border-b-2 border-[#704512]/30 overflow-hidden"
    >
      {/* Decorative Background Large Watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[160px] sm:text-[280px] font-display font-black text-[#704512]/5 pointer-events-none select-none leading-none z-0">
        1967–1975
      </div>

      <div className="max-w-6xl mx-auto space-y-24 relative z-10">
        
        {/* ========================================================================= */}
        {/* SECTION HEADER                                                            */}
        {/* ========================================================================= */}
        <div className="text-center space-y-5 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E2D3B3] text-[#9E1B1B] font-mono text-xs sm:text-sm font-bold uppercase tracking-wider shadow-sm border border-[#704512]/30"
          >
            <BookCheck className="w-4 h-4" /> ĐÚC KẾT LỊCH SỬ • CHƯƠNG KẾT TOÀN THẮNG
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-3xl sm:text-5xl lg:text-7xl font-display font-black tracking-tight uppercase text-[#171717] leading-tight"
          >
            TỪ DỰ ĐOÁN ĐẾN HIỆN THỰC
          </motion.h2>

          <div className="w-24 h-1 bg-[#9E1B1B] mx-auto my-3" />

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-serif-title italic text-base sm:text-xl text-[#704512] max-w-3xl mx-auto leading-relaxed"
          >
            Mạch logic biện chứng xuyên suốt: Từ lời dự báo thiên tài của Chủ tịch Hồ Chí Minh năm 1967 đến thắng lợi quyết định trên bầu trời Hà Nội 1972 và Đại thắng Mùa Xuân 1975.
          </motion.p>
        </div>


        {/* ========================================================================= */}
        {/* ARCHIVAL PHOTOGRAPHIC EVIDENCE (3 BỨC ẢNH TƯ LIỆU LỊCH SỬ)               */}
        {/* ========================================================================= */}
        <div className="space-y-8">
          
          <div className="flex items-center justify-between border-b-2 border-[#704512]/30 pb-3">
            <div className="flex items-center gap-2">
              <Camera className="w-5 h-5 text-[#9E1B1B]" />
              <span className="font-display font-bold uppercase tracking-wider text-[#171717] text-sm sm:text-base">
                CHỨNG TÍCH TƯ LIỆU: BẢN LĨNH CHIẾN ĐẤU & HIỆN THỰC B-52 ĐẬP TAN
              </span>
            </div>
            <span className="text-[11px] font-mono text-[#704512] hidden sm:inline font-bold">
              3 MỐC TƯ LIỆU QUÝ
            </span>
          </div>

          {/* 3-Column Photographic Gallery */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {galleryImages.map((imgItem, idx) => {
              const imgData = HISTORICAL_IMAGES[imgItem.key];
              if (!imgData) return null;

              return (
                <motion.div
                  key={imgItem.key}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.15 }}
                  className="bg-[#F8F3E8] p-4 rounded-2xl border-2 border-[#704512]/40 shadow-lg flex flex-col justify-between group hover:border-[#9E1B1B] hover:shadow-xl transition-all"
                >
                  <div>
                    {/* Top Badges */}
                    <div className="flex items-center justify-between text-xs font-mono mb-2.5">
                      <span className="font-bold px-2 py-0.5 rounded bg-[#E2D3B3] text-[#9E1B1B]">
                        {imgItem.timeBadge}
                      </span>
                      <span className="text-[10px] font-mono uppercase text-[#704512] font-semibold">
                        {imgItem.phaseTag}
                      </span>
                    </div>

                    {/* Image Container with Zoom trigger */}
                    <div
                      onClick={() => onOpenImageModal && onOpenImageModal(imgItem.key)}
                      className="relative overflow-hidden rounded-xl bg-black aspect-4/3 cursor-pointer group/img mb-3 border border-[#704512]/30"
                    >
                      <img
                        src={imgData.url}
                        alt={imgData.title}
                        className="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-500 filter sepia-[0.15] contrast-[1.05]"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity flex items-end justify-between p-2.5 text-white">
                        <span className="text-[11px] font-mono flex items-center gap-1 text-[#D5B45A]">
                          <ZoomIn className="w-3.5 h-3.5" /> Phóng to tư liệu
                        </span>
                      </div>
                    </div>

                    {/* Image Title & Caption */}
                    <h4 className="font-display font-black text-base sm:text-lg text-[#171717] group-hover:text-[#9E1B1B] transition-colors leading-snug">
                      {imgItem.title}
                    </h4>

                    <div className="text-[11px] font-mono text-[#704512] font-semibold mt-1">
                      📍 {imgItem.location}
                    </div>

                    <p className="text-xs text-[#4A4A4A] mt-2 leading-relaxed text-justify">
                      {imgItem.description}
                    </p>
                  </div>

                  {/* Bottom Source Stamp */}
                  <div className="mt-4 pt-2.5 border-t border-[#704512]/20 flex items-center justify-between text-[10px] font-mono text-[#704512]">
                    <span className="truncate">{imgData.source}</span>
                    <button
                      onClick={() => onOpenImageModal && onOpenImageModal(imgItem.key)}
                      className="text-[#9E1B1B] font-bold hover:underline cursor-pointer shrink-0 ml-2"
                    >
                      Xem chi tiết →
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>


        {/* ========================================================================= */}
        {/* 7-STEP LOGICAL CAUSE-AND-EFFECT PROGRESSION TIMELINE                       */}
        {/* ========================================================================= */}
        <div className="space-y-8 bg-[#E8DEC4] p-6 sm:p-10 lg:p-12 rounded-3xl border-2 border-[#704512]/40 shadow-xl">
          
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-xs font-mono font-bold text-[#9E1B1B] uppercase tracking-widest bg-[#D8CAAC] px-3 py-1 rounded-full border border-[#704512]/30">
              QUY LUẬT TẤT YẾU CỦA LỊCH SỬ
            </span>
            <h3 className="text-2xl sm:text-4xl font-display font-black text-[#171717] uppercase mt-2">
              7 BƯỚC CHUYỂN TẤT THẮNG
            </h3>
            <p className="text-xs sm:text-sm font-serif-title italic text-[#704512] mt-1">
              Nhấp vào từng bước để khám phá mối liên hệ biện chứng
            </p>
          </div>

          <div className="space-y-3.5 max-w-3xl mx-auto">
            {flowSteps.map((step, idx) => {
              const isSelected = selectedStep === idx;
              const isHeroic = idx === 0 || idx === 3 || idx === 6;

              return (
                <React.Fragment key={idx}>
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.08 }}
                    onClick={() => setSelectedStep(isSelected ? null : idx)}
                    className={`p-4 sm:p-5 rounded-2xl border-2 transition-all duration-300 cursor-pointer shadow-sm relative ${
                      idx === 3
                        ? 'bg-[#171717] text-[#F8F3E8] border-[#D5B45A] shadow-md'
                        : isHeroic
                        ? 'bg-[#9E1B1B] text-[#F8F3E8] border-[#9E1B1B]'
                        : 'bg-[#F8F3E8] text-[#171717] border-[#704512]/30 hover:border-[#9E1B1B]'
                    }`}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <div className="flex items-center gap-3">
                        <span
                          className={`w-8 h-8 rounded-full flex items-center justify-center font-display font-black text-sm shrink-0 ${
                            idx === 3
                              ? 'bg-[#D5B45A] text-[#171717]'
                              : isHeroic
                              ? 'bg-[#F8F3E8] text-[#9E1B1B]'
                              : 'bg-[#9E1B1B] text-[#F8F3E8]'
                          }`}
                        >
                          {step.no}
                        </span>
                        <div>
                          <div className="flex items-center gap-2">
                            <span
                              className={`text-[11px] font-mono font-bold ${
                                idx === 3
                                  ? 'text-[#D5B45A]'
                                  : isHeroic
                                  ? 'text-[#D5B45A]'
                                  : 'text-[#9E1B1B]'
                              }`}
                            >
                              {step.year}
                            </span>
                            <span className="text-[10px] uppercase opacity-75 font-mono">
                              • {step.badge}
                            </span>
                          </div>
                          <h4 className="text-base sm:text-lg font-display font-black uppercase tracking-wide">
                            {step.label}
                          </h4>
                        </div>
                      </div>

                      <span
                        className={`text-xs font-mono font-bold px-2.5 py-1 rounded self-start sm:self-center ${
                          idx === 3
                            ? 'bg-[#D5B45A]/20 text-[#D5B45A]'
                            : isHeroic
                            ? 'bg-black/30 text-white'
                            : 'bg-[#E2D3B3] text-[#704512]'
                        }`}
                      >
                        {step.badge}
                      </span>
                    </div>

                    <div className="mt-2.5 pt-2.5 border-t border-current/20 space-y-1">
                      <p
                        className={`font-serif-title italic font-bold text-sm ${
                          idx === 3
                            ? 'text-[#D5B45A]'
                            : isHeroic
                            ? 'text-[#D5B45A]'
                            : 'text-[#9E1B1B]'
                        }`}
                      >
                        {step.highlight}
                      </p>
                      <p className="text-xs sm:text-sm opacity-90 leading-relaxed text-justify">
                        {step.desc}
                      </p>
                    </div>
                  </motion.div>

                  {idx < flowSteps.length - 1 && (
                    <div className="flex justify-center text-[#9E1B1B] py-0.5">
                      <ArrowDown className="w-4 h-4 animate-bounce text-[#9E1B1B]" />
                    </div>
                  )}
                </React.Fragment>
              );
            })}
          </div>
        </div>


        {/* ========================================================================= */}
        {/* CONCLUDING GRAND HISTORICAL MONUMENT BOX                                  */}
        {/* ========================================================================= */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-[#F8F3E8] p-8 sm:p-12 lg:p-14 rounded-3xl border-3 border-[#704512] shadow-2xl text-center space-y-6 relative overflow-hidden"
        >
          {/* Golden Star Emblem */}
          <div className="w-14 h-14 rounded-full bg-[#9E1B1B] text-[#D5B45A] flex items-center justify-center font-display font-black text-3xl mx-auto shadow-lg border-2 border-[#D5B45A]/50">
            ★
          </div>

          <div className="space-y-3 max-w-3xl mx-auto">
            <span className="text-xs font-mono font-bold tracking-widest text-[#9E1B1B] uppercase bg-[#E2D3B3] px-3 py-1 rounded-full border border-[#704512]/30">
              ĐỈNH CAO BẢN LĨNH & TRÍ TUỆ VIỆT NAM
            </span>
            <p className="font-serif-title italic font-black text-2xl sm:text-4xl lg:text-5xl text-[#171717] leading-tight">
              “Lời dự đoán của Chủ tịch Hồ Chí Minh đã được chứng minh bằng thực tế của toàn bộ cuộc kháng chiến.”
            </p>
          </div>

          <div className="w-20 h-1 bg-[#9E1B1B] mx-auto" />

          <p className="text-xs sm:text-sm font-mono text-[#704512] uppercase tracking-widest font-bold max-w-2xl mx-auto">
            TỪ CHIẾN THẮNG TRÊN BẦU TRỜI HÀ NỘI NĂM 1972 ĐẾN NON SÔNG THU VỀ MỘT MỐI MÙA XUÂN 1975
          </p>
        </motion.div>


        {/* ========================================================================= */}
        {/* FOOTER & MUSEUM SOURCES CREDIT                                            */}
        {/* ========================================================================= */}
        <footer className="pt-12 border-t-2 border-[#704512]/30 text-center space-y-6 text-[#704512]">
          <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-4 text-xs font-mono font-bold">
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-4 h-4 text-[#9E1B1B]" /> BẢO TÀNG LỊCH SỬ QUÂN SỰ VIỆT NAM
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-4 h-4 text-[#9E1B1B]" /> BẢO TÀNG CHIẾN THẮNG B-52
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-4 h-4 text-[#9E1B1B]" /> THÔNG TẤN XÃ VIỆT NAM (TTXVN)
            </span>
          </div>

          <p className="text-xs text-[#704512]/85 max-w-2xl mx-auto leading-relaxed">
            Website được xây dựng nhằm tái hiện chân thực và tôn vinh trang sử vàng chói lọi của dân tộc Việt Nam, tri ân Chủ tịch Hồ Chí Minh vĩ đại, các vị tướng lĩnh, cùng toàn thể đồng bào, cán bộ, chiến sĩ đã hy sinh vì nền độc lập, tự do và thống nhất của Tổ quốc.
          </p>

          <div className="pt-2">
            <button
              onClick={onBackToTop}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#171717] hover:bg-[#9E1B1B] text-[#F8F3E8] font-display text-xs sm:text-sm font-bold uppercase tracking-widest shadow-xl transition-all hover:scale-105 cursor-pointer border border-[#D5B45A]/40"
            >
              <ArrowUp className="w-4 h-4 text-[#D5B45A]" /> VỀ ĐẦU TRANG
            </button>
          </div>
        </footer>

      </div>
    </section>
  );
};
