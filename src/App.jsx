import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/dashboard/Home";
import ProductDetail from "./pages/product/ProductDetail";
import Login from "./pages/auth/Loogin";
import Register from "./pages/auth/Register";
import RoomStyleDashboard from "./pages/room/style/RoomStyleDashboard";
import ProductInfo from "./pages/product/ProductInfo";
import Search from "./pages/search/Search";
import Cart from "./pages/cart/Cart";
import About_Us from "./pages/about_us/About_Us";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/room-style/:id/:name" element={<RoomStyleDashboard />} />
        <Route path="/product-info/:product" element={<ProductInfo />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/about-us" element={<About_Us />} />
        <Route path="/search" element={<Search />} />
        <Route path="/product/:title" element={<ProductDetail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
