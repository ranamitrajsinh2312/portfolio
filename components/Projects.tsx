"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { projectsData, type Project } from "@/data/projects";
import SectionGlow from "@/components/SectionGlow";

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" style={{ position: "relative", zIndex: 1, background: "var(--bg)" }}>
      {/* Immersive background glow */}
      <SectionGlow color="rgba(167,139,250,0.08)" />

      <div className="container-custom" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="section-eyebrow">Project Portfolio</div>
          <h2 className="section-title">Selected Works</h2>
          <div className="section-divider" />
          <p className="section-desc">
            Explore my latest projects, ranging from AI applications to full-stack platforms.
          </p>
        </motion.div>

        {/* Project Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "32px",
          }}
          className="projects-grid"
        >
          {projectsData.map((project: Project, i: number) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: i * 0.15, ease: "easeOut" }}
              whileHover={{ y: -12, scale: 1.01 }}
              className="card-glow"
              style={{
                gridColumn: project.featured ? "span 2" : "span 1",
                background: "rgba(17,17,24,0.6)",
                border: "1px solid rgba(255,255,255,0.06)",
                borderRadius: "24px",
                padding: project.featured ? "48px" : "40px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                gap: "32px",
                transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                position: "relative",
                zIndex: 2,
                overflow: "hidden",
                backdropFilter: "blur(20px)",
                cursor: "pointer",
              }}
            >
              {/* Content side */}
              <div style={{ position: "relative", zIndex: 2 }}>
                <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "20px" }}>
                  <motion.span
                    animate={{ opacity: [0.7, 1, 0.7] }}
                    transition={{ duration: 3, repeat: Infinity, delay: i * 0.4 }}
                    style={{
                      padding: "5px 14px",
                      borderRadius: "50px",
                      fontSize: "12px",
                      fontWeight: 700,
                      background: "rgba(108,99,255,0.1)",
                      color: "var(--accent2)",
                      border: "1px solid rgba(108,99,255,0.2)",
                      letterSpacing: "0.5px",
                    }}
                  >
                    {project.badge}
                  </motion.span>
                </div>

                <h3
                  style={{
                    fontFamily: "var(--font-syne), sans-serif",
                    fontSize: project.featured ? "36px" : "28px",
                    fontWeight: 700,
                    marginBottom: "16px",
                    letterSpacing: "-0.8px",
                    lineHeight: 1.1,
                  }}
                >
                  {project.title}
                </h3>
                <p
                  style={{
                    color: "var(--text2)",
                    fontSize: project.featured ? "16px" : "15px",
                    lineHeight: 1.75,
                    marginBottom: "36px",
                    fontWeight: 300,
                    maxWidth: "540px",
                  }}
                >
                  {project.description}
                </p>

                {/* Stacks */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginBottom: "36px" }}>
                  {project.stack.map((tech: string, ti: number) => (
                    <motion.span
                      key={tech}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.3, delay: 0.6 + i * 0.1 + ti * 0.05 }}
                      style={{
                        padding: "5px 12px", borderRadius: "8px",
                        background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)",
                        fontSize: "12px", color: "var(--text3)", fontWeight: 500,
                      }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* Footer row with links */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  position: "relative",
                  zIndex: 2,
                }}
              >
                <div style={{ display: "flex", gap: "20px" }}>
                  {project.github && (
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      whileHover={{ scale: 1.2, color: "var(--text)" }}
                      style={{ color: "var(--text2)", transition: "color 0.2s" }}
                      title="GitHub Repository"
                    >
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                      </svg>
                    </motion.a>
                  )}
                </div>

                <motion.div
                  whileHover={{ x: 5 }}
                  style={{
                    display: "flex", alignItems: "center", gap: "8px",
                    color: "var(--accent3)", fontSize: "14px", fontWeight: 700,
                  }}
                >
                  View Details
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
                  </svg>
                </motion.div>
              </div>

              {/* Shimmer overlay */}
              <motion.div
                animate={{ x: ["-100%", "200%"] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear", repeatDelay: 3 }}
                style={{
                  position: "absolute", top: 0, left: 0, width: "30%", height: "100%",
                  background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.02), transparent)",
                  transform: "skewX(-20deg)", pointerEvents: "none", zIndex: 1,
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 900px) {
          .projects-grid {
            grid-template-columns: 1fr !important;
          }
          .card-glow {
            grid-column: span 1 !important;
          }
        }
      `}</style>
    </section>
  );
}
