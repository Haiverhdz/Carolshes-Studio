import FadeIn from "./FadeIn";
import { SERVICES } from "../constants/data";


export default function Services() {
  return (
    <section id="servicios" style={{ padding: "100px 24px", background: "var(--warm)" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <FadeIn>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <span className="divider-line" style={{ margin: "0 auto 24px" }} />
            <div style={{
              fontFamily: "var(--sans)",
              fontSize: 11,
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              color: "var(--gold)",
              marginBottom: 16,
            }}>
              Servicios
            </div>
            <h2 style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(36px, 5vw, 56px)",
              fontWeight: 300,
              color: "var(--dark)",
            }}>
              Nuestros<br /><em>servicios</em>
            </h2>
          </div>
        </FadeIn>

        <div style={{ display: "flex", flexDirection: "column", gap: 56 }}>
          {SERVICES.map((group, gi) => (
            <FadeIn key={gi} delay={gi * 0.1}>
              {/* Category header */}
              <div style={{
                display: "flex",
                alignItems: "center",
                gap: 16,
                marginBottom: 24,
              }}>
                <span style={{
                  fontFamily: "var(--sans)",
                  fontSize: 10,
                  letterSpacing: "0.35em",
                  textTransform: "uppercase",
                  color: "var(--gold)",
                }}>
                  {group.icon} {group.category}
                </span>
                <div style={{
                  flex: 1,
                  height: "0.5px",
                  background: "rgba(180,150,100,0.3)",
                }} />
              </div>

              {/* Service cards */}
              <div style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                gap: 2,
              }}>
                {group.items.map((item, ii) => (
                  <div
                    key={ii}
                    className="service-card"
                    style={{
                      padding: "32px 28px",
                      background: "rgba(255,255,255,0.45)",
                      border: "0.5px solid rgba(180,150,100,0.2)",
                      backdropFilter: "blur(4px)",
                      transition: "background 0.3s ease, border-color 0.3s ease",
                      cursor: "default",
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.background = "rgba(255,255,255,0.75)";
                      e.currentTarget.style.borderColor = "rgba(180,150,100,0.5)";
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.background = "rgba(255,255,255,0.45)";
                      e.currentTarget.style.borderColor = "rgba(180,150,100,0.2)";
                    }}
                  >
                    <div style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: 22,
                      fontWeight: 400,
                      color: "var(--dark)",
                      marginBottom: 12,
                      letterSpacing: "0.02em",
                    }}>
                      {item.name}
                    </div>

                    <p style={{
                      fontFamily: "var(--sans)",
                      fontSize: 12,
                      lineHeight: 1.7,
                      color: "rgba(26,20,16,0.6)",
                      marginBottom: 24,
                      fontWeight: 300,
                    }}>
                      {item.description}
                    </p>

                    <div style={{
                      borderTop: "0.5px solid rgba(180,150,100,0.2)",
                      paddingTop: 20,
                      display: "flex",
                      flexDirection: "column",
                      gap: 8,
                    }}>
                      {item.duration && (
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                          <span style={{
                            fontFamily: "var(--sans)",
                            fontSize: 10,
                            letterSpacing: "0.2em",
                            textTransform: "uppercase",
                            color: "rgba(26,20,16,0.4)",
                          }}>
                            Duración
                          </span>
                          <span style={{
                            fontFamily: "'Cormorant Garamond', serif",
                            fontSize: 14,
                            color: "var(--dark)",
                            fontStyle: "italic",
                          }}>
                            {item.duration}
                          </span>
                        </div>
                      )}

                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                        <span style={{
                          fontFamily: "var(--sans)",
                          fontSize: 10,
                          letterSpacing: "0.2em",
                          textTransform: "uppercase",
                          color: "rgba(26,20,16,0.4)",
                        }}>
                          Precio
                        </span>
                        <span style={{
                          fontFamily: "'Cormorant Garamond', serif",
                          fontSize: 24,
                          fontWeight: 300,
                          color: "var(--gold)",
                          letterSpacing: "0.02em",
                        }}>
                          {item.price}
                        </span>
                      </div>

                      {item.retoque && (
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                          <span style={{
                            fontFamily: "var(--sans)",
                            fontSize: 10,
                            letterSpacing: "0.2em",
                            textTransform: "uppercase",
                            color: "rgba(26,20,16,0.4)",
                          }}>
                            Retoque
                          </span>
                          <span style={{
                            fontFamily: "'Cormorant Garamond', serif",
                            fontSize: 16,
                            fontWeight: 300,
                            color: "rgba(26,20,16,0.5)",
                          }}>
                            {item.retoque}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.4}>
          <div style={{ textAlign: "center", marginTop: 64 }}>
            <p style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 16,
              fontStyle: "italic",
              color: "rgba(26,20,16,0.45)",
              marginBottom: 24,
            }}>
              ¿Tienes dudas sobre cuál tratamiento es para ti?
            </p>
            <a href="#contacto" className="btn-outline">
              Agendar consulta →
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}