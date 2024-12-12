import React, { useState } from 'react';
import { User, FolderKanban, Upload, Download, ChevronDown, CheckCircle, Circle, Camera, Menu, X } from 'lucide-react';
import { Button } from "../ui/Button";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "../ui/dropdown-menu";

export default function Dashboard() {
  const [view, setView] = useState('myProject'); // Controla la vista actual
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Controla el menú móvil

  const projectStages = [
    { name: 'Propuesta', completed: true },
    { name: 'Revisión', completed: true },
    { name: 'Desarrollo', completed: true },
    { name: 'Pruebas', completed: true },
    { name: 'Entrega', completed: false },
  ];

  const projectDetails = {
    name: 'Sistema de Gestión',
    company: 'TechSolutions',
    description: 'Optimiza el control de stock y mejora la eficiencia operativa.',
    image: '/placeholder.svg?height=200&width=300'
  };

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

          <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      <div className="flex flex-1 pt-16 md:pt-0">
        {/* Sidebar */}
        <div className={`md:w-64 bg-[rgb(31,65,155)] text-white p-5 border-r-2 border-white/20 fixed top-16 left-0 bottom-0 md:block ${isMenuOpen ? 'block' : 'hidden'} shadow-md`}>
          <nav className="space-y-4">
            <a href="#" className="flex items-center space-x-3 px-2 py-2 rounded hover:bg-white/10" onClick={() => setView('profile')}>
              <User className="w-5 h-5" />
              <span>Perfil</span>
            </a>
            <a href="#" className="flex items-center space-x-3 px-2 py-2 rounded hover:bg-white/10" onClick={() => setView('myProject')}>
              <FolderKanban className="w-5 h-5" />
              <span>Proyectos alumno</span>
            </a>
            <a href="#" className="flex items-center space-x-3 px-2 py-2 rounded hover:bg-white/10" onClick={() => setView('uploadProject')}>
              <Upload className="w-5 h-5" />
              <span>Subir Proyecto</span>
            </a>
            <a href="#" className="flex items-center space-x-3 px-2 py-2 rounded hover:bg-white/10">
              <Upload className="w-5 h-5" />
              <span>Cerrar Sesión</span>
            </a>
          </nav>
        </div>

        <div className="flex-1 p-8 md:ml-64 mt-16 overflow-y-auto">
          {view === 'uploadProject' ? (
            <div className="bg-white rounded-xl shadow-2xl p-6 border border-gray-300 max-w-xl mx-auto">
              <h2 className="text-2xl font-semibold text-[rgb(31,65,155)] mb-6">Subir Proyecto</h2>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm text-gray-700 mb-2">Nombre del Proyecto</label>
                  <input
                    type="text"
                    className="w-full border-b-2 border-gray-300 focus:border-[rgb(31,65,155)] outline-none text-gray-800"
                    placeholder="Escribe el nombre del proyecto"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-700 mb-2">Cronograma preliminar de actividades</label>
                  <textarea
                    rows="3"
                    className="w-full border-b-2 border-gray-300 focus:border-[rgb(31,65,155)] outline-none text-gray-800"
                    placeholder="Describe el cronograma"
                  ></textarea>
                </div>
                <div>
                  <label className="block text-sm text-gray-700 mb-2">Descripción detallada de las actividades</label>
                  <textarea
                    rows="4"
                    className="w-full border-b-2 border-gray-300 focus:border-[rgb(31,65,155)] outline-none text-gray-800"
                    placeholder="Describe las actividades"
                  ></textarea>
                </div>
                <div>
                  <label className="block text-sm text-gray-700 mb-2">Lugar donde se realizará el proyecto</label>
                  <input
                    type="text"
                    className="w-full border-b-2 border-gray-300 focus:border-[rgb(31,65,155)] outline-none text-gray-800"
                    placeholder="Escribe el lugar"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-700 mb-2">Información de la organización</label>
                  <textarea
                    rows="3"
                    className="w-full border-b-2 border-gray-300 focus:border-[rgb(31,65,155)] outline-none text-gray-800"
                    placeholder="Describe la empresa o institución"
                  ></textarea>
                </div>
                <div>
                  <label className="block text-sm text-gray-700 mb-2">Imagen del Proyecto</label>
                  <input
                    type="file"
                    className="block w-full text-sm text-gray-500 border-b-2 border-gray-300 focus:border-[rgb(31,65,155)]"
                  />
                </div>
                <div className="flex justify-center">
                  <button className="bg-[rgb(31,65,155)] text-white px-6 py-2 rounded-lg hover:bg-blue-600 focus:outline-none">
                    Subir Proyecto
                  </button>
                </div>
              </form>
            </div>
          ) : view === 'myProject' ? (
            <div className="bg-gray-50 rounded-lg p-6 mb-6 shadow-sm border border-gray-200 w-full max-w-4xl mx-auto flex flex-col items-center justify-between">
              <div className="w-full h-40">
                <img 
                  src={projectDetails.image}
                  alt="Vista previa del proyecto"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="flex flex-col items-center text-center mb-6">
                <h3 className="text-lg font-semibold text-[rgb(31,65,155)] mb-1">{projectDetails.name}</h3>
                <p className="text-gray-600 text-sm mb-1">Empresa: {projectDetails.company}</p>
                <p className="text-gray-700 text-xs">{projectDetails.description}</p>
              </div>

              <div className="flex flex-row items-center space-x-6 mb-4">
                {projectStages.map((stage, index) => (
                  <React.Fragment key={index}>
                    <div className="flex flex-col items-center">
                      <span className="text-xs text-gray-600">{`Etapa ${index + 1}`}</span>
                      <div
                        className={`flex items-center justify-center w-10 h-10 rounded-full border mt-2 ${stage.completed ? 'bg-[rgb(31,65,155)] border-[rgb(31,65,155)]' : 'bg-gray-200 border-gray-200'}`}
                      >
                        {stage.completed ? (
                          <CheckCircle className="w-5 h-5 text-white" />
                        ) : (
                          <Circle className="w-5 h-5 text-gray-500" />
                        )}
                      </div>
                    </div>
                  </React.Fragment>
                ))}
              </div>

              <div className="flex space-x-4 mt-4">
                <Button variant="outline" className="rounded-md">Ver archivos</Button>
                <Button variant="outline" className="rounded-md">Subir archivos</Button>
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center text-center">
              <h2 className="text-lg font-semibold">Perfil</h2>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}