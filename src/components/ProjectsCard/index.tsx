import React, {useEffect} from 'react';
import './index.css'

import Aos from 'aos'
import 'aos/dist/aos.css';

const ProjectsCard = (props:any) => {

  useEffect (() => {

    Aos.init({duration: 1000})
    
  }, [])

  const project = props.project.name;
  const about = props.project.about;
  const duration = props.project.duration;
  const url = props.project.url

  return (
    <div data-aos="fade-right" className='CardProjects' onClick={ () => window.open(url) }>
      <p className='header__project_card'> {project} </p>
      <p className='text__project__card'> {about} </p>
      <p className='text__duration'> Duration: {duration} </p>
    </div>

  )
}

export default ProjectsCard