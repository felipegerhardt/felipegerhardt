import React, { ReactElement } from 'react';
import { MdLocationOn } from 'react-icons/md';
import { BsFillCalendar3RangeFill } from 'react-icons/bs';
import './index.css';

const EducationCard = ({
  name,
  course, 
  location, 
  acc,
  duration}:{
  name:string;
  course: string;
  location: string;
  acc: Array<object>;
  duration: string;
}) => {


  return (
    <div className='education-card'>

      <div className="education-name-course">
        <p className='education-name'>{name} </p>
        <p className='education-course'>({course})</p>
      </div>
      
      <div className="education-name-course">
        <MdLocationOn className='education-location-icon' size={20} color='white'/>
        <p className='education-location'>{location}</p>
        <BsFillCalendar3RangeFill className='education-duration-icon' size={20} color='white'/>
        <p className='education-duration'>{duration}</p>
      </div>

      <div className="education-accomplishment-container">
        
        <p className="education-accomplishment-header">Accomplishments: </p>
        <div className="education-accomplishments">

          {acc.map((accomplishment:any) => 
          <div onClick={() => !!accomplishment.url ? window.open(accomplishment.url) : null} className={!!accomplishment.url ? "education-accomplishment-layout clickable" : 'education-accomplishment-layout'}>
            <text className='education-accomplishment-item'>{accomplishment.description}</text>
          </div>
          
          )}
        </div>
        
      </div>
    </div>
  )
}

export default EducationCard