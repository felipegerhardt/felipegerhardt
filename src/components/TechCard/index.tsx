import React from 'react'
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
  return(
    <div className="Card" onClick={() => window.open(url)}>
      <div className={`${id}`}> </div>
      <h1 className='header__card'>{technology}</h1>
    </div>
  )
}

export default TechCard