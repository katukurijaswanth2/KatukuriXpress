import { useState } from "react";
import "./Footer.css";

const XIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.262 5.635 5.901-5.635zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const InstagramIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
  </svg>
);

const FacebookIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

const ArrowUpIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
    <path d="M7 11V3M3 7l4-4 4 4" stroke="#d4a24c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const AtaraxisLogo = () => (
  <svg width="36" height="36" viewBox="0 0 40 40" fill="none">
    <path d="M20 2 L38 36 L2 36 Z" fill="none" stroke="#d4a24c" strokeWidth="2" />
    <path d="M20 10 L32 34 L8 34 Z" fill="none" stroke="#d4a24c" strokeWidth="1.5" opacity="0.6" />
    <path d="M20 18 L28 34 L12 34 Z" fill="#d4a24c" opacity="0.4" />
  </svg>
);

const siteMapLinks = [
  { label: "Homepage", href: "#", active: true },
  { label: "Technology", href: "#" },
  { label: "Ataraxis Breast", href: "#" },
  { label: "Resources & news", href: "#" },
  { label: "Careers", href: "#" },
  { label: "Contact Us", href: "#" },
  { label: "Portal", href: "#" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Services", href: "#" },
  { label: "Lawyer's Corners", href: "#" },
];

const socialLinks = [
  { icon: <XIcon />, label: "X" },
  { icon: <LinkedInIcon />, label: "LinkedIn" },
  { icon: <InstagramIcon />, label: "Instagram" },
  { icon: <FacebookIcon />, label: "Facebook" },
];

export const Footer=()=> {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="footer-root">
      <svg className="footer-geo-bg" viewBox="0 0 420 420" fill="none">
        <path d="M210 0 L420 420 L0 420 Z" stroke="#1e5248" strokeWidth="1" />
        <path d="M320 0 L420 210 L210 420" stroke="#1e5248" strokeWidth="0.5" />
        <path d="M100 0 L420 310 L100 420" stroke="#1e5248" strokeWidth="0.5" />
        <path d="M380 0 L420 80 L340 420" stroke="#1e5248" strokeWidth="0.4" />
      </svg>

      <div className="footer-main">
        <div>
          <div className="footer-logo-wrap">
            <AtaraxisLogo />
            <span className="footer-logo-text">KatukuriXpress</span>
          </div>

          <p className="footer-tagline">
            Empowering physicians with advanced multi-modal tools to improve treatment selection and patient outcomes.
          </p>

          <div className="footer-social-list">
            {socialLinks.map(({ icon, label }) => (
              <button key={label} aria-label={label} className="footer-social-btn">
                {icon}
              </button>
            ))}
          </div>

          <button className="footer-back-btn" onClick={scrollToTop}>
            <ArrowUpIcon />
            BACK TO TOP
          </button>
        </div>

        <NavColumn title="SITE MAP" links={siteMapLinks} />
        <NavColumn title="LEGAL" links={legalLinks} />
      </div>

      <div className="footer-copyright-bar">
        <p className="footer-copyright-text">
          Copyright &copy; 2024, ataraxis.ai. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

function NavColumn({ title, links }) {
  return (
    <div>
      <h4 className="footer-nav-title">{title}</h4>
      <ul className="footer-nav-list">
        {links.map(({ label, href, active }) => (
          <li key={label} className="footer-nav-item">
            <a
              href={href}
              className={`footer-nav-link${active ? " footer-nav-link--active" : ""}`}
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}