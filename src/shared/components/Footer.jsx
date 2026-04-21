import React from "react";
// Ensure you have FontAwesome imported in your project
// import "@fortawesome/fontawesome-free/css/all.min.css";
import "./Footer.css";

const shopLinks = [
  { label: "All Products", href: "#" },
  { label: "New Arrivals", href: "#" },
  { label: "Discounts & Offers", href: "#" },
  { label: "Track Order", href: "#" },
];

const supportLinks = [
  { label: "Contact Us", href: "#" },
  { label: "FAQs", href: "#" },
  { label: "Returns & Exchanges", href: "#" },
  { label: "Shipping Info", href: "#" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Service", href: "#" },
];

const socialLinks = [
  { iconClass: "fa-brands fa-x-twitter", label: "X" ,link:"https://x.com/kjaswanth_2"},
  { iconClass: "fa-brands fa-facebook-f", label: "Facebook",link:"https://www.facebook.com/jaswanth.katukuri.7/"  },
  { iconClass: "fa-brands fa-instagram", label: "Instagram" ,link:"https://www.instagram.com/jashuuuu.4/"},
  { iconClass: "fa-brands fa-linkedin-in", label: "LinkedIn", link:"https://www.linkedin.com/in/jaswanth-katukuri-a00a87307/" },
];

export const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="footer-root">
      <div className="footer-container">
        
        {/* Brand & Social Section */}
        <div className="footer-brand-section">
          <h2 className="footer-logo-text">
            <i className="fa-solid fa-cart-shopping"></i> KatukuriXpress
          </h2>
          <p className="footer-tagline">
            Your one-stop destination for quality products at the best prices.
          </p>

          <div className="footer-social-list">
            {socialLinks.map(({ iconClass, label,link }) => (
              <a key={label} href={link} aria-label={label} className="footer-social-btn" target="_blank">
                <i className={iconClass}></i>
              </a>
            ))}
          </div>

          <button className="footer-back-btn" onClick={scrollToTop}>
            <i className="fa-solid fa-arrow-up"></i> BACK TO TOP
          </button>
        </div>

        {/* Navigation Links */}
        <div className="footer-nav-sections">
          <NavColumn title="SHOP" links={shopLinks} />
          <NavColumn title="CUSTOMER SUPPORT" links={supportLinks} />
          <NavColumn title="LEGAL" links={legalLinks} />
        </div>

      </div>

      {/* Copyright Bar */}
      <div className="footer-copyright-bar">
        <p>&copy; {new Date().getFullYear()} KatukuriXpress. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

// Reusable Navigation Column Component
function NavColumn({ title, links }) {
  return (
    <div className="nav-column">
      <h4 className="footer-nav-title">{title}</h4>
      <ul className="footer-nav-list">
        {links.map(({ label, href }) => (
          <li key={label} className="footer-nav-item">
            <a href={href} className="footer-nav-link">
              {label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}