import axios from "axios";
import React, { useContext, useState } from "react";
import { toast } from "react-toastify";
import { Context } from "../main";
import { Link, Navigate, useNavigate } from "react-router-dom";

const Register = () => {
  const { isAuthenticated, setIsAuthenticated } = useContext(Context);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [password, setPassword] = useState("");

  const navigateTo = useNavigate();

  const handleRegistration = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "https://asgi-portal-backend.onrender.com/api/v1/user/patient/register",
        { firstName, lastName, email, phone,  dob, gender, password },
        {
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
        }
      );

      toast.success(res.data.message);
      setIsAuthenticated(true);

      // Redirect to history page after registration
      navigateTo("/history");

      // Clear form fields
      setFirstName("");
      setLastName("");
      setEmail("");
      setPhone("");
      setDob("");
      setGender("");
      setPassword("");
    } catch (error) {
      toast.error(error.response?.data?.message || "Registration failed");
    }
  };

  if (isAuthenticated) {
    return <Navigate to={"/"} />;
  }

  return (
    <div style={styles.container}>
      <div style={styles.formContainer}>
        <h2 style={styles.title}>Register</h2>
        <p style={styles.subHeading}>Please Register/Sign Up To Continue</p>
        <p style={styles.explain}>
          Creating an account is the first step towards personalized
          care—register now to get started.
        </p>
        <form onSubmit={handleRegistration} style={styles.form}>
          <div style={styles.inputGroup}>
            <input
              type="text"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              style={styles.input}
            />
            <input
              type="text"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              style={styles.input}
            />
          </div>
          <div style={styles.inputGroup}>
            <input
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={styles.input}
            />
            <input
              type="tel"
              placeholder="Mobile Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              style={styles.input}
            />
          </div>
          <div style={styles.inputGroup}>
            
            <input
              type="date"
              placeholder="Date of Birth"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
              style={styles.input}
            />
          </div>
          <div style={styles.inputGroup}>
            <select
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              style={styles.select}
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={styles.input}
            />
          </div>
          <div style={styles.linkContainer}>
            <p style={styles.registerText}>Already Registered?</p>
            <Link to={"/login"} style={styles.registerLink}>
              Login Now
            </Link>
          </div>
          <button type="submit" style={styles.button}>Register</button>
        </form>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    backgroundColor: "#FBF6F1",
    padding: "20px",
  },
  formContainer: {
    backgroundColor: "#fff",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    padding:
      "150px 80px 80px" /* Increased padding for more space inside the form */,
    maxWidth: "600px" /* Increased max-width for a larger form */,
    width: "100%",
    boxSizing: "border-box",
  },
  title: {
    marginBottom: "20px",
    fontSize: "30px",
    textAlign: "center",
  },
  subHeading: {
    marginBottom: "20px",
    fontSize: "20px",
    color: "#555",
    textAlign: "center",
  },
  explain: {
    color: "#666",
    marginBottom: "30px",
    textAlign: "center",
    fontSize: "15px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  inputGroup: {
    display: "flex",
    flexDirection: "column",
    gap: "15px" /* Increased gap for better spacing */,
    marginBottom: "20px",
  },
  input: {
    padding: "12px",
    border: "1px solid #555",
    borderRadius: "6px",
    fontSize: "16px",
    color: "#000",
  },
  select: {
    padding: "12px",
    border: "1px solid #555",
    borderRadius: "4px",
    fontSize: "16px",
  },
  linkContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "20px",
  },
  registerText: {
    margin: 0,
  },
  registerLink: {
    textDecoration: "none",
    color: "#007BFF",
    fontWeight: "bold",
  },
  button: {
    padding: "12px",
    backgroundColor: "#007BFF",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    fontSize: "16px",
    cursor: "pointer",
    transition: "background-color 0.3s",
  },
};

export default Register;
