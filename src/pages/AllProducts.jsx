import axios from "axios";
import { useEffect, useState } from "react";

import { ProductGrid } from "../features/products/components/ProductGrid.jsx";
import { useNavigate } from "react-router-dom";
import { ProductsSkeleton } from "../features/products/skeleton/ProductsSkeleton.jsx";

export const AllProducts = () => {
  const [allproducts, setAllproducts] = useState([]);
  const navigate = useNavigate();
   const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products?limit=100")
      .then((res) => {
        setAllproducts(res.data.products);
          setLoading(false);
      })
      .catch((err) => {
        console.log(err);
          setLoading(false);
      });
  }, []);

  const handleBuyNow = (id) => {
    const user = localStorage.getItem("user");
    navigate(user ? `/product/${id}` : "/signin");
  };

  return (
    <>{loading ? (
      <ProductsSkeleton />
    ):(
      <ProductGrid products={allproducts} onBuyNow={handleBuyNow} />
)}</>
  );
};