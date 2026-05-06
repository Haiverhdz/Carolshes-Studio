import { useState, useEffect, useCallback } from "react";
import FadeIn from "./FadeIn";
import { GALLERY, FILTERS } from "../constants/data";

/* ── Lightbox ── */
function Lightbox({ items, index, onClose, onPrev, onNext }) {
  const item = items[index];

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    window.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [onClose, onPrev, onNext]);

  if (!item) return null;

  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 1000,
        background: "rgba(10, 8, 6, 0.96)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        animation: "lbFadeIn 0.25s ease",
      }}
    >
      {/* Cerrar */}
      <button
        onClick={onClose}
        style={{
          position: "absolute",
          top: "1.5rem",
          right: "1.5rem",
          background: "rgba(255,255,255,0.08)",
          border: "0.5px solid rgba(255,255,255,0.15)",
          color: "rgba(255,255,255,0.7)",
          width: 44,
          height: 44,
          borderRadius: "50%",
          fontSize: 18,
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transition: "all 0.2s",
          zIndex: 10,
        }}
        onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.18)")}
        onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.08)")}
      >
        ✕
      </button>

      {/* Prev */}
      <button
        onClick={(e) => { e.stopPropagation(); onPrev(); }}
        style={{
          position: "absolute",
          left: "1.5rem",
          top: "50%",
          transform: "translateY(-50%)",
          background: "rgba(255,255,255,0.08)",
          border: "0.5px solid rgba(255,255,255,0.15)",
          color: "white",
          width: 52,
          height: 52,
          borderRadius: "50%",
          fontSize: 24,
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transition: "all 0.2s",
          zIndex: 10,
        }}
        onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.18)")}
        onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.08)")}
      >
        ‹
      </button>

      {/* Imagen */}
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "1.25rem",
          maxWidth: "90vw",
          maxHeight: "90vh",
        }}
      >
        <img
          key={index}
          src={item.img}
          alt={item.label}
          style={{
            maxWidth: "85vw",
            maxHeight: "78vh",
            objectFit: "contain",
            borderRadius: 4,
            animation: "lbImgIn 0.3s ease",
            boxShadow: "0 30px 80px rgba(0,0,0,0.6)",
          }}
        />
        <div style={{ textAlign: "center" }}>
          <p style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 20,
            fontStyle: "italic",
            fontWeight: 300,
            color: "rgba(255,255,255,0.9)",
            marginBottom: 4,
          }}>
            {item.label}
          </p>
          <p style={{
            fontFamily: "var(--sans)",
            fontSize: 10,
            letterSpacing: "0.25em",
            textTransform: "uppercase",
            color: "var(--gold)",
          }}>
            {item.category}
          </p>
          <p style={{
            fontFamily: "var(--sans)",
            fontSize: 10,
            color: "rgba(255,255,255,0.3)",
            letterSpacing: "0.15em",
            marginTop: 8,
          }}>
            {index + 1} / {items.length}
          </p>
        </div>
      </div>

      {/* Next */}
      <button
        onClick={(e) => { e.stopPropagation(); onNext(); }}
        style={{
          position: "absolute",
          right: "1.5rem",
          top: "50%",
          transform: "translateY(-50%)",
          background: "rgba(255,255,255,0.08)",
          border: "0.5px solid rgba(255,255,255,0.15)",
          color: "white",
          width: 52,
          height: 52,
          borderRadius: "50%",
          fontSize: 24,
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transition: "all 0.2s",
          zIndex: 10,
        }}
        onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.18)")}
        onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.08)")}
      >
        ›
      </button>
    </div>
  );
}

/* ── Gallery ── */
export default function Gallery() {
  const [active, setActive] = useState("Todos");
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const filtered =
    active === "Todos" ? GALLERY : GALLERY.filter((i) => i.category === active);

  // solo las que tienen imagen son clickeables en el lightbox
  const withImg = filtered.filter((i) => i.img);

  const openLightbox = (item) => {
    const idx = withImg.findIndex((i) => i === item);
    if (idx !== -1) setLightboxIndex(idx);
  };

  const closeLightbox = useCallback(() => setLightboxIndex(null), []);
  const prevImg = useCallback(() =>
    setLightboxIndex((i) => (i - 1 + withImg.length) % withImg.length), [withImg.length]);
  const nextImg = useCallback(() =>
    setLightboxIndex((i) => (i + 1) % withImg.length), [withImg.length]);

  // reset lightbox al cambiar filtro
  const handleFilter = (f) => {
    setActive(f);
    setLightboxIndex(null);
  };

  return (
    <>
      <section id="galeria" style={{ padding: "100px 24px", background: "var(--warm)" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>

          {/* Header */}
          <FadeIn>
            <div style={{ textAlign: "center", marginBottom: 48 }}>
              <span className="divider-line" style={{ margin: "0 auto 24px" }} />
              <div style={{
                fontFamily: "var(--sans)",
                fontSize: 11,
                letterSpacing: "0.3em",
                textTransform: "uppercase",
                color: "var(--gold)",
                marginBottom: 16,
              }}>
                Galería
              </div>
              <h2 style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(36px, 5vw, 56px)",
                fontWeight: 300,
                color: "var(--dark)",
              }}>
                Trabajos<br /><em>recientes</em>
              </h2>
            </div>
          </FadeIn>

          {/* Filtros */}
          <FadeIn delay={0.1}>
            <div style={{
              display: "flex",
              justifyContent: "center",
              gap: 4,
              marginBottom: 48,
              flexWrap: "wrap",
            }}>
              {FILTERS.map((f) => (
                <button
                  key={f}
                  onClick={() => handleFilter(f)}
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

          {/* Grid */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 10,
          }}>
            {filtered.map((item, i) => (
              <FadeIn key={`${active}-${i}`} delay={i * 0.06}>
                <div
                  onClick={() => item.img && openLightbox(item)}
                  className="gallery-item"
                  style={{
                    height: item.aspect === "tall" ? 360 : item.aspect === "wide" ? 220 : 260,
                    gridColumn: item.aspect === "wide" ? "span 2" : "span 1",
                    backgroundImage: item.img ? `url(${item.img})` : "none",
                    backgroundColor: item.img
                      ? "transparent"
                      : `hsl(${28 + i * 11}, ${12 + i * 2}%, ${84 - i * 2}%)`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    position: "relative",
                    overflow: "hidden",
                    cursor: item.img ? "zoom-in" : "default",
                    borderRadius: 2,
                  }}
                >
                  {/* Overlay base suave */}
                  {item.img && (
                    <div style={{
                      position: "absolute",
                      inset: 0,
                      background: "linear-gradient(to bottom, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0.35) 100%)",
                      transition: "opacity 0.4s ease",
                    }} />
                  )}

                  {/* Placeholder sin imagen */}
                  {!item.img && (
                    <div style={{
                      position: "absolute",
                      inset: 0,
                      background: `repeating-linear-gradient(135deg, transparent, transparent 40px, rgba(255,255,255,0.04) 40px, rgba(255,255,255,0.04) 41px)`,
                    }} />
                  )}

                  {/* Badge categoría */}
                  <div style={{
                    position: "absolute",
                    top: 12,
                    left: 12,
                    fontFamily: "var(--sans)",
                    fontSize: 9,
                    letterSpacing: "0.25em",
                    textTransform: "uppercase",
                    color: item.img ? "rgba(255,255,255,0.9)" : "rgba(26,20,16,0.45)",
                    background: item.img ? "rgba(0,0,0,0.35)" : "rgba(255,255,255,0.55)",
                    backdropFilter: "blur(6px)",
                    padding: "5px 10px",
                    borderRadius: 2,
                  }}>
                    {item.category}
                  </div>

                  {/* Ícono zoom en hover */}
                  {item.img && (
                    <div className="gallery-zoom-hint" style={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                      width: 48,
                      height: 48,
                      borderRadius: "50%",
                      background: "rgba(255,255,255,0.15)",
                      backdropFilter: "blur(8px)",
                      border: "0.5px solid rgba(255,255,255,0.3)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 18,
                      color: "white",
                      opacity: 0,
                      transition: "opacity 0.3s ease",
                      pointerEvents: "none",
                    }}>
                      ⊕
                    </div>
                  )}

                  {/* Label en bottom */}
                  <div className="gallery-overlay" style={{ borderRadius: "0 0 2px 2px" }}>
                    <span style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: 17,
                      fontWeight: 300,
                      color: "white",
                      letterSpacing: "0.05em",
                    }}>
                      {item.label}
                    </span>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          {/* CTA Instagram */}
          <FadeIn delay={0.3}>
            <div style={{ textAlign: "center", marginTop: 56 }}>
              <a  href="https://www.instagram.com/carolashes_studio/"
                target="_blank"
                rel="noreferrer"
                className="btn-outline"
              >
                Ver más en Instagram &#8594;
              </a>
            </div>
          </FadeIn>

        </div>
      </section>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <Lightbox
          items={withImg}
          index={lightboxIndex}
          onClose={closeLightbox}
          onPrev={prevImg}
          onNext={nextImg}
        />
      )}

      <style>{`
        @keyframes lbFadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes lbImgIn {
          from { opacity: 0; transform: scale(0.97); }
          to   { opacity: 1; transform: scale(1); }
        }
        .gallery-item:hover .gallery-zoom-hint {
          opacity: 1 !important;
        }
        .gallery-item:hover .gallery-overlay {
          opacity: 1 !important;
        }
        .gallery-item img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center top;
          display: block;
        }
      `}</style>
    </>
  );
}