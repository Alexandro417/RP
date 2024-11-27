"use client";
import { Link } from "react-router-dom";
import { Globe, Home, HelpCircle, Fingerprint } from "lucide-react";
import { Button } from "../components/ui/button";

export default function Welcome() {
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

      {/* Welcome Section */}
      <div className="flex items-center justify-center min-h-[80vh] flex-col text-center text-white">
        <h2 className="text-4xl font-bold mb-6">Bienvenido al Sistema de Residencias</h2>
        <p className="text-lg mb-6">
          Nos complace darte la bienvenida a nuestro sistema integral diseñado para gestionar
          y mejorar tu experiencia residencial.
        </p>
      </div>
    </div>
  );
}
