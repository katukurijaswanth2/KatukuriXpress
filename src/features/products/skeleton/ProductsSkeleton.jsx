import React from "react";
import "./Skeleton.css";

export const ProductsSkeleton = () => {
  return (
    <div style={{ padding: "0 20px", maxWidth: "1200px", margin: "0 auto" }}>
      
      {/* 1. Mimics the Carousel */}
      <div className="skeleton-box skeleton-carousel"></div>

      {/* 2. Mimics the Features section */}
      <div className="skeleton-features">
        <div className="skeleton-box skeleton-feature-box"></div>
        <div className="skeleton-box skeleton-feature-box"></div>
        <div className="skeleton-box skeleton-feature-box"></div>
      </div>

      {/* 3. Mimics the Category Pills */}
      <div className="skeleton-filters">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="skeleton-box skeleton-filter-pill"></div>
        ))}
      </div>

      {/* 4. Mimics the Deals of the Day / Product Grid */}
      <div className="skeleton-box" style={{ width: "200px", height: "30px", marginBottom: "20px" }}></div> {/* Title */}
      
      <div className="skeleton-grid">
        {/* Render 8 fake product cards */}
        {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
          <div key={i} className="skeleton-card">
            <div className="skeleton-box skeleton-card-img"></div>
            <div className="skeleton-box" style={{ width: "80%", height: "20px" }}></div>
            <div className="skeleton-box" style={{ width: "40%", height: "20px" }}></div>
            <div className="skeleton-box" style={{ width: "100%", height: "40px", marginTop: "10px", borderRadius: "5px" }}></div>
          </div>
        ))}
      </div>
      
    </div>
  );
};