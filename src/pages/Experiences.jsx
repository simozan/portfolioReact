import React from "react";
import { Navbar } from "../components/Navbar";
import { ExperienceCard } from "../components/ExperienceCard";
import experienceData from "../data/history.json";

export const Experiences = () => {
  return (
    <div>
      <Navbar />
      <section className='main margin-top-50'>
      <h1 className="main-title">Experiences</h1>
      {experienceData.map((experience, index) => {
        return <ExperienceCard key={index} experience={experience} />;
      })}
      </section>
    </div>
  );
};
