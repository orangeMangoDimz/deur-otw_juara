import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/dashboard/Home";
import ProductDetail from "./pages/product/ProductDetail";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
