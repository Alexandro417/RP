import React from 'react';
import { User, Folder, PlusCircle } from 'lucide-react';

const App = () => {
  return (
    <div className="min-h-screen bg-[#E6E6FA]">
      {/* Header */}
      <header className="border-b bg-[rgb(205,211,251)] backdrop-blur-sm">
        <div className="container mx-auto flex h-16 items-center px-4">
          <div className="flex items-center gap-2">
            <img
              src="/images/logo.png"
              alt="Instituto Tecnologico de Matehuala logo"
              className="h-10 w-10"
            />
            <span className="text-lg font-semibold">
              INSTITUTO TECNOLOGICO DE MATEHUALA
            </span>
          </div>
        </div>
      </header>

      <div className="flex min-h-[calc(100vh-4rem)]">
        {/* Sidebar */}
        <aside className="w-64 border-r bg-white p-4">
          <nav className="space-y-4">
            <a
              href="#"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-700 hover:bg-gray-100"
            >
              <User className="h-5 w-5" />
              <span className="text-sm font-medium">Perfil</span>
            </a>
            <a
              href="#"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-700 hover:bg-gray-100"
            >
              <Folder className="h-5 w-5" />
              <span className="text-sm font-medium">Proyectos</span>
            </a>
            <a
              href="#"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-700 hover:bg-gray-100"
            >
              <PlusCircle className="h-5 w-5" />
              <span className="text-sm font-medium">Subir archivos</span>
            </a>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          <div className="rounded-lg bg-white/80 p-6 shadow-lg backdrop-blur-sm">
            <h2 className="mb-6 text-2xl font-bold">Proyectos</h2>
            <div className="grid gap-4">
              {/* Aquí irá el contenido de los proyectos */}
              <div className="rounded-lg border p-4">
                <p className="text-gray-600">No hay proyectos disponibles.</p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;
