import React from "react";
import { CrazyDogLogo } from "../assets";
import Footer from "./Footer";

const AboutMe = ({ onNavigateBack }) => {
  return (
    <div>
      <div
        className={`fixed top-0 left-0 w-full z-50 border-b border-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm`}
      >
        <div className="flex items-center px-6 lg:px-10 xl:px-12 max-lg:py-4">
          <button
            onClick={onNavigateBack}
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

      <div className="pt-[5.25rem] p-8">
        <h2 className="text-3xl font-bold mb-4">About Me</h2>
        <p className="text-lg">
          Hi I am Drew Wan studying computer engineering at UCLA. I am still
          working on my website but I hope you enjoy. I like to play volleyball,
          baseball, video games, and rock climb. I am passionate about video
          editing and photography which grew my interest in computers. I
          currently volunteer at a local church in the youth ministry. I
        </p>
        {/* Add more content about you as needed */}
      </div>

      <Footer />
    </div>
  );
};

export default AboutMe;
