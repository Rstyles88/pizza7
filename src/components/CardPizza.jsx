import { Link } from 'react-router-dom';
import './CardPizza.css';  // Asegúrate de tener los estilos

function CardPizza({ pizza }) {
  return (
    <div className="card-pizza">
      <Link to={`/pizza/${pizza.id}`}>
        <h2>{pizza.name}</h2>
        <img src={pizza.img} alt={pizza.name} />
        <p>Precio: ${pizza.price.toLocaleString()}</p>
      </Link>
      <button>Añadir al carrito</button>
    </div>
  );
}

export default CardPizza;
