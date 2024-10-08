import React from "react";
import { Navbar } from "../components/Navbar";
import "./About.css";

import skillsData from "../data/skills.json";

const Languagues = ["Italian", "English", "French", "Spanish", "Catalan"];

export const About = () => {
  return (
    <>
      <Navbar />
      <section className="main margin-top-50">
        <h1 className="main-title margin-bottom-35">I'm Simone</h1>
        {/* <div className="main-container"> */}
          {/* <img
            className="profile-img"
            src="../assets/hero/simo.png"
            alt="prifile pic"
          /> */}
          <ul className="aboutItems">
            <li className="aboutItem">
             
                <h3>Frontend Developer</h3>
                <p>
                  I'm a frontend developer with experience in building
                  responsive and optimize site
                </p>
            </li>
            <li className="aboutItem">
             
                <h3>Backend Developer</h3>
                <p>I have experience developing fast and optimised API</p>
            </li>
            {/* <li className="aboutItem">
              <div className="aboutItemText">
                <h3>Salesforce</h3>
                <p>
                  I have designed multiple landing pages and have created design
                  system as well
                </p>
              </div>
            </li> */}
          </ul>
        {/* </div> */}
        <div>
          <div>
            <h3 className="about-title">Skills</h3>
            <ul className="skills-container">
              {skillsData.map((skill) => (
                <li className="skills">{skill.title}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="about-title">Languages</h3>
            <ul className="skills-container">
              {Languagues.map((language) => (
                <li className="skills">{language}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};
