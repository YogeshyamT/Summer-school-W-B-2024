import React, { useState } from 'react';

const SellProducts = () => {
    const [products, setProducts] = useState([]);

    const addProduct = (e) => {
        e.preventDefault();
        const product = {
            name: e.target.name.value,
            price: e.target.price.value,
        };
        setProducts([...products, product]);
    };

    return (
        <div>
            <h1>Sell Products</h1>
            <form onSubmit={addProduct}>
                <input type="text" name="name" placeholder="Product Name" required />
                <input type="number" name="price" placeholder="Product Price" required />
                <button type="submit">Add Product</button>
            </form>
            <h2>Product List</h2>
            <ul>
                {products.map((product, index) => (
                    <li key={index}>{product.name} - ${product.price}</li>
                ))}
            </ul>
        </div>
    );
};

export default SellProducts;
