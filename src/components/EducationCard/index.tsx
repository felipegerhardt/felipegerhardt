import React from 'react'
import './index.css'

const EducationCard = (props:any) => {

  const name = props.education.name
  const course = props.education.course
  const location = props.education.location
  const GPA = props.education.GPA
  const acc = props.education.acc
  const url = props.education.url
  const duration = props.education.duration

  return (
    <div className='one__education__card__container'>

      <img alt='Institution logo' src={url} width={400} className='education__image'/>

      <p className='education__name'>{name}</p>
      <p className='education__course'>{course}</p>
      <p className='education__text'>Location: {location}</p>
      <p className='education__text'>GPA: {GPA}</p>
      <p className='education__text'>Duration: {duration}</p>
      <text className='education__text'>Accomplishments: <br/><br/>{acc}</text>


    </div>
  )
}

export default EducationCard