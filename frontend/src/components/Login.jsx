"use client";
import { useState, useEffect } from "react";
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
import NavBar from "../components/NavBar"; // Asegúrate de que NavBar está correctamente importado

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false); // Estado de carga
  const navigate = useNavigate(); // Para redireccionar después del login

  // Verificación de sesión previa
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/alumno"); // Redirige automáticamente si ya está autenticado
    }
  }, [navigate]);

  const handleLogin = async (e) => {
    e.preventDefault();

    console.log("Email:", email);
    console.log("Password:", password);
    
    // Validaciones antes de hacer la solicitud
    if (!/\S+@\S+\.\S+/.test(email)) {
      setErrorMessage("Por favor ingresa un correo válido");
      return;
    }

    if (password.length < 6) {
      setErrorMessage("La contraseña debe tener al menos 6 caracteres");
      return;
    }

    setIsLoading(true); // Activa el estado de carga

    try {
      const response = await axios.post("http://localhost:3000/auth/login", {
        email,
        password,
      });
      console.log(response); // Muestra la respuesta completa para asegurarte de que el token está presente
      console.log('Respuesta completa del servidor:', response);
      // Si el inicio de sesión es exitoso, guarda el token y redirige
      if (response.status === 200) {
        console.log("Token recibido:", response.data.access_token);
        localStorage.setItem("token", response.data.access_token);
        navigate("/alumno"); // Redirige a la página de alumno
      } else {
        setErrorMessage("Error al iniciar sesión.token no recibido.");
      }
    } catch (error) {
      console.error("Error durante el inicio de sesión:", error.response || error.message);

      if (error.response) {
        if (error.response.status === 401) {
          setErrorMessage("Correo o contraseña incorrectos");
        } else {
          setErrorMessage(error.response.data.message || "Ocurrió un error en el servidor. Inténtalo de nuevo más tarde.");
        }
      } else {
        setErrorMessage("Ocurrió un error en el servidor. Inténtalo de nuevo más tarde.");
      }
    } finally {
      setIsLoading(false); // Desactiva el estado de carga
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 to-blue-600">

      <NavBar /> {/* Aquí estamos incluyendo el componente NavBar */}

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
              disabled={isLoading} // Deshabilita el botón mientras está cargando
            >
              {isLoading ? "Cargando..." : "Iniciar sesión"} {/* Muestra mensaje de carga */}
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
