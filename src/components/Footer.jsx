import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-darkDesert">
      <div className="flex flex-col items-center justify-center py-2 px-2 sm:flex-row sm:justify-between sm:py-4 sm:px-6">
        <span className="text-sm text-lightDesert sm:text-center">
          © {new Date().getFullYear().toString()}{" "}
          <a
            target="_blank"
            href="https://www.sarabaqla.dev/"
            className="hover:text-goldDesert transition-colors duration-300"
          >
            sarabaqla.dev
          </a>
        </span>
        <div className="flex mt-2 space-x-6">
          <a
            target="_blank"
            href="https://github.com/missatrox44"
            className="text-lightDesert hover:text-goldDesert transition-colors duration-300"
          >
            <FaGithub className="w-5 h-5" />
            <span className="sr-only">GitHub account</span>
          </a>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/sara-baqla/"
            className="text-lightDesert hover:text-goldDesert transition-colors duration-300"
          >
            <FaLinkedin className="w-5 h-5" />
            <span className="sr-only">LinkedIn account</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
