import React, { useEffect, useState, ComponentType } from 'react';
import { ProductsContext } from './products-context';
import { useLocation } from 'react-router-dom';

export const provideProducts = (WrappedComponent: ComponentType, queryString: string | null) => () => {

    const [state, setState] = useState([]);

    useEffect(() => {


        console.log('fetching');
    }, []);

    return <ProductsContext.Provider value={{ products: state }}>
        <WrappedComponent />
    </ProductsContext.Provider>
}
