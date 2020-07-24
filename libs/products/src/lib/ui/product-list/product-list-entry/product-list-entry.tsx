import React from 'react';
import { Product } from '../../../domain/product';
import { ProductImage } from '../../product-image/product-image';
import { ProductPrice } from '../../product-price/product-price';
import { Link, useRouteMatch } from 'react-router-dom';
import { Resource } from '@ngxp/resource';

/* eslint-disable-next-line */
export interface ProductListEntryProps {
    product: Resource<Product>;
}

export const ProductListEntry = ({ product }: ProductListEntryProps) => {
    const match = useRouteMatch()

    return <li className="mb-5 row align-items-center">
        <div className="col-2">
            <ProductImage product={product} ></ProductImage>
        </div>

        <div className="col-8">
            <h2 className="h5 mb-1"><Link to={`${match.url}/${btoa(product._id)}`}>{product.productName}</Link></h2>
            <p className="mb-1"><small>{product.productDescription}</small></p>
            <p><ProductPrice product={product}></ProductPrice></p>
        </div>

        {/* // <ngxp-add-to-shopping-cart-form
    //     className="col-2"
    //     [product]="product | toResourceUri"
    // ></ngxp-add-to-shopping-cart-form> */}
    </li>;
};

export default ProductListEntry;
