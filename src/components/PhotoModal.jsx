import React from "react";

const PhotoModal = ({ photo, onClose }) => {
  if (!photo) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 backdrop-blur-sm">
      <div className="relative p-4 max-w-3xl max-h-[100vh] pb-50">
        <img
          src={photo.src}
          alt={photo.alt}
          className="rounded-lg max-w-full max-h-full mb-4"
        />
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-white text-3xl font-bold"
        >
          &times;
        </button>
      </div>
    </div>
  );
};

export default PhotoModal;
