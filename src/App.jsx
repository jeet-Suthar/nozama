// shree Ganeshaay Namah

// importing necessary modules
import React from "react";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import MobileMenu from "./components/MobileMenu";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
function App() {

  // State to manage mobile menu
  const [menuOpen, setMenuOpen] = useState(false);

  // State to manage cart
  const [cart, setCart] = useState({});

  // Function to update cart
  const updateCart = (product, quantity) => {
    setCart((prevCart) => {
      if (quantity === 0) {
        const updatedCart = { ...prevCart };
        delete updatedCart[product.id];
        return updatedCart;
      }
      return { ...prevCart, [product.id]: { ...product, quantity } };
    });
  };

  // search query state management
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <>
      <div className="relative">
        <NavBar
          menuOpen={menuOpen}
          setMenuOpen={setMenuOpen}
          setSearchQuery={setSearchQuery}
        />
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home updateCart={updateCart} />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            {/* yaha par updateCart and searchQuery sent kiya product pe bcoz we need them all over site */}
            <Route
              path="/products"
              element={
                <Products updateCart={updateCart} searchQuery={searchQuery} />
              }
            />
            <Route
              path="/cart"
              element={<Cart cart={cart} updateCart={updateCart} />}
            />
          </Routes>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
