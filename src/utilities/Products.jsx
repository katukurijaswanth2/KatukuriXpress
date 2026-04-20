import axios from "axios";
import { useEffect, useState } from "react";
import "./Product.css";
import { useNavigate } from "react-router-dom";
import { Carousel } from "../components/Carousel.jsx";
import { Loader } from "../components/Loader.jsx";
import { CategoryFilter } from "./CategoryFilter.jsx";
import { ProductGrid } from "./ProductGrid.jsx";
import { Pagination } from "./Pagination";
import { Products1 } from "../components/Products1.jsx"
import { Features } from "../components/Features.jsx";
import DealsOfTheDay from "../pages/Deals/DealsOfTheDay.jsx";

import { ProductsSkeleton } from "../features/products/ProductsSkeleton.jsx";

export const Products = () => {
  const navigate = useNavigate();

  const [allProducts, setAllProducts] = useState([]);
  const [page, setPage] = useState(0);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const limit = 10;

  // Fetch all products on mount
  useEffect(() => {
    axios
      .get("https://dummyjson.com/products?limit=100")
      .then((res) => {
        setAllProducts(res.data.products);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  if (loading) return <Loader />;

  // Derive unique categories
  const allCategories = [
    ...new Set(allProducts.map((product) => product.category)),
  ];

  // Toggle a category on/off and reset to first page
  const handleCategoryToggle = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
    setPage(0);
  };

  // Navigate to product detail (requires login)
  const handleBuyNow = (id) => {
    const user = localStorage.getItem("user");
    navigate(user ? `/product/${id}` : "/signin");
  };

  // Filter products by selected categories
  const filteredProducts =
    selectedCategories.length === 0
      ? allProducts
      : allProducts.filter((p) => selectedCategories.includes(p.category));

  // Slice for current page
  const currentProducts = filteredProducts.slice(
    page * limit,
    page * limit + limit
  );

 return (
    <div className="mx-auto">
      {/* Navbar is OUTSIDE the loading check, so it never disappears! */}
    

      {/* If loading is true, show skeleton. Otherwise, show the real page. */}
      {loading ? (
        <ProductsSkeleton />
      ) : (
        <>
          <Carousel />
          <Features />

          <CategoryFilter
            categories={allCategories}
            selectedCategories={selectedCategories}
            onToggle={handleCategoryToggle}
          />
          
          <DealsOfTheDay />
          <ProductGrid products={currentProducts} onBuyNow={handleBuyNow} />

          <Pagination
            page={page}
            onPrev={() => setPage((p) => p - 1)}
            onNext={() => setPage((p) => p + 1)}
            isPrevDisabled={page === 0}
            isNextDisabled={(page + 1) * limit >= filteredProducts.length}
          />
        </>
      )}
    </div>
  );
};