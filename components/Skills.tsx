"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { skillsData, type SkillCategory, type Skill } from "@/data/skills";
import SectionGlow from "@/components/SectionGlow";

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="skills" style={{ position: "relative", zIndex: 1, background: "rgba(10,10,15,0.6)", overflow: "hidden" }}>
      {/* Immersive background glow */}
      <SectionGlow color="rgba(56,189,248,0.08)" />

      <div className="container-custom" ref={ref}>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="section-eyebrow">Technical Arsenal</div>
          <h2 className="section-title">Skills &amp; Stacks</h2>
          <div className="section-divider" />
          <p className="section-desc" style={{ marginBottom: "60px" }}>
            Comprehensive expertise in modern engineering technologies and design systems.
          </p>
        </motion.div>

        {/* Skills Grid — responsive via CSS class */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: "24px",
          }}
          className="skills-grid"
        >
          {skillsData.map((cat: SkillCategory, i: number) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              whileHover={{ y: -8, scale: 1.01 }}
              className="card-glow"
              style={{
                background: "rgba(17,17,24,0.6)",
                border: "1px solid rgba(255,255,255,0.06)",
                borderRadius: "20px",
                padding: "clamp(20px, 3vw, 36px)",
                transition: "all 0.35s cubic-bezier(0.4, 0, 0.2, 1)",
                position: "relative",
                zIndex: 2,
                overflow: "hidden",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
              }}
            >
              {/* Category Icon and Title */}
              <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "28px" }}>
                <div
                  style={{
                    width: "48px", height: "48px", borderRadius: "14px",
                    background: `${cat.headerColor}15`, display: "flex",
                    alignItems: "center", justifyContent: "center",
                    color: cat.headerColor, border: `1px solid ${cat.headerColor}30`,
                    boxShadow: `0 8px 20px ${cat.headerColor}10`,
                    flexShrink: 0,
                  }}
                >
                  <div
                    style={{ width: "22px", height: "22px" }}
                    dangerouslySetInnerHTML={{ __html: cat.headerSvg }}
                  />
                </div>
                <h3 style={{
                  fontSize: "clamp(16px, 2vw, 19px)",
                  fontWeight: 700,
                  color: "var(--text)",
                  letterSpacing: "-0.4px",
                }}>
                  {cat.category}
                </h3>
              </div>

              {/* Skills Row */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                {cat.skills.map((skill: Skill, si: number) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: (i * 0.12) + (si * 0.05) }}
                    whileHover={{ scale: 1.08, backgroundColor: "rgba(255,255,255,0.06)", borderColor: skill.color }}
                    style={{
                      display: "inline-flex", alignItems: "center", gap: "6px",
                      padding: "5px 12px 5px 8px", borderRadius: "10px",
                      border: "1px solid rgba(255,255,255,0.07)",
                      background: "rgba(255,255,255,0.02)",
                      color: "var(--text2)",
                      fontSize: "clamp(10px, 1.2vw, 13px)",
                      fontWeight: 500,
                      transition: "all 0.25s ease-out", cursor: "default",
                    }}
                  >
                    <svg viewBox="0 0 24 24" fill={skill.color} width="14" height="14">
                      <path d={skill.svgPath} />
                    </svg>
                    {skill.name}
                  </motion.div>
                ))}
              </div>

              {/* Decorative accent corner */}
              <div style={{
                position: "absolute", top: 0, right: 0,
                width: "40px", height: "40px",
                background: `linear-gradient(225deg, ${cat.headerColor}20, transparent)`,
                borderRadius: "0 0 0 100%",
                pointerEvents: "none", zIndex: -1,
              }} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
