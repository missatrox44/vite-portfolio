import React, { useState } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import Modal from "react-modal";

const projects = [
  {
    title: "Baes",
    description:
      "Baes is a comprehensive application built on the MERN stack, designed with the aim of enhancing personal relationships. It enables users to maintain and manage crucial information about their significant contacts. With Baes, users can set up an account, modify their profiles, forge connections, and record customized notes about their interactions and relationships.",
    thumbnail: "baes.png",
    github: "https://github.com/missatrox44/baesii",
    deployed: "https://loversnotfighters.herokuapp.com/",
    date: "September 2022",
  },
  {
    title: "Git Me There",
    description:
      "Git Me There is a user-friendly web application, crafted using HTML, CSS, JavaScript, and leveraging the power of third-party APIs. This application serves as a one-stop solution for planning transportation logistics for upcoming journeys within any U.S. city. By entering their destination, users are provided with walking and biking scores, as well as a list of nearby restaurants. For destinations with a walking score below 50, the application conveniently presents an option to book an Uber ride, ensuring an effortless travel experience.",
    thumbnail: "git_me_there.png",
    github: "https://missatrox44.github.io/git-me-there",
    deployed: "https://github.com/missatrox44/git-me-there",
    date: "July 2022",
  },
  {
    title: "Fact or Fiction",
    description:
      "Fact or Fiction is a dynamic full-stack application offering users an engaging gaming experience. The game involves discerning whether given laws or headlines are authentic or fabricated. Developed using Handlebars.js, Express.js, and Sequelize, the project employs Bootstrap for styling, ensuring a sleek and intuitive user interface.",
    thumbnail: "fact_or_fiction.png",
    github: "https://github.com/missatrox44/Fact-Fiction",
    deployed: "https://factorfiction.herokuapp.com",
    date: "August 2022",
  },
  {
    title: "OHS Broncho Band",
    description:
      "This project involved a comprehensive refactoring of the Odessa High School Broncho Band's website. It was redesigned to be mobile responsive, while also updating images and links for a more appealing and user-friendly experience. New pages were added, working in close collaboration with the band director to ensure that the final design echoed her vision and faithfully represented the values of the OHS Broncho Band. The website was expertly crafted using tools from WiX and continues to be a work in progress, reflecting the ever-evolving spirit of the band program.",
    thumbnail: "odessa_band_screenshot.png",
    deployed: "https://www.odessaband.org/",
    date: "October 2022",
  },
  {
    title: "Love Thy Selfie",
    description:
      "Love Thy Selfie is an intuitive, mobile-first React application designed to digitally transform a local photo booth business. Embodying the spirit of 'Love Thy Selfie', this platform offers users a comprehensive overview of the diverse services provided, including vivid picture examples, and authentic customer reviews. It also showcases the geographic service areas to help customers understand their reach. One of the key features is a seamlessly integrated contact form powered by Email.js, enabling customers to easily inquire about booking opportunities. With its user-friendly interface and responsive design, the Love Thy Selfie website effectively brings the unique essence of the photo booth experience online, and at the fingertips of potential customers.",
    thumbnail: "love_thy_selfie.png",
    github: "https://github.com/missatrox44/love-thy-selfie",
    deployed: "https://love-thy-selfie.vercel.app/",
    date: "May 2022",
  },
];

const ProjectCard = ({ project }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <div className="relative group ">
      <img
        src={project.thumbnail}
        alt={project.title}
        className="w-full h-64 object-cover rounded-lg shadow-md"
      />
      <div className="absolute inset-0 bg-darkDesert bg-opacity-70 flex items-center justify-center rounded-lg shadow-md opacity-0 group-hover:opacity-100 transition-all duration-500">
        <h1 className="text-lightDesert text-2xl font-bold">{project.title}</h1>
      </div>
      <button
        onClick={() => setModalIsOpen(true)}
        className="absolute inset-0 cursor-pointer"
      >
        <span className="sr-only">Open details for {project.title}</span>
      </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        className="flex items-center justify-center p-8 bg-white rounded-lg shadow-lg"
        overlayClassName="fixed inset-0 bg-black opacity-90 flex items-center justify-center"
      >
        <div className="w-full max-w-xl bg-white p-6 rounded-lg text-black">
          <h2 className="text-2xl font-bold mb-4">{project.title}</h2>
          <p className="mb-4">{project.description}</p>
          <p className="mb-4">{project.date}</p>
          <div className="flex justify-between items-center">
            {project.github ? (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="mx-2 hover:text-blue-500 transition-colors duration-300"
              >
                <FaGithub size={32} />
              </a>
            ) : null}
            <a
              href={project.deployed}
              target="_blank"
              rel="noopener noreferrer"
              className="mx-2 hover:text-blue-500 transition-colors duration-300"
            >
              <FaExternalLinkAlt size={32} />
            </a>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default function Projects() {
  return (
    <div
      id="projects"
      className="p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
    >
      {projects.map((project, index) => (
        <ProjectCard key={index} project={project} />
      ))}
    </div>
  );
}
