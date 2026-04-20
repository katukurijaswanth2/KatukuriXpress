import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./CartPage.css";
import { Navbar} from "../../components/Navbar";
import { EmptyCart } from "./EmptyCart";
import { CartList } from "./CartList";
import { PriceSummary } from "./PriceSummary";

const FEES = 7;

export const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);

  // ── Load all cart items from localStorage ──────────────────────────
  useEffect(() => {
    const items = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      try {
        const parsed = JSON.parse(localStorage.getItem(key));
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
    return sum + (original * item.quantity - item.price * item.quantity);
  }, 0);

  const totalAmount = totalMRP - totalDiscount + FEES;

  if (cartItems.length === 0) return <EmptyCart />;

  return (
    <>
      <Navbar />
      <div className="cp__page">
        <CartList
          cartItems={cartItems}
          onUpdateQty={updateQty}
          onRemove={removeItem}
          onSaveForLater={saveForLater}
        />
        <PriceSummary
          totalMRP={totalMRP}
          totalDiscount={totalDiscount}
          totalAmount={totalAmount}
          fees={FEES}
        />
      </div>
    </>
  );
};
