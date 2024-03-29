import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Navheader from "./components/Navheader";
import Footer from "./components/Footer";
import HomeView from "./views/HomeView";
import ProductView from "./views/ProductView";
import CartView from "./views/CartView";
import LoginView from "./views/LoginView";
import SignupView from "./views/SignupView";
import ProfileView from "./views/ProfileView";
import ShippingView from "./views/ShippingView";
import PaymentView from "./views/PaymentView";
import PlaceOrderView from "./views/PlaceOrderView";
import OrderView from "./views/OrderView";
import UserListView from "./views/UserListView";
import UserEditView from "./views/UserEditView";
import ProductListView from "./views/ProductListView";
import ProductEditView from "./views/ProductEditView";
import OrderListView from "./views/OrderListView";

const App = () => {
  return (
    <Router>
      <Navheader />
      <main className="py-4">
        <Container>
          <Routes>
            <Route path="/order/:id" element={<OrderView />} />
            <Route path="/shipping" element={<ShippingView />} />
            <Route path="/payment" element={<PaymentView />} />
            <Route path="/placeorder" element={<PlaceOrderView />} />
            <Route path="/login" element={<LoginView />} />
            <Route path="/register" element={<SignupView />} />
            <Route path="/profile" element={<ProfileView />} />
            <Route path="/product/:id" element={<ProductView />} />
            <Route path="/cart/:id" element={<CartView />} />
            <Route path="/admin/userlist" element={<UserListView />} />
            <Route path="/admin/user/:id/edit" element={<UserEditView />} />
            <Route path="/admin/productlist" element={<ProductListView />} />
            <Route
              path="/admin/product/:id/edit"
              element={<ProductEditView />}
            />
            <Route path="/admin/orderlist" element={<OrderListView />} />
            <Route path='/search/:keyword' element={<HomeView />} />
            <Route path="/" element={<HomeView />} exact />
          </Routes>
        </Container>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
