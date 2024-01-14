import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/dashboard/Home";
import ProductDetail from "./pages/product/ProductDetail";
import Login from "./pages/auth/Loogin";
import Register from "./pages/auth/Register";
import RoomStyleDashboard from "./pages/room/style/RoomStyleDashboard";
import ProductInfo from "./pages/product/ProductInfo";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/room-style/:roomStyle" element={<RoomStyleDashboard />} />
        <Route path="/product-info/:product" element={<ProductInfo />} />
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
