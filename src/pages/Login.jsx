import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import UserContext from '../context/UserContext';

const Login = () => {
  const { login } = useContext(UserContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');  // Estado para mensajes
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const success = await login(email, password);
    
    if (success) {
      setMessage('Inicio de sesión exitoso');  // Mensaje de éxito
      navigate('/');  // Redirige a la página principal
    } else {
      setMessage('Error al iniciar sesión. Verifique sus credenciales.');  // Mensaje de error
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      {message && <p>{message}</p>}  {/* Muestra el mensaje si existe */}
      <form onSubmit={handleSubmit} className="login-form">
        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
        />
        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
