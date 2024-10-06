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
        <h1 className="main-title">Projects</h1>
        {projectData.map((eachProject, index) => {
          return <ProjectCard key={index} project={eachProject} />;
        })}
      </section>
    </>
  );
};
