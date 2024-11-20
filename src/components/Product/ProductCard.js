import { Card, Collapse } from '@mui/material';
import React, { useState } from 'react';
import ProductCardActions from './ProductCardActions';
import ProductCardDetails from './ProductCardDetails';
import ProductCardHeader from './ProductCardHeader';
import ProductCardMedia from './ProductCardMedia';

const ProductCard = ({ product, onAddToCart }) => {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleAddToCart = () => {
    onAddToCart(product);
  };

  return (
    <Card
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        border: 'none', // Eliminar borde
        boxShadow: 'none', // Eliminar sombra
        margin: '1em',
        width: '100%', // Ocupa todo el ancho disponible
        borderRadius: '8px', // Opcional: si deseas bordes redondeados
      }}
    >
      {/* Imagen del Producto */}
      <ProductCardMedia image={product.image} title={product.title} />
      
      {/* Contenido de la tarjeta (Header) */}
      <ProductCardHeader product={product} />

      {/* Botones de Acción */}
      <ProductCardActions
        handleExpandClick={handleExpandClick}
        handleAddToCart={handleAddToCart}
        expanded={expanded}
      />

      {/* Detalles del producto */}
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <ProductCardDetails description={product.description} />
      </Collapse>
    </Card>
  );
};

export default ProductCard;
