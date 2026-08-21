import { useState, useEffect, useRef, useCallback } from 'react';

export function useSoundAmbience() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const masterGainRef = useRef<GainNode | null>(null);
  const oscRef = useRef<OscillatorNode | null>(null);
  const noiseNodeRef = useRef<AudioNode | null>(null);
  const intervalRef = useRef<number | null>(null);

  const initAudio = useCallback(() => {
    if (audioCtxRef.current) return;
    try {
      const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      const ctx = new AudioContextClass();
      const masterGain = ctx.createGain();
      masterGain.gain.setValueAtTime(0.0001, ctx.currentTime);
      masterGain.connect(ctx.destination);

      // Low frequency hum (vintage radar/radio atmosphere ~55Hz)
      const osc = ctx.createOscillator();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(55, ctx.currentTime);

      const oscGain = ctx.createGain();
      oscGain.gain.setValueAtTime(0.08, ctx.currentTime);
      osc.connect(oscGain);
      oscGain.connect(masterGain);
      osc.start();

      // Atmospheric tape hiss / filtered radio noise
      const bufferSize = ctx.sampleRate * 2;
      const noiseBuffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
      const output = noiseBuffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        output[i] = (Math.random() * 2 - 1) * 0.015;
      }
      const whiteNoise = ctx.createBufferSource();
      whiteNoise.buffer = noiseBuffer;
      whiteNoise.loop = true;

      const noiseFilter = ctx.createBiquadFilter();
      noiseFilter.type = 'bandpass';
      noiseFilter.frequency.setValueAtTime(800, ctx.currentTime);
      noiseFilter.Q.setValueAtTime(1.5, ctx.currentTime);

      whiteNoise.connect(noiseFilter);
      noiseFilter.connect(masterGain);
      whiteNoise.start();

      audioCtxRef.current = ctx;
      masterGainRef.current = masterGain;
      oscRef.current = osc;
      noiseNodeRef.current = whiteNoise;
    } catch {
      // Audio context might be restricted before interaction
    }
  }, []);

  const playRadarPing = useCallback(() => {
    if (!isPlaying || !audioCtxRef.current || !masterGainRef.current) return;
    try {
      const ctx = audioCtxRef.current;
      const pingOsc = ctx.createOscillator();
      const pingGain = ctx.createGain();

      pingOsc.type = 'sine';
      pingOsc.frequency.setValueAtTime(880, ctx.currentTime);
      pingOsc.frequency.exponentialRampToValueAtTime(440, ctx.currentTime + 0.3);

      pingGain.gain.setValueAtTime(0.05, ctx.currentTime);
      pingGain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.35);

      pingOsc.connect(pingGain);
      pingGain.connect(masterGainRef.current);

      pingOsc.start();
      pingOsc.stop(ctx.currentTime + 0.4);
    } catch {
      // ignore
    }
  }, [isPlaying]);

  const toggleSound = useCallback(() => {
    if (!isPlaying) {
      initAudio();
      if (audioCtxRef.current && audioCtxRef.current.state === 'suspended') {
        audioCtxRef.current.resume();
      }
      if (masterGainRef.current && audioCtxRef.current) {
        masterGainRef.current.gain.linearRampToValueAtTime(0.25, audioCtxRef.current.currentTime + 1.2);
      }
      setIsPlaying(true);

      // Random gentle radar pulse every 8-12 seconds
      intervalRef.current = window.setInterval(() => {
        playRadarPing();
      }, 9000);
    } else {
      if (masterGainRef.current && audioCtxRef.current) {
        masterGainRef.current.gain.linearRampToValueAtTime(0.0001, audioCtxRef.current.currentTime + 0.5);
      }
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
      setIsPlaying(false);
    }
  }, [isPlaying, initAudio, playRadarPing]);

  useEffect(() => {
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (audioCtxRef.current && audioCtxRef.current.state !== 'closed') {
        audioCtxRef.current.close().catch(() => {});
      }
    };
  }, []);

  return { isPlaying, toggleSound, playRadarPing };
}
