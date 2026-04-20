import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { Products } from "../utilities/Products";
import { Routes, Route } from "react-router-dom";

import { AllProducts } from "../pages/AllProducts";
import { CartPage } from "../features/cart/CartPage.jsx";
import { SpecificCard } from "../components/SpecificCard";
import { SignIn } from "../features/authontication/SignIn";
import { About } from "../pages/about/About";

export const MainLayout = () => {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/about" element={<About />} />
                <Route path="/" element={<Products />} />
                <Route path="/products" element={<AllProducts />} />
                <Route path="/cart" element={<CartPage />} />
                <Route path="/product/:id" element={<SpecificCard />} />
                <Route path="/signin" element={<SignIn />} />
            </Routes>
            <Footer />
        </>
    );
};