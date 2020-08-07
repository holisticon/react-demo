import { Resource, ResourceUri } from '@ngxp/resource';
import { isNull } from 'lodash-es';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Product } from '../domain/product';
import { selectProduct } from './products-selectors';
import { ProductsState, loadProductAction } from './products-slice';

export const useProduct = (productUri: ResourceUri) => {

    const product = useSelector<{ products: ProductsState }, Resource<Product> | null>(state => selectProduct(state, productUri));
    const dispatch = useDispatch();

    useEffect(() => {
        if (isNull(product)) {
            dispatch(loadProductAction(productUri))
        }
    }, [productUri]);

    return product;
}
