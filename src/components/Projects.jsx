import React, { useState } from "react";
import { FaGithub, FaExternalLinkAlt, FaTimesCircle } from "react-icons/fa";
import Modal from "react-modal";
import projects from "../constants/projects.json";

const ProjectModal = ({ project, isOpen, closeModal }) => (
  <Modal
    isOpen={isOpen}
    onRequestClose={closeModal}
    className="fixed inset-0 z-50 flex items-center justify-center p-6"
    overlayClassName="bg-black bg-opacity-50 transition-opacity duration-500 ease-out"
  >
    <div className="bg-white p-6 rounded-lg shadow-2xl transform transition-transform duration-500 ease-out space-y-4 sm:space-y-0  max-w-md">
      <button
        onClick={closeModal}
        className="absolute top-2 right-2 text-darkDesert hover:text-goldDesert"
      >
        <FaTimesCircle size={32} />
      </button>

      <div>
        <h3 className="text-darkDesert text-2xl sm:text-3xl font-bold mb-4">
          {project.title}
        </h3>
        <p className="text-darkDesert mb-4">{project.description}</p>
        <p className="text-darkDesert font-bold mb-4">{project.date}</p>
        <div className="flex justify-between items-center">
          {project.github ? (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="mx-2 text-darkDesert hover:text-goldDesert transition-colors duration-300"
            >
              <FaGithub size={32} />
            </a>
          ) : null}
          <a
            href={project.deployed}
            target="_blank"
            rel="noopener noreferrer"
            className="mx-2 text-darkDesert hover:text-goldDesert transition-colors duration-300"
          >
            <FaExternalLinkAlt size={32} />
          </a>
        </div>
      </div>
    </div>
  </Modal>
);

// move ProjectCard outside component so modalIsOpen does not trigger entire component to re-render
const ProjectCard = ({ project, openModal }) => (
  <div className="relative group">
    <img
      src={project.thumbnail}
      alt={project.title}
      className="w-full h-64 object-cover rounded-lg shadow-md"
    />
    <div className="absolute inset-0 bg-darkDesert bg-opacity-70 flex items-center justify-center rounded-lg shadow-md opacity-0 group-hover:opacity-100 transition-all duration-500">
      <h1 className="text-lightDesert text-2xl md:text-3xl font-bold">
        {project.title}
      </h1>
    </div>
    <button onClick={openModal} className="absolute inset-0 cursor-pointer">
      <span className="sr-only">Open details for {project.title}</span>
    </button>
  </div>
);

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => setSelectedProject(project);
  const closeModal = () => setSelectedProject(null);

  return (
    <div
      id="projects"
      className="flex flex-col items-center p-8 bg-lightDesert"
    >
      <h2 className="text-4xl font-bold text-darkDesert mb-4">Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            openModal={() => openModal(project)}
          />
        ))}
      </div>
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          isOpen={!!selectedProject}
          closeModal={closeModal}
        />
      )}
    </div>
  );
}
