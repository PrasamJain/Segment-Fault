import React from "react";
import "./About.css";
function About() {
  return (
    <div className="main-div">
      <div className="main-about">
        <h1>About Us</h1>
        <p>
        Segment Fault is a question and answer website for professional and enthusiast programmers. It features questions and answers on a wide range of topics in computer programming.
The website serves as a platform for users to ask and answer questions, and, through membership and active participation, to vote questions and answers up or down . The whole idea is to make learning interactive and efficient.
        </p>
      </div>
      <div className="our-details">
        <h2>Contributers</h2>
        <ul>
          <li>
            <div>
              <p>Prasam Jain</p>
              <a href="https://www.linkedin.com/in/prasam-jain-59a45a191" target="_blank " rel="noreferrer">
                Linkedin
              </a>
            </div>
          </li>
          <li>
            <div>
              <p> Prachur Gupta</p>
              <a style={{ padding: "0 39px" }} href="https://www.linkedin.com/in/prachur-gupta-917b321ba/" target="_blank" rel="noreferrer">
                Linkedin
              </a>
            </div>
          </li>
          <li>
            <div>
              <p>Chirag Jain</p>
              <a
                style={{ padding: "0 2px" }}
                href="https://www.linkedin.com/in/chirag-jain-813b9322b/"
                target="_blank" rel="noreferrer"
              >
                Linkedin
              </a>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default About;
