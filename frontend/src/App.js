import React from 'react';
import { Routes, Route } from 'react-router-dom'; // Solo importa Routes y Route
import Alumno from './components/Pantallas/Alumno.jsx';
import Login from './components/Login.jsx';
import Inicio from './components/Inicio.jsx';
import Ayuda from './components/Ayuda';
import Registro from './components/Registro.jsx';
import Asesor from './components/Pantallas/Asesor.jsx';
import JefeCarreraDashboard from './components/Pantallas/JefeCarrera.jsx'; // Asegúrate de importar el componente JefeCarrera
import DivisionEstudios from './components/Pantallas/Divicion.jsx';
import DocenteDashboard from './components/Pantallas/Docente.jsx';
import GTIVDashboard from './components/Pantallas/GTIV.jsx'; // Asegúrate de importar el componente GTIV

function App() {
  return (
    <div className="App">
      <Routes>
        {/* Ruta para inicio */}
        <Route path="/" element={<Inicio />} />
        {/* Ruta para Login */}
        <Route path="/login" element={<Login />} />
        {/* Ruta para Ayuda */}
        <Route path="/ayuda" element={<Ayuda />} />
        {/* Ruta para Registro */}
        <Route path="/registro" element={<Registro />} />
         {/* Ruta para Alumno */}
         <Route path="/alumno" element={<Alumno />} />
        {/* Ruta para Division */}
        <Route path="/division" element={<DivisionEstudios />} />
        {/* Ruta para Asesor */}
        <Route path="/asesor" element={<Asesor />} />
        {/* Ruta para Jefe de Carrera */}
        <Route path="/jefecarrera" element={<JefeCarreraDashboard />} />
        {/* Ruta para Docente */}
        <Route path="/docente" element={<DocenteDashboard />} />
        {/* Ruta para GTIV */}
        <Route path="/gtiv" element={<GTIVDashboard />} />
      </Routes>
    </div>
  );
}

export default App;
