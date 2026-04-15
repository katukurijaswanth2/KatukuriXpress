import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Loader } from "./Loader";

export const  SpecificCard=()=> {
  const { id } = useParams(); // dynamic id from URL
  const [product, setProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState(0);
  const [loader, setLoader]=useState(true);


  useEffect(() => {
  
    axios.get(`https://dummyjson.com/products/${id}`)
   
      .then((response) => {
        setProduct(response.data);
        setSelectedImage(0); // Reset image index when viewing a new product
      setLoader(false);
      })
      .catch((error) => {
        console.error("Error fetching product:", error);
    setLoader(false)
      });
  }, [id]);
if(loader){
  return <Loader />
}

  // if (!product) return <div className="p-10 text-center text-red-500">Product not found.</div>;

  // Calculate original price safely
  const originalPrice = product.price && product.discountPercentage
    ? (product.price / (1 - product.discountPercentage / 100)).toFixed(2)
    : product.price;

  // Safely handle reviews length
  const reviewCount = product.reviews?.length || 0;

  return (
    <>
     <Link to="/">Contact</Link>
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-6xl mx-auto bg-white rounded-xl shadow p-6 grid md:grid-cols-2 gap-8">
        
        {/* LEFT - IMAGE SECTION */}
        <div className="flex gap-4">
          {/* Thumbnails */}
          <div className="flex flex-col gap-2">
            {product.images?.map((img, i) => (
              <img
                key={i}
                src={img}
                alt={`${product.title} thumbnail ${i + 1}`}
                onClick={() => setSelectedImage(i)}
                className={`w-16 h-16 object-cover border rounded cursor-pointer transition-colors ${
                  selectedImage === i ? "border-pink-500 border-2" : "border-gray-200 hover:border-pink-300"
                }`}
              />
            ))}
          </div>

          {/* Main Image */}
          <div className="flex-1 bg-gray-50 flex items-center justify-center rounded">
            <img
              src={product.images?.[selectedImage] || product.thumbnail}
              alt={product.title}
              className="w-full h-[400px] object-contain rounded hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>

        {/* RIGHT - DETAILS */}
        <div className="flex flex-col gap-3">
          <h1 className="text-2xl font-semibold">{product.title}</h1>

          {product.brand && (
            <p className="text-gray-500 text-sm">Brand: {product.brand}</p>
          )}

          {/* Rating */}
          <div className="flex items-center gap-2 text-sm">
            <div className="flex">
              {Array.from({ length: 5 }).map((_, i) => (
                <span key={i} className={i < Math.round(product.rating || 0) ? "text-yellow-500" : "text-gray-300"}>
                  ★
                </span>
              ))}
            </div>
            <span className="font-medium">{product.rating}</span>
            <span className="text-gray-500 ml-2">
              {(reviewCount * 50).toLocaleString()} ratings & {reviewCount} reviews
            </span>
          </div>

          {/* Price */}
          <div className="flex items-center gap-3 mt-2">
            {product.discountPercentage > 0 && (
              <span className="line-through text-gray-400">
                ₹{originalPrice}
              </span>
            )}
            <span className="text-3xl font-bold text-black">
              ₹{product.price}
            </span>
            {product.discountPercentage > 0 && (
              <span className="text-green-600 font-medium text-sm">
                {product.discountPercentage}% Off
              </span>
            )}
          </div>

          <p className="text-sm text-gray-500">inclusive of all taxes</p>

          {/* Offer Box */}
          <div className="bg-pink-50 border border-pink-100 p-3 rounded mt-2">
            <p className="text-sm text-pink-800">
              🎁 Get free gifts on orders above ₹599
            </p>
            <button className="text-pink-600 text-sm font-medium mt-1 hover:underline">
              View More Offers
            </button>
          </div>

          {/* Add to Cart */}
          <button className="bg-pink-600 text-white py-3 rounded font-semibold hover:bg-pink-700 transition-colors mt-4">
            Add to Bag
          </button>

          {/* Delivery */}
          <div className="border-t pt-4 mt-4">
            <p className="font-medium mb-2 text-gray-800">Delivery Options</p>
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Enter pincode"
                className="border px-3 py-2 rounded w-full outline-none focus:border-pink-500 transition-colors"
              />
              <button className="text-pink-600 font-medium px-4 hover:bg-pink-50 rounded transition-colors">
                Check
              </button>
            </div>
          </div>

          {/* Extra Info */}
          <div className="flex justify-between text-sm text-gray-600 mt-4 bg-gray-50 p-3 rounded">
            <span className="flex items-center gap-1">✔ 100% Genuine</span>
            <span className="flex items-center gap-1">↩ Easy Returns</span>
          </div>
        </div>
      </div>

      {/* REVIEWS SECTION */}
      {reviewCount > 0 && (
        <div className="max-w-6xl mx-auto mt-6 bg-white p-6 rounded-xl shadow">
          <h2 className="text-xl font-semibold mb-6">Customer Reviews</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {product.reviews?.map((rev, i) => (
              <div key={i} className="border border-gray-100 bg-gray-50 p-4 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <p className="font-medium text-gray-800">{rev.reviewerName}</p>
                  <p className="text-yellow-500 text-sm">
                    {"★".repeat(rev.rating)}{"☆".repeat(5 - rev.rating)}
                  </p>
                </div>
                <p className="text-gray-600 text-sm italic">"{rev.comment}"</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
    </>
  );
}