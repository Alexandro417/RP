import React, { useState } from 'react';
import { User, FolderKanban, Upload, Camera, Menu, X } from 'lucide-react';
import { Button } from "../ui/Button";

export default function Dashboard() {
  const [view, setView] = useState('myProject'); // Estado para controlar la vista actual (Mi Proyecto, Banco de Proyectos o Perfil)
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Estado para el menú móvil

  // Lista de proyectos para "Proyectos alumnos"
  const projectsAlumnos = [
    { name: 'Sistema de Gestión', company: 'TechSolutions', description: 'Optimiza el control de stock y mejora la eficiencia operativa.', image: '/placeholder.svg?height=200&width=300' },
    { name: 'Aplicación Móvil', company: 'AppDev', description: 'Desarrollo de una app para mejorar la productividad.', image: '/placeholder.svg?height=200&width=300' },
    { name: 'E-commerce', company: 'ShopMasters', description: 'Plataforma de compras online para pequeñas empresas.', image: '/placeholder.svg?height=200&width=300' },
    { name: 'Sistema de Inventario', company: 'InvControl', description: 'Sistema para gestionar inventarios de productos en tiempo real.', image: '/placeholder.svg?height=200&width=300' },
    { name: 'Aplicación de Finanzas', company: 'FinApp', description: 'Aplicación para gestionar finanzas personales.', image: '/placeholder.svg?height=200&width=300' },
    { name: 'Aplicación de Salud', company: 'HealthTech', description: 'Aplicación para el seguimiento de la salud y bienestar.', image: '/placeholder.svg?height=200&width=300' },
    { name: 'Plataforma de Educación', company: 'EduTech', description: 'Sistema para gestión de cursos en línea.', image: '/placeholder.svg?height=200&width=300' },
    { name: 'Red Social', company: 'SocialConnect', description: 'Aplicación de red social para crear comunidades.', image: '/placeholder.svg?height=200&width=300' },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      {/* Header */}
      <header className="bg-[rgb(31,65,155)] text-white p-4 shadow-xl border-b-2 border-[rgb(31,65,155)] fixed top-0 left-0 right-0 z-50 md:relative md:w-full">
  <div className="flex items-center justify-between md:justify-start">
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
      <div className="flex flex-1">
        {/* Sidebar (visible solo en pantallas grandes) */}
        <div className={`md:w-64 bg-[rgb(31,65,155)] text-white p-5 border-r-2 border-white/20 fixed top-16 left-0 bottom-0 md:block ${isMenuOpen ? 'block' : 'hidden'} shadow-md`}>
          <nav className="space-y-4">
            {/* Menú Perfil */}
            <a href="#" className="flex items-center space-x-3 px-2 py-2 rounded-md hover:bg-white/10" onClick={() => setView('profile')}>
              <User className="w-5 h-5" />
              <span>Perfil</span>
            </a>

            {/* Menú Proyectos alumnos */}
            <a href="#" className="flex items-center space-x-3 px-2 py-2 rounded-md hover:bg-white/10" onClick={() => setView('myProject')}>
              <FolderKanban className="w-5 h-5" />
              <span>Proyectos alumnos</span>
            </a>

            {/* Menú Banco de Proyectos */}
            <a href="#" className="flex items-center space-x-3 px-2 py-2 rounded-md hover:bg-white/10" onClick={() => setView('projectsBank')}>
              <FolderKanban className="w-5 h-5" />
              <span>Banco de proyectos</span>
            </a>

            {/* Menú Cerrar sesión */}
            <a href="#" className="flex items-center space-x-3 px-2 py-2 rounded-md hover:bg-white/10">
              <Upload className="w-5 h-5" />
              <span>Cerrar Seción</span>
            </a>
          </nav>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-8 md:ml-64 pt-20"> {/* Se agregó pt-20 para asegurar que el contenido no se cubra con el header */}
          <div className="bg-white rounded-xl shadow-2xl p-6 border border-gray-300">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-semibold text-[rgb(31,65,155)]">{view === 'profile' ? 'Perfil' : view === 'myProject' ? 'Proyectos alumnos' : 'Banco de Proyectos'}</h2>
            </div>

            {/* Mostrar contenido basado en la vista seleccionada */}
            {view === 'profile' ? (
              <div className="flex flex-col items-center text-center">
                {/* Imagen de perfil y botón para cambiar */}
                <div className="relative mb-4">
                  <img 
                    src="/image/perfil.png"  // Imagen de perfil actualizada
                    alt="Imagen de perfil" 
                    className="w-32 h-32 rounded-full object-cover" 
                  />
                  <Button className="absolute bottom-0 right-0 bg-[rgb(31,65,155)] text-white p-2 rounded-full">
                    <Camera className="w-5 h-5" />
                  </Button>
                </div>

                {/* Información de perfil */}
                <p className="text-lg text-gray-800 font-semibold mb-2">Ingeniería en Sistemas</p>

                {/* Formulario de perfil */}
                <div className="w-full max-w-sm">
                  <div className="mb-4">
                    <p className="text-sm text-gray-400 uppercase">Teléfono</p>
                    <input
                      type="text"
                      className="w-full border-b-2 border-gray-300 focus:border-[rgb(31,65,155)] outline-none text-gray-800 rounded-md"
                      placeholder="123-456-7890"
                    />
                  </div>
                  <div className="mb-4">
                    <p className="text-sm text-gray-400 uppercase">Email</p>
                    <input
                      type="email"
                      className="w-full border-b-2 border-gray-300 focus:border-[rgb(31,65,155)] outline-none text-gray-800 rounded-md"
                      value="L20660042@matehuala.tecnm.mx"
                      readOnly
                    />
                  </div>
                  <div className="mb-4">
                    <p className="text-sm text-gray-400 uppercase">Cambiar contraseña</p>
                    <input
                      type="password"
                      className="w-full border-b-2 border-gray-300 focus:border-[rgb(31,65,155)] outline-none text-gray-800 rounded-md"
                      placeholder="Nueva contraseña"
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
            ) : view === 'myProject' ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {projectsAlumnos.map((project, index) => (
                  <div key={index} className="bg-white p-4 rounded-xl shadow-md">
                    <img 
                      src={project.image} 
                      alt="Imagen de proyecto" 
                      className="w-full h-40 object-cover rounded-xl"
                    />
                    <h3 className="text-lg font-semibold text-[rgb(31,65,155)] mt-4">{project.name}</h3>
                    <p className="text-sm text-gray-600">{project.company}</p>
                    <p className="text-xs text-gray-500 mt-2">{project.description}</p>

                    {/* Botón Ver Archivos */}
                    <Button variant="outline" className="mt-4 rounded-md bg-blue-500 text-white hover:bg-blue-600">
                      Ver archivos
                    </Button>

                    {/* Botones Aceptar, Rechazar, Contactar */}
                    <div className="mt-4 flex space-x-4">
                      <Button variant="outline" className="bg-green-500 text-white hover:bg-green-600 rounded-md">Aceptar</Button>
                      <Button variant="outline" className="bg-red-500 text-white hover:bg-red-600 rounded-md">Rechazar</Button>
                      <Button variant="outline" className="bg-yellow-500 text-white hover:bg-yellow-600 rounded-md">Contactar</Button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {projectsAlumnos.map((project, index) => (
                  <div key={index} className="bg-white p-4 rounded-xl shadow-md">
                    <img 
                      src={project.image} 
                      alt="Imagen de proyecto" 
                      className="w-full h-40 object-cover rounded-xl"
                    />
                    <h3 className="text-lg font-semibold text-[rgb(31,65,155)] mt-4">{project.name}</h3>
                    <p className="text-sm text-gray-600">{project.company}</p>
                    <p className="text-xs text-gray-500 mt-2">{project.description}</p>

                    {/* Botón Ver Archivos */}
                    <Button variant="outline" className="mt-4 rounded-md bg-blue-500 text-white hover:bg-blue-600">
                      Ver archivos
                    </Button>
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
