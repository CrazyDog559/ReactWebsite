import React, { useState } from "react";

import img6060 from "../assets/Portfolio/Portraits/IMG_6060.jpg";
import img6128 from "../assets/Portfolio/Portraits/IMG_6128.JPG";
import img6035 from "../assets/Portfolio/Portraits/IMG_6035.JPG";
import img6039 from "../assets/Portfolio/Portraits/IMG_6039.JPG";
import img6148 from "../assets/Portfolio/Portraits/IMG_6148.JPG";
import img6044 from "../assets/Portfolio/Portraits/IMG_6044.JPG";
import img6117 from "../assets/Portfolio/Portraits/IMG_6117.JPG";

const Portraits = ({ onNavigateBack }) => {
  // Static list of photos with titles and descriptions
  const photos = [
    {
      src: img6060,
      alt: "Photo 1",
      title: "Portrait 1",
      description: "This is a description for Portrait 1",
    },
    {
      src: img6128,
      alt: "Photo 2",
      title: "Portrait 2",
      description: "This is a description for Portrait 2",
    },
    {
      src: img6035,
      alt: "Photo 3",
      title: "Portrait 3",
      description: "This is a description for Portrait 3",
    },
    {
      src: img6039,
      alt: "Photo 4",
      title: "Portrait 4",
      description: "This is a description for Portrait 4",
    },
    {
      src: img6148,
      alt: "Photo 5",
      title: "Portrait 5",
      description: "This is a description for Portrait 5",
    },
    {
      src: img6044,
      alt: "Photo 6",
      title: "Portrait 6",
      description: "This is a description for Portrait 6",
    },
    {
      src: img6117,
      alt: "Photo 7",
      title: "Portrait 7",
      description: "This is a description for Portrait 7",
    },
    // Add more photos as needed
  ];

  const [selectedPhoto, setSelectedPhoto] = useState(null); // To hold the clicked photo

  // Handle photo selection and enlargement
  const handlePhotoSelect = (photo) => {
    setSelectedPhoto(photo);
  };

  // Handle closing the enlarged photo view
  const handleClose = () => {
    setSelectedPhoto(null);
  };

  return (
    <div className="p-8">
      <button
        onClick={onNavigateBack} // Navigates back to the previous page
        className="mb-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Back to Portfolio
      </button>

      <h2 className="text-3xl font-bold mb-4">Portraits</h2>

      {/* Photo Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {photos.map((photo, index) => (
          <div
            key={index}
            className="relative group h-48 md:h-56 lg:h-64 transform transition duration-500 hover:scale-105 hover:shadow-lg" // Hover Effect Added
            onClick={() => handlePhotoSelect(photo)} // Set the selected photo when clicked
          >
            <img
              src={photo.src}
              alt={photo.alt}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        ))}
      </div>

      {/* Enlarged Photo View */}
      {selectedPhoto && (
        <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center">
          <div className="relative bg-gray-500/50 p-6 rounded-lg max-w-4xl w-full md:flex">
            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-2 right-2 bg-red-500 text-white p-2 rounded-full"
            >
              X
            </button>

            {/* Enlarged Image */}
            <div className="md:w-2/3">
              <img
                src={selectedPhoto.src}
                alt={selectedPhoto.alt}
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>

            {/* Photo Title and Description */}
            <div className="md:w-1/3 p-4">
              <h3 className="text-2xl font-semibold mb-4">
                {selectedPhoto.title}
              </h3>{" "}
              {/* Display photo title */}
              <p className="text-lg mb-2">
                <strong>Description:</strong> {selectedPhoto.description}
              </p>{" "}
              {/* Display photo description */}
              <p className="text-lg">
                <strong>Alt Text:</strong> {selectedPhoto.alt}
              </p>{" "}
              {/* Display alt text if needed */}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Portraits;
