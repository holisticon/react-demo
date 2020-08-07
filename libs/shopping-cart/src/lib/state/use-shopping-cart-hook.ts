import { isNull } from 'lodash-es';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ShoppingCart } from '../domain/shopping-cart';
import { selectShoppingCart } from './shopping-cart-selectors';
import { loadShoppingCartAction, ShoppingCartState } from './shopping-cart-slice';

export const useShoppingCart = () => {

    const shoppingCart = useSelector<{ shoppingCart: ShoppingCartState }, ShoppingCart | null>(state => selectShoppingCart(state));
    const dispatch = useDispatch();

    useEffect(() => {
        if (isNull(shoppingCart)) {
            dispatch(loadShoppingCartAction())
        }
    }, []);

    return shoppingCart;
}
