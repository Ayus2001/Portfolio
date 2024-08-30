import React from 'react';


function Projects() {
  // Example projects array
  const projects = [
    {
      title: "Portfolio Website",
      description: "A personal portfolio website to showcase my skills, projects, and contact information.",
      technologies: ["React", "CSS", "JavaScript"],
      link: "#" // Replace with the actual link
    },
    {
      title: "Student Information System",
      description: "A full-featured e-commerce platform with user authentication, product listings, and a shopping cart.",
      technologies: ["Html", "Css", "Java Script","PhP", "MongoDB"],
      link: "https://github.com/Ayus2001/student-info-system" // Replace with the actual link
    },
    {
      title: "Tic-Tac-Toe",
      description: "A real-time chat application with WebSocket implementation for instant messaging.",
      technologies: ["Html", "Css", "Java Script"],
      link: "https://github.com/Ayus2001/TIC-TAC-TOE" // Replace with the actual link
    }
  ];

  return (
    <div className="projects-section">
      <h2 className="projects-title">My Projects</h2>
      <div className="projects-list">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <p><strong>Technologies:</strong> {project.technologies.join(", ")}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
