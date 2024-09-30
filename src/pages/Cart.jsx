import { useContext } from 'react';
import UserContext from '../context/UserContext';
import './Cart.css';

function Cart() {
  const { token } = useContext(UserContext);

  return (
    <div className="cart">
      <h2>Carrito de Compras</h2>
      {/* Lógica para mostrar productos */}
      <button disabled={!token}>Pagar</button>
      {!token && <p>Debes iniciar sesión para realizar el pago.</p>}
    </div>
  );
}

export default Cart;
