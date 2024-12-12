import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Profile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        // Suponiendo que el backend devuelve los datos de usuario
        const response = await axios.get('/api/profile', {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}` // O la forma en que almacenas tu token
          }
        });
        setUser(response.data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, []);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="profile-container">
      <h1>Perfil de Usuario</h1>
      <div className="profile-info">
        <h2>{user.name}</h2>
        <p>Email: {user.email}</p>
        <p>Rol: {user.role}</p>
        {/* Agrega otros campos de datos que quieras mostrar */}
      </div>
    </div>
  );
};

export default Profile;
