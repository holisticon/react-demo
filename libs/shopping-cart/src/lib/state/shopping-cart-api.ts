import { getUri, Resource } from '@ngxp/resource';
import { AdditionToShoppingCart, QuantityUpdate, ShoppingCart, ShoppingCartItem } from '../domain/shopping-cart';

export async function loadShoppingCart(): Promise<Resource<ShoppingCart>> {
    return fetch(`https://webapp-demos-api.azurewebsites.net/shoppingCart`)
        .then(r => r.json())
}

export async function updateShoppingCartItemQuantity(shoppingCartItem: ShoppingCartItem, quantityUpdate: QuantityUpdate): Promise<Resource<ShoppingCart>> {
    return fetch(getUri(shoppingCartItem), {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(quantityUpdate)
    }).then(r => r.json());
}

export async function deleteShoppingCartItem(shoppingCartItem: ShoppingCartItem): Promise<Resource<ShoppingCart>> {
    return fetch(getUri(shoppingCartItem), {
        method: 'DELETE',
    }).then(r => r.json());
}

export async function addToShoppingCart(additionToShoppingCart: AdditionToShoppingCart): Promise<Resource<ShoppingCart>> {
    return fetch('https://webapp-demos-api.azurewebsites.net/shoppingCart/items', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(additionToShoppingCart)
    }).then(r => r.json());
}
