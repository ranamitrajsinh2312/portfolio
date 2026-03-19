"use client";

import { motion } from "framer-motion";
import HeroCanvas from "@/components/HeroCanvas";

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/ranamitrajsinh2312",
    hoverBg: "linear-gradient(135deg, #24292e, #444)",
    hoverShadow: "rgba(36,41,46,0.6)",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/rana-mitrajsinh-b06a45376",
    hoverBg: "linear-gradient(135deg, #0077b5, #00a0dc)",
    hoverShadow: "rgba(0,119,181,0.5)",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "Gmail",
    href: "mailto:ranamitrasinhj2312@gmail.com",
    hoverBg: "linear-gradient(135deg, #ea4335, #fbbc05 60%, #ea4335)",
    hoverShadow: "rgba(234,67,53,0.45)",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
        <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z" />
      </svg>
    ),
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/919499710732",
    hoverBg: "linear-gradient(135deg, #25d366, #128c7e)",
    hoverShadow: "rgba(37,211,102,0.45)",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
      </svg>
    ),
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.0,
      delay: i * 0.15,
      ease: [0.21, 1.11, 0.81, 0.99],
    },
  }),
};

export default function Hero() {
  return (
    <section
      id="hero"
      className="hero-section"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        padding: "100px 60px 60px",
        maxWidth: "1440px",
        margin: "0 auto",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* ── Two-column grid ── */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "0.8fr 1.2fr",
          gap: "60px",
          alignItems: "center",
          width: "100%",
        }}
        className="hero-grid"
      >
        {/* ── LEFT — text content ── */}
        <div style={{ position: "relative" }}>
          {/* Available tag */}
          <motion.div
            custom={0}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              background: "rgba(108,99,255,0.1)",
              border: "1px solid rgba(108,99,255,0.15)",
              color: "var(--accent2)",
              fontSize: "clamp(11px, 1.2vw, 13px)",
              fontWeight: 500,
              padding: "7px 16px",
              borderRadius: "50px",
              marginBottom: "36px",
              width: "fit-content",
              boxShadow: "0 4px 15px rgba(108,99,255,0.05)",
            }}
          >
            <span className="animate-pulse-dot" style={{ width: "8px", height: "8px", background: "var(--green)", borderRadius: "50%", flexShrink: 0 }} />
            Available for opportunities
          </motion.div>

          {/* Name */}
          <motion.div custom={1} initial="hidden" animate="visible" variants={fadeUp}>
            <h1
              className="animate-float"
              style={{
                fontFamily: "var(--font-syne), sans-serif",
                fontSize: "clamp(40px, 8vw, 96px)",
                fontWeight: 800,
                lineHeight: 0.95,
                letterSpacing: "clamp(-1px, -0.3vw, -4px)",
                marginBottom: "28px",
              }}
            >
              Mitrajsinh
              <br />
              <span className="gradient-text" style={{ paddingBottom: "8px", display: "inline-block" }}>Rana.</span>
            </h1>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            custom={2}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            style={{
              fontSize: "clamp(14px, 2vw, 18px)",
              color: "var(--text2)",
              maxWidth: "540px",
              lineHeight: 1.8,
              marginBottom: "40px",
              fontWeight: 300,
            }}
            className="hero-subtitle"
          >
            A Multi-Disciplinary{" "}
            <strong style={{ color: "var(--text)", fontWeight: 500 }}>
              Full-Stack Developer
            </strong>{" "}
            and ML Enthusiast, obsessed with detail and high-impact digital experiences.
            Currently studying at{" "}
            <strong style={{ color: "var(--accent3)", fontWeight: 500 }}>
              Darshan University, Rajkot
            </strong>
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            custom={3}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="hero-cta-row"
            style={{ display: "flex", gap: "16px", flexWrap: "wrap", marginBottom: "48px" }}
          >
            <motion.a
              href="#projects"
              whileHover={{ y: -5, scale: 1.02, boxShadow: "0 20px 40px rgba(108,99,255,0.4)" }}
              whileTap={{ scale: 0.98 }}
              style={{
                background: "var(--accent)", color: "#fff",
                padding: "15px 32px", borderRadius: "50px",
                fontSize: "clamp(13px, 1.5vw, 15px)", fontWeight: 600,
                textDecoration: "none", display: "inline-flex",
                alignItems: "center", gap: "10px",
                transition: "box-shadow 0.3s",
                minHeight: "44px",
              }}
            >
              Explore Work
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/>
              </svg>
            </motion.a>

            <motion.a
              href="mailto:ranamitrasinhj2312@gmail.com"
              whileHover={{ y: -5, borderColor: "var(--accent3)", color: "var(--accent3)", transform: "scale(1.02)" }}
              whileTap={{ scale: 0.98 }}
              style={{
                background: "rgba(255,255,255,0.03)", color: "var(--text)",
                padding: "15px 32px", borderRadius: "50px",
                fontSize: "clamp(13px, 1.5vw, 15px)", fontWeight: 500,
                textDecoration: "none", border: "1px solid rgba(255,255,255,0.1)",
                display: "inline-flex", alignItems: "center", gap: "10px",
                transition: "all 0.3s",
                minHeight: "44px",
              }}
            >
              Contact Me
            </motion.a>
          </motion.div>

          {/* Social icons row */}
          <motion.div
            custom={4} initial="hidden" animate="visible" variants={fadeUp}
            style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}
          >
            <div style={{ paddingRight: "8px", borderRight: "1px solid rgba(255,255,255,0.1)", marginRight: "4px" }}>
              <span style={{ fontSize: "11px", color: "var(--text3)", letterSpacing: "2.5px", textTransform: "uppercase", fontWeight: 700 }}>Follow</span>
            </div>
            {socialLinks.map((icon, idx) => (
              <motion.a
                key={icon.label} href={icon.href} target="_blank" rel="noreferrer"
                whileHover={{ y: -8, scale: 1.2, boxShadow: `0 10px 20px ${icon.hoverShadow}` }}
                transition={{ type: "spring", stiffness: 300, damping: 12 }}
                style={{
                  width: "42px", height: "42px", borderRadius: "12px",
                  background: "var(--card)", border: "1px solid var(--border)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  color: "var(--text2)", transition: "background 0.3s, color 0.3s",
                  minWidth: "44px", minHeight: "44px",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.background = icon.hoverBg; e.currentTarget.style.color = "#fff"; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = "var(--card)"; e.currentTarget.style.color = "var(--text2)"; }}
              >
                {icon.svg}
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* ── RIGHT — Animated Hero Canvas ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
          style={{ position: "relative", height: "700px" }}
          className="hero-spline hero-right"
        >
          {/* Immersion Glow behind canvas */}
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.35, 0.2] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            style={{
              position: "absolute", inset: "-60px",
              background: "radial-gradient(circle at center, rgba(108,99,255,0.12) 0%, rgba(56,189,248,0.05) 40%, transparent 75%)",
              pointerEvents: "none", zIndex: 0,
            }}
          />
          <HeroCanvas />
        </motion.div>
      </div>

      {/* Floating scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="hero-scroll-indicator"
        style={{
          position: "absolute", bottom: "40px", left: "54px",
          display: "flex", alignItems: "center", gap: "12px",
          color: "var(--text3)", fontSize: "11px", letterSpacing: "1px",
          textTransform: "uppercase", fontWeight: 600, cursor: "default",
        }}
      >
        <div style={{ width: "40px", height: "1px", background: "linear-gradient(to right, var(--accent), transparent)" }} />
        Scroll Down
      </motion.div>

      {/* Responsive overrides */}
      <style>{`
        @media (max-width: 640px) {
          .hero-subtitle { max-width: 90% !important; }
          .hero-cta-row { flex-direction: column !important; }
          .hero-cta-row a { width: 100% !important; justify-content: center !important; }
          .hero-scroll-indicator { display: none !important; }
        }
      `}</style>
    </section>
  );
}
