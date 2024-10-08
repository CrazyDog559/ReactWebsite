import React from "react";

const PhotoGrid = ({ photos, onPhotoSelect }) => {
  // Function to get hover text based on index (optional)
  const getHoverText = (index) => {
    switch (index) {
      case 0:
        return "Portraits";
      case 1:
        return "Landscapes";
      case 2:
        return "Travel";
      case 3:
        return "Videos";
      default:
        return null;
    }
  };

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {photos.map((photo, index) => (
        <div
          key={index}
          className="relative group h-48 md:h-56 lg:h-64" // Set a fixed height for grid items
          onClick={() => onPhotoSelect(photo, index)} // Pass the clicked photo to parent
        >
          <img
            src={photo.src}
            alt={photo.alt}
            className="w-full h-full object-cover rounded-lg" // Ensure the image fills the container
          />
          {/* Hover overlay */}
          {getHoverText(index) && (
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-white text-lg font-semibold">
                {getHoverText(index)}
              </span>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default PhotoGrid;
