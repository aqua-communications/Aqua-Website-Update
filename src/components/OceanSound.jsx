import { useCallback, useEffect, useRef, useState } from 'react';

export default function OceanSound() {
  const [playing, setPlaying] = useState(false);
  const ctxRef = useRef(null);
  const nodesRef = useRef(null);

  const start = useCallback(async () => {
    if (nodesRef.current) return;
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    if (!AudioCtx) return;

    const ctx = ctxRef.current || new AudioCtx();
    ctxRef.current = ctx;
    if (ctx.state === 'suspended') await ctx.resume();
    if (ctx.state !== 'running') return;

    const buffer = ctx.createBuffer(1, ctx.sampleRate * 2, ctx.sampleRate);
    const data = buffer.getChannelData(0);
    let last = 0;
    for (let i = 0; i < data.length; i += 1) {
      const white = Math.random() * 2 - 1;
      data[i] = (last + 0.02 * white) / 1.02;
      last = data[i];
      data[i] *= 3.5;
    }

    const noise = ctx.createBufferSource();
    noise.buffer = buffer;
    noise.loop = true;
    const lowpass = ctx.createBiquadFilter();
    lowpass.type = 'lowpass';
    lowpass.frequency.value = 700;
    const highpass = ctx.createBiquadFilter();
    highpass.type = 'highpass';
    highpass.frequency.value = 120;
    const gain = ctx.createGain();
    gain.gain.value = 0.17;

    noise.connect(highpass);
    highpass.connect(lowpass);
    lowpass.connect(gain);
    gain.connect(ctx.destination);
    noise.start();
    nodesRef.current = { noise, gain };
    window.localStorage.setItem('aqua-sound', 'on');
    setPlaying(true);
  }, []);

  const stop = useCallback(() => {
    try { nodesRef.current?.noise.stop(); } catch { /* already stopped */ }
    nodesRef.current = null;
    window.localStorage.setItem('aqua-sound', 'off');
    setPlaying(false);
  }, []);

  useEffect(() => () => {
    try { nodesRef.current?.noise.stop(); } catch { /* noop */ }
    ctxRef.current?.close().catch(() => {});
  }, []);

  return (
    <button
      type="button"
      onClick={playing ? stop : start}
      aria-label={playing ? 'Mute ambient ocean sound' : 'Play ambient ocean sound'}
      aria-pressed={playing}
      className="fixed bottom-4 right-4 z-[60] min-h-10 rounded-full bg-black/80 backdrop-blur-xl px-4 text-[9px] font-bold uppercase tracking-[0.16em] text-white/70 border border-white/10 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#85ffff]"
    >
      Sound {playing ? 'On' : 'Off'}
    </button>
  );
}
