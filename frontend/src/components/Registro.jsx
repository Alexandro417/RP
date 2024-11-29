"use client";
import { Link } from "react-router-dom";
import { Mail, Key, User, Globe, Home, HelpCircle, Fingerprint } from "lucide-react";
import { Button } from "../components/ui/Button";

export default function Register() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 to-blue-600">
      {/* Navigation */}
      <nav className="bg-blue-800 text-white">
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            <div className="flex h-16 items-center">
              <div className="w-12 h-12 bg-white rounded-full overflow-hidden">
                <img
                  src="/image/img.jpg" // Ruta de la imagen
                  alt="Logo IT Matehuala"
                  className="w-full h-full object-cover"
                />
              </div>
              <h1 className="text-xl font-bold text-left ml-2">
                INSTITUTO TECNOLÓGICO DE MATEHUALA
              </h1>
            </div>
            <div className="flex items-center gap-6">
              <Link
                to="#" // Aquí se cambió para ir a la ruta /intranet
                className="flex items-center gap-2 text-white/80 hover:text-white"
              >
                <Globe className="h-5 w-5" />
                INTRANET
              </Link>
              <Link
                to="/" // Aquí se cambió para ir a la ruta /inicio
                className="flex items-center gap-2 text-white/80 hover:text-white"
              >
                <Home className="h-5 w-5" />
                INICIO
              </Link>
              <Link
                to="/ayuda" // Aquí se cambió para ir a la ruta /ayuda
                className="flex items-center gap-2 text-white/80 hover:text-white"
              >
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

      {/* Register Section */}
      <div className="flex items-center justify-center min-h-[80vh]">
        <div className="bg-white rounded-xl shadow-lg p-8 max-w-sm w-full">
          <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
            Crear cuenta
          </h2>
          <form className="space-y-4">
            {/* Nombre */}
            <div className="relative w-full">
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Nombre completo"
                className="w-full py-2 pl-10 pr-4 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600"
                required
              />
            </div>

            {/* Correo */}
            <div className="relative w-full">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="email"
                placeholder="Correo electrónico"
                className="w-full py-2 pl-10 pr-4 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600"
                required
              />
            </div>

            {/* Contraseña */}
            <div className="relative w-full">
              <Key className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="password"
                placeholder="Contraseña"
                className="w-full py-2 pl-10 pr-4 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600"
                required
              />
            </div>

            {/* Confirmar contraseña */}
            <div className="relative w-full">
              <Key className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="password"
                placeholder="Confirmar contraseña"
                className="w-full py-2 pl-10 pr-4 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600"
                required
              />
            </div>

            <Button
              type="submit"
              className="w-full py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700"
            >
              Registrar cuenta
            </Button>
          </form>

          <p className="text-sm text-center text-gray-600 mt-4">
            ¿Ya tienes una cuenta?
            <Link to="/login" className="text-blue-600 hover:underline">
              Iniciar sesión
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
