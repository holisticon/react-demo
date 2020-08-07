import { useSelector, useDispatch } from 'react-redux'
import { selectOrderHistory } from './orders-selectors'
import { useEffect } from 'react';
import { isNull } from 'lodash-es';
import { loadOrderHistoryAction } from './orders-slice';

export const useOrderHistory = () => {
    const orderHistory = useSelector(selectOrderHistory);

    const dispatch = useDispatch();

    useEffect(() => {
        if (isNull(orderHistory)) {
            dispatch(loadOrderHistoryAction())
        }
    }, []);

    return orderHistory;
}
