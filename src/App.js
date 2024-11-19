import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Navbar from './components/NavBar/Navbar';
import ProductGrid from './pages/ProductGrid';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<ProductGrid />} />
      </Routes>
    </Router>
  );
}

export default App;