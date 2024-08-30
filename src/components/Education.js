import React from 'react';

function Education() {
  // Example education array
  const educationDetails = [
    {
      degree: "Bachelor of Technology (B.Tech) in Computer Science and Engineering",
      institution: "Techno Main Salt Lake, Kolkata",
      year: "2021 - 2025",
      description: "Focused on software engineering, data structures, algorithms, and web development."
    },
    {
      degree: "Higher Secondary Education",
      institution: "Model DAV CFRI, Dhanbad",
      year: "2019 - 2020",
      description: "Gained interest in coding with Java and started learning various languages."
    },
    {
      degree: "Secondary Education",
      institution: "De Nobili, Sindri",
      year: "2005 - 2017",
      description: "Participated in various programs like elocution and cultural events, and gained public speaking skills."
    }
  ];

  return (
    <div className="education-section">
      <h2 className="education-title">Education</h2>
      <div className="education-list">
        {educationDetails.map((education, index) => (
          <div className="education-card" key={index}>
            <h3>{education.degree}</h3>
            <h4>{education.institution}</h4>
            <p><strong>Year:</strong> {education.year}</p>
            <p>{education.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Education;
