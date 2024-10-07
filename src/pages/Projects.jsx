import React from "react";
import { Navbar } from "../components/Navbar";
import "./projects.css";
import projectData from "../data/projects.json";
import { ProjectCard } from "../components/ProjectCard";

export const Projects = () => {
  return (
    <>
      <Navbar />
      <section className="main margin-top-50">
        <h1 className="main-title margin-bottom-35">Projects</h1>
        <div className="project-general-container">
          {projectData.map((project, index) => {
            return <ProjectCard key={index} project={project} />;
          })}
        </div>
      </section>
    </>
  );
};
