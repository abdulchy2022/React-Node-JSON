// client/src/App.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';


function App() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

 
  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/products')
      .then(response => {
        console.log('data');
        setProducts(response.data);
      })
      .catch(error => {
        setError('Error getting product data');
      });
  }, []);

  return (
   
    <div class="centered-text">
        <div>
              <h1>Product List</h1>
              {error && <p>{error}</p>}
              <ul>
                {products.map(product => (
                  <li key={product.id}>
                    <h3>{product.name}</h3>
                    <p>{product.description}</p>
                    <p>Price: £{product.price}</p>
                  </li>
                ))}
              </ul>
          </div>    
    </div>
  );
}

export default App;
