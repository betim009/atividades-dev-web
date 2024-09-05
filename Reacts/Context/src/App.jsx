import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Cart from "./Pages/Cart";

export default function App() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  );
}
