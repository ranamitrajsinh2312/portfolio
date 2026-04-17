"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface Chip {
  label: string;
  icon: React.ReactNode;
  color: string;
}

const chips: Chip[] = [
  {
    label: "Darshan University",
    color: "#a78bfa",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14">
        <path d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3zm-9 9.18V17l9 4.91L21 17v-4.82l-9 4.91-9-4.91z" />
      </svg>
    ),
  },
  {
    label: "Rajkot, Gujarat",
    color: "#38bdf8",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
      </svg>
    ),
  },
  {
    label: "Flutter",
    color: "#54c5f8",
    icon: (
      <svg viewBox="0 0 24 24" fill="#54c5f8" width="14" height="14">
        <path d="M14.314 0L2.3 12 6 15.7 21.684.013h-7.357zm.014 11.072L7.857 17.53l6.47 6.47H21.7l-6.46-6.468 6.46-6.46h-7.37z" />
      </svg>
    ),
  },
  {
    label: "React",
    color: "#61dafb",
    icon: (
      <svg viewBox="0 0 24 24" fill="#61dafb" width="14" height="14">
        <path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38a2.167 2.167 0 0 0-1.096-.278z" />
      </svg>
    ),
  },
  {
    label: "Node.js",
    color: "#68a063",
    icon: (
      <svg viewBox="0 0 24 24" fill="#68a063" width="14" height="14">
        <path d="M11.998 24c-.321 0-.641-.084-.924-.247l-2.938-1.737c-.44-.245-.225-.332-.08-.383.585-.203.703-.25 1.326-.604.065-.037.151-.023.218.017l2.256 1.339c.082.045.198.045.275 0l8.795-5.076c.082-.047.134-.141.134-.238V7.921c0-.099-.052-.19-.137-.242L12.13 2.608c-.081-.047-.189-.047-.27 0L3.07 7.679c-.087.05-.141.144-.141.242v10.148c0 .097.054.189.139.235l2.409 1.391c1.307.654 2.108-.116 2.108-.891V8.949c0-.143.114-.255.256-.255h1.115c.139 0 .255.112.255.255v10.855c0 1.745-.95 2.745-2.604 2.745-.508 0-.909 0-2.026-.551l-2.304-1.328A1.851 1.851 0 0 1 1.355 18.3V8.154c0-.66.351-1.273.921-1.604l8.796-5.082a1.851 1.851 0 0 1 1.849 0l8.794 5.082c.57.33.921.944.921 1.604V18.3c0 .659-.351 1.273-.921 1.604l-8.794 5.083a1.858 1.858 0 0 1-.923.013z" />
      </svg>
    ),
  },
  {
    label: "Python",
    color: "#3776ab",
    icon: (
      <svg viewBox="0 0 24 24" fill="#3776ab" width="14" height="14">
        <path d="M11.914.002c-.23 0-.461.01-.69.033-2.4.232-4.48 1.412-5.89 3.283-1.56 2.071-2.07 4.764-1.39 7.27.388 1.438 1.082 2.757 2.018 3.873L6 14.5l-.38 1.4c-.23.85.56 1.64 1.41 1.41l1.4-.38.036.027c1.116.935 2.435 1.63 3.873 2.018 2.506.68 5.199.17 7.27-1.39 1.871-1.41 3.051-3.49 3.283-5.89.232-2.4-.34-4.8-1.63-6.77C19.67 2.84 17.07 1.2 14.17.23 13.43.08 12.67.002 11.914.002z" />
      </svg>
    ),
  },
];

import SectionGlow from "@/components/SectionGlow";
import FloatingParticles from "@/components/FloatingParticles";

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" style={{ position: "relative", zIndex: 1, background: "rgba(10,10,15,0.4)", overflow: "hidden" }}>
      {/* Immersive background glow */}
      <SectionGlow color="rgba(108,99,255,0.08)" />
      <FloatingParticles
        count={6}
        colors={["rgba(108,99,255,0.55)", "rgba(167,139,250,0.5)", "rgba(244,114,182,0.35)"]}
        zIndex={0}
      />

      <div className="container-custom" ref={ref}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "80px",
            alignItems: "center",
          }}
          className="about-grid"
        >
          {/* Avatar side */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: -30 }}
            animate={inView ? { opacity: 1, scale: 1, x: 0 } : {}}
            transition={{ duration: 1.0 }}
            style={{ position: "relative" }}
            className="about-image-col"
          >
            <div className="card-glow animate-float" style={{ borderRadius: "24px" }}>
              <div
                style={{
                  position: "relative",
                  zIndex: 2, width: "100%", padding: "60px 20px",
                  background: "rgba(22,22,31,0.7)", backdropFilter: "blur(12px)",
                  WebkitBackdropFilter: "blur(12px)",
                  borderRadius: "24px", border: "1px solid rgba(255,255,255,0.08)",
                  display: "flex", flexDirection: "column",
                  alignItems: "center", justifyContent: "center", gap: "16px",
                  boxShadow: "0 24px 80px rgba(0,0,0,0.5)",
                }}
              >
                {/* Avatar circle */}
                <div
                  className="animate-glow-pulse"
                  style={{
                    width: "110px", height: "110px", borderRadius: "50%",
                    background: "linear-gradient(135deg, var(--accent), var(--accent3))",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontFamily: "var(--font-syne), sans-serif", fontSize: "36px",
                    fontWeight: 800, color: "#fff",
                  }}
                >
                  MR
                </div>
                <div style={{ textAlign: "center" }}>
                  <span style={{ fontSize: "clamp(14px, 1.5vw, 16px)", color: "var(--text)", fontWeight: 600, display: "block" }}>
                    Mitrajsinh Rana
                  </span>
                  <span style={{ fontSize: "clamp(10px, 1.1vw, 12px)", color: "var(--accent3)", letterSpacing: "1px", textTransform: "uppercase", fontWeight: 700 }}>
                    Full-Stack Engineer
                  </span>
                </div>

                {/* Tech dot indicator */}
                <div style={{ display: "flex", gap: "12px", marginTop: "12px" }}>
                  <style>{`
                    @keyframes dot-pulse { 0%,100%{opacity:0.4;transform:scale(1)} 50%{opacity:1;transform:scale(1.2)} }
                  `}</style>
                  {(["#61dafb", "#68a063", "#54c5f8", "#3776ab"] as string[]).map((c, i) => (
                    <div
                      key={i}
                      title="Active Developer"
                      style={{
                        width: "8px", height: "8px", borderRadius: "50%",
                        background: c, boxShadow: `0 0 10px ${c}`,
                        animation: `dot-pulse 1.5s ease-in-out infinite`,
                        animationDelay: `${i * 0.4}s`,
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Text side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="section-eyebrow">The Developer</div>
            <h2 className="section-title">
              Driven by curiosity,<br />
              refined by <span className="gradient-text">design.</span>
            </h2>
            <div className="section-divider" />
            <p style={{ color: "var(--text2)", fontWeight: 300, marginBottom: "18px", lineHeight: 1.9, fontSize: "clamp(13px, 1.5vw, 16.5px)" }}>
              I&apos;m a Computer Science undergraduate at Darshan University,
              Rajkot, bridging the gap between pixel-perfect design and high-performance server logic.
              With a foundation in <strong>Full-Stack development</strong> and <strong>Machine Learning</strong>, I enjoy solving complex architecture problems.
            </p>
            <p style={{ color: "var(--text2)", fontWeight: 300, marginBottom: "32px", lineHeight: 1.9, fontSize: "clamp(13px, 1.5vw, 16.5px)" }}>
              My background in Graphic Design allows me to visualize the complete user journey while writing clean, scalable code.
              I&apos;m currently looking for opportunities where I can push technical boundaries and build future-ready products.
            </p>

            {/* Chips staggered reveal */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
              {chips.map((chip, i) => (
                <motion.span
                  key={chip.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.5 + i * 0.08 }}
                  whileHover={{ y: -3, borderColor: chip.color, scale: 1.05 }}
                  style={{
                    display: "inline-flex", alignItems: "center", gap: "8px",
                    background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)",
                    color: "var(--text2)", fontSize: "clamp(11px, 1.2vw, 13px)", fontWeight: 500,
                    padding: "7px 14px 7px 10px", borderRadius: "10px",
                    transition: "border-color 0.3s, background 0.3s", cursor: "default",
                    minHeight: "36px",
                  }}
                >
                  <span style={{ display: "flex", padding: "4px", borderRadius: "6px", background: `${chip.color}15`, color: chip.color }}>
                    {chip.icon}
                  </span>
                  {chip.label}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
