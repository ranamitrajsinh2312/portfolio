"use client";

/**
 * SectionGlow — Pure CSS ambient glow for sections.
 * No Framer Motion — uses CSS animation for GPU-composited performance.
 */

interface SectionGlowProps {
  color?: string;
}

export default function SectionGlow({ color = "rgba(108,99,255,0.12)" }: SectionGlowProps) {
  return (
    <>
      <style>{`
        @keyframes sg-pulse {
          0%, 100% { opacity: 0.35; transform: translate(-50%, -50%) scale(1); }
          50%       { opacity: 0.60; transform: translate(-50%, -50%) scale(1.15); }
        }
        .sg-glow {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 60vw;
          height: 60vw;
          border-radius: 50%;
          pointer-events: none;
          z-index: 0;
          will-change: transform, opacity;
          animation: sg-pulse 8s ease-in-out infinite;
          filter: blur(100px);
        }
      `}</style>
      <div
        aria-hidden
        className="sg-glow"
        style={{
          background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
        }}
      />
    </>
  );
}
