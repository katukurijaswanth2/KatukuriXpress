import { CategoryFilterItem } from "./CategoryFilterItem";

export const CategoryFilter = ({ categories, selectedCategories, onToggle }) => {
  return (
    <div className="w-full px-4 flex justify-center">
      <div className="flex flex-row flex-wrap gap-3 bg-gray-50 rounded-xl border border-gray-200 p-4">
        {categories.map((category) => (
          <CategoryFilterItem
            key={category}
            category={category}
            isSelected={selectedCategories.includes(category)}
            onToggle={onToggle}
          />
        ))}
      </div>
    </div>
  );
};