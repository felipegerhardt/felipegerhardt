import React from 'react';
import './App.css';
// ..


import { AboutMe, Projects, Education, Technologies, WorkExperience, ContactMe } from './containers'
import { Navbar } from './components';

const GIF = require('./assets/200.gif')

const App = () => {
  
  return (
    <div className='container'>
      <img alt='Tech gif background' src={GIF} className='image' id='About me'/> 
      <Navbar />  
      <AboutMe />
      <Technologies />      
      <Projects />
      <WorkExperience />
      <Education />
      <ContactMe /> 
    </div>

  )
}

export default App