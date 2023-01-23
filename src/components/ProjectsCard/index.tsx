import React, { useState, ReactElement, useEffect } from 'react';
import './index.css'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'
import { IoIosArrowDown } from "react-icons/io";
import { IoCheckmarkCircleOutline } from "react-icons/io5";


import Aos from 'aos'
import 'aos/dist/aos.css';

const ProjectsCard = ({
  project,
  status,
  url,
  description,
} : {
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
          <IoIosArrowDown className={toggle ? 'arrow' : 'arrow activated'} size={15}/>
        </div>

        <div className={toggle ? 'project-description-container' :'project-description-container activated'}>
          <p className={toggle ? 'project-description' : 'project-description activated'}> {description}</p>  
          <div className={toggle ? 'project-status-container' : 'project-status-container activated'}> 
            {status === 'Development' 
            ? <AiOutlineLoading3Quarters className={toggle ? 'progress-icon' : 'progress-icon activated'}/> 
            : <IoCheckmarkCircleOutline className={toggle ? 'concluded-icon' : 'concluded-icon activated'}/>}
            
            <p className={
              toggle ? 'project-status' : 
              status ==='Concluded' ? 'project-status activated concluded' : 'project-status activated inprogress'
              }>{status}</p>
          </div>
        </div>


      </div>
    </div>

  )
}

export default ProjectsCard