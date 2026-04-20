import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
import {NavDir} from "./NavDir";

export const Navbar = () => {
  const [cartCount, setCartCount] = useState(0);
  const [wishlistCount] = useState(0);
  const navigate = useNavigate();
  const alertu = () => {
  const value = localStorage.getItem("user"); // use string key

  if (value) {
    alert("User already exists here");
  } else {
    navigate("/signin");
  }
};

  // Function to calculate items in cart
  const calculateCartCount = () => {
    let count = 0;
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      try {
        const parsed = JSON.parse(localStorage.getItem(key));
        // Check if it's a valid cart item and not saved for later
        if (parsed &&parsed.title && !parsed.saved) {
          // Use `count += parsed.quantity` if you want the total sum of all items
          // Use `count += 1` if you just want the number of unique products
          count += 1;
          // count += parsed.quantity; 
        }
      } catch {
        // Skip keys that aren't valid JSON
      }
    }
    setCartCount(count);
  };

  useEffect(() => {
    // 1. Calculate on initial load
    calculateCartCount();

    // 2. Listen for changes from other components
    window.addEventListener("cartUpdated", calculateCartCount);

    // 3. Cleanup listener on unmount
    return () => {
      window.removeEventListener("cartUpdated", calculateCartCount);
    };
  }, []);

  return (<>
    <header className="navbar">
      {/* LEFT - Call Section */}
      <div className="navbar__left">
        <div className="navbar__call-icon">
          <i className="fa-solid fa-headset"></i>
        </div>
        <div className="navbar__call-text">
          <span className="navbar__call-label">CALL US</span>
          <span className="navbar__call-number">+91 6303875815</span>
        </div>
      </div>

      {/* CENTER - Logo */}
      <div className="navbar__center">
        <Link to="/" className="navbar__logo"> KatukuriXpress</Link>
      </div>

      {/* RIGHT - Icons */}
      <div className="navbar__right">
        {/* <button className="navbar__icon-btn" aria-label="Search">
          <i className="fa-solid fa-magnifying-glass"></i>
        </button> */}

        <button className="navbar__icon-btn" aria-label="Account" onClick={alertu}>
          <i className="fa-regular fa-user"></i>
        </button>

        <button className="navbar__icon-btn navbar__icon-btn--badge" aria-label="Wishlist">
          <i className="fa-regular fa-heart"></i>
          <span className="navbar__badge navbar__badge--red">{wishlistCount}</span>
        </button>

        <button className="navbar__icon-btn navbar__icon-btn--cart" aria-label="Cart" onClick={() => navigate("/cart")}>
          <span className="navbar__cart-icon-wrap">
            <i className="fa-solid fa-basket-shopping"></i>
            {/* Only show the badge if there are items in the cart */}
            {cartCount > 0 && (
              <span className="navbar__badge navbar__badge--red">{cartCount}</span>
            )}
          </span>
        </button>
      </div>
  
    </header>
    <NavDir />
    </>
  );
};