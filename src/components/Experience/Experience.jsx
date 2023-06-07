import React from "react";
import "tailwindcss/tailwind.css";
import jobExperiences from "./jobExperiences.json";
import nonDevExperiences from "./nonDevExperience.json";

const Experience = () => {
  
  return (
    <div
      id="experience"
      className="bg-lightDesert p-8 rounded-lg shadow-lg w-full mx-auto"
    >
      <h2 className="text-4xl font-bold text-darkDesert mb-4 text-center">
        Experience
      </h2>
      <div className="resume-section-content grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        {jobExperiences.map((experience, index) => (
          <div
            key={index}
            className="bg-lightDesert p-6 border-2 border-darkDesert rounded-lg shadow-md hover:border-4 hover:border-darkDesert transition-all duration-500 ease-in-out"
          >
            <div className="flex items-center mb-2">
              <h3 className="text-2xl font-bold text-darkDesert mr-4">
                {experience.title}
              </h3>
              <img
                src={experience.img}
                alt={experience.title}
                className="h-12 w-auto"
              />
            </div>
            <p className="text-xl text-darkDesert italic mb-4">
              {experience.company}
            </p>
            <p className="text-darkDesert">{experience.description}</p>
            <p className="text-darkDesert mt-4 font-bold">
              {experience.timePeriod}
            </p>
          </div>
        ))}
      </div>
      <h2 className="text-4xl font-bold text-darkDesert mb-4 text-center">
        Non Dev Experience
      </h2>
      <div className="resume-section-content grid grid-cols-1 sm:grid-cols-2 gap-4">
        {nonDevExperiences.map((experience, index) => (
          <div
            key={index}
            className="bg-lightDesert p-6 border-2 border-darkDesert rounded-lg shadow-md hover:border-4 hover:border-darkDesert transition-all duration-500 ease-in-out"
          >
            <div className="flex items-center mb-2">
              <h3 className="text-2xl font-bold text-darkDesert mr-4">
                {experience.title}
              </h3>
              <img
                src={experience.img}
                alt={experience.title}
                className="h-12 w-auto"
              />
            </div>
            <p className="text-xl text-darkDesert italic mb-4">
              {experience.company}
            </p>
            <p className="text-darkDesert hidden">{experience.description}</p>
            <p className="text-darkDesert mt-4 font-bold">
              {experience.timePeriod}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
