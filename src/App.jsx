import React, { useState } from "react";
import ButtonGradient from "./assets/svg/ButtonGradient";
import Benefits from "./components/Benefits";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Features";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Portfolio from "./components/Portfolio";
import AboutMe from "./components/AboutMe";
import Portraits from "./components/Portraits";

const App = () => {
  const [currentPage, setCurrentPage] = useState("home");
  const [selectedPhoto, setSelectedPhoto] = useState(null); // To hold the selected photo

  const handleNavigateToPortraits = (photo) => {
    setSelectedPhoto(photo); // Set the selected photo
    setCurrentPage("portraits"); // Navigate to the Portraits page
  };

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return (
          <>
            <Home />
            <Services />
            <Benefits onNavigate={setCurrentPage} />
            <Contact />
            <Footer />
          </>
        );
      case "portfolio":
        return (
          <Portfolio
            onNavigateBack={() => setCurrentPage("home")}
            onNavigateToPortraits={handleNavigateToPortraits} // Pass the photo selection function
          />
        );
      case "aboutMe":
        return <AboutMe onNavigateBack={() => setCurrentPage("home")} />;
      case "portraits":
        return (
          <Portraits
            photo={selectedPhoto} // Pass the selected photo as a prop
            onNavigateBack={() => setCurrentPage("portfolio")} // Navigate back to the portfolio
          />
        );
      default:
        return null;
    }
  };

  return (
    <>
      {/* Render the Header only when it's NOT the portraits or portfolio page */}
      {currentPage !== "portraits" && currentPage !== "portfolio" && (
        <Header onNavigate={setCurrentPage} />
      )}
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        {renderPage()}
      </div>

      <ButtonGradient />
    </>
  );
};

export default App;
