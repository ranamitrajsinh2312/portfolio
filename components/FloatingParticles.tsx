"use client";

/**
 * FloatingParticles — lightweight ambient CSS particle layer.
 * Uses pure CSS animations instead of Framer Motion to eliminate JS overhead.
 * Seeded deterministic generation ensures no hydration mismatch.
 * All transforms are GPU-composited (no layout, no paint triggers).
 */

interface FloatingParticlesProps {
  count?: number;
  colors?: string[];
  zIndex?: number;
}

// Seeded pseudo-random (same on client/server = no hydration mismatch)
function seed(n: number, offset = 0) {
  const x = Math.sin(n * 9301 + offset * 49297 + 233720) * 43758.5453;
  return x - Math.floor(x);
}

export default function FloatingParticles({
  count = 10,
  colors = [
    "rgba(108,99,255,0.55)",
    "rgba(167,139,250,0.45)",
    "rgba(56,189,248,0.45)",
  ],
  zIndex = 0,
}: FloatingParticlesProps) {
  // Cap particle count at 10 to prevent jank
  const safeCount = Math.min(count, 10);

  const particles = Array.from({ length: safeCount }, (_, i) => ({
    id: i,
    x: seed(i, 1) * 100,
    y: seed(i, 2) * 100,
    size: seed(i, 3) * 2.5 + 1,
    color: colors[i % colors.length],
    duration: Math.round(seed(i, 4) * 14 + 10),
    delay: -(seed(i, 5) * 12),
    driftX: Math.round((seed(i, 6) - 0.5) * 60),
    driftY: Math.round((seed(i, 7) - 0.5) * 80),
    opacity: seed(i, 8) * 0.25 + 0.08,
  }));

  // Build CSS keyframes for each particle
  const css = particles
    .map((p) => `
      @keyframes fp-${p.id} {
        0%   { transform: translate(0px, 0px) scale(1);    opacity: ${p.opacity.toFixed(2)}; }
        38%  { transform: translate(${p.driftX}px, ${p.driftY}px) scale(1.4); opacity: ${Math.min(p.opacity * 2.2, 0.9).toFixed(2)}; }
        70%  { transform: translate(${Math.round(-p.driftX * 0.6)}px, ${Math.round(-p.driftY * 0.4)}px) scale(0.85); opacity: ${(p.opacity * 0.5).toFixed(2)}; }
        100% { transform: translate(0px, 0px) scale(1);    opacity: ${p.opacity.toFixed(2)}; }
      }
    `)
    .join("\n");

  return (
    <>
      <style>{css}</style>
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
          <div
            key={p.id}
            style={{
              position: "absolute",
              left: `${p.x.toFixed(2)}%`,
              top: `${p.y.toFixed(2)}%`,
              width: p.size,
              height: p.size,
              borderRadius: "50%",
              background: p.color,
              boxShadow: `0 0 ${Math.round(p.size * 3)}px ${p.color}`,
              willChange: "transform, opacity",
              animation: `fp-${p.id} ${p.duration}s ${p.delay.toFixed(1)}s ease-in-out infinite`,
            }}
          />
        ))}
      </div>
    </>
  );
}
