import React, { useState } from "react";
import Modal from "react-modal";
import { FaTimesCircle } from "react-icons/fa";
import jobExperiences from "./jobExperiences.json";
import nonDevExperiences from "./nonDevExperience.json";

const Experience = () => {
  const [modalContent, setModalContent] = useState(null);

  return (
    <div
      id="experience"
      className="bg-lightDesert p-8 rounded-lg shadow-lg w-full mx-auto"
    >
      <h2 className="text-4xl font-bold text-darkDesert mb-4 text-center">
        Experience
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        {jobExperiences.map((experience, index) => (
          <div
            key={index}
            className="bg-lightDesert p-6 border-2 border-darkDesert rounded-lg shadow-md "
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
      <div className="text-darkDesert grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {nonDevExperiences.map((experience, index) => (
          <div
            key={index}
            onClick={() => setModalContent(experience)}
            className="bg-lightDesert p-6 border-2 border-darkDesert rounded-lg shadow-md transform transition-all duration-500 ease-in-out cursor-pointer hover:shadow-xl hover:scale-105"
          >
            <div className="flex flex-col items-center text-center">
              <img
                src={experience.img}
                alt={experience.title}
                className="h-24 w-auto mb-4 rounded-full"
              />
              <h2 className="text-2xl font-bold">{experience.title}</h2>
            </div>
          </div>
        ))}
      </div>
      <Modal
        isOpen={!!modalContent}
        onRequestClose={() => setModalContent(null)}
        className="fixed inset-0 z-50 flex items-center justify-center p-6"
        overlayClassName="bg-black bg-opacity-50 transition-opacity duration-500 ease-out"
      >
        <div className="bg-white p-6 rounded-lg shadow-2xl transform transition-transform duration-500 ease-out space-y-4 md:space-y-0 md:grid md:grid-cols-2 md:gap-4">
          <button
            onClick={() => setModalContent(null)}
            className="absolute top-2 right-2 text-darkDesert hover:text-goldDesert"
          >
            <FaTimesCircle size={32} />
          </button>
          <img
            src={modalContent?.img}
            alt={modalContent?.title}
            className="h-48 w-auto rounded-lg shadow-md md:h-auto"
          />
          <div>
            <h3 className="text-darkDesert text-2xl font-bold mb-4">
              {modalContent?.title}
            </h3>
            <p className="text-darkDesert mb-4">{modalContent?.company}</p>
            <p className="text-darkDesert mb-4">{modalContent?.description}</p>
            <p className="text-darkDesert font-bold">
              {modalContent?.timePeriod}
            </p>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Experience;
