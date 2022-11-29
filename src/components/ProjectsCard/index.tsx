import React, {ReactElement, useEffect} from 'react';
import './index.css'
import {AiOutlineCheckCircle, AiOutlineLoading3Quarters} from 'react-icons/ai'

import Aos from 'aos'
import 'aos/dist/aos.css';

const ProjectsCard = ({
  project,
  status,
  url,
  image,
  technologies,
  width
}:{
  project: string | ReactElement;
  status:string;
  url:string;
  image: string;
  technologies: Array<string>;
  width: number;
}) => {

  useEffect (() => {

    Aos.init({duration: 1000})
    
  }, [])
  
  return (
    <div className='projects-card-container' onClick={ () => window.open(url) }>
      <div className='card-info'>
        
        <p className='project-title'> {project}</p>

        <div className="contentContainer">

          <div className="description">
            <p className='technologies-title'>Technologies:</p>

            {technologies.map((tech) => <p className='technologies'>{tech}</p>)}
             
          </div>


          <div className="illustration">

            <img alt={`${project}`} style={{alignSelf: 'center', justifySelf: 'center', borderRadius: 20}} className='image-illustration' src={image} width={width}/>


            { status==='Concluded' 
            ? <div className='status'>
                <AiOutlineCheckCircle className='Concluded' />
                <p className='status concluded'>{status}</p>
              </div> 
            : <div className='status'>
                <AiOutlineLoading3Quarters className='Loading'/>
                <p className='status development'>{status}</p>
              </div>
            }

          </div>

        </div>




      </div>
    </div>

  )
}

export default ProjectsCard