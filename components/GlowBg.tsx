"use client";

import { motion } from "framer-motion";

/**
 * GlowBg — Abstract floating shapes and particles background.
 * Circles, Squares, and Border-only versions drifting in 3D space.
 * Low opacity (5-15%) for a premium, non-distracting feel.
 */
export default function GlowBg() {
  // Generate some random shapes and particles
  const shapes = [
    { type: "circle", size: 300, color: "rgba(108,99,255,0.08)", border: false, top: "10%", left: "5%", dur: 22 },
    { type: "square", size: 400, color: "transparent", border: true, top: "40%", left: "70%", dur: 28 },
    { type: "circle", size: 250, color: "transparent", border: true, top: "70%", left: "10%", dur: 25 },
    { type: "square", size: 350, color: "rgba(56,189,248,0.06)", border: false, top: "15%", left: "75%", dur: 32 },
    { type: "circle", size: 500, color: "rgba(167,139,250,0.04)", border: false, top: "35%", left: "20%", dur: 35 },
    { type: "square", size: 200, color: "transparent", border: true, top: "85%", left: "60%", dur: 20 },
    { type: "circle", size: 150, color: "rgba(52,211,153,0.07)", border: false, top: "50%", left: "45%", dur: 18 },
  ];

  const particles = Array.from({ length: 45 }, (_, i) => ({
    id: i,
    size: Math.random() * 3 + 1,
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    dur: Math.random() * 20 + 20,
    delay: Math.random() * 10,
    color: ["rgba(108,99,255,0.15)", "rgba(56,189,248,0.15)", "rgba(167,139,250,0.15)"][i % 3],
  }));

  return (
    <div
      aria-hidden
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 0,
        pointerEvents: "none",
        overflow: "hidden",
      }}
    >
      {/* ── Floating abstract shapes ── */}
      {shapes.map((s, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, rotate: 0 }}
          animate={{
            opacity: [0.3, 0.7, 0.3],
            x: [0, 50, -30, 0],
            y: [0, -40, 60, 0],
            rotate: [0, 90, 180, 360],
          }}
          transition={{ duration: s.dur, repeat: Infinity, ease: "linear" }}
          style={{
            position: "absolute",
            top: s.top,
            left: s.left,
            width: s.size,
            height: s.size,
            borderRadius: s.type === "circle" ? "50%" : "24px",
            backgroundColor: s.color,
            border: s.border ? "1px solid rgba(255,255,255,0.06)" : "none",
            filter: "blur(40px)",
          }}
        />
      ))}

      {/* ── Drifting particles ── */}
      {particles.map((p) => (
        <motion.div
          key={p.id}
          animate={{
            y: [0, -100],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: p.dur,
            repeat: Infinity,
            delay: p.delay,
            ease: "linear",
          }}
          style={{
            position: "absolute",
            top: p.top,
            left: p.left,
            width: p.size,
            height: p.size,
            borderRadius: "50%",
            backgroundColor: p.color,
            boxShadow: `0 0 10px ${p.color}`,
          }}
        />
      ))}

      {/* ── Deep vignette overlay (optional but nice) ── */}
      <div style={{
        position: "absolute", inset: 0,
        background: "radial-gradient(circle at center, transparent 0%, rgba(10,10,15,0.4) 100%)",
      }} />
    </div>
  );
}
