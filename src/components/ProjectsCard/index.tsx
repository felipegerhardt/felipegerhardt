import React, { useState, ReactElement, useEffect } from 'react';
import './index.css'
import { AiOutlineCheckCircle, AiOutlineLoading3Quarters } from 'react-icons/ai'
import { IoIosArrowUp } from "react-icons/io";

import Aos from 'aos'
import 'aos/dist/aos.css';

const ProjectsCard = ({
  project,
  status,
  url,
  description,
}: {
  project: string | ReactElement;
  status: string;
  url: string;
  description: string;
}) => {

  const [toggle, setToggle] = useState(true);
  function handleClick() {
    setToggle(!toggle)
  }


  useEffect(() => {

    Aos.init({ duration: 1000 })

  }, [])

  return (
    <div onClick={handleClick} className={toggle ? 'single-project-card-container' : 'single-project-card-container activated'} /* onClick={ () => window.open(url) } */>
      <div className={toggle ? 'card-info' : 'card-info activated'}>

        <div className='title-arrow-div'>
          <p className={toggle ? 'project-title' : 'project-title activated'}> {project}</p>

          <IoIosArrowUp className={toggle ? 'arrow' : 'arrow activated'} size={15}/>
        </div>

        <div className={toggle ? 'project-description-container' :'project-description-container activated'}>
          <p className={toggle ? 'project-description' : 'project-description activated'}> {description}</p>  
          

        </div>

      </div>
    </div>

  )
}

export default ProjectsCard