import { useEffect, useState, useContext } from 'react';
import { searchProducts } from './products-api';
import { ProductsContext, searchResultsLoadedAction, selectSearchResults } from './products-context';

export const useSearchResults = (queryString: string | null) => {
    const { state, dispatch } = useContext(ProductsContext);

    useEffect(() => {
        searchProducts(queryString)
            .then((searchResults) => dispatch(searchResultsLoadedAction(searchResults)))
    }, [queryString]);

    return selectSearchResults()(state);
};


