import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Navheader from "./components/Navheader";
import Footer from "./components/Footer";
import HomeView from "./views/HomeView";
import ProductView from "./views/ProductView";

const App = () => {
  return (
    <Router>
      <Navheader />
      <main className="py-4">
        <Container>
          <Routes>
            <Route path="/" element={<HomeView />} exact />
            <Route path="/product/:id" element={<ProductView />} exact />
          </Routes>
        </Container>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
