import React from "react";
import Cart from "../pages/Cart";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Cards from "./Cards";

const Routers = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Cards />} />

        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
};

export default Routers;
