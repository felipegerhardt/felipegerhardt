import React from 'react';
import './App.css';


import { AboutMe, Projects, Education, Technologies, WorkExperience } from './containers'
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
    </div>

  )
}

export default App