import { FaCartPlus } from "react-icons/fa"; // Add to Cart Icon

const ProductItem = ({ product, onAddToCart }) => {
  return (
    <div className="product-item">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>Price: ${product.price}</p>
      <button onClick={() => onAddToCart(product)}>
        <FaCartPlus /> Add to Cart
      </button>
    </div>
  );
};

export default ProductItem;
