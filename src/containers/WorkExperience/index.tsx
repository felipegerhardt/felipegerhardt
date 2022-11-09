import React, {useEffect} from 'react';
import './index.css';

import Aos from 'aos'
import 'aos/dist/aos.css';

import ExperienceCard from '../../components/ExperienceCard'

const experiences = [
  {
    name: 'Apetit Serviços de Alimentação Ltda', 
    role: 'OPERATIONAL MANAGEMENT ASSISTANT',
    duration: '01/14/2019 - 07/25/2020', 
    description:<><p>Maintenance management of industrial kitchen equipments, with the following responsabilities:<br/><br/> • Maintenance control through software Neovero Supplier prospecting;<br/> • Preparation of maintenance-related documents and elaboration of maintenance-related projects;<br/> • LP gas buyer;</p></> }, 
  {
    name: 'FBR Metal', 
    role: 'PRODUCTION CONTROLLER',
    duration: ' 07/27/2020 - 16/11/2020', 
    description:<><p>Programming, planing and control of metallurgical production, with the following responsabilities:<br/><br/> • Issuance and control of production orders;<br/> • Parts design in CNC machine with AutoCAD;<br/> • Material resources and specifications control; <br/> • Shipping logistics of large equipments</p></> 
  }, 
  {
    name: 'Grupo Value', 
    role: 'PROJECT ASSISTANT',
    duration: ' 03/13/2021 - 03/24/2022', 
    description:<><p> Consultancy and audit project management with software Artia, with the following responsabilities:<br/><br/> • Projects result calculation and control; <br/> • Operation KPIs calculation; <br/> • BI dashboards creation and management (Power BI); <br/> • Quality management system implementation and control</p></>  
  }
]

const WorkExperience = () => {
  
  useEffect (() => {

    Aos.init({duration: 2000})
    
  }, [])
  
  return (
    <div className="experience__container">
      <p data-aos="fade"  className='section__header' id="Experiences">Experience</p>
        <div data-aos="fade"  className='experience__text__container'>

          {experiences.map((experience) => 
            <ExperienceCard name={experience.name} role={experience.role} duration={experience.duration} description={experience.description}/>
          )}

        </div>
      
    </div>
  )
}

export default WorkExperience