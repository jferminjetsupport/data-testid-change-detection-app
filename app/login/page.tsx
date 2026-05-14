"use client";

import { useState, useCallback } from "react";

const BASE_IDS = {
  page: "login-page",
  brandingPanel: "login-branding-panel",
  brandLogo: "brand-logo",
  mobileLogo: "mobile-logo",
  brandTagline: "brand-tagline",
  formContainer: "login-form-container",
  heading: "login-heading",
  subheading: "login-subheading",
  signupLink: "signup-link",
  form: "login-form",
  emailWrapper: "email-field-wrapper",
  emailLabel: "email-label",
  emailInput: "email-input",
  passwordWrapper: "password-field-wrapper",
  passwordLabel: "password-label",
  passwordInput: "password-input",
  togglePassword: "toggle-password-visibility",
  forgotPassword: "forgot-password-link",
  rememberWrapper: "remember-me-wrapper",
  rememberCheckbox: "remember-me-checkbox",
  rememberLabel: "remember-me-label",
  errorMessage: "login-error-message",
  submitButton: "login-submit-button",
  loadingSpinner: "login-loading-spinner",
  socialDivider: "social-divider",
  socialButtons: "social-login-buttons",
  googleButton: "google-login-button",
  githubButton: "github-login-button",
  generateButton: "generate-testid-button",
  testidPanel: "testid-panel",
};

type TestIds = typeof BASE_IDS;

function generateSuffix() {
  return Math.random().toString(36).slice(2, 7);
}

function applyStyle(base: TestIds, suffix: string): TestIds {
  const result = {} as TestIds;
  for (const key in base) {
    (result as Record<string, string>)[key] =
      `${(base as Record<string, string>)[key]}-${suffix}`;
  }
  return result;
}

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [suffix, setSuffix] = useState<string | null>(null);
  const [showPanel, setShowPanel] = useState(false);
  const [copied, setCopied] = useState<string | null>(null);

  const ids: TestIds = suffix ? applyStyle(BASE_IDS, suffix) : BASE_IDS;

  const handleGenerate = useCallback(() => {
    setSuffix(generateSuffix());
    setShowPanel(true);
  }, []);

  const handleCopy = (val: string) => {
    navigator.clipboard.writeText(val);
    setCopied(val);
    setTimeout(() => setCopied(null), 1500);
  };

  const handleCopyAll = () => {
    const all = Object.entries(ids)
      .map(([k, v]) => `${k}: "${v}"`)
      .join("\n");
    navigator.clipboard.writeText(all);
    setCopied("__all__");
    setTimeout(() => setCopied(null), 1500);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    if (!email || !password) {
      setError("Please fill in all fields.");
      return;
    }
    setIsLoading(true);
    await new Promise((r) => setTimeout(r, 1500));
    setIsLoading(false);
    if (email !== "user@example.com" || password !== "password") {
      setError("Invalid email or password. Try user@example.com / password");
    } else {
      alert("Login successful!");
    }
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "11px 14px",
    background: "rgba(255,255,255,0.05)",
    border: "0.5px solid rgba(255,255,255,0.12)",
    borderRadius: "10px",
    color: "#fff",
    fontSize: "15px",
    outline: "none",
    boxSizing: "border-box",
  };

  return (
    <>
      <div
        data-testid={ids.page}
        style={{
          minHeight: "100vh",
          display: "flex",
          fontFamily: "'DM Sans', 'Helvetica Neue', sans-serif",
          background: "#0a0a0f",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Ambient glows */}
        <div style={{ position: "absolute", top: "-20%", left: "-10%", width: "60%", height: "60%", background: "radial-gradient(ellipse, rgba(83,74,183,0.18) 0%, transparent 70%)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: "-20%", right: "-10%", width: "50%", height: "50%", background: "radial-gradient(ellipse, rgba(29,158,117,0.12) 0%, transparent 70%)", pointerEvents: "none" }} />

        {/* Left branding panel */}
        <aside
          data-testid={ids.brandingPanel}
          style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "3rem", borderRight: "0.5px solid rgba(255,255,255,0.06)" }}
          className="login-aside"
        >
          <div data-testid={ids.brandLogo} style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
              <rect width="32" height="32" rx="8" fill="#534AB7" />
              <path d="M10 22L16 10L22 22" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M12 18H20" stroke="white" strokeWidth="2" strokeLinecap="round" />
            </svg>
            <span style={{ color: "#fff", fontWeight: 600, fontSize: "18px", letterSpacing: "-0.3px" }}>Arclight</span>
          </div>
          <div>
            <p data-testid={ids.brandTagline} style={{ fontSize: "clamp(28px,3vw,42px)", fontWeight: 700, color: "#fff", lineHeight: 1.2, letterSpacing: "-1px", marginBottom: "1.5rem" }}>
              Welcome back.<br /><span style={{ color: "#7F77DD" }}>Sign in to continue.</span>
            </p>
            <p style={{ color: "rgba(255,255,255,0.45)", fontSize: "15px", lineHeight: 1.7 }}>
              Access your dashboard, manage projects, and collaborate with your team.
            </p>
          </div>
          <p style={{ color: "rgba(255,255,255,0.2)", fontSize: "13px" }}>© 2026 Arclight Inc.</p>
        </aside>

        {/* Right form panel */}
        <main data-testid={ids.formContainer} style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", padding: "2rem" }}>
          <div style={{ width: "100%", maxWidth: "420px" }}>

            {/* Mobile logo */}
            <div data-testid={ids.mobileLogo} style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "2.5rem" }}>
              <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
                <rect width="32" height="32" rx="8" fill="#534AB7" />
                <path d="M10 22L16 10L22 22" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M12 18H20" stroke="white" strokeWidth="2" strokeLinecap="round" />
              </svg>
              <span style={{ color: "#fff", fontWeight: 600, fontSize: "17px" }}>Arclight</span>
            </div>

            <h1 data-testid={ids.heading} style={{ color: "#fff", fontSize: "26px", fontWeight: 700, letterSpacing: "-0.5px", marginBottom: "0.35rem" }}>Sign in</h1>
            <p data-testid={ids.subheading} style={{ color: "rgba(255,255,255,0.4)", fontSize: "14px", marginBottom: "2rem" }}>
              Don&apos;t have an account?{" "}
              <a href="#" data-testid={ids.signupLink} style={{ color: "#7F77DD", textDecoration: "none", fontWeight: 500 }}>Create one</a>
            </p>

            <form data-testid={ids.form} onSubmit={handleSubmit} noValidate style={{ display: "flex", flexDirection: "column", gap: "16px" }}>

              {/* Email */}
              <div data-testid={ids.emailWrapper}>
                <label htmlFor="email" data-testid={ids.emailLabel} style={{ display: "block", color: "rgba(255,255,255,0.55)", fontSize: "13px", marginBottom: "6px" }}>Email address</label>
                <input id="email" type="email" autoComplete="email" data-testid={ids.emailInput} value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" style={inputStyle}
                  onFocus={(e) => (e.target.style.borderColor = "#534AB7")}
                  onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.12)")} />
              </div>

              {/* Password */}
              <div data-testid={ids.passwordWrapper}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "6px" }}>
                  <label htmlFor="password" data-testid={ids.passwordLabel} style={{ color: "rgba(255,255,255,0.55)", fontSize: "13px" }}>Password</label>
                  <a href="#" data-testid={ids.forgotPassword} style={{ color: "#7F77DD", fontSize: "13px", textDecoration: "none" }}>Forgot password?</a>
                </div>
                <div style={{ position: "relative" }}>
                  <input id="password" type={showPassword ? "text" : "password"} autoComplete="current-password" data-testid={ids.passwordInput} value={password} onChange={(e) => setPassword(e.target.value)} placeholder="••••••••"
                    style={{ ...inputStyle, paddingRight: "44px" }}
                    onFocus={(e) => (e.target.style.borderColor = "#534AB7")}
                    onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.12)")} />
                  <button type="button" data-testid={ids.togglePassword} onClick={() => setShowPassword(!showPassword)} aria-label={showPassword ? "Hide password" : "Show password"}
                    style={{ position: "absolute", right: "12px", top: "50%", transform: "translateY(-50%)", background: "none", border: "none", cursor: "pointer", color: "rgba(255,255,255,0.35)", display: "flex", alignItems: "center", padding: 0 }}>
                    {showPassword
                      ? <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94" /><path d="M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19" /><line x1="1" y1="1" x2="23" y2="23" /></svg>
                      : <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" /></svg>
                    }
                  </button>
                </div>
              </div>

              {/* Remember me */}
              <div data-testid={ids.rememberWrapper} style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <input id="remember-me" type="checkbox" data-testid={ids.rememberCheckbox} checked={rememberMe} onChange={(e) => setRememberMe(e.target.checked)} style={{ width: "16px", height: "16px", accentColor: "#534AB7", cursor: "pointer" }} />
                <label htmlFor="remember-me" data-testid={ids.rememberLabel} style={{ color: "rgba(255,255,255,0.45)", fontSize: "13px", cursor: "pointer" }}>Remember me for 30 days</label>
              </div>

              {error && (
                <div data-testid={ids.errorMessage} role="alert" style={{ padding: "10px 14px", background: "rgba(226,75,74,0.12)", border: "0.5px solid rgba(226,75,74,0.3)", borderRadius: "8px", color: "#F09595", fontSize: "13px" }}>
                  {error}
                </div>
              )}

              <button type="submit" data-testid={ids.submitButton} disabled={isLoading}
                style={{ width: "100%", padding: "13px", background: isLoading ? "rgba(83,74,183,0.5)" : "#534AB7", border: "none", borderRadius: "10px", color: "#fff", fontSize: "15px", fontWeight: 600, cursor: isLoading ? "not-allowed" : "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", marginTop: "4px" }}>
                {isLoading
                  ? <><svg data-testid={ids.loadingSpinner} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ animation: "spin 0.8s linear infinite" }}><path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" opacity="0.25" /><path d="M21 12a9 9 0 00-9-9" /></svg>Signing in…</>
                  : "Sign in"
                }
              </button>
            </form>

            {/* Divider */}
            <div data-testid={ids.socialDivider} style={{ display: "flex", alignItems: "center", gap: "12px", margin: "1.75rem 0" }}>
              <div style={{ flex: 1, height: "0.5px", background: "rgba(255,255,255,0.08)" }} />
              <span style={{ color: "rgba(255,255,255,0.25)", fontSize: "12px" }}>or continue with</span>
              <div style={{ flex: 1, height: "0.5px", background: "rgba(255,255,255,0.08)" }} />
            </div>

            {/* Social buttons */}
            <div data-testid={ids.socialButtons} style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", marginBottom: "1.5rem" }}>
              <button type="button" data-testid={ids.googleButton} style={{ padding: "10px 16px", background: "rgba(255,255,255,0.04)", border: "0.5px solid rgba(255,255,255,0.1)", borderRadius: "10px", color: "rgba(255,255,255,0.7)", fontSize: "14px", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: "8px" }}>
                <svg width="16" height="16" viewBox="0 0 24 24"><path fill="#EA4335" d="M5.26 9.77A7.29 7.29 0 0112 4.73c1.78 0 3.38.65 4.62 1.7l3.44-3.44A12 12 0 000 12c0 1.99.49 3.86 1.35 5.52l4.07-3.17A7.3 7.3 0 015.26 9.77z"/><path fill="#34A853" d="M12 19.27c-2.08 0-3.93-.7-5.38-1.86l-4.07 3.17A12 12 0 0012 24c3.06 0 5.84-1.13 7.96-2.99l-3.92-3.05A7.27 7.27 0 0112 19.27z"/><path fill="#4A90D9" d="M23.49 12.27c0-.79-.07-1.56-.2-2.27H12v4.51h6.47a5.54 5.54 0 01-2.43 3.63l3.92 3.05C21.8 19.13 23.49 15.93 23.49 12.27z"/><path fill="#FBBC05" d="M5.26 14.23l-4.07 3.17A12.04 12.04 0 010 12c0-1.99.49-3.86 1.35-5.52L5.42 9.65A7.3 7.3 0 005.26 14.23z"/></svg>
                Google
              </button>
              <button type="button" data-testid={ids.githubButton} style={{ padding: "10px 16px", background: "rgba(255,255,255,0.04)", border: "0.5px solid rgba(255,255,255,0.1)", borderRadius: "10px", color: "rgba(255,255,255,0.7)", fontSize: "14px", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: "8px" }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="rgba(255,255,255,0.8)"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
                GitHub
              </button>
            </div>

            {/* Generate button */}
            <button
              type="button"
              data-testid={ids.generateButton}
              onClick={handleGenerate}
              style={{
                width: "100%",
                padding: "11px",
                background: "rgba(29,158,117,0.12)",
                border: "0.5px solid rgba(29,158,117,0.35)",
                borderRadius: "10px",
                color: "#5DCAA5",
                fontSize: "14px",
                fontWeight: 500,
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px",
                letterSpacing: "-0.1px",
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M23 4v6h-6"/><path d="M1 20v-6h6"/>
                <path d="M3.51 9a9 9 0 0114.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0020.49 15"/>
              </svg>
              Generate new test IDs
              {suffix && <span style={{ fontSize: "12px", opacity: 0.7, fontFamily: "monospace" }}>({suffix})</span>}
            </button>

          </div>
        </main>

        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&display=swap');
          @keyframes spin { to { transform: rotate(360deg); } }
          input::placeholder { color: rgba(255,255,255,0.2); }
          @media (min-width: 768px) { .login-aside { display: flex !important; } }
        `}</style>
      </div>

      {/* Test ID reference panel */}
      {showPanel && (
        <div
          data-testid={ids.testidPanel}
          style={{
            fontFamily: "'DM Sans', sans-serif",
            background: "#0f0f18",
            borderTop: "0.5px solid rgba(255,255,255,0.08)",
            padding: "2rem",
          }}
        >
          <div style={{ maxWidth: "860px", margin: "0 auto" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1.25rem", flexWrap: "wrap", gap: "12px" }}>
              <div>
                <h2 style={{ color: "#fff", fontSize: "16px", fontWeight: 600, margin: 0 }}>Current data-testid values</h2>
                <p style={{ color: "rgba(255,255,255,0.35)", fontSize: "13px", margin: "4px 0 0" }}>
                  Suffix: <code style={{ color: "#5DCAA5", fontFamily: "monospace" }}>{suffix}</code> — click any ID to copy
                </p>
              </div>
              <div style={{ display: "flex", gap: "8px" }}>
                <button
                  onClick={handleCopyAll}
                  style={{ padding: "7px 14px", background: copied === "__all__" ? "rgba(29,158,117,0.2)" : "rgba(255,255,255,0.06)", border: "0.5px solid rgba(255,255,255,0.12)", borderRadius: "8px", color: copied === "__all__" ? "#5DCAA5" : "rgba(255,255,255,0.6)", fontSize: "13px", cursor: "pointer", display: "flex", alignItems: "center", gap: "6px" }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"/></svg>
                  {copied === "__all__" ? "Copied!" : "Copy all"}
                </button>
                <button
                  onClick={() => setShowPanel(false)}
                  style={{ padding: "7px 14px", background: "rgba(255,255,255,0.06)", border: "0.5px solid rgba(255,255,255,0.12)", borderRadius: "8px", color: "rgba(255,255,255,0.45)", fontSize: "13px", cursor: "pointer" }}>
                  Hide
                </button>
              </div>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: "6px" }}>
              {Object.entries(ids).map(([key, value]) => (
                <button
                  key={key}
                  onClick={() => handleCopy(value)}
                  title="Click to copy"
                  style={{
                    background: copied === value ? "rgba(29,158,117,0.12)" : "rgba(255,255,255,0.03)",
                    border: `0.5px solid ${copied === value ? "rgba(29,158,117,0.3)" : "rgba(255,255,255,0.07)"}`,
                    borderRadius: "8px",
                    padding: "8px 12px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    cursor: "pointer",
                    gap: "8px",
                    textAlign: "left",
                  }}
                >
                  <div style={{ minWidth: 0 }}>
                    <div style={{ color: "rgba(255,255,255,0.35)", fontSize: "11px", marginBottom: "2px", fontFamily: "monospace" }}>{key}</div>
                    <div style={{ color: copied === value ? "#5DCAA5" : "rgba(255,255,255,0.75)", fontSize: "12px", fontFamily: "monospace", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{value}</div>
                  </div>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke={copied === value ? "#5DCAA5" : "rgba(255,255,255,0.2)"} strokeWidth="2" style={{ flexShrink: 0 }}><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"/></svg>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
