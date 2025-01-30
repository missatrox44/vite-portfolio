import React, { useState } from "react";
import { FaGithub, FaExternalLinkAlt, FaTimesCircle } from "react-icons/fa";
import Modal from "react-modal";
import { useTrail, useSpring, animated } from "react-spring";
import projects from "../constants/projects.json";

const ProjectModal = ({ project, isOpen, closeModal }) => (
  <Modal
    isOpen={isOpen}
    onRequestClose={closeModal}
    className="fixed inset-0 z-50 flex items-center justify-center p-6"
    overlayClassName="bg-black bg-opacity-50 transition-opacity duration-500 ease-out"
  >
    <div className="bg-white p-6 rounded-lg shadow-2xl transform transition-transform duration-500 ease-out space-y-4 sm:space-y-0  max-w-md max-h-[80vh] overflow-y-auto">
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
const ProjectCard = ({ project, openModal }) => {
  // Enhance card hover effect
  const [hovered, setHovered] = useState(false);
  const hoverProps = useSpring({
    transform: hovered ? "scale(1.05)" : "scale(1)",
  });

  return (
    <animated.div
      style={hoverProps}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative group"
    >
      <div className="relative group">
        <img
          src={project.thumbnail}
          alt={project.title}
          className="w-full h-64 object-cover rounded-lg shadow-md"
        />
        <div className="absolute inset-0 bg-darkDesert bg-opacity-70 flex items-center justify-center rounded-lg shadow-md opacity-0 group-hover:opacity-100 transition-all duration-500">
          <h1 className="text-lightDesert text-center text-sm md:text-2xl lg:text-3xl truncate w-11/12 md:w-10/12 font-bold">
            {project.title}
          </h1>
        </div>
        <button onClick={openModal} className="absolute inset-0 cursor-pointer">
          <span className="sr-only">Open details for {project.title}</span>
        </button>
      </div>
    </animated.div>
  );  
};

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  // Staggered card load animation
  const trails = useTrail(projects.length, {
    opacity: 1,
    transform: "translateY(0px)",
    from: { opacity: 0, transform: "translateY(20px)" },
    delay: 200,
    config: { mass: 5, tension: 2000, friction: 200 },
  });

  const openModal = (project) => setSelectedProject(project);
  const closeModal = () => setSelectedProject(null);

  // Modal fade-in and scale effect
  const modalAnimation = useSpring({
    opacity: selectedProject ? 1 : 0,
    transform: selectedProject ? "scale(1)" : "scale(0.9)",
    config: { tension: 150, friction: 20 },
  });

  const reversedProjects = [...projects].reverse();

  return (
    <div
      id="projects"
      className="container mx-auto flex flex-col items-center p-8 bg-lightDesert mt-12 min-h-screen"
    >
      <h2 className="text-4xl font-bold text-darkDesert mb-4">Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
        {trails.map((props, index) => (
          <animated.div key={reversedProjects[index].id} style={props}>
            <ProjectCard
              project={reversedProjects[index]}
              openModal={() => openModal(reversedProjects[index])}
            />
          </animated.div>
        ))}
      </div>
      {selectedProject && (
        <animated.div style={modalAnimation}>
          <ProjectModal
            project={selectedProject}
            isOpen={!!selectedProject}
            closeModal={closeModal}
          />
        </animated.div>
      )}
    </div>
  );
}
