import { useState } from "react";
import FadeIn from "./FadeIn";
import { SERVICES, CONTACT_INFO, WHATSAPP_NUMBER } from "../constants/data";
import { GoogleMaps } from "../components/icons/Maps";
import { WhatsApp } from "../components/icons/WhatsApp";
import { Gmail } from "../components/icons/Gmail";

// 🔥 Mapeo de iconos (UI)
const icons = {
  maps: <GoogleMaps className="h-5 w-5 text-[#c4bdb6]" />,
  whatsapp: <WhatsApp className="h-5 w-5 text-green-500" />,
  gmail: <Gmail className="h-5 w-5 text-red-400" />,
  time: <span className="text-sm">⏰</span>,
};

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
      <div className="contact-mobile">
        {/* INFO */}
        <FadeIn>
          <div>
            <span className="divider-line" />

            <div className="contact-subtitle">Reservas</div>

            <h2 className="contact-title">
              Agenda tu <br /> <em>cita hoy</em>
            </h2>

            <p className="contact-text">
              Escríbeme directamente por WhatsApp o completa el formulario y te
              contactaré para confirmar tu cita.
            </p>

            <div className="contact-info">
              {CONTACT_INFO.map(({ icon, text }) => (
                <div key={text} className="contact-item">
                  <span>{icons[icon]}</span>
                  <span>{text}</span>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* FORM */}
        <FadeIn delay={0.2}>
          {sent ? (
            <div className="contact-success">
              <div className="star">✦</div>
              <h3>¡Listo!</h3>
              <p>Abriendo WhatsApp para confirmar tu cita...</p>

              <button onClick={() => setSent(false)}>
                Enviar otro mensaje
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="contact-form">
              <input
                required
                name="name"
                placeholder="Tu nombre"
                value={formData.name}
                onChange={handleChange}
              />

              <input
                required
                name="phone"
                placeholder="Tu teléfono"
                value={formData.phone}
                onChange={handleChange}
              />

              <select
                required
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
                name="message"
                rows={4}
                placeholder="¿Alguna nota o pregunta?"
                value={formData.message}
                onChange={handleChange}
              />

              <button type="submit">Enviar por WhatsApp →</button>

              <p className="contact-note">
                Al enviar, abrirás WhatsApp con tu mensaje listo.
              </p>
            </form>
          )}
        </FadeIn>
      </div>

      {/* ✅ MAPA */}
      <FadeIn delay={0.3}>
        <div className="map-section">
          <h3>Visítanos en Bello, Antioquia</h3>

          <div className="map-container">
<iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.3752649943117!2d-75.53125132576898!3d6.345426025208661!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e442f89f65dfbd9%3A0x930f105cc585e6dd!2sPoblado%20Niqu%C3%ADa%20Apartamentos!5e0!3m2!1ses!2sco!4v1778028092357!5m2!1ses!2sco"
  width="100%"
  height="450"
  style={{ border: 0 }}
  allowFullScreen
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
></iframe>

          </div>

          <a
            href="https://maps.google.com/?cid=2183710068942374631"
            target="_blank"
            rel="noreferrer"
            className="map-button"
          >
            Cómo llegar →
          </a>
        </div>
      </FadeIn>
    </section>
  );
}
