import React from 'react';
import { ShoppingCartItem, QuantityUpdate } from '../../domain/shopping-cart';
import { ResourceWith, encodeResourceUriAsRouteParam } from '@ngxp/resource';
import { Link } from 'react-router-dom';
import UpdateQuantityForm from '../update-quantity-form/update-quantity-form';

/* eslint-disable-next-line */
export interface ShoppingCartItemRowProps {
    shoppingCartItem: ShoppingCartItem,
    updateQuantity: (quantityUpdate: ResourceWith<QuantityUpdate>) => void,
    deleteItem: (shoppingCartItem: ShoppingCartItem) => void
}

export const ShoppingCartItemRow = ({ shoppingCartItem, deleteItem, updateQuantity }: ShoppingCartItemRowProps ) => {
    debugger;
    const productRouteParam = encodeResourceUriAsRouteParam(shoppingCartItem.product);
    const shoppingCartItemPrice = shoppingCartItem.price.toFixed(2);

  return (
      <>
    <td>
        <Link to={`/products/${productRouteParam}`} className="name">{ shoppingCartItem.productName }</Link>
        <br/>
        <small className="description">{ shoppingCartItem.productDescription }</small>
    </td>
    <td className="text-right price">{ shoppingCartItemPrice }</td>
    <td style={{ width: '15%' }}>
        <UpdateQuantityForm shoppingCartItem={shoppingCartItem} updateQuantity={updateQuantity}></UpdateQuantityForm>
    </td>
    <td>
        <button type="submit" className="btn btn-danger remove" onClick={() => deleteItem(shoppingCartItem)}>Remove</button>
    </td>
</>
  );
};

export default ShoppingCartItemRow;
