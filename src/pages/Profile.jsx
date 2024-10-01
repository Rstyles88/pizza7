import { useContext, useEffect, useState } from 'react';
import UserContext from '../context/UserContext';

const Profile = () => {
  const { token, getProfile } = useContext(UserContext);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      const data = await getProfile();  // Llamar a la función getProfile
      setUser(data);
    };
    if (token) fetchProfile();  // Solo intenta obtener el perfil si el usuario está autenticado
  }, [token, getProfile]);

  return (
    <div>
      <h2>Perfil</h2>
      {user ? <p>Email: {user.email}</p> : <p>Cargando perfil...</p>}
    </div>
  );
};

export default Profile;
