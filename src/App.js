import { Navigate, Route, Routes } from "react-router-dom";
import Products from "./Components/Products/Products";
import Home from "./Components/Home/Home";
import Layout from "./Components/Layout/Layout";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/*" element={<Navigate to="/products" />} />
        <Route path="/products" element={<Home />} />
        <Route path="/products/:productName/" element={<Products />} />
      </Routes>
    </Layout>
  );
}

export default App;
