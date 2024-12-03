import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import Navbar from './components/NavBar/Navbar';
import ProductGrid from './components/Product/ProductGrid';
import Login from './pages/Login';
import ShoppingCart from './pages/ShoppingCart';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<ProductGrid />} />
          <Route path="/shopping-cart" element={<ShoppingCart />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
