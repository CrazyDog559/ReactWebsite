import React from "react";

const Portfolio = ({ onNavigateBack }) => {
  return (
    <div className="portfolio-container">
      <button onClick={onNavigateBack} className="back-button">
        Back
      </button>
      <h2>Hello World</h2>
    </div>
  );
};

export default Portfolio;
