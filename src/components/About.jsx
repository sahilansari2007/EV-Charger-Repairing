import { useState } from "react";
import Icon from "../icons/Icon";
import { Section, SectionHeader } from "./UI";
import { FEATURES } from "../data";

function FeatureItem({ f, T }) {
  const [hov, setHov] = useState(false);
  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{ display: "flex", alignItems: "flex-start", gap: "1rem", padding: "1.2rem", background: T.card, border: `1px solid ${hov ? T.green + "40" : T.border}`, borderRadius: 12, transition: "all 0.25s" }}
    >
      <div style={{ width: 40, height: 40, flexShrink: 0, background: T.greenGlow, borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center" }}>
        <Icon id={f.iconId} size={20} color={T.green} />
      </div>
      <div>
        <h4 style={{ fontFamily: "'Rajdhani',sans-serif", fontSize: "1.02rem", fontWeight: 700, marginBottom: 3 }}>{f.title}</h4>
        <p style={{ color: T.muted, fontSize: "0.875rem", lineHeight: 1.6 }}>{f.desc}</p>
      </div>
    </div>
  );
}

export default function About({ T }) {
  return (
    <Section id="about" T={T} bg={T.bg}>
      <SectionHeader T={T} tag="About Us" title="Hamare Baare Mein" sub="Sana EV Charger Repairing Center — where expertise meets trust." />
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem", alignItems: "center" }} className="about-grid">
        <style>{`@media(max-width:768px){.about-grid{grid-template-columns:1fr!important}}`}</style>
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          {FEATURES.map((f) => <FeatureItem key={f.title} f={f} T={T} />)}
        </div>
        <div style={{ background: T.bg3, border: `1px solid ${T.border}`, borderRadius: 20, padding: "2.5rem", textAlign: "center" }}>
          <svg viewBox="0 0 280 260" fill="none" style={{ width: "100%", maxWidth: 280, opacity: 0.9 }}>
            <rect x="20" y="20" width="240" height="220" rx="14" fill={`${T.green}06`} stroke={`${T.green}30`} strokeWidth="1.5" />
            <line x1="60" y1="20" x2="60" y2="240" stroke={`${T.green}20`} strokeWidth="1" />
            <line x1="140" y1="20" x2="140" y2="240" stroke={`${T.green}20`} strokeWidth="1" />
            <line x1="220" y1="20" x2="220" y2="240" stroke={`${T.green}20`} strokeWidth="1" />
            <line x1="20" y1="80" x2="260" y2="80" stroke={`${T.green}20`} strokeWidth="1" />
            <line x1="20" y1="160" x2="260" y2="160" stroke={`${T.green}20`} strokeWidth="1" />
            <rect x="90" y="90" width="100" height="80" rx="6" fill={`${T.green}10`} stroke={`${T.green}60`} strokeWidth="1.5" />
            <path d="M148 105l-18 30h14l-8 20 22-30h-14l4-20z" fill={T.green} opacity="0.9" />
            {[105, 120, 135, 150].map((y) => (
              <g key={y}>
                <line x1="70" y1={y} x2="90" y2={y} stroke={T.green} strokeWidth="2" />
                <circle cx="68" cy={y} r="3" fill={T.green} opacity="0.5" />
                <line x1="190" y1={y} x2="210" y2={y} stroke={T.green} strokeWidth="2" />
                <circle cx="212" cy={y} r="3" fill={T.green} opacity="0.5" />
              </g>
            ))}
            {[[50, 50], [230, 50], [50, 210], [230, 210]].map(([cx, cy]) => (
              <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="8" fill={`${T.green}12`} stroke={`${T.green}50`} strokeWidth="1.5" />
            ))}
          </svg>
          <div style={{ marginTop: "1.5rem", fontFamily: "'Rajdhani',sans-serif", fontSize: "1.3rem", fontWeight: 600, color: T.green }}>
            <span style={{ color: T.text }}>Powered by </span>Expertise
          </div>
        </div>
      </div>
    </Section>
  );
}
