"use client";

import { useEffect, useRef } from "react";

const TECH = [
  { label: "React",      color: "#61dafb" },
  { label: "Flutter",    color: "#54c5f8" },
  { label: "Python",     color: "#3776ab" },
  { label: "Node.js",    color: "#68a063" },
  { label: "MongoDB",    color: "#47a248" },
  { label: "TypeScript", color: "#3178c6" },
  { label: "scikit-learn", color: "#f7931e" },
  { label: "Git",        color: "#f05032" },
];

const CODE_SNIPPETS = [
  "const dev = new Developer()",
  "flutter run --release",
  "python train_model.py",
  "npm run build",
  "git push origin main",
  "db.find({ active: true })",
  "import pandas as pd",
  "<Component props={...} />",
];

interface Orb {
  angle: number; speed: number;
  rx: number; ry: number;
  color: string; size: number;
  trail: { x: number; y: number }[];
}

interface Mote {
  x: number; y: number;
  vx: number; vy: number;
  size: number; alpha: number;
  color: string;
}

interface Badge {
  label: string; color: string;
  bx: number; by: number;
  vx: number; vy: number;
  orbitAngle: number; orbitR: number;
}

interface CodeLine {
  text: string;
  x: number; y: number;
  alpha: number; life: number;
}

export default function HeroCanvas() {
  const ref = useRef<HTMLCanvasElement>(null);
  const raf = useRef(0);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;
    let W = 0, H = 0;
    let t = 0;

    function resize() {
      W = canvas!.offsetWidth;
      H = canvas!.offsetHeight;
      canvas!.width  = W * devicePixelRatio;
      canvas!.height = H * devicePixelRatio;
      ctx.scale(devicePixelRatio, devicePixelRatio);
    }
    resize();
    window.addEventListener("resize", resize);

    // ── Central sphere helpers ──────────────────────────────────────────────
    const CX = () => W / 2;
    const CY = () => H * 0.46;
    const R  = () => Math.min(W, H) * 0.26;

    // ── Orbiting glowing dots ───────────────────────────────────────────────
    const orbs: Orb[] = [
      { angle: 0,              speed:  0.013, rx: 1.45, ry: 0.38, color: "#61dafb", size: 6, trail: [] },
      { angle: Math.PI * 0.7,  speed: -0.010, rx: 1.28, ry: 0.28, color: "#a78bfa", size: 5, trail: [] },
      { angle: Math.PI * 1.3,  speed:  0.008, rx: 1.60, ry: 0.45, color: "#34d399", size: 4, trail: [] },
      { angle: Math.PI * 0.35, speed: -0.012, rx: 1.50, ry: 0.35, color: "#f472b6", size: 5, trail: [] },
      { angle: Math.PI * 0.95, speed:  0.009, rx: 1.35, ry: 0.42, color: "#fbbf24", size: 4, trail: [] },
    ];

    // ── Background motes ────────────────────────────────────────────────────
    const motes: Mote[] = Array.from({ length: 55 }, () => ({
      x: Math.random() * 800, y: Math.random() * 600,
      vx: (Math.random() - .5) * .25, vy: (Math.random() - .5) * .25,
      size: Math.random() * 1.8 + .4,
      alpha: Math.random() * .45 + .05,
      color: ["#6c63ff","#38bdf8","#a78bfa","#34d399"][Math.floor(Math.random()*4)],
    }));

    // ── Tech badges in circular orbit ───────────────────────────────────────
    const badges: Badge[] = TECH.map((t, i) => {
      const a = (i / TECH.length) * Math.PI * 2;
      return {
        label: t.label, color: t.color,
        bx: 0, by: 0, vx: 0, vy: 0,
        orbitAngle: a,
        orbitR: 0, // set in update
      };
    });

    // ── Floating code snippets ───────────────────────────────────────────────
    const code: CodeLine[] = [];
    let spawnIn = 80;

    // ── Helpers ──────────────────────────────────────────────────────────────
    function rr(
      c: CanvasRenderingContext2D,
      x: number, y: number, w: number, h: number, r: number
    ) {
      c.beginPath();
      c.moveTo(x + r, y);
      c.lineTo(x + w - r, y); c.arcTo(x+w, y,   x+w, y+r,   r);
      c.lineTo(x + w, y+h-r); c.arcTo(x+w, y+h, x+w-r, y+h, r);
      c.lineTo(x + r, y+h);   c.arcTo(x,   y+h, x, y+h-r,   r);
      c.lineTo(x, y + r);     c.arcTo(x,   y,   x+r, y,      r);
      c.closePath();
    }

    function hex(alpha: number) {
      return Math.round(alpha * 255).toString(16).padStart(2, "0");
    }

    // ── Update ───────────────────────────────────────────────────────────────
    function update() {
      t++;
      const r = R(), cx = CX(), cy = CY();

      // orbs
      orbs.forEach(o => {
        o.angle += o.speed;
        const px = cx + Math.cos(o.angle) * r * o.rx;
        const py = cy + Math.sin(o.angle) * r * o.ry;
        o.trail.push({ x: px, y: py });
        if (o.trail.length > 22) o.trail.shift();
      });

      // motes
      motes.forEach(m => {
        m.x += m.vx; m.y += m.vy;
        if (m.x < 0) m.x = W; if (m.x > W) m.x = 0;
        if (m.y < 0) m.y = H; if (m.y > H) m.y = 0;
      });

      // badges — slow orbit, tight radius so they stay in-canvas
      const baseR = Math.min(W, H) * 0.28;
      badges.forEach((b, i) => {
        b.orbitAngle += 0.003 * (i % 2 === 0 ? 1 : -1);
        b.orbitR = baseR + Math.sin(t * 0.01 + i) * baseR * 0.05;
        b.bx = cx + Math.cos(b.orbitAngle) * b.orbitR;
        b.by = cy + Math.sin(b.orbitAngle) * b.orbitR * 0.45;
      });

      // code lines
      spawnIn--;
      if (spawnIn <= 0) {
        code.push({
          text: CODE_SNIPPETS[Math.floor(Math.random() * CODE_SNIPPETS.length)],
          x: 10 + Math.random() * (W - 200),
          y: H + 10,
          alpha: .55, life: 0,
        });
        spawnIn = 100 + Math.random() * 60;
      }
      code.forEach(c => { c.y -= .45; c.life++; if (c.life > 220) c.alpha -= .008; });
      for (let i = code.length - 1; i >= 0; i--) {
        if (code[i].alpha <= 0) code.splice(i, 1);
      }
    }

    // ── Draw ─────────────────────────────────────────────────────────────────
    function drawSphere(cx: number, cy: number, r: number) {
      // Outer glow halo
      const halo = ctx.createRadialGradient(cx, cy, r * .7, cx, cy, r * 1.9);
      halo.addColorStop(0, "rgba(108,99,255,.14)");
      halo.addColorStop(.5, "rgba(56,189,248,.06)");
      halo.addColorStop(1, "transparent");
      ctx.beginPath(); ctx.arc(cx, cy, r * 1.9, 0, Math.PI * 2);
      ctx.fillStyle = halo; ctx.fill();

      // Sphere body
      const body = ctx.createRadialGradient(cx - r*.28, cy - r*.28, r*.05, cx, cy, r);
      body.addColorStop(0,   "rgba(140,120,255,.60)");
      body.addColorStop(.45, "rgba(108, 99,255,.25)");
      body.addColorStop(1,   "rgba( 56,189,248,.08)");
      ctx.beginPath(); ctx.arc(cx, cy, r, 0, Math.PI * 2);
      ctx.fillStyle = body; ctx.fill();

      // Border ring
      ctx.beginPath(); ctx.arc(cx, cy, r, 0, Math.PI * 2);
      ctx.strokeStyle = "rgba(167,139,250,.45)";
      ctx.lineWidth = 1.5; ctx.stroke();

      // Specular highlight
      const spec = ctx.createRadialGradient(cx-r*.3, cy-r*.32, 0, cx-r*.3, cy-r*.32, r*.22);
      spec.addColorStop(0, "rgba(255,255,255,.28)");
      spec.addColorStop(1, "transparent");
      ctx.beginPath(); ctx.arc(cx-r*.3, cy-r*.32, r*.22, 0, Math.PI*2);
      ctx.fillStyle = spec; ctx.fill();

      // Latitude ellipses
      for (let i = 1; i <= 4; i++) {
        const ratio = (i / 5) * 2 - 1;
        const lineY  = cy + ratio * r * .9;
        const hw = Math.sqrt(Math.max(0, r*r - (lineY - cy)**2));
        if (hw < 4) continue;
        ctx.beginPath();
        ctx.ellipse(cx, lineY, hw, hw * .18, 0, 0, Math.PI*2);
        ctx.strokeStyle = `rgba(167,139,250,${.06 + i*.025})`;
        ctx.lineWidth = .8; ctx.stroke();
      }

      // Equator
      ctx.beginPath();
      ctx.ellipse(cx, cy, r, r*.22, 0, 0, Math.PI*2);
      ctx.strokeStyle = "rgba(56,189,248,.22)";
      ctx.lineWidth = 1; ctx.stroke();

      // Center monogram
      ctx.textAlign = "center"; ctx.textBaseline = "middle";
      ctx.font = `800 ${Math.round(r*.34)}px Syne, sans-serif`;
      ctx.fillStyle  = "rgba(240,240,248,.92)";
      ctx.fillText("MR", cx, cy - r*.04);
      ctx.font = `300 ${Math.round(r*.14)}px DM Sans, sans-serif`;
      ctx.fillStyle  = "rgba(167,139,250,.80)";
      ctx.fillText("Full-Stack Dev", cx, cy + r*.24);
      ctx.textAlign = "left"; ctx.textBaseline = "alphabetic";
    }

    function drawOrb(o: Orb, cx: number, cy: number, r: number) {
      const a = r * o.rx, b = r * o.ry;
      const px = cx + Math.cos(o.angle) * a;
      const py = cy + Math.sin(o.angle) * b;

      // Dashed orbit ring
      ctx.beginPath();
      ctx.ellipse(cx, cy, a, b, 0, 0, Math.PI*2);
      ctx.setLineDash([3, 7]);
      ctx.strokeStyle = o.color + "20";
      ctx.lineWidth = 1; ctx.stroke();
      ctx.setLineDash([]);

      // Trail
      if (o.trail.length > 2) {
        for (let i = 1; i < o.trail.length; i++) {
          const alpha = i / o.trail.length;
          ctx.beginPath();
          ctx.moveTo(o.trail[i-1].x, o.trail[i-1].y);
          ctx.lineTo(o.trail[i].x,   o.trail[i].y);
          ctx.strokeStyle = o.color + hex(alpha * .55);
          ctx.lineWidth = alpha * 2.5;
          ctx.stroke();
        }
      }

      // Glow
      const glow = ctx.createRadialGradient(px, py, 0, px, py, o.size * 3.5);
      glow.addColorStop(0,   o.color + "cc");
      glow.addColorStop(.5,  o.color + "55");
      glow.addColorStop(1,   o.color + "00");
      ctx.beginPath(); ctx.arc(px, py, o.size*3.5, 0, Math.PI*2);
      ctx.fillStyle = glow; ctx.fill();

      // Core dot
      ctx.beginPath(); ctx.arc(px, py, o.size, 0, Math.PI*2);
      ctx.fillStyle = o.color; ctx.fill();
    }

    function drawBadge(b: Badge) {
      ctx.font = "600 10.5px DM Sans, sans-serif";
      const tw = ctx.measureText(b.label).width;
      const bw = tw + 22, bh = 22;
      const bx = b.bx - bw/2, by = b.by - bh/2;

      rr(ctx, bx, by, bw, bh, 6);
      ctx.fillStyle = b.color + "22"; ctx.fill();
      ctx.strokeStyle = b.color + "60"; ctx.lineWidth = 1; ctx.stroke();

      // Dot accent
      ctx.beginPath(); ctx.arc(bx + 10, b.by, 3, 0, Math.PI*2);
      ctx.fillStyle = b.color; ctx.fill();

      ctx.fillStyle = b.color;
      ctx.textBaseline = "middle";
      ctx.fillText(b.label, bx + 18, b.by);
      ctx.textBaseline = "alphabetic";
    }

    function draw() {
      ctx.clearRect(0, 0, W, H);

      // Clip everything strictly inside the canvas — no bleed
      ctx.save();
      ctx.beginPath();
      ctx.rect(0, 0, W, H);
      ctx.clip();
      const cx = CX(), cy = CY(), r = R();

      // Grid
      ctx.strokeStyle = "rgba(108,99,255,.04)";
      ctx.lineWidth = 1;
      for (let x = 0; x < W; x += 36) {
        ctx.beginPath(); ctx.moveTo(x,0); ctx.lineTo(x,H); ctx.stroke();
      }
      for (let y = 0; y < H; y += 36) {
        ctx.beginPath(); ctx.moveTo(0,y); ctx.lineTo(W,y); ctx.stroke();
      }

      // Motes
      motes.forEach(m => {
        ctx.beginPath(); ctx.arc(m.x, m.y, m.size, 0, Math.PI*2);
        ctx.fillStyle = m.color + hex(m.alpha); ctx.fill();
      });

      // Code lines
      ctx.font = "10px monospace";
      code.forEach(c => {
        ctx.fillStyle = `rgba(108,99,255,${c.alpha * .45})`;
        ctx.fillText(c.text, c.x, c.y);
      });

      // Orbs behind sphere (even index)
      orbs.filter((_, i) => i % 2 === 0).forEach(o => drawOrb(o, cx, cy, r));

      // Sphere
      drawSphere(cx, cy, r);

      // Orbs in front (odd index)
      orbs.filter((_, i) => i % 2 !== 0).forEach(o => drawOrb(o, cx, cy, r));

      // Badges
      badges.forEach(drawBadge);

      // End clip region
      ctx.restore();
    }

    function loop() {
      update(); draw();
      raf.current = requestAnimationFrame(loop);
    }
    raf.current = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf.current);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={ref}
      style={{ width: "100%", height: "100%", display: "block" }}
    />
  );
}
