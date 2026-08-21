import React, { useEffect, useRef } from 'react';

export const FilmGrainOverlay: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    const generateNoise = () => {
      // Draw sparse noise to be light on CPU/GPU
      ctx.clearRect(0, 0, width, height);
      const imgData = ctx.createImageData(180, 180);
      const buffer = new Uint32Array(imgData.data.buffer);
      const len = buffer.length;

      for (let i = 0; i < len; i++) {
        if (Math.random() < 0.12) {
          const shade = Math.floor(Math.random() * 80);
          buffer[i] = (25 << 24) | (shade << 16) | (shade << 8) | shade;
        }
      }

      ctx.putImageData(imgData, 0, 0);
      ctx.drawImage(canvas, 0, 0, 180, 180, 0, 0, width, height);
    };

    let frameCount = 0;
    const loop = () => {
      frameCount++;
      if (frameCount % 6 === 0) {
        generateNoise();
      }
      animationFrameId = requestAnimationFrame(loop);
    };

    loop();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-40 opacity-[0.06] mix-blend-multiply"
      aria-hidden="true"
    />
  );
};
