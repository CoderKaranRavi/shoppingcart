import React from 'react';

const ProductItem = ({ product, onAddToCart }) => {
  return (
    <div className="col-lg-4 col-md-6 mb-4">
      <div className="card h-100">
        <div className="card-body">
          <h4 className="card-title">{product.name}</h4>
          <p className="card-text">{product.description}</p>
        </div>
        <div className="card-footer">
          <button onClick={() => onAddToCart(product)} className="btn btn-primary">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;