import { useState } from "react";
import { NAV_LINKS } from "../constants/data";

export default function Navbar({ activeNav, setActiveNav }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  const toId = (label) =>
    label.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
      background: "rgba(250,248,245,0.95)", backdropFilter: "blur(12px)",
      borderBottom: "1px solid #EDE8E2",
    }}>
      <div style={{
        maxWidth: 1100, margin: "0 auto", padding: "0 24px",
        height: 64, display: "flex", alignItems: "center", justifyContent: "space-between",
      }}>
        {/* Logo */}
        <div style={{ cursor: "pointer" }} onClick={() => scrollTo("inicio")}>
          <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 20, fontWeight: 600, letterSpacing: "0.06em", color: "var(--dark)", lineHeight: 1 }}>
            CAROLASHES<span style={{ color: "var(--gold)" }}>·</span>STUDIO
          </div>
          <div style={{ fontFamily: "var(--sans)", fontSize: 9, letterSpacing: "0.3em", color: "var(--mid)", textTransform: "uppercase", marginTop: 2 }}>
            by Carolina Perez💋
          </div>
        </div>

        {/* Desktop links */}
        <div className="desktop-nav" style={{ display: "flex", gap: 36 }}>
          {NAV_LINKS.map((l) => (
            <span
              key={l}
              className={`nav-link ${activeNav === l ? "active" : ""}`}
              onClick={() => { setActiveNav(l); scrollTo(toId(l)); }}
            >
              {l}
            </span>
          ))}
        </div>

        <a href="https://wa.me/573164076231" target="_blank" rel="noreferrer" className="btn-primary" style={{ padding: "10px 22px", gap: 10, fontSize: 10 }}>
          Reservar →
        </a>

        {/* Hamburger */}
        <button
          className="hamburger"
          style={{ background: "none", border: "none", cursor: "pointer", padding: 8 }}
          onClick={() => setMenuOpen((v) => !v)}
        >
          <div style={{ width: 22, height: 1.5, background: "var(--dark)", marginBottom: 5 }} />
          <div style={{ width: 22, height: 1.5, background: "var(--dark)", marginBottom: 5 }} />
          <div style={{ width: 14, height: 1.5, background: "var(--dark)" }} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{
          background: "var(--cream)", borderTop: "1px solid #EDE8E2",
          padding: "24px", display: "flex", flexDirection: "column", gap: 20,
        }}>
          {NAV_LINKS.map((l) => (
            <span key={l} className="nav-link" onClick={() => { scrollTo(toId(l)); setMenuOpen(false); }}>
              {l}
            </span>
          ))}
        </div>
      )}
    </nav>
  );
}
