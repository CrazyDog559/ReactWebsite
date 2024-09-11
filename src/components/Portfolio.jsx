import React, { useState } from "react";
import { CrazyDogLogo } from "../assets";
import { disablePageScroll, enablePageScroll } from "scroll-lock";
import Footer from "./Footer";
import PhotoGrid from "./PhotoGrid"; // Import the PhotoGrid component
import PhotoModal from "./PhotoModal"; // Import the PhotoModal component

import img8296 from "../assets/Portfolio/Seattle/IMG_8296.jpg"; // photo 1
import img8351 from "../assets/Portfolio/Seattle/IMG_8351.jpg"; // photo 2

const Portfolio = ({ onNavigateBack }) => {
  const [openNavigation, setOpenNavigation] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null); // State to manage the selected photo for the modal

  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
      enablePageScroll();
    } else {
      setOpenNavigation(true);
      disablePageScroll();
    }
  };

  const handleBackClick = () => {
    onNavigateBack();
    if (openNavigation) {
      enablePageScroll();
      setOpenNavigation(false);
    }
  };

  const handlePhotoClick = (photo) => {
    setSelectedPhoto(photo);
  };

  const handleCloseModal = () => {
    setSelectedPhoto(null);
  };

  // Sample photos array
  const photos = [
    { src: img8296, alt: "Photo 1" },
    { src: img8351, alt: "Photo 2" },
    { src: "path/to/photo3.jpg", alt: "Photo 3" },
    { src: "path/to/photo3.jpg", alt: "Photo 4" },
    { src: "path/to/photo3.jpg", alt: "Photo 5" },
    { src: "path/to/photo3.jpg", alt: "Photo 6" },
    { src: "path/to/photo3.jpg", alt: "Photo 7" },
    { src: "path/to/photo3.jpg", alt: "Photo 8" },
    { src: "path/to/photo3.jpg", alt: "Photo 9" },
    { src: "path/to/photo3.jpg", alt: "Photo 10" },
    { src: "path/to/photo3.jpg", alt: "Photo 11" },
    // Add more photos as needed
  ];

  return (
    <div>
      <div
        className={`fixed top-0 left-0 w-full z-50 border-b border-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm ${
          openNavigation ? "bg-n-8" : "bg-n-8/90 backdrop-blur-sm"
        }`}
      >
        <div className="flex items-center px-6 lg:px-10 xl:px-12 max-lg:py-4">
          <button
            onClick={handleBackClick}
            className="block w-[12rem] xl:mr-8"
            style={{
              background: "none",
              border: "none",
              padding: 0,
              cursor: "pointer",
            }}
          >
            <img
              src={CrazyDogLogo}
              width={190}
              height={40}
              alt="Back to Home"
            />
          </button>
        </div>
      </div>

      <div className="pt-[5.25rem]">
        {/* Offset for the fixed header */}
        <PhotoGrid
          photos={photos}
          onPhotoClick={handlePhotoClick} // Pass the click handler to PhotoGrid
        />
      </div>

      <Footer />

      {/* Render the PhotoModal if a photo is selected */}
      {selectedPhoto && (
        <PhotoModal photo={selectedPhoto} onClose={handleCloseModal} />
      )}
    </div>
  );
};

export default Portfolio;
