import React from "react";

// define schools data outside component so it doesn't get recreated on every render
const schools = [
  {
    id: 1,
    degree: "Web Development Certificate",
    university: "The University of Texas at Austin",
    timePeriod: "June 2022 - September 2022",
    img: "images/longhorns.jpg",
  },
  {
    id: 2,
    degree: "M.S. Biological Sciences",
    university: "The University of Texas at El Paso",
    timePeriod: "August 2014 - May 2017",
    img: "images/pick.png",
  },
  {
    id: 3,
    degree: "B.S. Ecology & Evolutionary Biology",
    university: "The University of Texas at El Paso",
    timePeriod: "August 2009 - May 2014",
    img: "images/pick.png",
  },
];

// create School component that receives a school object as props. Render method becomes more readable
const School = ({ school }) => (
  <div className="mb-4 flex items-center">
    <img
      src={school.img}
      alt={school.university}
      className="h-12 w-auto mr-4"
    />
    <div>
      <h3 className="text-xl font-semibold text-darkDesert">{school.degree}</h3>
      <p className="text-lg text-darkDesert">{school.university}</p>
      <p className="text-darkDesert">{school.timePeriod}</p>
    </div>
  </div>
);

export default function Education() {
  return (
    <section
      id="education"
      className="bg-lightDesert p-8 rounded-lg shadow-md w-full mx-auto flex flex-col items-center justify-center"
    >
      <div className="resume-section-content">
        <h2 className="text-4xl font-bold text-darkDesert mb-4 text-center">
          Education
        </h2>
        {schools.map((school) => (
          <School key={school.id} school={school} />
        ))}
      </div>
    </section>
  );
}
