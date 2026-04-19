import React from "react";
import "./Skeleton.css";

export const SpecificCardSkeleton = () => {
  return (
    <div className="skeleton-container">
      
      {/* LEFT - IMAGES (Mimicking your layout) */}
      <div className="skeleton-left">
        <div className="skeleton-thumbnails">
          <div className="skeleton-box skel-thumb" style={{ marginBottom: "10px" }}></div>
          <div className="skeleton-box skel-thumb" style={{ marginBottom: "10px" }}></div>
          <div className="skeleton-box skel-thumb"></div>
        </div>
        <div style={{ flex: 1 }}>
          <div className="skeleton-box skel-main-img"></div>
        </div>
      </div>

      {/* RIGHT - DETAILS (Mimicking your layout) */}
      <div className="skeleton-right">
        <div className="skeleton-box skel-title"></div>
        <div className="skeleton-box skel-brand"></div>
        
        <div className="skeleton-box skel-price"></div>
        <div className="skeleton-box skel-brand"></div>
        
        <div className="skeleton-box skel-btn"></div>
        
        {/* Mimicking the delivery area */}
        <div className="skeleton-box" style={{ width: "100%", height: "80px", marginTop: "20px" }}></div>
      </div>
      
    </div>
  );
};