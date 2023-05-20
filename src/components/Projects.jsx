import React, { useState } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import Modal from 'react-modal';

const projects = [
  {
    title: "Project 1",
    description: "This is a description of Project 1.",
    thumbnail: "project1-thumbnail.jpg",
    github: "https://github.com/yourusername/project1",
    deployed: "https://www.project1.com",
  },
  {
    title: "Project 1",
    description: "This is a description of Project 1.",
    thumbnail: "project1-thumbnail.jpg",
    github: "https://github.com/yourusername/project1",
    deployed: "https://www.project1.com",
  },
  {
    title: "Project 1",
    description: "This is a description of Project 1.",
    thumbnail: "project1-thumbnail.jpg",
    github: "https://github.com/yourusername/project1",
    deployed: "https://www.project1.com",
  },
  {
    title: "Project 1",
    description: "This is a description of Project 1.",
    thumbnail: "project1-thumbnail.jpg",
    github: "https://github.com/yourusername/project1",
    deployed: "https://www.project1.com",
  },
  {
    title: "Project 1",
    description: "This is a description of Project 1.",
    thumbnail: "project1-thumbnail.jpg",
    github: "https://github.com/yourusername/project1",
    deployed: "https://www.project1.com",
  },

];

const ProjectCard = ({ project }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  
  return (
    <div className="relative group">
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
        className="flex items-center justify-center p-8 bg-lightDesert rounded-lg shadow-lg"
        overlayClassName="fixed inset-0 bg-darkDesert opacity-70"
      >
        <div className="w-full max-w-xl">
          <h2 className="text-darkDesert text-3xl font-bold mb-4">{project.title}</h2>
          <p className="text-darkDesert mb-4">{project.description}</p>
          <div className="flex justify-between items-center">
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="mx-2 text-darkDesert hover:text-goldDesert transition-colors duration-300">
              <FaGithub size={32} />
            </a>
            <a href={project.deployed} target="_blank" rel="noopener noreferrer" className="mx-2 text-darkDesert hover:text-goldDesert transition-colors duration-300">
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
    <div id='projects' className="p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project, index) => (
        <ProjectCard key={index} project={project} />
      ))}
    </div>
  );
}
