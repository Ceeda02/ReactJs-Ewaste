import logo from "./logo.svg";
import React from "react";

// Css
import "./App.css";

// Components
import Home from "./components/Home";
import Contact from "./components/Contact";
import Track from "./components/Track";
import Navigation from "./components/Navigation";

// Router
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navigation></Navigation>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer></Footer>
    </>
  );
}

export default App;
