import React from "react";
import Hero from "../Components/Hero";
import HelpfulResources from "../Components/Resources";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleRegister = () => {
    navigate("/register");
  };

  return (
    <div style={styles.container}>
      <Hero
        title={"Welcome to the Amyloidosis Support Group of India"}
        imageUrl={"/public /hero.jpg"}
        onRegister={handleRegister} // Pass the handleRegister function here
      />

      <HelpfulResources />
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "20px",
    boxSizing: "border-box",
  },
};

export default Home;
