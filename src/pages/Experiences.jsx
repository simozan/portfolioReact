import React from "react";
import { Navbar } from "../components/Navbar";
import { ExperienceCard } from "../components/ExperienceCard";
import experienceData from "../data/history.json";

export const Experiences = () => {
  return (
    <div>
      <Navbar />
      <section className='main margin-top-50'>
      <h1 className="main-title margin-bottom-35">Experiences</h1>
      <div className="general-container">
      {experienceData.map((experience, index) => {
        return <ExperienceCard key={index} experience={experience} />;
      })}
      </div>
      </section>
    </div>
  );
};
