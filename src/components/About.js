import React from "react";
import { image } from "../data/data";

function About() {
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>
        I am a passionate and detail-oriented developer with experience in
        React, JavaScript, and modern web development. I enjoy building clean,
        efficient applications and continuously improving my skills through
        hands-on projects. My background includes working with component-based
        architecture, state management, and API integration. I thrive in
        collaborative environments and love solving complex problems with
        elegant code. When I'm not debugging, I enjoy learning new technologies
        and contributing to open-source projects
      </p>
      <img src={image} alt="I made this"/>
    </div>
  );
}

export default About;
