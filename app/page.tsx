"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const FEATURES = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
        <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
      </svg>
    ),
    title: "Snapshot scanning",
    desc: "Claude scans your component tree and captures every data-testid at build time.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: "Drift detection",
    desc: "Any rename, addition, or removal is flagged instantly with a diff view.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
    title: "AI-powered fixes",
    desc: "Claude suggests test file updates so your selectors never fall out of sync.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
        <rect x="3" y="3" width="18" height="18" rx="2" /><path d="M3 9h18M9 21V9" />
      </svg>
    ),
    title: "Change history",
    desc: "Full audit log of every ID change across releases, linked to git commits.",
  },
];

const STEPS = [
  { num: "01", label: "Connect your repo" },
  { num: "02", label: "Run first scan" },
  { num: "03", label: "Review detected IDs" },
  { num: "04", label: "Enable auto-alerts" },
];

export default function WelcomePage() {
  const router = useRouter();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 80);
    return () => clearTimeout(t);
  }, []);

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f5f3ee",
        fontFamily: "'Instrument Serif', Georgia, serif",
        overflowX: "hidden",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=DM+Mono:wght@400;500&display=swap');
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .fade-up { opacity: 0; animation: fadeUp 0.65s cubic-bezier(.22,1,.36,1) forwards; }
        .d1 { animation-delay: 0.05s; }
        .d2 { animation-delay: 0.15s; }
        .d3 { animation-delay: 0.25s; }
        .d4 { animation-delay: 0.35s; }
        .d5 { animation-delay: 0.45s; }
        .d6 { animation-delay: 0.55s; }
        .feature-card:hover { background: #ede9e1 !important; }
        .cta-btn:hover { background: #1a1a14 !important; }
        .secondary-btn:hover { background: #e8e4db !important; }
      `}</style>

      {/* Nav */}
      <nav
        className={visible ? "fade-up d1" : ""}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "1.5rem 3rem",
          borderBottom: "1px solid #ddd9d0",
          background: "#f5f3ee",
          position: "sticky",
          top: 0,
          zIndex: 10,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
            <rect width="28" height="28" rx="6" fill="#2a2a1e" />
            <path d="M8 20L14 8L20 20" stroke="#f5f3ee" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M10 16H18" stroke="#c8b97a" strokeWidth="1.8" strokeLinecap="round" />
          </svg>
          <span style={{ fontSize: "17px", color: "#2a2a1e", letterSpacing: "-0.2px" }}>TestID Guard</span>
        </div>
        <div style={{ display: "flex", gap: "2rem", alignItems: "center" }}>
          <a href="#" style={{ color: "#6b6759", fontSize: "14px", textDecoration: "none", fontFamily: "'DM Mono', monospace" }}>Docs</a>
          <a href="#" style={{ color: "#6b6759", fontSize: "14px", textDecoration: "none", fontFamily: "'DM Mono', monospace" }}>Changelog</a>
          <button
            onClick={() => router.push("/login")}
            style={{ padding: "8px 18px", background: "#2a2a1e", border: "none", borderRadius: "6px", color: "#f5f3ee", fontSize: "13px", fontFamily: "'DM Mono', monospace", cursor: "pointer", letterSpacing: "0.3px" }}
          >
            Sign in →
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section style={{ maxWidth: "900px", margin: "0 auto", padding: "6rem 2rem 4rem", textAlign: "center" }}>
        <div
          className={visible ? "fade-up d1" : ""}
          style={{
            display: "inline-block",
            padding: "5px 14px",
            background: "#2a2a1e",
            borderRadius: "100px",
            marginBottom: "2rem",
          }}
        >
          <span style={{ color: "#c8b97a", fontSize: "12px", fontFamily: "'DM Mono', monospace", letterSpacing: "1px" }}>
            POWERED BY CLAUDE AI
          </span>
        </div>

        <h1
          className={visible ? "fade-up d2" : ""}
          style={{
            fontSize: "clamp(42px, 7vw, 80px)",
            lineHeight: 1.05,
            color: "#2a2a1e",
            letterSpacing: "-2px",
            margin: "0 0 1.5rem",
            fontWeight: 400,
          }}
        >
          Never lose a<br />
          <em style={{ color: "#8a7d5a" }}>data-testid</em> again
        </h1>

        <p
          className={visible ? "fade-up d3" : ""}
          style={{
            fontSize: "18px",
            color: "#6b6759",
            lineHeight: 1.75,
            maxWidth: "560px",
            margin: "0 auto 2.5rem",
            fontFamily: "'DM Mono', monospace",
            fontWeight: 400,
          }}
        >
          Claude watches your components and alerts you the moment a test selector changes — before it breaks CI.
        </p>

        <div className={visible ? "fade-up d4" : ""} style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
          <button
            className="cta-btn"
            onClick={() => router.push("/login")}
            style={{
              padding: "14px 32px",
              background: "#2a2a1e",
              border: "none",
              borderRadius: "8px",
              color: "#f5f3ee",
              fontSize: "15px",
              fontFamily: "'DM Mono', monospace",
              cursor: "pointer",
              transition: "background 0.15s",
              letterSpacing: "0.2px",
            }}
          >
            Get started free
          </button>
          <button
            className="secondary-btn"
            style={{
              padding: "14px 32px",
              background: "transparent",
              border: "1px solid #c5bfb4",
              borderRadius: "8px",
              color: "#2a2a1e",
              fontSize: "15px",
              fontFamily: "'DM Mono', monospace",
              cursor: "pointer",
              transition: "background 0.15s",
            }}
          >
            View demo
          </button>
        </div>
      </section>

      {/* Terminal mockup */}
      <section className={visible ? "fade-up d4" : ""} style={{ maxWidth: "720px", margin: "0 auto 5rem", padding: "0 2rem" }}>
        <div style={{ background: "#1e1e16", borderRadius: "12px", overflow: "hidden", border: "1px solid #3a3a2e" }}>
          <div style={{ padding: "12px 16px", borderBottom: "1px solid #3a3a2e", display: "flex", alignItems: "center", gap: "8px" }}>
            <div style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#c0392b" }} />
            <div style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#e67e22" }} />
            <div style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#27ae60" }} />
            <span style={{ marginLeft: "8px", color: "#5a5a4a", fontSize: "12px", fontFamily: "'DM Mono', monospace" }}>testid-guard diff</span>
          </div>
          <div style={{ padding: "1.5rem", fontFamily: "'DM Mono', monospace", fontSize: "13px", lineHeight: 2 }}>
            <p style={{ color: "#5a5a4a", margin: "0 0 0.5rem" }}># Scanning LoginPage.tsx...</p>
            <p style={{ color: "#c8b97a", margin: 0 }}>~ Comparing against last snapshot</p>
            <p style={{ color: "#e74c3c", margin: 0 }}>− login-submit-btn</p>
            <p style={{ color: "#2ecc71", margin: 0 }}>+ login-submit-button</p>
            <p style={{ color: "#e74c3c", margin: 0 }}>− email-field</p>
            <p style={{ color: "#2ecc71", margin: 0 }}>+ email-input</p>
            <p style={{ color: "#5a5a4a", margin: "0.5rem 0 0" }}># 2 changes detected — 4 test files affected</p>
            <p style={{ color: "#c8b97a", margin: 0 }}>✦ Claude suggests auto-fix for login.spec.ts</p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section style={{ maxWidth: "900px", margin: "0 auto 6rem", padding: "0 2rem" }}>
        <h2
          className={visible ? "fade-up d3" : ""}
          style={{ fontSize: "13px", color: "#8a7d5a", fontFamily: "'DM Mono', monospace", letterSpacing: "2px", marginBottom: "2rem", textAlign: "center" }}
        >
          WHAT IT DOES
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1px", background: "#ddd9d0", border: "1px solid #ddd9d0", borderRadius: "12px", overflow: "hidden" }}>
          {FEATURES.map((f, i) => (
            <div
              key={i}
              className={`feature-card ${visible ? `fade-up` : ""}`}
              style={{
                background: "#f5f3ee",
                padding: "1.75rem",
                transition: "background 0.15s",
                animationDelay: `${0.3 + i * 0.08}s`,
                opacity: visible ? undefined : 0,
                animation: visible ? `fadeUp 0.65s cubic-bezier(.22,1,.36,1) ${0.3 + i * 0.08}s forwards` : "none",
              }}
            >
              <div style={{ color: "#8a7d5a", marginBottom: "1rem" }}>{f.icon}</div>
              <p style={{ fontSize: "16px", color: "#2a2a1e", margin: "0 0 0.5rem", letterSpacing: "-0.2px" }}>{f.title}</p>
              <p style={{ fontSize: "13px", color: "#6b6759", margin: 0, fontFamily: "'DM Mono', monospace", lineHeight: 1.7 }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section style={{ maxWidth: "900px", margin: "0 auto 6rem", padding: "0 2rem" }}>
        <h2
          className={visible ? "fade-up d3" : ""}
          style={{ fontSize: "13px", color: "#8a7d5a", fontFamily: "'DM Mono', monospace", letterSpacing: "2px", marginBottom: "3rem", textAlign: "center" }}
        >
          HOW IT WORKS
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: "2rem" }}>
          {STEPS.map((s, i) => (
            <div
              key={i}
              className={visible ? "fade-up" : ""}
              style={{
                textAlign: "center",
                opacity: visible ? undefined : 0,
                animation: visible ? `fadeUp 0.65s cubic-bezier(.22,1,.36,1) ${0.4 + i * 0.1}s forwards` : "none",
              }}
            >
              <div style={{ fontSize: "36px", color: "#ddd9d0", fontFamily: "'DM Mono', monospace", marginBottom: "0.75rem", letterSpacing: "-1px" }}>{s.num}</div>
              <p style={{ fontSize: "15px", color: "#2a2a1e", margin: 0, letterSpacing: "-0.2px" }}>{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA banner */}
      <section
        className={visible ? "fade-up d5" : ""}
        style={{ maxWidth: "900px", margin: "0 auto 6rem", padding: "0 2rem" }}
      >
        <div style={{ background: "#2a2a1e", borderRadius: "16px", padding: "3.5rem 3rem", textAlign: "center" }}>
          <h2 style={{ fontSize: "clamp(28px,4vw,44px)", color: "#f5f3ee", letterSpacing: "-1px", margin: "0 0 1rem", fontWeight: 400 }}>
            Start catching changes <em style={{ color: "#c8b97a" }}>today</em>
          </h2>
          <p style={{ color: "#8a8a72", fontSize: "15px", fontFamily: "'DM Mono', monospace", margin: "0 0 2rem", lineHeight: 1.7 }}>
            Connect your repo in under 2 minutes. No config files, no CLI setup.
          </p>
          <button
            className="cta-btn"
            onClick={() => router.push("/login")}
            style={{
              padding: "14px 36px",
              background: "#c8b97a",
              border: "none",
              borderRadius: "8px",
              color: "#2a2a1e",
              fontSize: "15px",
              fontFamily: "'DM Mono', monospace",
              cursor: "pointer",
              fontWeight: 500,
              transition: "background 0.15s",
              letterSpacing: "0.2px",
            }}
          >
            Open the app →
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer
        className={visible ? "fade-up d6" : ""}
        style={{
          borderTop: "1px solid #ddd9d0",
          padding: "2rem 3rem",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "1rem",
        }}
      >
        <span style={{ color: "#b0a898", fontSize: "13px", fontFamily: "'DM Mono', monospace" }}>© 2026 TestID Guard</span>
        <div style={{ display: "flex", gap: "2rem" }}>
          {["Privacy", "Terms", "GitHub"].map((l) => (
            <a key={l} href="#" style={{ color: "#b0a898", fontSize: "13px", textDecoration: "none", fontFamily: "'DM Mono', monospace" }}>{l}</a>
          ))}
        </div>
      </footer>
    </div>
  );
}
