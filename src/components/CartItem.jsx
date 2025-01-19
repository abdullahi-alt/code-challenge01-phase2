import { FaTrashAlt, FaPlus, FaMinus } from "react-icons/fa"; // Import icons for cart actions

const CartItem = ({ item, onRemoveFromCart, onUpdateQuantity }) => {
  return (
    <div className="cart-item">
      <div className="cart-item-details">
        <h3>{item.name}</h3>
        <p>Price: ${item.price}</p>
      </div>
      <div className="cart-item-actions">
        <button
          className="quantity-control"
          onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
          disabled={item.quantity <= 1}
        >
          <FaMinus />
        </button>
        <span className="quantity">{item.quantity}</span>
        <button
          className="quantity-control"
          onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
        >
          <FaPlus />
        </button>
        <button className="remove-button" onClick={() => onRemoveFromCart(item.id)}>
          <FaTrashAlt /> Remove
        </button>
      </div>
    </div>
  );
};

export default CartItem;
