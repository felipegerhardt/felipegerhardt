import React, {useEffect} from 'react';
import './index.css';

import Aos from 'aos'
import 'aos/dist/aos.css';

import EducationCard from '../../components/EducationCard'

const education = [
  {
    name: 'Universidade Tecnológica Federal do Paraná',
    course: 'Mechanical Engineering',
    location: 'Londrina, Paraná - Brazil',
    acc: <><p> • A1 International Journal Scientific <a style={{color: 'blue'}} onClick={() => window.open('https://www.sciencedirect.com/science/article/abs/pii/S2352152X21006769')}>publication</a>;
    <br/> • National Congress <a style={{color: 'blue'}} onClick={() => window.open('https://abcm.org.br/uploads/Anais%20do%20XXV%20CREEM%20vol.1.pdf#page=360')}>publication</a> ;
    <br/> • Calculus tutor for 1 year;
    <br/> • Linear Algebra and Analytic Geometry tutor 0,5 year;</p></>,
    url: require('../../assets/UTFPR2.jpg'),
    duration: '2014 - 2019'
  },
  {
    name: 'Greystone College',
    course: 'International Business Management',
    location: 'Montreal, QC - Canada',
    acc: 'N/A',
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