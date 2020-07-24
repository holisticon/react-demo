import React from 'react';
import { Resource } from '@ngxp/resource';
import { useLocation, Link } from 'react-router-dom';
import { Product } from '../../domain/product';
import ProductList from '../../ui/product-list/product-list';
import { SearchResultsContext } from '../../state/search-results-context';
import { provideSearchResults } from '../../state/search-results-provider';

/* eslint-disable-next-line */
export interface SearchResultsProps { }

const SearchResults = (props: SearchResultsProps) => {

    return <>
        <h1 className="mb-5">Search Results</h1>
        <SearchResultsContext.Consumer>
            {searchResults => searchResults && <ProductList products={searchResults.products}></ProductList>}
        </SearchResultsContext.Consumer>
    </>;
};

export default provideSearchResults(SearchResults);
