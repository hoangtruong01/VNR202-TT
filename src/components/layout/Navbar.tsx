import React, { useState } from 'react';
import { Volume2, VolumeX, Menu, X, Compass, ArrowUpRight } from 'lucide-react';
import { MILESTONES } from '@/hooks/useScrollProgress';

interface NavbarProps {
  isPlayingSound: boolean;
  onToggleSound: () => void;
  activeSection: string;
  onNavigate: (id: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  isPlayingSound,
  onToggleSound,
  activeSection,
  onNavigate
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const activeMilestone = MILESTONES.find(m => m.id === activeSection) || MILESTONES[0];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-[#F1E6CC]/90 backdrop-blur-md border-b-2 border-[#704512]/30 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Brand / Logo */}
        <button
          onClick={() => handleNavClick('hero')}
          className="flex items-center gap-3 group text-left cursor-pointer focus:outline-none"
        >
          <div className="w-9 h-9 rounded bg-[#9E1B1B] text-[#D5B45A] flex items-center justify-center font-display font-black text-xl shadow-md border border-[#D5B45A]/40 group-hover:scale-105 transition-transform">
            ★
          </div>
          <div>
            <div className="font-display font-bold text-sm sm:text-base tracking-wider uppercase text-[#171717] group-hover:text-[#9E1B1B] transition-colors leading-tight">
              HÀ NỘI 1972
            </div>
            <div className="text-[10px] font-mono tracking-widest text-[#704512] uppercase">
              Điện Biên Phủ Trên Không
            </div>
          </div>
        </button>

        {/* Center: Current Chapter Badge (Desktop) */}
        <div className="hidden md:flex items-center gap-2 px-3 py-1 bg-[#E2D3B3] rounded-full border border-[#704512]/30 text-xs font-mono text-[#704512]">
          <span className="w-2 h-2 rounded-full bg-[#9E1B1B] animate-pulse"></span>
          <span className="font-bold text-[#171717]">CHƯƠNG HIỆN TẠI:</span>
          <span>{activeMilestone.year} — {activeMilestone.title}</span>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-3">
          
          {/* Ambient Sound Toggle */}
          <button
            onClick={onToggleSound}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs font-mono transition-all cursor-pointer ${
              isPlayingSound
                ? 'bg-[#9E1B1B] text-[#F8F3E8] border-[#9E1B1B] shadow-md'
                : 'bg-[#E2D3B3] text-[#704512] border-[#704512]/40 hover:bg-[#D5B45A]/30'
            }`}
            title={isPlayingSound ? 'Tắt âm thanh không gian radio' : 'Bật âm thanh không gian radio 1972'}
          >
            {isPlayingSound ? (
              <>
                <Volume2 className="w-3.5 h-3.5 animate-bounce" />
                <span className="hidden sm:inline">ÂM THANH: BẬT</span>
                {/* Waveform mini animation */}
                <div className="flex items-end gap-0.5 h-3">
                  <span className="w-0.5 h-full bg-[#D5B45A] animate-pulse"></span>
                  <span className="w-0.5 h-2/3 bg-[#D5B45A] animate-ping"></span>
                  <span className="w-0.5 h-4/5 bg-[#D5B45A] animate-pulse"></span>
                </div>
              </>
            ) : (
              <>
                <VolumeX className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">ÂM THANH NỀN</span>
              </>
            )}
          </button>

          {/* Chapters Menu Toggle (Desktop & Mobile) */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#171717] text-[#F8F3E8] text-xs font-display font-medium uppercase tracking-wider hover:bg-[#9E1B1B] transition-colors cursor-pointer"
          >
            <Compass className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Mục Lục</span>
          </button>
        </div>
      </div>

      {/* Chapters Dropdown Modal */}
      {mobileMenuOpen && (
        <div className="bg-[#F8F3E8] border-b-4 border-[#9E1B1B] shadow-2xl px-4 py-6 max-h-[80vh] overflow-y-auto">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#704512]/20">
              <div className="flex items-center gap-2">
                <span className="p-1.5 bg-[#9E1B1B] text-[#F8F3E8] rounded">
                  <Compass className="w-4 h-4" />
                </span>
                <span className="font-display font-bold text-sm tracking-wider uppercase text-[#171717]">
                  MỤC LỤC TRUYỀN HÌNH TÀI LIỆU TƯƠNG TÁC
                </span>
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-1 rounded text-[#704512] hover:bg-[#E2D3B3] cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3">
              {MILESTONES.map((m, idx) => {
                const isActive = activeSection === m.id;
                return (
                  <button
                    key={m.id}
                    onClick={() => handleNavClick(m.id)}
                    className={`flex items-center justify-between p-3 rounded-lg border text-left transition-all cursor-pointer ${
                      isActive
                        ? 'bg-[#9E1B1B] text-[#F8F3E8] border-[#9E1B1B] font-semibold shadow-md'
                        : 'bg-[#F1E6CC] text-[#171717] border-[#704512]/20 hover:border-[#9E1B1B] hover:bg-[#E2D3B3]'
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <span className={`text-xs font-mono px-1.5 py-0.5 rounded ${isActive ? 'bg-black/30 text-[#D5B45A]' : 'bg-[#E2D3B3] text-[#704512]'}`}>
                        {String(idx + 1).padStart(2, '0')}
                      </span>
                      <div>
                        <div className="text-xs font-mono opacity-80">{m.year}</div>
                        <div className="text-sm font-display">{m.title}</div>
                      </div>
                    </div>
                    <ArrowUpRight className={`w-4 h-4 ${isActive ? 'text-[#D5B45A]' : 'text-gray-400'}`} />
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
