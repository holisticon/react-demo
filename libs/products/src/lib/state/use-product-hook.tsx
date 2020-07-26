import { Resource, ResourceUri } from '@ngxp/resource';
import { useEffect, useState } from 'react';
import { Product } from '../domain/product';
import { loadProduct } from './products-api';

export const useProduct = (productUri: ResourceUri) => {
    const [product, setProduct] = useState<Resource<Product> | null>(null);
    useEffect(() => {
        loadProduct(productUri)
            .then(setProduct)
    }, [productUri]);

    return product;
}
