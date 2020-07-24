import { Product, SearchResults } from '../domain/product';
import { Resource } from '@ngxp/resource';

export async function searchProducts(queryString?: string): Promise<Resource<SearchResults>> {
    const queryParams = queryString ? '' : `?queryString=${encodeURIComponent(queryString)}`
    return fetch(`https://example.hypercontract.org/products${queryParams}`)
        .then(r => r.json())
}



export async function loadProduct(productId: string): Promise<Resource<Product>> {
    return fetch(productId)
        .then(r => r.json());
}
