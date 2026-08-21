import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, ArrowUp, BookCheck } from 'lucide-react';

interface ConclusionFlowProps {
  onBackToTop: () => void;
}

export const ConclusionFlow: React.FC<ConclusionFlowProps> = ({ onBackToTop }) => {
  const flowSteps = [
    { label: 'DỰ BÁO 1967', desc: 'Bác Hồ nhận định: "Mỹ chỉ chịu thua sau khi thua trên bầu trời Hà Nội"' },
    { label: 'CHUẨN BỊ KỸ LƯỠNG', desc: 'Nghiên cứu cách đánh B-52, hoàn thiện "Cẩm nang bìa đỏ", xây dựng thế trận phòng không 3 thứ quân' },
    { label: 'B-52 TẬP KÍCH HÀ NỘI', desc: 'Mỹ mở chiến dịch Linebacker II (18/12/1972) với dã tâm đưa miền Bắc trở về "thời kỳ đồ đá"' },
    { label: 'ĐIỆN BIÊN PHỦ TRÊN KHÔNG', desc: '12 ngày đêm quật ngã 34 pháo đài bay B-52, bẻ gãy hoàn toàn uy thế răn đe chiến lược của Mỹ' },
    { label: 'HIỆP ĐỊNH PARIS 1973', desc: 'Mỹ buộc phải ký hiệp định rút toàn bộ quân đội viễn chinh ("Đánh cho Mỹ cút")' },
    { label: 'ĐẠI THẮNG MÙA XUÂN 1975', desc: 'Tổng tiến công thần tốc giải phóng hoàn toàn miền Nam ("Đánh cho ngụy nhào")' },
    { label: 'THỐNG NHẤT NON SÔNG', desc: 'Độc lập, chủ quyền trọn vẹn, giang sơn thu về một mối' }
  ];

  return (
    <section
      id="conclusion"
      className="relative py-28 px-4 sm:px-6 lg:px-8 bg-[#F8F3E8] text-[#171717] border-b-2 border-[#704512]/30"
    >
      <div className="max-w-5xl mx-auto space-y-20">
        
        {/* Section Title */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E2D3B3] text-[#9E1B1B] font-mono text-xs sm:text-sm font-bold uppercase tracking-wider">
            <BookCheck className="w-4 h-4" /> ĐÚC KẾT LỊCH SỬ
          </div>
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-display font-black tracking-tight uppercase text-[#171717]">
            TỪ DỰ ĐOÁN ĐẾN HIỆN THỰC
          </h2>
          <div className="w-24 h-1 bg-[#9E1B1B] mx-auto mt-2" />
          <p className="font-serif-title italic text-lg sm:text-xl text-[#704512] max-w-2xl mx-auto">
            Mạch logic biện chứng xuyên suốt chiều dài cuộc kháng chiến chống Mỹ cứu nước
          </p>
        </div>

        {/* Vertical Cause-and-Effect Timeline Flow */}
        <div className="relative max-w-2xl mx-auto space-y-3">
          {flowSteps.map((step, idx) => (
            <React.Fragment key={idx}>
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`p-6 rounded-2xl border-2 shadow-md transition-all text-center ${
                  idx === 0 || idx === flowSteps.length - 1
                    ? 'bg-[#9E1B1B] text-[#F8F3E8] border-[#D5B45A]'
                    : idx === 3
                    ? 'bg-[#171717] text-[#D5B45A] border-[#D5B45A]'
                    : 'bg-[#F1E6CC] text-[#171717] border-[#704512]/30'
                }`}
              >
                <div className="text-xs font-mono font-bold uppercase tracking-widest opacity-80 mb-2">
                  BƯỚC {idx + 1}
                </div>
                <h3 className="text-xl sm:text-2xl font-display font-black tracking-wider uppercase">
                  {step.label}
                </h3>
                <p className="text-xs sm:text-sm mt-2.5 opacity-90 max-w-xl mx-auto leading-relaxed">
                  {step.desc}
                </p>
              </motion.div>

              {idx < flowSteps.length - 1 && (
                <div className="flex justify-center text-[#9E1B1B] py-1">
                  <ArrowDown className="w-5 h-5 animate-pulse" />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Concluding Grand Quote Box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-[#E8DEC4] p-8 sm:p-12 rounded-3xl border-3 border-[#704512] shadow-2xl text-center space-y-5 relative"
        >
          <div className="w-12 h-12 rounded-full bg-[#9E1B1B] text-[#F8F3E8] flex items-center justify-center font-display font-black text-2xl mx-auto shadow-md">
            ★
          </div>
          <p className="font-serif-title italic font-bold text-2xl sm:text-3xl md:text-4xl text-[#171717] leading-snug">
            “Lời dự đoán của Chủ tịch Hồ Chí Minh đã được chứng minh bằng thực tế của toàn bộ cuộc kháng chiến.”
          </p>
          <p className="text-xs sm:text-sm font-mono text-[#704512] uppercase tracking-widest font-semibold pt-2">
            ĐỈNH CAO BẢN LĨNH & TRÍ TUỆ DÂN TỘC VIỆT NAM THỜI ĐẠI HỒ CHÍ MINH
          </p>
        </motion.div>

        {/* Footer & Museum Sources Credit */}
        <footer className="pt-12 border-t-2 border-[#704512]/30 text-center space-y-6 text-[#704512]">
          <div className="flex flex-wrap justify-center items-center gap-4 text-xs font-mono font-semibold">
            <span>BẢO TÀNG LỊCH SỬ QUÂN SỰ VIỆT NAM</span>
            <span>•</span>
            <span>BẢO TÀNG CHIẾN THẮNG B-52</span>
            <span>•</span>
            <span>THÔNG TẤN XÃ VIỆT NAM (TTXVN)</span>
          </div>

          <p className="text-xs text-[#704512]/80 max-w-xl mx-auto">
            Website được xây dựng nhằm tôn vinh những trang sử vàng chói lọi của dân tộc Việt Nam, tri ân các anh hùng liệt sĩ và nhân dân đã hy sinh vì nền độc lập, tự do của Tổ quốc.
          </p>

          <div>
            <button
              onClick={onBackToTop}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#171717] hover:bg-[#9E1B1B] text-[#F8F3E8] font-display text-xs font-bold uppercase tracking-widest shadow-lg transition-colors cursor-pointer"
            >
              <ArrowUp className="w-4 h-4" /> Về Đầu Trang
            </button>
          </div>
        </footer>
      </div>
    </section>
  );
};
