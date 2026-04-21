import{CategoryFilterItem} from "./CategoryFilterItem"
import "./CategoryFilter.css";
import { SectionHeader } from "../../shared/ui/SectionHeader";
export const CategoryFilter = ({ categories, selectedCategories, onToggle }) => {
  return (
    <>
    <SectionHeader   title="Shop By Category"
  subtitle="Visit our shop to see amazing products" />

  
    <div className="category-filter-wrapper">
      <div className="category-filter-inner">
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
    </>
  );
};