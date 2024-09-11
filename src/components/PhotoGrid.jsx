import React from "react";
import PhotoCard from "./PhotoCard"; // Ensure this import path is correct

const PhotoGrid = ({ photos, onPhotoClick }) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 p-4">
      {photos.map((photo, index) => (
        <PhotoCard
          key={index}
          src={photo.src}
          alt={photo.alt}
          onClick={() => onPhotoClick(photo)} // Pass the click event to the handler
        />
      ))}
    </div>
  );
};

export default PhotoGrid;
