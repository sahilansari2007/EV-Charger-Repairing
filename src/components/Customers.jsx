import { useState } from "react";
import Icon from "../icons/Icon";
import { Section, SectionHeader } from "./UI";
import { CUSTOMERS } from "../data";

function CustomerCard({ c, T }) {
  const [hov, setHov] = useState(false);
  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        background: T.card,
        border: `1px solid ${hov ? T.green + "50" : T.border}`,
        borderRadius: 14,
        padding: "1.6rem 1.4rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "0.8rem",
        textAlign: "center",
        transition: "all 0.3s",
        transform: hov ? "translateY(-5px)" : "none",
        boxShadow: hov ? `0 12px 36px ${T.green}10` : "none",
        cursor: "default",
      }}
    >
      <div
        style={{
          width: 56,
          height: 56,
          borderRadius: "50%",
          background: hov ? T.greenGlow : `${T.green}12`,
          border: `1.5px solid ${hov ? T.green : T.green + "40"}`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "'Rajdhani',sans-serif",
          fontSize: "1.4rem",
          fontWeight: 700,
          color: T.green,
          transition: "all 0.3s",
          boxShadow: hov ? `0 0 20px ${T.green}30` : "none",
        }}
      >
        {c.initial}
      </div>
      <div
        style={{
          fontFamily: "'Rajdhani',sans-serif",
          fontSize: "1.02rem",
          fontWeight: 700,
        }}
      >
        {c.name}
      </div>
      <span
        style={{
          fontSize: "0.72rem",
          color: T.green,
          background: T.greenGlow,
          border: `1px solid ${T.green}25`,
          borderRadius: 100,
          padding: "3px 10px",
        }}
      >
        EV Charger Repair
      </span>
    </div>
  );
}

export default function Customers({ T }) {
  return (
    <Section id="customers" T={T} bg={T.bg3}>
      <div
        style={{
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "1rem",
          marginBottom: "3rem",
        }}
      >
        <SectionHeader
          T={T}
          tag="Our Customers"
          title="Jinke Charger Humne Repair Kiye"
          sub="India ke top EV aur electronics brands hamare trusted customers hain."
        />
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            background: `${T.yellow}12`,
            border: `1px solid ${T.yellow}30`,
            borderRadius: 100,
            padding: "6px 16px",
            color: T.yellow,
            fontSize: "0.75rem",
            fontWeight: 700,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            whiteSpace: "nowrap",
          }}
        >
          <Icon id="star" size={13} color={T.yellow} /> 10 Trusted Brands
        </div>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill,minmax(190px,1fr))",
          gap: "1.2rem",
        }}
      >
        {CUSTOMERS.map((c) => (
          <CustomerCard key={c.name} c={c} T={T} />
        ))}
      </div>
      <div
        style={{
          overflow: "hidden",
          marginTop: "3.5rem",
          padding: "1.2rem 0",
          borderTop: `1px solid ${T.border}`,
          borderBottom: `1px solid ${T.border}`,
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            bottom: 0,
            left: 0,
            width: 80,
            background: `linear-gradient(90deg,${T.bg3},transparent)`,
            zIndex: 2,
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 0,
            bottom: 0,
            right: 0,
            width: 80,
            background: `linear-gradient(-90deg,${T.bg3},transparent)`,
            zIndex: 2,
          }}
        />
        <div
          className="marquee-track"
          style={{
            display: "flex",
            gap: "3rem",
            alignItems: "center",
            width: "max-content",
          }}
        >
          {[...CUSTOMERS, ...CUSTOMERS].map((c, i) => (
            <span
              key={i}
              style={{
                fontFamily: "'Rajdhani',sans-serif",
                fontSize: "1.05rem",
                fontWeight: 700,
                color: T.muted,
                letterSpacing: "0.05em",
                display: "flex",
                alignItems: "center",
                gap: 10,
                whiteSpace: "nowrap",
              }}
            >
              <span
                style={{
                  width: 5,
                  height: 5,
                  background: T.green,
                  borderRadius: "50%",
                  opacity: 0.6,
                  display: "inline-block",
                }}
              />
              {c.name}
            </span>
          ))}
        </div>
      </div>
    </Section>
  );
}
