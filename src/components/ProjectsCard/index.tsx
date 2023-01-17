import React, { useState, ReactElement, useEffect } from 'react';
import './index.css'
import { AiOutlineCheckCircle, AiOutlineLoading3Quarters } from 'react-icons/ai'
import { IoIosArrowDown } from "react-icons/io";

import Aos from 'aos'
import 'aos/dist/aos.css';

const ProjectsCard = ({
  project,
  status,
  url,
  technologies,
}: {
  project: string | ReactElement;
  status: string;
  url: string;
  technologies: Array<string>;
}) => {

  const [toggle, setToggle] = useState(true);
  const [toggleDiv, setToggleDiv] = useState(true);
  const [toggleContainer, setToggleContainer] = useState(true)
  const [arrow, setArrow] = useState(false);
  function handleClick() {
    setToggle(!toggle)
    setToggleDiv(!toggleDiv)
    setToggleContainer(!toggleContainer)
    setArrow(!arrow)
  }


  useEffect(() => {

    Aos.init({ duration: 1000 })

  }, [])

  return (
    <div onClick={handleClick} className={toggleDiv ? 'single-project-card-container' : 'single-project-card-container activated'} /* onClick={ () => window.open(url) } */>
      <div className={toggle ? 'card-info' : 'card-info activated'}>

        <div className='title-arrow-div'>
          <p className={toggleContainer ? 'project-title' : 'project-title activated'}> {project}</p>

          <IoIosArrowDown className={arrow ? 'arrow activated' : 'arrow'} size={15}/>
        </div>

      </div>
    </div>

  )
}

export default ProjectsCard