import { useEffect, useState, useContext } from 'react';
import { searchProducts } from './products-api';
import { useSelector, useDispatch } from 'react-redux';
import { selectSearchResults } from './products-selectors';
import { searchProductsAction } from './products-slice';

export const useSearchResults = (queryString: string | null) => {

    const searchResults = useSelector(selectSearchResults);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(searchProductsAction(queryString))
    }, [queryString]);

    return searchResults;
};


