import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./CartPage.css";

export const CartParent = () => {
  const [cartItems, setCartItems] = useState([]);
  const FEES = 7;

  // ── Load all cart items from localStorage ──────────────────────────
  useEffect(() => {
    const items = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      try {
        const parsed = JSON.parse(localStorage.getItem(key));
        // Only pick objects that look like our cart items
        if (parsed && parsed.id && parsed.title && parsed.price) {
          items.push(parsed);
        }
      } catch {
        // skip non-JSON keys
      }
    }
    setCartItems(items);
  }, []);


  const updateQty = (title, delta) => {
    setCartItems((prev) =>
      prev.map((item) => {
        if (item.title !== title) return item;
        const newQty = Math.max(1, item.quantity + delta);
        const updated = { ...item, quantity: newQty };
        localStorage.setItem(title, JSON.stringify(updated));
        return updated;
      })
    );
  };

  const removeItem = (title) => {
    localStorage.removeItem(title);
    setCartItems((prev) => prev.filter((item) => item.title !== title));
  };

  const saveForLater = (title) => {
    // Move item to a "savedForLater" key
    const item = cartItems.find((i) => i.title === title);
    if (item) {
      localStorage.setItem(`saved__${title}`, JSON.stringify({ ...item, saved: true }));
      removeItem(title);
    }
  };

  // ── Price Calculations ─────────────────────────────────────────────
  const totalMRP = cartItems.reduce((sum, item) => {
    const original = item.discountPercentage
      ? parseFloat((item.price / (1 - item.discountPercentage / 100)).toFixed(2))
      : item.price;
    return sum + original * item.quantity;
  }, 0);

  const totalDiscount = cartItems.reduce((sum, item) => {
    const original = item.discountPercentage
      ? parseFloat((item.price / (1 - item.discountPercentage / 100)).toFixed(2))
      : item.price;
    const discounted = item.price * item.quantity;
    return sum + (original * item.quantity - discounted);
  }, 0);

  const totalAmount = totalMRP - totalDiscount + FEES;

  const renderStars = (rating) =>
    Array.from({ length: 5 }).map((_, i) => (
      <span key={i} className={i < Math.round(rating) ? "cp__star cp__star--on" : "cp__star"}>
        ★
      </span>
    ));

  // ── Empty State ────────────────────────────────────────────────────
  if (cartItems.length === 0) {
    return (
      <div className="cp__empty">
        <i className="fa-solid fa-cart-shopping cp__empty-icon"></i>
        <h2>Your cart is empty!</h2>
        <p>Add items to it now.</p>
        <a href="/" className="cp__shop-btn">Shop Now</a>
      </div>
    );
  }

  return (
    <> <Link to ="/">home </Link>
    <div className="cp__page">
      {/* ── LEFT COLUMN ── */}
      <div className="cp__left">
        {/* Delivery row */}
        <div className="cp__delivery-row">
          <span className="cp__delivery-label">
            <i className="fa-solid fa-location-dot"></i> From Saved Addresses
          </span>
          <button className="cp__pincode-btn">Enter Delivery Pincode</button>
        </div>

        {/* Cart Items */}
        {cartItems.map((item) => {
          const originalPrice = item.discountPercentage
            ? (item.price / (1 - item.discountPercentage / 100)).toFixed(0)
            : null;
          const discountPct = item.discountPercentage
            ? Math.round(item.discountPercentage)
            : null;

          return (
            
            <div className="cp__card" key={item.title}>
              {/* Hot Deal badge */}
              <div className="cp__hot-deal">
                <i className="fa-solid fa-bolt"></i> Hot Deal
              </div>

              {/* Item body */}
              <div className="cp__item-body">
                {/* Thumbnail */}
                <div className="cp__thumb-wrap">
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="cp__thumb"
                  />
                </div>

                {/* Details */}
                <div className="cp__item-details">
                  <h3 className="cp__item-title">{item.title}</h3>
                  {item.brand && (
                    <p className="cp__item-brand">Brand: {item.brand}</p>
                  )}

                  {/* Rating */}
                  <div className="cp__rating-row">
                    <div className="cp__stars">{renderStars(item.rating)}</div>
                    <span className="cp__rating-val">{item.rating}</span>
                    <span className="cp__assured">
                      <i className="fa-solid fa-shield-halved"></i> Assured
                    </span>
                  </div>

                  {/* Qty + Price */}
                  <div className="cp__price-row">
                    {/* Qty selector */}
                    <div className="cp__qty-wrap">
                      <span className="cp__qty-label">Qty:</span>
                      <div className="cp__qty-ctrl">
                        <button
                          className="cp__qty-btn"
                          onClick={() => updateQty(item.title, -1)}
                        >
                          −
                        </button>
                        <span className="cp__qty-val">{item.quantity}</span>
                        <button
                          className="cp__qty-btn"
                          onClick={() => updateQty(item.title, 1)}
                        >
                          +
                        </button>
                      </div>
                    </div>

                    {/* Prices */}
                    <div className="cp__prices">
                      {discountPct && (
                        <span className="cp__discount-pct">
                          <i className="fa-solid fa-arrow-down"></i> {discountPct}%
                        </span>
                      )}
                      {originalPrice && (
                        <span className="cp__original-price">₹{originalPrice}</span>
                      )}
                      <span className="cp__final-price">₹{item.price}</span>
                    </div>
                  </div>

                  {/* Delivery info */}
                  <p className="cp__delivery-info">
                    <i className="fa-regular fa-clock"></i> Delivery by Apr 22, Wed
                  </p>
                </div>
              </div>

              {/* Actions */}
              <div className="cp__actions">
                <button
                  className="cp__action-btn"
                  onClick={() => saveForLater(item.title)}
                >
                  <i className="fa-regular fa-bookmark"></i> Save for later
                </button>
                <button
                  className="cp__action-btn"
                  onClick={() => removeItem(item.title)}
                >
                  <i className="fa-regular fa-trash-can"></i> Remove
                </button>
                
              </div>
            </div>
          );
        })}
      </div>

      {/* ── RIGHT COLUMN — Price Summary ── */}
      <div className="cp__right">
        <h2 className="cp__summary-title">PRICE DETAILS</h2>
        <div className="cp__summary-divider" />

        <div className="cp__summary-row">
          <span>MRP.</span>
          <span>₹{Math.round(totalMRP).toLocaleString()}</span>
        </div>
        <div className="cp__summary-row">
          <span>
            Fees{" "}
            <i className="fa-solid fa-chevron-down cp__chevron"></i>
          </span>
          <span>₹{FEES}</span>
        </div>
        <div className="cp__summary-row cp__summary-row--discount">
          <span>
            Discounts{" "}
            <i className="fa-solid fa-chevron-down cp__chevron"></i>
          </span>
          <span>- ₹{Math.round(totalDiscount).toLocaleString()}</span>
        </div>

        <div className="cp__summary-divider" />

        <div className="cp__summary-row cp__summary-row--total">
          <span>Total Amount</span>
          <span>₹{Math.round(totalAmount).toLocaleString()}</span>
        </div>

        <div className="cp__summary-divider" />

        <div className="cp__savings-banner">
          You will save ₹{Math.round(totalDiscount).toLocaleString()} on this order
        </div>

        {/* Security note */}
        <div className="cp__secure-note">
          <i className="fa-solid fa-shield-halved cp__shield-icon"></i>
          <p>Safe and secure payments. Easy returns. 100% Authentic products.</p>
        </div>

        {/* Place order sticky footer */}
        <div className="cp__place-order-bar">
          <div className="cp__place-order-prices">
            <span className="cp__place-mrp">
              {Math.round(totalMRP).toLocaleString()}
            </span>
            <span className="cp__place-total">
              ₹{Math.round(totalAmount).toLocaleString()}
            </span>
          </div>
          <button className="cp__place-order-btn">Place order</button>
        </div>
      </div>
    </div>
    </>
  );
};