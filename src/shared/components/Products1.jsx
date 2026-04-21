import axios from "axios";
import { useEffect, useState } from "react";
import "./Product1.css";
import { useNavigate } from "react-router-dom";
import { Carousel } from "./Carousel";
import { Loader } from "./Loader";

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
document.head.appendChild(style);

export const Products1 = () => {

  const navigate = useNavigate();

  const [allProducts, setAllProducts] = useState([]);
  const [page, setPage] = useState(0);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const limit = 10;

  // ✅ Fetch products
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
  if (loading) {
    return(
    <Loader />); 
  }

  // ✅ Get all categories
  const allCategories = [...new Set(allProducts.map((product) => product.category))];

  // ✅ Handle category selection
  const handleCategoryClick = (category) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter((c) => c !== category));
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
    setPage(0);
  };

  // ✅ Login check before navigating
  const handleBuyNow = (id) => {
    const user = localStorage.getItem("user");

    if (user) {
      navigate(`/product/${id}`);
    } else {
      navigate("/signin");
    }
  };

  // ✅ Filter products
  let filteredProducts = [];
  if (selectedCategories.length === 0) {
    filteredProducts = allProducts;
  } else {
    filteredProducts = allProducts.filter((product) =>
      selectedCategories.includes(product.category)
    );
  }

  // ✅ Pagination logic
  const startIndex = page * limit;
  const endIndex = startIndex + limit;
  const currentProducts = filteredProducts.slice(startIndex, endIndex);

  const isPrevDisabled = page === 0;
  const isNextDisabled = (page + 1) * limit >= filteredProducts.length;

  return (
    <div className=" mx-auto">

      <Carousel />

      {/* ✅ CATEGORY FILTER (HORIZONTAL FLEX LAYOUT) */}
      <div className="w-full px-4 flex justify-center">
        <div className="flex flex-row flex-wrap gap-3 bg-gray-50 rounded-xl border border-gray-200 p-4">

          {allCategories.map((category) => (
            <div
              key={category}
              className="flex items-center gap-2 bg-white rounded-lg px-3 py-2 hover:border-black transition-all cursor-pointer"
              onClick={() => handleCategoryClick(category)}
            >

              {/* ✅ Custom Animated Checkbox */}
              <div className="relative flex items-center justify-center w-[22px] h-[22px]">
                <input
                  type="checkbox"
                  checked={selectedCategories.includes(category)}
                  onChange={() => handleCategoryClick(category)}
                  onClick={(e) => e.stopPropagation()}
                  className="peer appearance-none w-[22px] h-[22px] rounded-[6px] border-2 border-black transition-all duration-200 ease-in-out cursor-pointer"
                />
                <span
                  className="absolute pointer-events-none inset-0 flex items-center justify-center text-orange-400 text-[16px] leading-none transition-all duration-200"
                  style={{
                    transform: selectedCategories.includes(category) ? "scale(1)" : "scale(0)",
                    animation: selectedCategories.includes(category) ? "zoom 0.5s ease-in-out" : "none",
                  }}
                >
                  <i className="fa-solid fa-check"></i>
                </span>
              </div>

              <span className="text-sm capitalize text-gray-700 whitespace-nowrap">
                {category}
              </span>

            </div>
          ))}

        </div>
      </div>

      {/* ✅ PRODUCT CARDS */}
      <div className="container">
        {currentProducts.map((item) => (
          <div className="card" key={item.id}>

            <span className="badge">NEW</span>

            <div className="image-container">
              <img src={item.thumbnail} alt={item.title} />
            </div>

            <h3 className="title">{item.title}</h3>

            <p className="category text-xs text-gray-500 uppercase mb-1">
              {item.category}
            </p>

            <div className="price">
              <span className="old">₹{item.price + 50}</span>
              <span className="new">₹{item.price}</span>
            </div>

            {/* ✅ Login check applied */}
            <button
              className="buy-btn"
              onClick={() => handleBuyNow(item.id)}
            >
              BUY NOW →
            </button>

          </div>
        ))}
      </div>

      {/* ✅ PAGINATION */}
      <div className="flex justify-center gap-4 my-5">

        <button
          disabled={isPrevDisabled}
          onClick={() => setPage(page - 1)}
          className={`px-4 py-2 rounded font-medium ${isPrevDisabled
              ? "bg-gray-300 text-gray-500"
              : "bg-blue-500 text-white"
            }`}
        >
          Previous
        </button>

        <span className="px-3 py-2">Page {page + 1}</span>

        <button
          disabled={isNextDisabled}
          onClick={() => setPage(page + 1)}
          className={`px-4 py-2 rounded font-medium ${isNextDisabled
              ? "bg-gray-300 text-gray-500"
              : "bg-blue-500 text-white"
            }`}
        >
          Next
        </button>

      </div>

    </div>
  );
};