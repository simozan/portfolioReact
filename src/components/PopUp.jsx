import React from "react";
import "./PopUp.css";

const PopUp = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="popup-overlay" onClick={onClose}>
      <div className="popup-container" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>
          X
        </button>
        <h2>Feel free to reach out!</h2>
        <div className="popup-options">
          <div className="popup-option">
            <img src="./src/assets/contact/emailIcon.png" 
            alt="Email icon" />
            <a className="popup-link"
            href="mailto:simone.zanni.87@gmail.com">simone.zanni.87@gmail.com</a>
          </div>
          <div className="popup-option">
            <img
              src="/Users/simonezanni/Desktop/portfolioReact/src/assets/contact/githubIcon.png"
              alt="LinkedIn icon"
            />
            <a className="popup-link"
            href="https://www.linkedin.com/in/simozan">www.linkedin.com/in/simozan</a>
          </div>
          <div className="popup-option">
          <img src="./assets/contact/githubIcon.png" alt="Github icon" />
          <a className="popup-link"
          href="https://github.com/simozan">github.com/simozan</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopUp;

{
  /* <footer id="contact" className={styles.container}>
<div className={styles.text}>
  <h2>Contact</h2>
  <p>Feel free to reach out!</p>
</div>
<ul className={styles.links}>
  <li className={styles.link}>
    <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
    <a href="mailto:myemail@email.com">myemail@email.com</a>
  </li>
  <li className={styles.link}>
    <img
      src={getImageUrl("contact/linkedinIcon.png")}
      alt="LinkedIn icon"
    />
    <a href="https://www.linkedin.com/myname">linkedin.com/myname</a>
  </li>
  <li className={styles.link}>
    <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
    <a href="https://www.github.com/myname">github.com/myname</a>
  </li>
</ul>
</footer> */
}
