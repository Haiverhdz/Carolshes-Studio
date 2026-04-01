import { useState } from "react";
import "./styles/globals.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Gallery from "./components/Gallery";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const [activeNav, setActiveNav] = useState("Inicio");

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Navbar activeNav={activeNav} setActiveNav={setActiveNav} />
      <Hero
        onReservar={() => scrollTo("contacto")}
        onVerServicios={() => scrollTo("servicios")}
      />
      <Services onReservar={() => scrollTo("contacto")} />
      <Gallery />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}
