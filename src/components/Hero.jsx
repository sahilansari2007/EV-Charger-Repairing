import Icon from "../icons/Icon";

export default function Hero({ T, scrollTo }) {
  return (
    <section
      id="home"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        padding: "100px 2rem 2rem",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* BG gradient */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
          background: `radial-gradient(ellipse 70% 60% at 60% 40%, ${T.greenGlow} 0%, transparent 70%), radial-gradient(ellipse 40% 50% at 10% 80%, ${T.greenGlow} 0%, transparent 60%)`,
        }}
      />
      {/* Grid lines */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
          opacity: 0.4,
          backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 39px, ${T.border} 40px), repeating-linear-gradient(90deg, transparent, transparent 39px, ${T.border} 40px)`,
        }}
      />
      {/* Decorative bolt */}
      <svg
        style={{
          position: "absolute",
          right: -60,
          top: "50%",
          transform: "translateY(-50%)",
          width: 500,
          height: 500,
          opacity: 0.06,
          zIndex: 0,
        }}
        viewBox="0 0 460 460"
        fill="none"
      >
        <path
          d="M260 40L80 240h130l-50 180L400 200H260L300 40z"
          fill={T.green}
        />
      </svg>

      <div
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: 700,
          animation: "fadeIn 0.8s ease",
        }}
      >
        {/* Badge */}

        <div
          onClick={() =>
            window.open("https://www.google.com/maps?q=YOUR_LOCATION", "_blank")
          }
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            background: T.greenGlow,
            border: `1px solid ${T.green}40`,
            borderRadius: 100,
            padding: "6px 16px",
            fontSize: "0.78rem",
            fontWeight: 700,
            color: T.green,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            marginBottom: "1.5rem",
            cursor: "pointer",
          }}
        >
          <span
            style={{
              width: 7,
              height: 7,
              background: T.green,
              borderRadius: "50%",
              animation: "pulse 1.5s infinite",
              display: "inline-block",
            }}
          />
          Expert EV Repair Technicians
        </div>

        <h1
          style={{
            fontFamily: "'Rajdhani',sans-serif",
            fontSize: "clamp(2.8rem,6vw,5rem)",
            fontWeight: 700,
            lineHeight: 1.05,
            marginBottom: "1.2rem",
          }}
        >
          Sana{" "}
          <span style={{ color: T.green, textShadow: `0 0 40px ${T.green}50` }}>
            EV Charger
          </span>
          <br />
          Repairing Center
        </h1>

        <p
          style={{
            fontSize: "1.05rem",
            color: T.muted,
            lineHeight: 1.8,
            marginBottom: "2.5rem",
            maxWidth: 520,
          }}
        >
          EV Charger, Inverter, Online UPS, Motor Controller, aur SMPS ki
          professional repair service — fast, reliable aur affordable.
        </p>

        <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
          <button
            onClick={() => scrollTo("contact")}
            style={{
              background: T.green,
              color: "#000",
              padding: "13px 28px",
              borderRadius: 10,
              fontWeight: 700,
              fontSize: "1rem",
              fontFamily: "'Rajdhani',sans-serif",
              border: "none",
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              cursor: "pointer",
              boxShadow: `0 4px 24px ${T.green}40`,
              transition: "all 0.25s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow = `0 8px 32px ${T.green}60`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "";
              e.currentTarget.style.boxShadow = `0 4px 24px ${T.green}40`;
            }}
          >
            <Icon id="phone" size={18} color="#000" /> Abhi Call Karein
          </button>
          <button
            onClick={() => scrollTo("products")}
            style={{
              background: "transparent",
              color: T.text,
              padding: "13px 28px",
              borderRadius: 10,
              fontWeight: 600,
              fontSize: "1rem",
              fontFamily: "'Rajdhani',sans-serif",
              border: `1.5px solid ${T.border}`,
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              cursor: "pointer",
              transition: "all 0.25s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = T.green;
              e.currentTarget.style.color = T.green;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = T.border;
              e.currentTarget.style.color = T.text;
            }}
          >
            <Icon id="grid" size={18} /> Services Dekhein
          </button>
        </div>

        <div
          style={{
            display: "flex",
            gap: "2.5rem",
            marginTop: "3.5rem",
            flexWrap: "wrap",
          }}
        >
          {[
            ["300+", "Repairs Done"],
            ["10+", "Years Experience"],
            ["100%", "Genuine Parts"],
          ].map(([num, label]) => (
            <div key={label}>
              <div
                style={{
                  fontFamily: "'Rajdhani',sans-serif",
                  fontSize: "2rem",
                  fontWeight: 700,
                  color: T.green,
                }}
              >
                {num}
              </div>
              <div
                style={{
                  fontSize: "0.78rem",
                  color: T.muted,
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                }}
              >
                {label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
