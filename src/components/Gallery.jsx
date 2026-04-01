import { useState } from "react";
import FadeIn from "./FadeIn";
import { GALLERY, FILTERS } from "../constants/data";

export default function Gallery() {
  const [active, setActive] = useState("Todos");

  const filtered =
    active === "Todos" ? GALLERY : GALLERY.filter((i) => i.category === active);

  console.log("img:", filtered[0]?.img);

  return (
    <section id="galeria" style={{ padding: "100px 24px", background: "var(--warm)" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <FadeIn>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <span className="divider-line" style={{ margin: "0 auto 24px" }} />
            <div style={{ fontFamily: "var(--sans)", fontSize: 11, letterSpacing: "0.3em", textTransform: "uppercase", color: "var(--gold)", marginBottom: 16 }}>
              Galería
            </div>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(36px, 5vw, 56px)", fontWeight: 300, color: "var(--dark)" }}>
              Trabajos<br /><em>recientes</em>
            </h2>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div style={{ display: "flex", justifyContent: "center", gap: 4, marginBottom: 48, flexWrap: "wrap" }}>
            {FILTERS.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                style={{
                  fontFamily: "var(--sans)",
                  fontSize: 10,
                  letterSpacing: "0.25em",
                  textTransform: "uppercase",
                  padding: "10px 20px",
                  border: "0.5px solid",
                  borderColor: active === f ? "var(--gold)" : "rgba(180,150,100,0.3)",
                  background: active === f ? "var(--gold)" : "transparent",
                  color: active === f ? "white" : "rgba(26,20,16,0.5)",
                  cursor: "pointer",
                  transition: "all 0.25s ease",
                }}
              >
                {f}
              </button>
            ))}
          </div>
        </FadeIn>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 8 }}>
          {filtered.map((item, i) => (
            <FadeIn key={`${active}-${i}`} delay={i * 0.07}>
              <div
                className="gallery-item"
                style={{
                  height: item.aspect === "tall" ? 340 : item.aspect === "wide" ? 210 : 250,
                  gridColumn: item.aspect === "wide" ? "span 2" : "span 1",
                  backgroundImage: item.img ? `url(${item.img})` : "none",
                  backgroundColor: item.img ? "transparent" : `hsl(${28 + i * 11}, ${12 + i * 2}%, ${84 - i * 2}%)`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  display: "flex",
                  alignItems: "flex-end",
                  justifyContent: "flex-start",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                {item.img && (
                  <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.15)" }} />
                )}

                {!item.img && (
                  <div style={{
                    position: "absolute", inset: 0,
                    background: `repeating-linear-gradient(135deg, transparent, transparent 40px, rgba(255,255,255,0.04) 40px, rgba(255,255,255,0.04) 41px)`,
                  }} />
                )}

                <div style={{
                  position: "absolute", top: 14, left: 14,
                  fontFamily: "var(--sans)", fontSize: 9,
                  letterSpacing: "0.25em", textTransform: "uppercase",
                  color: item.img ? "rgba(255,255,255,0.85)" : "rgba(26,20,16,0.45)",
                  background: item.img ? "rgba(0,0,0,0.3)" : "rgba(255,255,255,0.55)",
                  backdropFilter: "blur(6px)",
                  padding: "5px 10px",
                }}>
                  {item.category}
                </div>

                <div className="gallery-overlay">
                  <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 18, fontWeight: 300, color: "white", letterSpacing: "0.05em" }}>
                    {item.label}
                  </span>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.3}>
          <div style={{ textAlign: "center", marginTop: 48 }}>
            <a href="https://www.instagram.com/carolashes_studio/" target="_blank" rel="noreferrer" className="btn-outline">
              Ver más en Instagram →
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}