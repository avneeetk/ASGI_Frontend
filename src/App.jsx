import React, { useContext, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import History from "./Components/History";
import AboutUs from "./Pages/AboutUs";
import Register from "./Pages/Register";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { Context } from "./main";
import Login from "./Pages/Login";

const App = () => {
  const { isAuthenticated, setIsAuthenticated, setUser } =
    useContext(Context);

 useEffect(() => {
  const fetchUser = async () => {
    try {
      const response = await axios.get(
        "https://asgi-backend.onrender.com/api/v1/user/patient/me", // Local API URL
        { withCredentials: true }
      );
      setIsAuthenticated(true);
      setUser(response.data.user);
    } catch {
      setIsAuthenticated(false);
      setUser({});
    }
  };
  fetchUser();
}, [isAuthenticated, setIsAuthenticated, setUser]);


  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/history" element={<History />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
        <ToastContainer position="top-center" />
      </Router>
    </>
  );
};

export default App;