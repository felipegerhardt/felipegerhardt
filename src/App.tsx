import React from 'react';
import './App.css';


import { AboutMe, Projects, Education, Technologies, WorkExperience, ContactMe } from './containers'
import { Navbar } from './components';

const App = () => {
  return (
    <div className='container'>
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