import { useState, useEffect } from "react";
import "./Carousel.css";

const slides = [
  {
    id: 1,
    badge: "Top Rated",
    title: "Premium Beauty\n& Skincare Products",
    subtitle: "Explore our beauty collection",
    bgColor: "#fdf4f0",
    image: "https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/1.png",
  },
  {
    id: 2,
    badge: "Best Seller",
    title: "Luxury Fragrances\n& Perfumes",
    subtitle: "Find your signature scent",
    bgColor: "#f0f0f8",
    image: "https://cdn.dummyjson.com/products/images/fragrances/Chanel%20Coco%20Noir%20Eau%20De/1.png",
  },
  {
    id: 3,
    badge: "New Arrivals",
    title: "Modern Furniture\n& Home Decor",
    subtitle: "Style your living space",
    bgColor: "#f5f0eb",
    image: "https://cdn.dummyjson.com/products/images/furniture/Annibale%20Colombo%20Bed/1.png",
  },
];

export const Carousel = () => {
  const [index, setIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const goTo = (next) => {
    if (animating) return;
    setAnimating(true);
    setTimeout(() => {
      setIndex(next);
      setAnimating(false);
    }, 400);
  };

  const nextSlide = () => goTo((index + 1) % slides.length);
  const prevSlide = () => goTo((index - 1 + slides.length) % slides.length);

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [index]);

  const slide = slides[index];

  return (
    <div className="carousel" style={{ backgroundColor: slide.bgColor }}>
      {/* Background brick texture overlay */}
      <div className="carousel-bg-overlay" />

      {/* Content */}
      <div className={`carousel-content ${animating ? "fade-out" : "fade-in"}`}>
        {/* Left: Text */}
        <div className="carousel-text">
          <h1 className="carousel-title">
            {slide.title.split("\n").map((line, i) => (
              <span key={i}>
                {line}
                <br />
              </span>
            ))}
          </h1>
          <p className="carousel-subtitle">{slide.subtitle}</p>
          <button className="carousel-cta">Shop Now</button>
        </div>

        {/* Right: Image */}
        <div className="carousel-image-wrap">
          {/* Badge */}

          <img
            src={slide.image}
            alt={`Slide ${index + 1}`}
            className="carousel-main-img"
          />
        </div>
      </div>

      {/* Prev Button */}
      <button onClick={prevSlide} className="carousel-btn carousel-btn-left" aria-label="Previous">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {/* Next Button */}
      <button onClick={nextSlide} className="carousel-btn carousel-btn-right" aria-label="Next">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dots */}
      <div className="carousel-dots">
        {slides.map((_, i) => (
          <button
            key={i}
            className={`carousel-dot ${i === index ? "active" : ""}`}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
};