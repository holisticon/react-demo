import { ShoppingCart, QuantityUpdate, ShoppingCartItem, AdditionToShoppingCart } from '../domain/shopping-cart';
import { Resource, getUri } from '@ngxp/resource';

export async function loadShoppingCart(): Promise<Resource<ShoppingCart>> {
    return fetch(`https://example.hypercontract.org/shoppingCart`)
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
    return fetch('https://example.hypercontract.org/shoppingCart/items', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(additionToShoppingCart)
    }).then(r => r.json());
}
