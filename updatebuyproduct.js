import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const BuyProducts = () => {
    const { addToCart } = useContext(CartContext);
    const products = [
        { name: 'Product 1', price: 100 },
        { name: 'Product 2', price: 200 },
        // Add more products as needed
    ];

    return (
        <div>
            <h1>Buy Products</h1>
            <ul>
                {products.map((product, index) => (
                    <li key={index}>
                        {product.name} - ${product.price}
                        <button onClick={() => addToCart(product)}>Add to Cart</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default BuyProducts;
