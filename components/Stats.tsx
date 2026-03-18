"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import SectionGlow from "@/components/SectionGlow";

const stats = [
  { num: "6+",   label: "Projects Built",   icon: "🗂" },
  { num: "7.53", label: "B.Tech CPI",        icon: "🎓" },
  { num: "3 yr", label: "Graphic Design",    icon: "🎨" },
  { num: "5+",   label: "Tech Stacks",       icon: "⚡" },
];

export default function Stats() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="stats" style={{ position: "relative", zIndex: 1 }}>
      <SectionGlow color="rgba(108,99,255,0.04)" />
      
      <div
        ref={ref}
      className="stats-bar"
      style={{
        background: "rgba(17,17,24,0.4)",
        backdropFilter: "blur(20px)",
        borderTop: "1px solid rgba(255,255,255,0.06)",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
        padding: "36px 60px",
        display: "flex",
        justifyContent: "center",
        gap: "80px",
        flexWrap: "wrap",
        position: "relative",
        zIndex: 1,
        overflow: "hidden",
      }}
    >
      {/* Subtle shimmer line */}
      <motion.div
        animate={{ x: ["-100%", "200%"] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", repeatDelay: 4 }}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "40%",
          height: "1px",
          background: "linear-gradient(90deg, transparent, rgba(108,99,255,0.25), transparent)",
        }}
      />

      {stats.map((stat, i) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.5, delay: i * 0.12, ease: "easeOut" }}
          whileHover={{ y: -4 }}
          style={{ textAlign: "center", cursor: "default" }}
        >
          <span
            style={{
              fontFamily: "var(--font-syne), sans-serif",
              fontSize: "36px",
              fontWeight: 800,
              letterSpacing: "-1.5px",
              color: "var(--text)",
              display: "block",
              lineHeight: 1,
              background: "linear-gradient(135deg, var(--accent2), var(--accent3))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            {stat.num}
          </span>
          <span
            style={{
              fontSize: "13px",
              color: "var(--text3)",
              display: "block",
              marginTop: "6px",
              fontWeight: 400,
            }}
          >
            {stat.label}
          </span>
        </motion.div>
      ))}
      </div>
    </section>
  );
}
