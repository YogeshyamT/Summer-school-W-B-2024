import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const Cart = () => {
    const { cart } = useContext(CartContext);

    return (
        <div>
            <h1>Cart</h1>
            {cart.length === 0 ? (
                <p>Your cart is empty</p>
            ) : (
                <ul>
                    {cart.map((product, index) => (
                        <li key={index}>{product.name} - ${product.price}</li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Cart;
