import { useEffect, useRef } from "react";

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;700;800&family=Space+Mono:wght@400;700&display=swap');

  @keyframes trainMove {
    from { transform: translateX(110vw); }
    to   { transform: translateX(-110vw); }
  }
  @keyframes trackScroll {
    from { transform: translateX(0); }
    to   { transform: translateX(60px); }
  }
  @keyframes cloudDrift1 {
    from { transform: translateX(-20%); }
    to   { transform: translateX(110%); }
  }
  @keyframes cloudDrift2 {
    from { transform: translateX(110%); }
    to   { transform: translateX(-20%); }
  }
  @keyframes smokePuff {
    0%,100% { opacity: 0;   transform: translateY(0)    scale(1);   }
    50%      { opacity: 0.5; transform: translateY(-18px) scale(1.4); }
  }
  @keyframes jiggle {
    0%,100% { transform: translateY(0);  }
    50%      { transform: translateY(2px); }
  }
  @keyframes starTwinkle {
    0%,100% { opacity: 0.3; }
    50%      { opacity: 1;   }
  }
  @keyframes floatUp {
    0%   { opacity: 0; transform: translateY(24px); }
    100% { opacity: 1; transform: translateY(0);    }
  }

  .nf-root {
    position: relative;
    width: 100%;
    min-height: 100vh;
    background: linear-gradient(180deg, #1a1a4e 0%, #3a3a8a 55%, #2d4a22 55%, #1a2e14 100%);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    font-family: 'Syne', sans-serif;
  }

  .nf-scene {
    position: absolute;
    inset: 0;
    pointer-events: none;
  }

  /* Stars */
  .nf-star {
    position: absolute;
    border-radius: 50%;
    background: #fff;
    animation: starTwinkle 2s ease-in-out infinite;
  }

  /* Moon */
  .nf-moon-wrap {
    position: absolute;
    top: 36px;
    right: 80px;
  }
  .nf-moon {
    width: 56px;
    height: 56px;
    border-radius: 50%;
    background: radial-gradient(circle at 38% 38%, #FAC775, #EF9F27);
    position: relative;
  }
  .nf-moon::after {
    content: '';
    position: absolute;
    top: -6px;
    left: 8px;
    width: 44px;
    height: 44px;
    border-radius: 50%;
    background: #3a3a8a;
  }

  /* Clouds */
  .nf-cloud-a {
    position: absolute;
    top: 140px;
    left: 0;
    animation: cloudDrift1 22s linear infinite;
    opacity: 0.18;
  }
  .nf-cloud-b {
    position: absolute;
    top: 160px;
    right: 0;
    animation: cloudDrift2 30s linear infinite;
    opacity: 0.13;
  }

  /* Hills */
  .nf-hills {
    position: absolute;
    bottom: 100px;
    left: 0;
    width: 100%;
    pointer-events: none;
  }

  /* Track */
  .nf-track-container {
    position: absolute;
    bottom: 84px;
    left: 0;
    width: 100%;
    overflow: hidden;
    height: 28px;
  }
  .nf-track-scroll {
    display: flex;
    animation: trackScroll 0.5s linear infinite;
    width: 200%;
  }
  .nf-rail-top, .nf-rail-bot {
    position: absolute;
    left: -60px;
    right: 0;
    height: 6px;
    border-radius: 2px;
    background: #4a3a2a;
  }
  .nf-rail-top { top: 0; }
  .nf-rail-bot { top: 14px; }

  /* Train */
  .nf-train-wrap {
    position: absolute;
    bottom: 68px;
    left: 0;
    width: 100%;
    height: 120px;
    animation: trainMove 12s linear infinite;
    pointer-events: none;
  }
  .nf-train-inner {
    animation: jiggle 0.35s linear infinite;
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
  }

  /* Smoke */
  .nf-smoke1 { animation: smokePuff 1.2s ease-in-out infinite; }
  .nf-smoke2 { animation: smokePuff 1.2s ease-in-out 0.4s infinite; }
  .nf-smoke3 { animation: smokePuff 1.2s ease-in-out 0.8s infinite; }

  /* Hero text */
  .nf-content {
    position: relative;
    z-index: 10;
    text-align: center;
    margin-top: -60px;
    animation: floatUp 0.9s cubic-bezier(.22,1,.36,1) both;
  }
  .nf-404-bg {
    font-family: 'Space Mono', monospace;
    font-size: clamp(72px, 16vw, 130px);
    font-weight: 700;
    letter-spacing: 12px;
    color: #AFA9EC;
    opacity: 0.45;
    line-height: 1;
    user-select: none;
  }
  .nf-404-fg {
    font-family: 'Space Mono', monospace;
    font-size: clamp(72px, 16vw, 130px);
    font-weight: 700;
    letter-spacing: 12px;
    color: #EEEDFE;
    opacity: 0.15;
    line-height: 1;
    margin-top: -1.1em;
    user-select: none;
  }
  .nf-label {
    font-family: 'Syne', sans-serif;
    font-size: 13px;
    font-weight: 700;
    letter-spacing: 6px;
    color: #CECBF6;
    margin-top: 4px;
    text-transform: uppercase;
  }
  .nf-msg {
    font-size: 13px;
    color: #9F9CC8;
    letter-spacing: 1px;
    margin-top: 8px;
  }
  .nf-sub {
    font-size: 13px;
    color: #9FE1CB;
    letter-spacing: 1px;
    margin-top: 32px;
  }
  .nf-btn {
    display: inline-block;
    margin-top: 14px;
    padding: 10px 32px;
    border-radius: 999px;
    background: #534AB7;
    border: 1px solid #AFA9EC55;
    color: #EEEDFE;
    font-family: 'Syne', sans-serif;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    transition: background 0.2s, transform 0.15s;
    text-decoration: none;
  }
  .nf-btn:hover {
    background: #6a60d4;
    transform: scale(1.04);
  }
`;

const STARS = [
  { x: "9%",  y: "7%",  r: 1.5, delay: "0s"   },
  { x: "19%", y: "13%", r: 1,   delay: "0.3s"  },
  { x: "29%", y: "5%",  r: 1.5, delay: "0.7s"  },
  { x: "41%", y: "11%", r: 1,   delay: "1.1s"  },
  { x: "54%", y: "4%",  r: 1.5, delay: "0.5s"  },
  { x: "66%", y: "10%", r: 1,   delay: "0.9s"  },
  { x: "77%", y: "6%",  r: 1.5, delay: "0.2s"  },
  { x: "90%", y: "12%", r: 1,   delay: "1.4s"  },
  { x: "13%", y: "19%", r: 1,   delay: "1.8s"  },
  { x: "47%", y: "17%", r: 1.2, delay: "0.6s"  },
  { x: "72%", y: "16%", r: 1,   delay: "1.2s"  },
  { x: "95%", y: "8%",  r: 1.5, delay: "0.4s"  },
];

const SLEEPER_COUNT = 28;

export  const  NotErr =({ name = "Jaswanth", onGoHome })=> {
  const styleRef = useRef(null);

  useEffect(() => {
    const tag = document.createElement("style");
    tag.textContent = styles;
    document.head.appendChild(tag);
    styleRef.current = tag;
    return () => tag.remove();
  }, []);

  const handleHome = () => {
    if (onGoHome) {
      onGoHome();
    } else {
      window.history.back();
    }
  };

  return (
    <div className="nf-root">
      {/* ── Background scene ── */}
      <div className="nf-scene">
        {/* Stars */}
        {STARS.map((s, i) => (
          <div
            key={i}
            className="nf-star"
            style={{
              left: s.x,
              top: s.y,
              width: s.r * 2,
              height: s.r * 2,
              animationDelay: s.delay,
            }}
          />
        ))}

        {/* Moon */}
        <div className="nf-moon-wrap">
          <div className="nf-moon" />
        </div>

        {/* Cloud A */}
        <div className="nf-cloud-a">
          <svg width="180" height="50" viewBox="0 0 180 50" fill="none">
            <ellipse cx="90" cy="32" rx="80" ry="20" fill="white" />
            <ellipse cx="65" cy="26" rx="45" ry="20" fill="white" />
            <ellipse cx="120" cy="24" rx="40" ry="18" fill="white" />
          </svg>
        </div>

        {/* Cloud B */}
        <div className="nf-cloud-b">
          <svg width="140" height="44" viewBox="0 0 140 44" fill="none">
            <ellipse cx="70" cy="30" rx="65" ry="16" fill="white" />
            <ellipse cx="50" cy="24" rx="36" ry="16" fill="white" />
            <ellipse cx="95" cy="22" rx="30" ry="14" fill="white" />
          </svg>
        </div>

        {/* Hills */}
        <div className="nf-hills">
          <svg width="100%" height="60" viewBox="0 0 680 60" preserveAspectRatio="none">
            <ellipse cx="120" cy="10" rx="200" ry="38" fill="#243d1c" />
            <ellipse cx="400" cy="14" rx="240" ry="34" fill="#1e3618" />
            <ellipse cx="620" cy="8"  rx="180" ry="32" fill="#243d1c" />
          </svg>
        </div>

        {/* Rail tracks */}
        <div className="nf-track-container">
          <div style={{ position: "relative", height: "28px" }}>
            <div className="nf-rail-top" />
            <div className="nf-rail-bot" />
            {/* Sleepers */}
            <div className="nf-track-scroll" style={{ position: "absolute", top: "-4px", left: 0, display: "flex", gap: 0 }}>
              {Array.from({ length: SLEEPER_COUNT }).map((_, i) => (
                <div
                  key={i}
                  style={{
                    width: 10,
                    height: 26,
                    borderRadius: 1,
                    background: "#5c4a38",
                    marginRight: 20,
                    flexShrink: 0,
                  }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Train */}
        <div className="nf-train-wrap">
          {/* Smoke */}
          <svg
            className="nf-smoke1"
            style={{ position: "absolute", left: "calc(50% - 60px)", bottom: 90 }}
            width="20" height="20" viewBox="0 0 20 20"
          >
            <circle cx="10" cy="10" r="9" fill="#9F9CC8" opacity="0.5" />
          </svg>
          <svg
            className="nf-smoke2"
            style={{ position: "absolute", left: "calc(50% - 48px)", bottom: 96 }}
            width="16" height="16" viewBox="0 0 16 16"
          >
            <circle cx="8" cy="8" r="7" fill="#CECBF6" opacity="0.4" />
          </svg>
          <svg
            className="nf-smoke3"
            style={{ position: "absolute", left: "calc(50% - 36px)", bottom: 100 }}
            width="12" height="12" viewBox="0 0 12 12"
          >
            <circle cx="6" cy="6" r="5" fill="white" opacity="0.3" />
          </svg>

          {/* Train SVG */}
          <div className="nf-train-inner">
            <svg
              viewBox="0 0 460 80"
              width="460"
              height="80"
              style={{ position: "absolute", right: "10%", bottom: 0 }}
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient id="tb" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#534AB7" />
                  <stop offset="100%" stopColor="#3C3489" />
                </linearGradient>
              </defs>
              {/* Passenger car */}
              <rect x="0"   y="6"  width="155" height="50" rx="5" fill="#3C3489" />
              <rect x="0"   y="6"  width="155" height="8"  rx="3" fill="#534AB7" />
              <rect x="12"  y="18" width="26"  height="18" rx="3" fill="#B5D4F4" opacity="0.7" />
              <rect x="46"  y="18" width="26"  height="18" rx="3" fill="#B5D4F4" opacity="0.7" />
              <rect x="80"  y="18" width="26"  height="18" rx="3" fill="#B5D4F4" opacity="0.7" />
              <rect x="114" y="18" width="26"  height="18" rx="3" fill="#B5D4F4" opacity="0.7" />
              <text x="78" y="41" textAnchor="middle" fontFamily="monospace" fontSize="9" fill="#EEEDFE" opacity="0.6">404 · NOT FOUND</text>
              <circle cx="28"  cy="56" r="12" fill="#26215C" stroke="#AFA9EC" strokeWidth="2" />
              <circle cx="28"  cy="56" r="5"  fill="#AFA9EC" />
              <circle cx="132" cy="56" r="12" fill="#26215C" stroke="#AFA9EC" strokeWidth="2" />
              <circle cx="132" cy="56" r="5"  fill="#AFA9EC" />
              <rect x="148"  y="40" width="16" height="6" rx="2" fill="#26215C" />

              {/* Engine body */}
              <rect x="168" y="0"  width="200" height="58" rx="6" fill="url(#tb)" />
              <polygon points="368,0 398,8 398,58 368,58" fill="#3C3489" />
              {/* Cab */}
              <rect x="170" y="-22" width="80"  height="30" rx="4" fill="#534AB7" />
              {/* Chimney */}
              <rect x="205" y="-35" width="14"  height="18" rx="3" fill="#3C3489" />
              {/* Window */}
              <rect x="178" y="-16" width="32"  height="18" rx="3" fill="#FAC775" opacity="0.85" />
              {/* Headlight */}
              <circle cx="396" cy="30" r="7" fill="#FAC775" opacity="0.9" />
              <circle cx="396" cy="30" r="4" fill="white" />
              {/* Stripe */}
              <rect x="168" y="32" width="200" height="5" rx="2" fill="#AFA9EC" opacity="0.5" />
              {/* Name text */}
              <text x="268" y="37" textAnchor="middle" fontFamily="'Syne', sans-serif" fontSize="13" fontWeight="700" fill="#EEEDFE" letterSpacing="2">{name.toUpperCase()} EXPRESS</text>
              {/* Wheels engine */}
              <circle cx="208" cy="58" r="14" fill="#26215C" stroke="#AFA9EC" strokeWidth="2" />
              <circle cx="208" cy="58" r="6"  fill="#AFA9EC" />
              <circle cx="253" cy="58" r="14" fill="#26215C" stroke="#AFA9EC" strokeWidth="2" />
              <circle cx="253" cy="58" r="6"  fill="#AFA9EC" />
              <circle cx="303" cy="58" r="14" fill="#26215C" stroke="#AFA9EC" strokeWidth="2" />
              <circle cx="303" cy="58" r="6"  fill="#AFA9EC" />
              <circle cx="358" cy="58" r="10" fill="#26215C" stroke="#AFA9EC" strokeWidth="2" />
              <circle cx="358" cy="58" r="4"  fill="#AFA9EC" />
              {/* Drive rods */}
              <line x1="208" y1="58" x2="303" y2="58" stroke="#AFA9EC" strokeWidth="4" strokeLinecap="round" />
              <line x1="208" y1="58" x2="253" y2="45" stroke="#AFA9EC" strokeWidth="2.5" strokeLinecap="round" />
              <line x1="253" y1="45" x2="303" y2="58" stroke="#AFA9EC" strokeWidth="2.5" strokeLinecap="round" />
              {/* Coupling */}
              <rect x="398" y="44" width="18" height="7" rx="2" fill="#26215C" />
            </svg>
          </div>
        </div>
      </div>

      {/* ── Hero text ── */}
      <div className="nf-content">
        <div className="nf-404-bg">404</div>
        <div className="nf-404-fg">404</div>
        <div className="nf-label">Page Not Found</div>
        <div className="nf-msg">Hey {name}, this track leads nowhere!</div>
        <div className="nf-sub">The page you're looking for went off the rails.</div>
        <button className="nf-btn" onClick={handleHome}>
          ↩ Back to Home
        </button>
      </div>
    </div>
  );
}