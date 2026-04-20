import React from 'react';
import './About.css';

export const About = () => {
  return (<>
    <div className="about_container">
      <div className="about_header_section">
        <h1 className="about_title">The Vision Behind <span className="about_brand">KatukuriXpress</span></h1>
        <p className="about_subtitle">Crafting digital experiences with precision and passion.</p>
      </div>

      <div className="about_content_grid">
        <div className="about_text_block">
          <h2 className="about_section_heading">Beyond the Code</h2>
          <p className="about_description">
            I believe that every line of code is an opportunity to solve a human problem. 
            <strong> KatukuriXpress</strong> started as a challenge to master the complexities of modern 
            frontend architecture. While the data flows from a RESTful API, the soul of this 
            platform—the responsive design, the state management, and the intuitive user 
            journey—was built with a deep commitment to excellence.
          </p>
          <p className="about_description">
            As a developer, my goal isn't just to make things work; it's to make them feel 
            effortless. This project showcases my proficiency in React, handling dynamic 
            product cycles, and creating a professional-grade UI that rivals industry leaders.
          </p>
        </div>

        <div className="about_stats_container">
          <div className="about_stat_card">
            <h3 className="about_stat_number">React</h3>
            <p className="about_stat_label">State Management</p>
          </div>
          <div className="about_stat_card">
            <h3 className="about_stat_number">UI/UX</h3>
            <p className="about_stat_label">Pixel Perfect Design</p>
          </div>
          <div className="about_stat_card">
            <h3 className="about_stat_number">API</h3>
            <p className="about_stat_label">Seamless Integration</p>
          </div>
        </div>
      </div>

      <div className="about_recruiter_note">
        <h2 className="about_note_title">A Message to Recruiters</h2>
        <p className="about_note_text">
          I don't just build websites; I build solutions. This project represents my ability 
          to take a concept from ideation to a fully functional, aesthetic reality. I am 
          constantly upskilling, currently focused on mastering full-stack Java and high-performance 
          frontend frameworks. If you are looking for a developer who balances technical 
          rigor with a creative eye, I’d love to connect.
        </p>
      </div>
    </div>
    </>
  );
};

