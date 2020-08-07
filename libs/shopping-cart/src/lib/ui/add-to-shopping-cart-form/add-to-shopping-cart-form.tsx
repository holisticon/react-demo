import React, { useState, FormEvent } from 'react';
import { Resource, ResourceUri } from '@ngxp/resource';
import { useDispatch } from 'react-redux';
import { addToShoppingCartAction } from '../../state/shopping-cart-slice';

/* eslint-disable-next-line */
export interface AddToShoppingCartFormProps {
    product: ResourceUri
}

export const AddToShoppingCartForm = ({ product }: AddToShoppingCartFormProps) => {
    const dispatch = useDispatch();
    const [quantity, setQuantity] = useState(1);

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(addToShoppingCartAction({
            product,
            quantity
        }))
    };

    return (
        <form className="form-inline" onSubmit={onSubmit}>
            <div className="input-group">
                <input type="number" name="quantity" min="1" step="1" className="form-control text-right" value={quantity} onChange={(e) => setQuantity(e.target.valueAsNumber)} />
                <div className="input-group-append">
                    <button type="submit" className="btn btn-primary">Add</button>
                </div>
            </div>
        </form>
    );
};

export default AddToShoppingCartForm;
