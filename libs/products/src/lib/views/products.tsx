import React from 'react';
import { Route, Switch } from 'react-router';
import { useRouteMatch, useLocation, Link, useParams } from 'react-router-dom';
import SearchResults from './search-results/search-results';
import ProductDetails from './product-details/product-details';
import { provideSearchResults, provideProduct } from '../state/search-results-provider';

/* eslint-disable-next-line */
export interface ProductsProps { }

export const Products = (props: ProductsProps) => {

    const match = useRouteMatch()

    return (
        <Switch>
            <Route exact path={`${match.url}/`} component={SearchResults} />
            <Route path={`${match.url}/:productId`} component={ProductDetails} />
        </Switch>
    )
};

export default Products;
