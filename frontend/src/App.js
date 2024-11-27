import React from 'react';
import { Routes, Route } from 'react-router-dom'; // Solo importa Routes y Route
import Alumno from './components/Pantallas/Alumno.jsx';
import Login from './components/Login.jsx';
import Inicio from './components/Inicio.jsx';
import Ayuda from './components/Ayuda';
import Registro from './components/Registro.jsx';
function App() {
  return (
    <div className="App">
      <Routes>
        {/* Ruta para inicio */}
        <Route path="/" element={<Inicio />} />
        {/* Ruta para Alumno */}
        <Route path="/alumno" element={<Alumno />} />
        {/* Ruta para Login */}
        <Route path="/login" element={<Login />} />
        {/* Ruta para Ayuda */}
        <Route path="/ayuda" element={<Ayuda />} />
        {/* Ruta para Registro */}
        <Route path="/registro" element={<Registro />} />
      </Routes>
    </div>
  );
}

export default App;
