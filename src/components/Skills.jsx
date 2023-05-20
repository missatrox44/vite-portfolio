import React from 'react';
import { FaCheck, FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaNpm } from 'react-icons/fa';

const Skills = () => {
  return (
    <div id="skills" className="bg-lightDesert p-8 rounded-lg shadow-md w-full max-w-md mx-auto">
      <div className="resume-section-content">
        <h2 className="text-4xl font-bold text-darkDesert mb-4">Skills</h2>
        <div className="subheading text-darkDesert mb-3 font-bold">Programming Languages & Tools</div>
        <ul className="list-none mb-0">
          {['Visual Studio Code', 'Git & Github', 'Command Line', 'MongoDB', 'MySQL', 'Apollo GraphQL'].map(skill => (
            <li className="mb-2 text-darkDesert">
              <FaCheck className="inline-block text-goldDesert mr-2" />
              {skill}
            </li>
          ))}
        </ul>
        <div className="grid grid-cols-3 gap-4 my-4">
          {[FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaNpm].map((Icon, i) => (
            <div className="text-4xl text-goldDesert" key={i}>
              <Icon />
            </div>
          ))}
        </div>
        <div className="subheading text-darkDesert mb-3 font-bold">Workflow</div>
        <ul className="list-none mb-0">
          {['Mobile-First, Responsive Design', 'Agile Development'].map(workflow => (
            <li className="mb-2 text-darkDesert">
              <FaCheck className="inline-block text-goldDesert mr-2" />
              {workflow}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Skills;
