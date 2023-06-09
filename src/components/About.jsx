import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function About() {
  return (
    <div id="about">
      <div className="flex flex-col items-center bg-lightDesert p-8 md:mx-8 lg:mx-10">
        <img
          src="images/profile.jpg"
          alt="Your Name"
          className="rounded-full w-64 h-64 border-4 border-darkDesert object-cover mb-8"
        />
        <h1 className="text-4xl font-bold text-darkDesert mb-4">Sara Baqla</h1>
        <p className="text-lg text-darkDesert mb-4 text-center">
          As a science-loving, code-wielding full-stack web dev, I whip up
          user-friendly apps with serious impact. My systematic problem-solving
          skills were fine-tuned at UT Austin's web dev boot camp. I may not
          have all the answers upfront, but my resourcefulness and eye for
          detail guarantee top-notch results. Joining a creative crew to craft
          sustainable web apps sounds like a dream!
        </p>
        <p className="text-lg text-darkDesert mb-4 text-center">
          But wait, there's more! I'm not just a coding maestro; I'm also a
          trumpet virtuoso. For two decades, I've been blowing minds with my
          music, channeling the legends like Miles Davis and Dizzy Gillespie. I
          even share my wisdom as a trumpet tutor, shaping the next generation
          of brass warriors.
        </p>
        <p className="text-lg text-darkDesert mb-4 text-center">
          When I'm not jamming or coding, I'm an outdoor enthusiast and bookworm
          extraordinaire. From hanging out in trees to diving into captivating
          reads, I seize every moment. My most epic adventures?{" "}
          <a
            className="text-tealDesert hover:text-goldDesert transition-colors duration-300"
            href="https://www.fs.usda.gov/recarea/stnf/recarea/?recid=6521"
            target="_blank"
            rel="noopener noreferrer"
          >
            Trinity Alps Wilderness
          </a>
          ,{" "}
          <a
            className="text-tealDesert hover:text-goldDesert transition-colors duration-300"
            href="https://www.nps.gov/romo/index.htm"
            target="_blank"
            rel="noopener noreferrer"
          >
            Rocky Mountain National Park
          </a>
          , and{" "}
          <a
            className="text-tealDesert hover:text-goldDesert transition-colors duration-300"
            href="https://www.nps.gov/arch/index.htm"
            target="_blank"
            rel="noopener noreferrer"
          >
            Arches National Park
          </a>{" "}
          --pure bliss!
        </p>

        <p className="text-lg text-darkDesert mb-4 text-center">
          Let's make waves in the digital realm while grooving to life's sweet
          melodies.
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
