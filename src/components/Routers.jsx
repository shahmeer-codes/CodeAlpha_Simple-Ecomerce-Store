import React from "react";
import Cart from "../pages/Cart";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Cards from "./Cards";
import About from "../pages/About";
import Contact from "../pages/Contact";
const Routers = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Cards />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </div>
  );
};

export default Routers;
