
import { Products } from "../features/products/components/Products.jsx";
import { Routes, Route, useLocation } from "react-router-dom";
import {Footer} from "../shared/components/Footer.jsx"
import { AllProducts } from "../pages/AllProducts.jsx";
import { CartPage } from "../features/cart/CartPage.jsx";
import {SpecificCard} from "../shared/ui/SpecificCard.jsx"
import { SignIn } from "../features/authontication/SignIn.jsx";
import { About } from "../pages/about/About";
import { useEffect, useState } from "react";
import { Navbar } from "../shared/components/Navbar/Navbar.jsx";
import { NotErr } from "../shared/ui/NotErr.jsx";

export const MainLayout = () => {
    const [showNavbar, setShowNavbar] = useState(false);
    const [showFooter, setShowFooter] = useState(false);
    const location = useLocation();

    useEffect(() => {
        setShowNavbar(false);
        setShowFooter(false);

        const navTimer = setTimeout(() => {
            setShowNavbar(true);
        }, 1000); 

        const footerTimer = setTimeout(() => {
            setShowFooter(true);
        }, 3000); 

        return () => {
            clearTimeout(navTimer);    
            clearTimeout(footerTimer);
        };
    }, [location.pathname]);

    return (
        <> 

            {/* {showNavbar && <Navbar />}     */}
            <Navbar />
            <Routes>   
                <Route path="/about" element={<About />} />
                <Route path="/" element={<Products />} />
                <Route path="/products" element={<AllProducts />} />
                <Route path="/cart" element={<CartPage />} />
                <Route path="/product/:id" element={<SpecificCard />} />
                <Route path="/signin" element={<SignIn />} />
               <Route path="*" element ={<NotErr />} />
               {/* <NotFound name="Jaswanth" onGoHome={() => navigate('/')} /> */}
               {/* // In your router config
{ path: '*', element: <NotFound name="Jaswanth" onGoHome={() => navigate('/')} /> } */}
            </Routes>
            {showFooter && <Footer />}      
        </>
    );
};