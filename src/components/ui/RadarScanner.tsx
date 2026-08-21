import React, { useState } from 'react';
import { Crosshair, Radio, ShieldAlert } from 'lucide-react';

interface RadarScannerProps {
  className?: string;
  onTargetClick?: (targetName: string) => void;
}

export const RadarScanner: React.FC<RadarScannerProps> = ({
  className = '',
  onTargetClick
}) => {
  const [selectedTarget, setSelectedTarget] = useState<string | null>(null);

  const targets = [
    { id: 'b52_wave1', name: 'Tốp B-52 (Hướng Tây Bắc)', alt: '10.500m', speed: '920 km/h', angle: 42, dist: 68, threat: 'HIGH' },
    { id: 'b52_wave2', name: 'Tốp B-52 (Hướng Tam Đảo)', alt: '11.000m', speed: '900 km/h', angle: 135, dist: 55, threat: 'CRITICAL' },
    { id: 'sam2_bat59', name: 'Tiểu đoàn 59 SAM-2 (Đông Anh)', alt: 'Sẵn sàng', speed: 'Khóa mục tiêu', angle: 220, dist: 35, threat: 'DEFENSE' },
    { id: 'mig21_inter', name: 'MiG-21 (Phi công trực chiến)', alt: '8.000m', speed: '1.200 km/h', angle: 310, dist: 45, threat: 'INTERCEPT' }
  ];

  const handleSelect = (id: string, name: string) => {
    setSelectedTarget(id);
    if (onTargetClick) onTargetClick(name);
  };

  return (
    <div className={`relative flex flex-col items-center justify-center p-6 bg-[#07090D] border-2 border-[#D5B45A]/40 rounded-xl shadow-2xl overflow-hidden ${className}`}>
      {/* Radar Header */}
      <div className="w-full flex items-center justify-between pb-3 mb-2 border-b border-[#D5B45A]/20 text-xs font-mono text-[#D5B45A]">
        <div className="flex items-center gap-2">
          <Radio className="w-4 h-4 text-[#9E1B1B] animate-pulse" />
          <span className="tracking-wider uppercase font-semibold">ĐÀI RADAR QUỐC GIA – TỌA ĐỘ VÙNG TRỜI HÀ NỘI</span>
        </div>
        <div className="flex items-center gap-2 text-emerald-400">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
          <span>TRỰC CHIẾN CẤP 1</span>
        </div>
      </div>

      {/* Radar Main Display */}
      <div className="relative w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-[#0A1017] border-2 border-[#D5B45A]/50 shadow-[inset_0_0_40px_rgba(213,180,90,0.15)] flex items-center justify-center overflow-hidden">
        
        {/* Concentric distance rings */}
        <div className="absolute inset-4 rounded-full border border-[#D5B45A]/20 pointer-events-none"></div>
        <div className="absolute inset-16 rounded-full border border-[#D5B45A]/25 pointer-events-none"></div>
        <div className="absolute inset-28 rounded-full border border-[#D5B45A]/30 pointer-events-none"></div>
        <div className="absolute inset-40 rounded-full border border-dashed border-[#D5B45A]/40 pointer-events-none"></div>

        {/* Crosshair Axes */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-full h-[1px] bg-[#D5B45A]/25"></div>
          <div className="absolute h-full w-[1px] bg-[#D5B45A]/25"></div>
        </div>

        {/* Center Point (Hà Nội / Ba Đình) */}
        <div className="absolute z-20 flex flex-col items-center justify-center">
          <div className="w-3 h-3 rounded-full bg-[#9E1B1B] border border-[#F8F3E8] shadow-[0_0_10px_#9E1B1B]"></div>
          <span className="text-[10px] font-display font-semibold text-[#F8F3E8] bg-[#9E1B1B] px-1 rounded mt-1">HÀ NỘI</span>
        </div>

        {/* Rotating Radar Sweep Line */}
        <div className="absolute inset-0 origin-center animate-radar pointer-events-none">
          <div className="w-1/2 h-full bg-gradient-to-r from-transparent to-[#D5B45A]/30 origin-right transform -rotate-90"></div>
          <div className="absolute top-0 right-1/2 w-1/2 h-[2px] bg-[#D5B45A] shadow-[0_0_8px_#D5B45A]"></div>
        </div>

        {/* Target Blips */}
        {targets.map((target) => {
          const rad = (target.angle * Math.PI) / 180;
          const x = 50 + (target.dist / 2) * Math.cos(rad);
          const y = 50 + (target.dist / 2) * Math.sin(rad);
          const isSelected = selectedTarget === target.id;
          const isThreat = target.threat === 'CRITICAL' || target.threat === 'HIGH';

          return (
            <button
              key={target.id}
              onClick={() => handleSelect(target.id, target.name)}
              style={{ left: `${x}%`, top: `${y}%` }}
              className="absolute z-30 transform -translate-x-1/2 -translate-y-1/2 group cursor-pointer focus:outline-none"
              title={`${target.name} - Độ cao: ${target.alt}`}
            >
              <div className="relative flex items-center justify-center">
                <span className={`w-3 h-3 rounded-full ${isThreat ? 'bg-[#9E1B1B]' : 'bg-emerald-400'} ${isSelected ? 'scale-150 ring-2 ring-[#F8F3E8]' : 'animate-ping opacity-75'}`}></span>
                <span className={`absolute w-2.5 h-2.5 rounded-full ${isThreat ? 'bg-[#9E1B1B]' : 'bg-emerald-400'}`}></span>
              </div>
              <span className={`absolute left-4 top-0 whitespace-nowrap text-[10px] font-mono px-1.5 py-0.5 rounded shadow ${
                isThreat ? 'bg-[#9E1B1B]/90 text-[#F8F3E8]' : 'bg-emerald-900/90 text-emerald-100'
              }`}>
                {target.name.split(' ')[0]}
              </span>
            </button>
          );
        })}

        {/* Angle coordinates on perimeter */}
        <span className="absolute top-1 text-[9px] font-mono text-[#D5B45A]/70">000° BẮC</span>
        <span className="absolute right-2 text-[9px] font-mono text-[#D5B45A]/70">090° ĐÔNG</span>
        <span className="absolute bottom-1 text-[9px] font-mono text-[#D5B45A]/70">180° NAM</span>
        <span className="absolute left-2 text-[9px] font-mono text-[#D5B45A]/70">270° TÂY</span>
      </div>

      {/* Target Status Panel */}
      <div className="w-full mt-4 p-3 bg-[#0A1017]/80 rounded-lg border border-[#D5B45A]/20 font-mono text-xs">
        <div className="flex items-center justify-between text-[#D5B45A] font-semibold mb-2">
          <span className="flex items-center gap-1.5">
            <Crosshair className="w-3.5 h-3.5" />
            BẢN ĐỒ THEO DÕI TÁC CHIẾN
          </span>
          <span className="text-[10px] text-gray-400">Click chấm mục tiêu để tra cứu</span>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {targets.map((t) => (
            <div
              key={t.id}
              onClick={() => handleSelect(t.id, t.name)}
              className={`p-2 rounded border cursor-pointer transition-all ${
                selectedTarget === t.id
                  ? 'border-[#D5B45A] bg-[#D5B45A]/10 text-[#F8F3E8]'
                  : 'border-[#D5B45A]/15 bg-black/40 text-gray-300 hover:border-[#D5B45A]/40'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="font-semibold text-xs text-[#D5B45A] truncate">{t.name}</span>
                {t.threat === 'CRITICAL' && (
                  <span className="text-[9px] bg-red-950 text-red-300 px-1 py-0.5 rounded flex items-center gap-0.5">
                    <ShieldAlert className="w-2.5 h-2.5" /> NGUY CẤP
                  </span>
                )}
              </div>
              <div className="flex justify-between text-[10px] text-gray-400 mt-1">
                <span>Độ cao: <strong className="text-gray-200">{t.alt}</strong></span>
                <span>Tốc độ: <strong className="text-gray-200">{t.speed}</strong></span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
