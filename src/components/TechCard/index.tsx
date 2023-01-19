import React, {useState} from 'react'
import './index.css'

const TechCard = ({
  technology,
  id,
  url,
}:{
  technology: string;
  id: string;
  url: string;
}) => {
  const [toggle, setToggle] = useState(true);

  function handleClick () {
    setToggle(!toggle)
  }

  return(
    <div className={toggle ? "tech-card-container": 'tech-card-container activated'} onClick={handleClick}>
      <div className={`${id}`}> </div>
      <h1 className='card-header'>{technology}</h1>
    </div>
  )
}

export default TechCard