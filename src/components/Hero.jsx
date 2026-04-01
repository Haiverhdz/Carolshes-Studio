export default function Hero({ onReservar, onVerServicios }) {
  return (
    <section
      id="inicio"
      style={{
        minHeight: "100vh", display: "flex", alignItems: "center",
        paddingTop: 64, position: "relative", overflow: "hidden",
      }}
    >
      <style>{`
        @media (max-width: 768px) {
          .hero-grid  { grid-template-columns: 1fr !important; }
          .hero-right { display: none !important; }
        }
        @media (min-width: 769px) and (max-width: 1024px) {
          .hero-badge {
            right: auto !important;
            left: 50% !important;
            top: auto !important;
            bottom: -16px !important;
            transform: translateX(-50%) !important;
            white-space: nowrap;
          }
        }
      `}</style>

      {/* Backgrounds */}
      <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 80% 60% at 70% 50%, #F5EDE0 0%, transparent 70%)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", right: 0, top: 0, bottom: 0, width: "45%", background: "var(--warm)", clipPath: "polygon(15% 0, 100% 0, 100% 100%, 0% 100%)" }} />

      <div
        className="hero-grid"
        style={{
          maxWidth: 1100, margin: "0 auto", padding: "80px 24px",
          display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60,
          alignItems: "center", position: "relative", width: "100%",
        }}
      >
        {/* Left — copy */}
        <div>
          <div style={{ fontFamily: "var(--sans)", fontSize: 11, letterSpacing: "0.3em", textTransform: "uppercase", color: "var(--gold)", marginBottom: 24, opacity: 0, animation: "fadeUp 0.8s ease 0.2s forwards" }}>
            ✦ Extensiones de pestañas
          </div>
          <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(52px, 7vw, 88px)", fontWeight: 300, lineHeight: 1.05, color: "var(--dark)", marginBottom: 28, opacity: 0, animation: "fadeUp 0.8s ease 0.4s forwards" }}>
            Tu mirada,<br />
            <em style={{ fontStyle: "italic", fontWeight: 300 }}>perfecta.</em>
          </h1>
          <p style={{ fontFamily: "var(--sans)", fontSize: 16, fontWeight: 300, color: "var(--mid)", lineHeight: 1.8, maxWidth: 400, marginBottom: 40, opacity: 0, animation: "fadeUp 0.8s ease 0.6s forwards" }}>
            Extensiones de pestañas hechas con precisión artesanal. Cada set diseñado para realzar tu belleza natural.
          </p>
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap", opacity: 0, animation: "fadeUp 0.8s ease 0.8s forwards" }}>
            <button className="btn-primary" onClick={onReservar}>Agendar cita →</button>
            <button className="btn-outline" onClick={onVerServicios}>Ver servicios</button>
          </div>

          {/* Stats */}
          <div style={{ marginTop: 48, display: "flex", gap: 40, opacity: 0, animation: "fadeUp 0.8s ease 1s forwards" }}>
            {[["700+", "Clientas"], ["4.9★", "Calificación"], ["5 años", "Experiencia"]].map(([n, l]) => (
              <div key={l}>
                <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 28, fontWeight: 500, color: "var(--dark)" }}>{n}</div>
                <div style={{ fontFamily: "var(--sans)", fontSize: 11, color: "var(--mid)", letterSpacing: "0.1em" }}>{l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right — decorative */}
        <div className="hero-right" style={{ position: "relative", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div
            className="lash-float"
            style={{
              width: "clamp(220px, 30vw, 420px)", height: "clamp(220px, 30vw, 420px)",
              borderRadius: "40% 60% 60% 40% / 40% 40% 60% 60%",
              background: "linear-gradient(135deg, #EDE4D8 0%, #D4C5B0 100%)",
              display: "flex", alignItems: "center", justifyContent: "center",
              flexDirection: "column", gap: 8,
            }}
          >
            <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 80, color: "#C9A96E", opacity: 0.6 }}>✦</div>
            <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 18, fontWeight: 400, color: "var(--mid)", letterSpacing: "0.1em" }}>Carolashes Studio</div>
          </div>

          {/* Badge */}
          <div
            className="hero-badge"
            style={{
              position: "absolute", top: "10%", right: "5%",
              background: "white", padding: "14px 18px",
              boxShadow: "0 8px 32px rgba(0,0,0,0.08)", borderLeft: "2px solid var(--gold)",
            }}
          >
            <div style={{ fontFamily: "var(--sans)", fontSize: 10, color: "var(--mid)", letterSpacing: "0.15em", textTransform: "uppercase" }}>Próxima cita</div>
            <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 18, color: "var(--dark)", marginTop: 4 }}>Hoy disponible</div>
          </div>
        </div>
      </div>
    </section>
  );
}
