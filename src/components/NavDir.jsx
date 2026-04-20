import React from 'react';
import './NavDir.css';

export const NavDir = () => {
  const navItems = [
    { name: 'Home', hasDropdown: true },
    { name: 'About', hasDropdown: false },
    { name: 'Shop', hasDropdown: true },
    { name: 'Blog', hasDropdown: true },
    { name: 'Pages', hasDropdown: true },
    { name: 'Contact', hasDropdown: false },
  ];

  return (
    <nav className="nav-direction-container">
      <ul className="nav-direction-list">
        {navItems.map((item, index) => (
          <li key={index} className="nav-direction-item">
            <a href="#" className={`nav-direction-link ${item.name === 'Home' ? 'active' : ''}`}>
              {item.name}
              {item.hasDropdown && (
                <span className="nav-direction-icon">
                  <svg 
                    width="10" 
                    height="6" 
                    viewBox="0 0 10 6" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path 
                      d="M1 1L5 5L9 1" 
                      stroke="currentColor" 
                      strokeWidth="1.5" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              )}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

