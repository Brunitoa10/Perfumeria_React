import PropTypes from 'prop-types';
import React from 'react';
import Slider from 'react-slick';

const ProductCarousel = ({ title, products, settings }) => {
  return (
    <div style={{ marginBottom: '3em' }}>
      <h2>{title}</h2>
      <Slider {...settings}>
        {products.map(product => (
          <div key={product.id} style={{ padding: '0 10px' }}>
            <img src={product.imageUrl} alt={product.name} style={{ width: '100%' }} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

ProductCarousel.propTypes = {
  title: PropTypes.string.isRequired,
  products: PropTypes.array.isRequired,
  settings: PropTypes.object.isRequired,
};

export default ProductCarousel;
