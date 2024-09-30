import { useEffect, useState } from 'react';
import CardPizza from '../components/CardPizza';  // Importa CardPizza correctamente
import './Home.css';

function Home() {
  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/pizzas')
      .then(response => response.json())
      .then(data => setPizzas(data))
      .catch(error => console.error('Error fetching pizzas:', error));
  }, []);

  return (
    <div className="pizza-container">
      {pizzas.map(pizza => (
        <CardPizza key={pizza.id} pizza={pizza} />
      ))}
    </div>
  );
}

export default Home;
