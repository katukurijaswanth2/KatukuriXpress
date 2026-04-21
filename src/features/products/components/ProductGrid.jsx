import { SectionHeader } from "../../../shared/ui/SectionHeader";
import { ProductCard } from "./ProductCard";

export const ProductGrid = ({ products, onBuyNow }) => {
  return (
    <div>
      <SectionHeader
        title="Featured Products"
        subtitle="Visit our shop to see amazing products"
      />

      <div className="container">
        {products.map((item) => (
          <ProductCard key={item.id} item={item} onBuyNow={onBuyNow} />
        ))}
      </div>
    </div>
  );
};