import React, { useState } from "react";
import { FaSearch } from "react-icons/fa"; // Import search icon
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import "./App.css";

import TshirtImage from "./assets/images/T-shirt.jpg";
import JeansImage from "./assets/images/Jeans.jpg";
import SneakersImage from "./assets/images/Sneakers.jpg";
import HatImage from "./assets/images/Hat.jpg";
import SocksImage from "./assets/images/Socks.jpg";

const App = () => {
  const [products] = useState([
    { id: 1, name: "T-Shirt", price: 20, image: TshirtImage },
    { id: 2, name: "Jeans", price: 40, image: JeansImage },
    { id: 3, name: "Sneakers", price: 60, image: SneakersImage },
    { id: 4, name: "Hat", price: 15, image: HatImage },
    { id: 5, name: "Socks", price: 5, image: SocksImage },
    { id: 6, name: "T-Shirt", price: 20, image: TshirtImage },
    { id: 7, name: "Jeans", price: 40, image: JeansImage },
    { id: 8, name: "Sneakers", price: 60, image: SneakersImage },
    { id: 9, name: "Hat", price: 15, image: HatImage },
    { id: 10, name: "Socks", price: 5, image: SocksImage },
  ]);

  const [cart, setCart] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  // Handle adding products to the cart
  const handleAddToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  // Handle removing a product from the cart
  const handleRemoveFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  // Handle updating quantity of items in the cart
  const handleUpdateQuantity = (id, quantity) => {
    setCart((prevCart) =>
      prevCart.map((item) => (item.id === id ? { ...item, quantity } : item))
    );
  };

  // Handle search input
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  // Filter products based on the search term
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm)
  );

  return (
    <div className="App">
      <h1>Simple E-Commerce Cart</h1>

      {/* Search Bar */}
      <div className="search-bar">
        <FaSearch className="search-icon" />
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>

      <h3>Products</h3>

      {/* Product List */}

      <ProductList products={filteredProducts} onAddToCart={handleAddToCart} />

      {/* Cart */}
      <Cart
        cart={cart}
        onRemoveFromCart={handleRemoveFromCart}
        onUpdateQuantity={handleUpdateQuantity}
      />
    </div>
  );
};

export default App;
