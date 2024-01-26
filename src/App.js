import React, { useState } from 'react';
import ProductItem from './ProductItem';


function App() {
  // Sample product data
  const initialProducts = [
    { id: 1, name: 'Product 1', description: 'Description 1' },
    { id: 2, name: 'Product 2', description: 'Description 2' },
    { id: 3, name: 'Product 3', description: 'Description 3' }
  ];

  const [products, setProducts] = useState(initialProducts);
  const [cartItems, setCartItems] = useState([]);

  // Function to add item to cart
  const addToCart = (product) => {
    const existingItem = cartItems.find(item => item.id === product.id);

    if (existingItem) {
      // Increase quantity if item is already in cart
      const updatedCartItems = cartItems.map(item =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCartItems(updatedCartItems);
    } else {
      // Add new item to cart
      const newCartItem = { ...product, quantity: 1 };
      setCartItems([...cartItems, newCartItem]);
    }
  };

  // Function to remove item from cart
  const removeFromCart = (product) => {
    const updatedCartItems = cartItems.map(item =>
      item.id === product.id ? { ...item, quantity: item.quantity - 1 } : item
    ).filter(item => item.quantity > 0);

    setCartItems(updatedCartItems);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-8">
          <h2>Product List</h2>
          <ProductList products={products} onAddToCart={addToCart} />
        </div>
        <div className="col-lg-4">
          <h2>Shopping Cart</h2>
          <ShoppingCart cartItems={cartItems} onRemoveFromCart={removeFromCart} />
        </div>
        <div className="col-lg-8">
          <h2>Product Item</h2>
          <ProductItem products={productsitem} onAddToCart={addToCart} />
        </div>
        <div className="col-lg-8">
          <h2>Cart Item</h2>
          <CartItem products={cartItems} onAddToCart={addToCart} />
        </div>
      </div>
    </div>
  );
}

export default App;
