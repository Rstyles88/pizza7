import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import UserContext from '../context/UserContext';

const Register = () => {
  const { register } = useContext(UserContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');  // Estado para mensajes
  const navigate = useNavigate();

  const validatePassword = () => {
    if (password.length < 6) {
      setMessage('La contraseña debe tener al menos 6 caracteres.');
      return false;
    }
    if (password !== confirmPassword) {
      setMessage('Las contraseñas no coinciden.');
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validatePassword()) return;  // Si no pasa la validación, no continúa
    const success = await register(email, password);
    
    if (success) {
      setMessage('Registro exitoso');  // Mensaje de éxito
      navigate('/');  // Redirige a la página principal
    } else {
      setMessage('Error al registrarse. Verifique los datos.');  // Mensaje de error
    }
  };

  return (
    <div className="register-container">
      <h2>Register</h2>
      {message && <p>{message}</p>}  {/* Muestra el mensaje si existe */}
      <form onSubmit={handleSubmit} className="register-form">
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
        <label>Confirm Password</label>
        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder="Confirm your password"
          required
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
