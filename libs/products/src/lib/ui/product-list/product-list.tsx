import React from 'react';
import { Product } from '../../domain/product';
import ProductListEntry from './product-list-entry/product-list-entry';
import { Resource } from '@holisticon/resource';

/* eslint-disable-next-line */
export interface ProductListProps {
    products: Resource<Product>[];
}

export const ProductList = ({ products }: ProductListProps) => {
    return (
        <ul className="list-unstyled">
            {products.map(product => <ProductListEntry product={product} key={product._id} />)}
        </ul>
    );
};

export default ProductList;
