import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SellProducts from './components/SellProducts';
import BuyProducts from './components/BuyProducts';
import Cart from './components/Cart';
import Navbar from './components/Navbar';

const App = () => {
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route path="/sell" component={SellProducts} />
                <Route path="/buy" component={BuyProducts} />
                <Route path="/cart" component={Cart} />
                <Route path="/" exact component={Home} />
            </Switch>
        </Router>
    );
};

const Home = () => (
    <div>
        <h1>Welcome to our E-commerce Site</h1>
    </div>
);

export default App;
