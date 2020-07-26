import React from 'react';
import { Product as IProduct } from '../../domain/product';
import ProductImage from '../product-image/product-image';
import ProductPrice from '../product-price/product-price';

/* eslint-disable-next-line */
export interface ProductProps {
    product: IProduct;
}

export const Product = ({ product }: ProductProps) => {
    return <>
        <h1 className="mb-5">{product.productName}</h1>

        <div className="row align-items-start">
            <div className="col-4"><ProductImage product={product}></ProductImage></div>

            <div className="col-8 row align-items-center">
                <p className="col-8 mb-0"><ProductPrice product={product}></ProductPrice></p>

                <div className="col-4">FORM</div>

                {/* <ngxp-add-to-shopping-cart-form
                    className="col-4"
                    [product]="product | toResourceUri"
                ></ngxp-add-to-shopping-cart-form> */}

                <p className="col mt-5 description">{product.productDescription}</p>
            </div>
        </div>
    </>;
};

export default Product;
