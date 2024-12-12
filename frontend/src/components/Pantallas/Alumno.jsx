import React, { useState, useEffect } from 'react';
import { User, FolderKanban, Upload, Download, ChevronDown, CheckCircle, Circle, Camera, Menu, X } from 'lucide-react';
import { Button } from "../ui/Button";
import { DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "../ui/dropdown-menu";
import { useNavigate } from 'react-router-dom'; // Cambiado useHistory por useNavigate

export default function Dashboard() {
  const VIEWS = {
    PROFILE: 'profile',
    MY_PROJECT: 'myProject',
    BANK_PROJECTS: 'bankProjects',
  };
  const [view, setView] = useState(VIEWS.MY_PROJECT);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [profile, setProfile] = useState(null); // Para almacenar el perfil
  const [isLoading, setIsLoading] = useState(false); // Estado de carga
  const [error, setError] = useState(null); // Estado de error
  const navigate = useNavigate(); // Cambiado useHistory por useNavigate

  const projectStages = [
    { name: 'Propuesta', completed: true },
    { name: 'Revisión', completed: true },
    { name: 'Desarrollo', completed: true },
    { name: 'Pruebas', completed: true },
    { name: 'Entrega', completed: false },
  ];

  // Lista de proyectos para el Banco de Proyectos
  const projects = [
    { name: 'Sistema de Gestión', company: 'TechSolutions', description: 'Optimiza el control de stock y mejora la eficiencia operativa.', image: '/placeholder.svg?height=200&width=300' },
    { name: 'Aplicación Móvil', company: 'AppDev', description: 'Desarrollo de una app para mejorar la productividad.', image: '/placeholder.svg?height=200&width=300' },
    { name: 'E-commerce', company: 'ShopMasters', description: 'Plataforma de compras online para pequeñas empresas.', image: '/placeholder.svg?height=200&width=300' },
  ];

  // Función para obtener el perfil
  const getProfile = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch('/api/profile', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
      });
      if (response.ok) {
        const data = await response.json();
        setProfile(data);
      } else {
        setError('No se pudo cargar el perfil. Inténtalo más tarde.');
      }
    } catch (error) {
      setError('Ocurrió un error al cargar el perfil.');
    } finally {
      setIsLoading(false);
    }
  };

  // Función para cerrar sesión
  const logout = () => {
    localStorage.removeItem('token'); // Eliminar el token de localStorage
    navigate('/login'); // Redirigir a la página de login
  };

  // Obtener el perfil cuando la vista sea 'profile'
  useEffect(() => {
    if (view === VIEWS.PROFILE) {
      getProfile();
    }
  }, [view]);

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      {/* Header fijo */}
      <header className="bg-[rgb(31,65,155)] text-white p-4 shadow-xl border-b-2 border-[rgb(31,65,155)] fixed top-0 left-0 right-0 z-50">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="w-12 h-12 bg-white rounded-full mr-4 overflow-hidden">
              <img src="/image/img.jpg" alt="Logo IT Matehuala" className="w-full h-full object-cover" />
            </div>
            <h1 className="text-xl font-bold">INSTITUTO TECNOLÓGICO DE MATEHUALA</h1>
          </div>

          {/* Menú de hamburguesa para dispositivos móviles */}
          <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Espacio reservado para el header fijo en dispositivos pequeños */}
      <div className="flex flex-1 pt-16 md:pt-0">
        {/* Sidebar (visible solo en pantallas grandes) */}
        <div className={`md:w-64 bg-[rgb(31,65,155)] text-white p-5 border-r-2 border-white/20 fixed top-16 left-0 bottom-0 md:block ${isMenuOpen ? 'block' : 'hidden'} shadow-md`}>
          <nav className="space-y-4">
            {/* Menú Perfil */}
            <a href="#" className="flex items-center space-x-3 px-2 py-2 rounded hover:bg-white/10" onClick={() => setView('profile')}>
              <User className="w-5 h-5" />
              <span>Perfil</span>
            </a>

            {/* Menú Proyectos */}
            <a href="#" className="flex items-center space-x-3 px-2 py-2 rounded hover:bg-white/10" onClick={() => setView('myProject')}>
              <FolderKanban className="w-5 h-5" />
              <span>Proyectos alumno</span>
            </a>

            {/* Menú Cerrar sesión */}
            <a href="#" className="flex items-center space-x-3 px-2 py-2 rounded hover:bg-white/10" onClick={logout}>
              <Upload className="w-5 h-5" />
              <span>Cerrar Sesión</span>
            </a>
          </nav>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-8 md:ml-64 mt-16 overflow-y-auto">
          <div className="bg-white rounded-xl shadow-2xl p-6 border border-gray-300">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-semibold text-[rgb(31,65,155)]">{view === 'profile' ? 'Perfil' : view === 'myProject' ? 'Mi Proyecto' : 'Banco de Proyectos'}</h2>
            </div>

            {/* Mostrar contenido basado en la vista seleccionada */}
            {view === 'profile' ? (
              <div className="flex flex-col items-center text-center">
                {/* Imagen de perfil y botón para cambiar */}
                <div className="relative mb-4">
                  <img
                    src={profile?.image || '/image/perfil.png'}
                    alt="Imagen de perfil"
                    className="w-32 h-32 rounded-full object-cover"
                  />
                  <Button className="absolute bottom-0 right-0 bg-[rgb(31,65,155)] text-white p-2 rounded-full">
                    <Camera className="w-5 h-5" />
                  </Button>
                </div>

                {/* Información de perfil */}
                <p className="text-lg text-gray-800 font-semibold mb-2">{profile?.name || 'Ingeniería en Sistemas'}</p>

                {/* Formulario de perfil */}
                <div className="w-full max-w-sm">
                  <div className="mb-4">
                    <p className="text-sm text-gray-400 uppercase">Teléfono</p>
                    <input
                      type="text"
                      className="w-full border-b-2 border-gray-300 focus:border-[rgb(31,65,155)] outline-none text-gray-800"
                      value={profile?.phone || '123-456-7890'}
                      readOnly
                    />
                  </div>
                  <div className="mb-4">
                    <p className="text-sm text-gray-400 uppercase">Email</p>
                    <input
                      type="email"
                      className="w-full border-b-2 border-gray-300 focus:border-[rgb(31,65,155)] outline-none text-gray-800"
                      value={profile?.email || 'L20660042@matehuala.tecnm.mx'}
                      readOnly
                    />
                  </div>

                  {/* Botón Guardar */}
                  <div className="flex justify-center mt-6">
                    <button className="bg-[rgb(31,65,155)] text-white px-6 py-2 rounded-lg hover:bg-blue-600 focus:outline-none">
                      GUARDAR
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {projects.map((project, index) => (
                  <div key={index} className="bg-white p-4 rounded-lg shadow-md">
                    <img
                      src={project.image}
                      alt="Imagen de proyecto"
                      className="w-full h-40 object-cover rounded-md"
                    />
                    <div className="mt-4">
                      <h3 className="text-lg font-semibold text-[rgb(31,65,155)]">{project.name}</h3>
                      <p className="text-gray-500">{project.company}</p>
                      <p className="text-gray-700 mt-2">{project.description}</p>
                    </div>
                    <button className="bg-[rgb(31,65,155)] text-white mt-4 w-full py-2 rounded-lg hover:bg-blue-600">
                      Seleccionar Proyecto
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
