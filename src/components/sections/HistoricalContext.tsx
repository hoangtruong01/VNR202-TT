import React from 'react';
import { motion } from 'framer-motion';
import { Shield, BookOpen, ExternalLink, Calendar, MapPin } from 'lucide-react';
import { HISTORICAL_IMAGES } from '@/data/imagesData';
import { DetailContent } from '@/components/ui/DetailDrawer';

interface HistoricalContextProps {
  onOpenImageModal: (key: string) => void;
  onOpenDetailDrawer: (data: DetailContent) => void;
}

export const HistoricalContext: React.FC<HistoricalContextProps> = ({
  onOpenImageModal,
  onOpenDetailDrawer
}) => {
  const detailData: DetailContent = {
    title: 'Hội Nghị Trung Ương 11 & 12 (1965): Quyết Tâm Đánh Thắng Giặc Mỹ Xâm Lược',
    subtitle: 'Nghị quyết lịch sử chuyển hướng chiến lược kháng chiến trên cả hai miền Nam – Bắc',
    category: 'ĐƯỜNG LỐI KHÁNG CHIẾN 1965',
    year: '1965',
    context: 'Trước việc đế quốc Mỹ ồ ạt đưa quân viễn chinh vào miền Nam và dùng không quân đánh phá miền Bắc, Ban Chấp hành Trung ương Đảng họp Hội nghị lần thứ 11 (3/1965) và lần thứ 12 (12/1965). Đảng nhận định: Dù Mỹ đưa vào hàng chục vạn quân thì tương quan lực lượng cơ bản không đổi. Trung ương hạ quyết tâm động viên lực lượng cả nước kiên quyết đánh thắng giặc Mỹ xâm lược trong mọi tình huống.',
    strategicSignificance: 'Khẳng định mối quan hệ biện chứng giữa Hậu phương lớn miền Bắc và Tiền tuyến lớn miền Nam; nêu cao tinh thần độc lập tự chủ và ý chí quyết chiến quyết thắng.',
    quote: {
      text: 'Lúc này, chống Mỹ cứu nước là nhiệm vụ thiêng liêng nhất của mọi người Việt Nam yêu nước... Dù phải kinh qua gian khổ, hy sinh, chúng ta nhất định hoàn toàn thắng lợi.',
      author: 'Nghị quyết Ban Chấp hành Trung ương Đảng (1965)'
    },
    keyFacts: [
      'Xác định miền Nam là tiền tuyến lớn, miền Bắc là hậu phương lớn',
      'Chuyển hướng kinh tế và xây dựng miền Bắc trong thời chiến',
      'Đẩy mạnh chi viện quy mô lớn cho chiến trường miền Nam qua đường Trường Sơn'
    ],
    sourceReference: 'Văn kiện Đảng Toàn tập, Tập 26 (NXB Chính trị Quốc gia)'
  };

  const timelineEvents = [
    {
      date: '08/03/1965',
      title: 'Quân Viễn Chinh Mỹ Đổ Bộ Đà Nẵng',
      desc: '3.500 lính Thủy quân lục chiến Mỹ đổ bộ bãi biển Red Beach, chính thức mở đầu chiến lược "Chiến tranh cục bộ" quy mô lớn ở miền Nam.',
      location: 'Đà Nẵng'
    },
    {
      date: '02/03/1965',
      title: 'Chiến Dịch Ném Bom "Sấm Rền" (Rolling Thunder)',
      desc: 'Không quân và hải quân Mỹ ồ ạt ném bom phá hoại miền Bắc nhằm bẻ gãy ý chí kháng chiến và cắt đứt chi viện cho miền Nam.',
      location: 'Miền Bắc Việt Nam'
    },
    {
      date: '03 & 12/1965',
      title: 'Hội Nghị Trung Ương 11 & 12',
      desc: 'Đảng xác định đường lối kháng chiến chống Mỹ trên phạm vi cả nước: Quyết tâm đánh thắng giặc Mỹ trong mọi tình huống.',
      location: 'Hà Nội'
    }
  ];

  return (
    <section id="context-1965" className="relative py-20 px-4 sm:px-6 lg:px-8 bg-[#F1E6CC] border-b-2 border-[#704512]/30">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-14 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#E2D3B3] rounded-full border border-[#704512]/30 text-xs font-mono text-[#9E1B1B] font-bold uppercase tracking-wider mb-3">
            <Calendar className="w-3.5 h-3.5" /> BỐI CẢNH LỊCH SỬ NĂM 1965
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display font-black text-[#171717] tracking-tight uppercase">
            1965 — CHIẾN TRANH LAN RỘNG
          </h2>
          <div className="w-20 h-1 bg-[#9E1B1B] mx-auto my-4" />
          <p className="font-serif-title italic text-base sm:text-lg text-[#704512]">
            “Khi đế quốc Mỹ chuyển từ ‘Chiến tranh đặc biệt’ sang ‘Chiến tranh cục bộ’, dốc toàn lực leo thang trên cả hai miền đất nước.”
          </p>
        </div>

        {/* Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* LEFT COLUMN: Interactive Timeline */}
          <div className="lg:col-span-6 space-y-6">
            <h3 className="text-xl font-display font-bold uppercase tracking-wider text-[#9E1B1B] flex items-center gap-2 border-b border-[#704512]/30 pb-2">
              <Shield className="w-5 h-5" /> DÒNG SỰ KIỆN BƯỚC NGOẶT 1965
            </h3>

            <div className="relative border-l-2 border-[#704512]/40 pl-6 space-y-8 ml-2">
              {timelineEvents.map((evt, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.6, delay: idx * 0.2 }}
                  className="relative group"
                >
                  {/* Timeline dot */}
                  <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-[#F1E6CC] border-2 border-[#9E1B1B] group-hover:bg-[#9E1B1B] transition-colors" />

                  <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#9E1B1B] mb-1">
                    <span>{evt.date}</span>
                    <span className="text-[#704512]">•</span>
                    <span className="flex items-center gap-1 text-[#704512]">
                      <MapPin className="w-3 h-3" /> {evt.location}
                    </span>
                  </div>

                  <h4 className="text-lg font-display font-bold text-[#171717] group-hover:text-[#9E1B1B] transition-colors">
                    {evt.title}
                  </h4>

                  <p className="text-sm text-[#4A4A4A] leading-relaxed mt-1 text-justify">
                    {evt.desc}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Read Deep Dive Button */}
            <div className="pt-4">
              <button
                onClick={() => onOpenDetailDrawer(detailData)}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#9E1B1B] hover:bg-[#7A1414] text-[#F8F3E8] font-display text-sm tracking-wider uppercase shadow-md transition-all cursor-pointer"
              >
                <BookOpen className="w-4 h-4" />
                <span>Đọc tư liệu: Nghị quyết TW 11 & 12</span>
              </button>
            </div>
          </div>

          {/* RIGHT COLUMN: Archival Image & Strategic Summary Card */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Historical Photo Card 1: Da Nang 1965 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-[#F8F3E8] p-4 rounded-xl border-2 border-[#704512]/40 shadow-lg group"
            >
              <div className="relative overflow-hidden rounded-lg bg-black cursor-pointer aspect-16/10"
                   onClick={() => onOpenImageModal('danang_1965')}>
                <img
                  src={HISTORICAL_IMAGES.danang_1965.url}
                  alt={HISTORICAL_IMAGES.danang_1965.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter sepia-[0.25]"
                />
                <div className="absolute bottom-2 right-2 bg-[#171717]/80 text-[#F8F3E8] text-[10px] px-2 py-1 rounded flex items-center gap-1">
                  <ExternalLink className="w-3 h-3" /> Phóng to ảnh
                </div>
              </div>
              <div className="mt-3">
                <div className="text-xs font-mono font-bold text-[#9E1B1B] uppercase">TƯ LIỆU 08/03/1965</div>
                <h4 className="font-serif-title font-bold text-[#171717] text-base mt-0.5">
                  {HISTORICAL_IMAGES.danang_1965.title}
                </h4>
                <p className="text-xs text-[#704512] mt-1 line-clamp-2">
                  {HISTORICAL_IMAGES.danang_1965.caption}
                </p>
              </div>
            </motion.div>

            {/* Strategic Summary Box */}
            <div className="bg-[#E2D3B3] p-5 rounded-xl border border-[#704512]/40">
              <h4 className="font-display font-bold text-sm tracking-wider uppercase text-[#171717] mb-2">
                ĐƯỜNG LỐI KHÁNG CHIẾN TRÊN CẢ NƯỚC:
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm text-[#171717]">
                <li className="flex items-start gap-2">
                  <span className="text-[#9E1B1B] font-bold">▶</span>
                  <span><strong>Miền Nam:</strong> Kiên quyết giữ vững thế tiến công, đánh bại "Chiến tranh cục bộ", giải phóng miền Nam.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#9E1B1B] font-bold">▶</span>
                  <span><strong>Miền Bắc:</strong> Vừa sản xuất vừa chiến đấu đánh bại chiến tranh phá hoại, làm tròn nghĩa vụ Hậu phương lớn.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
