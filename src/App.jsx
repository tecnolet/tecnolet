import { useState } from "react";
import { MapPin, Phone, Mail } from "lucide-react";

export default function TecnoletWeb() {
  const [form, setForm] = useState({ nombre: "", telefono: "", servicio: "" });
  const [enviado, setEnviado] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    setEnviado(true);
    setTimeout(() => setEnviado(false), 5000);
  };

  return (
    <div className="font-sans bg-gray-50 min-h-screen py-10 px-4">
      <div className="max-w-4xl mx-auto space-y-10">
        <header className="text-center">
          <h1 className="text-4xl font-bold text-blue-800">TECNOLET - Complete Security</h1>
          <p className="text-lg text-gray-600 mt-2">Soluciones integrales en seguridad electrónica y redes</p>
        </header>

        <section>
          <h2 className="text-2xl font-semibold text-blue-700 mb-2">¿Quiénes somos?</h2>
          <p className="text-gray-700">
            Con más de 5 años de experiencia, ofrecemos soluciones completas y personalizadas para hogares,
            empresas e instituciones. Nuestro compromiso es proteger lo que más valoras, brindando calidad,
            profesionalismo y tecnología de vanguardia.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-blue-700 mb-2">Servicios</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
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
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">Solicita tu cotización</h2>
          <div className="bg-white rounded-lg shadow-md p-6 space-y-4">
            <input name="nombre" placeholder="Tu nombre" value={form.nombre} onChange={handleChange} className="w-full border border-gray-300 p-2 rounded" />
            <input name="telefono" placeholder="Tu teléfono" value={form.telefono} onChange={handleChange} className="w-full border border-gray-300 p-2 rounded" />
            <input name="servicio" placeholder="Servicio que necesitas" value={form.servicio} onChange={handleChange} className="w-full border border-gray-300 p-2 rounded" />
            <button onClick={handleSubmit} className="bg-blue-600 text-white w-full py-2 rounded hover:bg-blue-700">Enviar cotización</button>
            {enviado && <p className="text-green-600 text-sm">¡Cotización enviada con éxito!</p>}
          </div>
        </section>

        <footer className="text-center text-sm text-gray-600 border-t pt-6 mt-8">
          <div className="flex flex-col items-center space-y-1">
            <p className="flex items-center gap-2"><MapPin className="w-4 h-4" /> Zona El Tejar, Calle Mariano Colodro Nro. 1604 - Bolivia</p>
            <p className="flex items-center gap-2"><Phone className="w-4 h-4" /> 72357159</p>
            <p className="flex items-center gap-2"><Mail className="w-4 h-4" /> aecheverrialte@gmail.com</p>
          </div>
        </footer>
      </div>
    </div>
  );
}
