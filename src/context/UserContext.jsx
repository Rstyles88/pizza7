import { createContext, useState } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem('token') || null);
  const [email, setEmail] = useState(null);

  // Método para registrar un usuario
  const register = async (email, password) => {
    try {
      const response = await fetch('http://localhost:5000/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });
      const data = await response.json();
      if (response.ok) {
        setToken(data.token);
        setEmail(email);
        localStorage.setItem('token', data.token);  // Guarda el token en localStorage
        return true;
      } else {
        console.log('Error en el registro:', data.message);
        return false;
      }
    } catch (error) {
      console.log('Error en el registro:', error);
      return false;
    }
  };

  // Método para iniciar sesión
  const login = async (email, password) => {
    try {
      const response = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });
      const data = await response.json();
      if (response.ok) {
        setToken(data.token);
        setEmail(email);
        localStorage.setItem('token', data.token);  // Guarda el token en localStorage
        return true;
      } else {
        console.log('Error al iniciar sesión:', data.message);
        return false;
      }
    } catch (error) {
      console.log('Error durante el login:', error);
      return false;
    }
  };

  // Método para obtener el perfil del usuario autenticado
  const getProfile = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/auth/me', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`  // Enviar el token JWT
        }
      });
      const data = await response.json();
      if (response.ok) {
        return data;  // Devuelve los datos del perfil
      } else {
        console.log('Error al obtener el perfil:', data.message);
        return null;
      }
    } catch (error) {
      console.log('Error al obtener el perfil:', error);
      return null;
    }
  };

  // Método para cerrar sesión
  const logout = () => {
    setToken(null);
    setEmail(null);
    localStorage.removeItem('token');  // Elimina el token de localStorage
  };

  return (
    <UserContext.Provider value={{ token, email, register, login, getProfile, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
