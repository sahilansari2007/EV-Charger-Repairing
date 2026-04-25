import { useState } from "react";
import Icon from "../icons/Icon";
import { Section, SectionHeader } from "./UI";
import { SERVICES } from "../data";

function ServiceCard({ s, T }) {
  const [hov, setHov] = useState(false);
  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        background: T.card, border: `1px solid ${hov ? T.green + "60" : T.border}`,
        borderRadius: 16, padding: "1.8rem", transition: "all 0.3s",
        position: "relative", overflow: "hidden",
        transform: hov ? "translateY(-5px)" : "none",
        boxShadow: hov ? `0 16px 48px ${T.green}15` : "none",
      }}
    >
      {hov && <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: `linear-gradient(90deg,${T.green},${T.accent})`, borderRadius: "16px 16px 0 0" }} />}
      <div style={{ width: 52, height: 52, background: T.greenGlow, borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1.2rem" }}>
        <Icon id={s.iconId} size={26} color={T.green} />
      </div>
      <div style={{ fontFamily: "'Rajdhani',sans-serif", fontSize: "1.2rem", fontWeight: 700, marginBottom: 6 }}>{s.name}</div>
      <p style={{ color: T.muted, fontSize: "0.88rem", lineHeight: 1.7 }}>{s.desc}</p>
      <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginTop: "1rem" }}>
        <span style={{ background: T.greenGlow, border: `1px solid ${T.green}40`, color: T.green, fontSize: "0.72rem", fontWeight: 700, padding: "4px 10px", borderRadius: 100 }}>{s.tag}</span>
        {s.extraTag && <span style={{ background: `${T.yellow}15`, border: `1px solid ${T.yellow}40`, color: T.yellow, fontSize: "0.72rem", fontWeight: 700, padding: "4px 10px", borderRadius: 100 }}>{s.extraTag}</span>}
      </div>
    </div>
  );
}

export default function Products({ T }) {
  return (
    <Section id="products" T={T} bg={T.bg2}>
      <SectionHeader T={T} tag="Our Services" title="Kya Kya Repair Hota Hai?" sub="Hum in sab electronics devices ki expert repair karte hain — quality guarantee ke saath." />
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(280px,1fr))", gap: "1.4rem" }}>
        {SERVICES.map((s) => <ServiceCard key={s.name} s={s} T={T} />)}
      </div>
    </Section>
  );
}
