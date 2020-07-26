import React from 'react';
import { NavLink } from 'react-router-dom';

/* eslint-disable-next-line */
export interface NavbarProps { }

export const Navbar = (props: NavbarProps) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary mb-5">
            <div className="container">
                <NavLink className="navbar-brand" to="/">Demo</NavLink>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/products">Catalog</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/shopping-cart">Shopping Cart</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/orders">Orders</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/user-profile">User Profile</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
