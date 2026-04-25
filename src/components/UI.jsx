export function Section({ id, T, bg, children }) {
  return (
    <section id={id} style={{ background: bg, padding: "90px 2rem" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>{children}</div>
    </section>
  );
}

export function SectionHeader({ T, tag, title, sub }) {
  return (
    <div style={{ marginBottom: "3rem" }}>
      <div style={{ fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: T.green, marginBottom: 6 }}>{tag}</div>
      <h2 style={{ fontFamily: "'Rajdhani',sans-serif", fontSize: "clamp(1.9rem,3.5vw,2.7rem)", fontWeight: 700, marginBottom: "1rem" }}>{title}</h2>
      {sub && <p style={{ color: T.muted, lineHeight: 1.7, maxWidth: 560 }}>{sub}</p>}
    </div>
  );
}
