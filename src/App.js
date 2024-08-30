import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import './App.css';
import Skill from './components/Skill';
import Contact from './components/Contact'; // Correct import (capitalized)
import Intro from './components/Intro'; 
import Experience from './components/Experience';
import Projects from './components/Project'; // Ensure the file name is Projects.js
import Education from './components/Education.js';

function App() {
  return (
    <BrowserRouter>
      <Nav 
        title='Portfolio' 
        t1='Education'
        t3='Skills'
        t4='Experiences'
        t5='Projects'
        t6='Contact-us'
      />
      <Routes>
        <Route path="/intro" element={<Intro />} />
        <Route path="/skill" element={<Skill />} />
        <Route path="/Contact" element={<Contact />} /> {/* Correct usage (capitalized) */}
        <Route path="/project" element={<Projects />} /> {/* Ensure correct path */}
        <Route path="/education" element={<Education />} /> {/* Ensure correct path */}
        <Route path="/experience" element={<Experience />} /> {/* Ensure correct path */}
        {/* Add more routes as needed */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
