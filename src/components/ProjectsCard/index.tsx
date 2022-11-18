import React, {ReactElement, useEffect} from 'react';
import './index.css'
import {AiOutlineCheckCircle, AiOutlineLoading3Quarters} from 'react-icons/ai'

import Aos from 'aos'
import 'aos/dist/aos.css';

const ProjectsCard = ({
  id,
  project,
  about,
  status,
  url,
  image,
  tags,
  technologies
}:{
  id: string
  project: string | ReactElement;
  about: ReactElement;
  status:string;
  url:string;
  image: string;
  tags: Array<string>;
  technologies: Array<string>;
}) => {

  useEffect (() => {

    Aos.init({duration: 1000})
    
  }, [])
  
  return (
    <div className='CardProjects' onClick={ () => window.open(url) }>
      <div className='cardInfo'>
        
        <div className="iconAndNameContainer">
          <img src={image} width={50} height={50}/>
          <p className='projectTitle'> {project}</p>
        </div>

        <div className="contentContainer">

          <div className="description">
            <p style={{fontSize: 12}}>Tags</p>
            <div className='tagsContainer'>
              
              {tags.map((tag) => 
                <div key={tag} className='tag'>
                  <p>{tag}</p>
                </div>
                )
              }
            </div>
             
          </div>
          <div className="illustration">
            Illustration
          </div>

        </div>





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

  )
}

export default ProjectsCard