import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";

// Make sure Font Awesome is installed:
// npm install @fortawesome/fontawesome-free
// Then import in your index.js or main.jsx:
// import "@fortawesome/fontawesome-free/css/all.min.css";

export const Navbar = () => {
  const [cartCount] = useState(0);
  const [wishlistCount] = useState(0);
  const navigate= useNavigate();

  return (
    <header className="navbar">

      {/* LEFT - Call Section */}
      <div className="navbar__left">
        <div className="navbar__call-icon">
          <i className="fa-solid fa-headset"></i>
        </div>
        <div className="navbar__call-text">
          <span className="navbar__call-label">CALL US'</span>
          <span className="navbar__call-number">+91 6303875815</span>
        </div>
      </div>

      {/* CENTER - Logo */}
      <div className="navbar__center">
        {/* <a href="/" >
       
        </a> */}
        <Link to="/" className="navbar__logo"> KatukuriXpress</Link>
      </div>

      {/* RIGHT - Icons */}
      <div className="navbar__right">

        {/* Search */}
        <button className="navbar__icon-btn" aria-label="Search">
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>

        {/* User / Account */}
        <button className="navbar__icon-btn" aria-label="Account">
          <i className="fa-regular fa-user"></i>
        </button>

        {/* Wishlist */}
        <button className="navbar__icon-btn navbar__icon-btn--badge" aria-label="Wishlist">
          <i className="fa-regular fa-heart"></i>
          <span className="navbar__badge navbar__badge--red">{wishlistCount}</span>
        </button>

        {/* Cart */}
        <button className="navbar__icon-btn navbar__icon-btn--cart"  aria-label="Cart"onClick={() => navigate("/cart")}>
          <span className="navbar__cart-icon-wrap">
            <i className="fa-solid fa-basket-shopping"></i>
            <span className="navbar__badge navbar__badge--red">{cartCount}</span>
          </span>
          {/* <span className="navbar__cart-price"></span> */}
        </button>

      </div>
    </header>
  );
};