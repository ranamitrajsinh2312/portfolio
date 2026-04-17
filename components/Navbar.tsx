"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "About",      href: "#about" },
  { name: "Skills",     href: "#skills" },
  { name: "Projects",   href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Education",  href: "#education" },
];

const socialIcons = [
  {
    name: "GitHub",
    href: "https://github.com/ranamitrajsinh2312",
    color: "#ffffff",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/rana-mitrajsinh-b06a45376",
    color: "#0077b5",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    name: "Gmail",
    href: "mailto:ranamitrasinhj2312@gmail.com",
    color: "#ea4335",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
        <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z" />
      </svg>
    ),
  },
];

export default function Navbar() {
  const [scrolled, setScrolled]     = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Throttle scroll handler with rAF + passive listener
  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setScrolled(window.scrollY > 20);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setIsMenuOpen(false);
      }
    };
    if (isMenuOpen) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMenuOpen]);

  // JS smooth scroll for anchor link clicks only (not global CSS scroll-behavior)
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (!href.startsWith("#")) return;
    e.preventDefault();
    setIsMenuOpen(false);
    const el = document.querySelector(href) as HTMLElement | null;
    if (el) {
      window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 64, behavior: "smooth" });
    }
  };

  const handleLinkClick = () => setIsMenuOpen(false);

  return (
    <div ref={menuRef} style={{ position: "fixed", top: 0, left: 0, width: "100%", zIndex: 1000 }}>
      {/* ── Main navbar bar ── */}
      <motion.nav
        className="navbar"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        style={{
          width: "100%",
          height: "64px",
          padding: "0 60px",
          background: scrolled ? "rgba(10,10,15,0.80)" : "transparent",
          backdropFilter: scrolled ? "blur(18px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(18px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(255,255,255,0.08)" : "none",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          transition: "background 0.4s cubic-bezier(0.4,0,0.2,1), backdrop-filter 0.4s, border-color 0.4s",
          willChange: "transform",
        }}
      >
        {/* ── Logo ── */}
        <motion.a
          href="#"
          whileHover={{ scale: 1.05 }}
          style={{
            fontFamily: "var(--font-syne), sans-serif",
            fontSize: "22px",
            fontWeight: 800,
            color: "var(--text)",
            textDecoration: "none",
            display: "flex",
            alignItems: "center",
            gap: "8px",
            flexShrink: 0,
          }}
        >
          <span
            style={{
              width: "32px",
              height: "32px",
              borderRadius: "8px",
              background: "linear-gradient(135deg, var(--accent), var(--accent3))",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "14px",
              color: "#fff",
              fontWeight: 800,
              boxShadow: "0 4px 12px rgba(108,99,255,0.3)",
            }}
          >
            M
          </span>
          <span className="gradient-text">Mitrajsinh.</span>
        </motion.a>

        {/* ── Desktop: center nav links (lg+) ── */}
        <div
          className="navbar-links"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "32px",
            background: scrolled ? "rgba(255,255,255,0.03)" : "transparent",
            padding: scrolled ? "8px 24px" : "0",
            borderRadius: "50px",
            border: scrolled ? "1px solid rgba(255,255,255,0.05)" : "none",
            transition: "all 0.3s",
          }}
        >
          {navLinks.map((link, i) => (
            <motion.a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + i * 0.1 }}
              whileHover={{ y: -2 }}
              style={{
                fontSize: "14px",
                fontWeight: 500,
                color: "var(--text2)",
                textDecoration: "none",
                transition: "color 0.2s",
                whiteSpace: "nowrap",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text2)")}
            >
              {link.name}
            </motion.a>
          ))}
        </div>

        {/* ── Right: social icons + CTA ── */}
        <div
          className="navbar-right"
          style={{ display: "flex", alignItems: "center", gap: "16px", flexShrink: 0 }}
        >
          {/* Social icon buttons — hidden on mobile (< 640px) */}
          <div className="navbar-social" style={{ display: "flex", gap: "8px", alignItems: "center" }}>
            {socialIcons.map((icon, i) => (
              <motion.a
                key={icon.name}
                href={icon.href}
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + i * 0.1 }}
                whileHover={{
                  y: -3,
                  scale: 1.1,
                  color: icon.color,
                  filter: `drop-shadow(0 0 8px ${icon.color}60)`,
                }}
                style={{
                  color: "var(--text3)",
                  transition: "all 0.2s",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "36px",
                  height: "36px",
                  borderRadius: "8px",
                  minWidth: "44px",
                  minHeight: "44px",
                }}
              >
                {icon.svg}
              </motion.a>
            ))}
          </div>

          {/* Let's Talk pill — always visible */}
          <motion.a
            href="mailto:ranamitrasinhj2312@gmail.com"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 8px 24px rgba(108,99,255,0.4)",
            }}
            whileTap={{ scale: 0.95 }}
            style={{
              background: "var(--accent)",
              color: "#fff",
              padding: "10px 20px",
              borderRadius: "50px",
              fontSize: "14px",
              fontWeight: 500,
              textDecoration: "none",
              boxShadow: "0 4px 12px rgba(108,99,255,0.2)",
              whiteSpace: "nowrap",
              minHeight: "44px",
              display: "flex",
              alignItems: "center",
            }}
          >
            Let&apos;s Talk
          </motion.a>

          {/* Hamburger — mobile only (< 640px) */}
          <button
            className="navbar-hamburger"
            onClick={() => setIsMenuOpen((v) => !v)}
            aria-label="Toggle navigation menu"
            aria-expanded={isMenuOpen}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              color: "var(--text)",
              display: "none", // shown via CSS at < 640px
              alignItems: "center",
              justifyContent: "center",
              width: "44px",
              height: "44px",
              borderRadius: "8px",
              padding: 0,
              flexShrink: 0,
            }}
          >
            <AnimatePresence mode="wait" initial={false}>
              {isMenuOpen ? (
                <motion.svg
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  width="24"
                  height="24"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </motion.svg>
              ) : (
                <motion.svg
                  key="hamburger"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  width="24"
                  height="24"
                >
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </motion.svg>
              )}
            </AnimatePresence>
          </button>
        </div>
      </motion.nav>

      {/* ── Mobile dropdown menu ── */}
      <motion.div
        initial={false}
        animate={isMenuOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        style={{
          overflow: "hidden",
          background: "rgba(10,10,15,0.92)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          borderBottom: "1px solid rgba(255,255,255,0.08)",
          // Only show on mobile
          display: "none",
        }}
        className="navbar-mobile-menu"
      >
        <div style={{ padding: "16px 20px 20px" }}>
          {/* Nav links */}
          <div style={{ display: "flex", flexDirection: "column", gap: "4px", marginBottom: "20px" }}>
            {navLinks.map((link, i) => (
              <motion.a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                initial={{ opacity: 0, x: -16 }}
                animate={isMenuOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: -16 }}
                transition={{ delay: isMenuOpen ? i * 0.06 : 0, duration: 0.25 }}
                style={{
                  fontSize: "16px",
                  fontWeight: 500,
                  color: "var(--text2)",
                  textDecoration: "none",
                  padding: "12px 8px",
                  borderRadius: "10px",
                  transition: "color 0.2s, background 0.2s",
                  display: "block",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "var(--text)";
                  e.currentTarget.style.background = "rgba(255,255,255,0.04)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "var(--text2)";
                  e.currentTarget.style.background = "transparent";
                }}
              >
                {link.name}
              </motion.a>
            ))}
          </div>

          {/* Divider */}
          <div style={{ height: "1px", background: "rgba(255,255,255,0.07)", marginBottom: "16px" }} />

          {/* Social icons row */}
          <div style={{ display: "flex", gap: "12px" }}>
            {socialIcons.map((icon, i) => (
              <motion.a
                key={icon.name}
                href={icon.href}
                target="_blank"
                rel="noreferrer"
                onClick={handleLinkClick}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isMenuOpen ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ delay: isMenuOpen ? 0.3 + i * 0.08 : 0, duration: 0.25 }}
                whileHover={{ scale: 1.15, color: icon.color }}
                style={{
                  color: "var(--text3)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "44px",
                  height: "44px",
                  borderRadius: "10px",
                  border: "1px solid rgba(255,255,255,0.08)",
                  background: "rgba(255,255,255,0.02)",
                  transition: "all 0.2s",
                }}
              >
                {icon.svg}
              </motion.a>
            ))}
          </div>
        </div>
      </motion.div>

      {/* ── Responsive CSS ── */}
      <style>{`
        /* Tablet: hide nav text links, show icons + CTA */
        @media (max-width: 1024px) {
          .navbar { padding: 0 32px !important; }
          .navbar-links { display: none !important; }
        }

        /* Mobile: hide social icons, show hamburger + mobile menu */
        @media (max-width: 640px) {
          .navbar { padding: 0 16px !important; }
          .navbar-social { display: none !important; }
          .navbar-hamburger { display: flex !important; }
          .navbar-mobile-menu { display: block !important; }
        }
      `}</style>
    </div>
  );
}
