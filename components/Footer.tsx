"use client";

import { motion } from "framer-motion";
import SectionGlow from "@/components/SectionGlow";

export default function Footer() {
  return (
    <footer id="footer" style={{ position: "relative", zIndex: 1, backgroundColor: "rgba(10,10,15,0.3)", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
      <SectionGlow color="rgba(108,99,255,0.04)" />

      <div
        className="footer-inner"
        style={{
          textAlign: "center",
          padding: "32px 60px",
          backdropFilter: "blur(20px)",
          position: "relative",
          zIndex: 1,
          overflow: "hidden",
        }}
      >
        {/* Subtle shimmer line */}
        <motion.div
          animate={{ x: ["-100%", "200%"] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", repeatDelay: 6 }}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "35%",
            height: "1px",
            background: "linear-gradient(90deg, transparent, rgba(108,99,255,0.25), transparent)",
          }}
        />

        <p style={{ fontSize: "12px", color: "var(--text3)", fontWeight: 400, opacity: 0.6 }}>
          Designed &amp; built by
          <span className="text-gradient" style={{ fontWeight: 700, marginLeft: "6px" }}>
            Rana Mitrajsinh
          </span>
        </p>

        <p style={{ fontSize: "11px", color: "var(--text3)", marginTop: "8px", fontWeight: 300 }}>
          Rajkot, Gujarat • {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}
