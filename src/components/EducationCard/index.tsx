import React, { ReactElement } from 'react'
import './index.css'

const EducationCard = ({
  name,
  course, 
  location, 
  acc,
  url,
  duration}:{
  name:string;
  course: string;
  location: string;
  acc: string | ReactElement;
  url: string;
  duration: string;
}) => {


  return (
    <div className='one__education__card__container'>

      <img alt='Institution logo' src={url} width={400} className='education__image'/>

      <p className='education__name'>{name}</p>
      <p className='education__course'>{course}</p>
      <p className='education__text'>Location: {location}</p>
      <p className='education__text'>Duration: {duration}</p>
      <text className='education__text'>Accomplishments: <br/><br/>{acc}</text>


    </div>
  )
}

export default EducationCard