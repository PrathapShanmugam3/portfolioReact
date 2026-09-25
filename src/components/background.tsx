"use client"

import { useEffect, useRef } from 'react';

/** Fixed, decorative page backdrop: drifting aurora blobs, a fading grid and a cursor spotlight. */
export function Background() {
  const spotlight = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let frame = 0;
    const onMove = (e: PointerEvent) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        spotlight.current?.style.setProperty('--x', `${e.clientX}px`);
        spotlight.current?.style.setProperty('--y', `${e.clientY}px`);
      });
    };
    window.addEventListener('pointermove', onMove);
    return () => {
      window.removeEventListener('pointermove', onMove);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-grid" />
      <div
        className="animate-blob absolute -top-40 -left-32 h-[36rem] w-[36rem] rounded-full blur-[120px]"
        style={{ background: 'hsl(var(--brand-2))', opacity: 'var(--glow-opacity)' }}
      />
      <div
        className="animate-blob absolute top-1/3 -right-40 h-[32rem] w-[32rem] rounded-full blur-[120px]"
        style={{ background: 'hsl(var(--brand-1))', opacity: 'var(--glow-opacity)', animationDelay: '-8s' }}
      />
      <div
        className="animate-blob absolute -bottom-40 left-1/4 h-[30rem] w-[30rem] rounded-full blur-[120px]"
        style={{ background: 'hsl(var(--brand-3))', opacity: 'var(--glow-opacity)', animationDelay: '-15s' }}
      />
      <div
        ref={spotlight}
        className="absolute inset-0 hidden md:block"
        style={{
          background:
            'radial-gradient(500px circle at var(--x, 50%) var(--y, -20%), hsl(var(--brand-1) / 0.08), transparent 60%)',
        }}
      />
    </div>
  );
}
