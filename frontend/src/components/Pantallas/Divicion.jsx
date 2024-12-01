import React, { useState } from 'react';
import { User, FolderKanban, LogOut, Search, Database, Camera } from 'lucide-react';
import { Button } from "../ui/Button";
import { Input } from "../ui/input";

export default function Dashboard() {
  const [view, setView] = useState('myProject'); // Estado para controlar la vista actual (Mi Proyecto, Banco de Proyectos o Perfil)

  const projectStages = [
    { name: 'Propuesta', completed: true },
    { name: 'Revisión', completed: true },
    { name: 'Desarrollo', completed: true },
    { name: 'Pruebas', completed: false },
    { name: 'Entrega', completed: false },
  ];

  const projects = [
    { 
      name: 'Sistema de Gestión', 
      company: 'TechSolutions', 
      description: 'Optimiza el control de stock y mejora la eficiencia operativa.', 
      image: '/placeholder.svg?height=200&width=300', 
      student: 'Juan Pérez', 
      career: 'Ingeniería en Sistemas'
    },
    { 
      name: 'Aplicación Móvil', 
      company: 'AppDev', 
      description: 'Desarrollo de una app para mejorar la productividad.', 
      image: '/placeholder.svg?height=200&width=300', 
      student: 'María López', 
      career: 'Ingeniería en Computación'
    },
    { 
      name: 'E-commerce', 
      company: 'ShopMasters', 
      description: 'Plataforma de compras online para pequeñas empresas.', 
      image: '/placeholder.svg?height=200&width=300', 
      student: 'Carlos Sánchez', 
      career: 'Ingeniería en Sistemas'
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[rgb(31,65,155)]">
      <header className="bg-[rgb(31,65,155)] text-white p-4 shadow-md border-b border-white/20 flex items-center">
        <img src="/image/img.jpg" alt="Logo" className="w-12 h-12 rounded-full mr-4" />
        <h1 className="text-xl font-bold">INSTITUTO TECNOLOGICO DE MATEHUALA</h1>
      </header>

      <div className="flex flex-1">
        <div className="w-64 text-white p-5 border-r border-white/20">
          <nav className="space-y-4">
            <a href="#" className="flex items-center space-x-3 px-2 py-2 rounded hover:bg-white/10" onClick={() => setView('profile')}>
              <User className="w-5 h-5" />
              <span>Perfil</span>
            </a>
            <a href="#" className="flex items-center space-x-3 px-2 py-2 rounded hover:bg-white/10" onClick={() => setView('myProject')}>
              <FolderKanban className="w-5 h-5" />
              <span>Proyectos alumnos</span>
            </a>
            <a href="#" className="flex items-center space-x-3 px-2 py-2 rounded hover:bg-white/10" onClick={() => setView('bank')}>
              <Database className="w-5 h-5" />
              <span>Banco de proyectos</span>
            </a>
            <a href="#" className="flex items-center space-x-3 px-2 py-2 rounded hover:bg-white/10">
              <LogOut className="w-5 h-5" />
              <span>Cerrar sesión</span>
            </a>
          </nav>
        </div>
        <div className="flex-1 p-6">
          {/* Mostrar contenido basado en la vista seleccionada */}
          {view === 'profile' ? (
            <div className="flex flex-col items-center text-center bg-white rounded-lg p-6 shadow-lg">
              <h2 className="text-2xl font-semibold text-[rgb(31,65,155)]">Perfil</h2>
              <div className="relative mb-4">
                <img src="/image/profile-placeholder.jpg" alt="Imagen de perfil" className="w-32 h-32 rounded-full object-cover" />
                <Button className="absolute bottom-0 right-0 bg-blue-500 text-white p-2 rounded-full">
                  <Camera className="w-5 h-5" />
                </Button>
              </div>
              <p className="text-lg text-gray-800 font-semibold mb-2">Ingeniería en Sistemas</p>
              <div className="w-full max-w-sm">
                <div className="mb-4">
                  <p className="text-sm text-gray-400 uppercase">Teléfono</p>
                  <input type="text" className="w-full border-b border-gray-300 focus:border-blue-500 outline-none text-gray-800" placeholder="123-456-7890" />
                </div>
                <div className="mb-4">
                  <p className="text-sm text-gray-400 uppercase">Email</p>
                  <input type="email" className="w-full border-b border-gray-300 focus:border-blue-500 outline-none text-gray-800" value="L20660042@matehuala.tecnm.mx" readOnly />
                </div>
                <div className="mb-4">
                  <p className="text-sm text-gray-400 uppercase">Cambiar contraseña</p>
                  <input type="password" className="w-full border-b border-gray-300 focus:border-blue-500 outline-none text-gray-800" placeholder="Nueva contraseña" />
                </div>
                <div className="flex justify-center mt-6">
                  <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 focus:outline-none">GUARDAR</button>
                </div>
              </div>
            </div>
          ) : view === 'myProject' ? (
            <div className="bg-white bg-gray-50 rounded-lg p-6 mb-6 shadow-lg">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-semibold text-[rgb(31,65,155)]">Proyectos alumnos</h2>
                <div className="relative">
                  <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <Input type="text" placeholder="Buscar proyecto" className="pl-8 pr-4 py-2" />
                </div>
              </div>
              {projects.map((project) => (
                <div key={project.name} className="bg-gray-100 rounded-lg p-6 mb-6 shadow-md">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-1/3">
                      <img src={project.image} alt={project.name} className="w-full h-48 object-cover rounded-lg" />
                    </div>
                    <div className="md:w-2/3">
                      <h3 className="text-xl font-semibold text-[rgb(31,65,155)] mb-2">{project.name}</h3>
                      <p className="text-gray-600 mb-2">Empresa: {project.company}</p>
                      <p className="text-gray-600 mb-2">Descripción: {project.description}</p>
                      <p className="text-gray-600 mb-2">Carrera: {project.career}</p>
                      <p className="text-gray-600 mb-4">Alumno: {project.student}</p>
                      <div className="mt-4">
                        <h4 className="text-lg font-semibold">Etapas del Proyecto</h4>
                        <ul className="space-y-2 mt-2">
                          {projectStages.map((stage, index) => (
                            <li key={index} className="flex items-center">
                              <span className={`w-2.5 h-2.5 rounded-full ${stage.completed ? 'bg-green-500' : 'bg-gray-300'}`} />
                              <span className="ml-2 text-gray-600">{stage.name}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="mt-6 flex space-x-4">
                        <Button variant="outline" className="rounded-md">Ver archivos</Button>
                        <Button className="bg-blue-500 text-white rounded-md">Contactar</Button>
                        <Button className="bg-green-500 text-white rounded-md">Aceptar</Button>
                        <Button className="bg-red-500 text-white rounded-md">Rechazar</Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : view === 'bank' ? (
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="text-lg font-semibold mb-4 text-[rgb(31,65,155)]">Banco de Proyectos</div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project) => (
                  <div key={project.name} className="bg-white rounded-lg shadow-md p-6">
                    <img src={project.image} alt="Imagen de proyecto" className="w-full h-40 object-cover rounded-md" />
                    <h3 className="text-lg font-semibold text-[rgb(31,65,155)] mt-4">{project.name}</h3>
                    <p className="text-sm text-gray-600">{project.company}</p>
                    <p className="text-xs text-gray-500 mt-2">{project.description}</p>
                    <Button variant="outline" className="mt-4 rounded-md">Ver archivos</Button>
                  </div>
                ))}
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
