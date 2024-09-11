import React from "react";

const PhotoCard = ({ src, alt, onClick }) => {
  return (
    <div
      className="w-full relative pb-[75%] overflow-hidden bg-gray-200 rounded-lg cursor-pointer"
      onClick={onClick}
    >
      <img
        src={src}
        alt={alt}
        className="absolute top-0 left-0 w-full h-full object-cover rounded-lg"
      />
    </div>
  );
};

export default PhotoCard;
