import { useState } from "react";

function App() {
  const [form, setForm] = useState({ nombre: "", telefono: "", servicio: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    alert(`Cotización enviada:\nNombre: ${form.nombre}\nTeléfono: ${form.telefono}\nServicio: ${form.servicio}`);
  };

  return (
    <div style={{ maxWidth: "800px", margin: "auto", padding: "20px", fontFamily: "Arial" }}>
      <header style={{ textAlign: "center" }}>
        <h1 style={{ color: "#1e3a8a" }}>TECNOLET - Complete Security</h1>
        <p style={{ color: "#4b5563" }}>Soluciones integrales en seguridad electrónica y redes</p>
      </header>

      <section>
        <h2 style={{ color: "#1e40af" }}>¿Quiénes somos?</h2>
        <p>
          Con más de 5 años de experiencia, ofrecemos soluciones completas y personalizadas para hogares,
          empresas e instituciones. Nuestro compromiso es proteger lo que más valoras, brindando calidad,
          profesionalismo y tecnología de vanguardia.
        </p>
      </section>

      <section>
        <h2 style={{ color: "#1e40af" }}>Servicios</h2>
        <ul>
          <li>Instalación de cámaras de seguridad (CCTV analógicas e IP)</li>
          <li>Sistemas de alarmas para hogar y negocio</li>
          <li>Automatización de portones eléctricos</li>
          <li>Cercas eléctricas</li>
          <li>Cableado estructurado (voz, datos y red)</li>
          <li>Instalación de redes LAN y WiFi</li>
          <li>Mantenimiento preventivo y correctivo</li>
          <li>Venta de equipos de seguridad y redes</li>
        </ul>
      </section>

      <section>
        <h2 style={{ color: "#1e40af" }}>Solicita tu cotización</h2>
        <input name="nombre" placeholder="Tu nombre" value={form.nombre} onChange={handleChange} /><br /><br />
        <input name="telefono" placeholder="Tu teléfono" value={form.telefono} onChange={handleChange} /><br /><br />
        <input name="servicio" placeholder="Servicio que necesitas" value={form.servicio} onChange={handleChange} /><br /><br />
        <button onClick={handleSubmit} style={{ backgroundColor: "#2563eb", color: "white", padding: "10px 20px" }}>
          Enviar cotización
        </button>
      </section>

      <footer style={{ textAlign: "center", marginTop: "40px", fontSize: "14px", color: "#6b7280" }}>
        <p>📍 Zona El Tejar, Calle Mariano Colodro Nro. 1604 - Bolivia</p>
        <p>📞 72357159 | ✉️ aecheverrialte@gmail.com</p>
      </footer>
    </div>
  );
}

export default App;
