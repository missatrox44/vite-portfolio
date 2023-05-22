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
        As a full-stack web developer with a foundation in science and education, I strive to engineer user-friendly applications with substantial impact. My scientific background instills in me a systematic, objective approach to problem-solving, a skill set honed during my Full Stack Web Development certification program at UT Austin's renowned boot camp. While I may not have all the answers readily available, my resourcefulness and meticulous attention to detail ensure the delivery of high-quality work. I'm eager to bring my adaptability and skill set to an inventive team, working together to craft sustainable web applications.
        </p>
        <p className="text-lg text-darkDesert mb-4 text-center">
        However, my passion extends beyond coding into the realm of music. For the past 20 years, I've been a dedicated trumpet player, still experiencing a thrill every time I step onto the stage. I find inspiration in classic maestros like Miles Davis, Dizzy Gillespie, Freddie Hubbard, Lee Morgan, and Clifford Brown, while my contemporary influences are too numerous to recount here. I have also volunteered as a private tutor, mentoring budding and intermediate trumpet enthusiasts.
        </p>
        <p className="text-lg text-darkDesert mb-4 text-center">
        When I take a break from the melodies and coding, I am an ardent lover of the outdoors and literature. From suspending upside-down from a tree to losing myself in a good book, I strive to make the most of my leisure time. Some of my most cherished adventures include visits to the awe-inspiring {" "}
          <a
            className="hover:text-goldDesert transition-colors duration-300"
            href="https://www.fs.usda.gov/recarea/stnf/recarea/?recid=6521"
          >
            Trinity Alps Wilderness
          </a>
          ,{" "}
          <a
            className="hover:text-goldDesert transition-colors duration-300"
            href="https://www.nps.gov/romo/index.htm"
          >
            Rocky Mountain National Park
          </a>
          , and{" "}
          <a
            className="hover:text-goldDesert transition-colors duration-300"
            href="https://www.nps.gov/arch/index.htm"
          >
            Arches National Park
          </a>
          .
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
