import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import Navbar from './components/NavBar/Navbar';
import ProductGrid from './components/Product/ProductGrid';
import ShoppingCart from './pages/ShoppingCart'; // Importa el carrito

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar /> {/* Siempre visible */}
        <Routes>
          <Route path="/" element={<ProductGrid />} /> {/* Página principal */}
          <Route path="/shopping-cart" element={<ShoppingCart />} /> {/* Carrito */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
