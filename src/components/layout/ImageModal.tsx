import React, { useEffect } from 'react';
import { X, ZoomIn, Info, ShieldCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { HistoricalImage } from '@/data/imagesData';

interface ImageModalProps {
  image: HistoricalImage | null;
  onClose: () => void;
}

export const ImageModal: React.FC<ImageModalProps> = ({ image, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (image) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [image, onClose]);

  return (
    <AnimatePresence>
      {image && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#07090D]/90 backdrop-blur-sm cursor-pointer"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ scale: 0.92, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.92, opacity: 0, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 250 }}
            className="relative w-full max-w-4xl max-h-[92vh] bg-[#F1E6CC] rounded-lg border-2 border-[#704512] shadow-2xl overflow-hidden z-10 flex flex-col"
          >
            {/* Top Bar */}
            <div className="bg-[#E2D3B3] px-5 py-3.5 border-b border-[#704512] flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 bg-[#9E1B1B] text-[#F8F3E8] text-xs font-display font-bold rounded">
                  {image.tag || 'TƯ LIỆU GỐC'}
                </span>
                <span className="text-xs font-mono text-[#704512] font-semibold">NĂM {image.year}</span>
              </div>
              <button
                onClick={onClose}
                className="p-1.5 rounded-md hover:bg-[#704512]/20 text-[#171717] transition-colors focus:outline-none cursor-pointer"
                title="Đóng ảnh"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Photo Viewport */}
            <div className="relative bg-[#07080A] flex items-center justify-center min-h-[300px] max-h-[55vh] overflow-hidden p-2">
              <img
                src={image.url}
                alt={image.title}
                className="max-h-[50vh] w-auto max-w-full object-contain rounded filter contrast-[1.05]"
              />
              <div className="absolute bottom-3 right-3 bg-black/70 backdrop-blur-xs text-white/80 text-[10px] px-2 py-1 rounded flex items-center gap-1">
                <ZoomIn className="w-3 h-3" /> Ảnh Tư Liệu Gốc
              </div>
            </div>

            {/* Photo Metadata & Caption */}
            <div className="p-5 sm:p-6 bg-[#F8F3E8] overflow-y-auto">
              <h3 className="text-lg sm:text-xl font-serif-title font-bold text-[#171717] mb-2 leading-tight">
                {image.title}
              </h3>
              <p className="text-sm sm:text-base text-[#4A4A4A] leading-relaxed mb-4 text-justify">
                {image.caption}
              </p>

              <div className="pt-3 border-t border-[#704512]/20 flex flex-wrap items-center justify-between text-xs text-[#704512] gap-2">
                <div className="flex items-center gap-1.5 font-medium">
                  <ShieldCheck className="w-4 h-4 text-[#9E1B1B]" />
                  <span>Nguồn lưu trữ: <strong>{image.source}</strong></span>
                </div>
                <div className="flex items-center gap-1 text-[11px] italic text-[#4A4A4A]">
                  <Info className="w-3.5 h-3.5" /> Bản quyền tư liệu thuộc cơ quan lưu trữ quốc gia
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
