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
    acc: [
      {
      description: 'A1 International Journal Scientific ',
      url: 'https://drive.google.com/file/d/1_MLqEFk_twj8Gu0wafJcLoL1QoT03dWF/view?usp=sharing'
      },
      {
      description: 'National Congress publication', 
      url: 'https://drive.google.com/file/d/1J8hNkauotVSii1DYQi1V8cMTJqI9rrHE/view?usp=sharing'
      },

      {
      description: 'Calculus tutor for 1 year', 
      url: null
      },
      {
      description: 'Linear Algebra and Analytic Geometry tutor 0,5 year',
      url: null
      }
    
    ],
    duration: '2014 - 2019'
  }
  ,
  {
    name: 'Greystone College',
    course: 'International Business Management',
    location: 'Montreal, QC - Canada',
    acc: [],
    duration: '2022 - 2023'
  }

]

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
          acc={education.acc} duration={education.duration} />
        )}
      </div>      
    </div>
  )
}

export default Education