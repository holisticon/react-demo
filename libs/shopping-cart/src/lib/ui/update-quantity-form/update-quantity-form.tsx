import React, { FormEvent, useState } from 'react';
import { ShoppingCartItem, QuantityUpdate } from '../../domain/shopping-cart';
import { ResourceWith } from '@holisticon/resource';

/* eslint-disable-next-line */
export interface UpdateQuantityFormProps {
    shoppingCartItem: ShoppingCartItem,
    updateQuantity: (quantityUpdate: ResourceWith<QuantityUpdate>) => void
}

export const UpdateQuantityForm = ({ shoppingCartItem, updateQuantity }: UpdateQuantityFormProps) => {

    const [quantity, setQuantity] = useState(shoppingCartItem.quantity);

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        updateQuantity({
            resource: shoppingCartItem,
            with: {
                quantity
            }
        })
    }

    return (
        <form className="input-group update-quantity" onSubmit={onSubmit}>
            <input type="number" name="quantity" min="1" step="1" className="form-control text-right quantity" value={quantity} onChange={(e) => setQuantity(e.target.valueAsNumber)} />
            <div className="input-group-append">
                <button type="submit" className="btn btn-primary">Update</button>
            </div>
        </form>
    );
};

export default UpdateQuantityForm;
