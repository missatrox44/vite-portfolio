import React from "react";
import "tailwindcss/tailwind.css";

const Experience = () => {
  const jobExperiences = [
    {
      title: "Junior Software Developer",
      company: "IBG Software",
      description:
        "As an integral full stack developer, I shape user-centric designs and aid tech communities through teaching at IBG Institute and authoring a weekly tech blog . Additionally, I assist in tech recruiting and React Native projects, adhering to agile methods for optimized teamwork and growth.",
      timePeriod: "November 2022 - Present",
      img: "images/ibg.png",
    },
    {
      title: "Software Developer",
      company: "Chingu",
      description: "During Chingu's Voyage 41, our team developed an accessible travel planning app focused on accessibility. In a separate week-long sprint, my partner and I built a Pomodoro Clock application, enhancing collaboration, time management, and React skills through Agile methods.",
      timePeriod: "October 2022 - November 2022 & March 2023",
      img: "images/chingu.png",
    },
  ];

  const nonDevExperiences = [
    {
      title: "Robotics Teacher",
      company: "ECISD",
      description:
        "I taught six sections of robotics to 7th and 8th-grade students. The curriculum included basic computer science and robotics concepts, using lessons from Code.org and LEGO Education. I engaged students in daily hands-on learning by implementing the engineering/problem-solving process. My experience with robots and circuit boards includes Ozobots, BBC micro:bit, and the Spike Prime LEGO set.",
      timePeriod: "August 2021 - July 2022",
      img: "images/ecisd.png",
    },
    {
      title: "Elementary Music Specialist",
      company: "ECISD",
      description:
        "I facilitated weekly general music instruction for students from Pre-Kindergarten through to 5th grade. I also pioneered an after-school guitar club and piano club, which were offered to 4th and 5th-grade students. Additionally, I served as an Innovation Campus Ambassador.",
      timePeriod: "August 2019 - July 2021",
      img: "images/ecisd.png",
    },
    {
      title: "AIM Technician",
      company: "Southwest Conservation Corps",
      description:
        "As a Stream Habitat Assessment Technician, in partnership with the Bureau of Land Management (BLM), I assisted with the implementation of the aquatic Assessment, Inventory, Monitoring (AIM) initiative. I sampled twelve random streams and rivers throughout New Mexico, all located on BLM land. The data collected included water sampling, invasive and native plant species identification, EPT taxa sampling, and measurement of various metrics related to the bodies of water.",
      timePeriod: "April 2018 - October 2018",
      img: "images/scc.png",
    },
    {
      title: "Trail Worker",
      company: "California Conservation Corps",
      description:
        "Selected for the 2017 season in the Backcountry Trails Program, I maintained trails in the Trinity Alps Wilderness to ensure safe public access. Projects undertaken included the construction of rock walls, water bars, steps, logging, and treading new trails. The tools I used in these tasks included a Pulaski, crosscut saw, loppers, rogue hoes, McLeod, and shovel. Additionally, I performed Kitchen Patrol (KP) duties on a rotational basis, which involved preparing food for a crew of 17 members.",
      timePeriod: "May 2017 - September 2017",
      img: "images/ccc.png",
    },
    {
      title: "Teaching Assistant",
      company: "The University of Texas at El Paso",
      description:
        "I taught labs, including Ecology, Organismal Biology, Invertebrate Zoology, General Biology, and Field Biology. My responsibilities included preparing lessons, setting up labs, creating quizzes, grading all assignments, and arranging overnight field trips. Additionally, I worked closely with tenured professors to ensure accurate delivery of the curriculum.",
      timePeriod: "Fall 2014 - Spring 2017",
      img: "images/utep.png",
    },
    {
      title: "Graduate Field Researcher",
      company: "The University of Texas at El Paso",
      description:
        "I collected grasshopper specimens bi-monthly at specified locations on IMRS. I also conducted plant surveys using modified quadrats and the belt transect method. Additionally, I assisted colleagues in processing, marking, and recapturing both venomous and non-venomous snakes, as well as a variety of lizards.",
      timePeriod: "Fall 2014 - Spring 2017",
      img: "images/utep.png",
    },
  ];

  return (
    <div
      id="experience"
      className="bg-lightDesert p-8 rounded-lg shadow-lg w-full mx-auto"
    >
      <h2 className="text-4xl font-bold text-darkDesert mb-4 text-center">
        Experience
      </h2>
      <div className="resume-section-content grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        {jobExperiences.map((experience, index) => (
          <div
            key={index}
            className="bg-lightDesert p-6 border-2 border-darkDesert rounded-lg shadow-md hover:border-4 hover:border-darkDesert transition-all duration-500 ease-in-out"
          >
            <div className="flex items-center mb-2">
              <h3 className="text-2xl font-bold text-darkDesert mr-4">
                {experience.title}
              </h3>
              <img
                src={experience.img}
                alt={experience.title}
                className="h-12 w-auto"
              />
            </div>
            <p className="text-xl text-darkDesert italic mb-4">
              {experience.company}
            </p>
            <p className="text-darkDesert">{experience.description}</p>
            <p className="text-darkDesert mt-4 font-bold">
              {experience.timePeriod}
            </p>
          </div>
        ))}
      </div>
      <h2 className="text-4xl font-bold text-darkDesert mb-4 text-center">
        Non Dev Experience
      </h2>
      <div className="resume-section-content grid grid-cols-1 sm:grid-cols-2 gap-4">
        {nonDevExperiences.map((experience, index) => (
          <div
            key={index}
            className="bg-lightDesert p-6 border-2 border-darkDesert rounded-lg shadow-md hover:border-4 hover:border-darkDesert transition-all duration-500 ease-in-out"
          >
            <div className="flex items-center mb-2">
              <h3 className="text-2xl font-bold text-darkDesert mr-4">
                {experience.title}
              </h3>
              <img
                src={experience.img}
                alt={experience.title}
                className="h-12 w-auto"
              />
            </div>
            <p className="text-xl text-darkDesert italic mb-4">
              {experience.company}
            </p>
            <p className="text-darkDesert hidden">{experience.description}</p>
            <p className="text-darkDesert mt-4 font-bold">
              {experience.timePeriod}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
