import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaYoutube,
  FaFileAlt,
  FaBlog,
} from "react-icons/fa";
import landingImg from "/logo.svg";
import {
  GITHUB_URL,
  LINKEDIN_URL,
  YOUTUBE_URL,
  RESUME_URL,
  BLOG_URL,
} from "../constants";

export default function Home() {
  return (
    <div
      id="home"
      className="bg-lightDesert flex flex-col items-center justify-center min-h-screen"
    >
      <img
        className="w-fit mb-4"
        src={landingImg}
        alt="Trumpet with tentacle logo"
      />

      <div className="flex mt-2 space-x-6">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={GITHUB_URL}
          className="text-darkDesert hover:text-goldDesert transition-colors duration-300"
        >
          <FaGithub className="w-10 h-10" />
          <span className="sr-only">GitHub account</span>
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={LINKEDIN_URL}
          className="text-darkDesert hover:text-goldDesert transition-colors duration-300"
        >
          <FaLinkedin className="w-10 h-10" />
          <span className="sr-only">LinkedIn account</span>
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={YOUTUBE_URL}
          className="text-darkDesert hover:text-goldDesert transition-colors duration-300"
        >
          <FaYoutube className="w-10 h-10" />
          <span className="sr-only">YouTube Channel</span>
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={RESUME_URL}
          className="text-darkDesert hover:text-goldDesert transition-colors duration-300"
        >
          <FaFileAlt className="w-10 h-10" />
          <span className="sr-only">Resume</span>
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={BLOG_URL}
          className="text-darkDesert hover:text-goldDesert transition-colors duration-300"
        >
          <FaBlog className="w-10 h-10" />
          <span className="sr-only">Blog</span>
        </a>
      </div>
    </div>
  );
}
