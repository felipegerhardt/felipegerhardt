import React, {useEffect} from 'react';
import './index.css';
import ProjectsCard from '../../components/ProjectsCard'

import Aos from 'aos'
import 'aos/dist/aos.css'; // You can also use <link> for styles

const projects = [
  {name: 'Unlock',
  about: 'Unlock is an NFT marketplace on Polygon blockchain using ERC-721 standard',
  images: [require('../../assets/Unlock.png')],
  duration: 'Apr/2022 - Present',
  url: 'https://www.figma.com/proto/Gi3d8w4V8tCzeSVRIbH52V/MVP?node-id=237%3A1280&scaling=scale-down-width&page-id=0%3A1&starting-point-node-id=237%3A1280&hide-ui=1'},

  {name: 'L-earn',
  about: 'L-earn is a gamified learning platform that connects tutors to students with goals and tutoring subjects well specified in an On Demand platform. Framework React Native',
  images: [require('../../assets/learn_ss1.jpg'), require('../../assets/learn_ss2.jpg')],
  duration: 'Aug/2021 - Present',
  url: 'https://github.com/felipegerhardt/Learn.public',
  }, 
  {name: 'Kinematics of a space robot',
  about: 'In this repo I analyzed the kinematics of a space robot under different gravity conditions with Sympy, Scipy, Numpy and Pydy Python libraries.',
  images: [require('../../assets/KOSR.png'), require('../../assets/KOSR_gif1.gif'), require('../../assets/KOSR_gif2.gif')],
  duration: 'Jan/2021 - Mar/2021',
  url: 'https://github.com/felipegerhardt/kinematics-of-a-space-robot'
  }]

const Projects = () => {

  
  useEffect (() => {

    Aos.init({duration: 2000})
    
  }, [])

  return (
    <div className='containerProjects'>
      <p data-aos="fade" className='section__header' id='Projects'> Projects </p>
    
      <div className="projects__card__container">
        {projects.map((project:any) => 
          <div className="one__project__container">
            <ProjectsCard project={project} />

            {/* Unefficient coding below */}
            
            {project.name === "L-earn" 
            ? 
            <div className='image__container'>
              <img alt='L-earn print screen' data-aos="fade-left" src={project.images[0]} width={200} className='Learn_img' />
              <img alt='L-earn print screen' data-aos="fade-left" src={project.images[1]} width={200} className='Learn_img' />
            </div> 
            :
            project.name== 'Kinematics of a space robot' 
            ?
            <div className='image__container'>
              <div className="KOSR_container">
                <img alt='KOST print screen' data-aos="fade-left" src={project.images[0]} width={300} height={300} className='KOSR_MD' />
                <div className="KOSR_gifs_container">
                  <img alt='KOST' data-aos="fade-left" src={project.images[1]} width={150} height={(331/600)*(150)} className='KOSR_gifs1'/>
                  <img alt='KOST' data-aos="fade-left" src={project.images[2]} width={150} height={(331/600)*(150)} className='KOSR_gifs2'/>
                </div>
              </div>
            </div>
            : 
            
            <div className='image__container'> 
              <img className='Unlock' alt='Unlock' data-aos="fade-left" src={project.images[0]} width={320} height={500} />
                
            </div>
          }
          </div>
        )}
      </div>

    </div>
  )
}

export default Projects