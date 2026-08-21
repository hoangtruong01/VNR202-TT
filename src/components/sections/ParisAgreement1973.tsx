import React from 'react';
import { motion } from 'framer-motion';
import { FileCheck, PenTool, CheckCircle, ExternalLink, Calendar, ShieldCheck } from 'lucide-react';
import { HISTORICAL_IMAGES } from '@/data/imagesData';
import { DetailContent } from '@/components/ui/DetailDrawer';

interface ParisAgreementProps {
  onOpenImageModal: (key: string) => void;
  onOpenDetailDrawer: (data: DetailContent) => void;
}

export const ParisAgreement1973: React.FC<ParisAgreementProps> = ({
  onOpenImageModal,
  onOpenDetailDrawer
}) => {
  const parisDetailData: DetailContent = {
    title: 'Hiệp Định Paris (27/01/1973): Thắng Lợi Ngoại Giao Mang Tính Thời Đại',
    subtitle: 'Văn kiện pháp lý quốc tế buộc siêu cường Mỹ phải rút quân hoàn toàn khỏi Việt Nam',
    category: 'NGOẠI GIAO & VĂN KIỆN QUỐC TẾ',
    year: '1973',
    context: 'Sau thất bại thảm hại trong chiến dịch Linebacker II tại Hà Nội, chính quyền Nixon không còn lựa chọn nào khác ngoài việc ký vào bản Hiệp định Paris ngày 27/01/1973 mà phía Mỹ từng trì hoãn. Hiệp định gồm 9 chương, 23 điều, lập lại hòa bình tại Việt Nam.',
    strategicSignificance: 'Thực hiện trọn vẹn bước thứ nhất trong lời dạy của Bác Hồ: "Đánh cho Mỹ cút", tạo ra so sánh lực lượng chuyển dịch có lợi hoàn toàn cho cách mạng miền Nam tiến tới "Đánh cho ngụy nhào".',
    quote: {
      text: 'Hoa Kỳ và các nước khác tôn trọng độc lập, chủ quyền, thống nhất, toàn vẹn lãnh thổ của nước Việt Nam như Hiệp định Genève năm 1954 đã công nhận.',
      author: 'Điều 1, Hiệp định Paris (1973)'
    },
    keyFacts: [
      'Hoa Kỳ chấm dứt mọi hoạt động quân sự, rà phá bom mìn và rút toàn bộ quân đội về nước',
      'Công nhận trên thực tế tại miền Nam có 2 chính quyền, 2 quân đội và 3 lực lượng chính trị',
      'Cam kết không can thiệp vào công việc nội bộ của miền Nam Việt Nam'
    ],
    sourceReference: 'Lưu trữ Bộ Ngoại giao & Bảo tàng Lịch sử Quốc gia'
  };

  const keyArticles = [
    'Mỹ cam kết tôn trọng độc lập, chủ quyền, thống nhất và toàn vẹn lãnh thổ của Việt Nam.',
    'Mỹ chấm dứt mọi hành động quân sự chống miền Bắc và rút hết quân đội viễn chinh trong vòng 60 ngày.',
    'Thực hiện trọn vẹn lời căn dặn thiêng liêng của Chủ tịch Hồ Chí Minh: “ĐÁNH CHO MỸ CÚT”.'
  ];

  return (
    <section
      id="paris-1973"
      className="relative py-28 px-4 sm:px-6 lg:px-8 bg-[#F1E6CC] border-b-2 border-[#704512]/30 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#E2D3B3] rounded-full border border-[#704512]/30 text-xs font-mono text-[#9E1B1B] font-bold uppercase tracking-wider mb-3">
            <Calendar className="w-3.5 h-3.5" /> 27.01.1973
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display font-black text-[#171717] tracking-tight uppercase leading-tight">
            HIỆP ĐỊNH PARIS 1973
          </h2>
          <div className="w-20 h-1 bg-[#9E1B1B] mx-auto my-5" />
          <p className="font-serif-title italic text-base sm:text-lg text-[#704512]">
            “Khi thất bại trên bầu trời Hà Nội buộc đối phương phải đặt bút ký vào văn kiện chấm dứt chiến tranh tại Paris.”
          </p>
        </div>

        {/* Document Presentation Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Archival Photo Card: Paris Signing Hall */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 bg-[#F8F3E8] p-5 rounded-2xl border-2 border-[#704512] shadow-xl group"
          >
            <div
              className="relative overflow-hidden rounded-xl bg-black cursor-pointer aspect-16/10"
              onClick={() => onOpenImageModal('paris_accord_1973')}
            >
              <img
                src={HISTORICAL_IMAGES.paris_accord_1973.url}
                alt={HISTORICAL_IMAGES.paris_accord_1973.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter contrast-[1.05]"
              />
              <div className="absolute bottom-3 right-3 bg-[#171717]/80 text-[#F8F3E8] text-xs px-2.5 py-1 rounded flex items-center gap-1">
                <ExternalLink className="w-3.5 h-3.5" /> Phóng to ảnh tư liệu
              </div>
            </div>
            <div className="mt-4">
              <div className="text-xs font-mono font-bold text-[#9E1B1B] uppercase">LỄ KÝ KẾT TẠI TRUNG TÂM HỘI NGHỊ QUỐC TẾ KLÉBER (PARIS)</div>
              <h4 className="font-serif-title font-bold text-[#171717] text-lg mt-1.5">
                {HISTORICAL_IMAGES.paris_accord_1973.title}
              </h4>
              <p className="text-xs sm:text-sm text-[#4A4A4A] mt-2 line-clamp-2">
                {HISTORICAL_IMAGES.paris_accord_1973.caption}
              </p>
            </div>
          </motion.div>

          {/* Diplomatic Victory Clauses Box */}
          <div className="lg:col-span-6 space-y-6">
            <div className="bg-[#F8F3E8] p-6 sm:p-8 rounded-2xl border-2 border-[#704512] shadow-lg relative">
              <div className="flex items-center gap-3 pb-3 mb-4 border-b border-[#704512]/30">
                <div className="p-2 bg-[#9E1B1B] text-[#F8F3E8] rounded-lg">
                  <FileCheck className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-display font-black text-xl sm:text-2xl text-[#171717] uppercase">
                    ĐIỀU KHOẢN THEN CHỐT
                  </h3>
                  <span className="text-xs font-mono text-[#704512]">NỀN TẢNG CHO ĐẠI THẮNG 1975</span>
                </div>
              </div>

              <div className="space-y-5">
                {keyArticles.map((art, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3 bg-[#F1E6CC] rounded-xl border border-[#704512]/20">
                    <CheckCircle className="w-5 h-5 text-[#9E1B1B] shrink-0 mt-0.5" />
                    <p className="text-xs sm:text-sm font-medium text-[#171717] leading-relaxed">
                      {art}
                    </p>
                  </div>
                ))}
              </div>

              {/* Signature Line Animation decoration */}
              <div className="mt-6 pt-4 border-t border-[#704512]/20 flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-mono text-[#704512]">
                  <PenTool className="w-4 h-4 text-[#9E1B1B]" />
                  <span>Bút tích phái đoàn Việt Nam Dân chủ Cộng hòa</span>
                </div>
                <span className="text-xs font-display font-bold text-[#9E1B1B] uppercase tracking-wider">
                  THẮNG LỢI HOÀN TOÀN
                </span>
              </div>
            </div>

            {/* Read full Paris treaty drawer button */}
            <div>
              <button
                onClick={() => onOpenDetailDrawer(parisDetailData)}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#704512] hover:bg-[#52320C] text-[#F8F3E8] font-display text-sm tracking-wider uppercase shadow-md transition-colors cursor-pointer"
              >
                <ShieldCheck className="w-4 h-4 text-[#D5B45A]" />
                <span>Xem chi tiết: Văn kiện Hiệp định Paris 1973</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
