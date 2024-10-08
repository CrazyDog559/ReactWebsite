import React from "react";
import { benefits } from "../constants";
import Heading from "./Heading";
import Section from "./Section";
import Arrow from "../assets/svg/Arrow";
import { GradientLight } from "./design/Benefits";
import ClipPath from "../assets/svg/ClipPath";

const Benefits = ({ onNavigate }) => {
  const handleExploreMore = (id) => {
    if (id === "0") {
      window.open("https://www.instagram.com/project_render/");
    } else if (id === "1") {
      window.open("https://www.youtube.com/@CrazyDogPlayz");
    } else if (id === "2") {
      window.open("https://www.youtube.com/@skoolmadeez8251");
    } else if (id == "3") {
      window.open("https://github.com/CrazyDog559");
    } else if (id === "4") {
      onNavigate("portfolio");
    } else if (id === "5") {
      onNavigate("aboutMe");
    } else {
      console.log(`Explore more for item ${id}`);
    }
  };

  const getButtonLabel = (id) => {
    switch (id) {
      case "4":
        return "View Portfolio";
      case "5":
        return "Learn About Me";
      default:
        return "Explore more";
    }
  };

  return (
    <Section id="features">
      <div className="container relative z-2">
        <Heading className="md:max-w-md lg:max-w-2xl" title="My Work" />

        <div className="flex flex-wrap gap-10 mb-10">
          {benefits.map((item) => (
            <div
              className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem]"
              style={{ backgroundImage: `url(${item.backgroundUrl})` }}
              key={item.id}
            >
              <div className="relative z-2 flex flex-col min-h-[22rem] p-[2.4rem] pointer-events-auto">
                <h5 className="h5 mb-5">{item.title}</h5>
                <p className="body-2 mb-6 text-n-3">{item.text}</p>
                <div className="flex items-center mt-auto">
                  <img
                    src={item.iconUrl}
                    width={48}
                    height={48}
                    alt={item.title}
                  />
                  <button
                    onClick={() => handleExploreMore(item.id)}
                    className="ml-auto font-code text-xs font-bold text-n-1 uppercase tracking-wider bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
                  >
                    {getButtonLabel(item.id)}
                    <Arrow className="inline-block ml-2" />
                  </button>
                </div>
              </div>

              {item.light && <GradientLight />}

              <div
                className="absolute inset-0.5 bg-n-8 pointer-events-none"
                style={{ clipPath: "url(#benefits)" }}
              >
                <div className="absolute inset-0 opacity-0 transition-opacity hover:opacity-10 pointer-events-none">
                  {item.imageUrl && (
                    <img
                      src={item.imageUrl}
                      width={380}
                      height={362}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
              </div>

              <ClipPath />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Benefits;
