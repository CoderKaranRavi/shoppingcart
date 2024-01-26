import React from 'react';

const CartItem = ({ item, onRemoveFromCart }) => {
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      {item.name}
      <button onClick={() => onRemoveFromCart(item)} className="btn btn-danger btn-sm">
        Remove
      </button>
    </li>
  );
};

export default CartItem;