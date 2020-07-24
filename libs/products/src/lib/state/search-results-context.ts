import React from 'react';
import { SearchResults, Product } from '../domain/product';
import { Resource } from '@ngxp/resource';

export const SearchResultsContext = React.createContext<SearchResults | null>(null);

export const ProductContext = React.createContext<Resource<Product> | null>(null);
