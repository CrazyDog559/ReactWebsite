import React from "react";

const Portraits = ({ photo, onNavigateBack }) => {
  if (!photo) {
    return <div>No photo selected</div>;
  }

  return (
    <div className="p-8">
      <button
        onClick={onNavigateBack} // Navigates back to the previous page
        className="mb-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Back to Portfolio
      </button>
      <h2 className="text-3xl font-bold mb-4">Photo Details</h2>
      <img src={photo.src} alt={photo.alt} className="rounded-lg max-w-full" />
      <p className="mt-4">Description: {photo.alt}</p>
    </div>
  );
};

export default Portraits;
