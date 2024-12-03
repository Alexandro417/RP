"use client";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import {
  Mail,
  Key,
  Globe,
  Home,
  HelpCircle,
  Fingerprint,
} from "lucide-react";
import { Button } from "../components/ui/Button";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate(); // Para redireccionar después del login

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/auth/login", {
        email,
        password,
      });

      // Si el inicio de sesión es exitoso, puedes redirigir al usuario
      if (response.status === 200) {
        // Puedes guardar el token o la información que recibas en el localStorage o context
        localStorage.setItem("token", response.data.access_token);
        navigate("/dashboard"); // Redirige a otra página, por ejemplo, el dashboard
      }
    } catch (error) {
      setErrorMessage("Correo o contraseña incorrectos");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 to-blue-600">
      {/* Navigation */}
      <nav className="bg-blue-800 text-white">
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            <div className="flex h-16 items-center">
              <div className="w-12 h-12 bg-white rounded-full overflow-hidden">
                <img
                  src="/image/img.jpg"
                  alt="Logo IT Matehuala"
                  className="w-full h-full object-cover"
                />
              </div>
              <h1 className="text-xl font-bold text-left ml-2">
                INSTITUTO TECNOLÓGICO DE MATEHUALA
              </h1>
            </div>
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
                <Button variant="outline" className="text-sm bg-blue-600 hover:bg-blue-700">
                  <Fingerprint className="h-5 w-5 mr-1" />
                  INICIA SESIÓN
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Login Section */}
      <div className="flex items-center justify-center min-h-[80vh]">
        <div className="bg-white rounded-xl shadow-lg p-8 max-w-sm w-full">
          <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
            Iniciar sesión
          </h2>
          <form className="space-y-4" onSubmit={handleLogin}>
            <div className="relative w-full">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Correo electrónico"
                className="w-full py-2 pl-10 pr-4 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600"
                required
              />
            </div>
            <div className="relative w-full">
              <Key className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Contraseña"
                className="w-full py-2 pl-10 pr-4 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600"
                required
              />
            </div>
            <Button
              type="submit"
              className="w-full py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700"
            >
              Iniciar sesión
            </Button>
            {errorMessage && (
              <p className="text-red-500 text-center mt-2">{errorMessage}</p>
            )}
          </form>

          {/* Botón Crear cuenta con separación */}
          <div className="mt-4">
            <Link to="/registro" className="text-blue-600 hover:underline">
              <Button
                className="w-full py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 mb-4"
              >
                Crear cuenta
              </Button>
            </Link>
          </div>
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
