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

import { SiVisualstudiocode, SiMongodb, SiTailwindcss } from "react-icons/si";

import { DiGithubBadge } from "react-icons/di";

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
          {[
            FaHtml5,
            FaCss3Alt,
            FaJsSquare,
            FaReact,
            FaNodeJs,
            FaNpm,
            SiVisualstudiocode,
            SiMongodb,
            DiGithubBadge,
            SiTailwindcss,
          ].map((Icon, i) => (
            <div
              className="text-5xl text-goldDesert transition-all duration-300 transform hover:scale-110 hover:text-darkDesert"
              key={i}
            >
              <Icon />
            </div>
          ))}
        </div>
        <div className="font-bold text-darkDesert subheading mb-3">
          Abilities
        </div>
        <ul className="mb-0 list-none">
          {[
            "Adaptability",
            "Agile Development",
            "Attention to Detail",
            "Communication",
            "Creativity",
            "Mobile-First",
            "Problem-solving",
            "Responsive Design",
            "Teamwork",
            "Time Management",
          ].map((capability) => (
            <li className="text-darkDesert mb-2">
              <FaCheck className="mr-2 text-goldDesert inline-block" />
              {capability}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
