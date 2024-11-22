import { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';

export const useCart = () => {
  const { cart, addToCart } = useContext(CartContext);
  return { cart, addToCart };
};
