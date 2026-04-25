import { useState, useEffect } from "react";
import { DARK, LIGHT } from "./theme";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Products from "./components/Products";
import About from "./components/About";
import Customers from "./components/Customers";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const [dark, setDark] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const T = dark ? DARK : LIGHT;

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActiveSection(e.target.id)),
      { threshold: 0.3 }
    );
    ["home", "products", "about", "customers", "contact"].forEach((id) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  return (
    <div style={{ fontFamily: "'Exo 2', 'Rajdhani', sans-serif", background: T.bg, color: T.text, minHeight: "100vh", overflowX: "hidden", transition: "background 0.3s, color 0.3s" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Rajdhani:wght@400;600;700&family=Exo+2:wght@300;400;600;800&display=swap');
        * { margin:0; padding:0; box-sizing:border-box; }
        html { scroll-behavior:smooth; }
        body { overflow-x:hidden; }
        @keyframes pulse { 0%,100%{opacity:1;box-shadow:0 0 0 0 rgba(16,185,129,0.4)} 50%{opacity:0.7;box-shadow:0 0 0 8px rgba(16,185,129,0)} }
        @keyframes marquee { from{transform:translateX(0)} to{transform:translateX(-50%)} }
        @keyframes fadeIn { from{opacity:0;transform:translateY(16px)} to{opacity:1;transform:translateY(0)} }
        .marquee-track { animation: marquee 22s linear infinite; }
        ::-webkit-scrollbar { width:6px; }
        ::-webkit-scrollbar-track { background:transparent; }
        ::-webkit-scrollbar-thumb { background:rgba(16,185,129,0.3); border-radius:3px; }
      `}</style>
      <Navbar T={T} dark={dark} setDark={setDark} scrollTo={scrollTo} menuOpen={menuOpen} setMenuOpen={setMenuOpen} active={activeSection} />
      <Hero T={T} scrollTo={scrollTo} />
      <Products T={T} />
      <About T={T} />
      <Customers T={T} />
      <Contact T={T} />
      <Footer T={T} scrollTo={scrollTo} />
    </div>
  );
}
