import Icon from "../icons/Icon";

export default function Footer({ T, scrollTo }) {
  return (
    <footer style={{ background: T.bg, borderTop: `1px solid ${T.border}` }}>
      <div style={{ padding: "60px 2rem 40px", maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "2fr 1fr 1fr", gap: "3rem" }} className="footer-grid">
        <style>{`@media(max-width:768px){.footer-grid{grid-template-columns:1fr!important}}`}</style>
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 10, fontFamily: "'Rajdhani',sans-serif", fontSize: "1.25rem", fontWeight: 700, color: T.green, marginBottom: "0.8rem" }}>
            <Icon id="bolt" size={32} />
            Sana EV Charger<span style={{ color: T.text }}>&nbsp;Repairing Center</span>
          </div>
          <p style={{ color: T.muted, fontSize: "0.88rem", lineHeight: 1.7, maxWidth: 320 }}>
            EV Charger, Inverter, UPS, Motor Controller aur SMPS ki trusted repair service. Quality, speed aur honesty hamare core values hain.
          </p>
          <a href="https://www.youtube.com/@SanaEVCharger" target="_blank" rel="noreferrer"
            style={{ marginTop: "1.5rem", display: "inline-flex", alignItems: "center", gap: 10, background: "rgba(255,0,0,0.1)", border: "1px solid rgba(255,60,60,0.25)", borderRadius: 10, padding: "10px 16px", color: "#ff5252", textDecoration: "none", fontSize: "0.88rem", fontWeight: 600, transition: "all 0.25s" }}
            onMouseEnter={e => e.currentTarget.style.borderColor = "#ff5252"}
            onMouseLeave={e => e.currentTarget.style.borderColor = "rgba(255,60,60,0.25)"}
          >
            <Icon id="yt" size={20} color="#ff5252" /> Hamara YouTube Channel Dekhein
          </a>
        </div>
        {[
          { title: "Quick Links", items: [["home", "Home"], ["products", "Services"], ["about", "About"], ["contact", "Contact"]] },
          { title: "Services", items: [["products", "EV Charger Repair"], ["products", "Inverter Repair"], ["products", "Online UPS Repair"], ["products", "Motor Controller"], ["products", "SMPS Repair"]] },
        ].map(({ title, items }) => (
          <div key={title}>
            <h5 style={{ fontFamily: "'Rajdhani',sans-serif", fontSize: "0.95rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "1rem", paddingBottom: "0.5rem", borderBottom: `1px solid ${T.border}` }}>{title}</h5>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.55rem" }}>
              {items.map(([id, label]) => (
                <li key={label}>
                  <button onClick={() => scrollTo(id)} style={{ background: "transparent", border: "none", color: T.muted, cursor: "pointer", fontSize: "0.88rem", display: "flex", alignItems: "center", gap: 6, padding: 0, transition: "color 0.2s" }}
                    onMouseEnter={e => e.currentTarget.style.color = T.green}
                    onMouseLeave={e => e.currentTarget.style.color = T.muted}>
                    <span style={{ color: T.green, fontSize: "1.1rem" }}>›</span> {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div style={{ borderTop: `1px solid ${T.border}`, padding: "18px 2rem", maxWidth: 1100, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "1rem" }}>
        <p style={{ color: T.muted, fontSize: "0.82rem" }}>© 2025 <span style={{ color: T.green }}>Sana EV Charger Repairing Center</span>. All Rights Reserved.</p>
        <p style={{ color: T.muted, fontSize: "0.82rem" }}>Made with ⚡ for EV Revolution</p>
      </div>
    </footer>
  );
}
