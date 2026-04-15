const style = document.createElement("style");
style.textContent = `
  @keyframes zoom {
    0% { transform: scale(0); }
    20% { transform: scale(1.5); }
    40% { transform: scale(0.5); }
    50% { transform: scale(1); }
    70% { transform: scale(1.2); }
    90% { transform: scale(0.8); }
    100% { transform: scale(1); }
  }
  .animate-zoom {
    animation: zoom 0.5s ease-in-out;
  }
`;
if (!document.head.querySelector("style[data-zoom]")) {
  style.setAttribute("data-zoom", "true");
  document.head.appendChild(style);
}

export const CategoryFilterItem = ({ category, isSelected, onToggle }) => {
  return (
    <div
      className="flex items-center gap-2 bg-white rounded-lg px-3 py-2 hover:border-black transition-all cursor-pointer"
      onClick={() => onToggle(category)}
    >
      {/* Animated Checkbox */}
      <div className="relative flex items-center justify-center w-[22px] h-[22px]">
        <input
          type="checkbox"
          checked={isSelected}
          onChange={() => onToggle(category)}
          onClick={(e) => e.stopPropagation()}
          className="peer appearance-none w-[22px] h-[22px] rounded-[6px] border-2 border-black transition-all duration-200 ease-in-out cursor-pointer"
        />
        <span
          className="absolute pointer-events-none inset-0 flex items-center justify-center text-orange-400 text-[16px] leading-none transition-all duration-200"
          style={{
            transform: isSelected ? "scale(1)" : "scale(0)",
            animation: isSelected ? "zoom 0.5s ease-in-out" : "none",
          }}
        >
          <i className="fa-solid fa-check"></i>
        </span>
      </div>

      <span className="text-sm capitalize text-gray-700 whitespace-nowrap">
        {category}
      </span>
    </div>
  );
};