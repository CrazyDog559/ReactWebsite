import React, { useState } from "react";
import Section from "./Section";
import { curve } from "../assets";
import Button from "./Button";

const Contact = () => {
  const [emailButtonText, setEmailButtonText] = useState("Email Me");
  const [phoneButtonText, setPhoneButtonText] = useState("Phone Me");

  const handleCopyEmail = (e) => {
    e.preventDefault();
    navigator.clipboard
      .writeText("drewkeithwan@gmail.com")
      .then(() => {
        setEmailButtonText("drewkeithwan@gmail.com");
        setTimeout(() => setEmailButtonText("Email Me"), 20000); // Reset text after 2 seconds
      })
      .catch((err) => {
        console.error("Failed to copy email: ", err);
      });
  };

  const handleCopyPhone = (e) => {
    e.preventDefault();
    navigator.clipboard
      .writeText("(858)-252-9944")
      .then(() => {
        setPhoneButtonText("(858)-252-9944");
        setTimeout(() => setPhoneButtonText("Phone Me"), 20000); // Reset text after 2 seconds
      })
      .catch((err) => {
        console.error("Failed to copy phone number: ", err);
      });
  };

  return (
    <Section className="pt-[12rem] -mt-[5.25rem] bg-n-8" id="contact">
      <div className="container mx-auto text-center">
        <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[3.875rem] md:mb-20 lg:mb-[6.25rem]">
          <h2 className="text-3xl font-semibold mb-5 inline-block relative text-white">
            Contact Me
            <img
              src={curve}
              className="absolute top-full left-0 w-full xl:-mt-2"
              width={624}
              height={28}
              alt="Curve"
            />
          </h2>
          <p className="body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8 text-white">
            Click to copy to clipboard
          </p>
          <div className="flex justify-center space-x-4">
            <Button onClick={handleCopyEmail}>{emailButtonText}</Button>
            <Button onClick={handleCopyPhone}>{phoneButtonText}</Button>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Contact;
