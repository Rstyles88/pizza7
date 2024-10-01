import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import UserContext from '../context/UserContext';
import './Navbar.css';  // Importar el CSS del Navbar

const Navbar = () => {
  const { token, logout } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');  // Redirige al login después de cerrar sesión
  };

  return (
    <nav>
      <div className="navbar-brand">
        <Link to="/">Pizzeria Mamma Mia</Link>
      </div>
      <div className="navbar-links">
        <Link to="/">Home</Link>
        {token ? (
          <>
            <Link to="/profile">Profile</Link>
            <button onClick={handleLogout}>Logout</button>
          </>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
