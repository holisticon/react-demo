import React from 'react';
import { Product as IProduct } from '../../domain/product';
import ProductImage from '../product-image/product-image';
import ProductPrice from '../product-price/product-price';
import { AddToShoppingCartForm } from '@holisticon/shopping-cart';
import { Resource, getUri } from '@holisticon/resource';

/* eslint-disable-next-line */
export interface ProductProps {
    product: Resource<IProduct>;
}

export const Product = ({ product }: ProductProps) => {
    return <>
        <h1 className="mb-5">{product.productName}</h1>

        <div className="row align-items-start">
            <div className="col-4"><ProductImage product={product}></ProductImage></div>

            <div className="col-8 row align-items-center">
                <p className="col-8 mb-0"><ProductPrice product={product}></ProductPrice></p>

                <div className="col-4">
                    <AddToShoppingCartForm product={getUri(product)} />
                </div>

                <p className="col mt-5 description">{product.productDescription}</p>
            </div>
        </div>
    </>;
};

export default Product;
