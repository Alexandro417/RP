import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/Button";
import { ChevronDown, Home, HelpCircle, Fingerprint, Globe } from "lucide-react";

export default function Ayuda() {
  const [open, setOpen] = useState(null);

  const toggleAccordion = (index) => {
    setOpen(open === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 to-blue-600">
      {/* Navigation */}
      <nav className="bg-blue-800 text-white">
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            {/* Logo and Title */}
            <div className="flex items-center gap-2"> {/* Adjusted flex container */}
              <div className="w-12 h-12 bg-white rounded-full overflow-hidden">
                <img
                  src="/image/img.jpg"
                  alt="Logo IT Matehuala"
                  className="w-full h-full object-cover"
                />
              </div>
              <h1 className="text-xl font-bold text-white">INSTITUTO TECNOLÓGICO DE MATEHUALA</h1>
            </div>

            {/* Menu Items */}
            <div className="flex items-center gap-6">
              <Link to="#" className="flex items-center gap-2 text-white/80 hover:text-white">
                <Globe className="h-5 w-5" />
                INTRANET
              </Link>
              <Link to="/" className="flex items-center gap-2 text-white/80 hover:text-white">
                <Home className="h-5 w-5" />
                INICIO
              </Link>
              <Link to="/ayuda" className="flex items-center gap-2 text-white/80 hover:text-white">
                <HelpCircle className="h-5 w-5" />
                AYUDA
              </Link>
              <Link to="/login">
                <Button
                  variant="outline"
                  className="text-sm bg-blue-600 hover:bg-blue-700"
                >
                  <Fingerprint className="h-5 w-5 mr-1" />
                  INICIA SESIÓN
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="p-8 text-center text-white">
        <h2 className="text-4xl font-bold mb-6">Ayuda</h2>
        <p className="text-lg mb-12">Aquí puedes encontrar respuestas a algunas de las preguntas más frecuentes sobre el sistema.</p>

        {/* FAQ Accordion */}
        <div className="space-y-4 max-w-3xl mx-auto">
          {faqData.map((item, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md">
              <Button
                variant="outline"
                className="w-full text-left flex justify-between items-center p-4 bg-blue-100 hover:bg-blue-200"
                onClick={() => toggleAccordion(index)}
              >
                <span className="text-lg font-semibold text-black">{item.question}</span>
                <ChevronDown
                  className={`h-5 w-5 transform transition-transform ${
                    open === index ? "rotate-180" : ""
                  }`}
                />
              </Button>
              {open === index && (
                <div className="p-4 text-black bg-gray-50 rounded-b-lg">
                  <p>{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Sample FAQ data
const faqData = [
  {
    question: "No puedo ingresar a la plataforma.",
    answer:
      "Asegúrate de que estás utilizando el correo y contraseña correctos. Si el problema persiste, intenta recuperar tu contraseña.",
  },
  {
    question: "¿Cómo recupero mi usuario y contraseña?",
    answer:
      "Para recuperar tu usuario y contraseña, visita la sección de recuperación de cuenta y sigue las instrucciones.",
  },
  {
    question: "¿Cuál es el proceso para darme de alta en la plataforma?",
    answer:
      "Para darte de alta, completa el formulario de registro con tu información personal y académica.",
  },
  {
    question: "¿Cuál es mi correo institucional?",
    answer:
      "Tu correo institucional es proporcionado por la plataforma. Asegúrate de verificar en tu correo personal el mensaje de bienvenida.",
  },
  {
    question: "No tengo acceso a mi correo institucional. Olvidé mi contraseña.",
    answer:
      "Si olvidaste la contraseña de tu correo institucional, intenta recuperarla desde la página de recuperación de correo electrónico.",
  },
  {
    question: "En mi correo institucional no me permite reestablecer mi contraseña.",
    answer:
      "Si no puedes restablecer tu contraseña, verifica si tienes acceso a tu número telefónico de recuperación o contacta al soporte técnico.",
  },
  {
    question: "¿Cómo es el proceso para poder hacer mi pago y subirlo a la plataforma?",
    answer:
      "Puedes realizar tu pago a través de la sección de pagos en la plataforma, luego sube el comprobante a la misma sección.",
  },
  {
    question: "No me ha llegado mi horario. No avanza de etapa mi pago.",
    answer:
      "Verifica el estado de tu pago en la plataforma. Si el problema persiste, contacta con el soporte para resolver cualquier inconveniente.",
  },
];
