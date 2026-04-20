import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Loader } from "./Loader";
import "./SpecificCard.css";
import { SpecificCardSkeleton } from "../features/products/SpecificCardSkeleton";

import { AllProducts } from "../pages/AllProducts";

export const SpecificCard = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState(0);
  const [loader, setLoader] = useState(true);
  const [cartMessage, setCartMessage] = useState("");

  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products/${id}`)
      .then((response) => {
        setProduct(response.data);
        setSelectedImage(0);
        setLoader(false);
      })
      .catch((error) => {
        console.error("Error fetching product:", error);
        setLoader(false);
      });
  }, [id]);

  const handleAddToCart = () => {
    if (!product) return;

    const cartItem = {
      id: product.id,
      title: product.title,
      brand: product.brand || "N/A",
      price: product.price,
      discountPercentage: product.discountPercentage,
      thumbnail: product.thumbnail,
      rating: product.rating,
      quantity: 1,
      addedAt: new Date().toISOString(),
    };

    const storageKey = product.title;
    const existing = localStorage.getItem(storageKey);

    if (existing) {
      const parsedItem = JSON.parse(existing);
      parsedItem.quantity += 1;
      localStorage.setItem(storageKey, JSON.stringify(parsedItem));
      setCartMessage(`"${product.title}" quantity updated in cart!`);
    } else {
      localStorage.setItem(storageKey, JSON.stringify(cartItem));
      setCartMessage(`"${product.title}" added to cart!`);
    }
    // i want t o create custom event 
   // 1. Define the event with a specific name
const cartUpdateEvent = new CustomEvent("cartUpdated");

// 2. Dispatch (fire) the event on the global window object
// Announce it on the global webpage here
window.dispatchEvent(cartUpdateEvent);

    setTimeout(() => setCartMessage(""), 2000);
  };

  if (loader) return <SpecificCardSkeleton />;

  const originalPrice =
    product.price && product.discountPercentage
      ? (product.price / (1 - product.discountPercentage / 100)).toFixed(2)
      : product.price;

  const reviewCount = product.reviews?.length || 0;

  return (
    <>
   
      <Link to="/">back
      </Link>

      <div className="specific-card-page">
        <div className="product-container">

          {/* LEFT - IMAGES */}
          <div className="image-section">
            {/* Thumbnails */}
            <div className="thumbnail-list">
              {product.images?.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt=""
                  onClick={() => setSelectedImage(i)}
                  className={`thumbnail-img ${selectedImage === i ? "active" : ""}`}
                />
              ))}
            </div>

            {/* Main Image */}
            <div className="main-image-wrapper">
              <img
                src={product.images?.[selectedImage] || product.thumbnail}
                alt=""
                className="main-image"
              />
            </div>
          </div>

          {/* RIGHT - DETAILS */}
          <div className="details-section">

            <h1 className="product-title">{product.title}</h1>

            <p className="product-brand">Brand: {product.brand || "N/A"}</p>

            {/* Rating */}
            <div className="rating-row">
              <div className="stars">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i}>
                    {i < Math.round(product.rating) ? "★" : "☆"}
                  </span>
                ))}
              </div>
              <span className="rating-text">
                {product.rating} ({reviewCount} reviews)
              </span>
            </div>

            {/* Price */}
            <div className="price-row">
              {product.discountPercentage > 0 && (
                <span className="original-price">₹{originalPrice}</span>
              )}
              <span className="discounted-price">₹{product.price}</span>
              <span className="discount-badge">
                {product.discountPercentage}% OFF
              </span>
            </div>

            <p className="tax-note">Inclusive of all taxes</p>

            {/* Offer */}
            <div className="offer-box">
              <p className="flex justify-center align-middle text-[white] text-bold">Free gift on orders above ₹599</p>
            </div>

            {/* Button */}
            <button onClick={handleAddToCart} className="add-to-cart-btn">
              Add to Bag
            </button>

            {/* Message */}
            {cartMessage && (
              <div className="cart-message">{cartMessage}</div>
            )}

            {/* Delivery */}
            <div className="delivery-section">
              <p>Delivery</p>
              <div className="pincode-row">
                <input
                  type="text"
                  placeholder="Enter pincode"
                  className="pincode-input"
                />
                <button className="check-btn">Check</button>
              </div>
            </div>

            {/* Extra */}
            <div className="extra-info">
              <span className="extra-info-returns">Genuine Product</span>
              <span className=" extra-info-returns"> Easy Returns</span>
            </div>
          </div>
        </div>

        {/* REVIEWS */}
        {reviewCount > 0 && (
          <div className="reviews-section">
            <h2>Customer Reviews</h2>
            <div className="reviews-grid">
              {product.reviews.map((rev, i) => (
                <div key={i} className="review-card">
                  <div className="review-header">
                    <p className="reviewer-name">{rev.reviewerName}</p>
                    <span className="review-stars">
                      {"★".repeat(rev.rating)}
                    </span>
                  </div>
                  <p className="review-comment">"{rev.comment}"</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      <AllProducts />
    </>
  );
};