import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './Pizza.css';

function Pizza() {
  const { id } = useParams();
  const [pizza, setPizza] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/api/pizzas/${id}`)
      .then(response => response.json())
      .then(data => setPizza(data))
      .catch(error => console.error('Error fetching pizza:', error));
  }, [id]);

  if (!pizza) {
    return <p>Loading...</p>;
  }

  return (
    <div className="pizza-detail">
      <img src={pizza.img} alt={pizza.name} />
      <h2>{pizza.name}</h2>
      <p>Precio: ${pizza.price.toLocaleString()}</p>
      <ul>
        {pizza.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <p>{pizza.description}</p>
    </div>
  );
}

export default Pizza;
