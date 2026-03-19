"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { educationData, certificationsData, type Education, type Certification } from "@/data/education";
import SectionGlow from "@/components/SectionGlow";
import FloatingParticles from "@/components/FloatingParticles";

export default function Education() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="education" style={{ background: "var(--bg)", position: "relative", zIndex: 1, overflow: "hidden" }}>
      {/* Immersive background glow */}
      <SectionGlow color="rgba(52,211,153,0.06)" />
      <FloatingParticles
        count={15}
        colors={["rgba(52,211,153,0.5)", "rgba(56,189,248,0.45)", "rgba(167,139,250,0.4)"]}
        zIndex={0}
      />

      <div className="container-custom" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <div className="section-eyebrow">Academic Background</div>
          <h2 className="section-title">Education &amp; Certifications</h2>
          <div className="section-divider" />
          <p className="section-desc">
            Foundation and certifications in computer science and specialized modern technologies.
          </p>
        </motion.div>

        {/* Education Row — 3 col desktop, 2 col tablet, 1 col mobile */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            gap: "24px",
            marginBottom: "80px",
          }}
          className="edu-grid"
        >
          {educationData.map((edu: Education, i: number) => (
            <motion.div
              key={edu.institution}
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              whileHover={{ y: -8, scale: 1.01 }}
              className="card-glow"
              style={{
                background: "rgba(17,17,24,0.6)",
                border: "1px solid rgba(255,255,255,0.06)",
                borderRadius: "20px",
                padding: "clamp(20px, 2.5vw, 36px)",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
                transition: "all 0.35s ease",
              }}
            >
              <div style={{ fontSize: "clamp(10px, 1.1vw, 11px)", color: "var(--text3)", marginBottom: "12px", letterSpacing: "1.5px", fontWeight: 700, textTransform: "uppercase" }}>
                {edu.score}
              </div>
              <h3 style={{ fontSize: "clamp(16px, 2vw, 20px)", fontWeight: 700, color: "var(--text)", marginBottom: "4px" }}>
                {edu.institution}
              </h3>
              <div style={{ fontSize: "clamp(12px, 1.4vw, 14px)", color: "var(--accent3)", fontWeight: 500, marginBottom: "16px" }}>
                {edu.degree}
              </div>
              <div style={{ fontSize: "clamp(12px, 1.3vw, 13px)", color: "var(--text2)", fontWeight: 300, lineHeight: 1.7 }}>
                {edu.detail}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3
            style={{
              fontFamily: "var(--font-syne), sans-serif",
              fontSize: "clamp(18px, 2.5vw, 24px)",
              fontWeight: 700,
              marginBottom: "32px",
              display: "flex",
              alignItems: "center",
              gap: "12px",
            }}
          >
            <span style={{ fontSize: "28px" }}>📜</span>
            Certifications
          </h3>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
              gap: "16px",
            }}
          >
            {certificationsData.map((cert: Certification, i: number) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.6 + i * 0.08 }}
                whileHover={{ x: 8, background: "rgba(255,255,255,0.03)" }}
                style={{
                  display: "flex", alignItems: "center", gap: "16px",
                  padding: "16px 20px", borderRadius: "14px",
                  border: "1px solid rgba(255,255,255,0.04)",
                  background: "rgba(255,255,255,0.01)",
                  transition: "all 0.2s", cursor: "pointer",
                  minHeight: "44px",
                }}
              >
                <div style={{ fontSize: "22px", opacity: 0.8, flexShrink: 0 }}>{cert.icon || "🎓"}</div>
                <div>
                  <div style={{ fontSize: "clamp(12px, 1.4vw, 14px)", fontWeight: 600, color: "var(--text)" }}>
                    {cert.name}
                  </div>
                  <div style={{ fontSize: "clamp(10px, 1.1vw, 11px)", color: "var(--text3)", fontWeight: 500, textTransform: "uppercase", marginTop: "2px" }}>
                    {cert.year}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
