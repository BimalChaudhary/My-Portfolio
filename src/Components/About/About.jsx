import React from "react";
import "./About.css";
import theme_pattern from "../../assets/theme_pattern.svg";

const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About Me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left">
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              I am experienced Frontend Developer with over a decade of
              professional expertise in the field.
            </p>
            <p>My passion as a MERN STACK Developer</p>
          </div>
          <div className="about-skills">
            <div className="about-skill"><p>HTML & CSS</p><hr style={{ width: "50%" }} /></div>
            <div className="about-skill"><p>JavaScript</p><hr style={{ width: "50%" }} /></div>
            <div className="about-skill"><p>React JS</p><hr style={{ width: "70%" }} /></div>
            <div className="about-skill"><p>Express JS</p><hr style={{ width: "30%" }} /></div>
            <div className="about-skill"><p>Next JS</p><hr style={{ width: "10%" }} /></div>
            <div className="about-skill"><p>Python</p><hr style={{ width: "30%" }} /></div>
          </div>
        </div>
      </div>
      <div className="about-achivements">
          <div className="about-achivement">
            <h1>Secretary</h1>
            <p>Mahendranagar CBS</p>
          </div>
          <hr />
          <div className="about-achivement">
            <h1>Accountant</h1>
            <p>Shalom AG Church</p>
          </div>
          <hr />
          <div className="about-achivement">
            <h1>4+</h1>
            <p>Projects</p>
          </div>
        </div>
    </div>
  );
};

export default About;
