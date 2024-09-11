import React, { useState } from "react";
import ButtonGradient from "./assets/svg/ButtonGradient";
import Benefits from "./components/Benefits";
import Collaboration from "./components/Collaboration";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Hero";
//import Pricing from "./components/Pricing";
import Roadmap from "./components/Roadmap";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Portfolio from "./components/Portfolio";
import AboutMe from "./components/AboutMe"; // Import the AboutMe component

const App = () => {
  const [currentPage, setCurrentPage] = useState("home");

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return (
          <>
            <Home />
            <Benefits onNavigate={setCurrentPage} />
            <Collaboration />
            <Services />
            <Roadmap />
            <Contact />
            <Footer />
          </>
        );
      case "portfolio":
        return <Portfolio onNavigateBack={() => setCurrentPage("home")} />;
      case "aboutMe":
        return <AboutMe onNavigateBack={() => setCurrentPage("home")} />;
      default:
        return null;
    }
  };

  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        {currentPage !== "portfolio" && currentPage !== "aboutMe" && (
          <Header onNavigate={setCurrentPage} />
        )}
        {renderPage()}
      </div>

      <ButtonGradient />
    </>
  );
};

export default App;
