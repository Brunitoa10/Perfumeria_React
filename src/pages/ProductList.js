// src/pages/ProductList.js
import React from 'react';
import ProductCard from '../components/Product/ProductCard';

const products = [
  {
    id: 1,
    name: '212 Man',
    category: 'Perfume for men',
    price: 500,
    imageUrl: 'https://imgs.search.brave.com/Wf88R-Alx7Albc9GLlD8pPS5CbEVingdRLc3wkVp2as/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9wZXJm/dW1hc3RlLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvMjAyNC8w/MS9QZXJmdW1lLTIx/Mi1NZW4tRGUtQ2Fy/b2xpbmEtSGVycmVy/YS1QYXJhLUhvbWJy/ZS0xMDAtbWwuanBn',
    description: 'Fresh and elegant fragrance',
    details: '212 Men by Carolina Herrera is a sophisticated and modern masculine fragrance launched in 1999. It belongs to the woody spicy fragrance family, with an urban and fresh aroma that combines citrus notes, vibrant spices and a warm base of wood and musk. Ideal for charismatic and dynamic men, it is perfect for both day and night for any occasion.'
  },{
    id: 2,
    name: 'Invictus',
    category: 'Perfume for men',
    price: 750,
    imageUrl: 'https://imgs.search.brave.com/WUCvGGQ29yGyCW6WC57S4nV0QKIGNF7bc__jQv0O-eU/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NjEyRERWRUhMbUwu/anBn',
    description: 'Woody aquatic fragrance',
    details: 'Invictus by Paco Rabanne is a vibrant and energetic masculine fragrance launched in 2013. It represents the spirit of the champion, combining fresh and aquatic notes with a sensual and woody base. Its main accords include grapefruit, bay leaves and ambergris, creating a modern aroma that balances freshness and warmth. It is ideal for men looking to convey confidence and dynamism.'
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
