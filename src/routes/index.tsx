import React from 'react';
import { Route, Switch } from 'react-router-dom';
import CartPage from '../pages/CartPage';
import Games from '../pages/Games';
import Home from '../pages/Home';
import ProductPage from '../pages/ProductPage';

const Routes: React.FC = () => {
    return (
        <Switch>
            <Route component={Home} path='/' exact />
            <Route component={Home} path='/collections' />
            <Route component={ProductPage} path='/product/:product' />
            <Route component={CartPage} path='/cart' />
            <Route component={Games} path='/games' />
        </Switch>
    )
}

export default Routes;