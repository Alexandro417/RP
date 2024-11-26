"use client";
import { Link } from "react-router-dom";
import {
  Mail,
  Key,
  Globe,
  Home,
  HelpCircle,
  Fingerprint,
} from "lucide-react";
import Button from "./ui/Button"; // Verifica que este componente exista
import Input from "./ui/input"; // Verifica que este componente exista

export default function Login() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 to-blue-600">
      {/* Navigation */}
      <nav className="bg-blue-800 text-white">
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            <div className="text-xl font-bold">
              Instituto Tecnológico de Matehuala
            </div>
            <div className="flex items-center gap-6">
              <Link
                to="#"
                className="flex items-center gap-2 text-white/80 hover:text-white"
              >
                <Globe className="h-5 w-5" />
                INTRANET
              </Link>
              <Link
                to="#"
                className="flex items-center gap-2 text-white/80 hover:text-white"
              >
                <Home className="h-5 w-5" />
                INICIO
              </Link>
              <Link
                to="#"
                className="flex items-center gap-2 text-white/80 hover:text-white"
              >
                <HelpCircle className="h-5 w-5" />
                AYUDA
              </Link>
              <Button variant="outline" className="text-sm bg-blue-600 hover:bg-blue-700">
                <Fingerprint className="h-5 w-5 mr-1" />
                INICIA SESIÓN
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Login Section */}
      <div className="flex items-center justify-center min-h-[80vh]">
        <div className="bg-white rounded-lg shadow-lg p-8 max-w-sm w-full">
          <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
            Iniciar sesión
          </h2>
          <form className="space-y-4">
            <div className="relative w-full">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="email"
                placeholder="Correo electrónico"
                className="w-full py-2 pl-10 pr-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                required
              />
            </div>
            <div className="relative w-full">
              <Key className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="password"
                placeholder="Contraseña"
                className="w-full py-2 pl-10 pr-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                required
              />
            </div>
            <Button
              type="submit"
              className="w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Iniciar sesión
            </Button>
          </form>
          <p className="text-sm text-center text-gray-600 mt-4">
            <Link to="#" className="text-blue-600 hover:underline">
              ¿Olvidaste tu contraseña?
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
