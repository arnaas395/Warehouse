import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Products from './Products';
import AddProduct from './AddProduct';
import ProductDetails from './ProductDetails';
import EditProduct from './EditProduct';

const Main = () => (
    <main>
        <Switch>
            <Route exact path='/' component={Products}/>
            <Route exact path='/products/create' component={AddProduct}/>
            <Route exact path='/products/edit/:id' component={EditProduct}/>
            <Route exact path='/products/:id' component={ProductDetails}/>
        </Switch>
    </main>
)

export default Main;