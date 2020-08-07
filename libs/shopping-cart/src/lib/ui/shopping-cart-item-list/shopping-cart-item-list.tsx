import React from 'react';
import { ShoppingCart, QuantityUpdate, ShoppingCartItem } from '../../domain/shopping-cart';
import { ResourceWith } from '@ngxp/resource';
import { isNull } from 'lodash-es';
import ShoppingCartItemRow from '../shopping-cart-item-row/shopping-cart-item-row';

/* eslint-disable-next-line */
export interface ShoppingCartItemListProps {
    shoppingCart: ShoppingCart | null,
    onUpdateQuantity: (quantityUpdate: ResourceWith<QuantityUpdate>) => void,
    onDelete: (shoppingCartItem: ShoppingCartItem) => void
}

export const ShoppingCartItemList = ({ shoppingCart, onUpdateQuantity, onDelete }: ShoppingCartItemListProps) => {
    return isNull(shoppingCart) ? null : (
        <table className="table table-hover">
            <thead>
                <tr>
                    <th>Item</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {shoppingCart.items.map(shoppingCartItem => (
                    <tr key={shoppingCartItem.product}>
                        <ShoppingCartItemRow shoppingCartItem={shoppingCartItem} updateQuantity={onUpdateQuantity} deleteItem={onDelete}></ShoppingCartItemRow>
                    </tr>
                ))}
            </tbody>
            <tfoot>
                <tr>
                    <td colSpan={2} className="text-right total-price">{shoppingCart.totalPrice.toFixed(2)}</td>
                    <td colSpan={2}></td>
                </tr>
            </tfoot>
        </table>
    );
};

export default ShoppingCartItemList;
