import React from 'react';
import CartItem from './CartItem';

const ShoppingCart = ({ cartItems, onRemoveFromCart }) => {
  return (
    <div>
      <h2>Shopping Cart</h2>
      <ul className="list-group">
        {cartItems.map((item) => (
          <CartItem key={item.id} item={item} onRemoveFromCart={onRemoveFromCart} />
        ))}
      </ul>
    </div>
  );
};

export default ShoppingCart;