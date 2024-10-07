import React from "react";
import { Experiences } from "../pages/Experiences";
import "./ExperienceCard.css"

export const ExperienceCard = ({ experience }) => {
  return (
    <div className="experience-container">
      <div className="experience-main">
      <h2 className="experience-title"> {experience.role}</h2>
      <h3>{experience.organisation}</h3>
      <p className="experience-date">
        from {experience.startDate} to {experience.endDate}
      </p>
      </div>
      <ul className="experience-bullets-container">
        {experience.experiences.map((element, i) => {
          return <li key={i}> {element}</li>;
        })}
      </ul>
    </div>
  );
};
