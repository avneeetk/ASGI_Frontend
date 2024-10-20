import React from "react";
import { Link } from "react-router-dom";
import { FaLocationArrow, FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="container">
      <hr />
      <div className="content">
        <div>
          <img src="/public /logo.jpg" alt="logo" className="logo-img" />
        </div>
        <div>
          <h4>Quick Links</h4>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            
            <li>
              <Link to="/about">About Us</Link>
            </li>
          </ul>
        </div>
        <div>
          <h4>Contact</h4>
          <div>
            <FaPhone />
            <span>+91 98718 50888</span>
          </div>
          <div>
  <MdEmail />
  <a href="mailto:rdssdf2024@gmail.com">rdssdf2024@gmail.com</a>
</div>

          <div>
            <FaLocationArrow />
            <span>
              C-351, 3rd Floor, Golf View Apartments, MCE Force Colony, Block A,
              DDA Flats, Saket, New Delhi, Delhi 110017
            </span>
          </div>
        </div>
        <div>
          {/* Example of additional content */}
          <h4>Follow Us</h4>
          <ul>
            <li>
              <a
                href="https://amyloidosissupport.in/"
                target="_blank"
                rel="noopener noreferrer"
              >
                ASGI Website
              </a>
            </li>
            <li>
              <a
                href="https://x.com/rdssdf2024"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/rdssdf2024/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="copyright">
        <p>© {currentYear} ASGI. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
