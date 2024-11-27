import React from 'react';
import { Routes, Route } from 'react-router-dom'; // Solo importa Routes y Route
import Alumno from './components/Alumno.jsx';
import Login from './components/Login.jsx';
import Inicio from './components/Inicio.jsx';
import Ayuda from './components/Ayuda';
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
      </Routes>
    </div>
  );
}

export default App;
