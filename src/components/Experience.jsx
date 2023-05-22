import React from "react";
import 'tailwindcss/tailwind.css';

const Experience = () => {
  const jobExperiences = [
    {
      title: "Job Title 1",
      company: "Company 1",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      timePeriod: "May 2018 - July 2019"
    },
    {
      title: "Job Title 1",
      company: "Company 1",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      timePeriod: "May 2018 - July 2019"
    },    
    {
      title: "Job Title 1",
      company: "Company 1",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      timePeriod: "May 2018 - July 2019"
    },
    {
      title: "Job Title 1",
      company: "Company 1",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      timePeriod: "May 2018 - July 2019"
    },
  ];

  return (
    <div id="education" className="bg-lightDesert p-8 rounded-lg shadow-md w-full mx-auto">
      <h2 className="text-4xl font-bold text-darkDesert mb-4">Experience</h2>
      <div className="resume-section-content grid grid-cols-1 sm:grid-cols-2 gap-4">
        {jobExperiences.map((experience, index) => (
          <div key={index} className="bg-lightDesert p-6 border border-darkDesert rounded-lg transition-transform hover:scale-105">
            <h3 className="text-xl font-semibold text-darkDesert mb-2">{experience.title}</h3>
            <p className="text-lg text-darkDesert mb-4">{experience.company}</p>
            <p className="text-darkDesert">{experience.description}</p>
            <p className="text-darkDesert mt-4">{experience.timePeriod}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
