import React from 'react';
import { Routes, Route } from 'react-router-dom'; // Solo importa Routes y Route
import Alumno from './components/Alumno.jsx';
import Login from './components/Login.jsx';
function App() {
  return (
    <div className="App">
      <Routes>
        {/* Ruta para Login */}
        <Route path="/" element={<Login />} />
        {/* Ruta para Alumno */}
        <Route path="/alumno" element={<Alumno />} />
      </Routes>
    </div>
  );
}

export default App;
