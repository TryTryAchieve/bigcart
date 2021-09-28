import React from 'react'
import Product from './pages/Product'
import Home from './pages/Home'
import ProductList from './pages/ProductList'
import Cart from './pages/Cart'
import {Switch,Route} from 'react-router-dom'

const App = () => {
    return (
        <>
        <Switch>
            <Route exact path="/list">
                <ProductList/>
            </Route>
            <Route exact path="/product">
                <Product/>
            </Route>
            <Route exact path="/cart">
                <Cart/>
            </Route>
            <Route exact path="">
                <Home/>
            </Route>

        </Switch>
        </>
    )
}

export default App
