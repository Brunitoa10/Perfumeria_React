import React, { useState } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { default as ButtonAppBar } from './components/NavBar/Navbar';
import ProductGrid from './components/Product/ProductGrid';
import CategoryPage from './pages/CategoryPage';
import Login from './pages/Login';
import ShoppingCart from './pages/ShoppingCart';

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems((prevCart) => [...prevCart, product]);
  };

  const removeFromCart = (productId) => {
    setCartItems((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  return (
    <Router>
      <div className="App">
        <ButtonAppBar cartItems={cartItems} />
       
        <Routes>
          <Route path="/" element={<ProductGrid addToCart={addToCart} />} />
          <Route path="/shopping-cart" element={<ShoppingCart cartItems={cartItems} onRemoveFromCart={removeFromCart} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/category/:category" element={<CategoryPage addToCart={addToCart} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
