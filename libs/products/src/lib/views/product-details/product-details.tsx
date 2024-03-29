import { isNull } from 'lodash-es';
import React from 'react';
import { useParams } from 'react-router-dom';
import { useProduct } from '../../state/use-product-hook';
import { Product } from '../../ui/product/product';
import { decodeResourceUriFromRouteParam } from '@holisticon/resource';
/* eslint-disable-next-line */
export interface ProductDetailsProps { }

const useDecodedResourceUriFromParam = (paramName: string) => {
    const params: { [key: string]: string } = useParams();
    return decodeResourceUriFromRouteParam(params[paramName]);
}

export const ProductDetails = (props: ProductDetailsProps) => {
    const productUri = useDecodedResourceUriFromParam('product');
    const product = useProduct(productUri);

    return isNull(product) ? null : <Product product={product}></Product>;
};

export default ProductDetails;
