import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function About() {
  return (
    <div id="about">
      <div className="flex flex-col items-center bg-lightDesert p-8">
        <img
          src="profile.jpg"
          alt="Your Name"
          className="rounded-full w-48 h-48 border-4 border-darkDesert object-cover mb-8"
        />
        <h1 className="text-4xl font-bold text-darkDesert mb-4">Sara Baqla</h1>
        <p className="text-lg text-darkDesert mb-4 text-center">
          I am a full-stack web developer leveraging a science and education
          background. My goal is to create user friendly applications that have
          high impact. My science background allows me to have an objective
          approach to problem solving. I earned a certificate in Full Stack Web
          Development from a boot camp hosted by UT Austin. I am a highly
          adaptable individual who pays great attention to detail. I may not
          know all the answers but am resourceful and can produce quality work.
          I am looking forward to adding my skills to an innovative team with
          the goal of creating maintainable applications for the web.
        </p>
        <div className="flex justify-center items-center">
        <a
            href="https://github.com/missatrox44"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-2 text-darkDesert hover:text-goldDesert transition-colors duration-300"
          >
            <FaGithub size={32} />
          </a>
          <a
            href="https://www.linkedin.com/in/sara-baqla/"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-2 text-darkDesert hover:text-goldDesert transition-colors duration-300"
          >
            <FaLinkedin size={32} />
          </a>
     
        </div>
      </div>
    </div>
  );
}
