import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import profilePic from '../picture/profile.png';

function Intro(){
    return(
        <>
        
      <div className='main'>
        <img src={profilePic} alt='Profile' className='profile-pic'/>
        <br/>
        <div className='tbox'>
          <h2 className='intro'>Hello this is !!</h2>
          <h3 className='intro'>Ayush Kumar Jha</h3>
          <h2 className='intro'>I am a :</h2>
          <h3 className='role'>Frontend Developer</h3>
          <h3 className='intro'>
          "I have a strong foundation in Computer Science and Engineering (CSE), specializing in the development of efficient and scalable software solutions. I am passionate about web development, algorithms, and problem-solving. I am always eager to learn and embrace new challenges in the tech industry."
          </h3>
          <div className='soc'>
            <a href='https://www.instagram.com/aayushjha_' target='_blank' rel='noopener noreferrer'>Instagram</a>
            <a href='https://www.linkedin.com/in/ayush-kumar-jha-028863221/' target='_blank' rel='noopener noreferrer'>LinkedIn</a>
            <a href='https://www.facebook.com/' target='_blank' rel='noopener noreferrer'>Facebook</a>
          </div>
        </div>
      </div>
        
        
        
        </>
    )
}
export default Intro;
