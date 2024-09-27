import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const HelpfulResources = () => {
  const resourcesArray = [
    {
      name: "Patient Support Groups",
      imageUrl: "/public /support-groups.jpg", // Adjusted path
      link: "https://www.amyloidosissupport.org/",
      caption: "Find support groups for patients.",
    },
    {
      name: "Medical Research",
      imageUrl: "public /research.jpg", // Adjusted path
      link: "https://arci.org/",
      caption: "Explore the latest medical research.",
    },
    {
      name: "Financial Assistance",
      imageUrl: "public /financial-assistance.jpg", // Adjusted path
      link: "https://www.panfoundation.org/disease-funds/amyloidosis/",
      caption: "Get information on financial aid options.",
    },
    {
      name: "Treatment Options",
      imageUrl: "public /treatment-options.jpg", // Adjusted path
      link: "https://www.mayoclinic.org/diseases-conditions/amyloidosis/diagnosis-treatment/drc-20353183",
      caption: "Learn about different treatment options.",
    },
    {
      name: "Lifestyle Tips",
      imageUrl: "public /lifestyle-tips.jpg", // Adjusted path
      link: "https://arci.org/resource/amyloidosis-and-nutrition/",
      caption: "Tips for managing your lifestyle.",
    },
    {
      name: "Patient Stories",
      imageUrl: "public /patient-stories.jpg", // Adjusted path
      link: "https://arci.org/resources-category/patient-stories/",
      caption: "Read inspiring stories from patients.",
    },
    {
      name: "Educational Material",
      imageUrl: "public /education-material.jpg", // Adjusted path
      link: "hhttps://my.clevelandclinic.org/health/diseases/23398-amyloidosis",
      caption: "Access educational resources.",
    },
    {
      name: "Clinical Trials",
      imageUrl: "public /clinical-trials.jpg", // Adjusted path
      link: "https://www.mayo.edu/research/clinical-trials/diseases-conditions/amyloidosis/",
      caption: "Find information on clinical trials.",
    },
  ];

  const responsive = {
    extraLarge: { breakpoint: { max: 3000, min: 1324 }, items: 4 },
    large: { breakpoint: { max: 1324, min: 1005 }, items: 3 },
    medium: { breakpoint: { max: 1005, min: 700 }, items: 2 },
    small: { breakpoint: { max: 700, min: 0 }, items: 1 },
  };

  return (
    <div className="container resources">
      <h2>Helpful Resources</h2>
      <Carousel responsive={responsive} removeArrowOnDeviceType={["tablet", "mobile"]}>
        {resourcesArray.map((resource, index) => (
          <a
            key={index}
            href={resource.link}
            target="_blank"
            rel="noopener noreferrer"
            className="card"
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <img src={resource.imageUrl} alt={resource.name} />
            <div className="card-content">
              <div className="resource-name">{resource.name}</div>
              <p className="resource-caption">{resource.caption}</p>
            </div>
          </a>
        ))}
      </Carousel>
    </div>
  );
};

export default HelpfulResources;
