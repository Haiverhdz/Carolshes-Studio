import FadeIn from "./FadeIn";
import { TESTIMONIALS } from "../constants/data";

export default function Testimonials() {
  return (
    <section id="testimonios" style={{ padding: "100px 24px", background: "var(--cream)" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <FadeIn>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <span className="divider-line" style={{ margin: "0 auto 24px" }} />
            <div style={{ fontFamily: "var(--sans)", fontSize: 11, letterSpacing: "0.3em", textTransform: "uppercase", color: "var(--gold)", marginBottom: 16 }}>
              Testimonios
            </div>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(36px, 5vw, 56px)", fontWeight: 300, color: "var(--dark)" }}>
              Lo que dicen<br /><em>mis clientas</em>
            </h2>
          </div>
        </FadeIn>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 20 }}>
          {TESTIMONIALS.map((t, i) => (
            <FadeIn key={t.name} delay={i * 0.1}>
              <div className="testimonial-card">
                <div style={{ marginBottom: 20 }}>
                  {"★".repeat(t.stars).split("").map((_, j) => (
                    <span key={j} style={{ color: "var(--gold)", fontSize: 14 }}>★</span>
                  ))}
                </div>
                <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 18, fontWeight: 400, fontStyle: "italic", color: "var(--dark)", lineHeight: 1.7, marginBottom: 24 }}>
                  "{t.text}"
                </p>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <div>
                    <div style={{ fontFamily: "var(--sans)", fontSize: 13, fontWeight: 500, color: "var(--dark)" }}>{t.name}</div>
                    <div style={{ fontFamily: "var(--sans)", fontSize: 11, color: "var(--mid)" }}>Servicio: {t.style}</div>
                  </div>
                  <div style={{
                    width: 36, height: 36, borderRadius: "50%", background: "var(--warm)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontFamily: "'Cormorant Garamond', serif", fontSize: 16, color: "var(--gold)",
                  }}>
                    {t.name[0]}
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
