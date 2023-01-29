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
              <p>Prathmesh Modhe</p>
              <a href="https://www.linkedin.com/in/pmodhe2001/" target="_blank " rel="noreferrer">
                Linkedin
              </a>
            </div>
          </li>
          <li>
            <div>
              <p> Rahul Bairagi</p>
              <a style={{ padding: "0 39px" }} href="https://www.linkedin.com/in/rahul-bairagi-b88b20165/" target="_blank" rel="noreferrer">
                Linkedin
              </a>
            </div>
          </li>
          <li>
            <div>
              <p>Pravishti Bhardwaj</p>
              <a
                style={{ padding: "0 2px" }}
                href="https://www.linkedin.com/in/pravishti-bhardwaj-7b4042200/"
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
