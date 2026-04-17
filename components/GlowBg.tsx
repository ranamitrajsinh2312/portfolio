"use client";

/**
 * GlowBg — Ambient background glow.
 * Uses pure CSS animations (no Framer Motion) to prevent scroll jank.
 * Shapes use will-change: transform and contain: strict for GPU compositing.
 */
export default function GlowBg() {
  return (
    <>
      <style>{`
        @keyframes gb-float1 {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          33%       { transform: translate(30px, -40px) rotate(60deg); }
          66%       { transform: translate(-20px, 30px) rotate(120deg); }
        }
        @keyframes gb-float2 {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          50%       { transform: translate(-50px, 60px) rotate(180deg); }
        }
        @keyframes gb-float3 {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          40%       { transform: translate(40px, -30px) rotate(90deg); }
          80%       { transform: translate(-30px, 20px) rotate(200deg); }
        }
        @keyframes gb-float4 {
          0%, 100% { transform: translate(0, 0); }
          50%       { transform: translate(60px, -50px); }
        }
        @keyframes gb-float5 {
          0%, 100% { transform: translate(0, 0); }
          50%       { transform: translate(-40px, 40px); }
        }
        .gb-shape {
          position: absolute;
          border-radius: 50%;
          pointer-events: none;
          will-change: transform;
        }
      `}</style>

      <div
        aria-hidden
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 0,
          pointerEvents: "none",
          overflow: "hidden",
        }}
      >
        {/* Large purple blob top-left */}
        <div
          className="gb-shape"
          style={{
            top: "5%", left: "2%",
            width: 500, height: 500,
            background: "rgba(108,99,255,0.07)",
            filter: "blur(80px)",
            animation: "gb-float1 28s ease-in-out infinite",
          }}
        />

        {/* Cyan blob top-right */}
        <div
          className="gb-shape"
          style={{
            top: "10%", right: "5%",
            width: 420, height: 420,
            background: "rgba(56,189,248,0.05)",
            filter: "blur(80px)",
            animation: "gb-float2 35s ease-in-out infinite",
            animationDelay: "-8s",
          }}
        />

        {/* Violet blob center */}
        <div
          className="gb-shape"
          style={{
            top: "40%", left: "25%",
            width: 550, height: 550,
            background: "rgba(167,139,250,0.04)",
            filter: "blur(100px)",
            animation: "gb-float3 40s ease-in-out infinite",
            animationDelay: "-15s",
          }}
        />

        {/* Green teal blob bottom-left */}
        <div
          className="gb-shape"
          style={{
            bottom: "10%", left: "10%",
            width: 350, height: 350,
            background: "rgba(52,211,153,0.05)",
            filter: "blur(70px)",
            animation: "gb-float4 25s ease-in-out infinite",
            animationDelay: "-5s",
          }}
        />

        {/* Pink blob bottom-right */}
        <div
          className="gb-shape"
          style={{
            bottom: "15%", right: "8%",
            width: 300, height: 300,
            background: "rgba(244,114,182,0.04)",
            filter: "blur(70px)",
            animation: "gb-float5 30s ease-in-out infinite",
            animationDelay: "-20s",
          }}
        />

        {/* Deep vignette overlay */}
        <div style={{
          position: "absolute", inset: 0,
          background: "radial-gradient(circle at center, transparent 0%, rgba(10,10,15,0.4) 100%)",
        }} />
      </div>
    </>
  );
}
