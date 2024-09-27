import React from "react";
import Hero from "../Components/Hero";
import Biography from "../Components/Biography";

const AboutUs = () => {
  return (
    <div style={styles.container}>
      <Hero
        title={"Learn More About Us | Amyloidosis Support Group of India"}
        imageUrl={"/public /about2.jpg"} // Corrected path
        style={styles.heroImage} // Apply specific style for the Hero image
      />
      <a href="https://amyloidosissupport.in" style={styles.link}>
        Visit our website to know more
      </a>
      <Biography imageUrl={"/public /about.jpg"} />
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "1200px", /* Set a maximum width for the container */
    margin: "0 auto", /* Center the container horizontally */
    padding: "10px", /* Add padding inside the container */
    boxSizing: "border-box", /* Ensure padding doesn't increase the container's width */
    textAlign: "center", /* Center align text and links */
  },
  link: {
    display: "inline-block", /* Make the link inline-block for centering */
    color: "#007BFF", /* Link color */
    textDecoration: "none", /* Remove underline */
    fontSize: "2.5rem", /* Adjust font size as needed */
    margin: "-60px",
  },
  heroImage: {
    width: "100%", /* Adjust width to fit the container */
    maxWidth: "400px", /* Set a maximum width for the image */
    height: "auto", /* Maintain aspect ratio */
    borderRadius: "8px", /* Optional: Adds rounded corners */
    margin: "0 auto", /* Center the image horizontally */
    display: "block", /* Ensure the image is displayed as a block element */
  },
};

export default AboutUs;
