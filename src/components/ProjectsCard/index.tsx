import React, {ReactElement, useEffect} from 'react';
import './index.css'
import {AiOutlineCheckCircle, AiOutlineLoading3Quarters} from 'react-icons/ai'

import Aos from 'aos'
import 'aos/dist/aos.css';

const ProjectsCard = ({
  project,
  about,
  status,
  url,
  img,
}:{
  project: string | ReactElement;
  about: ReactElement;
  status:string;
  url:string;
  img:string;
}) => {

  useEffect (() => {

    Aos.init({duration: 1000})
    
  }, [])
  
  return (
    <div className='CardProjects' onClick={ () => window.open(url) }>
      <div className='cardInfo'>
        <div className="iconAndNameContainer">
          <img src={img} />
          <p className='header__project_card'> {project}</p>
        </div>
        { status==='Concluded' 
        ? <div className='status'>
            <AiOutlineCheckCircle className='Concluded' />
            <p className='status concluded'>{status}</p>
          </div> 
        : <div className='status'>
            <AiOutlineLoading3Quarters className='Loading'/>
            <p className='status development'>{status}</p>
          </div>}
        <p className='header__project_card'> {project} </p> 
      </div>
    </div>

  )
}

export default ProjectsCard