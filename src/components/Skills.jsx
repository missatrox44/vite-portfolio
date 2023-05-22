import React from "react";
import {
  FaCheck,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaNpm,
} from "react-icons/fa";

import { SiVisualstudiocode, SiMongodb } from "react-icons/si";

export default function Skills() {
  return (
    <div
      id="skills"
      className="bg-lightDesert p-4 rounded-lg shadow-md w-full mx-auto"
    >
      <div className="resume-section-content text-center">
        <h2 className="text-4xl font-bold text-darkDesert mb-4">Skills</h2>
        <div className="subheading text-darkDesert mb-3 font-bold">
          Programming Languages & Tools
        </div>
        <ul className="list-none mb-0 mx-auto">
          {[
            "Visual Studio Code",
            "Git & Github",
            "Command Line",
            "MongoDB",
            "MySQL",
            "Apollo GraphQL",
          ].map((skill) => (
            <li className="mb-2 text-darkDesert">
              <FaCheck className="inline-block text-goldDesert mr-2" />
              {skill}
            </li>
          ))}
        </ul>
        <div className="grid grid-cols-4 gap-4 my-4 justify-items-center">
          {[
            FaHtml5,
            FaCss3Alt,
            FaJsSquare,
            FaReact,
            FaNodeJs,
            FaNpm,
            SiVisualstudiocode,
            SiMongodb,
          ].map((Icon, i) => (
            <div
              className="text-5xl text-goldDesert transition-all duration-300 transform hover:scale-110 hover:text-darkDesert"
              key={i}
            >
              <Icon />
            </div>
          ))}
        </div>

        <div className="subheading text-darkDesert mb-3 font-bold">
          Workflow
        </div>
        <ul className="list-none mb-0">
          {["Mobile-First, Responsive Design", "Agile Development"].map(
            (workflow) => (
              <li className="mb-2 text-darkDesert">
                <FaCheck className="inline-block text-goldDesert mr-2" />
                {workflow}
              </li>
            )
          )}
        </ul>
      </div>
    </div>
  );
}
