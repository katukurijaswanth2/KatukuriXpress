import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Loader } from "./Loader";

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

  // ✅ Add to Cart Handler
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

    // Use product title as the key
    const storageKey = product.title;

    // Check if already in cart
    const existing = localStorage.getItem(storageKey);

    if (existing) {
      // If already exists, increment quantity
      const parsedItem = JSON.parse(existing);
      parsedItem.quantity += 1;
      localStorage.setItem(storageKey, JSON.stringify(parsedItem));
      setCartMessage(`"${product.title}" quantity updated in cart!`);
    } else {
      // Save new item with product title as key
      localStorage.setItem(storageKey, JSON.stringify(cartItem));
      setCartMessage(`"${product.title}" added to cart!`);
    }

    // Clear message after 2 seconds
    setTimeout(() => setCartMessage(""), 2000);
  };

  if (loader) return <Loader />;

  const originalPrice =
    product.price && product.discountPercentage
      ? (product.price / (1 - product.discountPercentage / 100)).toFixed(2)
      : product.price;

  const reviewCount = product.reviews?.length || 0;

  return (
    <>
    <Link to='/'>back</Link>
  <div className="bg-gray-100 min-h-screen py-8">
    <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-lg p-6 grid md:grid-cols-2 gap-10">

      {/* LEFT - IMAGES */}
      <div className="flex gap-4">
        {/* Thumbnails */}
        <div className="flex flex-col gap-3">
          {product.images?.map((img, i) => (
            <img
              key={i}
              src={img}
              alt=""
              onClick={() => setSelectedImage(i)}
              className={`w-16 h-16 object-cover rounded-md cursor-pointer border transition ${
                selectedImage === i
                  ? "border-pink-600"
                  : "border-gray-200 hover:border-pink-400"
              }`}
            />
          ))}
        </div>

        {/* Main Image */}
        <div className="flex-1 bg-gray-50 rounded-lg flex items-center justify-center p-4">
          <img
            src={product.images?.[selectedImage] || product.thumbnail}
            alt=""
            className="h-[350px] object-contain hover:scale-105 transition duration-300"
          />
        </div>
      </div>

      {/* RIGHT - DETAILS */}
      <div className="flex flex-col gap-4">

        <h1 className="text-2xl font-bold text-gray-800">
          {product.title}
        </h1>

        <p className="text-sm text-gray-500">
          Brand: {product.brand || "N/A"}
        </p>

        {/* Rating */}
        <div className="flex items-center gap-2">
          <div className="flex text-yellow-500">
            {Array.from({ length: 5 }).map((_, i) => (
              <span key={i}>
                {i < Math.round(product.rating) ? "★" : "☆"}
              </span>
            ))}
          </div>
          <span className="text-sm text-gray-600">
            {product.rating} ({reviewCount} reviews)
          </span>
        </div>

        {/* Price */}
        <div className="flex items-center gap-3">
          {product.discountPercentage > 0 && (
            <span className="line-through text-gray-400 text-lg">
              ₹{originalPrice}
            </span>
          )}
          <span className="text-3xl font-bold text-black">
            ₹{product.price}
          </span>
          <span className="text-green-600 font-semibold text-sm">
            {product.discountPercentage}% OFF
          </span>
        </div>

        <p className="text-sm text-gray-500">Inclusive of all taxes</p>

        {/* Offer */}
        <div className="bg-pink-50 border border-pink-200 p-4 rounded-md">
          <p className="text-sm text-pink-700">
            🎁 Free gift on orders above ₹599
          </p>
        </div>

        {/* BUTTON */}
        <button
          onClick={handleAddToCart}
          className="bg-pink-600 text-white py-3 rounded-md font-semibold hover:bg-pink-700 transition shadow-md"
        >
          Add to Bag
        </button>

        {/* MESSAGE */}
        {cartMessage && (
          <div className="text-green-600 bg-green-50 border border-green-200 p-2 rounded text-sm text-center">
            {cartMessage}
          </div>
        )}

        {/* DELIVERY */}
        <div className="border-t pt-4">
          <p className="font-semibold mb-2">Delivery</p>
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Enter pincode"
              className="border px-3 py-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-pink-400"
            />
            <button className="bg-gray-200 px-4 rounded hover:bg-gray-300">
              Check
            </button>
          </div>
        </div>

        {/* EXTRA */}
        <div className="flex justify-between text-sm text-gray-600 mt-3">
          <span>✔ Genuine Product</span>
          <span>↩ Easy Returns</span>
        </div>
      </div>
    </div>

    {/* REVIEWS */}
    {reviewCount > 0 && (
      <div className="max-w-6xl mx-auto mt-8 bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">Customer Reviews</h2>

        <div className="grid md:grid-cols-2 gap-4">
          {product.reviews.map((rev, i) => (
            <div key={i} className="bg-gray-50 p-4 rounded border">
              <div className="flex justify-between mb-2">
                <p className="font-medium">{rev.reviewerName}</p>
                <span className="text-yellow-500">
                  {"★".repeat(rev.rating)}
                </span>
              </div>
              <p className="text-sm text-gray-600 italic">
                "{rev.comment}"
              </p>
            </div>
          ))}
        </div>
      </div>
    )}
  </div>
</>
 
  );
};