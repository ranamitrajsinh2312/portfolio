"use client";

import { motion } from "framer-motion";

/**
 * SectionGlow — reusable centerpiece glow for sections.
 * Matches the perfect glow on HeroCanvas.tsx.
 * Subtle, immersive, and centered.
 */
export default function SectionGlow({ color = "rgba(108,99,255,0.12)" }) {
  return (
    <motion.div
      animate={{ opacity: [0.35, 0.6, 0.35], scale: [1, 1.15, 1] }}
      transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "60vw",
        height: "60vw",
        borderRadius: "50%",
        background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
        filter: "blur(100px)",
        pointerEvents: "none",
        zIndex: 0,
      }}
    />
  );
}
