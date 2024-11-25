import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login');  // Redirigir si no está autenticado
    } else {
      axios.get('http://localhost:3000/projects', {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        setData(response.data);  // Datos recibidos del backend
      })
      .catch((err) => {
        setError('No se pudo obtener la información.');
      });
    }
  }, [navigate]);

  return (
    <div>
      <h2>Dashboard</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <ul>
        {data.map((project) => (
          <li key={project.id}>{project.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
