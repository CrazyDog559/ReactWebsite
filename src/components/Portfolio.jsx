import React, { useState } from "react";
import { CrazyDogLogo } from "../assets";
import { disablePageScroll, enablePageScroll } from "scroll-lock";
import Footer from "./Footer";
import PhotoGrid from "./PhotoGrid"; // Import the updated PhotoGrid component

import img8296 from "../assets/Portfolio/Seattle/IMG_8296.jpg"; // photo 1
import img8351 from "../assets/Portfolio/Seattle/IMG_8351.jpg"; // photo 2
import img6060 from "../assets/Portfolio/Portraits/IMG_6060.jpg";

const Portfolio = ({ onNavigateBack, onNavigateToPortraits }) => {
  const [openNavigation, setOpenNavigation] = useState(false);

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

  // Sample photos array
  const photos = [
    { src: img6060, alt: "Photo 1" },
    { src: img8351, alt: "Photo 2" },
    { src: img8296, alt: "Photo 3" },
    { src: "path/to/photo4.jpg", alt: "Photo 4" },
    // Add more photos as needed
  ];

  // Handle the photo click and navigate to Portraits
  const handlePhotoSelect = (photo, index) => {
    if (index === 0) {
      // For now, assume you want to navigate to Portraits when the first photo is clicked
      onNavigateToPortraits(photo); // Pass the selected photo to the parent (App)
    } else {
      console.log(`Clicked on photo ${photo.alt}`);
    }
  };

  return (
    <div>
      <div>
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

      {/* Content */}
      <div className="pt-[5.25rem]">
        <PhotoGrid photos={photos} onPhotoSelect={handlePhotoSelect} />{" "}
        {/* Pass the photos array */}
      </div>

      <Footer />
    </div>
  );
};

export default Portfolio;
