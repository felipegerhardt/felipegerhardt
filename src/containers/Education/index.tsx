import React, {useEffect} from 'react';
import './index.css';

import Aos from 'aos'
import 'aos/dist/aos.css';

import EducationCard from '../../components/EducationCard'

const education = [
  {
    name: 'Federal Technological University of Parana',
    course: 'Mechanical engineering',
    location: 'Londrina, Parana - Brazil',
    acc: ['A1 International Journal Scientific ', 'National Congress publication', 'Calculus tutor for 1 year', 'Linear Algebra and Analytic Geometry tutor 0,5 year'],
    url: require('../../assets/UTFPR2.jpg'),
    duration: '2014 - 2019'
  },
  {
    name: 'Greystone College',
    course: 'International Business Management',
    location: 'Montreal, QC - Canada',
    acc: [],
    url: require('../../assets/GC.png'),
    duration: '2022 - 2023'
  }]

const Education = () => {

  useEffect (() => {

    Aos.init({duration: 2000})
    
  }, [])
  
  
  return (
    <div className="education-container">
      
      <p data-aos="fade" className='section-header' id='Education'>Education</p>
      <div data-aos="fade" className='education-card-container'>
        {education.map((education) => 
        <EducationCard name={education.name} course={education.course} location={education.location}
          acc={education.acc} url={education.url} duration={education.duration} />
        )}
      </div>      
    </div>
  )
}

export default Education