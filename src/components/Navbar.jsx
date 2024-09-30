import { useContext } from 'react';
import { Link } from 'react-router-dom';
import UserContext from '../context/UserContext';
import './Navbar.css';

function Navbar() {
  const { token, logout } = useContext(UserContext);

  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        {token ? (
          <>
            <li><Link to="/profile">Profile</Link></li>
            <li><button onClick={logout}>Logout</button></li>
          </>
        ) : (
          <>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/register">Register</Link></li>
          </>
        )}
        <li><Link to="/cart">🛒 Total</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
