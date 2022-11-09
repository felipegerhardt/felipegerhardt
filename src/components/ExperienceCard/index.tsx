import React, { ReactElement } from 'react';
import './index.css';

const ExperienceCard = ({
  name,
  role,
  duration,
  description
}:{
  name: string;
  role: string;
  duration: string;
  description: ReactElement;

}) => {

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