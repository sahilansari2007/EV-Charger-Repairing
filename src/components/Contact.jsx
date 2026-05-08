import { useState } from "react";
import Icon from "../icons/Icon";
import { Section, SectionHeader } from "./UI";
import { CONTACT_INFO } from "../data";

export default function Contact({ T }) {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    service: "",
    problem: "",
    homeService: false,
    address: "",
    location: "",
    chargerImage: null,
    date: "",
    time: "",
  });

  const [sent, setSent] = useState(false);

const getLocation = () => {
  if (!navigator.geolocation) {
    alert("Location support nahi hai.");
    return;
  }

  navigator.geolocation.getCurrentPosition(
    (position) => {
      const lat = position.coords.latitude;
      const lng = position.coords.longitude;

      setForm({
        ...form,
        location: `${lat}, ${lng}`,
      });
    },
    () => {
      alert("Allow Location.");
    }
  );
};

  const handleSubmit = () => {
    if (!form.phone.trim()) {
      alert("Phone Number Must be Entered.");
      return;
    }

    if (!/^[0-9]{10}$/.test(form.phone)) {
      alert("Phone Number must be exactly 10 digits.");
      return;
    }

    if (form.homeService && !form.address.trim()) {
      alert("Address must be Entered for Home Visit");
      return;
    }

    console.log("Form Data:", form);

    if (form.homeService) {
      alert(
        "Home Service Request has been sent! 🏠 Technician will contact you soon."
      );
    } else {
      alert("Request has been Sent! We will contact you soon.");
    }

    setSent(true);

    setForm({
      name: "",
      phone: "",
      service: "",
      problem: "",
      homeService: false,
      address: "",
      location: "",
      chargerImage: null,
      date: "",
      time: "",
    });

    setTimeout(() => setSent(false), 3000);
  };

  const inputStyle = {
    background: T.card,
    border: `1px solid ${T.border}`,
    borderRadius: 10,
    padding: "12px 14px",
    color: T.text,
    fontFamily: "'Exo 2',sans-serif",
    fontSize: "0.93rem",
    width: "100%",
    outline: "none",
    transition: "border-color 0.25s",
  };

  const labelStyle = {
    fontSize: "0.82rem",
    color: T.muted,
    fontWeight: 600,
    letterSpacing: "0.04em",
    marginBottom: 6,
    display: "block",
  };

  return (
    <Section id="contact" T={T} bg={T.bg2}>
      <SectionHeader
        T={T}
        tag="Contact Us"
        title="Hamse Sampark Karein"
        sub="Koi bhi query ke liye call karein ya message bhejein — hum jaldi respond karte hain."
      />

      <div
        style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem" }}
        className="contact-grid"
      >
        <style>{`
          @media(max-width:768px){
            .contact-grid{grid-template-columns:1fr!important}
          }
        `}</style>

        {/* Contact Info */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          {CONTACT_INFO.map((item) => (
            <div
              key={item.label}
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "1rem",
                padding: "1.2rem 1.4rem",
                background: T.card,
                border: `1px solid ${T.border}`,
                borderRadius: 12,
              }}
            >
              <div
                style={{
                  width: 44,
                  height: 44,
                  flexShrink: 0,
                  background: T.greenGlow,
                  borderRadius: 10,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Icon id={item.iconId} size={20} color={T.green} />
              </div>

              <div>
                <div
                  style={{
                    fontSize: "0.78rem",
                    color: T.muted,
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                    marginBottom: 3,
                  }}
                >
                  {item.label}
                </div>

                <p style={{ fontSize: "0.93rem", fontWeight: 500 }}>
                  {item.href ? (
                    <a
                      href={item.href}
                      style={{ color: T.text, textDecoration: "none" }}
                    >
                      {item.value}
                    </a>
                  ) : (
                    item.value
                  )}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Form */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          {/* Highlight Home Visit */}
          <div
            style={{
              background: T.greenGlow,
              border: `1px solid ${T.green}`,
              color: T.green,
              padding: "12px",
              borderRadius: 10,
              fontWeight: 700,
              textAlign: "center",
            }}
          >
            🏠 Home Visit Available
          </div>

          {[
            {
              label: "Name",
              name: "name",
              type: "text",
              placeholder: "Enter Your Full Name",
            },
            {
              label: "Phone Number *",
              name: "phone",
              type: "tel",
              placeholder: "Enter 10 Digit Number",
            },
          ].map(({ label, name, type, placeholder }) => (
            <div key={name}>
              <label style={labelStyle}>{label}</label>
              <input
                type={type}
                value={form[name]}
                maxLength={name === "phone" ? 10 : undefined}
                onChange={(e) =>
                  setForm({
                    ...form,
                    [name]:
                      name === "phone"
                        ? e.target.value.replace(/\D/g, "")
                        : e.target.value,
                  })
                }
                placeholder={placeholder}
                style={inputStyle}
              />
            </div>
          ))}

          <div>
            <label style={labelStyle}>Service Type</label>
            <select
              value={form.service}
              onChange={(e) => setForm({ ...form, service: e.target.value })}
              style={{ ...inputStyle, appearance: "none" }}
            >
              <option value="">-- Select Service --</option>

              {[
                "EV Charger Repair",
                "Inverter Repair",
                "Online UPS Repair",
                "Motor Controller Repair",
                "SMPS Repair",
                "PCB Level Repair",
              ].map((s) => (
                <option key={s}>{s}</option>
              ))}
            </select>
          </div>

          {/* UPDATED Home Service Checkbox UI */}
          <div>
            <label style={labelStyle}>Service Preference</label>

            <div
              onClick={() =>
                setForm((prev) => ({
                  ...prev,
                  homeService: !prev.homeService,
                }))
              }
              style={{
                background: form.homeService ? T.greenGlow : T.card,
                border: `1px solid ${
                  form.homeService ? T.green : T.border
                }`,
                borderRadius: 14,
                padding: "14px 16px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "12px",
                cursor: "pointer",
                transition: "0.25s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow = `0 8px 20px ${T.green}20`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                }}
              >
                <div
                  style={{
                    width: 42,
                    height: 42,
                    borderRadius: 12,
                    background: T.greenGlow,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "18px",
                  }}
                >
                  🏠
                </div>

                <div>
                  <div
                    style={{
                      color: T.text,
                      fontWeight: 700,
                      fontSize: "15px",
                    }}
                  >
                    Ghar par Service Chahiye
                  </div>

                  <div
                    style={{
                      color: T.muted,
                      fontSize: "12px",
                      marginTop: 2,
                    }}
                  >
                    Home Visit Available
                  </div>
                </div>
              </div>

              <div
                style={{
                  width: 52,
                  height: 30,
                  borderRadius: 50,
                  background: form.homeService ? T.green : "#555",
                  padding: 4,
                  transition: "0.25s ease",
                }}
              >
                <div
                  style={{
                    width: 22,
                    height: 22,
                    borderRadius: "50%",
                    background: "#fff",
                    transform: form.homeService
                      ? "translateX(22px)"
                      : "translateX(0px)",
                    transition: "0.25s ease",
                  }}
                />
              </div>
            </div>
          </div>

          <div>
            <label style={labelStyle}>Describe Your Problem here</label>
            <textarea
              value={form.problem}
              onChange={(e) => setForm({ ...form, problem: e.target.value })}
              placeholder="Device ka issue yahan likhein..."
              style={{ ...inputStyle, resize: "vertical", minHeight: 100 }}
            />
          </div>

          {/* Optional Charger Image */}
          <div>
            <label style={labelStyle}>Upload Charger Image (Optional)</label>

            <input
              id="chargerUpload"
              type="file"
              accept="image/*"
              style={{ display: "none" }}
              onChange={(e) =>
                setForm({
                  ...form,
                  chargerImage: e.target.files[0] || null,
                })
              }
            />

            <div
              style={{
                background: T.card,
                border: `1px dashed ${T.border}`,
                borderRadius: 12,
                padding: "16px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "12px",
              }}
            >
              <div style={{ flex: 1 }}>
                <div
                  style={{
                    fontWeight: 600,
                    color: T.text,
                    fontSize: "0.92rem",
                    marginBottom: 4,
                  }}
                >
                  {form.chargerImage
                    ? form.chargerImage.name
                    : "No image selected"}
                </div>

                <div
                  style={{
                    color: T.muted,
                    fontSize: "0.8rem",
                  }}
                >
                  JPG, PNG, WEBP supported
                </div>
              </div>

              <label
                htmlFor="chargerUpload"
                style={{
                  background: T.green,
                  color: "#000",
                  padding: "10px 16px",
                  borderRadius: 10,
                  fontWeight: 700,
                  cursor: "pointer",
                  whiteSpace: "nowrap",
                }}
              >
                Choose File
              </label>
            </div>
          </div>

          {form.homeService && (
            <>
              <div>
                <label style={labelStyle}>Address *</label>
                <input
                  type="text"
                  value={form.address}
                  onChange={(e) =>
                    setForm({ ...form, address: e.target.value })
                  }
                  placeholder="Enter your Full address"
                  style={inputStyle}
                />
              </div>

              <div>
                <label style={labelStyle}>Current Location</label>

                <div style={{ display: "flex", gap: "10px" }}>
                  <input
                    type="text"
                    value={form.location}
                    readOnly
                    placeholder="Location"
                    style={inputStyle}
                  />

                  <button
                    type="button"
                    onClick={getLocation}
                    style={{
                      background: T.green,
                      border: "none",
                      padding: "10px 14px",
                      borderRadius: 10,
                      fontWeight: 700,
                      cursor: "pointer",
                    }}
                  >
                    📍 Get
                  </button>
                </div>
              </div>

              <div style={{ display: "flex", gap: "1rem" }}>
                <div style={{ flex: 1 }}>
                  <label style={labelStyle}>Date</label>
                  <input
                    type="date"
                    value={form.date}
                    onChange={(e) => setForm({ ...form, date: e.target.value })}
                    style={inputStyle}
                  />
                </div>

                <div style={{ flex: 1 }}>
                  <label style={labelStyle}>Time Slot</label>
                  <input
                    type="time"
                    value={form.time}
                    onChange={(e) => setForm({ ...form, time: e.target.value })}
                    style={inputStyle}
                  />
                </div>
              </div>
            </>
          )}

          <button
            onClick={handleSubmit}
            style={{
              background: T.green,
              color: "#000",
              border: "none",
              cursor: "pointer",
              padding: "13px",
              borderRadius: 10,
              fontWeight: 700,
              fontSize: "1rem",
              fontFamily: "'Rajdhani',sans-serif",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 8,
            }}
          >
            <Icon id="send" size={17} color="#000" sw={2.2} />
            {sent ? "Bheja Gaya ✓" : "Send Message"}
          </button>
        </div>
      </div>
    </Section>
  );
}