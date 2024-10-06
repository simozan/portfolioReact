import React from "react";
import { Experiences } from "../pages/Experiences";

export const ExperienceCard = ({ experience }) => {
  return (
    <div>
      <h2>{experience.role}</h2>
      <h3>{experience.organisation}</h3>
      <p>
        from {experience.startDate} to {experience.endDate}
      </p>
      <ul>
        {experience.experiences.map((element, i) => {
          return <li key={i}>{element}</li>;
        })}
      </ul>
    </div>
  );
};
