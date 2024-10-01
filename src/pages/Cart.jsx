import { useContext, useState } from 'react';
import UserContext from '../context/UserContext';

const Cart = ({ cart }) => {
  const { token } = useContext(UserContext);
  const [message, setMessage] = useState('');

  const handleCheckout = async () => {
    const response = await fetch('http://localhost:5000/api/checkouts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,  // Usa el token JWT
      },
      body: JSON.stringify({ cart }),
    });
    const data = await response.json();
    if (data.success) {
      setMessage('Compra realizada con éxito');
    } else {
      setMessage('Error en la compra');
    }
  };

  return (
    <div>
      <h2>Carrito</h2>
      <button onClick={handleCheckout}>Comprar</button>
      {message && <p>{message}</p>}
    </div>
  );
};

export default Cart;
