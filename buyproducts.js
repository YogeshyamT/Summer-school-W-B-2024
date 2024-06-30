import React, { useState } from 'react';

const BuyProducts = () => {
    const [products] = useState([
        { name: 'Product 1', price: 100 },
        { name: 'Product 2', price: 200 },
        // Add more products as needed
    ]);

    return (
        <div>
            <h1>Buy Products</h1>
            <ul>
                {products.map((product, index) => (
                    <li key={index}>{product.name} - ${product.price}</li>
                ))}
            </ul>
        </div>
    );
};

export default BuyProducts;
