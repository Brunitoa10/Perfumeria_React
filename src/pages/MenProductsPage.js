// MenProductsPage.js
import React from 'react';
import ProductGrid from '../components/ProductGrid';
import products from '../ProductData'; // Asumiendo que tienes un archivo JSON con los productos

const MenProductsPage = () => {
  // Filtrar los productos de hombres
  const menProducts = products.filter((product) => product.category === 'men');

  return (
    <div>
      <h1>Productos para Hombres</h1>
      <ProductGrid products={menProducts} />
    </div>
  );
};

export default MenProductsPage;
