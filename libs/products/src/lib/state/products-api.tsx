import { Resource } from '@ngxp/resource';
import { isNull } from 'lodash-es';
import { Product, SearchResults } from '../domain/product';

export async function searchProducts(queryString: string | null): Promise<Resource<SearchResults>> {
    const queryParams = isNull(queryString) ? '' : `?queryString=${encodeURIComponent(queryString)}`
    return fetch(`https://webapp-demos-api.azurewebsites.net/products${queryParams}`)
        .then(r => r.json())
}

export async function loadProduct(productId: string): Promise<Resource<Product>> {
    return fetch(productId)
        .then(r => r.json());
}
