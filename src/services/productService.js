export const applyDiscount = (product, discountRate) => {
    return { ...product, price: product.price * (1 - discountRate) };
  };
  