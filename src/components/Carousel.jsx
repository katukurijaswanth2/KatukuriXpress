import { useState, useEffect } from "react";
import "./Carousel.css";

const slides = [
  {
    id: 1,
    badge: "100% Organic",
    title: "Healthy Food\n& Organic Market",
    subtitle: "All natural products",
    bgColor: "#f5f5f0",
    image: "data:image/jpeg;base64,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",
  },
  {
    id: 2,
    badge: "Farm Fresh",
    title: "Fresh Vegetables\n& Seasonal Picks",
    subtitle: "Delivered to your door",
    bgColor: "#f0f5f0",
    image: "/assets/hero.png",
  },
  {
    id: 3,
    badge: "Best Quality",
    title: "Pure & Natural\nDairy Products",
    subtitle: "From trusted farms",
    bgColor: "#f5f0eb",
    image: "/assets/dairy-box.png",
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
          <div className="carousel-badge">
            <svg viewBox="0 0 60 60" className="badge-svg">
              <circle cx="30" cy="30" r="28" fill="#3a8c3f" />
              <text x="30" y="22" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold">
                100%
              </text>
              <text x="30" y="34" textAnchor="middle" fill="white" fontSize="9" fontWeight="bold">
                Organic
              </text>
              <text x="30" y="44" textAnchor="middle" fill="#a8e6b0" fontSize="6">
                ✦ ✦ ✦
              </text>
            </svg>
            <div className="badge-leaves">🌿</div>
          </div>

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