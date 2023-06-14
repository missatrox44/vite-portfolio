import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaNpm,
} from "react-icons/fa";
import { SiVisualstudiocode, SiMongodb, SiTailwindcss } from "react-icons/si";
import { DiGithubBadge } from "react-icons/di";

const skills = [
  { id: "html", Component: FaHtml5 },
  { id: "css", Component: FaCss3Alt },
  { id: "javascript", Component: FaJsSquare },
  { id: "react", Component: FaReact },
  { id: "node", Component: FaNodeJs },
  { id: "npm", Component: FaNpm },
  { id: "vscode", Component: SiVisualstudiocode },
  { id: "mongodb", Component: SiMongodb },
  { id: "github", Component: DiGithubBadge },
  { id: "tailwind", Component: SiTailwindcss },
];

export default function Skills() {
  return (
    <div
      id="skills"
      className="bg-lightDesert p-4 rounded-lg shadow-md w-full mx-auto"
    >
      <div className="resume-section-content text-center">
        <h2 className="text-4xl font-bold text-darkDesert mb-4">Expertise</h2>
        <div className="subheading text-darkDesert mb-3 font-bold">
          Programming Languages & Tools
        </div>
        <div className="grid grid-cols-4 gap-4 my-4 justify-items-center">
          {skills.map(({ id, Component }) => (
            <div
              className="text-5xl text-goldDesert transition-all duration-300 transform hover:scale-110 hover:text-darkDesert"
              key={id}
            >
              <Component />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
