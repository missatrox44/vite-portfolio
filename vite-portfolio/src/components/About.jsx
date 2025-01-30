import React, { memo, useState, useEffect } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { GITHUB_URL, LINKEDIN_URL, PERPLEXITY_URL } from "../constants/index";
import { useSpring, animated, config } from "react-spring";
import { SiPerplexity } from "react-icons/si";

const Anchor = ({ href, children }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="mx-2 text-darkDesert hover:text-goldDesert transition-colors duration-300"
    aria-label={`Link to ${href}`}
  >
    {children}
  </a>
);

const About = () => {
  // Fade-in effect
  const fadeIn = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: config.slow,
  });

  // Springy effect on image hover
  const [scale, setScale] = useState(1);
  const springProps = useSpring({
    transform: `scale(${scale})`,
    config: config.wobbly,
  });

  // Slide-up effect
  const slideUp = useSpring({
    transform: "translate3d(0,0px,0)",
    from: { transform: "translate3d(0,40px,0)" },
    delay: 200,
  });

  return (
    <animated.div
      style={fadeIn}
      id="about"
      className="container mx-auto flex flex-col items-center justify-center bg-lightDesert min-h-screen"
    >
      <animated.img
        style={{ ...springProps }}
        src="images/profile.jpg"
        alt="Sara"
        className="rounded-full w-64 h-64 border-4 border-darkDesert object-cover mb-8 mt-20"
        onMouseEnter={() => setScale(1.1)}
        onMouseLeave={() => setScale(1)}
      />
      <animated.div style={slideUp}>
        <h1 className="text-4xl font-bold text-darkDesert mb-4 text-center px-8">
          Sara Baqla
        </h1>
        <p className="text-lg text-darkDesert mb-4 text-center px-8">
          As a science-loving, code-wielding full-stack web developer, I create user-friendly apps with serious impact. My systematic problem-solving skills were fine-tuned at UT Austin's web development boot camp. I'm resourceful and always staying up to date with the latest trends.
        </p>
        <p className="text-lg text-darkDesert mb-4 text-center px-8">
          But wait, there's more! I'm not just a coding maestro; I also play the trumpet! For two decades, I've performed with various groups across multiple genres, putting a smile on people's faces and a beat in their feet. Some of my heroes? Freddie Hubbard, Clifford Brown, Miles Davis, and Dizzy Gillespie. I've even shared my wisdom as a trumpet tutor, shaping the next generation of brass warriors.
        </p>
        <p className="text-lg text-darkDesert mb-4 text-center px-8">
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

        <p className="text-lg text-darkDesert mb-4 text-center px-8">
          Let's collab!
        </p>
        <div className="flex justify-center items-center pb-8">
          <Anchor href={GITHUB_URL}>
            <FaGithub size={32} />
          </Anchor>
          <Anchor href={LINKEDIN_URL}>
            <FaLinkedin size={32} />
          </Anchor>
          {/* <Anchor href={PERPLEXITY_URL}>
            <SiPerplexity size={32} />
          </Anchor> */}
        </div>
        <div>
        </div>
      </animated.div>
    </animated.div>
  );
};

export default memo(About);
