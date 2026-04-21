import React from 'react';
import './Pagination.css'; // Make sure the path matches where you save the CSS file

export const Pagination = ({ page, onPrev, onNext, isPrevDisabled, isNextDisabled }) => {
  return (
    <div className="page-container">
      <button
        disabled={isPrevDisabled}
        onClick={onPrev}
        className="page-button"
      >
        Previous
      </button>

      <span className="page-text">Page {page + 1}</span>

      <button
        disabled={isNextDisabled}
        onClick={onNext}
        className="page-button"
      >
        Next
      </button>
    </div>
  );
};