import React, { useEffect } from 'react';
import { X, BookOpen, BookmarkCheck, FileText } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export interface DetailContent {
  title: string;
  subtitle?: string;
  year?: string;
  category?: string;
  context: string;
  strategicSignificance: string;
  quote?: {
    text: string;
    author: string;
  };
  keyFacts?: string[];
  sourceReference?: string;
}

interface DetailDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  data: DetailContent | null;
}

export const DetailDrawer: React.FC<DetailDrawerProps> = ({
  isOpen,
  onClose,
  data
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && data && (
        <div className="fixed inset-0 z-50 flex justify-end">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#0E1015]/80 backdrop-blur-xs cursor-pointer"
          />

          {/* Drawer Paper Container */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 28, stiffness: 220 }}
            className="relative w-full max-w-2xl h-full bg-[#F8F3E8] border-l-4 border-[#704512] shadow-2xl overflow-y-auto z-10 flex flex-col"
          >
            {/* Vintage Paper Header */}
            <div className="sticky top-0 bg-[#E2D3B3] border-b-2 border-[#704512] p-6 flex items-center justify-between z-20 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-[#9E1B1B] text-[#F8F3E8] rounded">
                  <FileText className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-display tracking-widest uppercase text-[#9E1B1B] font-bold">
                    {data.category || 'HỒ SƠ TƯ LIỆU LỊCH SỬ'}
                  </span>
                  <h3 className="text-xl font-serif-title font-bold text-[#171717] leading-tight">
                    {data.title}
                  </h3>
                </div>
              </div>
              <button
                onClick={onClose}
                className="p-2 rounded-full hover:bg-[#D5B45A]/30 text-[#704512] transition-colors focus:outline-none cursor-pointer"
                title="Đóng cửa sổ"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Content Body */}
            <div className="p-6 sm:p-8 space-y-6 text-[#171717]">
              {data.subtitle && (
                <div className="border-l-2 border-[#9E1B1B] pl-4 py-1 text-sm font-semibold text-[#704512] italic">
                  {data.subtitle}
                </div>
              )}

              {/* Quote if available */}
              {data.quote && (
                <div className="p-5 bg-[#F1E6CC] rounded-lg border border-[#D5B45A] relative">
                  <span className="absolute -top-3 left-4 px-2 bg-[#D5B45A] text-[#171717] text-[11px] font-bold tracking-wider uppercase rounded">
                    Trích Dẫn
                  </span>
                  <p className="font-serif-title italic text-base sm:text-lg text-[#171717] leading-relaxed pt-1">
                    “{data.quote.text}”
                  </p>
                  <p className="text-right text-xs font-display font-semibold text-[#704512] mt-2">
                    — {data.quote.author}
                  </p>
                </div>
              )}

              {/* Context Section */}
              <div>
                <h4 className="flex items-center gap-2 text-base font-display font-bold text-[#9E1B1B] uppercase tracking-wider mb-2">
                  <BookOpen className="w-4 h-4" /> Bối Cảnh Lịch Sử & Diễn Biến
                </h4>
                <p className="text-sm sm:text-base leading-relaxed text-[#171717] text-justify font-normal">
                  {data.context}
                </p>
              </div>

              {/* Key Facts */}
              {data.keyFacts && data.keyFacts.length > 0 && (
                <div>
                  <h4 className="flex items-center gap-2 text-base font-display font-bold text-[#704512] uppercase tracking-wider mb-3">
                    <BookmarkCheck className="w-4 h-4" /> Điểm Nhấn Chiến Lược
                  </h4>
                  <ul className="space-y-2.5">
                    {data.keyFacts.map((fact, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-sm sm:text-base text-[#171717]">
                        <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-[#D5B45A] text-[#171717] text-xs font-bold shrink-0 mt-0.5">
                          {idx + 1}
                        </span>
                        <span>{fact}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Strategic Significance */}
              <div className="p-4 bg-[#E8DEC4] rounded-lg border border-[#704512]/30">
                <h4 className="text-xs font-display font-bold text-[#704512] uppercase tracking-widest mb-1.5">
                  Ý Nghĩa Lịch Sử Quyết Định
                </h4>
                <p className="text-sm leading-relaxed text-[#171717]">
                  {data.strategicSignificance}
                </p>
              </div>

              {/* Source Reference */}
              {data.sourceReference && (
                <div className="pt-4 border-t border-[#704512]/20 text-[11px] text-[#704512] flex items-center justify-between">
                  <span>Nguồn trích lục: <strong>{data.sourceReference}</strong></span>
                  <span className="text-[#9E1B1B] font-semibold">Tư Liệu Quốc Gia</span>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
