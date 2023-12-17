import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Products from "./pages/Products";
import Product from "./pages/Product";
import NotFound from "./pages/NotFoundPage";
import Account from "./pages/Account";
import PrivateRoute from "./PrivateRoute";
import AddProduct from "./pages/AddProduct";
import AddProductType from "./pages/AddProductType";
import HomePage from "./pages/Home";
import ProductDetails from "./pages/ProductDetail";
import { configEnv } from "./components/Services";

function App() {
  return (
    <>
      <Router>
        <div>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<HomePage />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/admin" element={<PrivateRoute />}>
              <Route path="/admin" element={<Product />} />
              <Route path="/admin/producttype" element={<Product />} />
              <Route
                path="/admin/producttype/new"
                element={<AddProductType />}
              />
              <Route path="/admin/products/new" element={<AddProduct />} />
              <Route path="/admin/account" element={<Account />} />
              <Route path="/admin/products" element={<Products />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
