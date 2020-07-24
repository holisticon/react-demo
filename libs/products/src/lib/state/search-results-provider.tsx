import React, { ComponentType, useEffect, useState, useContext } from 'react';
import { SearchResults, Product } from '../domain/product';
import { searchProducts, loadProduct } from './products-api';
import { SearchResultsContext, ProductContext } from './search-results-context';
import { Resource } from '@ngxp/resource';
import { useLocation, useParams } from 'react-router-dom';

export const provideSearchResults = (WrappedComponent: ComponentType) => () => {

    const [searchResults, setSearchResults] = useState<SearchResults | null>(null);

    const query = new URLSearchParams(useLocation().search);

    useEffect(() => {
        searchProducts(query.get('queryString'))
            .then(setSearchResults)

        console.log('fetching');
    }, []);

    return <SearchResultsContext.Provider value={searchResults}>
        <WrappedComponent />
    </SearchResultsContext.Provider>
}


export const provideProduct = (WrappedComponent: ComponentType) => () => {

    const searchResults = useContext(SearchResultsContext);
    const [product, setProduct] = useState<Resource<Product>>();

    const { productId } = useParams()

    useEffect(() => {
        const existingProduct = searchResults?.products.find(p => p._id === productId);
        if (existingProduct) {
            debugger;
            setProduct(existingProduct);
        } else {
            loadProduct(productId)
        }
    }, []);

    return (
        <ProductContext.Provider value={product}>
            <WrappedComponent />
        </ProductContext.Provider>
    )
}
