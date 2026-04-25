import { useState, useEffect } from "react";
import Icon from "../icons/Icon";

export default function Navbar({ T, dark, setDark, scrollTo, menuOpen, setMenuOpen, active }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  const navLinks = ["home", "products", "about", "customers", "contact"];
  const navLabels = { home: "Home", products: "Services", about: "About", customers: "Customers", contact: "Contact" };
  const navIcons = { home: "home", products: "grid", about: "info", customers: "users", contact: "phone" };

  const nav = {
    position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000,
    background: scrolled
      ? (dark ? "rgba(8,13,15,0.95)" : "rgba(240,249,246,0.95)")
      : "transparent",
    backdropFilter: scrolled ? "blur(20px)" : "none",
    borderBottom: scrolled ? `1px solid ${T.border}` : "1px solid transparent",
    padding: "0 2rem", display: "flex", alignItems: "center",
    justifyContent: "space-between", height: 68, transition: "all 0.3s",
  };

  return (
    <nav style={nav}>
      {/* Logo */}
      <div
        onClick={() => scrollTo("home")}
        style={{ display: "flex", alignItems: "center", gap: 10, fontFamily: "'Rajdhani',sans-serif", fontSize: "1.3rem", fontWeight: 700, color: T.green, cursor: "pointer", userSelect: "none" }}
      >
        <Icon id="bolt" size={36} />
        <span>Sana EV <span style={{ color: T.text }}>Repairing</span></span>
      </div>

      {/* Desktop Links */}
      <ul style={{ display: "flex", alignItems: "center", gap: 4, listStyle: "none" }} className="desktop-nav">
        <style>{`@media(max-width:768px){.desktop-nav{display:none!important}}`}</style>
        {navLinks.map((id) => (
          <li key={id}>
            <button
              onClick={() => scrollTo(id)}
              style={{
                display: "flex", alignItems: "center", gap: 6, padding: "8px 14px",
                background: id === "contact" ? T.green : active === id ? T.greenGlow : "transparent",
                color: id === "contact" ? "#000" : active === id ? T.green : T.muted,
                border: "none", borderRadius: 8, cursor: "pointer", fontSize: "0.9rem",
                fontWeight: 600, fontFamily: "'Rajdhani',sans-serif", letterSpacing: "0.04em", transition: "all 0.2s",
              }}
            >
              <Icon id={navIcons[id]} size={15} color={id === "contact" ? "#000" : active === id ? T.green : T.muted} />
              {navLabels[id]}
            </button>
          </li>
        ))}
        <li>
          <button
            onClick={() => setDark(!dark)}
            style={{ background: T.card, border: `1px solid ${T.border}`, borderRadius: 8, width: 36, height: 36, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", transition: "all 0.2s", marginLeft: 4 }}
          >
            <Icon id={dark ? "sun" : "moon"} size={16} color={T.muted} />
          </button>
        </li>
      </ul>

      {/* Mobile Controls */}
      <div style={{ display: "none" }} className="mobile-nav">
        <style>{`@media(max-width:768px){.mobile-nav{display:flex!important;gap:8px;align-items:center}}`}</style>
        <button onClick={() => setDark(!dark)} style={{ background: T.card, border: `1px solid ${T.border}`, borderRadius: 8, width: 36, height: 36, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}>
          <Icon id={dark ? "sun" : "moon"} size={16} color={T.muted} />
        </button>
        <button onClick={() => setMenuOpen(!menuOpen)} style={{ background: T.card, border: `1px solid ${T.border}`, borderRadius: 8, width: 36, height: 36, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}>
          <Icon id={menuOpen ? "x" : "menu"} size={18} color={T.text} />
        </button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div style={{ position: "fixed", top: 68, left: 0, right: 0, background: dark ? "rgba(8,13,15,0.98)" : "rgba(240,249,246,0.98)", backdropFilter: "blur(20px)", borderBottom: `1px solid ${T.border}`, padding: "1rem", zIndex: 999 }}>
          {navLinks.map((id) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              style={{ display: "flex", width: "100%", alignItems: "center", gap: 10, padding: "12px 16px", background: "transparent", color: active === id ? T.green : T.text, border: "none", borderRadius: 10, cursor: "pointer", fontSize: "1rem", fontWeight: 600, fontFamily: "'Rajdhani',sans-serif", marginBottom: 4 }}
            >
              <Icon id={navIcons[id]} size={18} color={active === id ? T.green : T.muted} />
              {navLabels[id]}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
