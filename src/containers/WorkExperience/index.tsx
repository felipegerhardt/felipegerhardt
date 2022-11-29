import React, {useEffect} from 'react';
import './index.css';

import Aos from 'aos'
import 'aos/dist/aos.css';

import ExperienceCard from '../../components/ExperienceCard'

const experiences = [
  {
    name: 'Apetit Serviços de Alimentação Ltda', 
    role: 'OPERATIONAL MANAGEMENT ASSISTANT',
    duration: 'jan/2019 - jul/2020', 
    description: 'Maintenance management of industrial kitchen equipments' 
  }, 
  {
    name: 'FBR Metal', 
    role: 'PRODUCTION CONTROLLER',
    duration: ' jul/2020 - nov/2020', 
    description: 'Programming, planing and control of metallurgical production'
  }, 
  {
    name: 'Grupo Value', 
    role: 'PROJECT ASSISTANT',
    duration: ' mar/2021 - mar/2022', 
    description: 'Consultancy and audit project management with software Artia'
  }
]

const WorkExperience = () => {
  
  useEffect (() => {

    Aos.init({duration: 2000})
    
  }, [])
  
  return (
    <div className="experience-container">
      <p data-aos="fade"  className='section__header' id="Experiences">Experience</p>
        <div data-aos="fade"  className='experience-text-container'>

          {experiences.map((experience) => 
            <ExperienceCard name={experience.name} role={experience.role} duration={experience.duration} description={experience.description}/>
          )}

        </div>
      
    </div>
  )
}

export default WorkExperience