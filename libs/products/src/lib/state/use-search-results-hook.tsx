import { useEffect, useState } from 'react';
import { SearchResults } from '../domain/product';
import { searchProducts } from './products-api';

export const useSearchResults = (queryString: string | null) => {
    const [searchResults, setSearchResults] = useState<SearchResults | null>(null);

    useEffect(() => {
        searchProducts(queryString)
            .then(setSearchResults)
    }, [queryString]);

    return searchResults
};
