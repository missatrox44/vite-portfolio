import React from "react";

export default function Education() {
  const schools = [
    {
      degree: "Web Development Certificate",
      university: "The University of Texas at Austin",
      timePeriod: "June 2022 - September 2022",
    },
    {
      degree: "M.S. Biological Sciences",
      university: "The University of Texas at El Paso",
      timePeriod: "August 2014 - May 2017",
    },
    {
      degree: "B.S. Ecology & Evolutionary Biology",
      university: "The University of Texas at El Paso",
      timePeriod: "August 2009 - May 2014",
    },
  ];

  return (
    <section
      id="education"
      className="bg-lightDesert p-8 rounded-lg shadow-md w-full max-w-md mx-auto"
    >
      <div className="resume-section-content">
        <h2 className="text-4xl font-bold text-darkDesert mb-4">Education</h2>
        {schools.map((school, index) => (
          <div className="mb-4">
            <h3 className="text-xl font-semibold text-darkDesert">
              {school.degree}
            </h3>
            <p className="text-lg text-darkDesert">{school.university}</p>
            <p className="text-darkDesert">{school.timePeriod}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
