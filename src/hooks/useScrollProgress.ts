import { useState, useEffect } from 'react';

export interface TimelineMilestone {
  id: string;
  year: string;
  title: string;
}

export const MILESTONES: TimelineMilestone[] = [
  { id: 'hero', year: '1972', title: 'Mở Đầu' },
  { id: 'context-1965', year: '1965', title: 'Chiến Tranh Lan Rộng' },
  { id: 'two-regions', year: '1965', title: 'Hai Miền Nam – Bắc' },
  { id: 'timeline-1968', year: '1968', title: 'Tết Mậu Thân' },
  { id: 'newspaper-1972', year: '1971', title: 'Khôi Phục & Thử Thách' },
  { id: 'prediction-1967', year: '1967', title: 'Dự Đoán Của Bác' },
  { id: 'night-1972', year: '1972', title: '18.12 Rung Chuyển' },
  { id: 'twelve-days', year: '1972', title: '12 Ngày Đêm' },
  { id: 'dien-bien-phu', year: '1972', title: 'ĐBP Trên Không' },
  { id: 'paris-1973', year: '1973', title: 'Hiệp Định Paris' },
  { id: 'spring-1975', year: '1975', title: 'Mùa Xuân 1975' },
  { id: 'victory-1975', year: '1975', title: '30/4 Toàn Thắng' },
  { id: 'conclusion', year: '1975', title: 'Kết Luận Lịch Sử' }
];

export function useScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll <= 0) return;
      const currentScroll = window.scrollY;
      setScrollProgress(Math.min(Math.max(currentScroll / totalScroll, 0), 1));

      // Determine active section
      const sections = MILESTONES.map(m => document.getElementById(m.id)).filter(Boolean) as HTMLElement[];
      const scrollPosition = window.scrollY + window.innerHeight * 0.35;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sec = sections[i];
        if (sec && sec.offsetTop <= scrollPosition) {
          setActiveSection(sec.id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const elem = document.getElementById(id);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return { scrollProgress, activeSection, scrollToSection, milestones: MILESTONES };
}
