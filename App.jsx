import React, { lazy, Suspense } from "react";
import SignupPage from "./src/pages/SignupPage";
import { Route, Routes } from "react-router-dom";
import FooterBasic from "./src/components/FooterBasic";
import { HomepageShimmer, ProductpageShimmer } from "./src/components/Shimmer";
import LoginPage from "./src/pages/LoginPage";
import SelectedProduct from "./src/pages/SelectedProduct";
const Homepage = lazy(()=> import("./src/pages/Homepage"));

const ProductPage = lazy(()=>import("./src/pages/ProductPage"));

const App = () => {
  return (
    <>
    
      <Routes>
      <Route exact path="/" element={<Homepage/>} />
        <Route  path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/homepage" element={
          <Suspense fallback={<HomepageShimmer/>}>
            <Homepage/>
          </Suspense>
          } />
        <Route path="/ProductPage" element={
          <Suspense fallback={<ProductpageShimmer/>}>
 <ProductPage/>
          </Suspense>
         } />
         <Route
            path="/selected-product"
            element={
              <Suspense fallback={<ProductpageShimmer />}>
                <SelectedProduct />
              </Suspense>
            }
          />
      </Routes>
      {/* <Login_page /> */}
      {/* <SignupPage /> */}
     
    </>
  );
};

export default App;