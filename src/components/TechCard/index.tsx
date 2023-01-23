import React, {useState} from 'react'
import './index.css'

const TechCard = ({
  technology,
  url,
  source,
  frameworks,
}:{
  technology: string;
  url: string;
  source: string;
  frameworks:Array<object>;
}) => {
  const [toggle, setToggle] = useState(true);

  function handleClick () {
    setToggle(!toggle)
  }

  return(
    <div className={toggle ? "tech-card-container": 'tech-card-container activated'} onClick={handleClick}>
      <img className={toggle ? 'tech-vector-image' : 'tech-vector-image activated'} alt='Tech card' src={source}/>
      <h1 className='card-header'>{technology}</h1>
      <div className={toggle ? 'frameworks-container': 'frameworks-container activated'}>
        <div className={toggle ? 'frameworks-content' : 'frameworks-content activated'}>
          {frameworks.map((framework) => 
          
          <p>• a</p>
          )}
        </div>
      </div>
    </div>
  )
}

export default TechCard