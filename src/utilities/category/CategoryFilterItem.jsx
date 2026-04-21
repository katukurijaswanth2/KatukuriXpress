import "./CategoryFilterItem.css";

export const CategoryFilterItem = ({ category, isSelected, onToggle }) => {
  return (
    <div
      className="filter-item"
      onClick={() => onToggle(category)}
    >
      {/* Animated Checkbox */}
      <div className="checkbox-wrapper">
        <input
          type="checkbox"
          checked={isSelected}
          onChange={() => onToggle(category)}
          onClick={(e) => e.stopPropagation()}
          className="checkbox-input"
        />
        <span
          className="check-icon"
          style={{
            transform: isSelected ? "scale(1)" : "scale(0)",
            animation: isSelected ? "zoom 0.5s ease-in-out" : "none",
          }}
        >
          <i className="fa-solid fa-check"></i>
        </span>
      </div>

      <span className="category-label">{category}</span>
    </div>
  );
};