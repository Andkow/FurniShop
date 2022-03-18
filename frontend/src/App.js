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

const App = () => {
  return (
    <Router>
      <Navheader />
      <main className="py-4">
        <Container>
          <Routes>
            <Route path="/shipping" element={<ShippingView />} exact />
            <Route path="/login" element={<LoginView />} exact />
            <Route path="/register" element={<SignupView />} exact />
            <Route path="/profile" element={<ProfileView />} exact />
            <Route path="/product/:id" element={<ProductView />} exact />
            <Route path="/cart/:id" element={<CartView />} exact />
            <Route path="/" element={<HomeView />} exact />
          </Routes>
        </Container>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
