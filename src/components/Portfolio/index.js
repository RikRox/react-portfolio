import React from "react";
import Project from "../Project";

const projects = [


    {
    id: 0,
    title: "Run Buddy",
    languages: "html, css",
    packages: "",
    image: "/assets/images/runBuddy.png",
    description: "A site where runners can sign up and find a trainer",
    repo: "https://github.com/RikRox/run-buddy",
    live: "https://RikRox.github.io/run-buddy",
  },


  {
	id: 1,
	title: 'Password Generator',
	languages: "html, css,, js",
    packages: "none",
    image: "/assets/images/password.png",
	description:'This is an application that allows you to generate a password from 8 to 128 characters based on criteria you select.',
	repo: 'https://github.com/RikRox/passwordGenerator',
	live: 'https://RikRox.github.io/password-generator/',
},


  {
    id: 2,
    title: "Weather Dashboard",
    languages: "html, css, js",
    packages: "",
    image: "/assets/images/weather.png",
    description: "A basic app that allows you to see the weather for a specific searched or saved city.",
    repo: "https://github.com/RikRox/Weather",
    live: "https://RikRox.github.io/Weather",
  },
];

function Portfolio() {
  return (
    <div>
      <p className="center">Portfolio</p>
      <hr />

      <Project projects={projects} />
    </div>
  );
}

export default Portfolio;


