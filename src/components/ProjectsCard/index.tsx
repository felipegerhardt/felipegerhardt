import React, {ReactElement, useEffect} from 'react';
import './index.css'
import {AiOutlineCheckCircle, AiOutlineLoading3Quarters} from 'react-icons/ai'

import Aos from 'aos'
import 'aos/dist/aos.css';

const ProjectsCard = ({
  project,
  status,
  url,
  technologies,
}:{
  project:string | ReactElement;
  status:string;
  url:string;
  technologies: Array<string>;
}) => {

  useEffect (() => {

    Aos.init({duration: 1000})
    
  }, [])
  
  return (
    <div className='single-project-card-container' onClick={ () => window.open(url) }>
      <div className='card-info'>
        
        <p className='project-title'> {project}</p>

        <div className="contentContainer">
            <p className='technologies-title'>Technologies:</p>

          <div className="description">

            {technologies.map((tech) => <p className='technologies'>{tech}</p>)}

          </div>

        </div>
      </div>
    </div>

  )
}

export default ProjectsCard