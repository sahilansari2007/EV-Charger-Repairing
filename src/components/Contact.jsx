import { useState } from "react";
import Icon from "../icons/Icon";
import { Section, SectionHeader } from "./UI";
import { CONTACT_INFO } from "../data";

export default function Contact({ T }) {
  const [form, setForm] = useState({ name: "", phone: "", service: "", problem: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = () => {
    alert("Message bheja gaya! Hum jald hi sampark karenge.");
    setSent(true);
    setForm({ name: "", phone: "", service: "", problem: "" });
    setTimeout(() => setSent(false), 3000);
  };

  const inputStyle = { background: T.card, border: `1px solid ${T.border}`, borderRadius: 10, padding: "12px 14px", color: T.text, fontFamily: "'Exo 2',sans-serif", fontSize: "0.93rem", width: "100%", outline: "none", transition: "border-color 0.25s" };
  const labelStyle = { fontSize: "0.82rem", color: T.muted, fontWeight: 600, letterSpacing: "0.04em", marginBottom: 6, display: "block" };

  return (
    <Section id="contact" T={T} bg={T.bg2}>
      <SectionHeader T={T} tag="Contact Us" title="Hamse Sampark Karein" sub="Koi bhi query ke liye call karein ya message bhejein — hum jaldi respond karte hain." />
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem" }} className="contact-grid">
        <style>{`@media(max-width:768px){.contact-grid{grid-template-columns:1fr!important}}`}</style>

        {/* Contact Info */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          {CONTACT_INFO.map((item) => (
            <div key={item.label} style={{ display: "flex", alignItems: "flex-start", gap: "1rem", padding: "1.2rem 1.4rem", background: T.card, border: `1px solid ${T.border}`, borderRadius: 12 }}>
              <div style={{ width: 44, height: 44, flexShrink: 0, background: T.greenGlow, borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Icon id={item.iconId} size={20} color={T.green} />
              </div>
              <div>
                <div style={{ fontSize: "0.78rem", color: T.muted, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 3 }}>{item.label}</div>
                <p style={{ fontSize: "0.93rem", fontWeight: 500 }}>
                  {item.href
                    ? <a href={item.href} style={{ color: T.text, textDecoration: "none" }} onMouseEnter={e => e.target.style.color = T.green} onMouseLeave={e => e.target.style.color = T.text}>{item.value}</a>
                    : item.value}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Form */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          {[
            { label: "Aapka Naam", name: "name", type: "text", placeholder: "Full name likhein..." },
            { label: "Phone Number", name: "phone", type: "tel", placeholder: "+91 XXXXX XXXXX" },
          ].map(({ label, name, type, placeholder }) => (
            <div key={name}>
              <label style={labelStyle}>{label}</label>
              <input type={type} value={form[name]} onChange={e => setForm({ ...form, [name]: e.target.value })} placeholder={placeholder} style={inputStyle}
                onFocus={e => e.target.style.borderColor = T.green} onBlur={e => e.target.style.borderColor = T.border} />
            </div>
          ))}
          <div>
            <label style={labelStyle}>Service Type</label>
            <select value={form.service} onChange={e => setForm({ ...form, service: e.target.value })} style={{ ...inputStyle, appearance: "none" }}
              onFocus={e => e.target.style.borderColor = T.green} onBlur={e => e.target.style.borderColor = T.border}>
              <option value="">-- Select Service --</option>
              {["EV Charger Repair", "Inverter Repair", "Online UPS Repair", "Motor Controller Repair", "SMPS Repair", "PCB Level Repair"].map(s => <option key={s}>{s}</option>)}
            </select>
          </div>
          <div>
            <label style={labelStyle}>Problem Batayein</label>
            <textarea value={form.problem} onChange={e => setForm({ ...form, problem: e.target.value })} placeholder="Device ka issue yahan likhein..." style={{ ...inputStyle, resize: "vertical", minHeight: 100 }}
              onFocus={e => e.target.style.borderColor = T.green} onBlur={e => e.target.style.borderColor = T.border} />
          </div>
          <button
            onClick={handleSubmit}
            style={{ background: T.green, color: "#000", border: "none", cursor: "pointer", padding: "13px", borderRadius: 10, fontWeight: 700, fontSize: "1rem", fontFamily: "'Rajdhani',sans-serif", display: "flex", alignItems: "center", justifyContent: "center", gap: 8, transition: "all 0.25s", boxShadow: `0 4px 20px ${T.green}30` }}
            onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.background = T.accent; }}
            onMouseLeave={e => { e.currentTarget.style.transform = ""; e.currentTarget.style.background = T.green; }}
          >
            <Icon id="send" size={17} color="#000" sw={2.2} />
            {sent ? "Bheja Gaya ✓" : "Message Bhejein"}
          </button>
        </div>
      </div>
    </Section>
  );
}
