import React from "react";
import { CrazyDogLogo } from "../assets";
import Footer from "./Footer";
import PhotoGrid from "./PhotoGrid"; // Import the updated PhotoGrid component

import img8296 from "../assets/Portfolio/Seattle/IMG_8296.jpg"; // photo 1
import img8351 from "../assets/Portfolio/Seattle/IMG_8351.jpg"; // photo 2
import img6060 from "../assets/Portfolio/Portraits/IMG_6060.jpg";

const Portfolio = ({ onNavigateBack, onNavigateToPortraits }) => {
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
      onNavigateToPortraits(photo); // Pass the selected photo to the parent (App)
    } else {
      console.log(`Clicked on photo ${photo.alt}`);
    }
  };

  return (
    <div>
      {/* Thicker Header with Vertically Centered Back Button */}
      <div className="fixed top-0 left-0 w-full z-50 border-b border-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm h-[5rem]">
        <div className="flex items-center h-full px-6 lg:px-10 xl:px-12">
          {/* Vertically Centered Back Button */}
          <button
            onClick={onNavigateBack}
            className="block w-[12rem]"
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

      {/* Content with header offset */}
      <div className="pt-[7rem] p-8">
        <PhotoGrid photos={photos} onPhotoSelect={handlePhotoSelect} />
      </div>

      <Footer />
    </div>
  );
};

export default Portfolio;
