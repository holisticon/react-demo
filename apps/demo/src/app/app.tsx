import React, { lazy, Suspense, FunctionComponent } from 'react';
import Navbar from './navbar/navbar';
import { BrowserRouter as Router, Switch, Route, useLocation, useHistory, } from 'react-router-dom';

const Homepage = lazy(() => import('@holisticon/homepage'));
const Products = lazy(() => import('@holisticon/products').then(m => ({ default: m.Products })));
const ShoppingCart = lazy(() => import('@holisticon/shopping-cart'));
const Orders = lazy(() => import('@holisticon/orders'));
const UserProfile = lazy(() => import('@holisticon/user-profile'));

export const App = () => <Router><Main /></Router>;

export const Main = () => {

    const history = useHistory();

    const handleSearch = (queryString: string) => {
        history.push(`/products?queryString=${queryString}`);
    };

    return <>
        <Navbar />

        <main className="container">
            <Suspense fallback={<div>Loading...</div>}>
                <Switch>
                    <Route exact path="/">
                        <Homepage onSearch={handleSearch}></Homepage>
                    </Route>
                    <Route path="/products" component={Products} />
                    <Route path="/shopping-cart" component={ShoppingCart} />
                    <Route path="/orders" component={Orders} />
                    <Route path="/user-profile" component={UserProfile} />
                </Switch>
            </Suspense>
        </main>
    </>
};

export default App;
