import axios from "axios";
import { useEffect, useState } from "react";
import { ProductGrid } from "../utilities/ProductGrid.jsx";
import { useNavigate } from "react-router-dom";

export const AllProducts = () => {
  const [allproducts, setAllproducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products?limit=100")
      .then((res) => {
        setAllproducts(res.data.products);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleBuyNow = (id) => {
    const user = localStorage.getItem("user");
    navigate(user ? `/product/${id}` : "/signin");
  };

  return (
    <>
      <ProductGrid products={allproducts} onBuyNow={handleBuyNow} />
    </>
  );
};