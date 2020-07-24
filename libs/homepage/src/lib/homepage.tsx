import React, { lazy} from 'react';
import {Link} from 'react-router-dom';

const ProductSearchForm = lazy(() => import('@ngxp/products').then(m => ({ default: m.ProductSearchForm })));

/* eslint-disable-next-line */
export interface HomepageProps {
    onSearch: (queryString: string) => void;
}

export const Homepage = ({ onSearch }: HomepageProps) => {
  return <>
    <h1 className="mb-5">Welcome</h1>

    <ProductSearchForm onSearch={onSearch} />

    <ul className="row nav flex-column mt-5">
        <li className="nav-item">
            <Link className="nav-link" to='shopping-cart'>Shopping Cart</Link>
        </li>
        <li className="nav-item">
            <Link className="nav-link" to='user-profile'>User Profile</Link>
        </li>
        <li className="nav-item">
            <Link className="nav-link" to='orders'>Orders</Link>
        </li>
    </ul>
  </>
};

export default Homepage;
