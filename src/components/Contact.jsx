import { useState } from "react";
import FadeIn from "./FadeIn";
import { SERVICES, CONTACT_INFO, WHATSAPP_NUMBER } from "../constants/data";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
    message: "",
  });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const msg = `Hola! Me llamo ${formData.name}. Quiero reservar: ${formData.service}. Tel: ${formData.phone}. ${formData.message}`;
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`,
      "_blank",
    );
    setSent(true);
  };

  return (
    <section
      id="contacto"
      style={{
        padding: "100px 24px",
        background: "var(--dark)",
        color: "var(--cream)",
      }}
    >
      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 80,
          alignItems: "start",
        }}
      >
        {/* Left — info */}
        <FadeIn>
          <div>
            <span
              className="divider-line"
              style={{ background: "var(--gold)", marginBottom: 24 }}
            />
            <div
              style={{
                fontFamily: "var(--sans)",
                fontSize: 11,
                letterSpacing: "0.3em",
                textTransform: "uppercase",
                color: "var(--gold)",
                marginBottom: 16,
              }}
            >
              Reservas
            </div>
            <h2
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(36px, 4vw, 52px)",
                fontWeight: 300,
                color: "var(--cream)",
                lineHeight: 1.1,
                marginBottom: 28,
              }}
            >
              Agenda tu
              <br />
              <em>cita hoy</em>
            </h2>
            <p
              style={{
                fontFamily: "var(--sans)",
                fontSize: 14,
                fontWeight: 300,
                color: "#9e9088",
                lineHeight: 1.8,
                marginBottom: 40,
              }}
            >
              Escríbeme directamente por WhatsApp o completa el formulario y te
              contactaré para confirmar tu cita.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              {CONTACT_INFO.map(({ icon, text }) => (
                <div
                  key={text}
                  style={{ display: "flex", alignItems: "center", gap: 14 }}
                >
                  <span style={{ fontSize: 16 }}>{icon}</span>
                  <span
                    style={{
                      fontFamily: "var(--sans)",
                      fontSize: 14,
                      fontWeight: 300,
                      color: "#c4bdb6",
                    }}
                  >
                    {text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* Right — form */}
        <FadeIn delay={0.2}>
          {sent ? (
            <div
              style={{
                textAlign: "center",
                padding: "60px 40px",
                border: "1px solid #3a3028",
              }}
            >
              <div
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: 48,
                  color: "var(--gold)",
                  marginBottom: 16,
                }}
              >
                ✦
              </div>
              <h3
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: 28,
                  color: "var(--cream)",
                  marginBottom: 12,
                }}
              >
                ¡Listo!
              </h3>
              <p
                style={{
                  fontFamily: "var(--sans)",
                  fontSize: 14,
                  color: "#9e9088",
                }}
              >
                Abriendo WhatsApp para confirmar tu cita...
              </p>
              <button
                className="btn-outline"
                style={{
                  marginTop: 32,
                  borderColor: "var(--gold)",
                  color: "var(--gold)",
                }}
                onClick={() => setSent(false)}
              >
                Enviar otro mensaje
              </button>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              style={{ display: "flex", flexDirection: "column", gap: 14 }}
            >
              <input
                required
                className="form-input"
                name="name"
                placeholder="Tu nombre"
                value={formData.name}
                onChange={handleChange}
              />
              <input
                required
                className="form-input"
                name="phone"
                placeholder="Tu teléfono"
                value={formData.phone}
                onChange={handleChange}
              />
              <select
                required
                className="form-input"
                name="service"
                value={formData.service}
                onChange={handleChange}
              >
                <option value="">Selecciona un servicio</option>
                {SERVICES.map((group) =>
                  group.items.map((item) => (
                    <option key={item.name} value={item.name}>
                      {item.name} — {item.price}
                    </option>
                  )),
                )}
              </select>
              <textarea
                className="form-input"
                name="message"
                rows={4}
                placeholder="¿Alguna nota o pregunta?"
                style={{ resize: "vertical" }}
                value={formData.message}
                onChange={handleChange}
              />
              <button
                type="submit"
                className="btn-primary"
                style={{
                  background: "var(--gold)",
                  justifyContent: "center",
                  fontSize: 11,
                  marginTop: 8,
                }}
              >
                Enviar por WhatsApp →
              </button>
              <p
                style={{
                  fontFamily: "var(--sans)",
                  fontSize: 11,
                  color: "#6b5c4e",
                  textAlign: "center",
                  lineHeight: 1.6,
                }}
              >
                Al enviar, abrirás WhatsApp con tu mensaje listo.
              </p>
            </form>
          )}
        </FadeIn>
      </div>
    </section>
  );
}
