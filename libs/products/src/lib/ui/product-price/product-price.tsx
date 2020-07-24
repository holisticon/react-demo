import React from 'react';
import { Product } from '../../domain/product';

/* eslint-disable-next-line */
export interface ProductPriceProps {
  product: Product;
}

export const ProductPrice = ({ product }: ProductPriceProps) => {
  return <strong className="price">{ product.price }</strong>;
};

export default ProductPrice;
