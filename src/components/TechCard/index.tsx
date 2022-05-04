import React from 'react'
import './index.css'

const TechCard = (props:any) => {
  const technology = props.tech.name
  const id = props.tech.id
  const text = props.tech.text
  const url = props.tech.url
  return(
    <div className="Card" onClick={() => window.open(url)}>
      <div className={`${id}`}> </div>
      <h1 className='header__card'>{technology}</h1>
      <p className='text__card'>{text}</p>
    </div>
  )
}

export default TechCard