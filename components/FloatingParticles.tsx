"use client";

import { useMemo } from "react";
import { motion } from "framer-motion";

interface ParticleConfig {
  id: number;
  x: number;       // % from left
  y: number;       // % from top
  size: number;    // px
  color: string;
  duration: number;
  delay: number;
  driftX: number;  // px horizontal drift
  driftY: number;  // px vertical drift
  opacity: number;
}

interface FloatingParticlesProps {
  /** Number of particles to render (default: 18) */
  count?: number;
  /** Array of CSS color strings for the dots */
  colors?: string[];
  /** z-index of the particle layer (default: 0) */
  zIndex?: number;
}

/**
 * FloatingParticles — lightweight ambient dot animation layer.
 * Drop inside any `position: relative` section. No scroll events,
 * no DOM queries — purely CSS-keyframe-equivalent via Framer Motion springs.
 */
export default function FloatingParticles({
  count = 18,
  colors = [
    "rgba(108,99,255,0.55)",
    "rgba(167,139,250,0.45)",
    "rgba(56,189,248,0.45)",
  ],
  zIndex = 0,
}: FloatingParticlesProps) {
  // Seeded deterministic generation so SSR & client match (no hydration mismatch)
  const particles: ParticleConfig[] = useMemo(() => {
    // Simple deterministic pseudo-random based on index
    const seed = (n: number, offset = 0) => {
      const x = Math.sin(n * 9301 + offset * 49297 + 233720) * 43758.5453;
      return x - Math.floor(x);
    };

    return Array.from({ length: count }, (_, i) => ({
      id: i,
      x: seed(i, 1) * 100,
      y: seed(i, 2) * 100,
      size: seed(i, 3) * 2.5 + 1,          // 1–3.5 px
      color: colors[i % colors.length],
      duration: seed(i, 4) * 14 + 10,       // 10–24 s
      delay: seed(i, 5) * -12,              // stagger start
      driftX: (seed(i, 6) - 0.5) * 60,     // ±30 px
      driftY: (seed(i, 7) - 0.5) * 80,     // ±40 px
      opacity: seed(i, 8) * 0.25 + 0.08,   // 0.08–0.33
    }));
  }, [count, colors]);

  return (
    <div
      aria-hidden
      style={{
        position: "absolute",
        inset: 0,
        overflow: "hidden",
        pointerEvents: "none",
        zIndex,
      }}
    >
      {particles.map((p) => (
        <motion.div
          key={p.id}
          animate={{
            x: [0, p.driftX, -p.driftX * 0.6, 0],
            y: [0, p.driftY, -p.driftY * 0.4, 0],
            opacity: [p.opacity, p.opacity * 2.2, p.opacity * 0.5, p.opacity],
            scale:   [1, 1.4, 0.85, 1],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "easeInOut",
            // Stagger keyframe timings slightly per particle
            times: [0, 0.38, 0.7, 1],
          }}
          style={{
            position: "absolute",
            left: `${p.x}%`,
            top:  `${p.y}%`,
            width:  p.size,
            height: p.size,
            borderRadius: "50%",
            background: p.color,
            boxShadow: `0 0 ${p.size * 3}px ${p.color}`,
          }}
        />
      ))}
    </div>
  );
}
