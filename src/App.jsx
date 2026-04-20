// import { ButtonComp } from './exam/ButtonComp'
// import './App.css'
// import { List } from './exam/List'
// import { Lstorage } from './exam/Lstorage';
// import { Products } from './components/Products';
// import { Ecom } from './components/Ecom';
// import { Carousel } from './components/Carousel';

// function App() {
//   return(<>


// <div> 
//    <Carousel />
//    <Products />
 
//    <h1>helloo</h1>
  
//    {/* <Ecom /> */}
   
   
//    </div>
//    </>
   
//   );
// }

// export default App
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Products1 } from "./components/Products1";
import { Products } from "./utilities/Products";
import { SpecificCard } from "./components/SpecificCard";
import { SignIn} from "../src/features/authontication/SignIn";
import { CartPage } from "./features/cart/Cartpage";
import { AllProducts } from "./pages/AllProducts";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Products />} />
  <Route path="/products" element ={<AllProducts />} />
        <Route path="/cart" element={<CartPage />}></Route>
        <Route path="/product/:id" element={<SpecificCard />} />
       
<Route path="/signin" element={<SignIn />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;