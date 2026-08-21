import React from 'react';

interface ScrollProgressProps {
  scrollProgress: number;
  activeSection: string;
  onNavigate: (id: string) => void;
}

interface YearPin {
  year: string;
  targetId: string;
  label: string;
}

const YEAR_PINS: YearPin[] = [
  { year: '1965', targetId: 'context-1965', label: 'Chiến tranh lan rộng' },
  { year: '1968', targetId: 'timeline-1968', label: 'Tết Mậu Thân' },
  { year: '1972', targetId: 'night-1972', label: 'Điện Biên Phủ trên không' },
  { year: '1973', targetId: 'paris-1973', label: 'Hiệp định Paris' },
  { year: '1975', targetId: 'victory-1975', label: 'Non sông thống nhất' },
];

export const ScrollProgress: React.FC<ScrollProgressProps> = ({
  scrollProgress,
  activeSection,
  onNavigate,
}) => {
  // Determine which year pin matches current section
  const getActiveYear = () => {
    if (activeSection === 'hero' || activeSection === 'context-1965' || activeSection === 'two-regions' || activeSection === 'party-line-1965') return '1965';
    if (activeSection === 'timeline-1968') return '1968';
    if (activeSection === 'newspaper-1972' || activeSection === 'prediction-1967' || activeSection === 'night-1972' || activeSection === 'twelve-days' || activeSection === 'dien-bien-phu') return '1972';
    if (activeSection === 'paris-1973') return '1973';
    return '1975';
  };

  const currentYear = getActiveYear();

  return (
    <aside aria-label="Dòng thời gian sự kiện" className="hidden lg:flex fixed left-6 top-1/2 -translate-y-1/2 z-30 flex-col items-center select-none pointer-events-auto">
      {/* Background Vintage Track Line */}
      <div className="relative w-1 bg-[#704512]/20 h-72 rounded-full flex flex-col justify-between items-center py-2">
        {/* Dynamic Progress Fill */}
        <div
          className="absolute top-0 left-0 w-full bg-gradient-to-b from-[#9E1B1B] to-[#D5B45A] rounded-full transition-all duration-150"
          style={{ height: `${scrollProgress * 100}%` }}
        />

        {/* Year Pins */}
        {YEAR_PINS.map((pin) => {
          const isSelected = currentYear === pin.year;
          return (
            <button
              key={pin.year}
              onClick={() => onNavigate(pin.targetId)}
              className="relative z-10 group flex items-center cursor-pointer focus:outline-none"
              title={`${pin.year}: ${pin.label}`}
            >
              {/* Pin Node */}
              <div
                className={`w-3.5 h-3.5 rounded-full border-2 transition-all duration-300 ${
                  isSelected
                    ? 'bg-[#9E1B1B] border-[#D5B45A] scale-125 shadow-[0_0_10px_#9E1B1B]'
                    : 'bg-[#F1E6CC] border-[#704512] group-hover:border-[#9E1B1B] group-hover:scale-110'
                }`}
              />

              {/* Year Label Tooltip */}
              <div className="absolute left-6 opacity-80 group-hover:opacity-100 transition-all flex items-center gap-2">
                <span
                  className={`font-display text-xs tracking-wider font-bold px-1.5 py-0.5 rounded shadow transition-colors ${
                    isSelected
                      ? 'bg-[#9E1B1B] text-[#F8F3E8] scale-105'
                      : 'bg-[#E2D3B3] text-[#704512] group-hover:bg-[#9E1B1B] group-hover:text-[#F8F3E8]'
                  }`}
                >
                  {pin.year}
                </span>
                <span className="hidden group-hover:inline-block whitespace-nowrap text-[10px] font-medium bg-[#171717] text-[#F8F3E8] px-2 py-0.5 rounded shadow-md">
                  {pin.label}
                </span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Percentage Indicator */}
      <div className="mt-4 text-[10px] font-mono text-[#704512] font-semibold bg-[#E2D3B3] px-2 py-0.5 rounded-full border border-[#704512]/30">
        {Math.round(scrollProgress * 100)}%
      </div>
    </aside>
  );
};
