import React from 'react';
import { User, FolderKanban, Upload, Download, ChevronDown } from 'lucide-react';
import { Button } from "../ui/Button";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "../ui/dropdown-menu";

const Dashboard = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[rgb(31,65,155)]">
      {/* Header */}
      <header className="bg-[rgb(31,65,155)] text-white p-4 shadow-md border-b border-white/20 flex items-center">
        <div className="w-12 h-12 bg-white rounded-full mr-4 overflow-hidden">
          <img src="/image/img.jpg" alt="Logo IT Matehuala" className="w-full h-full object-cover" />
        </div>
        <h1 className="text-xl font-bold">INSTITUTO TECNOLÓGICO DE MATEHUALA</h1>
      </header>

      <div className="flex flex-1">
        {/* Sidebar */}
        <div className="w-64 text-white p-5 border-r border-white/20">
          <nav className="space-y-4">
            <a href="#" className="flex items-center space-x-3 px-2 py-2 rounded hover:bg-white/10">
              <User className="w-5 h-5" />
              <span>Perfil</span>
            </a>
            <a href="#" className="flex items-center space-x-3 px-2 py-2 rounded hover:bg-white/10">
              <FolderKanban className="w-5 h-5" />
              <span>Proyectos alumno</span>
            </a>
            <a href="#" className="flex items-center space-x-3 px-2 py-2 rounded hover:bg-white/10">
              <Upload className="w-5 h-5" />
              <span>Subir archivos</span>
            </a>
          </nav>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-8">
          <div className="bg-white rounded-3xl shadow-sm p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-semibold text-[rgb(31,65,155)]">Proyectos alumno</h2>
              <div className="flex space-x-4">
                <Button variant="outline">
                  <Download className="mr-2 h-4 w-4" /> Descargar formatos
                </Button>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline">
                      Ir a <ChevronDown className="ml-2 h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem>Mi proyecto</DropdownMenuItem>
                    <DropdownMenuItem>Banco de proyectos</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
            <p className="text-gray-600">No hay proyectos disponibles.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
