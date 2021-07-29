import { ResourceWith } from '@holisticon/resource';
import React from 'react';
import { useDispatch } from 'react-redux';
import { QuantityUpdate, ShoppingCartItem } from '../domain/shopping-cart';
import { deleteShoppingCartItemAction, updateShoppingCartItemQuantityAction } from '../state/shopping-cart-slice';
import { useShoppingCart } from '../state/use-shopping-cart-hook';
import ShoppingCartItemList from '../ui/shopping-cart-item-list/shopping-cart-item-list';
import { isNull, isEmpty } from 'lodash-es';
import { PlaceOrderForm } from '@holisticon/orders';

/* eslint-disable-next-line */
export interface ShoppingCartProps {}

export const ShoppingCart = (props: ShoppingCartProps) => {

  const shoppingCart = useShoppingCart();
  const dispatch = useDispatch();

  const onUpdateQuantity = (quantityUpdate: ResourceWith<QuantityUpdate>) => {
      dispatch(updateShoppingCartItemQuantityAction(quantityUpdate));
  };
  const onDelete = (shoppingCartItem: ShoppingCartItem) => {
      dispatch(deleteShoppingCartItemAction(shoppingCartItem));
  };

  return (<>
    <h1 className="mb-5">Shopping Cart</h1>

    <ShoppingCartItemList
        shoppingCart={shoppingCart}
        onUpdateQuantity={onUpdateQuantity}
        onDelete={onDelete}
    ></ShoppingCartItemList>

    {isNull(shoppingCart) || isEmpty(shoppingCart.items) ? null : <PlaceOrderForm orderItems={shoppingCart.items} ></PlaceOrderForm>}
  </>);
};

export default ShoppingCart;
