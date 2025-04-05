import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CustomerLayout from "./Layouts/CustomerLayout";
import AdminLayout from "./Layouts/AdminLayout";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import AdminDashboard from "./pages/AdminDashboard";
import ManageProducts from "./pages/ManageProducts";
import ManageOrders from "./pages/ManageOrders";
import ManageUsers from "./pages/ManageUsers";
import ManageCategories from "./pages/ManageCategories";
import ManageProfile from "./pages/ManageProfile";
import SettingsPage from "./pages/SettingsPage";
import ManageStore from "./pages/ManageStore";
import Whishlist from "./pages/WhishListPage";
import ProductsCategory from "./pages/ProductsCategory";


function App() {
  return (
    <Router>
      <Routes>
        {/* Customer Routes */}
        <Route element={<CustomerLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />

          < Route path="/Categories" element={<ProductsCategory />} />
          <Route path="/Categories/:id" element={<ProductsCategory />} />
        
          <Route path="/checkout" element={<Checkout />} />
          <Route path ="/whishlist" element={<Whishlist />} />
        </Route>

        {/* Admin Routes */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminDashboard />} /> {/* Admin default page */}
          <Route path="products" element={<ManageProducts />} />
          <Route path="categories" element={<ManageCategories />} />
          <Route path="orders" element={<ManageOrders />} />
          <Route path="users" element={<ManageUsers />} />
          <Route path="profile" element={<ManageProfile />} />
          <Route path="settings" element={<SettingsPage />} />
          <Route path="store" element={<ManageStore />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
