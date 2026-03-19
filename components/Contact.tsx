"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

import SectionGlow from "@/components/SectionGlow";

const contactLinks = [
  {
    label: "Email Me",
    href: "mailto:ranamitrasinhj2312@gmail.com",
    color: "#ea4335",
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="16" height="16">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,12 2,6" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/rana-mitrajsinh-b06a45376",
    target: "_blank",
    color: "#0077b5",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "GitHub",
    href: "https://github.com/ranamitrajsinh2312",
    target: "_blank",
    color: "#ffffff",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
      </svg>
    ),
  },
  {
    label: "Call Me",
    href: "tel:8401447354",
    color: "#34d399",
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="16" height="16">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.6 19.79 19.79 0 0 1 1.61 5.1 2 2 0 0 1 3.6 3h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 10.9a16 16 0 0 0 6.12 6.12l.92-.92a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 18.35z" />
      </svg>
    ),
  },
];

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="contact"
      style={{ background: "var(--bg2)", textAlign: "center", position: "relative", zIndex: 1, overflow: "hidden" }}
    >
      {/* Immersive background glow */}
      <SectionGlow color="rgba(108,99,255,0.08)" />

      <div className="container-custom" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
          className="section-eyebrow"
          style={{ textAlign: "center" }}
        >
          Get In Touch
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          style={{
            fontFamily: "var(--font-syne), sans-serif",
            fontSize: "clamp(36px, 5vw, 68px)",
            fontWeight: 800,
            letterSpacing: "clamp(-1px, -0.2vw, -2.5px)",
            lineHeight: 1.0,
            marginBottom: "20px",
          }}
        >
          Let&apos;s build
          <br />
          <motion.span
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
            style={{
              background: "linear-gradient(135deg, var(--accent2), var(--accent3), var(--pink), var(--accent2))",
              backgroundSize: "300% 300%",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              display: "inline-block",
            }}
          >
            something great.
          </motion.span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.22 }}
          style={{
            color: "var(--text2)",
            fontSize: "clamp(13px, 1.5vw, 17px)",
            fontWeight: 300,
            maxWidth: "440px",
            margin: "0 auto 44px",
            lineHeight: 1.8,
          }}
        >
          I&apos;m open to internships, freelance projects, and full-time roles.
          Feel free to reach out!
        </motion.p>

        {/* Contact buttons — responsive row that wraps on mobile */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.34 }}
          className="contact-buttons"
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "12px",
            flexWrap: "wrap",
          }}
        >
          {contactLinks.map((link, i) => (
            <motion.a
              key={link.label}
              href={link.href}
              target={(link as { target?: string }).target}
              rel={(link as { target?: string }).target ? "noreferrer" : undefined}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.4 + i * 0.08 }}
              whileHover={{ y: -4, scale: 1.04, borderColor: link.color, boxShadow: `0 12px 32px ${link.color}30` }}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                background: "var(--card)",
                border: "1px solid rgba(255,255,255,0.08)",
                color: "var(--text)",
                textDecoration: "none",
                padding: "13px 24px",
                borderRadius: "50px",
                fontSize: "clamp(12px, 1.4vw, 14px)",
                fontWeight: 400,
                transition: "border-color 0.2s, box-shadow 0.2s",
                minHeight: "44px",
              }}
            >
              {link.svg}
              {link.label}
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
