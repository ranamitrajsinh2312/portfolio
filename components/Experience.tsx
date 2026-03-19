"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import SectionGlow from "@/components/SectionGlow";
import FloatingParticles from "@/components/FloatingParticles";

const bullets = [
  "Worked on real-world data preprocessing, cleaning, and visualization tasks",
  "Built and evaluated machine learning models using scikit-learn and Pandas",
  "Gained hands-on experience applying ML algorithms to structured datasets",
  "Completed certified training in data science and machine learning workflows",
];

const tags = ["Python", "Pandas", "scikit-learn", "NumPy", "Matplotlib", "Jupyter"];

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="experience"
      style={{ background: "var(--bg2)", position: "relative", zIndex: 1, overflow: "hidden" }}
    >
      {/* Immersive background glow */}
      <SectionGlow color="rgba(108,99,255,0.08)" />
      <FloatingParticles
        count={14}
        colors={["rgba(108,99,255,0.55)", "rgba(56,189,248,0.4)", "rgba(167,139,250,0.45)"]}
        zIndex={0}
      />

      <div className="container-custom" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <div className="section-eyebrow">Work Experience</div>
          <h2 className="section-title">Internship</h2>
          <p className="section-desc">
            Hands-on industry exposure in data science and machine learning.
          </p>
        </motion.div>

        {/* Timeline */}
        <div style={{ position: "relative", paddingLeft: "36px", maxWidth: "720px" }}>
          {/* Animated vertical line */}
          <motion.div
            initial={{ scaleY: 0 }}
            animate={inView ? { scaleY: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            style={{
              position: "absolute",
              left: 0,
              top: "8px",
              bottom: "8px",
              width: "1px",
              background: "linear-gradient(to bottom, var(--accent), var(--accent3), transparent)",
              transformOrigin: "top",
            }}
          />

          {/* Experience card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            {/* Animated dot */}
            <motion.div
              animate={{ boxShadow: ["0 0 0 3px rgba(108,99,255,0.2)", "0 0 0 8px rgba(108,99,255,0.05)", "0 0 0 3px rgba(108,99,255,0.2)"] }}
              transition={{ duration: 2.5, repeat: Infinity }}
              style={{
                position: "absolute",
                left: "-6px",
                top: "6px",
                width: "12px",
                height: "12px",
                borderRadius: "50%",
                background: "linear-gradient(135deg, var(--accent), var(--accent3))",
              }}
            />

            <div style={{ fontSize: "clamp(10px, 1.1vw, 11px)", color: "var(--text3)", marginBottom: "8px", fontWeight: 500, letterSpacing: "1px", textTransform: "uppercase" }}>
              2024 · Certified
            </div>

            <div
              style={{
                fontFamily: "var(--font-syne), sans-serif",
                fontSize: "clamp(18px, 2.2vw, 22px)",
                fontWeight: 700,
                marginBottom: "4px",
                letterSpacing: "-0.4px",
              }}
            >
              Data Science &amp; ML Intern
            </div>
            <div style={{ fontSize: "clamp(12px, 1.4vw, 14px)", color: "var(--accent2)", marginBottom: "20px" }}>
              Data Science Internship Program
            </div>

            {/* Bullets */}
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "10px", marginBottom: "28px" }}>
              {bullets.map((bullet, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -16 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                  style={{
                    fontSize: "clamp(13px, 1.5vw, 14px)",
                    color: "var(--text2)",
                    fontWeight: 300,
                    paddingLeft: "18px",
                    position: "relative",
                    lineHeight: 1.75,
                  }}
                >
                  <motion.span
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                    style={{ position: "absolute", left: 0, color: "var(--accent)", fontWeight: 700 }}
                  >
                    →
                  </motion.span>
                  {bullet}
                </motion.li>
              ))}
            </ul>

            {/* Tech tags */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.9 }}
              style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}
            >
              {tags.map((tag) => (
                <motion.span
                  key={tag}
                  whileHover={{ y: -2, borderColor: "var(--accent2)" }}
                  style={{
                    fontSize: "clamp(11px, 1.2vw, 12px)",
                    background: "rgba(108,99,255,0.08)",
                    border: "1px solid rgba(108,99,255,0.2)",
                    color: "var(--accent2)",
                    padding: "4px 12px",
                    borderRadius: "50px",
                    fontWeight: 500,
                    transition: "all 0.2s",
                    minHeight: "32px",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  {tag}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
