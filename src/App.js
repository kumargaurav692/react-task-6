import React from "react";
import "./App.css"; // Import your CSS file for styling

const App = () => {
  const portfolioData = {
    name: "Kumar Gaurav",
    description:
      "I am a passionate web developer who loves creating amazing websites and applications. With a strong foundation in web development and programming, I'm always eager to learn and explore new technologies.",
    skills: [
      "AWS Cloud Practitioner",
      "C",
      "C++",
      "Java",
      "Python",
      "MERN Stack Developer",
      "SQL Database"
    ],
    projects: [
      {
        title: "E-commerce App",
        description:
          "Developed a full-fledged e-commerce application with features like product listings, user authentication, and online payment processing."
      },
      {
        title: "Portfolio Website",
        description:
          "Designed and built a personal portfolio website to showcase my projects and skills, utilizing React and CSS for a modern look."
      },
      {
        title: "Weather App",
        description:
          "Created a weather application that fetches real-time weather data using an external API and displays it to the user in an interactive way."
      }
    ]
  };

  return (
    <div className="portfolio">
      <div className="frame">
        <header className="header">
          <h1>{portfolioData.name}</h1>
        </header>
        <div className="body">
          <section className="about">
            <h3>
              <u>About Me:</u>
            </h3>
            <p>{portfolioData.description}</p>
          </section>
          <section className="skills">
            <h3>
              <u>Skills:</u>
            </h3>
            <ul>
              {portfolioData.skills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </section>
          <section className="projects">
            <h3>
              <u>Sample Projects:</u>
            </h3>
            {portfolioData.projects.map((project, index) => (
              <div className="project" key={index}>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
            ))}
          </section>
        </div>
      </div>
    </div>
  );
};

export default App;
