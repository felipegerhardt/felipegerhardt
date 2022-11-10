import React, {ReactElement, useEffect} from 'react';
import './index.css'

import Aos from 'aos'
import 'aos/dist/aos.css';

const ProjectsCard = ({
  project,
  about,
  duration,
  url
}:{
  project:string;
  about: ReactElement;
  duration:string;
  url:string;
}) => {

  useEffect (() => {

    Aos.init({duration: 1000})
    
  }, [])
  
  return (
    <div data-aos="zoom-in" className='CardProjects' onClick={ () => window.open(url) }>
      <p className='header__project_card'> {project} </p>
      <p className='text__project__card'> {about} </p>
      <p className='text__duration'> Started in: {duration} </p>
    </div>

  )
}

export default ProjectsCard