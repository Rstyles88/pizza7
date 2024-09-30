import { createContext, useState } from 'react';

const UserContext = createContext();  // Crea el contexto

export const UserProvider = ({ children }) => {
  const [token, setToken] = useState(true);  // Simulación del token por defecto

  const logout = () => {
    setToken(false);
  };

  return (
    <UserContext.Provider value={{ token, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
