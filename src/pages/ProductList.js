// src/pages/ProductList.js
import React from 'react';
import ProductCard from '../components/ProductCard';

const products = [
  {
    id: 1,
    name: '212 Man',
    category: 'Perfume para hombre',
    price: 500,
    imageUrl: 'https://imgs.search.brave.com/Wf88R-Alx7Albc9GLlD8pPS5CbEVingdRLc3wkVp2as/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9wZXJm/dW1hc3RlLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvMjAyNC8w/MS9QZXJmdW1lLTIx/Mi1NZW4tRGUtQ2Fy/b2xpbmEtSGVycmVy/YS1QYXJhLUhvbWJy/ZS0xMDAtbWwuanBn',
    description: 'Fragancia fresca y elegante',
    details: 'Notas de cítricos, especias y madera.'
  },{
    id: 2,
    name: 'Paco Rabanne',
    category: 'Perfume para hombre',
    price: 250,
    imageUrl: 'https://imgs.search.brave.com/Wf88R-Alx7Albc9GLlD8pPS5CbEVingdRLc3wkVp2as/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9wZXJm/dW1hc3RlLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvMjAyNC8w/MS9QZXJmdW1lLTIx/Mi1NZW4tRGUtQ2Fy/b2xpbmEtSGVycmVy/YS1QYXJhLUhvbWJy/ZS0xMDAtbWwuanBn',
    description: 'Fragancia fresca y elegante',
    details: 'Notas de cítricos, especias y madera.'
  },
  // Más productos
];

export default function ProductList() {
  return (
    <div style={ {marginTop: '5.5em', display: 'flex', flexDirection: 'column', gap: '1.5em'}}> {/* Aplica el margen de 2px aquí */}
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
