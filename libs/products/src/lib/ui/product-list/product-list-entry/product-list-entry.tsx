import React from 'react';
import { Product } from '../../../domain/product';
import { ProductImage } from '../../product-image/product-image';
import { ProductPrice } from '../../product-price/product-price';
import { Link, useRouteMatch } from 'react-router-dom';
import { Resource, encodeResourceUriAsRouteParam, getUri } from '@ngxp/resource';
import { AddToShoppingCartForm } from '@ngxp/shopping-cart';

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
            <h2 className="h5 mb-1"><Link to={`${match.url}/${encodeResourceUriAsRouteParam(product._id)}`}>{product.productName}</Link></h2>
            <p className="mb-1"><small>{product.productDescription}</small></p>
            <p><ProductPrice product={product}></ProductPrice></p>
        </div>

        <div className="col-2">
            <AddToShoppingCartForm product={getUri(product)} />
        </div>
    </li>;
};

export default ProductListEntry;
