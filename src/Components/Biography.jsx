import React from "react";

const Biography = ({ imageUrl }) => {
  return (
    <>
      <div className="container biography">
        <div className="banner">
          <img src={imageUrl} alt="whoweare" />
        </div>
        <div className="banner">
          <h3 style={styles.heading}>Who We Are</h3>
          <p style={styles.paragraph}>
            We are the Amyloidosis Support Group of India (ASGI), a dedicated organization running under the umbrella of Ram Dayalu Singh Sustainable Foundation committed to supporting patients diagnosed with Amyloidosis. Our mission is to provide resources, raise awareness, and offer a strong community for individuals and families affected by this rare disease. Through education, advocacy, and patient support initiatives, we aim to improve the quality of life for those battling Amyloidosis and foster collaboration among healthcare professionals, researchers, and patients.
          </p>
          <p style={styles.paragraphWithMargin}>Empowering Lives, Spreading Awareness, Building Hope.!</p>
          <h3 style={styles.headingWithMargin}>About Amyloidosis</h3>
          <p style={styles.paragraph}>
            Amyloidosis is a rare and serious condition caused by the buildup of abnormal proteins called amyloids in organs and tissues. These proteins misfold and deposit in various parts of the body, disrupting normal function. The disease can affect different organs, including the heart, kidneys, liver, and nervous system, leading to a wide range of symptoms depending on the organs involved.
            
            There are several types of Amyloidosis, including AL (light chain), AA (secondary), and hereditary forms. Diagnosis often requires a combination of blood tests, imaging, and tissue biopsy. Treatment varies based on the type and organs affected, with options ranging from medications to manage symptoms to more advanced therapies like chemotherapy or organ transplants. Early detection and specialized care are crucial for managing the disease effectively.
          </p>
        </div>
      </div>
    </>
  );
};

const styles = {
  heading: {
    marginTop:"20px",
    letterSpacing: "0.5px", /* Decreased letter spacing for headings */
    textAlign: "justify",  /* Justified alignment for headings */
  },
  headingWithMargin: {
    letterSpacing: "0.5px", /* Decreased letter spacing for headings */
    textAlign: "justify",  /* Justified alignment for headings */
    marginTop: "10px",    /* Space above the heading */
  },
  paragraph: {
    letterSpacing: "0.3px", /* Decreased letter spacing for paragraphs */
    textAlign: "justify",
  },
  paragraphWithMargin: {
    letterSpacing: "0.3px", /* Decreased letter spacing for paragraphs */
    textAlign: "justify",
    marginBottom: "40px", /* Space below the paragraph */
  },
  containerWithMargin: {
    marginBottom: "80px", /* Additional space below the Biography section */
  }
};

export default Biography;
