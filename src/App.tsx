import React, { useState, useEffect } from 'react';
import Lenis from 'lenis';

import { Navbar } from '@/components/layout/Navbar';
import { ScrollProgress } from '@/components/layout/ScrollProgress';
import { FilmGrainOverlay } from '@/components/layout/FilmGrainOverlay';
import { ImageModal } from '@/components/layout/ImageModal';
import { DetailDrawer, DetailContent } from '@/components/ui/DetailDrawer';

import { Hero } from '@/components/sections/Hero';
import { HistoricalContext } from '@/components/sections/HistoricalContext';
import { TwoRegions } from '@/components/sections/TwoRegions';
import { Timeline1965_1968 } from '@/components/sections/Timeline1965_1968';
import { Newspaper1969_1972 } from '@/components/sections/Newspaper1969_1972';
import { Prediction1967 } from '@/components/sections/Prediction1967';
import { AirBattleNight1972 } from '@/components/sections/AirBattleNight1972';
import { TwelveDaysBattle } from '@/components/sections/TwelveDaysBattle';
import { DienBienPhuAir } from '@/components/sections/DienBienPhuAir';
import { ParisAgreement1973 } from '@/components/sections/ParisAgreement1973';
import { Spring1975 } from '@/components/sections/Spring1975';
import { Victory1975 } from '@/components/sections/Victory1975';
import { ConclusionFlow } from '@/components/sections/ConclusionFlow';

import { useScrollProgress } from '@/hooks/useScrollProgress';
import { useSoundAmbience } from '@/hooks/useSoundAmbience';
import { HISTORICAL_IMAGES, HistoricalImage } from '@/data/imagesData';

export function App() {
  const { scrollProgress, activeSection, scrollToSection } = useScrollProgress();
  const { isPlaying, toggleSound, playRadarPing } = useSoundAmbience();

  const [selectedImage, setSelectedImage] = useState<HistoricalImage | null>(null);
  const [drawerData, setDrawerData] = useState<DetailContent | null>(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  // Initialize Lenis Smooth Scrolling
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.0,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  const handleOpenImageModal = (key: string) => {
    const img = HISTORICAL_IMAGES[key];
    if (img) {
      setSelectedImage(img);
    }
  };

  const handleOpenDetailDrawer = (data: DetailContent) => {
    setDrawerData(data);
    setIsDrawerOpen(true);
  };

  return (
    <div className="relative min-h-screen bg-[#F1E6CC] text-[#171717] selection:bg-[#9E1B1B] selection:text-[#F8F3E8]">
      
      {/* Subtle Atmospheric Film Grain Canvas */}
      <FilmGrainOverlay />

      {/* Top Vintage Navigation Bar */}
      <Navbar
        isPlayingSound={isPlaying}
        onToggleSound={toggleSound}
        activeSection={activeSection}
        onNavigate={scrollToSection}
      />

      {/* Sticky Left Vertical Scroll Progress Indicator */}
      <ScrollProgress
        scrollProgress={scrollProgress}
        activeSection={activeSection}
        onNavigate={scrollToSection}
      />

      {/* Main Storytelling Experience Flow */}
      <main className="w-full">
        {/* Hero: 18.12 - 29.12.1972 */}
        <Hero
          onScrollDown={() => scrollToSection('context-1965')}
          onOpenImageModal={handleOpenImageModal}
        />

        {/* 1965: Bối Cảnh Chiến Tranh Lan Rộng */}
        <HistoricalContext
          onOpenImageModal={handleOpenImageModal}
          onOpenDetailDrawer={handleOpenDetailDrawer}
        />

        {/* Hai Miền Nam - Bắc & Bản Đồ Đường Trường Sơn */}
        <TwoRegions onOpenImageModal={handleOpenImageModal} />

        {/* 1965 -> 1968: Bẻ Gãy Phản Công & Mậu Thân 1968 */}
        <Timeline1965_1968 />

        {/* 1969 -> 1972: Trang Báo Lịch Sử & Chuyển Màu Ban Đêm */}
        <Newspaper1969_1972 />

        {/* Dự Đoán Của Bác Hồ 1967 */}
        <Prediction1967 onOpenImageModal={handleOpenImageModal} />

        {/* 18.12.1972: Đêm Bầu Trời Hà Nội Rung Chuyển & Radar */}
        <AirBattleNight1972
          onRadarPing={playRadarPing}
          onOpenImageModal={handleOpenImageModal}
        />

        {/* 12 Ngày Đêm: Counter Số Liệu & Nhật Ký Tác Chiến */}
        <TwelveDaysBattle onOpenImageModal={handleOpenImageModal} />

        {/* Điện Biên Phủ Trên Không & Cẩm Nang Bìa Đỏ */}
        <DienBienPhuAir
          onOpenDetailDrawer={handleOpenDetailDrawer}
          onOpenImageModal={handleOpenImageModal}
        />

        {/* 27.01.1973: Hiệp Định Paris */}
        <ParisAgreement1973
          onOpenImageModal={handleOpenImageModal}
          onOpenDetailDrawer={handleOpenDetailDrawer}
        />

        {/* Mùa Xuân 1975: Thần Tốc Giải Phóng */}
        <Spring1975 />

        {/* 30/4/1975: Non Sông Thu Về Một Mối */}
        <Victory1975 onOpenImageModal={handleOpenImageModal} />

        {/* Kết Luận: Sơ Đồ Xuyên Suốt */}
        <ConclusionFlow onBackToTop={() => scrollToSection('hero')} />
      </main>

      {/* Lightbox Modal for Archival Images */}
      <ImageModal
        image={selectedImage}
        onClose={() => setSelectedImage(null)}
      />

      {/* Slide-over Drawer for Deep-Dive Documents */}
      <DetailDrawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        data={drawerData}
      />
    </div>
  );
}

export default App;
