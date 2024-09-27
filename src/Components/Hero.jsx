import React from "react";

// eslint-disable-next-line react/prop-types
const Hero = ({ title, imageUrl, onRegister }) => {
  return (
    <div className="hero container">
      <div className="banner">
        <h1 style={styles.title}>{title}</h1>
        <p style={styles.paragraph}>
          Empowering Amyloidosis patients with tools and resources to manage
          your health. Register or log in to access your personalized dashboard.
        </p>

        {/* CTA Section */}
        <section style={styles.ctaSection}>
          <h2 style={styles.ctaTitle}>
            Register to Add Your Amyloidosis History
          </h2>
          <p style={styles.ctaDescription}>
            Join our community to share your medical history and contribute to
            amyloidosis awareness.
          </p>
          <div style={styles.ctaButtons}>
            <button style={styles.registerButton} onClick={onRegister}>
              Register as a Patient
            </button>
          </div>
        </section>
      </div>

      <div className="banner">
        <img src={imageUrl} alt="hero" className="animated-image" />
        <span>
          <img src="/Vector.png" alt="vector" />
        </span>
      </div>
    </div>
  );
};

const styles = {
  title: {
    letterSpacing: "0.5px",
    marginBottom: "15px",
  },
  paragraph: {
    letterSpacing: "0.3px",
    marginBottom: "30px",
  },
  ctaSection: {
    textAlign: "center",
    marginBottom: "40px", // Adjust this margin as needed
    padding: "10px",
    backgroundColor: "#FFFFFF",
    borderRadius: "8px",
    boxShadow: "5px 10px 10px rgba(0, 0, 1, 0.3)",
    maxWidth: "500px",
    margin: "0 auto", // Center the CTA section
  },
  ctaTitle: {
    fontSize: "20px",
    fontWeight: "bold",
    marginBottom: "10px",
  },
  ctaDescription: {
    fontSize: "14px",
    color: "#555",
    marginBottom: "15px",
    letterSpacing: "0.3px",
  },
  ctaButtons: {
    display: "flex",
    justifyContent: "center",
  },
  registerButton: {
    padding: "10px 20px",
    fontSize: "16px",
    color: "#fff",
    backgroundColor: "#007BF1",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default Hero;
