import React from "react";
import { Navbar } from "../components/Navbar";

export const About = () => {
  return (
    <>
      <Navbar />
      <section className='main margin-top-50'>
        <h1 className="main-title">I'm Simone</h1>
        <div>
          <img
            src="src/assets/a977c9a3-ba86-4d8a-939a-53d040a29f9b.JPG"
            alt="prifile pic"
          />
          <ul className="aboutItems">
            <li className="aboutItem">
              <img
                src="src/assets/about/serverIcon.png"
                alt="Server Icon"
              ></img>
              <div className="aboutItemText">
                <h3>Frontend Developer</h3>
                <p>
                  I'm a frontend developer with experience in building
                  responsive and optimize site
                </p>
              </div>
            </li>
            <li className="aboutItem">
              <img
                src="src/assets/about/cursorIcon.png"
                alt="Curson Icon"
              ></img>
              <div className="aboutItemText">
                <h3>Backend Developer</h3>
                <p>I have experience developing fast and optimised API</p>
              </div>
            </li>
            <li className="aboutItem">
              <img src="src/assets/about/uiIcon.png" alt="UI Icon"></img>
              <div className="aboutItemText">
                <h3>Salesforce</h3>
                <p>
                  I have designed multiple landing pages and have created design
                  system as well
                </p>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};
