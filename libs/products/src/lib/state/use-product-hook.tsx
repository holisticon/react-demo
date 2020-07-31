import { ResourceUri } from '@ngxp/resource';
import { isUndefined, defaultTo } from 'lodash-es';
import { useContext, useEffect } from 'react';
import { loadProduct } from './products-api';
import { ProductsContext, productLoadedAction, selectProduct } from './products-context';

export const useProduct = (productUri: ResourceUri) => {
    const { state, dispatch } = useContext(ProductsContext);

    const product = selectProduct(productUri)(state);

    useEffect(() => {
        if (isUndefined(product)) {
            loadProduct(productUri)
                .then(p => dispatch(productLoadedAction(p)))
        }
    }, [productUri, product]);

    return defaultTo(product, null);
}
