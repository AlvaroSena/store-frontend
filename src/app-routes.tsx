import { Routes, Route } from "react-router-dom";
import { Home } from "@/pages/home";
import { Product } from "@/pages/product";
import { Checkout } from "@/pages/checkout";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Product />} />
      <Route path="/checkout" element={<Checkout />} />
    </Routes>
  );
}
