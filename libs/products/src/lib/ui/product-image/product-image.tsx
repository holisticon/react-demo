import React from 'react';
import { Product } from '../../domain/product';

/* eslint-disable-next-line */
export interface ProductImageProps {
    product: Product;
}

export const ProductImage = ({ product }: ProductImageProps) => {
    return (
        <figure className="figure">
            <img
                src={product.image}
                className="figure-img img-fluid rounded"
                alt={`Product Image of ${product.productName}`}
            />
        </figure>
    );
};

export default ProductImage;
