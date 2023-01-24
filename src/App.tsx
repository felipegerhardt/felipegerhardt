import React from 'react';
import './App.css';


import { AboutMe, Projects, Education, Technologies } from './containers'
import { Navbar } from './components';

const App = () => {
  return (
    <div className='container'>
      <Navbar />  
      <AboutMe />
      <Technologies />      
      <Projects />
      <Education />
    </div>
  )
}

export default App