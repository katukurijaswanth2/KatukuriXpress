import { ProductCard } from "./ProductCard";

export const ProductGrid = ({ products, onBuyNow }) => {
  return (
    <div className="container">
      {products.map((item) => (
        <ProductCard key={item.id} item={item} onBuyNow={onBuyNow} />
      ))}
    </div>
  );
};