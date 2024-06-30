import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/sell">Sell Products</Link></li>
                <li><Link to="/buy">Buy Products</Link></li>
                <li><Link to="/cart">Cart</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;
