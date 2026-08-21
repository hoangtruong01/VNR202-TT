import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Award, ExternalLink, ShieldAlert } from 'lucide-react';
import { DetailContent } from '@/components/ui/DetailDrawer';
import { HISTORICAL_IMAGES } from '@/data/imagesData';

interface DienBienPhuAirProps {
  onOpenDetailDrawer: (data: DetailContent) => void;
  onOpenImageModal: (key: string) => void;
}

export const DienBienPhuAir: React.FC<DienBienPhuAirProps> = ({
  onOpenDetailDrawer,
  onOpenImageModal
}) => {
  const manualDetailData: DetailContent = {
    title: '“Cẩm Nang Bìa Đỏ” & Nghệ Thuật Vạch Nhiễu Tìm B-52',
    subtitle: 'Đỉnh cao trí tuệ và sự chuẩn bị công phu của Bộ đội Phòng không – Không quân Việt Nam',
    category: 'NGHỆ THUẬT QUÂN SỰ',
    year: '1972',
    context: 'Để đối phó với hệ thống tác chiến điện tử tối tân của Mỹ biến màn hình radar thành một rừng nhiễu trắng xóa, Quân chủng PK-KQ đã cử các đoàn cán bộ, kíp trắc thủ vào tuyến lửa Quân khu 4 bám sát B-52 từ năm 1968. Qua hàng trăm lần theo dõi, cuốn tài liệu "Cách đánh B-52 của Bộ đội Tên lửa" (thường gọi là Cẩm nang bìa đỏ) dày 30 trang ra đời vào tháng 10/1972.',
    strategicSignificance: 'Cuốn cẩm nang chỉ rõ phương pháp phân biệt dải nhiễu B-52 với các loại máy bay tiêm kích hộ tống F-4, F-105; cách bám sát dải nhiễu chính xác và phương pháp phóng đón đầu hiệu quả nhất.',
    quote: {
      text: 'Mỹ dựa vào ưu thế vũ khí công nghệ cao, nhưng người Việt Nam chiến thắng bằng trí tuệ, lòng quả cảm và sự chuẩn bị khoa học đến từng chi tiết.',
      author: 'Đại tướng Võ Nguyên Giáp'
    },
    keyFacts: [
      'Nhận diện các dạng nhiễu: Nhiễu tiêu cực (rải sợi kim loại) & Nhiễu tích cực (phát sóng điện tử)',
      'Quy tắc phóng tên lửa SAM-2 3 điểm đón lõng mục tiêu chiến lược',
      'Phối hợp nhịp nhàng giữa Pháo cao xạ tầm thấp, Tên lửa tầm cao và Tiêm kích MiG-21 ban đêm'
    ],
    sourceReference: 'Lịch sử Bộ đội Tên lửa Phòng không (1965 - 2015)'
  };

  return (
    <section
      id="dien-bien-phu"
      className="relative py-28 px-4 sm:px-6 lg:px-8 bg-[#090C12] text-[#F8F3E8] border-b-2 border-[#D5B45A]/30 overflow-hidden"
    >
      {/* Background Poster Vignette & Tactical Graphics */}
      <div className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(circle_at_center,#D5B45A_1px,transparent_1px)] [background-size:32px_32px]" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Massive Documentary Headline */}
        <div className="text-center max-w-5xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#9E1B1B] text-[#F8F3E8] font-mono text-xs sm:text-sm font-bold uppercase tracking-widest mb-4 shadow-lg"
          >
            <Award className="w-4 h-4 text-[#D5B45A]" /> ĐỈNH CAO NGHỆ THUẬT CHIẾN TRANH NHÂN DÂN
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-display font-black tracking-tighter uppercase text-[#F8F3E8] leading-[1.0]"
          >
            ĐIỆN BIÊN PHỦ
            <span className="block text-[#D5B45A] mt-3">TRÊN KHÔNG</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-serif-title italic text-xl sm:text-3xl text-[#F8F3E8]/90 mt-8 max-w-3xl mx-auto"
          >
            “Chiến thắng của ý chí kiên cường và đỉnh cao trí tuệ Việt Nam”
          </motion.p>
        </div>

        {/* 2 AUTHENTIC ARCHIVAL PHOTO SHOWCASES (Xác B-52 & Trận địa pháo cao xạ) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          
          {/* Card 1: Xác B-52 tại hồ Hữu Tiệp */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-[#121824] p-5 rounded-2xl border-2 border-[#9E1B1B] shadow-2xl group cursor-pointer"
            onClick={() => onOpenImageModal('hero_b52_ruins')}
          >
            <div className="relative overflow-hidden rounded-xl bg-black aspect-16/10">
              <img
                src={HISTORICAL_IMAGES.hero_b52_ruins.url}
                alt={HISTORICAL_IMAGES.hero_b52_ruins.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter contrast-[1.05]"
              />
              <div className="absolute top-2.5 left-2.5 bg-[#9E1B1B] text-[#F8F3E8] text-xs font-mono font-bold px-2.5 py-1 rounded">
                CHỨNG TÍCH LỊCH SỬ
              </div>
              <div className="absolute bottom-2.5 right-2.5 bg-black/80 text-[#F8F3E8] text-xs px-2.5 py-1 rounded flex items-center gap-1">
                <ExternalLink className="w-3.5 h-3.5 text-[#D5B45A]" /> Xem chi tiết
              </div>
            </div>
            <div className="mt-4">
              <h3 className="font-serif-title font-bold text-lg text-[#F8F3E8]">
                {HISTORICAL_IMAGES.hero_b52_ruins.title}
              </h3>
              <p className="text-xs sm:text-sm text-gray-300 mt-1 line-clamp-2">
                {HISTORICAL_IMAGES.hero_b52_ruins.caption}
              </p>
            </div>
          </motion.div>

          {/* Card 2: Khẩu đội pháo cao xạ bảo vệ Hà Nội */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-[#121824] p-5 rounded-2xl border-2 border-[#D5B45A] shadow-2xl group cursor-pointer"
            onClick={() => onOpenImageModal('phao_cao_xa_hanoi')}
          >
            <div className="relative overflow-hidden rounded-xl bg-black aspect-16/10">
              <img
                src={HISTORICAL_IMAGES.phao_cao_xa_hanoi.url}
                alt={HISTORICAL_IMAGES.phao_cao_xa_hanoi.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter contrast-[1.05]"
              />
              <div className="absolute top-2.5 left-2.5 bg-[#D5B45A] text-[#171717] text-xs font-mono font-bold px-2.5 py-1 rounded">
                TƯ LIỆU GỐC TTXVN
              </div>
              <div className="absolute bottom-2.5 right-2.5 bg-black/80 text-[#F8F3E8] text-xs px-2.5 py-1 rounded flex items-center gap-1">
                <ExternalLink className="w-3.5 h-3.5 text-[#D5B45A]" /> Xem chi tiết
              </div>
            </div>
            <div className="mt-4">
              <h3 className="font-serif-title font-bold text-lg text-[#F8F3E8]">
                {HISTORICAL_IMAGES.phao_cao_xa_hanoi.title}
              </h3>
              <p className="text-xs sm:text-sm text-gray-300 mt-1 line-clamp-2">
                {HISTORICAL_IMAGES.phao_cao_xa_hanoi.caption}
              </p>
            </div>
          </motion.div>
        </div>

        {/* 3 Pillar Cards: Ý Chí, Trí Tuệ, Thế Trận */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          
          {/* Pillar 1: Ý Chí */}
          <div className="bg-[#121824] p-7 rounded-2xl border-2 border-[#9E1B1B] shadow-xl space-y-4">
            <div className="w-10 h-10 rounded-lg bg-[#9E1B1B] text-[#F8F3E8] flex items-center justify-center font-display font-black text-xl">
              01
            </div>
            <h3 className="text-xl font-display font-bold uppercase text-[#F8F3E8]">
              Ý CHÍ QUYẾT TỬ CHO TỔ QUỐC
            </h3>
            <p className="text-sm text-gray-300 leading-relaxed text-justify">
              Tinh thần kiên trung không sợ hy sinh của quân dân Thủ đô. Tự vệ nhà máy vừa kéo còi báo động, vừa dũng cảm bám trụ trận địa pháo cao xạ giữa làn mưa bom.
            </p>
          </div>

          {/* Pillar 2: Trí Tuệ (Cẩm Nang Bìa Đỏ) */}
          <div className="bg-[#121824] p-7 rounded-2xl border-2 border-[#D5B45A] shadow-xl space-y-4">
            <div className="w-10 h-10 rounded-lg bg-[#D5B45A] text-[#171717] flex items-center justify-center font-display font-black text-xl">
              02
            </div>
            <h3 className="text-xl font-display font-bold uppercase text-[#D5B45A]">
              TRÍ TUỆ & “CẨM NANG BÌA ĐỎ”
            </h3>
            <p className="text-sm text-gray-300 leading-relaxed text-justify">
              Bộ đội Tên lửa vạch nhiễu, khắc phục hệ thống gây nhiễu tối tân nhất của Mỹ; tìm ra quy luật bay và điểm mù của pháo đài bay B-52 để phóng đón đầu chính xác.
            </p>
          </div>

          {/* Pillar 3: Thế Trận 3 Thứ Quân */}
          <div className="bg-[#121824] p-7 rounded-2xl border-2 border-[#704512] shadow-xl space-y-4">
            <div className="w-10 h-10 rounded-lg bg-[#704512] text-[#F8F3E8] flex items-center justify-center font-display font-black text-xl">
              03
            </div>
            <h3 className="text-xl font-display font-bold uppercase text-[#F8F3E8]">
              LƯỚI LỬA PHÒNG KHÔNG NHIỀU TẦNG
            </h3>
            <p className="text-sm text-gray-300 leading-relaxed text-justify">
              Hiệp đồng tác chiến hoàn hảo giữa Tên lửa SAM-2, Tiêm kích MiG-21, Pháo phòng không 100mm/57mm/37mm và súng máy 12,7mm của lực lượng dân quân tự vệ.
            </p>
          </div>
        </div>

        {/* Action Button: Read deep dive on "Cẩm nang bìa đỏ" */}
        <div className="text-center">
          <button
            onClick={() => onOpenDetailDrawer(manualDetailData)}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#D5B45A] hover:bg-[#B39238] text-[#171717] font-display text-sm font-bold uppercase tracking-wider shadow-lg transition-transform hover:scale-105 cursor-pointer"
          >
            <BookOpen className="w-4 h-4" />
            <span>Khám phá tài liệu: “Cẩm Nang Bìa Đỏ” đánh B-52</span>
          </button>
        </div>
      </div>
    </section>
  );
};
