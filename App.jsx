import React, { lazy, Suspense } from "react";
import SignupPage from "./src/pages/SignupPage/SignupPage";
import { Route, Routes } from "react-router-dom";
import FooterBasic from "./src/components/FooterBasic/FooterBasic";
import { ProductpageShimmer } from "./src/components/Shimmer";
import LoginPage from "./src/pages/LoginPage";
const Homepage = lazy(()=> import("./src/pages/Homepage"));

const ProductPage = lazy(()=>import("./src/pages/ProductPage"));

const App = () => {
  return (
    <>
    
      <Routes>
      <Route exact path="/" element={<Homepage/>} />
        <Route  path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/homepage" element={<Homepage/>} />
        <Route path="/ProductPage" element={
          <Suspense fallback={<ProductpageShimmer/>}>
 <ProductPage/>
          </Suspense>
         } />
      </Routes>
      {/* <Login_page /> */}
      {/* <SignupPage /> */}
      <FooterBasic />
    </>
  );
};

export default App;