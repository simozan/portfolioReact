import React from "react";
import "./ProjectCard.css";

export const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      <h2 className="project-title">{project.title}</h2>
      <ul className="project-skills-container">
        {project.skills.map((eachSkill, i) => {
          return (
            <li className="skills" key={i}>
              {eachSkill}
            </li>
          );
        })}
      </ul>
      <p className="project-description">{project.description}</p>
      <div className="project-btn-container">
        <a href={project.deployment}>
          <button className="project-btn">deployment</button>
        </a>
        <a href={project.source}>
          <button className="project-btn">source</button>
        </a>
      </div>
    </div>
  );
};
