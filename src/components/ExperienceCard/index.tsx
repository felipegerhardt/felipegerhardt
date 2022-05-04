import React from 'react'
import './index.css'

const ExperienceCard = (props:any) => {

  const name = props.experience.name
  const role = props.experience.role
  const duration = props.experience.duration
  const description = props.experience.description

  return (
    <div className='experience__textblock__container'> 
      <p className='experience_name'>{name}</p>
      <p className='experience_role'>{role}</p>
      <p className='experience_duration'>{duration}</p>
      <p className='experience_description'>{description}</p>
    </div>
  )
}

export default ExperienceCard