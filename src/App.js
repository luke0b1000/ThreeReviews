import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { Header } from './template/Header';
import Laptop from './categories/laptops/';
import Phones from './categories/phones/';
import Browsers from './categories/browsers/';
import Coronavirus from './coronavirus/';
import About from './About';

function App() {
    return (
        <BrowserRouter>
            <Header />
            <Switch>
                <Route path="/laptops">
                    <Laptop />
                </Route>
                <Route path="/phones">
                    <Phones />
                </Route>
                <Route path="/browsers">
                    <Browsers />
                </Route>
                <Route path="/coronavirus">
                    <Coronavirus />
                </Route>
                <Route path="/about">
                    <About />
                </Route>
                <Route>
                    <Laptop />
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default App;
