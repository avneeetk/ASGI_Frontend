import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import axios from "axios";
import { toast } from "react-toastify";
import { Context } from "../main";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const { isAuthenticated, setIsAuthenticated } = useContext(Context);
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const response = await axios.get("https://asgi-portal-backend.onrender.com/api/v1/user/patient/logout", {
        withCredentials: true,
      });
      toast.success(response.data.message);
      setIsAuthenticated(false);
      navigate("/login");
    } catch (err) {
      toast.error(err.response?.data?.message || "An error occurred");
    }
  };

  const goToLogin = () => {
    navigate("/login");
  };

  return (
    <nav className="container">
      <div className="logo">
        <img src="/public /logo.jpg" alt="logo" className="logo-img" />
      </div>
      <div className={show ? "navLinks showmenu" : "navLinks"}>
        <div className="links">
          <Link to="/" onClick={() => setShow(false)}>Home</Link>
          {isAuthenticated && (
            <Link to="/history" onClick={() => setShow(false)}>History</Link> // Show only if authenticated
          )}
          <Link to="/about" onClick={() => setShow(false)}>About Us</Link>
        </div>
        {isAuthenticated ? (
          <button className="logoutBtn btn" onClick={handleLogout}>
            Logout
          </button>
        ) : (
          <button className="loginBtn btn" onClick={goToLogin}>
            Login
          </button>
        )}
      </div>
      <div className="hamburger" onClick={() => setShow(!show)}>
        <GiHamburgerMenu />
      </div>
    </nav>
  );
};

export default Navbar;
