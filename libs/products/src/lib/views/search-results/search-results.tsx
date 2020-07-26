import React from 'react';
import { useLocation } from 'react-router-dom';
import { isNull } from 'util';
import { useSearchResults } from '../../state/use-search-results-hook';
import ProductList from '../../ui/product-list/product-list';

/* eslint-disable-next-line */
export interface SearchResultsProps { }

export const SearchResults = (props: SearchResultsProps) => {
    const searchParams = new URLSearchParams(useLocation().search);
    const searchResults = useSearchResults(searchParams.get('queryString'));

    return <>
        <h1 className="mb-5">Search Results</h1>
        {isNull(searchResults) ? null : <ProductList products={searchResults.products}></ProductList>}
    </>;
};

export default SearchResults;
